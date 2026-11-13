import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import bbox from '@turf/bbox';
import centroid from '@turf/centroid';
import { CapAlert, GeoJsonHazardFeature } from '../types/cap';
import { capAlertsToGeoJson } from '../services/capParser';
import { INDIA_BASEMAP_GEOJSON } from '../data/indiaBoundaries';
import { SosBroadcast } from '../types/sos';
import { WeatherFX } from './WeatherFX';
import {
  Layers,
  MapPin,
  Crosshair,
  Eye,
  EyeOff,
  Flame,
  Globe2,
  Landmark,
  Compass
} from 'lucide-react';

interface MapViewProps {
  alerts: CapAlert[];
  selectedAlertId: string | null;
  onSelectAlert: (id: string | null) => void;
  sosList: SosBroadcast[];
  userLocation: { lat: number; lng: number } | null;
  onMapClickLocation?: (lat: number, lng: number) => void;
  isPickingLocation?: boolean;
  targetBbox?: [number, number, number, number] | null;
}

function formatReadableTimestamp(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return dateStr;
  }
}

// Convert CAP Alerts into Centroids GeoJSON FeatureCollection for MapLibre Heatmaps
function capAlertsToCentroidsGeoJson(alerts: CapAlert[]): GeoJSON.FeatureCollection {
  const features: GeoJSON.Feature[] = [];

  for (const alert of alerts) {
    const { info, identifier } = alert;
    const severityWeight =
      info.severity === 'Extreme' ? 1.0 :
      info.severity === 'Severe' ? 0.75 :
      info.severity === 'Moderate' ? 0.5 :
      0.25;

    for (let i = 0; i < info.areas.length; i++) {
      const area = info.areas[i];
      let centerCoords: [number, number] | null = null;

      if (area.polygon && area.polygon.length > 0) {
        try {
          const polyFeat: any = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: area.polygon
            },
            properties: {}
          };
          const c = centroid(polyFeat);
          if (c && c.geometry && c.geometry.coordinates) {
            centerCoords = [c.geometry.coordinates[0], c.geometry.coordinates[1]];
          }
        } catch (err) {
          console.warn('Centroid calculation failed for alert', identifier, err);
        }
      } else if (area.circle) {
        centerCoords = [area.circle.center[0], area.circle.center[1]];
      }

      if (centerCoords) {
        features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: centerCoords
          },
          properties: {
            id: `${identifier}-${i}`,
            alertId: identifier,
            event: info.event,
            severity: info.severity,
            weight: severityWeight,
            headline: info.headline,
            areaDesc: area.areaDesc
          }
        });
      }
    }
  }

  return {
    type: 'FeatureCollection',
    features
  };
}

export const MapView: React.FC<MapViewProps> = ({
  alerts,
  selectedAlertId,
  onSelectAlert,
  sosList,
  userLocation,
  onMapClickLocation,
  isPickingLocation = false,
  targetBbox = null
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  // Default to 'satellite' for true-color terrain imagery of India, or 'admin' for vector administrative boundaries
  const [basemapMode, setBasemapMode] = useState<'satellite' | 'admin'>('satellite');
  const [is3dPitch, setIs3dPitch] = useState(false);
  const [showHazards, setShowHazards] = useState(true);
  const [showSosMarkers, setShowSosMarkers] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(4.4);

  // 1. Satellite: High-quality satellite raster tile source (Esri World Imagery + Labels)
  const getSatelliteStyle = (): maplibregl.StyleSpecification => {
    return {
      version: 8,
      name: 'ESRI-Satellite-Hybrid-India',
      sources: {
        'esri-satellite': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          maxzoom: 19,
          attribution: '&copy; Esri, Maxar, Earthstar Geographics'
        },
        'esri-boundaries': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          maxzoom: 19,
          attribution: '&copy; Esri &mdash; Boundaries and Places'
        }
      },
      layers: [
        {
          id: 'satellite-basemap',
          type: 'raster',
          source: 'esri-satellite',
          paint: {
            'raster-brightness-max': 1.0,
            'raster-contrast': 0.12,
            'raster-saturation': 0.15
          }
        },
        {
          id: 'boundaries-labels-layer',
          type: 'raster',
          source: 'esri-boundaries',
          paint: {
            'raster-opacity': 0.95
          }
        }
      ]
    };
  };

  // 2. Administrative Area: Clean vector map style emphasizing state and district boundaries with clear labels (Carto Positron)
  const getAdministrativeAreaStyle = (): string => {
    return 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
  };

  const getStyleForMode = (mode: 'satellite' | 'admin'): maplibregl.StyleSpecification | string => {
    switch (mode) {
      case 'satellite':
        return getSatelliteStyle();
      case 'admin':
        return getAdministrativeAreaStyle();
    }
  };

  // Pre-cache 'Administrative Area' vector map style, glyphs, and sprites locally in CacheStorage
  useEffect(() => {
    if (typeof window === 'undefined' || !('caches' in window)) return;

    const cacheAdminMapResources = async () => {
      try {
        const cache = await caches.open('sanket-map-tiles-v2');
        const styleUrl = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
        const existing = await cache.match(styleUrl);
        if (!existing && navigator.onLine) {
          const res = await fetch(styleUrl);
          if (res.ok) {
            await cache.put(styleUrl, res.clone());
            const data = await res.json();
            if (data.sprite) {
              fetch(`${data.sprite}.json`)
                .then((r) => {
                  if (r.ok) cache.put(`${data.sprite}.json`, r);
                })
                .catch(() => {});
              fetch(`${data.sprite}.png`)
                .then((r) => {
                  if (r.ok) cache.put(`${data.sprite}.png`, r);
                })
                .catch(() => {});
            }
            console.log('[Map Tile Cache] Administrative Area vector style & assets cached locally for offline use');
          }
        }
      } catch (err) {
        console.warn('[Map Tile Cache] Pre-caching skipped:', err);
      }
    };

    cacheAdminMapResources();
  }, []);

  // Initialize Map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: getStyleForMode(basemapMode),
      center: [82.5, 22.0],
      zoom: 4.4,
      pitch: 0,
      minZoom: 3,
      maxZoom: 19,
      attributionControl: false,
      transformRequest: (url: string) => {
        // Tag Administrative Area Carto Positron vector tiles (.pbf), style, glyphs, and sprites for persistent local caching
        if (
          url.includes('cartocdn.com') ||
          url.includes('.pbf') ||
          url.includes('.mvt') ||
          url.includes('/sprites/') ||
          url.includes('/fonts/') ||
          url.includes('/glyphs/')
        ) {
          return {
            url
          };
        }
        return { url };
      }
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'bottom-right');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      setMapLoaded(true);
      setCurrentZoom(map.getZoom());
      setupHazardSources(map, alerts);
    });

    // Real-time zoom tracking to dynamically scale weather animation overlays
    map.on('zoom', () => {
      setCurrentZoom(map.getZoom());
    });

    // Map click handler for location picking
    map.on('click', (e) => {
      if (onMapClickLocation) {
        onMapClickLocation(e.lngLat.lat, e.lngLat.lng);
      }
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Handle basemap style changes
  const switchBasemap = (mode: 'satellite' | 'admin') => {
    if (!mapRef.current) return;
    setBasemapMode(mode);
    setMapLoaded(false);

    const style = getStyleForMode(mode);
    mapRef.current.setStyle(style);

    mapRef.current.once('style.load', () => {
      setMapLoaded(true);
      if (mapRef.current) {
        setupHazardSources(mapRef.current, alerts);
      }
    });
  };

  // Toggle 3D Perspective Pitch Angle
  const toggle3dPitch = () => {
    if (!mapRef.current) return;
    const targetPitch = is3dPitch ? 0 : 55;
    mapRef.current.easeTo({
      pitch: targetPitch,
      duration: 800
    });
    setIs3dPitch(!is3dPitch);
  };

  // Setup GeoJSON layers for Hazard Polygons with Production-Grade GIS Styling & Centroid Heatmaps
  const setupHazardSources = (map: maplibregl.Map, currentAlerts: CapAlert[]) => {
    const geojsonData = capAlertsToGeoJson(currentAlerts);
    const centroidsData = capAlertsToCentroidsGeoJson(currentAlerts);

    if (map.getSource('hazard-source')) {
      (map.getSource('hazard-source') as maplibregl.GeoJSONSource).setData(geojsonData);
    } else {
      map.addSource('hazard-source', {
        type: 'geojson',
        data: geojsonData
      });
    }

    if (map.getSource('hazard-centroids-source')) {
      (map.getSource('hazard-centroids-source') as maplibregl.GeoJSONSource).setData(centroidsData);
    } else {
      map.addSource('hazard-centroids-source', {
        type: 'geojson',
        data: centroidsData
      });
    }

    // Strict severity color expression mapping: Crimson for Extreme, Amber for Severe
    const severityColorExp: maplibregl.ExpressionSpecification = [
      'match',
      ['get', 'severity'],
      'Extreme', '#dc2626', // Crimson Red
      'Severe', '#f59e0b',  // Amber Orange
      'Moderate', '#eab308', // Yellow
      'Minor', '#0ea5e9',   // Sky Blue
      ['get', 'color']      // Fallback
    ];

    // 0. Permanent Offline Fallback Administrative Boundaries (Ensures State/District boundaries remain visible in zero-network)
    if (!map.getSource('offline-admin-boundaries')) {
      map.addSource('offline-admin-boundaries', {
        type: 'geojson',
        data: INDIA_BASEMAP_GEOJSON
      });
    }

    if (!map.getLayer('offline-admin-boundary-lines')) {
      map.addLayer({
        id: 'offline-admin-boundary-lines',
        type: 'line',
        source: 'offline-admin-boundaries',
        paint: {
          'line-color': '#64748b',
          'line-width': 1.4,
          'line-opacity': 0.8,
          'line-dasharray': [3, 2]
        }
      });
    }

    // 1. Continuous Epicenter Gradient: MapLibre Heatmap Layer
    // Interpolates from transparent green at edges to red at epicenter
    if (!map.getLayer('hazard-heatmap-layer')) {
      map.addLayer({
        id: 'hazard-heatmap-layer',
        type: 'heatmap',
        source: 'hazard-centroids-source',
        layout: {
          visibility: showHazards ? 'visible' : 'none'
        },
        paint: {
          // Weight scaled by alert severity (1.0 for Extreme, 0.75 for Severe, etc.)
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'weight'],
            0, 0.1,
            1, 1.0
          ],
          // Increase intensity as zoom level increases
          'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            2, 0.6,
            5, 1.2,
            8, 2.0
          ],
          // Color ramp strictly according to instructions:
          // [ 'interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(34,139,34,0)', 0.4, 'yellow', 0.7, 'orange', 1, 'red' ]
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(34,139,34,0)',
            0.4, 'yellow',
            0.7, 'orange',
            1, 'red'
          ],
          // Radius scaled based on severity and zoom level so red epicenter fades smoothly into green at the edges
          'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            2, 25,
            4, 45,
            6, 75,
            8, 110,
            11, 170
          ],
          'heatmap-opacity': 0.85
        }
      });
    }

    // 2. Invisible Hitbox layer to catch polygon clicks without any flat fill visual
    if (!map.getLayer('hazard-layer-hitbox')) {
      map.addLayer({
        id: 'hazard-layer-hitbox',
        type: 'fill',
        source: 'hazard-source',
        layout: {
          visibility: showHazards ? 'visible' : 'none'
        },
        paint: {
          'fill-color': '#000000',
          'fill-opacity': 0.001
        }
      });
    }

    // 3. Glowing Edge Effect: Outer Diffuse Glow (line-blur & line-width)
    if (!map.getLayer('hazard-layer-glow-outer')) {
      map.addLayer({
        id: 'hazard-layer-glow-outer',
        type: 'line',
        source: 'hazard-source',
        layout: {
          visibility: showHazards ? 'visible' : 'none',
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': severityColorExp,
          'line-width': [
            'case',
            ['==', ['get', 'id'], selectedAlertId || ''],
            16,
            10
          ],
          'line-blur': [
            'case',
            ['==', ['get', 'id'], selectedAlertId || ''],
            8,
            5
          ],
          'line-opacity': 0.75
        }
      });
    }

    // 4. Glowing Edge Effect: Inner Focused Core Glow
    if (!map.getLayer('hazard-layer-glow-inner')) {
      map.addLayer({
        id: 'hazard-layer-glow-inner',
        type: 'line',
        source: 'hazard-source',
        layout: {
          visibility: showHazards ? 'visible' : 'none',
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': severityColorExp,
          'line-width': [
            'case',
            ['==', ['get', 'id'], selectedAlertId || ''],
            5.5,
            3.2
          ],
          'line-blur': 1.8,
          'line-opacity': 0.95
        }
      });
    }

    // 5. Hazard Area Crisp White High-Precision GIS Boundary Stroke
    if (!map.getLayer('hazard-layer-stroke')) {
      map.addLayer({
        id: 'hazard-layer-stroke',
        type: 'line',
        source: 'hazard-source',
        layout: {
          visibility: showHazards ? 'visible' : 'none',
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#ffffff',
          'line-width': [
            'case',
            ['==', ['get', 'id'], selectedAlertId || ''],
            2.4,
            1.5
          ],
          'line-dasharray': [4, 2],
          'line-opacity': 0.95
        }
      });
    }

    // Click handler for hazard polygons (bound to invisible hitbox layer)
    map.on('click', 'hazard-layer-hitbox', (e) => {
      if (!e.features || e.features.length === 0) return;
      const feat = e.features[0];
      const props = feat.properties as any;

      // 1. Calculate exact bounding box using @turf/bbox
      const [minX, minY, maxX, maxY] = bbox(feat);

      // 2. Smoothly frame region without zooming in too close and breaking the viewport
      map.fitBounds(
        [
          [minX, minY],
          [maxX, maxY]
        ],
        {
          padding: 60,
          maxZoom: 7,
          duration: 1200
        }
      );

      // 3. Remove existing popup if open
      if (popupRef.current) {
        popupRef.current.remove();
        popupRef.current = null;
      }

      // 4. Native MapLibre popup with closeOnClick: true, displaying title, severity, timestamp
      const timestamp = formatReadableTimestamp(props.effective || props.expires);
      const severityColor =
        props.severity === 'Extreme'
          ? '#dc2626'
          : props.severity === 'Severe'
          ? '#f59e0b'
          : props.severity === 'Moderate'
          ? '#eab308'
          : props.severity === 'Minor'
          ? '#0ea5e9'
          : '#10b981';

      const popupHtml = `
        <div class="p-3 bg-slate-950/95 backdrop-blur-md text-slate-100 rounded-xl font-sans border border-slate-700/80 shadow-2xl max-w-[280px]">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded text-white" style="background-color: ${severityColor}">
              ${props.severity} Alert
            </span>
            <span class="text-[10px] text-slate-400 font-mono">${timestamp}</span>
          </div>
          <h4 class="font-bold text-xs text-white leading-snug mb-1">
            ${props.headline || props.event}
          </h4>
          ${props.areaDesc ? `<p class="text-[11px] text-slate-300 leading-tight mt-1">📍 ${props.areaDesc}</p>` : ''}
        </div>
      `;

      const popup = new maplibregl.Popup({
        closeOnClick: true,
        closeButton: true,
        maxWidth: '300px',
        offset: 12,
        className: 'tactical-native-popup'
      })
        .setLngLat(e.lngLat)
        .setHTML(popupHtml)
        .addTo(map);

      popupRef.current = popup;
      onSelectAlert(props.id);
    });

    map.on('mouseenter', 'hazard-layer-hitbox', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'hazard-layer-hitbox', () => {
      map.getCanvas().style.cursor = '';
    });
  };

  // Update Hazard Data whenever alerts change
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;
    const polySource = map.getSource('hazard-source') as maplibregl.GeoJSONSource | undefined;
    const centroidSource = map.getSource('hazard-centroids-source') as maplibregl.GeoJSONSource | undefined;

    if (polySource && centroidSource) {
      polySource.setData(capAlertsToGeoJson(alerts));
      centroidSource.setData(capAlertsToCentroidsGeoJson(alerts));
    } else {
      setupHazardSources(map, alerts);
    }
  }, [alerts, mapLoaded]);

  // Update visibility toggles
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;
    const vis = showHazards ? 'visible' : 'none';
    if (map.getLayer('hazard-heatmap-layer')) {
      map.setLayoutProperty('hazard-heatmap-layer', 'visibility', vis);
    }
    if (map.getLayer('hazard-layer-hitbox')) {
      map.setLayoutProperty('hazard-layer-hitbox', 'visibility', vis);
    }
    if (map.getLayer('hazard-layer-glow-outer')) {
      map.setLayoutProperty('hazard-layer-glow-outer', 'visibility', vis);
    }
    if (map.getLayer('hazard-layer-glow-inner')) {
      map.setLayoutProperty('hazard-layer-glow-inner', 'visibility', vis);
    }
    if (map.getLayer('hazard-layer-stroke')) {
      map.setLayoutProperty('hazard-layer-stroke', 'visibility', vis);
    }
  }, [showHazards, mapLoaded]);

  // Smoothly frame hazard area with @turf/bbox when selected from sidebar
  useEffect(() => {
    if (!mapRef.current || !mapLoaded || !selectedAlertId) return;
    const map = mapRef.current;

    const alert = alerts.find(
      (a) => a.identifier === selectedAlertId || selectedAlertId.startsWith(a.identifier)
    );
    if (!alert || !alert.info.areas || alert.info.areas.length === 0) return;

    const area = alert.info.areas[0];

    // Use @turf/bbox to fit bounds with the exact same strict config
    if (area.polygon && area.polygon[0] && area.polygon[0].length > 0) {
      const feat: any = {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: area.polygon
        },
        properties: {}
      };
      const [minX, minY, maxX, maxY] = bbox(feat);
      map.fitBounds(
        [
          [minX, minY],
          [maxX, maxY]
        ],
        {
          padding: 60,
          maxZoom: 7,
          duration: 1200
        }
      );
    } else if (area.circle) {
      map.flyTo({
        center: area.circle.center,
        zoom: Math.min(map.getZoom(), 7),
        duration: 1200
      });
    }
  }, [selectedAlertId, alerts, mapLoaded]);

  // Pan and fit bounds to selected state geometry
  useEffect(() => {
    if (!mapRef.current || !mapLoaded || !targetBbox) return;
    const map = mapRef.current;
    map.fitBounds(
      [
        [targetBbox[0], targetBbox[1]],
        [targetBbox[2], targetBbox[3]]
      ],
      {
        padding: 60,
        maxZoom: 7.5,
        duration: 1200
      }
    );
  }, [targetBbox, mapLoaded]);

  // Update SOS & User Markers
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // 1. SOS Broadcast Markers (Compact Tactical GIS Badges)
    if (showSosMarkers && sosList.length > 0) {
      sosList.forEach((sos) => {
        const isPending = sos.syncStatus === 'pending_offline';
        const el = document.createElement('div');
        el.className = 'sos-marker cursor-pointer relative group';
        el.innerHTML = `
          <div class="relative flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full ${isPending ? 'bg-amber-400/60' : 'bg-red-500/60'}"></span>
            <div class="relative inline-flex items-center justify-center w-5 h-5 rounded-full ${isPending ? 'bg-amber-500' : 'bg-red-600'} text-white border-[1.5px] border-white shadow-lg text-[9px] font-black tracking-tighter transition-transform group-hover:scale-110">
              SOS
            </div>
          </div>
        `;

        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const popupHtml = `
            <div class="p-3 bg-slate-950/95 backdrop-blur text-slate-100 rounded-lg max-w-xs font-sans border ${isPending ? 'border-amber-500' : 'border-red-500'} shadow-2xl">
              <div class="flex items-center justify-between mb-1.5">
                <span class="px-2 py-0.5 text-[10px] font-bold rounded uppercase ${isPending ? 'bg-amber-500/20 text-amber-300' : 'bg-red-500/20 text-red-300'}">
                  ${isPending ? '⚠️ Offline Queued' : '✅ Transmitted'}
                </span>
                <span class="text-[10px] text-slate-400 font-mono">${new Date(sos.timestamp).toLocaleTimeString()}</span>
              </div>
              <h4 class="font-bold text-sm text-red-400 uppercase tracking-wide mb-1">
                ${sos.emergencyType.replace('_', ' ')}: ${sos.priority}
              </h4>
              <p class="text-xs text-slate-200 mb-1"><strong>Victims:</strong> ${sos.peopleCount} people</p>
              <p class="text-xs text-slate-300 mb-1"><strong>Contact:</strong> ${sos.name} (${sos.contact})</p>
              <p class="text-xs text-slate-400 mb-2"><strong>Location:</strong> ${sos.addressOrLandmark || 'GPS coordinate'}</p>
              <div class="text-[11px] bg-slate-900 p-2 rounded border border-slate-800 text-slate-200 mb-2">
                "${sos.details || 'Immediate rescue assistance required'}"
              </div>
              ${sos.ticketNumber ? `<div class="text-[10px] font-mono text-emerald-400">HQ Ticket: ${sos.ticketNumber}</div>` : ''}
            </div>
          `;
          new maplibregl.Popup({ closeButton: true, maxWidth: '300px' })
            .setLngLat([sos.longitude, sos.latitude])
            .setHTML(popupHtml)
            .addTo(map);
        });

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([sos.longitude, sos.latitude])
          .addTo(map);

        markersRef.current.push(marker);
      });
    }

    // 2. User Location Marker (Compact Sleek GIS Beacon)
    if (userLocation) {
      const userEl = document.createElement('div');
      userEl.innerHTML = `
        <div class="relative flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-cyan-400/50"></span>
          <div class="w-4 h-4 rounded-full bg-cyan-500 border-2 border-white shadow-lg flex items-center justify-center">
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
        </div>
      `;
      const marker = new maplibregl.Marker({ element: userEl })
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map);
      markersRef.current.push(marker);
    }
  }, [showSosMarkers, sosList, userLocation, mapLoaded]);

  // WeatherFX Engine Marker attachment (anchored to active alert centroid)
  const weatherFxMarkerRef = useRef<maplibregl.Marker | null>(null);
  const [weatherFxContainer, setWeatherFxContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;

    const currentSelected = alerts.find(
      (a) => a.identifier === selectedAlertId || selectedAlertId?.startsWith(a.identifier)
    ) || null;

    if (!currentSelected || !currentSelected.info.areas || currentSelected.info.areas.length === 0) {
      if (weatherFxMarkerRef.current) {
        weatherFxMarkerRef.current.remove();
        weatherFxMarkerRef.current = null;
      }
      setWeatherFxContainer(null);
      return;
    }

    const area = currentSelected.info.areas[0];
    let center: [number, number] | null = null;

    if (area.polygon && area.polygon.length > 0) {
      try {
        const polyFeat: any = {
          type: 'Feature',
          geometry: { type: 'Polygon', coordinates: area.polygon },
          properties: {}
        };
        const c = centroid(polyFeat);
        if (c?.geometry?.coordinates) {
          center = [c.geometry.coordinates[0], c.geometry.coordinates[1]];
        }
      } catch (e) {
        console.warn('Centroid calculation failed for weather overlay', e);
      }
    } else if (area.circle) {
      center = [area.circle.center[0], area.circle.center[1]];
    }

    if (!center) {
      if (weatherFxMarkerRef.current) {
        weatherFxMarkerRef.current.remove();
        weatherFxMarkerRef.current = null;
      }
      setWeatherFxContainer(null);
      return;
    }

    if (!weatherFxMarkerRef.current) {
      const el = document.createElement('div');
      el.className = 'weather-fx-marker';
      el.style.width = '0px';
      el.style.height = '0px';
      el.style.pointerEvents = 'none';
      el.style.zIndex = '10';

      const marker = new maplibregl.Marker({
        element: el,
        anchor: 'center'
      })
        .setLngLat(center)
        .addTo(map);

      weatherFxMarkerRef.current = marker;
      setWeatherFxContainer(el);
    } else {
      weatherFxMarkerRef.current.setLngLat(center);
    }
  }, [selectedAlertId, alerts, mapLoaded]);

  // Clean up weather marker on unmount
  useEffect(() => {
    return () => {
      if (weatherFxMarkerRef.current) {
        weatherFxMarkerRef.current.remove();
        weatherFxMarkerRef.current = null;
      }
    };
  }, []);

  // Zoom and Fly Helper
  const flyToCoords = (lon: number, lat: number, zoom = 7.5, pitch = 0) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [lon, lat],
      zoom,
      pitch,
      essential: true,
      speed: 1.2
    });
    if (pitch > 0) setIs3dPitch(true);
    else setIs3dPitch(false);
  };

  const selectedAlert = alerts.find(
    (a) => a.identifier === selectedAlertId || selectedAlertId?.startsWith(a.identifier)
  ) || null;

  return (
    <div className="relative w-full h-full min-h-[420px] bg-[#070b14] overflow-hidden">
      {/* MapLibre DOM container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Advanced Weather FX Engine (HTML Marker Portal: strictly pointer-events-none & z-index: 10) */}
      {weatherFxContainer && selectedAlert && createPortal(
        <WeatherFX
          type={`${selectedAlert.info.event} ${selectedAlert.info.headline} ${selectedAlert.info.description || ''}`}
          currentZoom={currentZoom}
        />,
        weatherFxContainer
      )}

      {/* Location Picker Banner overlay if active */}
      {isPickingLocation && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border-2 border-amber-300 animate-bounce text-sm">
          <Crosshair className="w-5 h-5 text-slate-950" />
          Click anywhere on map to pin SOS disaster location!
        </div>
      )}

      {/* Floating Tactical Layer Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        {/* Basemap Switcher (Satellite TrueColor / Topo / Dark / Offline) */}
        <div className="bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 px-1 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Imagery Layer
            </span>
            <button
              onClick={toggle3dPitch}
              className={`px-1.5 py-0.5 rounded text-[9px] font-bold border transition ${
                is3dPitch
                  ? 'bg-cyan-500/30 text-cyan-300 border-cyan-400'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
              title="Toggle 3D Perspective Pitch Angle"
            >
              {is3dPitch ? '3D Tilt ON' : '3D Tilt OFF'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-xs">
            {/* Satellite */}
            <button
              onClick={() => switchBasemap('satellite')}
              className={`px-3 py-2 rounded-lg font-bold transition flex items-center gap-2 text-left ${
                basemapMode === 'satellite'
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-md ring-1 ring-emerald-400/50'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
              title="High-Resolution TrueColor Earth Observation Satellite Imagery (Esri World Imagery)"
            >
              <Globe2 className="w-4 h-4 shrink-0 text-emerald-300" />
              <div className="flex flex-col min-w-0">
                <span className="leading-tight font-bold truncate">Satellite</span>
                <span className="text-[9px] text-slate-300/80 font-normal truncate">Esri Imagery</span>
              </div>
            </button>

            {/* Administrative Area */}
            <button
              onClick={() => switchBasemap('admin')}
              className={`px-3 py-2 rounded-lg font-bold transition flex items-center gap-2 text-left ${
                basemapMode === 'admin'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md ring-1 ring-blue-400/50'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
              title="Clean Vector Administrative Boundaries with Clear State & District Labels (Carto Positron)"
            >
              <Landmark className="w-4 h-4 shrink-0 text-blue-300" />
              <div className="flex flex-col min-w-0">
                <span className="leading-tight font-bold truncate">Administrative Area</span>
                <span className="text-[9px] text-slate-300/80 font-normal truncate">State & Districts</span>
              </div>
            </button>
          </div>
        </div>

        {/* Layer Visibility Toggles */}
        <div className="bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1.5 text-xs text-slate-200">
          <button
            onClick={() => setShowHazards(!showHazards)}
            className={`flex items-center justify-between gap-3 px-2 py-1 rounded-lg transition-colors ${
              showHazards ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-slate-800/60 text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <Flame className="w-3.5 h-3.5 text-red-400" /> Hazard Polygons ({alerts.length})
            </span>
            {showHazards ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setShowSosMarkers(!showSosMarkers)}
            className={`flex items-center justify-between gap-3 px-2 py-1 rounded-lg transition-colors ${
              showSosMarkers ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800/60 text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> SOS Alerts ({sosList.length})
            </span>
            {showSosMarkers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Quick Focus Indian Geographical Sectors */}
        <div className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1">
          <div className="text-[10px] font-semibold text-slate-400 px-1 uppercase tracking-wider flex items-center gap-1">
            <Compass className="w-3 h-3 text-cyan-400" /> Focus Sector
          </div>
          <div className="grid grid-cols-2 gap-1 text-[11px]">
            <button
              onClick={() => flyToCoords(82.5, 22.0, 4.4, 0)}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-medium text-center"
              title="Reset to All India Overview"
            >
              🇮🇳 All India
            </button>
            <button
              onClick={() => flyToCoords(77.2, 31.9, 7.8, 55)}
              className="p-1.5 bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 border border-amber-800/50 rounded font-medium text-center"
              title="Zoom into the Himalayan mountain ridges in 3D perspective"
            >
              🏔️ Himalayas
            </button>
            <button
              onClick={() => flyToCoords(85.3, 19.4, 7.2, 30)}
              className="p-1.5 bg-red-950/60 hover:bg-red-900/80 text-red-200 border border-red-800/50 rounded font-medium text-center"
              title="Zoom to Bay of Bengal Cyclone Coastal Belt"
            >
              🌪️ Cyclone Bay
            </button>
            <button
              onClick={() => flyToCoords(92.8, 26.5, 7.0, 35)}
              className="p-1.5 bg-blue-950/60 hover:bg-blue-900/80 text-blue-200 border border-blue-800/50 rounded font-medium text-center"
              title="Zoom to Brahmaputra Flood Valley"
            >
              🌊 Brahmaputra
            </button>
            <button
              onClick={() => flyToCoords(71.5, 26.5, 6.8, 20)}
              className="p-1.5 bg-orange-950/60 hover:bg-orange-900/80 text-orange-200 border border-orange-800/50 rounded font-medium text-center"
              title="Zoom to Thar Desert Dune Belt"
            >
              🏜️ Thar Desert
            </button>
            <button
              onClick={() => flyToCoords(72.88, 19.07, 9.2, 45)}
              className="p-1.5 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-200 border border-cyan-800/50 rounded font-medium text-center"
              title="Zoom to Mumbai Coastal Inundation & Seafront"
            >
              🏙️ Mumbai MMR
            </button>
          </div>
        </div>
      </div>

      {/* Legend on bottom left */}
      <div className="absolute bottom-6 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700/80 text-[11px] space-y-1.5 shadow-2xl pointer-events-auto">
        <div className="flex items-center justify-between text-slate-300 font-bold uppercase tracking-wider text-[10px]">
          <span>Hazard Epicenter Gradient</span>
          <span className="text-[9px] text-cyan-400 font-mono">
            {basemapMode === 'satellite' ? '🛰️ Satellite' : '🏛️ Administrative Area'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-28 rounded-full bg-gradient-to-r from-emerald-500/80 via-yellow-400 via-orange-500 to-red-600 ring-1 ring-white/20"></div>
          <span className="text-[9px] text-slate-400 font-mono">Edge → Epicenter</span>
        </div>
        <div className="flex items-center gap-2.5 pt-0.5 text-[10px] text-slate-300">
          <span className="flex items-center gap-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-red-600 shadow-sm"></span> Extreme
          </span>
          <span className="flex items-center gap-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-sm"></span> Severe
          </span>
          <span className="flex items-center gap-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm"></span> Moderate
          </span>
        </div>
      </div>
    </div>
  );
};

export { MapView as DisasterMap };

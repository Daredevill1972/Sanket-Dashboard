import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { CapAlert, GeoJsonHazardFeature } from '../types/cap';
import { capAlertsToGeoJson } from '../services/capParser';
import { INDIA_BASEMAP_GEOJSON } from '../data/indiaBoundaries';
import { DISASTER_SHELTERS } from '../data/shelters';
import { SosBroadcast } from '../types/sos';
import {
  Layers,
  MapPin,
  Crosshair,
  Maximize2,
  Navigation,
  Shield,
  Eye,
  EyeOff,
  Flame,
  WifiOff
} from 'lucide-react';

interface MapViewProps {
  alerts: CapAlert[];
  selectedAlertId: string | null;
  onSelectAlert: (id: string | null) => void;
  sosList: SosBroadcast[];
  userLocation: { lat: number; lng: number } | null;
  onMapClickLocation?: (lat: number, lng: number) => void;
  isPickingLocation?: boolean;
}

export const MapView: React.FC<MapViewProps> = ({
  alerts,
  selectedAlertId,
  onSelectAlert,
  sosList,
  userLocation,
  onMapClickLocation,
  isPickingLocation = false
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  const [basemapMode, setBasemapMode] = useState<'carto' | 'osm' | 'offline'>('offline');
  const [showShelters, setShowShelters] = useState(true);
  const [showHazards, setShowHazards] = useState(true);
  const [showSosMarkers, setShowSosMarkers] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  // High-reliability offline base style containing embedded GeoJSON for India
  const getOfflineMapStyle = (): maplibregl.StyleSpecification => {
    return {
      version: 8,
      name: 'Rakshak-Offline-Tactical',
      sources: {
        'india-basemap': {
          type: 'geojson',
          data: INDIA_BASEMAP_GEOJSON
        }
      },
      layers: [
        {
          id: 'background',
          type: 'background',
          paint: {
            'background-color': '#060a12' // Tactical deep ocean/space navy
          }
        },
        {
          id: 'india-landmass-fill',
          type: 'fill',
          source: 'india-basemap',
          filter: ['==', ['get', 'type'], 'country'],
          paint: {
            'fill-color': '#111827',
            'fill-opacity': 0.95
          }
        },
        {
          id: 'india-regions-fill',
          type: 'fill',
          source: 'india-basemap',
          filter: ['==', ['get', 'type'], 'region'],
          paint: {
            'fill-color': '#1e293b',
            'fill-opacity': 0.6
          }
        },
        {
          id: 'india-landmass-stroke',
          type: 'line',
          source: 'india-basemap',
          paint: {
            'line-color': '#38bdf8',
            'line-width': 1.8,
            'line-opacity': 0.85
          }
        }
      ]
    };
  };

  const getOnlineCartoStyle = (): string => {
    return 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
  };

  const getOnlineOsmStyle = (): maplibregl.StyleSpecification => {
    return {
      version: 8,
      sources: {
        'osm-tiles': {
          type: 'raster',
          tiles: [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap contributors'
        }
      },
      layers: [
        {
          id: 'osm-layer',
          type: 'raster',
          source: 'osm-tiles',
          paint: {
            'raster-brightness-min': 0.2,
            'raster-brightness-max': 0.8,
            'raster-contrast': 0.2
          }
        }
      ]
    };
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    // Center of India: Lat ~22.5937, Lon ~82.9629
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: basemapMode === 'offline' ? getOfflineMapStyle() : (basemapMode === 'carto' ? getOnlineCartoStyle() : getOnlineOsmStyle()),
      center: [82.5, 22.0],
      zoom: 4.3,
      minZoom: 3,
      maxZoom: 17,
      attributionControl: false
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'bottom-right');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      setMapLoaded(true);
      setupHazardSources(map, alerts);
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

  // Handle basemap changes
  const switchBasemap = (mode: 'carto' | 'osm' | 'offline') => {
    if (!mapRef.current) return;
    setBasemapMode(mode);
    setMapLoaded(false);

    const style = mode === 'offline' ? getOfflineMapStyle() : (mode === 'carto' ? getOnlineCartoStyle() : getOnlineOsmStyle());
    mapRef.current.setStyle(style);

    mapRef.current.once('style.load', () => {
      setMapLoaded(true);
      if (mapRef.current) {
        setupHazardSources(mapRef.current, alerts);
      }
    });
  };

  // Setup GeoJSON layers for Hazard Polygons
  const setupHazardSources = (map: maplibregl.Map, currentAlerts: CapAlert[]) => {
    const geojsonData = capAlertsToGeoJson(currentAlerts);

    if (map.getSource('hazard-source')) {
      (map.getSource('hazard-source') as maplibregl.GeoJSONSource).setData(geojsonData);
      return;
    }

    map.addSource('hazard-source', {
      type: 'geojson',
      data: geojsonData
    });

    // Hazard Area Fill
    map.addLayer({
      id: 'hazard-layer-fill',
      type: 'fill',
      source: 'hazard-source',
      layout: {
        visibility: showHazards ? 'visible' : 'none'
      },
      paint: {
        'fill-color': ['get', 'color'],
        'fill-opacity': [
          'case',
          ['==', ['get', 'id'], selectedAlertId || ''],
          0.6,
          0.32
        ]
      }
    });

    // Hazard Area Glow Outer Line
    map.addLayer({
      id: 'hazard-layer-glow',
      type: 'line',
      source: 'hazard-source',
      layout: {
        visibility: showHazards ? 'visible' : 'none',
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 7,
        'line-opacity': 0.45,
        'line-blur': 4
      }
    });

    // Hazard Area Crisp Stroke
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
        'line-color': ['get', 'color'],
        'line-width': [
          'case',
          ['==', ['get', 'id'], selectedAlertId || ''],
          3.5,
          2.0
        ],
        'line-dasharray': [3, 1]
      }
    });

    // Click handler for hazard polygons
    map.on('click', 'hazard-layer-fill', (e) => {
      if (!e.features || e.features.length === 0) return;
      const feat = e.features[0] as unknown as GeoJsonHazardFeature;
      const props = feat.properties;
      onSelectAlert(props.id);

      // Show popup
      if (popupRef.current) popupRef.current.remove();

      const popupHtml = `
        <div class="p-3 bg-slate-900 text-slate-100 rounded-lg max-w-xs font-sans border border-slate-700 shadow-xl">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2 py-0.5 text-xs font-bold rounded uppercase tracking-wider text-white" style="background-color: ${props.color}">
              ${props.severity} Alert
            </span>
            <span class="text-xs text-slate-400 font-mono">${props.category}</span>
          </div>
          <h4 class="font-bold text-sm text-white mb-1 leading-snug">${props.headline}</h4>
          <p class="text-xs text-slate-300 mb-2"><strong>Area:</strong> ${props.areaDesc}</p>
          ${
            props.instruction
              ? `<div class="p-2 bg-slate-800/80 rounded border-l-2 border-red-500 text-[11px] text-amber-200 mb-2">
                  <strong>NDMA Advisory:</strong> ${props.instruction.slice(0, 160)}...
                </div>`
              : ''
          }
          <div class="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            <span>By: ${props.sender}</span>
            <span>Urgency: ${props.urgency}</span>
          </div>
        </div>
      `;

      popupRef.current = new maplibregl.Popup({ closeButton: true, maxWidth: '320px', className: 'tactical-popup' })
        .setLngLat(e.lngLat)
        .setHTML(popupHtml)
        .addTo(map);
    });

    // Change cursor on hover
    map.on('mouseenter', 'hazard-layer-fill', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'hazard-layer-fill', () => {
      map.getCanvas().style.cursor = '';
    });
  };

  // Update Hazard Data whenever alerts change
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const source = mapRef.current.getSource('hazard-source') as maplibregl.GeoJSONSource | undefined;
    if (source) {
      source.setData(capAlertsToGeoJson(alerts));
    } else {
      setupHazardSources(mapRef.current, alerts);
    }
  }, [alerts, mapLoaded]);

  // Update visibility toggles
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;
    if (map.getLayer('hazard-layer-fill')) {
      map.setLayoutProperty('hazard-layer-fill', 'visibility', showHazards ? 'visible' : 'none');
      map.setLayoutProperty('hazard-layer-stroke', 'visibility', showHazards ? 'visible' : 'none');
      map.setLayoutProperty('hazard-layer-glow', 'visibility', showHazards ? 'visible' : 'none');
    }
  }, [showHazards, mapLoaded]);

  // Update Shelter & SOS Markers
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // 1. Shelter Markers
    if (showShelters) {
      DISASTER_SHELTERS.forEach((shelter) => {
        const el = document.createElement('div');
        el.className = 'shelter-marker cursor-pointer group relative';
        el.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white shadow-lg flex items-center justify-center text-white transform hover:scale-125 transition-transform duration-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        `;

        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const popupHtml = `
            <div class="p-3 bg-slate-900 text-slate-100 rounded-lg max-w-xs font-sans border border-emerald-500/50 shadow-xl">
              <div class="flex items-center justify-between mb-1">
                <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  Relief Shelter
                </span>
                <span class="text-xs text-slate-400">${shelter.district}, ${shelter.state}</span>
              </div>
              <h4 class="font-bold text-sm text-white mb-1">${shelter.name}</h4>
              <div class="text-xs text-slate-300 space-y-1 mb-2">
                <p>Capacity: <strong class="text-emerald-400">${shelter.currentOccupancy} / ${shelter.capacity}</strong> persons</p>
                <p>Contact: <strong>${shelter.contactPerson}</strong> (${shelter.phone})</p>
              </div>
              <div class="flex flex-wrap gap-1 text-[10px] text-slate-300">
                ${shelter.amenities.medicalSupport ? '<span class="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">🏥 Medical</span>' : ''}
                ${shelter.amenities.cleanWater ? '<span class="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">💧 Potable Water</span>' : ''}
                ${shelter.amenities.boatAvailable ? '<span class="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">🚤 Rescue Boat</span>' : ''}
                ${shelter.amenities.cookedFood ? '<span class="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">🍲 Food Supply</span>' : ''}
              </div>
            </div>
          `;
          new maplibregl.Popup({ closeButton: true, maxWidth: '300px' })
            .setLngLat(shelter.coordinates)
            .setHTML(popupHtml)
            .addTo(map);
        });

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(shelter.coordinates)
          .addTo(map);

        markersRef.current.push(marker);
      });
    }

    // 2. SOS Broadcast Markers
    if (showSosMarkers && sosList.length > 0) {
      sosList.forEach((sos) => {
        const isPending = sos.syncStatus === 'pending_offline';
        const el = document.createElement('div');
        el.className = 'sos-marker cursor-pointer relative';
        el.innerHTML = `
          <div class="relative flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full ${isPending ? 'bg-amber-400' : 'bg-red-500'} opacity-75"></span>
            <div class="relative inline-flex items-center justify-center w-8 h-8 rounded-full ${isPending ? 'bg-amber-500' : 'bg-red-600'} text-white border-2 border-white shadow-xl text-xs font-black">
              SOS
            </div>
          </div>
        `;

        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const popupHtml = `
            <div class="p-3 bg-slate-950 text-slate-100 rounded-lg max-w-xs font-sans border ${isPending ? 'border-amber-500' : 'border-red-500'} shadow-2xl">
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

    // 3. Current User Location Marker
    if (userLocation) {
      const userEl = document.createElement('div');
      userEl.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-xl flex items-center justify-center animate-pulse">
          <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
        </div>
      `;
      const marker = new maplibregl.Marker({ element: userEl })
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map);
      markersRef.current.push(marker);
    }
  }, [showShelters, showSosMarkers, sosList, userLocation, mapLoaded]);

  // Zoom helpers
  const flyToCoords = (lon: number, lat: number, zoom = 7.5) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [lon, lat],
      zoom,
      essential: true,
      speed: 1.2
    });
  };

  return (
    <div className="relative w-full h-full min-h-[420px] bg-[#070b14] overflow-hidden">
      {/* MapLibre DOM container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Location Picker Banner overlay if active */}
      {isPickingLocation && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border-2 border-amber-300 animate-bounce text-sm">
          <Crosshair className="w-5 h-5 text-slate-950" />
          Click anywhere on map to pin SOS disaster location!
        </div>
      )}

      {/* Floating Tactical Layer Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        {/* Basemap switcher */}
        <div className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-lg border border-slate-700/80 shadow-2xl flex flex-col gap-1">
          <div className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 uppercase tracking-wider flex items-center gap-1">
            <Layers className="w-3 h-3 text-cyan-400" /> Basemap
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => switchBasemap('offline')}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors flex items-center gap-1 ${
                basemapMode === 'offline'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="100% Offline Vector Boundary Map (No Network Required)"
            >
              <WifiOff className="w-3 h-3" /> Offline
            </button>
            <button
              onClick={() => switchBasemap('carto')}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                basemapMode === 'carto'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="Dark Matter Web Tiles"
            >
              Dark Web
            </button>
            <button
              onClick={() => switchBasemap('osm')}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                basemapMode === 'osm'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="OpenStreetMap Standard Raster"
            >
              OSM
            </button>
          </div>
        </div>

        {/* Layer Visibility Toggles */}
        <div className="bg-slate-900/90 backdrop-blur-md p-2 rounded-lg border border-slate-700/80 shadow-2xl flex flex-col gap-1.5 text-xs text-slate-200">
          <button
            onClick={() => setShowHazards(!showHazards)}
            className={`flex items-center justify-between gap-3 px-2 py-1 rounded transition-colors ${
              showHazards ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-slate-800/60 text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-red-400" /> NDMA Hazard Polygons
            </span>
            {showHazards ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setShowShelters(!showShelters)}
            className={`flex items-center justify-between gap-3 px-2 py-1 rounded transition-colors ${
              showShelters ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800/60 text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> Relief Shelters ({DISASTER_SHELTERS.length})
            </span>
            {showShelters ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setShowSosMarkers(!showSosMarkers)}
            className={`flex items-center justify-between gap-3 px-2 py-1 rounded transition-colors ${
              showSosMarkers ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800/60 text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> SOS Alerts ({sosList.length})
            </span>
            {showSosMarkers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Quick Focus Sectors */}
        <div className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-lg border border-slate-700/80 shadow-2xl flex gap-1">
          <button
            onClick={() => flyToCoords(82.5, 22.0, 4.3)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] flex items-center gap-1"
            title="Reset to All India Overview"
          >
            <Maximize2 className="w-3 h-3" /> India
          </button>
          <button
            onClick={() => flyToCoords(85.3, 19.4, 7.2)}
            className="p-1.5 bg-red-950/60 hover:bg-red-900/80 text-red-200 border border-red-800/50 rounded text-[11px] flex items-center gap-1"
            title="Zoom to Bay of Bengal Cyclone Zone"
          >
            Cyclone
          </button>
          <button
            onClick={() => flyToCoords(92.8, 26.5, 7.0)}
            className="p-1.5 bg-blue-950/60 hover:bg-blue-900/80 text-blue-200 border border-blue-800/50 rounded text-[11px] flex items-center gap-1"
            title="Zoom to Brahmaputra Flood Valley"
          >
            Floods
          </button>
          <button
            onClick={() => flyToCoords(77.1, 31.8, 8.0)}
            className="p-1.5 bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 border border-amber-800/50 rounded text-[11px] flex items-center gap-1"
            title="Zoom to Himachal Landslide Zone"
          >
            Himalayas
          </button>
        </div>
      </div>

      {/* Legend on bottom right above scale */}
      <div className="absolute bottom-6 left-4 z-20 bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800 text-[11px] space-y-1 shadow-lg pointer-events-auto">
        <div className="font-semibold text-slate-300 uppercase tracking-wider text-[10px] mb-1">Alert Severity Matrix</div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shadow-sm"></span> Red (Extreme)
          </span>
          <span className="flex items-center gap-1 text-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block shadow-sm"></span> Orange (Severe)
          </span>
          <span className="flex items-center gap-1 text-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block shadow-sm"></span> Yellow (Moderate)
          </span>
        </div>
      </div>
    </div>
  );
};


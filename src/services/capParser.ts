import { CapAlert, CapInfo, CapArea, AlertSeverity, AlertUrgency, AlertCertainty, AlertStatus, AlertMsgType, GeoJsonHazardFeature } from '../types/cap';

// Generates approximate circular polygon coordinates for CAP <circle>lat,lon radius_km</circle>
export function circleToPolygon(lat: number, lon: number, radiusKm: number, points = 36): [number, number][] {
  const coords: [number, number][] = [];
  const earthRadius = 6371; // km
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const distRatio = radiusKm / earthRadius;

  for (let i = 0; i <= points; i++) {
    const bearing = (i * 360) / points * (Math.PI / 180);
    const pLat = Math.asin(
      Math.sin(latRad) * Math.cos(distRatio) +
      Math.cos(latRad) * Math.sin(distRatio) * Math.cos(bearing)
    );
    const pLon = lonRad + Math.atan2(
      Math.sin(bearing) * Math.sin(distRatio) * Math.cos(latRad),
      Math.cos(distRatio) - Math.sin(latRad) * Math.sin(pLat)
    );
    coords.push([(pLon * 180) / Math.PI, (pLat * 180) / Math.PI]);
  }
  return coords;
}

// Parses coordinate strings like "lat,lon lat,lon" or "lat,lon,alt" into GeoJSON [[lon, lat], ...]
export function parseCapPolygon(coordString: string): [number, number][] {
  const pairs = coordString.trim().split(/\s+/);
  const ring: [number, number][] = [];

  for (const pair of pairs) {
    const parts = pair.split(',').map((p) => parseFloat(p.trim()));
    if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const val1 = parts[0];
      const val2 = parts[1];
      // CRITICAL: Split CAP coordinate (lat,lon) and reverse to [lon, lat] for MapLibre
      let lon: number;
      let lat: number;
      if (val1 < 45 && val2 >= 65) {
        lat = val1;
        lon = val2;
      } else if (val1 >= 65 && val2 < 45) {
        lon = val1;
        lat = val2;
      } else {
        lat = val1;
        lon = val2;
      }
      ring.push([lon, lat]);
    }
  }

  // Ensure polygon is closed (first coord equals last coord)
  if (ring.length > 2) {
    const first = ring[0];
    const last = ring[ring.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) {
      ring.push([first[0], first[1]]);
    }
  }

  return ring;
}

// Returns standard disaster color based on NDMA / IMD alert matrix
export function getSeverityColor(severity: AlertSeverity): string {
  switch (severity) {
    case 'Extreme':
      return '#dc2626'; // Crimson Red
    case 'Severe':
      return '#f59e0b'; // Amber Orange
    case 'Moderate':
      return '#eab308'; // Yellow Alert
    case 'Minor':
      return '#0ea5e9'; // Sky Blue Alert
    default:
      return '#10b981'; // Green / Advisory
  }
}

export function parseCapXml(xmlString: string): CapAlert[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

  // Check for XML parsing error
  const parserError = xmlDoc.getElementsByTagName('parsererror');
  if (parserError.length > 0) {
    throw new Error('XML parsing failed: ' + parserError[0].textContent);
  }

  // Support RSS feeds wrapping multiple CAP alerts or single <alert>
  let alertNodes = Array.from(xmlDoc.getElementsByTagName('alert'));
  if (alertNodes.length === 0) {
    // Try namespace-agnostic lookup
    alertNodes = Array.from(xmlDoc.querySelectorAll('*')).filter(
      (el) => el.localName === 'alert'
    ) as Element[];
  }

  if (alertNodes.length === 0) {
    throw new Error('No <alert> elements found in CAP XML');
  }

  const alerts: CapAlert[] = [];

  for (const alertNode of alertNodes) {
    const getChildText = (parent: Element, tagName: string): string => {
      const el = Array.from(parent.children).find((c) => c.localName === tagName);
      return el?.textContent?.trim() || '';
    };

    const identifier = getChildText(alertNode, 'identifier') || `NDMA-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const sender = getChildText(alertNode, 'sender') || 'ndma.gov.in';
    const sent = getChildText(alertNode, 'sent') || new Date().toISOString();
    const status = (getChildText(alertNode, 'status') || 'Actual') as AlertStatus;
    const msgType = (getChildText(alertNode, 'msgType') || 'Alert') as AlertMsgType;
    const scope = (getChildText(alertNode, 'scope') || 'Public') as 'Public' | 'Restricted' | 'Private';

    // Parse <info> blocks (take first or primary language info)
    const infoNodes = Array.from(alertNode.children).filter((c) => c.localName === 'info');
    const infoNode = infoNodes[0] || alertNode;

    const event = getChildText(infoNode, 'event') || 'Disaster Alert';
    const category = (getChildText(infoNode, 'category') || 'Met') as any;
    const urgency = (getChildText(infoNode, 'urgency') || 'Expected') as AlertUrgency;
    const severity = (getChildText(infoNode, 'severity') || 'Severe') as AlertSeverity;
    const certainty = (getChildText(infoNode, 'certainty') || 'Observed') as AlertCertainty;
    const headline = getChildText(infoNode, 'headline') || event;
    const description = getChildText(infoNode, 'description') || '';
    const instruction = getChildText(infoNode, 'instruction') || '';
    const effective = getChildText(infoNode, 'effective') || sent;
    const expires = getChildText(infoNode, 'expires') || '';
    const senderName = getChildText(infoNode, 'senderName') || sender;

    // Parse <area> blocks
    const areaNodes = Array.from(infoNode.children).filter((c) => c.localName === 'area');
    const areas: CapArea[] = [];

    for (const areaNode of areaNodes) {
      const areaDesc = getChildText(areaNode, 'areaDesc') || 'Affected Area';
      const capArea: CapArea = { areaDesc };

      // Look for <polygon>
      const polygonNode = Array.from(areaNode.children).find((c) => c.localName === 'polygon');
      if (polygonNode && polygonNode.textContent) {
        const ring = parseCapPolygon(polygonNode.textContent);
        if (ring.length >= 3) {
          capArea.polygon = [ring];
        }
      }

      // Look for <circle> (format: "lat,lon radius_km")
      const circleNode = Array.from(areaNode.children).find((c) => c.localName === 'circle');
      if (circleNode && circleNode.textContent) {
        const parts = circleNode.textContent.trim().split(/\s+/);
        if (parts.length >= 2) {
          const [latStr, lonStr] = parts[0].split(',');
          const radiusKm = parseFloat(parts[1]);
          const lat = parseFloat(latStr);
          const lon = parseFloat(lonStr);
          if (!isNaN(lat) && !isNaN(lon) && !isNaN(radiusKm)) {
            capArea.circle = {
              center: [lon, lat],
              radiusKm
            };
            // Fallback polygon if no polygon specified
            if (!capArea.polygon) {
              capArea.polygon = [circleToPolygon(lat, lon, radiusKm)];
            }
          }
        }
      }

      areas.push(capArea);
    }

    const info: CapInfo = {
      category,
      event,
      urgency,
      severity,
      certainty,
      headline,
      description,
      instruction,
      effective,
      expires,
      senderName,
      areas
    };

    alerts.push({
      identifier,
      sender,
      sent,
      status,
      msgType,
      scope,
      info,
      rawXml: xmlString
    });
  }

  return alerts;
}

// Convert CAP Alerts into a GeoJSON FeatureCollection for MapLibre GL
export function capAlertsToGeoJson(alerts: CapAlert[]): GeoJSON.FeatureCollection {
  const features: GeoJsonHazardFeature[] = [];

  for (const alert of alerts) {
    const { info, identifier, sender } = alert;
    const color = getSeverityColor(info.severity);

    for (let i = 0; i < info.areas.length; i++) {
      const area = info.areas[i];
      if (area.polygon && area.polygon.length > 0) {
        features.push({
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: area.polygon
          },
          properties: {
            id: `${identifier}-${i}`,
            headline: info.headline,
            event: info.event,
            severity: info.severity,
            urgency: info.urgency,
            areaDesc: area.areaDesc,
            effective: info.effective || alert.sent,
            expires: info.expires || '',
            sender: info.senderName || sender,
            instruction: info.instruction,
            category: info.category,
            color
          }
        });
      }
    }
  }

  return {
    type: 'FeatureCollection',
    features: features as any
  };
}


// Common Alerting Protocol (CAP) OASIS v1.2 & NDMA India Profile Types

export type AlertSeverity = 'Extreme' | 'Severe' | 'Moderate' | 'Minor' | 'Unknown';
export type AlertUrgency = 'Immediate' | 'Expected' | 'Future' | 'Past' | 'Unknown';
export type AlertCertainty = 'Observed' | 'Likely' | 'Possible' | 'Unlikely' | 'Unknown';
export type AlertStatus = 'Actual' | 'Exercise' | 'System' | 'Test' | 'Draft';
export type AlertMsgType = 'Alert' | 'Update' | 'Cancel' | 'Ack' | 'Error';

export interface CapArea {
  areaDesc: string;
  polygon?: number[][][]; // GeoJSON format: array of linear rings [[lon, lat], ...]
  circle?: {
    center: [number, number]; // [lon, lat]
    radiusKm: number;
  };
  geocodes?: { valueName: string; value: string }[];
  district?: string;
  state?: string;
  locationLabel?: string;
}

export interface CapInfo {
  language?: string;
  category: 'Met' | 'Geo' | 'Safety' | 'Security' | 'Rescue' | 'Fire' | 'Health' | 'Env' | 'Transport' | 'Infra' | 'CBRNE' | 'Other';
  event: string;
  urgency: AlertUrgency;
  severity: AlertSeverity;
  certainty: AlertCertainty;
  headline: string;
  description: string;
  instruction?: string;
  effective?: string;
  onset?: string;
  expires?: string;
  senderName?: string;
  web?: string;
  areas: CapArea[];
  parameters?: Record<string, string>;
}

export interface CapAlert {
  identifier: string;
  sender: string;
  sent: string;
  status: AlertStatus;
  msgType: AlertMsgType;
  source?: string;
  scope: 'Public' | 'Restricted' | 'Private';
  info: CapInfo;
  rawXml?: string;
}

export interface GeoJsonHazardFeature {
  type: 'Feature';
  geometry: {
    type: 'Polygon' | 'MultiPolygon' | 'Point';
    coordinates: any;
  };
  properties: {
    id: string;
    headline: string;
    event: string;
    severity: AlertSeverity;
    urgency: AlertUrgency;
    areaDesc: string;
    effective: string;
    expires: string;
    sender: string;
    instruction?: string;
    category: string;
    color: string;
  };
}


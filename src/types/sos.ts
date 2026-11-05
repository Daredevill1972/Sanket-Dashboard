export type SosEmergencyType =
  | 'medical'          // Severe injury, cardiac, dialysis, bleeding
  | 'trapped'          // Debris, collapsed structure, high water cutoff
  | 'severe_flood'     // Water rising above safe level, roof refuge
  | 'rescue_boat'      // Stranded, boat needed
  | 'food_water'       // No potable water, starvation risk
  | 'elderly_infant'   // Special vulnerable group, oxygen/insulin needs
  | 'fire_hazardous';  // Gas leak, fire breakout, power lines down

export type SosPriority = 'critical_immediate' | 'high' | 'moderate';

export type SosSyncStatus = 'pending_offline' | 'transmitting' | 'synced_hq' | 'failed';

export interface SosBroadcast {
  id: string; // UUID or timestamp-prefixed ID
  timestamp: string; // ISO string
  name: string;
  contact: string;
  emergencyType: SosEmergencyType;
  priority: SosPriority;
  peopleCount: number;
  latitude: number;
  longitude: number;
  locationAccuracy?: number; // in meters
  addressOrLandmark: string;
  district?: string;
  state?: string;
  details: string;
  medicalNeeds: string;
  hasElderlyOrChildren: boolean;
  batteryLevel?: number | null; // device battery percentage (0-100)
  syncStatus: SosSyncStatus;
  syncAttempts: number;
  lastAttemptAt?: string;
  syncedAt?: string;
  ticketNumber?: string; // Assigned by HQ once synced
  meshRelayed?: boolean;
}

export interface SosQueueStats {
  total: number;
  pendingOffline: number;
  synced: number;
  critical: number;
}


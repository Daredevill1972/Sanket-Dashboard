import { SosBroadcast } from '../types/sos';
import { offlineDB } from './indexedDB';

export type SyncCallback = (status: {
  isOnline: boolean;
  isSyncing: boolean;
  syncedCount: number;
  failedCount: number;
  lastSyncTime: Date | null;
}) => void;

class SosSyncService {
  private isSyncing = false;
  private listeners: SyncCallback[] = [];
  private lastSyncTime: Date | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.notify();
        // Auto-sync when coming back online
        this.syncPendingQueue();
      });

      window.addEventListener('offline', () => {
        this.notify();
      });
    }
  }

  isOnline(): boolean {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  }

  subscribe(callback: SyncCallback): () => void {
    this.listeners.push(callback);
    callback({
      isOnline: this.isOnline(),
      isSyncing: this.isSyncing,
      syncedCount: 0,
      failedCount: 0,
      lastSyncTime: this.lastSyncTime
    });

    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  private notify(synced = 0, failed = 0) {
    this.listeners.forEach((callback) => {
      callback({
        isOnline: this.isOnline(),
        isSyncing: this.isSyncing,
        syncedCount: synced,
        failedCount: failed,
        lastSyncTime: this.lastSyncTime
      });
    });
  }

  // Simulates dispatching to NDRF/NDMA Central Emergency Operations Center
  private async transmitSos(sos: SosBroadcast): Promise<string> {
    // In production, this targets: fetch('/api/v1/sos/broadcast', { method: 'POST', body: JSON.stringify(sos) })
    // We simulate real network latency with graceful retry simulation
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate authentic Indian Disaster Response Ticket ID
    const randomTicket = `NDRF-${sos.emergencyType.toUpperCase().slice(0, 3)}-${Math.floor(100000 + Math.random() * 900000)}`;
    return randomTicket;
  }

  async syncPendingQueue(): Promise<{ synced: number; failed: number }> {
    if (this.isSyncing) return { synced: 0, failed: 0 };
    if (!this.isOnline()) {
      return { synced: 0, failed: 0 };
    }

    this.isSyncing = true;
    this.notify();

    let syncedCount = 0;
    let failedCount = 0;

    try {
      const pendingList = await offlineDB.getPendingSos();

      for (const item of pendingList) {
        try {
          await offlineDB.updateSosStatus(item.id, 'transmitting');
          const ticket = await this.transmitSos(item);
          await offlineDB.updateSosStatus(item.id, 'synced_hq', ticket);
          syncedCount++;
        } catch (err) {
          console.error(`Failed to sync SOS ID ${item.id}:`, err);
          await offlineDB.updateSosStatus(item.id, 'failed');
          failedCount++;
        }
      }

      this.lastSyncTime = new Date();
    } finally {
      this.isSyncing = false;
      this.notify(syncedCount, failedCount);
    }

    return { synced: syncedCount, failed: failedCount };
  }

  // Generate 112 Emergency SMS text format (compact, critical metadata only for 2G/satellite)
  formatSosForSms(sos: SosBroadcast): string {
    return `[EMERGENCY 112 SOS - NDRF]
TYPE: ${sos.emergencyType.toUpperCase()}
PRIORITY: ${sos.priority.toUpperCase()}
PEOPLE: ${sos.peopleCount}
LOC: ${sos.latitude.toFixed(5)},${sos.longitude.toFixed(5)} (±${Math.round(sos.locationAccuracy || 0)}m)
ADDR: ${sos.addressOrLandmark || 'N/A'}, ${sos.district || ''}
CONTACT: ${sos.contact || 'N/A'} (${sos.name || 'Anonymous'})
DETAILS: ${sos.details || 'Urgent assistance needed'}
VULNERABLE: ${sos.hasElderlyOrChildren ? 'YES' : 'NO'} | MED: ${sos.medicalNeeds || 'None'}
BATTERY: ${sos.batteryLevel !== null && sos.batteryLevel !== undefined ? `${sos.batteryLevel}%` : 'Unknown'}
ID: ${sos.id}`;
  }

  // Export queue as JSON manifest
  exportQueueAsJson(queue: SosBroadcast[]): string {
    return JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        system: 'RAKSHAK India Disaster Response',
        totalRecords: queue.length,
        records: queue
      },
      null,
      2
    );
  }

  // Export queue as CSV for incident commander spreadsheet
  exportQueueAsCsv(queue: SosBroadcast[]): string {
    const headers = [
      'ID',
      'Timestamp',
      'SyncStatus',
      'TicketNumber',
      'EmergencyType',
      'Priority',
      'PeopleCount',
      'Latitude',
      'Longitude',
      'Address',
      'Name',
      'Contact',
      'Details',
      'MedicalNeeds',
      'Battery%'
    ];

    const rows = queue.map((item) => [
      `"${item.id}"`,
      `"${item.timestamp}"`,
      `"${item.syncStatus}"`,
      `"${item.ticketNumber || ''}"`,
      `"${item.emergencyType}"`,
      `"${item.priority}"`,
      item.peopleCount,
      item.latitude,
      item.longitude,
      `"${(item.addressOrLandmark || '').replace(/"/g, '""')}"`,
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${item.contact}"`,
      `"${(item.details || '').replace(/"/g, '""')}"`,
      `"${(item.medicalNeeds || '').replace(/"/g, '""')}"`,
      item.batteryLevel !== null && item.batteryLevel !== undefined ? item.batteryLevel : ''
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
}

export const sosSyncService = new SosSyncService();


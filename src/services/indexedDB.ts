import { SosBroadcast, SosSyncStatus } from '../types/sos';
import { CapAlert } from '../types/cap';

const DB_NAME = 'RakshakDisasterDB';
const DB_VERSION = 1;
const STORE_SOS = 'sos_queue';
const STORE_CAP = 'cached_cap_alerts';

class OfflineIndexedDB {
  private db: IDBDatabase | null = null;
  private initPromise: Promise<IDBDatabase> | null = null;

  private async getDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store for SOS emergency broadcasts
        if (!db.objectStoreNames.contains(STORE_SOS)) {
          const sosStore = db.createObjectStore(STORE_SOS, { keyPath: 'id' });
          sosStore.createIndex('syncStatus', 'syncStatus', { unique: false });
          sosStore.createIndex('timestamp', 'timestamp', { unique: false });
          sosStore.createIndex('priority', 'priority', { unique: false });
        }

        // Store for cached NDMA CAP feeds
        if (!db.objectStoreNames.contains(STORE_CAP)) {
          const capStore = db.createObjectStore(STORE_CAP, { keyPath: 'identifier' });
          capStore.createIndex('sent', 'sent', { unique: false });
        }
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    return this.initPromise;
  }

  // --- SOS QUEUE OPERATIONS ---

  async addSos(sos: SosBroadcast): Promise<string> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readwrite');
      const store = tx.objectStore(STORE_SOS);
      const req = store.put(sos);
      req.onsuccess = () => resolve(sos.id);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllSos(): Promise<SosBroadcast[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readonly');
      const store = tx.objectStore(STORE_SOS);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result as SosBroadcast[];
        // Sort descending by timestamp
        results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async getPendingSos(): Promise<SosBroadcast[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readonly');
      const store = tx.objectStore(STORE_SOS);
      const index = store.index('syncStatus');
      const req = index.getAll('pending_offline');
      req.onsuccess = () => resolve(req.result as SosBroadcast[]);
      req.onerror = () => reject(req.error);
    });
  }

  async updateSosStatus(
    id: string,
    status: SosSyncStatus,
    ticketNumber?: string
  ): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readwrite');
      const store = tx.objectStore(STORE_SOS);
      const req = store.get(id);

      req.onsuccess = () => {
        const item = req.result as SosBroadcast | undefined;
        if (!item) {
          return resolve();
        }
        item.syncStatus = status;
        if (status === 'synced_hq') {
          item.syncedAt = new Date().toISOString();
          if (ticketNumber) item.ticketNumber = ticketNumber;
        } else if (status === 'transmitting') {
          item.syncAttempts = (item.syncAttempts || 0) + 1;
          item.lastAttemptAt = new Date().toISOString();
        }
        store.put(item).onsuccess = () => resolve();
      };
      req.onerror = () => reject(req.error);
    });
  }

  async deleteSos(id: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readwrite');
      const store = tx.objectStore(STORE_SOS);
      const req = store.delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async clearAllSos(): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SOS, 'readwrite');
      const store = tx.objectStore(STORE_SOS);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // --- CAP CACHING OPERATIONS ---

  async cacheCapAlerts(alerts: CapAlert[]): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CAP, 'readwrite');
      const store = tx.objectStore(STORE_CAP);
      alerts.forEach((alert) => store.put(alert));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async getCachedCapAlerts(): Promise<CapAlert[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CAP, 'readonly');
      const store = tx.objectStore(STORE_CAP);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result as CapAlert[]);
      req.onerror = () => reject(req.error);
    });
  }
}

export const offlineDB = new OfflineIndexedDB();


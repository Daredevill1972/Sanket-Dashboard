import { SosBroadcast, SosSyncStatus, MeshPacket } from '../types/sos';
import { CapAlert } from '../types/cap';

const DB_NAME = 'SanketDisasterDB';
const DB_VERSION = 2;
const STORE_SOS = 'sos_queue';
const STORE_CAP = 'cached_cap_alerts';
const STORE_PAYLOAD = 'latest_ndma_payload';
const STORE_MESH = 'offline_mesh_queue';

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

        // Store for individual cached NDMA CAP feeds
        if (!db.objectStoreNames.contains(STORE_CAP)) {
          const capStore = db.createObjectStore(STORE_CAP, { keyPath: 'identifier' });
          capStore.createIndex('sent', 'sent', { unique: false });
        }

        // Store for the raw latest NDMA JSON payload
        if (!db.objectStoreNames.contains(STORE_PAYLOAD)) {
          db.createObjectStore(STORE_PAYLOAD, { keyPath: 'id' });
        }

        // Store for offline mesh synchronization queue (outgoing data / location pings)
        if (!db.objectStoreNames.contains(STORE_MESH)) {
          const meshStore = db.createObjectStore(STORE_MESH, { keyPath: 'id' });
          meshStore.createIndex('syncStatus', 'syncStatus', { unique: false });
          meshStore.createIndex('type', 'type', { unique: false });
          meshStore.createIndex('timestamp', 'timestamp', { unique: false });
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

  // Store the entire raw latest NDMA JSON payload for full offline resilience
  async saveLatestNdmaPayload(payload: any): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PAYLOAD, 'readwrite');
      const store = tx.objectStore(STORE_PAYLOAD);
      const record = {
        id: 'latest',
        savedAt: new Date().toISOString(),
        payload
      };
      const req = store.put(record);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // Retrieve the entire latest NDMA JSON payload from IndexedDB
  async getLatestNdmaPayload(): Promise<any | null> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PAYLOAD, 'readonly');
      const store = tx.objectStore(STORE_PAYLOAD);
      const req = store.get('latest');
      req.onsuccess = () => {
        if (req.result && req.result.payload) {
          resolve(req.result.payload);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });
  }

  // --- OFFLINE MESH SYNCHRONIZATION QUEUE ---

  // Queue any outgoing data or location pings when offline
  async queueMeshPacket(packet: MeshPacket): Promise<string> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MESH, 'readwrite');
      const store = tx.objectStore(STORE_MESH);
      const req = store.put(packet);
      req.onsuccess = () => resolve(packet.id);
      req.onerror = () => reject(req.error);
    });
  }

  async getPendingMeshPackets(): Promise<MeshPacket[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MESH, 'readonly');
      const store = tx.objectStore(STORE_MESH);
      const index = store.index('syncStatus');
      const req = index.getAll('pending_mesh');
      req.onsuccess = () => resolve(req.result as MeshPacket[]);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllMeshPackets(): Promise<MeshPacket[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MESH, 'readonly');
      const store = tx.objectStore(STORE_MESH);
      const req = store.getAll();
      req.onsuccess = () => {
        const list = req.result as MeshPacket[];
        list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        resolve(list);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async updateMeshPacketStatus(
    id: string,
    status: MeshPacket['syncStatus']
  ): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MESH, 'readwrite');
      const store = tx.objectStore(STORE_MESH);
      const req = store.get(id);
      req.onsuccess = () => {
        const item = req.result as MeshPacket | undefined;
        if (!item) return resolve();
        item.syncStatus = status;
        store.put(item).onsuccess = () => resolve();
      };
      req.onerror = () => reject(req.error);
    });
  }

  async clearSyncedMeshPackets(): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MESH, 'readwrite');
      const store = tx.objectStore(STORE_MESH);
      const index = store.index('syncStatus');
      const req = index.openCursor(IDBKeyRange.only('synced_hq'));
      req.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result as IDBCursorWithValue | null;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
      req.onerror = () => reject(req.error);
    });
  }
}

export const offlineDB = new OfflineIndexedDB();


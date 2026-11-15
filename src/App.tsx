'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CapAlert } from './types/cap';
import { SosBroadcast } from './types/sos';
import { offlineDB } from './services/indexedDB';
import { sosSyncService } from './services/syncService';
import { mapLiveAlertsToCap, RawLiveAlert } from './services/liveAlertsMapper';
import { Navbar } from './components/Navbar';
import { MapView } from './components/MapView';
import { HazardPanel } from './components/HazardPanel';
import { SosFormModal } from './components/SosFormModal';
import { SosQueueDrawer } from './components/SosQueueDrawer';
import { CapIngestionModal } from './components/CapIngestionModal';
import { DistressBeaconModal } from './components/DistressBeaconModal';
import { OfflineGuidesModal } from './components/OfflineGuidesModal';
import {
  Flame,
  WifiOff,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export function App() {
  const [alerts, setAlerts] = useState<CapAlert[]>([]);
  const [selectedAlertId, setSelectedAlertId] = useState<string | null>(null);
  const [sosList, setSosList] = useState<SosBroadcast[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Network & simulation state
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(false);
  const [realIsOnline, setRealIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  // Live polling state
  const [lastFetchedTime, setLastFetchedTime] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isUsingCachedData, setIsUsingCachedData] = useState(false);

  // Modals & Panels
  const [isSosFormOpen, setIsSosFormOpen] = useState(false);
  const [isSosQueueOpen, setIsSosQueueOpen] = useState(false);
  const [isCapIngestOpen, setIsCapIngestOpen] = useState(false);
  const [isBeaconOpen, setIsBeaconOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  // Map & Panel UI
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [mobileTab, setMobileTab] = useState<'map' | 'hazards'>('map');
  const [isPickingLocation, setIsPickingLocation] = useState(false);
  const [pickedLocation, setPickedLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Language
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  // State-Wise Search & Camera Framing
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [targetBbox, setTargetBbox] = useState<[number, number, number, number] | null>(null);

  const handleSelectState = (stateName: string | null, bbox: [number, number, number, number] | null) => {
    setSelectedState(stateName);
    setTargetBbox(bbox);
  };

  const effectiveIsOnline = isSimulatedOffline ? false : realIsOnline;

  // Loads the latest cached NDMA alerts from IndexedDB
  const loadCachedAlerts = useCallback(async () => {
    try {
      const cached = await offlineDB.getCachedCapAlerts();
      if (cached && cached.length > 0) {
        setAlerts(cached);
        setIsUsingCachedData(true);
        console.log('[Offline Cache] Automatically loaded', cached.length, 'disaster alerts from IndexedDB');
        return;
      }

      // Check full JSON payload backup
      const payload = await offlineDB.getLatestNdmaPayload();
      if (payload) {
        const raw = Array.isArray(payload) ? payload : Array.isArray(payload?.alerts) ? payload.alerts : [];
        if (raw.length > 0) {
          const mapped = mapLiveAlertsToCap(raw);
          setAlerts(mapped);
          setIsUsingCachedData(true);
          console.log('[Offline Cache] Loaded', mapped.length, 'alerts from latest NDMA JSON payload in IndexedDB');
        }
      }
    } catch (err) {
      console.warn('[Offline Cache] Error loading cached alerts from IndexedDB:', err);
    }
  }, []);

  // Primary function to fetch live NDMA alerts from /api/alerts
  const fetchLiveAlerts = useCallback(async () => {
    setIsRefreshing(true);
    setFetchError(null);

    try {
      // Append cache-busting timestamp parameter
      const res = await fetch(`/api/alerts?t=${Date.now()}`, {
        cache: 'no-store'
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: Failed to fetch from /api/alerts`);
      }

      const data = await res.json();

      // Store the latest NDMA JSON payload in IndexedDB for full offline resilience
      await offlineDB.saveLatestNdmaPayload(data);

      const rawAlerts: RawLiveAlert[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.alerts)
        ? data.alerts
        : [];

      if (rawAlerts.length > 0) {
        const mapped = mapLiveAlertsToCap(rawAlerts);
        setAlerts(mapped);
        setLastFetchedTime(new Date(data?.timestamp || Date.now()));
        setIsUsingCachedData(false);

        // Cache mapped live alerts to local IndexedDB
        await offlineDB.cacheCapAlerts(mapped);
      } else {
        await loadCachedAlerts();
      }
    } catch (err: any) {
      console.warn('[Live Alerts] Network unreachable, automatically loading alerts from IndexedDB cache:', err);
      setFetchError(err?.message || 'Offline mode: Loaded alerts from local cache');

      // Connection dropped or failed, automatically load from local IndexedDB cache
      await loadCachedAlerts();
    } finally {
      setIsRefreshing(false);
    }
  }, [loadCachedAlerts]);

  // 1. Initial load & hourly (3,600,000 ms) polling interval
  useEffect(() => {
    // If online, fetch live alerts; if offline, load cached alerts immediately
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      loadCachedAlerts();
    } else {
      fetchLiveAlerts();
    }

    // Polling interval to re-fetch live alerts every 1 hour (3,600,000 milliseconds)
    const intervalId = setInterval(() => {
      if (typeof navigator !== 'undefined' && navigator.onLine && !isSimulatedOffline) {
        fetchLiveAlerts();
      }
    }, 3600000);

    return () => clearInterval(intervalId);
  }, [fetchLiveAlerts, loadCachedAlerts, isSimulatedOffline]);

  // 2. Initialize SOS records, GPS location, and online/offline event listeners
  useEffect(() => {
    // Load SOS records from IndexedDB
    offlineDB.getAllSos().then(setSosList).catch(console.error);

    // Event listener for navigator.onLine; automatically refresh or load cache
    const handleOnline = () => {
      console.log('[Network Status] Connection restored. Automatically triggering background sync for NDMA feed...');
      setRealIsOnline(true);
      setIsUsingCachedData(false);

      // Automatically trigger a background sync to refresh the NDMA feed the moment the connection is restored
      fetchLiveAlerts();
      sosSyncService.syncPendingQueue();
      sosSyncService.syncPendingMeshQueue();
    };

    const handleOffline = () => {
      console.log('[Network Status] Connection dropped. Automatically loading disaster alerts from local IndexedDB cache...');
      setRealIsOnline(false);
      setIsUsingCachedData(true);

      // Automatically load the most recent disaster alerts from local cache
      loadCachedAlerts();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get user GPS position & queue location ping for offline mesh synchronization
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setUserLocation(loc);

          // Prepare state management for offline mesh sync by queuing outgoing location pings
          sosSyncService.queueLocationPing(loc.lat, loc.lng, pos.coords.accuracy).catch(() => {});
        },
        () => {
          // Default to central India/Odisha coordinates
          setUserLocation({ lat: 19.8135, lng: 85.8312 });
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    }

    // Subscribe to Sync service updates
    const unsubscribe = sosSyncService.subscribe((state) => {
      if (state.syncedCount > 0) {
        offlineDB.getAllSos().then(setSosList);
      }
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      unsubscribe();
    };
  }, [fetchLiveAlerts, loadCachedAlerts]);

  // Toggle offline simulation with automatic cache/sync transitions
  const handleToggleSimulateOffline = () => {
    const next = !isSimulatedOffline;
    setIsSimulatedOffline(next);

    if (next) {
      // Simulating connection drop: automatically load most recent alerts from cache
      setIsUsingCachedData(true);
      loadCachedAlerts();
    } else {
      // Reconnected: automatically trigger background sync
      setIsUsingCachedData(false);
      fetchLiveAlerts();
      sosSyncService.syncPendingQueue();
      sosSyncService.syncPendingMeshQueue();
    }
  };

  // Refresh SOS list
  const refreshSosList = async () => {
    const list = await offlineDB.getAllSos();
    setSosList(list);
  };

  // Manual refresh triggers live re-fetch from /api/alerts
  const handleRefreshFeeds = () => {
    fetchLiveAlerts();
  };

  // Ingest manual alerts callback (from custom CAP XML upload)
  const handleAlertsIngested = (newAlerts: CapAlert[]) => {
    setAlerts((prev) => {
      const existingIds = new Set(prev.map((a) => a.identifier));
      const fresh = newAlerts.filter((a) => !existingIds.has(a.identifier));
      return [...fresh, ...prev];
    });
    if (newAlerts.length > 0) {
      setSelectedAlertId(newAlerts[0].identifier);
    }
  };

  // Map Click Handler (for location picking)
  const handleMapClickLocation = (lat: number, lng: number) => {
    if (isPickingLocation) {
      setPickedLocation({ lat, lng });
      setIsPickingLocation(false);
      setIsSosFormOpen(true);
    }
  };

  const pendingSosCount = sosList.filter((s) => s.syncStatus === 'pending_offline').length;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#070b14] text-slate-100 font-sans">
      {/* Top Navigation */}
      <Navbar
        isOnline={effectiveIsOnline}
        onToggleSimulateOffline={handleToggleSimulateOffline}
        isSimulatedOffline={isSimulatedOffline}
        pendingSosCount={pendingSosCount}
        totalSosCount={sosList.length}
        onOpenSosForm={() => {
          setPickedLocation(null);
          setIsSosFormOpen(true);
        }}
        onOpenSosQueue={() => setIsSosQueueOpen(true)}
        onOpenBeacon={() => setIsBeaconOpen(true)}
        onOpenGuides={() => setIsGuidesOpen(true)}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'hi' : 'en')}
      />

      {/* Offline Alert Strip */}
      {!effectiveIsOnline && (
        <div className="bg-amber-600/90 text-slate-950 px-4 py-1.5 text-xs font-bold flex items-center justify-between border-b border-amber-400 shadow-md">
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4 shrink-0 animate-pulse" />
            <span>
              OFFLINE-FIRST MODE ACTIVE:{' '}
              {isSimulatedOffline
                ? 'Simulated cell tower outage. Broadcasts will store in local IndexedDB.'
                : 'No network connection detected. Using cached live geospatial layers and offline queue.'}
            </span>
          </div>
          <button
            onClick={() => setIsSimulatedOffline(false)}
            className="text-[11px] underline hover:text-black font-semibold"
          >
            {isSimulatedOffline ? 'Resume Online Mode' : 'Check Network'}
          </button>
        </div>
      )}

      {/* Mobile view toggle tabs */}
      <div className="flex md:hidden border-b border-slate-800 bg-slate-950 text-xs font-semibold">
        <button
          onClick={() => setMobileTab('map')}
          className={`flex-1 py-2 text-center border-b-2 ${
            mobileTab === 'map'
              ? 'border-red-500 text-white bg-slate-900'
              : 'border-transparent text-slate-400'
          }`}
        >
          Geospatial Map
        </button>
        <button
          onClick={() => setMobileTab('hazards')}
          className={`flex-1 py-2 text-center border-b-2 flex items-center justify-center gap-1.5 ${
            mobileTab === 'hazards'
              ? 'border-red-500 text-white bg-slate-900'
              : 'border-transparent text-slate-400'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-400" />
          Live Warnings ({alerts.length})
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Side: NDMA CAP Feeds Panel */}
        <div
          className={`${
            mobileTab === 'hazards' ? 'block' : 'hidden'
          } md:block h-full transition-all duration-300 z-10 ${
            isPanelCollapsed ? 'w-0 overflow-hidden border-none' : 'w-full md:w-[380px] lg:w-[420px]'
          }`}
        >
          <HazardPanel
            alerts={alerts}
            selectedAlertId={selectedAlertId}
            onSelectAlert={(id) => {
              setSelectedAlertId(id);
              if (window.innerWidth < 768) setMobileTab('map');
            }}
            onOpenIngestModal={() => setIsCapIngestOpen(true)}
            onRefreshFeeds={handleRefreshFeeds}
            isRefreshing={isRefreshing}
            lastFetchedTime={lastFetchedTime}
            selectedState={selectedState}
            onSelectState={handleSelectState}
            currentLang={lang}
            isOffline={!effectiveIsOnline || isUsingCachedData}
          />
        </div>

        {/* Panel Collapse Toggle Button (Desktop) */}
        <button
          onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 p-1 rounded-r-md shadow-xl"
          style={{ left: isPanelCollapsed ? '0' : '420px' }}
          title={isPanelCollapsed ? 'Expand Alert Feed' : 'Collapse Alert Feed'}
        >
          {isPanelCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Center / Right: MapLibre GL Map View */}
        <div className={`flex-1 h-full ${mobileTab === 'map' ? 'block' : 'hidden'} md:block relative`}>
          <MapView
            alerts={alerts}
            selectedAlertId={selectedAlertId}
            onSelectAlert={setSelectedAlertId}
            sosList={sosList}
            userLocation={userLocation}
            onMapClickLocation={handleMapClickLocation}
            isPickingLocation={isPickingLocation}
            targetBbox={targetBbox}
          />
        </div>
      </div>

      {/* MODALS */}
      {/* 1. SOS Broadcast Form Modal */}
      <SosFormModal
        isOpen={isSosFormOpen}
        onClose={() => setIsSosFormOpen(false)}
        onSosAdded={() => {
          refreshSosList();
        }}
        initialCoords={pickedLocation || userLocation}
        onRequestPickOnMap={() => {
          setIsPickingLocation(true);
          if (window.innerWidth < 768) setMobileTab('map');
        }}
        isOnline={effectiveIsOnline}
      />

      {/* 2. SOS Queue Manager Drawer */}
      <SosQueueDrawer
        isOpen={isSosQueueOpen}
        onClose={() => setIsSosQueueOpen(false)}
        sosList={sosList}
        onRefresh={refreshSosList}
        isOnline={effectiveIsOnline}
      />

      {/* 3. NDMA CAP Ingestion Modal */}
      <CapIngestionModal
        isOpen={isCapIngestOpen}
        onClose={() => setIsCapIngestOpen(false)}
        onAlertsIngested={handleAlertsIngested}
      />

      {/* 4. Tactical Morse Distress Beacon Modal */}
      <DistressBeaconModal
        isOpen={isBeaconOpen}
        onClose={() => setIsBeaconOpen(false)}
      />

      {/* 5. Offline SOPs & Emergency Contacts Modal */}
      <OfflineGuidesModal
        isOpen={isGuidesOpen}
        onClose={() => setIsGuidesOpen(false)}
      />
    </div>
  );
}
export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { CapAlert } from './types/cap';
import { SosBroadcast } from './types/sos';
import { Shelter } from './types/disaster';
import { parseCapXml } from './services/capParser';
import { offlineDB } from './services/indexedDB';
import { sosSyncService } from './services/syncService';
import { ALL_SAMPLE_CAP_FEEDS } from './data/mockCapFeeds';
import { Navbar } from './components/Navbar';
import { MapView } from './components/MapView';
import { HazardPanel } from './components/HazardPanel';
import { SosFormModal } from './components/SosFormModal';
import { SosQueueDrawer } from './components/SosQueueDrawer';
import { CapIngestionModal } from './components/CapIngestionModal';
import { DistressBeaconModal } from './components/DistressBeaconModal';
import { ShelterLocatorModal } from './components/ShelterLocatorModal';
import { OfflineGuidesModal } from './components/OfflineGuidesModal';
import {
  AlertTriangle,
  Flame,
  Radio,
  WifiOff,
  Crosshair,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
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

  // Modals & Panels
  const [isSosFormOpen, setIsSosFormOpen] = useState(false);
  const [isSosQueueOpen, setIsSosQueueOpen] = useState(false);
  const [isCapIngestOpen, setIsCapIngestOpen] = useState(false);
  const [isBeaconOpen, setIsBeaconOpen] = useState(false);
  const [isSheltersOpen, setIsSheltersOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  // Map & Panel UI
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [mobileTab, setMobileTab] = useState<'map' | 'hazards'>('map');
  const [isPickingLocation, setIsPickingLocation] = useState(false);
  const [pickedLocation, setPickedLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Language & Refreshing
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const effectiveIsOnline = isSimulatedOffline ? false : realIsOnline;

  // Initialize and load data from IndexedDB
  const loadInitialData = useCallback(async () => {
    try {
      // 1. Load SOS records from IndexedDB
      const storedSos = await offlineDB.getAllSos();
      setSosList(storedSos);

      // 2. Load cached CAP alerts or initialize with authentic NDMA samples
      const cached = await offlineDB.getCachedCapAlerts();
      if (cached && cached.length > 0) {
        setAlerts(cached);
      } else {
        const initialAlerts: CapAlert[] = [];
        ALL_SAMPLE_CAP_FEEDS.forEach((xml) => {
          try {
            const parsed = parseCapXml(xml);
            initialAlerts.push(...parsed);
          } catch (e) {
            console.error('Initial feed parse error:', e);
          }
        });
        setAlerts(initialAlerts);
        await offlineDB.cacheCapAlerts(initialAlerts);
      }
    } catch (err) {
      console.error('Data initialization error:', err);
    }
  }, []);

  useEffect(() => {
    loadInitialData();

    // Listen for real online/offline events
    const handleOnline = () => setRealIsOnline(true);
    const handleOffline = () => setRealIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get user GPS position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
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
  }, [loadInitialData]);

  // Refresh SOS list
  const refreshSosList = async () => {
    const list = await offlineDB.getAllSos();
    setSosList(list);
  };

  // Reload CAP feeds
  const handleRefreshFeeds = async () => {
    setIsRefreshing(true);
    setTimeout(async () => {
      await loadInitialData();
      setIsRefreshing(false);
    }, 600);
  };

  // Ingest new alerts callback
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

  const handleSelectShelterOnMap = (shelter: Shelter) => {
    // MapView will fly to the shelter
  };

  const pendingSosCount = sosList.filter((s) => s.syncStatus === 'pending_offline').length;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#070b14] text-slate-100 font-sans">
      {/* Top Navigation */}
      <Navbar
        isOnline={effectiveIsOnline}
        onToggleSimulateOffline={() => setIsSimulatedOffline(!isSimulatedOffline)}
        isSimulatedOffline={isSimulatedOffline}
        pendingSosCount={pendingSosCount}
        totalSosCount={sosList.length}
        onOpenSosForm={() => {
          setPickedLocation(null);
          setIsSosFormOpen(true);
        }}
        onOpenSosQueue={() => setIsSosQueueOpen(true)}
        onOpenBeacon={() => setIsBeaconOpen(true)}
        onOpenShelters={() => setIsSheltersOpen(true)}
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
                : 'No network connection detected. Using cached geospatial layers and offline queue.'}
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
          NDMA Feeds ({alerts.length})
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

      {/* 5. Relief Shelters Locator Modal */}
      <ShelterLocatorModal
        isOpen={isSheltersOpen}
        onClose={() => setIsSheltersOpen(false)}
        userLocation={userLocation}
        onSelectShelterOnMap={handleSelectShelterOnMap}
      />

      {/* 6. Offline SOPs & Emergency Contacts Modal */}
      <OfflineGuidesModal
        isOpen={isGuidesOpen}
        onClose={() => setIsGuidesOpen(false)}
      />
    </div>
  );
}
export default App;


(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/indexedDB.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/syncService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$liveAlertsMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/liveAlertsMapper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HazardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HazardPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SosFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SosFormModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SosQueueDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SosQueueDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CapIngestionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CapIngestionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DistressBeaconModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DistressBeaconModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineGuidesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OfflineGuidesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAlertId, setSelectedAlertId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sosList, setSosList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Network & simulation state
    const [isSimulatedOffline, setIsSimulatedOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [realIsOnline, setRealIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof navigator !== 'undefined' ? navigator.onLine : true);
    // Live polling state
    const [lastFetchedTime, setLastFetchedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetchError, setFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUsingCachedData, setIsUsingCachedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modals & Panels
    const [isSosFormOpen, setIsSosFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSosQueueOpen, setIsSosQueueOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCapIngestOpen, setIsCapIngestOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBeaconOpen, setIsBeaconOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGuidesOpen, setIsGuidesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Map & Panel UI
    const [isPanelCollapsed, setIsPanelCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileTab, setMobileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('map');
    const [isPickingLocation, setIsPickingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pickedLocation, setPickedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Language
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // State-Wise Search & Camera Framing
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [targetBbox, setTargetBbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelectState = (stateName, bbox)=>{
        setSelectedState(stateName);
        setTargetBbox(bbox);
    };
    const effectiveIsOnline = isSimulatedOffline ? false : realIsOnline;
    // Loads the latest cached NDMA alerts from IndexedDB
    const loadCachedAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[loadCachedAlerts]": async ()=>{
            try {
                const cached = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getCachedCapAlerts();
                if (cached && cached.length > 0) {
                    setAlerts(cached);
                    setIsUsingCachedData(true);
                    console.log('[Offline Cache] Automatically loaded', cached.length, 'disaster alerts from IndexedDB');
                    return;
                }
                // Check full JSON payload backup
                const payload = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getLatestNdmaPayload();
                if (payload) {
                    const raw = Array.isArray(payload) ? payload : Array.isArray(payload?.alerts) ? payload.alerts : [];
                    if (raw.length > 0) {
                        const mapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$liveAlertsMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapLiveAlertsToCap"])(raw);
                        setAlerts(mapped);
                        setIsUsingCachedData(true);
                        console.log('[Offline Cache] Loaded', mapped.length, 'alerts from latest NDMA JSON payload in IndexedDB');
                    }
                }
            } catch (err) {
                console.warn('[Offline Cache] Error loading cached alerts from IndexedDB:', err);
            }
        }
    }["App.useCallback[loadCachedAlerts]"], []);
    // Primary function to fetch live NDMA alerts from /api/alerts
    const fetchLiveAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[fetchLiveAlerts]": async ()=>{
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].saveLatestNdmaPayload(data);
                const rawAlerts = Array.isArray(data) ? data : Array.isArray(data?.alerts) ? data.alerts : [];
                if (rawAlerts.length > 0) {
                    const mapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$liveAlertsMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapLiveAlertsToCap"])(rawAlerts);
                    setAlerts(mapped);
                    setLastFetchedTime(new Date(data?.timestamp || Date.now()));
                    setIsUsingCachedData(false);
                    // Cache mapped live alerts to local IndexedDB
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].cacheCapAlerts(mapped);
                } else {
                    await loadCachedAlerts();
                }
            } catch (err) {
                console.warn('[Live Alerts] Network unreachable, automatically loading alerts from IndexedDB cache:', err);
                setFetchError(err?.message || 'Offline mode: Loaded alerts from local cache');
                // Connection dropped or failed, automatically load from local IndexedDB cache
                await loadCachedAlerts();
            } finally{
                setIsRefreshing(false);
            }
        }
    }["App.useCallback[fetchLiveAlerts]"], [
        loadCachedAlerts
    ]);
    // 1. Initial load & hourly (3,600,000 ms) polling interval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            // If online, fetch live alerts; if offline, load cached alerts immediately
            if (typeof navigator !== 'undefined' && !navigator.onLine) {
                loadCachedAlerts();
            } else {
                fetchLiveAlerts();
            }
            // Polling interval to re-fetch live alerts every 1 hour (3,600,000 milliseconds)
            const intervalId = setInterval({
                "App.useEffect.intervalId": ()=>{
                    if (typeof navigator !== 'undefined' && navigator.onLine && !isSimulatedOffline) {
                        fetchLiveAlerts();
                    }
                }
            }["App.useEffect.intervalId"], 3600000);
            return ({
                "App.useEffect": ()=>clearInterval(intervalId)
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        fetchLiveAlerts,
        loadCachedAlerts,
        isSimulatedOffline
    ]);
    // 2. Initialize SOS records, GPS location, and online/offline event listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            // Load SOS records from IndexedDB
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getAllSos().then(setSosList).catch(console.error);
            // Event listener for navigator.onLine; automatically refresh or load cache
            const handleOnline = {
                "App.useEffect.handleOnline": ()=>{
                    console.log('[Network Status] Connection restored. Automatically triggering background sync for NDMA feed...');
                    setRealIsOnline(true);
                    setIsUsingCachedData(false);
                    // Automatically trigger a background sync to refresh the NDMA feed the moment the connection is restored
                    fetchLiveAlerts();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingQueue();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingMeshQueue();
                }
            }["App.useEffect.handleOnline"];
            const handleOffline = {
                "App.useEffect.handleOffline": ()=>{
                    console.log('[Network Status] Connection dropped. Automatically loading disaster alerts from local IndexedDB cache...');
                    setRealIsOnline(false);
                    setIsUsingCachedData(true);
                    // Automatically load the most recent disaster alerts from local cache
                    loadCachedAlerts();
                }
            }["App.useEffect.handleOffline"];
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
            // Get user GPS position & queue location ping for offline mesh synchronization
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition({
                    "App.useEffect": (pos)=>{
                        const loc = {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                        };
                        setUserLocation(loc);
                        // Prepare state management for offline mesh sync by queuing outgoing location pings
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].queueLocationPing(loc.lat, loc.lng, pos.coords.accuracy).catch({
                            "App.useEffect": ()=>{}
                        }["App.useEffect"]);
                    }
                }["App.useEffect"], {
                    "App.useEffect": ()=>{
                        // Default to central India/Odisha coordinates
                        setUserLocation({
                            lat: 19.8135,
                            lng: 85.8312
                        });
                    }
                }["App.useEffect"], {
                    enableHighAccuracy: true,
                    timeout: 5000
                });
            }
            // Subscribe to Sync service updates
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].subscribe({
                "App.useEffect.unsubscribe": (state)=>{
                    if (state.syncedCount > 0) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getAllSos().then(setSosList);
                    }
                }
            }["App.useEffect.unsubscribe"]);
            return ({
                "App.useEffect": ()=>{
                    window.removeEventListener('online', handleOnline);
                    window.removeEventListener('offline', handleOffline);
                    unsubscribe();
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        fetchLiveAlerts,
        loadCachedAlerts
    ]);
    // Toggle offline simulation with automatic cache/sync transitions
    const handleToggleSimulateOffline = ()=>{
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingQueue();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingMeshQueue();
        }
    };
    // Refresh SOS list
    const refreshSosList = async ()=>{
        const list = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getAllSos();
        setSosList(list);
    };
    // Manual refresh triggers live re-fetch from /api/alerts
    const handleRefreshFeeds = ()=>{
        fetchLiveAlerts();
    };
    // Ingest manual alerts callback (from custom CAP XML upload)
    const handleAlertsIngested = (newAlerts)=>{
        setAlerts((prev)=>{
            const existingIds = new Set(prev.map((a)=>a.identifier));
            const fresh = newAlerts.filter((a)=>!existingIds.has(a.identifier));
            return [
                ...fresh,
                ...prev
            ];
        });
        if (newAlerts.length > 0) {
            setSelectedAlertId(newAlerts[0].identifier);
        }
    };
    // Map Click Handler (for location picking)
    const handleMapClickLocation = (lat, lng)=>{
        if (isPickingLocation) {
            setPickedLocation({
                lat,
                lng
            });
            setIsPickingLocation(false);
            setIsSosFormOpen(true);
        }
    };
    const pendingSosCount = sosList.filter((s)=>s.syncStatus === 'pending_offline').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen w-screen overflow-hidden bg-[#070b14] text-slate-100 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                isOnline: effectiveIsOnline,
                onToggleSimulateOffline: handleToggleSimulateOffline,
                isSimulatedOffline: isSimulatedOffline,
                pendingSosCount: pendingSosCount,
                totalSosCount: sosList.length,
                onOpenSosForm: ()=>{
                    setPickedLocation(null);
                    setIsSosFormOpen(true);
                },
                onOpenSosQueue: ()=>setIsSosQueueOpen(true),
                onOpenBeacon: ()=>setIsBeaconOpen(true),
                onOpenGuides: ()=>setIsGuidesOpen(true),
                lang: lang,
                onToggleLang: ()=>setLang(lang === 'en' ? 'hi' : 'en')
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            !effectiveIsOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-600/90 text-slate-950 px-4 py-1.5 text-xs font-bold flex items-center justify-between border-b border-amber-400 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                className: "w-4 h-4 shrink-0 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "OFFLINE-FIRST MODE ACTIVE:",
                                    ' ',
                                    isSimulatedOffline ? 'Simulated cell tower outage. Broadcasts will store in local IndexedDB.' : 'No network connection detected. Using cached live geospatial layers and offline queue.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsSimulatedOffline(false),
                        className: "text-[11px] underline hover:text-black font-semibold",
                        children: isSimulatedOffline ? 'Resume Online Mode' : 'Check Network'
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:hidden border-b border-slate-800 bg-slate-950 text-xs font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileTab('map'),
                        className: `flex-1 py-2 text-center border-b-2 ${mobileTab === 'map' ? 'border-red-500 text-white bg-slate-900' : 'border-transparent text-slate-400'}`,
                        children: "Geospatial Map"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileTab('hazards'),
                        className: `flex-1 py-2 text-center border-b-2 flex items-center justify-center gap-1.5 ${mobileTab === 'hazards' ? 'border-red-500 text-white bg-slate-900' : 'border-transparent text-slate-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: "w-3.5 h-3.5 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            "Live Warnings (",
                            alerts.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${mobileTab === 'hazards' ? 'block' : 'hidden'} md:block h-full transition-all duration-300 z-10 ${isPanelCollapsed ? 'w-0 overflow-hidden border-none' : 'w-full md:w-[380px] lg:w-[420px]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HazardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HazardPanel"], {
                            alerts: alerts,
                            selectedAlertId: selectedAlertId,
                            onSelectAlert: (id)=>{
                                setSelectedAlertId(id);
                                if (window.innerWidth < 768) setMobileTab('map');
                            },
                            onOpenIngestModal: ()=>setIsCapIngestOpen(true),
                            onRefreshFeeds: handleRefreshFeeds,
                            isRefreshing: isRefreshing,
                            lastFetchedTime: lastFetchedTime,
                            selectedState: selectedState,
                            onSelectState: handleSelectState,
                            currentLang: lang,
                            isOffline: !effectiveIsOnline || isUsingCachedData
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsPanelCollapsed(!isPanelCollapsed),
                        className: "hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 p-1 rounded-r-md shadow-xl",
                        style: {
                            left: isPanelCollapsed ? '0' : '420px'
                        },
                        title: isPanelCollapsed ? 'Expand Alert Feed' : 'Collapse Alert Feed',
                        children: isPanelCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 377,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 377,
                            columnNumber: 70
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-1 h-full ${mobileTab === 'map' ? 'block' : 'hidden'} md:block relative`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapView"], {
                            alerts: alerts,
                            selectedAlertId: selectedAlertId,
                            onSelectAlert: setSelectedAlertId,
                            sosList: sosList,
                            userLocation: userLocation,
                            onMapClickLocation: handleMapClickLocation,
                            isPickingLocation: isPickingLocation,
                            targetBbox: targetBbox
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SosFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SosFormModal"], {
                isOpen: isSosFormOpen,
                onClose: ()=>setIsSosFormOpen(false),
                onSosAdded: ()=>{
                    refreshSosList();
                },
                initialCoords: pickedLocation || userLocation,
                onRequestPickOnMap: ()=>{
                    setIsPickingLocation(true);
                    if (window.innerWidth < 768) setMobileTab('map');
                },
                isOnline: effectiveIsOnline
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SosQueueDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SosQueueDrawer"], {
                isOpen: isSosQueueOpen,
                onClose: ()=>setIsSosQueueOpen(false),
                sosList: sosList,
                onRefresh: refreshSosList,
                isOnline: effectiveIsOnline
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CapIngestionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapIngestionModal"], {
                isOpen: isCapIngestOpen,
                onClose: ()=>setIsCapIngestOpen(false),
                onAlertsIngested: handleAlertsIngested
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DistressBeaconModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistressBeaconModal"], {
                isOpen: isBeaconOpen,
                onClose: ()=>setIsBeaconOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineGuidesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OfflineGuidesModal"], {
                isOpen: isGuidesOpen,
                onClose: ()=>setIsGuidesOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s(App, "qfk3SAHvMUVc3UKUBPohyHk160Y=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/App.tsx [app-client] (ecmascript)"));
}),
"[project]/src/components/CapIngestionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapIngestionModal",
    ()=>CapIngestionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/capParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/indexedDB.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockCapFeeds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const CapIngestionModal = ({ isOpen, onClose, onAlertsIngested })=>{
    _s();
    const [xmlInput, setXmlInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedUrl, setFeedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoadingUrl, setIsLoadingUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [parseError, setParseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [parsePreview, setParsePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) return null;
    const handlePreviewXml = (xml)=>{
        setXmlInput(xml);
        setParseError(null);
        if (!xml.trim()) {
            setParsePreview(null);
            return;
        }
        try {
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCapXml"])(xml);
            setParsePreview(parsed);
        } catch (err) {
            setParseError(err.message || 'Invalid CAP XML syntax');
            setParsePreview(null);
        }
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event)=>{
            const content = event.target?.result;
            handlePreviewXml(content);
        };
        reader.readAsText(file);
    };
    const handleFetchUrl = async ()=>{
        if (!feedUrl) return;
        setIsLoadingUrl(true);
        setParseError(null);
        try {
            // In web browsers, many external URLs require CORS. We attempt direct fetch first, then CORS proxy.
            let response;
            try {
                response = await fetch(feedUrl);
            } catch (e) {
                // Fallback to public CORS proxy
                response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`);
            }
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Failed to retrieve feed`);
            }
            const text = await response.text();
            handlePreviewXml(text);
        } catch (err) {
            setParseError(`Could not fetch URL: ${err.message}. Please paste raw CAP XML directly.`);
        } finally{
            setIsLoadingUrl(false);
        }
    };
    const handleCommitIngestion = async ()=>{
        if (!parsePreview || parsePreview.length === 0) return;
        // Cache to IndexedDB for offline persistence
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].cacheCapAlerts(parsePreview);
        onAlertsIngested(parsePreview);
        onClose();
    };
    const handleLoadSample = (sampleXml)=>{
        handlePreviewXml(sampleXml);
    };
    const handleLoadAllSamples = async ()=>{
        const allAlerts = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_SAMPLE_CAP_FEEDS"].forEach((xml)=>{
            try {
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCapXml"])(xml);
                allAlerts.push(...parsed);
            } catch (err) {}
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].cacheCapAlerts(allAlerts);
        onAlertsIngested(allAlerts);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-cyan-600/20 border border-cyan-500/40 rounded-lg text-cyan-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CapIngestionModal.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-white uppercase tracking-wide",
                                            children: "NDMA CAP Feed Ingestion Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "OASIS CAP v1.1 & v1.2 Standard • SACHET India XML / GeoJSON Parser"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CapIngestionModal.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-y-auto space-y-4 text-xs text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                            children: "Quick Load Official NDMA Preset Scenarios:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLoadAllSamples,
                                            className: "text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Ingest All 5 Scenarios"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_FOREST_FIRE_FSI_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-orange-950/60 border border-orange-500/50 text-orange-200 hover:bg-orange-900/80 transition flex items-center gap-1 font-semibold",
                                            children: "🔥 FSI Forest Fire (Similipal)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_CYCLONE_CAP_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-sky-950/50 border border-sky-500/50 text-sky-200 hover:bg-sky-900/70 transition flex items-center gap-1 font-semibold",
                                            children: "🌪️ Cyclone 'Varuna' (Odisha/AP)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_DGRE_LANDSLIDE_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-amber-950/60 border border-amber-500/50 text-amber-200 hover:bg-amber-900/80 transition flex items-center gap-1 font-semibold",
                                            children: "⛰️ DGRE Landslide (NH-44 J&K)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_EARTHQUAKE_CAP_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-red-950/60 border border-red-500/50 text-red-200 hover:bg-red-900/80 transition flex items-center gap-1 font-semibold",
                                            children: "⚡ M6.4 Earthquake (Chamoli Fault)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_FLOOD_CAP_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-blue-950/40 border border-blue-500/40 text-blue-200 hover:bg-blue-900/60 transition",
                                            children: "🌊 Brahmaputra Flood (Assam)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_LANDSLIDE_CAP_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-200 hover:bg-amber-900/60 transition",
                                            children: "⛰️ Mandi Landslide (Himachal)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_HEATWAVE_CAP_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-orange-950/40 border border-orange-500/40 text-orange-200 hover:bg-orange-900/60 transition",
                                            children: "☀️ 48.5°C Heatwave (Rajasthan)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLoadSample(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockCapFeeds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_MUMBAI_SURGE_XML"]),
                                            className: "px-2.5 py-1.5 rounded bg-yellow-950/40 border border-yellow-500/40 text-yellow-200 hover:bg-yellow-900/60 transition",
                                            children: "🌊 High Spring Tide (Mumbai)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "w-3.5 h-3.5 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Live Feed URL (RSS / CAP Atom)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: feedUrl,
                                                    onChange: (e)=>setFeedUrl(e.target.value),
                                                    placeholder: "https://sachet.ndma.gov.in/cap/rss...",
                                                    className: "flex-1 bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleFetchUrl,
                                                    disabled: isLoadingUrl || !feedUrl,
                                                    className: "px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-semibold rounded text-xs transition",
                                                    children: isLoadingUrl ? 'Fetching...' : 'Fetch'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-3.5 h-3.5 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Upload CAP XML (.xml / .cap)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".xml,.cap,.txt,.json",
                                            onChange: handleFileUpload,
                                            className: "w-full text-xs text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-400 hover:file:bg-slate-700 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                    children: "Paste Raw CAP XML Content:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 6,
                                    value: xmlInput,
                                    onChange: (e)=>handlePreviewXml(e.target.value),
                                    placeholder: "Paste <alert xmlns='urn:oasis:names:tc:emergency:cap:1.2'> ... </alert>",
                                    className: "w-full bg-slate-950 border border-slate-700 rounded-lg p-3 font-mono text-[11px] text-cyan-300 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        parseError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-300 flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-red-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: "XML Parse Failure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-red-200",
                                            children: parseError
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        parsePreview && parsePreview.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/50 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-emerald-400 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Successfully Validated ",
                                                parsePreview.length,
                                                " Alert(s)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-mono text-emerald-300",
                                            children: parsePreview[0].identifier
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                parsePreview.map((alert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-white mb-0.5",
                                                children: alert.info.headline
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 mb-1",
                                                children: [
                                                    "Severity: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-red-400",
                                                        children: alert.info.severity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " • Category: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: alert.info.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " • Polygons: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: alert.info.areas.filter((a)=>a.polygon).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 text-[10px] line-clamp-2",
                                                children: alert.info.areas.map((a)=>a.areaDesc).join(' | ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CapIngestionModal.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/CapIngestionModal.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setXmlInput('');
                                setParsePreview(null);
                                setParseError(null);
                            },
                            className: "px-3 py-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 flex items-center gap-1 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCommitIngestion,
                            disabled: !parsePreview || parsePreview.length === 0,
                            className: "px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-950/50 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4 fill-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Ingest & Render On Map"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CapIngestionModal.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CapIngestionModal.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CapIngestionModal.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CapIngestionModal.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CapIngestionModal, "AUYOONaV1u02+mRaNqB7YtmpdsM=");
_c = CapIngestionModal;
var _c;
__turbopack_context__.k.register(_c, "CapIngestionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DistressBeaconModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistressBeaconModal",
    ()=>DistressBeaconModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$soundBeacon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/soundBeacon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DistressBeaconModal = ({ isOpen, onClose })=>{
    _s();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStrobeActive, setIsStrobeActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [screenTorch, setScreenTorch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPulseOn, setIsPulseOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistressBeaconModal.useEffect": ()=>{
            return ({
                "DistressBeaconModal.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$soundBeacon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundBeacon"].stop();
                }
            })["DistressBeaconModal.useEffect"];
        }
    }["DistressBeaconModal.useEffect"], []);
    if (!isOpen) return null;
    const handleToggleSound = ()=>{
        if (isActive) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$soundBeacon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundBeacon"].stop();
            setIsActive(false);
            setIsPulseOn(false);
        } else {
            setIsActive(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$soundBeacon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundBeacon"].start((pulse)=>{
                setIsPulseOn(pulse);
            });
        }
    };
    const handleClose = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$soundBeacon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundBeacon"].stop();
        setIsActive(false);
        setIsStrobeActive(false);
        setScreenTorch(false);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors duration-100 ${screenTorch && isPulseOn ? 'bg-white' : 'bg-black/90 backdrop-blur-md'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md bg-slate-900 border-2 border-red-600 rounded-2xl p-6 shadow-2xl text-slate-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DistressBeaconModal.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                className: `w-8 h-8 ${isActive ? 'animate-ping' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-black uppercase tracking-wider text-white",
                                    children: "Tactical Distress Beacon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 mt-1",
                                    children: "International Morse Code SOS (... --- ...) Audio & Visual Beacon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-4 h-4 rounded-full transition-all duration-75 ${isPulseOn ? 'bg-red-500 scale-125 shadow-lg shadow-red-500' : 'bg-slate-800 scale-100'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm tracking-widest text-red-400 font-bold",
                                    children: isActive ? 'TRANSMITTING S-O-S BEACON' : 'BEACON STANDBY'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleSound,
                                    className: `w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-xl transition ${isActive ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600' : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/60'}`,
                                    children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Silence Audible Beacon"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-5 h-5 animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Activate Audible SOS (880Hz)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setScreenTorch(!screenTorch),
                                    className: `w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2 border transition ${screenTorch ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        screenTorch ? 'Disable Visual Strobe' : 'Synchronize Screen Strobe (Torch)'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-slate-400 p-2.5 bg-slate-950/60 rounded-lg text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-slate-300 mb-0.5",
                                    children: "Field Guidance:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Audible 880Hz acoustic pulses penetrate collapsed rubble, heavy rainfall, and flood noise. Keep screen pointed upward toward rescue search drones or helicopters."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DistressBeaconModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DistressBeaconModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DistressBeaconModal.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/DistressBeaconModal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DistressBeaconModal, "JdEreC2uwDZU4VHkc6zEDhoTXsg=");
_c = DistressBeaconModal;
var _c;
__turbopack_context__.k.register(_c, "DistressBeaconModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HazardPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrackedEarthIcon",
    ()=>CrackedEarthIcon,
    "FallingRocksMountainIcon",
    ()=>FallingRocksMountainIcon,
    "HazardPanel",
    ()=>HazardPanel,
    "MountainSnowSlideIcon",
    ()=>MountainSnowSlideIcon,
    "RotatingHurricaneIcon",
    ()=>RotatingHurricaneIcon,
    "SeismicEarthquakeIcon",
    ()=>SeismicEarthquakeIcon,
    "formatReadableDate",
    ()=>formatReadableDate,
    "getHazardCategory",
    ()=>getHazardCategory,
    "getHazardIcon",
    ()=>getHazardIcon,
    "getTemporalStatus",
    ()=>getTemporalStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StateFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$liveAlertsMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/liveAlertsMapper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.mjs [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$corner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code-corner.mjs [app-client] (ecmascript) <export default as FileCode2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-lightning.mjs [app-client] (ecmascript) <export default as CloudLightning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$hail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudHail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-hail.mjs [app-client] (ecmascript) <export default as CloudHail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves-horizontal.mjs [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.mjs [app-client] (ecmascript) <export default as Snowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const RotatingHurricaneIcon = ({ className = 'w-4 h-4 text-sky-600' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${className} animate-spin`,
        style: {
            animationDuration: '3.5s'
        },
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2.5a9.5 9.5 0 0 0-9.1 12.4l1.8-.7A7.5 7.5 0 0 1 12 4.5V2.5z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21.5a9.5 9.5 0 0 0 9.1-12.4l-1.8.7A7.5 7.5 0 0 1 12 19.5v2z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "2.2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = RotatingHurricaneIcon;
const FallingRocksMountainIcon = ({ className = 'w-4 h-4 text-amber-700' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m2 20 7-14 4 7 3-3 6 10H2z"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 11l-1 2",
                strokeDasharray: "1 1"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "14",
                r: "1.3",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "17",
                r: "1.1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "18",
                r: "0.9",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = FallingRocksMountainIcon;
const MountainSnowSlideIcon = ({ className = 'w-4 h-4 text-sky-400' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m2 20 7-14 4 7 3-3 6 10H2z"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 9l3 3m0 0l3-3m-3 3V6",
                strokeWidth: "2.2",
                stroke: "#38bdf8"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "1.2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "17",
                r: "1.2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 123,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "19",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MountainSnowSlideIcon;
const CrackedEarthIcon = ({ className = 'w-4 h-4 text-amber-700' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v6l-3 4 5 3-2 5"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 13l-5 1 2 4"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 140,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 16l6-1-1 3"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 141,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = CrackedEarthIcon;
const SeismicEarthquakeIcon = ({ className = 'w-4 h-4 text-red-600' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h4l2-6 3 11 3-8 2 4h6"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 157,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 19c3.5-1.5 10.5-1.5 14 0",
                strokeDasharray: "2 1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 158,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 21.5c2.5-.8 5.5-.8 8 0",
                strokeDasharray: "2 1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 159,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SeismicEarthquakeIcon;
function getHazardCategory(title = '', description = '', event = '') {
    const combined = `${event} ${title} ${description}`.toLowerCase();
    // 1. Avalanche (DGRE / DRDO / SASE)
    if (combined.includes('avalanche') || combined.includes('snowslide') || combined.includes('snow avalanche')) {
        return 'avalanche';
    }
    // 2. Snowfall & Heavy Snow
    if (combined.includes('snowfall') || combined.includes('heavy snow') || combined.includes('snow') || combined.includes('blizzard')) {
        return 'snowfall';
    }
    // 3. Fire / Forest Fire (FSI)
    if (combined.includes('forest fire') || combined.includes('fire') || combined.includes('wildfire') || combined.includes('bushfire') || combined.includes('fsi') || combined.includes('van agni')) {
        return 'fire';
    }
    // 4. Cyclone / Depression
    if (combined.includes('cyclone') || combined.includes('depression') || combined.includes('cyclonic') || combined.includes('storm surge') || combined.includes('gale') || combined.includes('squall')) {
        return 'cyclone';
    }
    // 5. Earthquake / Tremor
    if (combined.includes('earthquake') || combined.includes('tremor') || combined.includes('seismic') || combined.includes('quake') || combined.includes('aftershock')) {
        return 'earthquake';
    }
    // 6. Hailstorm / Hail
    if (combined.includes('hail') || combined.includes('hailstorm')) {
        return 'hailstorm';
    }
    // 7. Flood / Inundation
    if (combined.includes('flood') || combined.includes('inundation') || combined.includes('waterlogging') || combined.includes('deluge')) {
        return 'flood';
    }
    // 8. Drought / Dry Spell
    if (combined.includes('drought') || combined.includes('dry spell') || combined.includes('water scarcity') || combined.includes('arid') || combined.includes('parched')) {
        return 'drought';
    }
    // 9. Heatwaves / Heat Wave / Loo
    if (combined.includes('heat') || combined.includes('heatwave') || combined.includes('heat wave') || combined.includes('loo') || combined.includes('hot')) {
        return 'heatwave';
    }
    // 10. Lightning (Isolated without rain)
    if ((combined.includes('lightning') || combined.includes('electric') || combined.includes('bolt') || combined.includes('పిడుగులు')) && !combined.includes('rain') && !combined.includes('thunder')) {
        return 'lightning';
    }
    // 11. Thunderstorm (Rain + Lightning)
    if (combined.includes('thunder') || combined.includes('thunderstorm') || combined.includes('lightning') || combined.includes('ఉరుములు') || combined.includes('పిడుగులు')) {
        return 'thunderstorm';
    }
    // 12. Rainfall / Downpour
    if (combined.includes('rain') || combined.includes('rainfall') || combined.includes('downpour') || combined.includes('precipitation')) {
        return 'rainfall';
    }
    // 13. Landslide / Mudslide
    if (combined.includes('landslide') || combined.includes('mudslide') || combined.includes('debris flow') || combined.includes('rockfall') || combined.includes('slope collapse')) {
        return 'landslide';
    }
    return 'other';
}
function getHazardIcon(category, className = 'w-4 h-4') {
    switch(category){
        case 'fire':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                className: `${className} text-orange-500 animate-pulse`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 269,
                columnNumber: 14
            }, this);
        case 'cyclone':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingHurricaneIcon, {
                className: `${className} text-sky-400`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 271,
                columnNumber: 14
            }, this);
        case 'earthquake':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeismicEarthquakeIcon, {
                className: `${className} text-red-500`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 273,
                columnNumber: 14
            }, this);
        case 'rainfall':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                className: `${className} text-blue-400`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 275,
                columnNumber: 14
            }, this);
        case 'thunderstorm':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__["CloudLightning"], {
                className: `${className} text-amber-300 animate-pulse`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 277,
                columnNumber: 14
            }, this);
        case 'hailstorm':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$hail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudHail$3e$__["CloudHail"], {
                className: `${className} text-cyan-200`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 279,
                columnNumber: 14
            }, this);
        case 'flood':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                className: `${className} text-blue-500`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 281,
                columnNumber: 14
            }, this);
        case 'drought':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrackedEarthIcon, {
                className: `${className} text-amber-700`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 283,
                columnNumber: 14
            }, this);
        case 'heatwave':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: `${className} text-amber-500`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 285,
                columnNumber: 14
            }, this);
        case 'lightning':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                className: `${className} text-yellow-400 animate-pulse`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 287,
                columnNumber: 14
            }, this);
        case 'snowfall':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"], {
                className: `${className} text-sky-200`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 289,
                columnNumber: 14
            }, this);
        case 'avalanche':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MountainSnowSlideIcon, {
                className: `${className} text-sky-300`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 291,
                columnNumber: 14
            }, this);
        case 'landslide':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingRocksMountainIcon, {
                className: `${className} text-amber-600`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 293,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: `${className} text-amber-400`
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 295,
                columnNumber: 14
            }, this);
    }
}
function getTemporalStatus(effectiveStr, expiresStr, fallbackSent) {
    const now = Date.now();
    const effTime = effectiveStr ? new Date(effectiveStr).getTime() : fallbackSent ? new Date(fallbackSent).getTime() : now;
    const expTime = expiresStr ? new Date(expiresStr).getTime() : NaN;
    // OVER: If the current time is strictly greater than the expires date
    if (!isNaN(expTime) && now > expTime) {
        return {
            status: 'OVER',
            label: 'Over',
            boxClass: 'border-red-500 bg-red-50 text-red-900',
            badgeClass: 'bg-red-200 text-red-900 border-red-400',
            dotColor: 'bg-red-600',
            dividerClass: 'border-red-200/90',
            detailsBg: 'bg-red-100/70'
        };
    }
    // UPCOMING: If the current time is before the effective date
    if (!isNaN(effTime) && now < effTime) {
        return {
            status: 'UPCOMING',
            label: 'Upcoming',
            boxClass: 'border-yellow-500 bg-yellow-50 text-yellow-900',
            badgeClass: 'bg-yellow-200 text-yellow-900 border-yellow-400',
            dotColor: 'bg-yellow-600',
            dividerClass: 'border-yellow-200/90',
            detailsBg: 'bg-yellow-100/70'
        };
    }
    // ONGOING: If the current time falls between the effective and expires dates
    return {
        status: 'ONGOING',
        label: 'Ongoing',
        boxClass: 'border-green-500 bg-green-50 text-green-900',
        badgeClass: 'bg-green-200 text-green-900 border-green-400',
        dotColor: 'bg-green-600',
        dividerClass: 'border-green-200/90',
        detailsBg: 'bg-green-100/70'
    };
}
function formatReadableDate(dateInput) {
    if (!dateInput) return 'N/A';
    try {
        const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
        if (isNaN(d.getTime())) return String(dateInput);
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        const month = monthNames[d.getMonth()];
        const day = d.getDate();
        const year = d.getFullYear();
        let hours = d.getHours();
        const minutes = d.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        return `${month} ${day}, ${year} - ${hours}:${minutesStr} ${ampm}`;
    } catch  {
        return String(dateInput);
    }
}
const HazardPanel = ({ alerts, selectedAlertId, onSelectAlert, onOpenIngestModal, onRefreshFeeds, isRefreshing = false, lastFetchedTime, selectedState = null, onSelectState, currentLang = 'en', isOffline = false })=>{
    _s();
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [hazardFilter, setHazardFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [severityFilter, setSeverityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [expandedAlerts, setExpandedAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleExpand = (id)=>{
        setExpandedAlerts((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    // Hazard counts (considering active state filter if selected)
    const stateScopedAlerts = selectedState ? alerts.filter((a)=>{
        const areaDescs = a.info.areas.map((ar)=>ar.areaDesc).join(' ');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStateFromAreaDesc"])(areaDescs, a.info.headline, a.info.description) === selectedState;
    }) : alerts;
    const countForCategory = (cat)=>stateScopedAlerts.filter((a)=>getHazardCategory(a.info.headline, a.info.description, a.info.event) === cat).length;
    const fireCount = countForCategory('fire');
    const cycloneCount = countForCategory('cyclone');
    const avalancheCount = countForCategory('avalanche');
    const snowfallCount = countForCategory('snowfall');
    const earthquakeCount = countForCategory('earthquake');
    const rainfallCount = countForCategory('rainfall');
    const thunderstormCount = countForCategory('thunderstorm');
    const hailstormCount = countForCategory('hailstorm');
    const floodCount = countForCategory('flood');
    const droughtCount = countForCategory('drought');
    const heatwaveCount = countForCategory('heatwave');
    const lightningCount = countForCategory('lightning');
    const landslideCount = countForCategory('landslide');
    const filteredAlerts = alerts.filter((alert)=>{
        // 1. State filter
        if (selectedState) {
            const areaDescs = alert.info.areas.map((a)=>a.areaDesc).join(' ');
            const matchedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStateFromAreaDesc"])(areaDescs, alert.info.headline, alert.info.description);
            if (matchedState !== selectedState) {
                return false;
            }
        }
        // 2. Temporal status filter
        const temporal = getTemporalStatus(alert.info.effective, alert.info.expires, alert.sent);
        if (statusFilter !== 'All' && temporal.label !== statusFilter) {
            return false;
        }
        // 3. Severity filter
        if (severityFilter !== 'All' && alert.info.severity !== severityFilter) {
            return false;
        }
        // 4. Hazard category filter
        if (hazardFilter !== 'All') {
            const cat = getHazardCategory(alert.info.headline, alert.info.description, alert.info.event);
            if (hazardFilter === 'Fire' && cat !== 'fire') return false;
            if (hazardFilter === 'Cyclone' && cat !== 'cyclone') return false;
            if (hazardFilter === 'Avalanche' && cat !== 'avalanche') return false;
            if (hazardFilter === 'Snowfall' && cat !== 'snowfall') return false;
            if (hazardFilter === 'Earthquake' && cat !== 'earthquake') return false;
            if (hazardFilter === 'Rainfall' && cat !== 'rainfall') return false;
            if (hazardFilter === 'Thunderstorm' && cat !== 'thunderstorm') return false;
            if (hazardFilter === 'Hailstorm' && cat !== 'hailstorm') return false;
            if (hazardFilter === 'Flood' && cat !== 'flood') return false;
            if (hazardFilter === 'Drought' && cat !== 'drought') return false;
            if (hazardFilter === 'Heatwave' && cat !== 'heatwave') return false;
            if (hazardFilter === 'Lightning' && cat !== 'lightning') return false;
            if (hazardFilter === 'Landslide' && cat !== 'landslide') return false;
        }
        return true;
    });
    // Returns contextual hazard icon by searching title and description
    const renderHazardBadgeIcon = (event, headline, description = '')=>{
        const category = getHazardCategory(headline, description, event);
        return getHazardIcon(category, 'w-4 h-4');
    };
    const getSeverityBadge = (severity)=>{
        switch(severity){
            case 'Extreme':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs",
                    children: "Red Alert"
                }, void 0, false, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'Severe':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-600 text-white shadow-xs",
                    children: "Orange Alert"
                }, void 0, false, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 495,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'Moderate':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white shadow-xs",
                    children: "Yellow Alert"
                }, void 0, false, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 501,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs",
                    children: "Advisory"
                }, void 0, false, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 507,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0a0f1d] border-r border-slate-800 text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-slate-800 bg-slate-900/60 backdrop-blur flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/image_10.png",
                                        alt: "SANकेत Logo",
                                        className: "h-10 w-auto object-contain select-none drop-shadow-md shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold tracking-wide text-white drop-shadow-md flex items-center leading-none font-sans select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "SAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 font-devanagari",
                                                children: "केत"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onRefreshFeeds,
                                        disabled: isRefreshing,
                                        className: "p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition",
                                        title: "Poll /api/alerts now",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 540,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenIngestModal,
                                        className: "px-2 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 rounded text-xs font-semibold flex items-center gap-1 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$corner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 546,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Ingest"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs px-0.5 pt-0.5 border-t border-slate-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: !isOffline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 556,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                            className: "w-2.5 h-2.5 text-emerald-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 557,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "ONLINE (HQ SYNC ACTIVE)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 border border-slate-600 text-slate-300 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                            className: "w-2.5 h-2.5 text-slate-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OFFLINE - CACHED DATA"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 font-mono truncate",
                                children: lastFetchedTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Synced: ",
                                        formatReadableDate(lastFetchedTime)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Fetching live alerts..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            onSelectState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateFilter"], {
                alerts: alerts,
                selectedState: selectedState || null,
                onSelectState: onSelectState,
                filteredAlertsCount: filteredAlerts.length,
                currentLang: currentLang
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b border-slate-800/80 bg-slate-950/70 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-thin",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase text-slate-400 mr-0.5 shrink-0",
                        children: "Hazard:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        {
                            key: 'All',
                            label: 'All',
                            count: stateScopedAlerts.length,
                            icon: null
                        },
                        {
                            key: 'Fire',
                            label: 'Fires',
                            count: fireCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: "w-3 h-3 text-orange-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 594,
                                columnNumber: 66
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Cyclone',
                            label: 'Cyclones',
                            count: cycloneCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingHurricaneIcon, {
                                className: "w-3 h-3 text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 595,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Avalanche',
                            label: 'Avalanches',
                            count: avalancheCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MountainSnowSlideIcon, {
                                className: "w-3 h-3 text-sky-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 596,
                                columnNumber: 81
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Snowfall',
                            label: 'Snow',
                            count: snowfallCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"], {
                                className: "w-3 h-3 text-sky-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 597,
                                columnNumber: 73
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Earthquake',
                            label: 'Quakes',
                            count: earthquakeCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeismicEarthquakeIcon, {
                                className: "w-3 h-3 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 598,
                                columnNumber: 79
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Rainfall',
                            label: 'Rain',
                            count: rainfallCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                className: "w-3 h-3 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 599,
                                columnNumber: 73
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Thunderstorm',
                            label: 'Storms',
                            count: thunderstormCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__["CloudLightning"], {
                                className: "w-3 h-3 text-amber-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 600,
                                columnNumber: 83
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Hailstorm',
                            label: 'Hail',
                            count: hailstormCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$hail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudHail$3e$__["CloudHail"], {
                                className: "w-3 h-3 text-cyan-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 601,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Flood',
                            label: 'Floods',
                            count: floodCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                className: "w-3 h-3 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 602,
                                columnNumber: 69
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Drought',
                            label: 'Drought',
                            count: droughtCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrackedEarthIcon, {
                                className: "w-3 h-3 text-amber-700"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 603,
                                columnNumber: 74
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Heatwave',
                            label: 'Heat',
                            count: heatwaveCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "w-3 h-3 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 604,
                                columnNumber: 73
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Lightning',
                            label: 'Lightning',
                            count: lightningCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-3 h-3 text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 605,
                                columnNumber: 80
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            key: 'Landslide',
                            label: 'Landslides',
                            count: landslideCount,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingRocksMountainIcon, {
                                className: "w-3 h-3 text-amber-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 606,
                                columnNumber: 81
                            }, ("TURBOPACK compile-time value", void 0))
                        }
                    ].map((item)=>{
                        const isActive = hazardFilter === item.key;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setHazardFilter(item.key),
                            className: `px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${isActive ? 'bg-cyan-950/90 text-cyan-200 border border-cyan-500 shadow-xs' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'}`,
                            children: [
                                item.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-1 rounded-full text-[9px] bg-slate-800 text-slate-300 font-mono",
                                    children: item.count
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.key, true, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 610,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b border-slate-800 bg-slate-950/60 flex items-center gap-1 overflow-x-auto text-[11px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase text-slate-400 mr-1 shrink-0",
                        children: "Status:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 631,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        'All',
                        'Ongoing',
                        'Upcoming',
                        'Over'
                    ].map((st)=>{
                        const count = st === 'All' ? alerts.length : alerts.filter((a)=>getTemporalStatus(a.info.effective, a.info.expires, a.sent).label === st).length;
                        const isActive = statusFilter === st;
                        const dotColor = st === 'Ongoing' ? 'bg-green-500' : st === 'Upcoming' ? 'bg-yellow-500' : st === 'Over' ? 'bg-red-500' : 'bg-slate-400';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStatusFilter(st),
                            className: `px-2 py-1 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${isActive ? 'bg-slate-800 text-white border border-slate-600 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`,
                            children: [
                                st !== 'All' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-1.5 h-1.5 rounded-full ${dotColor}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 660,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: st
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-1 rounded-full text-[9px] bg-slate-700/60 text-slate-300 font-mono",
                                    children: count
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, st, true, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-1.5 border-b border-slate-800/80 bg-slate-950/40 flex items-center gap-1 overflow-x-auto text-[11px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase text-slate-400 mr-1 shrink-0",
                        children: "Severity:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        'All',
                        'Extreme',
                        'Severe',
                        'Moderate'
                    ].map((sev)=>{
                        const count = sev === 'All' ? alerts.length : alerts.filter((a)=>a.info.severity === sev).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSeverityFilter(sev),
                            className: `px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${severityFilter === sev ? 'bg-slate-800 text-white border border-slate-600' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: sev
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-1 rounded-full text-[9px] bg-slate-700/60 text-slate-300 font-mono",
                                    children: count
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, sev, true, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 679,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2.5 space-y-2.5",
                children: isRefreshing && alerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-slate-400 text-xs flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-5 h-5 animate-spin text-cyan-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 701,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Connecting to live NDMA feed..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 702,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 700,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredAlerts.length === 0 ? selectedState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-slate-400 text-xs flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-8 h-8 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 707,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-200",
                            children: [
                                "No Active Warnings in ",
                                selectedState
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 708,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-400",
                            children: "Map has centered on the territory bounds. All systems normal."
                        }, void 0, false, {
                            fileName: "[project]/src/components/HazardPanel.tsx",
                            lineNumber: 709,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 706,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-slate-500 text-xs",
                    children: "No active alerts matching current filters."
                }, void 0, false, {
                    fileName: "[project]/src/components/HazardPanel.tsx",
                    lineNumber: 712,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : filteredAlerts.map((alert)=>{
                    const isSelected = selectedAlertId?.startsWith(alert.identifier) || selectedAlertId === alert.identifier;
                    const isExpanded = expandedAlerts[alert.identifier];
                    const { info } = alert;
                    // Compute temporal status and color-coded styles
                    const temporal = getTemporalStatus(info.effective, info.expires, alert.sent);
                    // Compute clean 'District, State/UT' location subheader
                    const area0 = info.areas[0];
                    const districtStateSubheader = area0?.locationLabel || (area0?.district && area0?.state ? `${area0.district}, ${area0.state}` : null) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$liveAlertsMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDistrictAndState"])(info.areas.map((a)=>a.areaDesc).join('; ')).locationLabel;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl border transition-all duration-200 overflow-hidden cursor-pointer ${temporal.boxClass} ${isSelected ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-[#0a0f1d] shadow-lg scale-[1.01]' : 'hover:shadow-md'}`,
                        onClick: ()=>onSelectAlert(alert.identifier),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    renderHazardBadgeIcon(info.event, info.headline, info.description),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-current line-clamp-1",
                                                        children: info.event
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 745,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border shadow-xs flex items-center gap-1 ${temporal.badgeClass}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `w-1.5 h-1.5 rounded-full ${temporal.dotColor} ${temporal.status === 'ONGOING' ? 'animate-pulse' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            temporal.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    getSeverityBadge(info.severity)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 752,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-current mb-1.5 leading-snug",
                                        children: info.headline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 768,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-[11px] font-semibold text-current opacity-95 mb-1.5 px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 border border-current/20 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3 h-3 text-red-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 774,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-tight truncate",
                                                children: districtStateSubheader
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 775,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 773,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-1 text-[11px] font-medium opacity-85 mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-clamp-2",
                                            children: info.areas.map((a)=>a.areaDesc).join('; ') || 'India Region'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HazardPanel.tsx",
                                            lineNumber: 781,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 780,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col gap-1 text-[10px] pt-1.5 border-t ${temporal.dividerClass}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between font-mono font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-3 h-3 text-current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Effective: ",
                                                                    formatReadableDate(info.effective || alert.sent)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] opacity-70 truncate max-w-[100px]",
                                                        children: alert.identifier
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 788,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            info.expires && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between font-mono text-[9px] opacity-85 pl-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Expires: ",
                                                        formatReadableDate(info.expires)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HazardPanel.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 798,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 787,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 743,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-t ${temporal.dividerClass} bg-black/5 px-3 py-1.5 flex items-center justify-between`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-current flex items-center gap-1",
                                        children: "🎯 Click to Pan & Inspect"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 807,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            toggleExpand(alert.identifier);
                                        },
                                        className: "text-[10px] font-bold text-current hover:underline flex items-center gap-1 py-0.5",
                                        children: [
                                            isExpanded ? 'Hide Details' : 'Full Advisory',
                                            isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 818,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 818,
                                                columnNumber: 71
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 810,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 806,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 ${temporal.detailsBg} text-xs border-t ${temporal.dividerClass} space-y-2`,
                                children: [
                                    info.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold uppercase tracking-wider mb-0.5 text-current opacity-80",
                                                children: "Situation Overview:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 826,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] leading-relaxed text-current font-normal",
                                                children: info.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 829,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 825,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    info.instruction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded bg-black/10 border border-current/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1 text-current",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                        className: "w-3 h-3 text-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Public Directive:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 837,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] leading-relaxed text-current font-medium",
                                                children: info.instruction
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 840,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 836,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center justify-between pt-1 border-t ${temporal.dividerClass} text-[10px] opacity-85`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: [
                                                    "Agency: ",
                                                    info.senderName || alert.sender
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 847,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            info.web && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: info.web,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onClick: (e)=>e.stopPropagation(),
                                                className: "font-bold underline flex items-center gap-1 text-current",
                                                children: [
                                                    "CAP XML ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 35
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HazardPanel.tsx",
                                                lineNumber: 849,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HazardPanel.tsx",
                                        lineNumber: 846,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HazardPanel.tsx",
                                lineNumber: 823,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, alert.identifier, true, {
                        fileName: "[project]/src/components/HazardPanel.tsx",
                        lineNumber: 733,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/HazardPanel.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HazardPanel.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HazardPanel, "9EGZfJNhY+bpIY7RMy+de1RsjPo=");
_c5 = HazardPanel;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "RotatingHurricaneIcon");
__turbopack_context__.k.register(_c1, "FallingRocksMountainIcon");
__turbopack_context__.k.register(_c2, "MountainSnowSlideIcon");
__turbopack_context__.k.register(_c3, "CrackedEarthIcon");
__turbopack_context__.k.register(_c4, "SeismicEarthquakeIcon");
__turbopack_context__.k.register(_c5, "HazardPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisasterMap",
    ()=>MapView,
    "MapView",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maplibre-gl/dist/maplibre-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/bbox/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$centroid$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/centroid/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/capParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$indiaBoundaries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/indiaBoundaries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherFX$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeatherFX.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.mjs [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
function formatReadableTimestamp(dateStr) {
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
    } catch  {
        return dateStr;
    }
}
// Convert CAP Alerts into Centroids GeoJSON FeatureCollection for MapLibre Heatmaps
function capAlertsToCentroidsGeoJson(alerts) {
    const features = [];
    for (const alert of alerts){
        const { info, identifier } = alert;
        const severityWeight = info.severity === 'Extreme' ? 1.0 : info.severity === 'Severe' ? 0.75 : info.severity === 'Moderate' ? 0.5 : 0.25;
        for(let i = 0; i < info.areas.length; i++){
            const area = info.areas[i];
            let centerCoords = null;
            if (area.polygon && area.polygon.length > 0) {
                try {
                    const polyFeat = {
                        type: 'Feature',
                        geometry: {
                            type: 'Polygon',
                            coordinates: area.polygon
                        },
                        properties: {}
                    };
                    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$centroid$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(polyFeat);
                    if (c && c.geometry && c.geometry.coordinates) {
                        centerCoords = [
                            c.geometry.coordinates[0],
                            c.geometry.coordinates[1]
                        ];
                    }
                } catch (err) {
                    console.warn('Centroid calculation failed for alert', identifier, err);
                }
            } else if (area.circle) {
                centerCoords = [
                    area.circle.center[0],
                    area.circle.center[1]
                ];
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
const MapView = ({ alerts, selectedAlertId, onSelectAlert, sosList, userLocation, onMapClickLocation, isPickingLocation = false, targetBbox = null })=>{
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Default to 'satellite' for true-color terrain imagery of India, or 'admin' for vector administrative boundaries
    const [basemapMode, setBasemapMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('satellite');
    const [is3dPitch, setIs3dPitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHazards, setShowHazards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSosMarkers, setShowSosMarkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mapLoaded, setMapLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentZoom, setCurrentZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4.4);
    // 1. Satellite: High-quality satellite raster tile source (Esri World Imagery + Labels)
    const getSatelliteStyle = ()=>{
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
    const getAdministrativeAreaStyle = ()=>{
        return 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
    };
    const getStyleForMode = (mode)=>{
        switch(mode){
            case 'satellite':
                return getSatelliteStyle();
            case 'admin':
                return getAdministrativeAreaStyle();
        }
    };
    // Pre-cache 'Administrative Area' vector map style, glyphs, and sprites locally in CacheStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !('caches' in window)) return;
            const cacheAdminMapResources = {
                "MapView.useEffect.cacheAdminMapResources": async ()=>{
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
                                    fetch(`${data.sprite}.json`).then({
                                        "MapView.useEffect.cacheAdminMapResources": (r)=>{
                                            if (r.ok) cache.put(`${data.sprite}.json`, r);
                                        }
                                    }["MapView.useEffect.cacheAdminMapResources"]).catch({
                                        "MapView.useEffect.cacheAdminMapResources": ()=>{}
                                    }["MapView.useEffect.cacheAdminMapResources"]);
                                    fetch(`${data.sprite}.png`).then({
                                        "MapView.useEffect.cacheAdminMapResources": (r)=>{
                                            if (r.ok) cache.put(`${data.sprite}.png`, r);
                                        }
                                    }["MapView.useEffect.cacheAdminMapResources"]).catch({
                                        "MapView.useEffect.cacheAdminMapResources": ()=>{}
                                    }["MapView.useEffect.cacheAdminMapResources"]);
                                }
                                console.log('[Map Tile Cache] Administrative Area vector style & assets cached locally for offline use');
                            }
                        }
                    } catch (err) {
                        console.warn('[Map Tile Cache] Pre-caching skipped:', err);
                    }
                }
            }["MapView.useEffect.cacheAdminMapResources"];
            cacheAdminMapResources();
        }
    }["MapView.useEffect"], []);
    // Initialize Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapContainer.current || mapRef.current) return;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: getStyleForMode(basemapMode),
                center: [
                    82.5,
                    22.0
                ],
                zoom: 4.4,
                pitch: 0,
                minZoom: 3,
                maxZoom: 19,
                attributionControl: false,
                transformRequest: {
                    "MapView.useEffect": (url)=>{
                        // Tag Administrative Area Carto Positron vector tiles (.pbf), style, glyphs, and sprites for persistent local caching
                        if (url.includes('cartocdn.com') || url.includes('.pbf') || url.includes('.mvt') || url.includes('/sprites/') || url.includes('/fonts/') || url.includes('/glyphs/')) {
                            return {
                                url
                            };
                        }
                        return {
                            url
                        };
                    }
                }["MapView.useEffect"]
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: true
            }), 'bottom-right');
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ScaleControl({
                unit: 'metric'
            }), 'bottom-left');
            map.on('load', {
                "MapView.useEffect": ()=>{
                    setMapLoaded(true);
                    setCurrentZoom(map.getZoom());
                    setupHazardSources(map, alerts);
                }
            }["MapView.useEffect"]);
            // Real-time zoom tracking to dynamically scale weather animation overlays
            map.on('zoom', {
                "MapView.useEffect": ()=>{
                    setCurrentZoom(map.getZoom());
                }
            }["MapView.useEffect"]);
            // Map click handler for location picking
            map.on('click', {
                "MapView.useEffect": (e)=>{
                    if (onMapClickLocation) {
                        onMapClickLocation(e.lngLat.lat, e.lngLat.lng);
                    }
                }
            }["MapView.useEffect"]);
            mapRef.current = map;
            return ({
                "MapView.useEffect": ()=>{
                    map.remove();
                    mapRef.current = null;
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    // Handle basemap style changes
    const switchBasemap = (mode)=>{
        if (!mapRef.current) return;
        setBasemapMode(mode);
        setMapLoaded(false);
        const style = getStyleForMode(mode);
        mapRef.current.setStyle(style);
        mapRef.current.once('style.load', ()=>{
            setMapLoaded(true);
            if (mapRef.current) {
                setupHazardSources(mapRef.current, alerts);
            }
        });
    };
    // Toggle 3D Perspective Pitch Angle
    const toggle3dPitch = ()=>{
        if (!mapRef.current) return;
        const targetPitch = is3dPitch ? 0 : 55;
        mapRef.current.easeTo({
            pitch: targetPitch,
            duration: 800
        });
        setIs3dPitch(!is3dPitch);
    };
    // Setup GeoJSON layers for Hazard Polygons with Production-Grade GIS Styling & Centroid Heatmaps
    const setupHazardSources = (map, currentAlerts)=>{
        const geojsonData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capAlertsToGeoJson"])(currentAlerts);
        const centroidsData = capAlertsToCentroidsGeoJson(currentAlerts);
        if (map.getSource('hazard-source')) {
            map.getSource('hazard-source').setData(geojsonData);
        } else {
            map.addSource('hazard-source', {
                type: 'geojson',
                data: geojsonData
            });
        }
        if (map.getSource('hazard-centroids-source')) {
            map.getSource('hazard-centroids-source').setData(centroidsData);
        } else {
            map.addSource('hazard-centroids-source', {
                type: 'geojson',
                data: centroidsData
            });
        }
        // Strict severity color expression mapping: Crimson for Extreme, Amber for Severe
        const severityColorExp = [
            'match',
            [
                'get',
                'severity'
            ],
            'Extreme',
            '#dc2626',
            'Severe',
            '#f59e0b',
            'Moderate',
            '#eab308',
            'Minor',
            '#0ea5e9',
            [
                'get',
                'color'
            ] // Fallback
        ];
        // 0. Permanent Offline Fallback Administrative Boundaries (Ensures State/District boundaries remain visible in zero-network)
        if (!map.getSource('offline-admin-boundaries')) {
            map.addSource('offline-admin-boundaries', {
                type: 'geojson',
                data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$indiaBoundaries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDIA_BASEMAP_GEOJSON"]
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
                    'line-dasharray': [
                        3,
                        2
                    ]
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
                        [
                            'linear'
                        ],
                        [
                            'get',
                            'weight'
                        ],
                        0,
                        0.1,
                        1,
                        1.0
                    ],
                    // Increase intensity as zoom level increases
                    'heatmap-intensity': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        2,
                        0.6,
                        5,
                        1.2,
                        8,
                        2.0
                    ],
                    // Color ramp strictly according to instructions:
                    // [ 'interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(34,139,34,0)', 0.4, 'yellow', 0.7, 'orange', 1, 'red' ]
                    'heatmap-color': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'heatmap-density'
                        ],
                        0,
                        'rgba(34,139,34,0)',
                        0.4,
                        'yellow',
                        0.7,
                        'orange',
                        1,
                        'red'
                    ],
                    // Radius scaled based on severity and zoom level so red epicenter fades smoothly into green at the edges
                    'heatmap-radius': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        2,
                        25,
                        4,
                        45,
                        6,
                        75,
                        8,
                        110,
                        11,
                        170
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
                        [
                            '==',
                            [
                                'get',
                                'id'
                            ],
                            selectedAlertId || ''
                        ],
                        16,
                        10
                    ],
                    'line-blur': [
                        'case',
                        [
                            '==',
                            [
                                'get',
                                'id'
                            ],
                            selectedAlertId || ''
                        ],
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
                        [
                            '==',
                            [
                                'get',
                                'id'
                            ],
                            selectedAlertId || ''
                        ],
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
                        [
                            '==',
                            [
                                'get',
                                'id'
                            ],
                            selectedAlertId || ''
                        ],
                        2.4,
                        1.5
                    ],
                    'line-dasharray': [
                        4,
                        2
                    ],
                    'line-opacity': 0.95
                }
            });
        }
        // Click handler for hazard polygons (bound to invisible hitbox layer)
        map.on('click', 'hazard-layer-hitbox', (e)=>{
            if (!e.features || e.features.length === 0) return;
            const feat = e.features[0];
            const props = feat.properties;
            // 1. Calculate exact bounding box using @turf/bbox
            const [minX, minY, maxX, maxY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(feat);
            // 2. Smoothly frame region without zooming in too close and breaking the viewport
            map.fitBounds([
                [
                    minX,
                    minY
                ],
                [
                    maxX,
                    maxY
                ]
            ], {
                padding: 60,
                maxZoom: 7,
                duration: 1200
            });
            // 3. Remove existing popup if open
            if (popupRef.current) {
                popupRef.current.remove();
                popupRef.current = null;
            }
            // 4. Native MapLibre popup with closeOnClick: true, displaying title, severity, timestamp
            const timestamp = formatReadableTimestamp(props.effective || props.expires);
            const severityColor = props.severity === 'Extreme' ? '#dc2626' : props.severity === 'Severe' ? '#f59e0b' : props.severity === 'Moderate' ? '#eab308' : props.severity === 'Minor' ? '#0ea5e9' : '#10b981';
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
            const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                closeOnClick: true,
                closeButton: true,
                maxWidth: '300px',
                offset: 12,
                className: 'tactical-native-popup'
            }).setLngLat(e.lngLat).setHTML(popupHtml).addTo(map);
            popupRef.current = popup;
            onSelectAlert(props.id);
        });
        map.on('mouseenter', 'hazard-layer-hitbox', ()=>{
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'hazard-layer-hitbox', ()=>{
            map.getCanvas().style.cursor = '';
        });
    };
    // Update Hazard Data whenever alerts change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapRef.current || !mapLoaded) return;
            const map = mapRef.current;
            const polySource = map.getSource('hazard-source');
            const centroidSource = map.getSource('hazard-centroids-source');
            if (polySource && centroidSource) {
                polySource.setData((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capAlertsToGeoJson"])(alerts));
                centroidSource.setData(capAlertsToCentroidsGeoJson(alerts));
            } else {
                setupHazardSources(map, alerts);
            }
        }
    }["MapView.useEffect"], [
        alerts,
        mapLoaded
    ]);
    // Update visibility toggles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
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
        }
    }["MapView.useEffect"], [
        showHazards,
        mapLoaded
    ]);
    // Smoothly frame hazard area with @turf/bbox when selected from sidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapRef.current || !mapLoaded || !selectedAlertId) return;
            const map = mapRef.current;
            const alert = alerts.find({
                "MapView.useEffect.alert": (a)=>a.identifier === selectedAlertId || selectedAlertId.startsWith(a.identifier)
            }["MapView.useEffect.alert"]);
            if (!alert || !alert.info.areas || alert.info.areas.length === 0) return;
            const area = alert.info.areas[0];
            // Use @turf/bbox to fit bounds with the exact same strict config
            if (area.polygon && area.polygon[0] && area.polygon[0].length > 0) {
                const feat = {
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: area.polygon
                    },
                    properties: {}
                };
                const [minX, minY, maxX, maxY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(feat);
                map.fitBounds([
                    [
                        minX,
                        minY
                    ],
                    [
                        maxX,
                        maxY
                    ]
                ], {
                    padding: 60,
                    maxZoom: 7,
                    duration: 1200
                });
            } else if (area.circle) {
                map.flyTo({
                    center: area.circle.center,
                    zoom: Math.min(map.getZoom(), 7),
                    duration: 1200
                });
            }
        }
    }["MapView.useEffect"], [
        selectedAlertId,
        alerts,
        mapLoaded
    ]);
    // Pan and fit bounds to selected state geometry
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapRef.current || !mapLoaded || !targetBbox) return;
            const map = mapRef.current;
            map.fitBounds([
                [
                    targetBbox[0],
                    targetBbox[1]
                ],
                [
                    targetBbox[2],
                    targetBbox[3]
                ]
            ], {
                padding: 60,
                maxZoom: 7.5,
                duration: 1200
            });
        }
    }["MapView.useEffect"], [
        targetBbox,
        mapLoaded
    ]);
    // Update SOS & User Markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapRef.current || !mapLoaded) return;
            const map = mapRef.current;
            // Clear existing markers
            markersRef.current.forEach({
                "MapView.useEffect": (m)=>m.remove()
            }["MapView.useEffect"]);
            markersRef.current = [];
            // 1. SOS Broadcast Markers (Compact Tactical GIS Badges)
            if (showSosMarkers && sosList.length > 0) {
                sosList.forEach({
                    "MapView.useEffect": (sos)=>{
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
                        el.addEventListener('click', {
                            "MapView.useEffect": (e)=>{
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
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                    closeButton: true,
                                    maxWidth: '300px'
                                }).setLngLat([
                                    sos.longitude,
                                    sos.latitude
                                ]).setHTML(popupHtml).addTo(map);
                            }
                        }["MapView.useEffect"]);
                        const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                            element: el
                        }).setLngLat([
                            sos.longitude,
                            sos.latitude
                        ]).addTo(map);
                        markersRef.current.push(marker);
                    }
                }["MapView.useEffect"]);
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
                const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                    element: userEl
                }).setLngLat([
                    userLocation.lng,
                    userLocation.lat
                ]).addTo(map);
                markersRef.current.push(marker);
            }
        }
    }["MapView.useEffect"], [
        showSosMarkers,
        sosList,
        userLocation,
        mapLoaded
    ]);
    // WeatherFX Engine Marker attachment (anchored to active alert centroid)
    const weatherFxMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [weatherFxContainer, setWeatherFxContainer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapRef.current || !mapLoaded) return;
            const map = mapRef.current;
            const currentSelected = alerts.find({
                "MapView.useEffect": (a)=>a.identifier === selectedAlertId || selectedAlertId?.startsWith(a.identifier)
            }["MapView.useEffect"]) || null;
            if (!currentSelected || !currentSelected.info.areas || currentSelected.info.areas.length === 0) {
                if (weatherFxMarkerRef.current) {
                    weatherFxMarkerRef.current.remove();
                    weatherFxMarkerRef.current = null;
                }
                setWeatherFxContainer(null);
                return;
            }
            const area = currentSelected.info.areas[0];
            let center = null;
            if (area.polygon && area.polygon.length > 0) {
                try {
                    const polyFeat = {
                        type: 'Feature',
                        geometry: {
                            type: 'Polygon',
                            coordinates: area.polygon
                        },
                        properties: {}
                    };
                    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$centroid$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(polyFeat);
                    if (c?.geometry?.coordinates) {
                        center = [
                            c.geometry.coordinates[0],
                            c.geometry.coordinates[1]
                        ];
                    }
                } catch (e) {
                    console.warn('Centroid calculation failed for weather overlay', e);
                }
            } else if (area.circle) {
                center = [
                    area.circle.center[0],
                    area.circle.center[1]
                ];
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
                const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                    element: el,
                    anchor: 'center'
                }).setLngLat(center).addTo(map);
                weatherFxMarkerRef.current = marker;
                setWeatherFxContainer(el);
            } else {
                weatherFxMarkerRef.current.setLngLat(center);
            }
        }
    }["MapView.useEffect"], [
        selectedAlertId,
        alerts,
        mapLoaded
    ]);
    // Clean up weather marker on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            return ({
                "MapView.useEffect": ()=>{
                    if (weatherFxMarkerRef.current) {
                        weatherFxMarkerRef.current.remove();
                        weatherFxMarkerRef.current = null;
                    }
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    // Zoom and Fly Helper
    const flyToCoords = (lon, lat, zoom = 7.5, pitch = 0)=>{
        if (!mapRef.current) return;
        mapRef.current.flyTo({
            center: [
                lon,
                lat
            ],
            zoom,
            pitch,
            essential: true,
            speed: 1.2
        });
        if (pitch > 0) setIs3dPitch(true);
        else setIs3dPitch(false);
    };
    const selectedAlert = alerts.find((a)=>a.identifier === selectedAlertId || selectedAlertId?.startsWith(a.identifier)) || null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full min-h-[420px] bg-[#070b14] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainer,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/components/MapView.tsx",
                lineNumber: 892,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            weatherFxContainer && selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherFX$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeatherFX"], {
                type: `${selectedAlert.info.event} ${selectedAlert.info.headline} ${selectedAlert.info.description || ''}`,
                currentZoom: currentZoom
            }, void 0, false, {
                fileName: "[project]/src/components/MapView.tsx",
                lineNumber: 896,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)), weatherFxContainer),
            isPickingLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border-2 border-amber-300 animate-bounce text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                        className: "w-5 h-5 text-slate-950"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 906,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Click anywhere on map to pin SOS disaster location!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapView.tsx",
                lineNumber: 905,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-20 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-[10px] font-semibold text-slate-400 px-1 uppercase tracking-wider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "w-3.5 h-3.5 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 917,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Imagery Layer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 916,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggle3dPitch,
                                        className: `px-1.5 py-0.5 rounded text-[9px] font-bold border transition ${is3dPitch ? 'bg-cyan-500/30 text-cyan-300 border-cyan-400' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`,
                                        title: "Toggle 3D Perspective Pitch Angle",
                                        children: is3dPitch ? '3D Tilt ON' : '3D Tilt OFF'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 919,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>switchBasemap('satellite'),
                                        className: `px-3 py-2 rounded-lg font-bold transition flex items-center gap-2 text-left ${basemapMode === 'satellite' ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-md ring-1 ring-emerald-400/50' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'}`,
                                        title: "High-Resolution TrueColor Earth Observation Satellite Imagery (Esri World Imagery)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                className: "w-4 h-4 shrink-0 text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 943,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-tight font-bold truncate",
                                                        children: "Satellite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MapView.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-slate-300/80 font-normal truncate",
                                                        children: "Esri Imagery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MapView.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 944,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 934,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>switchBasemap('admin'),
                                        className: `px-3 py-2 rounded-lg font-bold transition flex items-center gap-2 text-left ${basemapMode === 'admin' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md ring-1 ring-blue-400/50' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'}`,
                                        title: "Clean Vector Administrative Boundaries with Clear State & District Labels (Carto Positron)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                className: "w-4 h-4 shrink-0 text-blue-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 960,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-tight font-bold truncate",
                                                        children: "Administrative Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MapView.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-slate-300/80 font-normal truncate",
                                                        children: "State & Districts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MapView.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 961,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 951,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/90 backdrop-blur-md p-2 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1.5 text-xs text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowHazards(!showHazards),
                                className: `flex items-center justify-between gap-3 px-2 py-1 rounded-lg transition-colors ${showHazards ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-slate-800/60 text-slate-400'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                className: "w-3.5 h-3.5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 978,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Hazard Polygons (",
                                            alerts.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 977,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showHazards ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 980,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 980,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 971,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSosMarkers(!showSosMarkers),
                                className: `flex items-center justify-between gap-3 px-2 py-1 rounded-lg transition-colors ${showSosMarkers ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800/60 text-slate-400'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapView.tsx",
                                                lineNumber: 990,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " SOS Alerts (",
                                            sosList.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 989,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showSosMarkers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 992,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 992,
                                        columnNumber: 65
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 983,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 970,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-2xl flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold text-slate-400 px-1 uppercase tracking-wider flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                        className: "w-3 h-3 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 999,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Focus Sector"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 998,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(82.5, 22.0, 4.4, 0),
                                        className: "p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-medium text-center",
                                        title: "Reset to All India Overview",
                                        children: "🇮🇳 All India"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(77.2, 31.9, 7.8, 55),
                                        className: "p-1.5 bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 border border-amber-800/50 rounded font-medium text-center",
                                        title: "Zoom into the Himalayan mountain ridges in 3D perspective",
                                        children: "🏔️ Himalayas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(85.3, 19.4, 7.2, 30),
                                        className: "p-1.5 bg-red-950/60 hover:bg-red-900/80 text-red-200 border border-red-800/50 rounded font-medium text-center",
                                        title: "Zoom to Bay of Bengal Cyclone Coastal Belt",
                                        children: "🌪️ Cyclone Bay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(92.8, 26.5, 7.0, 35),
                                        className: "p-1.5 bg-blue-950/60 hover:bg-blue-900/80 text-blue-200 border border-blue-800/50 rounded font-medium text-center",
                                        title: "Zoom to Brahmaputra Flood Valley",
                                        children: "🌊 Brahmaputra"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(71.5, 26.5, 6.8, 20),
                                        className: "p-1.5 bg-orange-950/60 hover:bg-orange-900/80 text-orange-200 border border-orange-800/50 rounded font-medium text-center",
                                        title: "Zoom to Thar Desert Dune Belt",
                                        children: "🏜️ Thar Desert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flyToCoords(72.88, 19.07, 9.2, 45),
                                        className: "p-1.5 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-200 border border-cyan-800/50 rounded font-medium text-center",
                                        title: "Zoom to Mumbai Coastal Inundation & Seafront",
                                        children: "🏙️ Mumbai MMR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1001,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 997,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapView.tsx",
                lineNumber: 912,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700/80 text-[11px] space-y-1.5 shadow-2xl pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-slate-300 font-bold uppercase tracking-wider text-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Hazard Epicenter Gradient"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1051,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-cyan-400 font-mono",
                                children: basemapMode === 'satellite' ? '🛰️ Satellite' : '🏛️ Administrative Area'
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1052,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 1050,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-28 rounded-full bg-gradient-to-r from-emerald-500/80 via-yellow-400 via-orange-500 to-red-600 ring-1 ring-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1057,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-slate-400 font-mono",
                                children: "Edge → Epicenter"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1058,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 1056,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 pt-0.5 text-[10px] text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-red-600 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Extreme"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-amber-500 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Severe"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-yellow-400 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapView.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Moderate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapView.tsx",
                                lineNumber: 1067,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapView.tsx",
                        lineNumber: 1060,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapView.tsx",
                lineNumber: 1049,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapView.tsx",
        lineNumber: 890,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapView, "vz+sDximettKxU9LFZcfavt9bFQ=");
_c = MapView;
;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.mjs [app-client] (ecmascript) <export default as Languages>");
;
;
const Navbar = ({ isOnline, onToggleSimulateOffline, isSimulatedOffline, pendingSosCount, totalSosCount, onOpenSosForm, onOpenSosQueue, onOpenBeacon, onOpenGuides, lang, onToggleLang })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-[#070b14] border-b border-slate-800 px-3 md:px-5 flex items-center justify-between text-slate-100 z-30 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/sanket-logo.png",
                                alt: "SANकेत Logo",
                                className: "h-10 md:h-11 w-auto object-contain select-none drop-shadow-md hover:scale-105 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md flex items-center leading-none font-sans select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 font-devanagari",
                                        children: "केत"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block border-l border-slate-800 pl-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800",
                                        children: "INDIA V2.4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950/80 text-red-400 border border-red-800/60",
                                        children: "EARLY WARNING"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] md:text-[11px] text-slate-400 font-medium",
                                children: "National Disaster Response & NDMA CAP Operations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onToggleSimulateOffline,
                    className: `px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all ${isOnline ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60 shadow-xs' : 'bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700 shadow-xs'}`,
                    title: "Click to toggle Offline Simulation Mode",
                    children: isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                className: "w-3.5 h-3.5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "ONLINE (HQ SYNC ACTIVE)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "ONLINE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                className: "w-3.5 h-3.5 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-wide",
                                children: "OFFLINE - CACHED DATA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            isSimulatedOffline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline px-1.5 py-0.2 rounded text-[9px] bg-slate-700 text-slate-300 font-mono",
                                children: "SIMULATED"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 md:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleLang,
                        className: "hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition",
                        title: "Toggle English / हिंदी",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                className: "w-3.5 h-3.5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang === 'en' ? 'ENG | हिंदी' : 'हिंदी | ENG'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenGuides,
                        className: "hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-3.5 h-3.5 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SOPs & Hotlines"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenBeacon,
                        className: "p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-amber-300 font-medium flex items-center gap-1.5 transition",
                        title: "Tactical Morse SOS Beacon",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "w-4 h-4 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Beacon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenSosQueue,
                        className: "relative p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium flex items-center gap-1.5 transition",
                        title: "View Local IndexedDB SOS Queue",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                className: "w-4 h-4 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Queue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            pendingSosCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950",
                                children: pendingSosCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : totalSosCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-300",
                                children: totalSosCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenSosForm,
                        className: "px-3.5 py-1.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-xs md:text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-red-950/80 flex items-center gap-1.5 transition animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "BROADCAST SOS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/OfflineGuidesModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineGuidesModal",
    ()=>OfflineGuidesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$emergencySops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/emergencySops.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.mjs [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.mjs [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.mjs [app-client] (ecmascript) <export default as Mountain>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const OfflineGuidesModal = ({ isOpen, onClose })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sops');
    const [selectedHazard, setSelectedHazard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('cyclone');
    if (!isOpen) return null;
    const currentSop = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$emergencySops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SURVIVAL_CHECKLISTS"][selectedHazard];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[88vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-blue-600/20 border border-blue-500/40 rounded-lg text-blue-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-white uppercase tracking-wide",
                                            children: "Offline Field Guides & Hotlines"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "National Disaster Management Authority (NDMA) Approved Standard Operating Procedures"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-slate-800 bg-slate-950/40 text-xs font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('sops'),
                            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === 'sops' ? 'border-red-500 text-white bg-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'}`,
                            children: "Disaster Survival SOPs (Do's & Don'ts)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('contacts'),
                            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === 'contacts' ? 'border-red-500 text-white bg-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'}`,
                            children: "Emergency Hotlines & Helplines (India)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-y-auto space-y-4 flex-1 text-xs text-slate-200",
                    children: activeTab === 'contacts' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2.5 bg-red-950/30 border border-red-500/30 rounded-lg text-red-200 text-xs",
                                children: [
                                    "In severe distress, dial ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "112"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " immediately. The 112 emergency network functions even without SIM balance or active roaming across India."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-2.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$emergencySops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMERGENCY_CONTACTS"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300",
                                                        children: c.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-500",
                                                        children: c.priority
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-white text-sm mb-1",
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 mb-2",
                                                children: c.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${c.number.replace(/[^0-9+]/g, '')}`,
                                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 rounded font-mono font-bold text-xs transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    c.number
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto pb-1",
                                children: [
                                    {
                                        id: 'cyclone',
                                        label: 'Cyclone',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"]
                                    },
                                    {
                                        id: 'flood',
                                        label: 'Floods',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
                                    },
                                    {
                                        id: 'earthquake',
                                        label: 'Earthquake',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"]
                                    },
                                    {
                                        id: 'landslide',
                                        label: 'Landslide',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"]
                                    }
                                ].map((item)=>{
                                    const Icon = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedHazard(item.id),
                                        className: `px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition ${selectedHazard === item.id ? 'bg-red-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                lineNumber: 138,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.label
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            currentSop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-slate-950 rounded-lg border border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-white mb-2 uppercase flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                    className: "w-4 h-4 text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentSop.hazard,
                                                " Field SOP"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                            lineNumber: 148,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-emerald-400 uppercase text-[11px] mb-1.5 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " What You MUST Do:"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 text-[11px] text-emerald-200 list-disc list-inside",
                                                            children: currentSop.dos.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: d
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2.5 rounded bg-rose-950/30 border border-rose-500/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-rose-400 uppercase text-[11px] mb-1.5 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " What to AVOID:"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 text-[11px] text-rose-200 list-disc list-inside",
                                                            children: currentSop.donts.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: d
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1",
                                                            children: "During the Emergency Event:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 text-slate-300 list-disc list-inside",
                                                            children: currentSop.during.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: step
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1",
                                                            children: "Immediate Post-Disaster Action:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 text-slate-300 list-disc list-inside",
                                                            children: currentSop.after.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: step
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/OfflineGuidesModal.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OfflineGuidesModal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/OfflineGuidesModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OfflineGuidesModal, "CbezWjHcCkf2sbI3cu9+nZb4+88=");
_c = OfflineGuidesModal;
var _c;
__turbopack_context__.k.register(_c, "OfflineGuidesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SosFormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SosFormModal",
    ()=>SosFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/indexedDB.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/syncService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertOctagon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/octagon-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertOctagon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/battery.mjs [app-client] (ecmascript) <export default as Battery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const SosFormModal = ({ isOpen, onClose, onSosAdded, initialCoords, onRequestPickOnMap, isOnline })=>{
    _s();
    const [emergencyType, setEmergencyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('trapped');
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('critical_immediate');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [peopleCount, setPeopleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [latitude, setLatitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCoords ? initialCoords.lat : '');
    const [longitude, setLongitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCoords ? initialCoords.lng : '');
    const [locationAccuracy, setLocationAccuracy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [addressOrLandmark, setAddressOrLandmark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [medicalNeeds, setMedicalNeeds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasElderlyOrChildren, setHasElderlyOrChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [batteryLevel, setBatteryLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitSuccess, setSubmitSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync initial coordinates if provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SosFormModal.useEffect": ()=>{
            if (initialCoords) {
                setLatitude(initialCoords.lat);
                setLongitude(initialCoords.lng);
            }
        }
    }["SosFormModal.useEffect"], [
        initialCoords
    ]);
    // Read battery level if Battery API is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SosFormModal.useEffect": ()=>{
            if ('getBattery' in navigator) {
                navigator.getBattery().then({
                    "SosFormModal.useEffect": (battery)=>{
                        setBatteryLevel(Math.round(battery.level * 100));
                        battery.addEventListener('levelchange', {
                            "SosFormModal.useEffect": ()=>{
                                setBatteryLevel(Math.round(battery.level * 100));
                            }
                        }["SosFormModal.useEffect"]);
                    }
                }["SosFormModal.useEffect"]).catch({
                    "SosFormModal.useEffect": ()=>{}
                }["SosFormModal.useEffect"]);
            }
        }
    }["SosFormModal.useEffect"], []);
    // Request high-accuracy GPS coordinates
    const handleGetLocation = ()=>{
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
            setLocationAccuracy(pos.coords.accuracy);
            setIsLocating(false);
        }, (err)=>{
            console.warn('GPS lookup error:', err);
            setIsLocating(false);
            // Default to Bay of Bengal / India center if denied
            if (latitude === '') {
                setLatitude(19.8135);
                setLongitude(85.8312);
            }
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (latitude === '' || longitude === '') {
            alert('Please acquire GPS location or select location on map.');
            return;
        }
        setIsSubmitting(true);
        const newSos = {
            id: `SOS-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            timestamp: new Date().toISOString(),
            name: name.trim() || 'Distressed Citizen',
            contact: contact.trim() || 'N/A',
            emergencyType,
            priority,
            peopleCount: Number(peopleCount) || 1,
            latitude: Number(latitude),
            longitude: Number(longitude),
            locationAccuracy,
            addressOrLandmark: addressOrLandmark.trim(),
            details: details.trim(),
            medicalNeeds: medicalNeeds.trim(),
            hasElderlyOrChildren,
            batteryLevel,
            syncStatus: 'pending_offline',
            syncAttempts: 0
        };
        try {
            // 1. Always store locally in IndexedDB first (true offline-first guarantee!)
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].addSos(newSos);
            // 2. If online, trigger sync immediately in background
            if (isOnline) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingQueue();
            }
            setSubmitSuccess(newSos);
            onSosAdded();
        } catch (err) {
            console.error('Failed to write SOS to IndexedDB:', err);
            alert('Error saving SOS to local IndexedDB. Check storage permissions.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleReset = ()=>{
        setSubmitSuccess(null);
        setName('');
        setContact('');
        setAddressOrLandmark('');
        setDetails('');
        setMedicalNeeds('');
        setHasElderlyOrChildren(false);
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-lg bg-slate-900 border-2 border-red-600 rounded-xl shadow-2xl overflow-hidden my-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-600 px-4 py-3 flex items-center justify-between text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertOctagon$3e$__["AlertOctagon"], {
                                    className: "w-6 h-6 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-black text-lg uppercase tracking-wide",
                                            children: "Emergency SOS Broadcast"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-red-100 font-medium",
                                            children: "Offline-First Local Queue (IndexedDB Resilient)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-red-700 rounded transition text-white/80 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosFormModal.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosFormModal.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                submitSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosFormModal.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white mb-1",
                                    children: "SOS Logged Successfully!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-300",
                                    children: [
                                        "Broadcast ID:",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-cyan-400 font-bold",
                                            children: submitSuccess.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950 rounded-lg border border-slate-800 text-left text-xs space-y-1.5 text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-amber-400",
                                            children: isOnline ? 'Transmitting to Emergency HQ...' : 'Saved Offline in IndexedDB'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-white",
                                            children: [
                                                submitSuccess.latitude.toFixed(4),
                                                ", ",
                                                submitSuccess.longitude.toFixed(4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Affected People:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold",
                                            children: [
                                                submitSuccess.peopleCount,
                                                " persons"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Emergency Type:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400 font-bold uppercase",
                                            children: submitSuccess.emergencyType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-slate-400 p-2 bg-slate-800/60 rounded",
                            children: isOnline ? 'Your SOS signal is being processed. Relief agencies in your sector are alerted.' : 'Your distress packet is safely saved in local storage. It will auto-transmit when mobile connection is re-established or can be transferred via 112 SMS format.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm transition",
                                children: "Close & Return to Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosFormModal.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosFormModal.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /* SOS Input Form */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-4 space-y-4 max-h-[80vh] overflow-y-auto text-xs text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-2.5 rounded-lg flex items-center gap-2 border ${isOnline ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' : 'bg-amber-950/40 border-amber-500/50 text-amber-200'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-4 h-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px]",
                                    children: isOnline ? 'Network Connected: SOS will transmit immediately to NDRF/SDMA dispatch center.' : 'OFFLINE MODE: No internet detected. SOS will be securely queued in local IndexedDB and dispatched as soon as network returns.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5",
                                    children: "1. Nature of Emergency *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-1.5",
                                    children: [
                                        {
                                            id: 'trapped',
                                            label: 'Trapped / Collapsed',
                                            color: 'border-red-500'
                                        },
                                        {
                                            id: 'severe_flood',
                                            label: 'Severe Flood / Inundated',
                                            color: 'border-blue-500'
                                        },
                                        {
                                            id: 'medical',
                                            label: 'Critical Medical / Trauma',
                                            color: 'border-rose-500'
                                        },
                                        {
                                            id: 'rescue_boat',
                                            label: 'Rescue Boat Required',
                                            color: 'border-cyan-500'
                                        },
                                        {
                                            id: 'food_water',
                                            label: 'No Food / Potable Water',
                                            color: 'border-amber-500'
                                        },
                                        {
                                            id: 'elderly_infant',
                                            label: 'Vulnerable / Infant / Pregnant',
                                            color: 'border-purple-500'
                                        },
                                        {
                                            id: 'fire_hazardous',
                                            label: 'Fire / Chemical / Gas',
                                            color: 'border-orange-500'
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEmergencyType(item.id),
                                            className: `p-2 rounded text-left border transition-all ${emergencyType === item.id ? 'bg-red-600/20 border-red-500 text-white font-bold ring-1 ring-red-500' : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800'}`,
                                            children: item.label
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1",
                                            children: "Urgency / Priority *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: priority,
                                            onChange: (e)=>setPriority(e.target.value),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded p-2 text-white font-medium focus:ring-1 focus:ring-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "critical_immediate",
                                                    children: "Critical (Life-Threatening)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "high",
                                                    children: "High Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "moderate",
                                                    children: "Moderate (Evacuation Needed)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1",
                                            children: "Victims / Headcount *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center bg-slate-800 border border-slate-700 rounded px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-slate-400 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "1000",
                                                    value: peopleCount,
                                                    onChange: (e)=>setPeopleCount(Math.max(1, parseInt(e.target.value) || 1)),
                                                    className: "w-full bg-transparent py-2 text-white font-bold focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3.5 h-3.5 text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "GPS Disaster Coordinates *"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleGetLocation,
                                                    disabled: isLocating,
                                                    className: "px-2 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-[11px] font-medium flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                                            className: `w-3 h-3 ${isLocating ? 'animate-spin' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isLocating ? 'Acquiring...' : 'Get GPS'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                onRequestPickOnMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        onClose();
                                                        onRequestPickOnMap();
                                                    },
                                                    className: "px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded text-[11px]",
                                                    children: "Pick on Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Latitude"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "any",
                                                    required: true,
                                                    value: latitude,
                                                    onChange: (e)=>setLatitude(e.target.value === '' ? '' : parseFloat(e.target.value)),
                                                    placeholder: "e.g. 19.8135",
                                                    className: "w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Longitude"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "any",
                                                    required: true,
                                                    value: longitude,
                                                    onChange: (e)=>setLongitude(e.target.value === '' ? '' : parseFloat(e.target.value)),
                                                    placeholder: "e.g. 85.8312",
                                                    className: "w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                locationAccuracy !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-emerald-400",
                                    children: [
                                        "GPS Accuracy: ±",
                                        Math.round(locationAccuracy),
                                        " meters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 390,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: addressOrLandmark,
                                        onChange: (e)=>setAddressOrLandmark(e.target.value),
                                        placeholder: "Landmark / Village / Ward / Building description",
                                        className: "w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white text-xs placeholder:text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SosFormModal.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] text-slate-400 mb-0.5",
                                            children: "Contact Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center bg-slate-800 border border-slate-700 rounded px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-3.5 h-3.5 text-slate-500 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    placeholder: "Your name / Group leader",
                                                    className: "w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] text-slate-400 mb-0.5",
                                            children: "Phone / Mobile *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center bg-slate-800 border border-slate-700 rounded px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-3.5 h-3.5 text-slate-500 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    required: true,
                                                    value: contact,
                                                    onChange: (e)=>setContact(e.target.value),
                                                    placeholder: "Mobile number",
                                                    className: "w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[10px] text-slate-400 mb-0.5",
                                    children: "Situation Details / Trapped Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    value: details,
                                    onChange: (e)=>setDetails(e.target.value),
                                    placeholder: "Describe current danger (e.g. water 4ft deep, roof leaking, senior citizen unable to walk)...",
                                    className: "w-full bg-slate-800 border border-slate-700 rounded p-2 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer p-2 bg-slate-800/50 rounded border border-slate-700/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: hasElderlyOrChildren,
                                            onChange: (e)=>setHasElderlyOrChildren(e.target.checked),
                                            className: "w-4 h-4 rounded text-red-600 focus:ring-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-300 font-medium",
                                            children: "Group includes Infants, Pregnant Women, or Senior Citizens"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-slate-800 border border-slate-700 rounded px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                            className: "w-3.5 h-3.5 text-rose-400 mr-2 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: medicalNeeds,
                                            onChange: (e)=>setMedicalNeeds(e.target.value),
                                            placeholder: "Special medical requirements (Insulin, Oxygen, Fractures, Dialysis)",
                                            className: "w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"], {
                                            className: "w-3 h-3 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosFormModal.tsx",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Battery: ",
                                        batteryLevel !== null ? `${batteryLevel}%` : 'Reading...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-cyan-400",
                                    children: "Storage: IndexedDB Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 478,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "w-full py-3 bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white font-black text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                    className: "w-5 h-5 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosFormModal.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isSubmitting ? 'Recording to IndexedDB...' : 'QUEUE EMERGENCY SOS BROADCAST'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosFormModal.tsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosFormModal.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SosFormModal.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SosFormModal.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SosFormModal, "3YPP0zisxMrkGK+tUVel2OtLE4I=");
_c = SosFormModal;
var _c;
__turbopack_context__.k.register(_c, "SosFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SosQueueDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SosQueueDrawer",
    ()=>SosQueueDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/indexedDB.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/syncService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-braces.mjs [app-client] (ecmascript) <export default as FileJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const SosQueueDrawer = ({ isOpen, onClose, sosList, onRefresh, isOnline })=>{
    _s();
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSos, setSelectedSos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) return null;
    const pendingCount = sosList.filter((s)=>s.syncStatus === 'pending_offline').length;
    const syncedCount = sosList.filter((s)=>s.syncStatus === 'synced_hq').length;
    const handleForceSync = async ()=>{
        setIsSyncing(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].syncPendingQueue();
        setIsSyncing(false);
        onRefresh();
    };
    const handleDelete = async (id)=>{
        if (confirm('Delete this SOS broadcast record from local IndexedDB?')) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].deleteSos(id);
            onRefresh();
            if (selectedSos?.id === id) setSelectedSos(null);
        }
    };
    const handleCopySms = (sos)=>{
        const text = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].formatSosForSms(sos);
        navigator.clipboard.writeText(text);
        setCopiedId(sos.id);
        setTimeout(()=>setCopiedId(null), 2500);
    };
    const handleExportJson = ()=>{
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].exportQueueAsJson(sosList);
        const blob = new Blob([
            data
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SANKET_SOS_MANIFEST_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleExportCsv = ()=>{
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$syncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sosSyncService"].exportQueueAsCsv(sosList);
        const blob = new Blob([
            data
        ], {
            type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SANKET_SOS_QUEUE_${Date.now()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 flex flex-col shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "w-5 h-5 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-white uppercase tracking-wide flex items-center gap-2",
                                            children: [
                                                "SOS Broadcast Queue",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono",
                                                    children: sosList.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "IndexedDB Local Storage • Auto-sync on Reconnection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded font-medium flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        pendingCount,
                                        " Offline Pending"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded font-medium flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        syncedCount,
                                        " Synced to HQ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleForceSync,
                                disabled: isSyncing || !isOnline || pendingCount === 0,
                                className: `px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition ${!isOnline ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : pendingCount === 0 ? 'bg-slate-800 text-slate-400' : 'bg-red-600 hover:bg-red-500 text-white shadow'}`,
                                title: !isOnline ? 'Network offline. Will sync when reconnected.' : 'Force transmit offline queue to HQ',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isSyncing ? 'Transmitting...' : 'Sync Queue Now'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Export Disaster Manifest:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportJson,
                                    disabled: sosList.length === 0,
                                    className: "hover:text-cyan-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-800",
                                    title: "Download JSON format for mesh relay",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " JSON"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportCsv,
                                    disabled: sosList.length === 0,
                                    className: "hover:text-cyan-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-800",
                                    title: "Download CSV for Excel / Incident Commander",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " CSV"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-3",
                    children: sosList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-12 text-center text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-12 h-12 mx-auto mb-2 text-slate-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-sm",
                                children: "No Active SOS Broadcasts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-1",
                                children: "Emergency calls made offline or online will queue in IndexedDB and appear here."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : sosList.map((sos)=>{
                        const isPending = sos.syncStatus === 'pending_offline';
                        const isSynced = sos.syncStatus === 'synced_hq';
                        const isTransmitting = sos.syncStatus === 'transmitting';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3.5 rounded-xl border transition-all ${isPending ? 'bg-amber-950/10 border-amber-500/40' : isSynced ? 'bg-slate-900 border-slate-800' : 'bg-red-950/20 border-red-500/40'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${isPending ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : isSynced ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : isTransmitting ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`,
                                                    children: [
                                                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 39
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isSynced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 38
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isTransmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "w-3 h-3 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 44
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isPending ? 'Queued Offline (IndexedDB)' : isSynced ? 'Synced to HQ' : isTransmitting ? 'Transmitting...' : 'Sync Failed'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 font-mono",
                                                    children: new Date(sos.timestamp).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        second: '2-digit'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCopySms(sos),
                                                    className: "p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition",
                                                    title: "Copy 112 SMS dispatch text format",
                                                    children: copiedId === sos.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3.5 h-3.5 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(sos.id),
                                                    className: "p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded transition",
                                                    title: "Delete from local database",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 230,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 201,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-white text-sm uppercase",
                                                    children: sos.emergencyType.replace('_', ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 font-bold uppercase text-[10px] px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/40",
                                                    children: sos.priority
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-slate-300 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-3 h-3 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        sos.peopleCount,
                                                        " victims"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Contact: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: sos.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 34
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " (",
                                                        sos.contact,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 263,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-[11px] text-slate-400 font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3 h-3 text-slate-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        sos.latitude.toFixed(4),
                                                        ", ",
                                                        sos.longitude.toFixed(4)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                sos.addressOrLandmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300 font-sans truncate",
                                                    children: [
                                                        "• ",
                                                        sos.addressOrLandmark
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sos.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-300 p-2 rounded bg-slate-950/60 border border-slate-800/60",
                                            children: [
                                                '"',
                                                sos.details,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 283,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sos.medicalNeeds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-rose-300 bg-rose-950/30 border border-rose-800/30 p-1.5 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Medical Need:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                sos.medicalNeeds
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 289,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sos.ticketNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-1.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-400 font-mono flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Incident Dispatch Ticket:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: sos.ticketNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                            lineNumber: 295,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                                    lineNumber: 253,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, sos.id, true, {
                            fileName: "[project]/src/components/SosQueueDrawer.tsx",
                            lineNumber: 190,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/SosQueueDrawer.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SosQueueDrawer.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SosQueueDrawer.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SosQueueDrawer, "dkiQsI5JNAo+P1Ec1zS/smTXqcU=");
_c = SosQueueDrawer;
var _c;
__turbopack_context__.k.register(_c, "SosQueueDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StateFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_INDIAN_STATES",
    ()=>ALL_INDIAN_STATES,
    "ALL_UNION_TERRITORIES",
    ()=>ALL_UNION_TERRITORIES,
    "INDIAN_STATES",
    ()=>INDIAN_STATES,
    "StateFilter",
    ()=>StateFilter,
    "extractStateFromAreaDesc",
    ()=>extractStateFromAreaDesc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$voiceAdvisoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/voiceAdvisoryService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ALL_INDIAN_STATES = [
    {
        name: 'Andhra Pradesh',
        aliases: [
            'AP',
            'Andhra',
            'Visakhapatnam',
            'Vijayawada'
        ],
        bbox: [
            76.76,
            12.62,
            84.75,
            19.15
        ]
    },
    {
        name: 'Arunachal Pradesh',
        aliases: [
            'Arunachal',
            'Itanagar'
        ],
        bbox: [
            91.50,
            26.65,
            97.40,
            29.47
        ]
    },
    {
        name: 'Assam',
        aliases: [
            'Guwahati',
            'Brahmaputra',
            'Kamrup',
            'Kaziranga',
            'Morigaon',
            'Barpeta'
        ],
        bbox: [
            89.69,
            24.13,
            96.02,
            27.97
        ]
    },
    {
        name: 'Bihar',
        aliases: [
            'Patna',
            'Ganga',
            'Muzaffarpur',
            'Gaya'
        ],
        bbox: [
            83.32,
            24.28,
            88.30,
            27.52
        ]
    },
    {
        name: 'Chhattisgarh',
        aliases: [
            'Raipur',
            'Bastar',
            'Bilaspur'
        ],
        bbox: [
            80.25,
            17.78,
            84.40,
            24.10
        ]
    },
    {
        name: 'Goa',
        aliases: [
            'Panaji',
            'Mormugao'
        ],
        bbox: [
            73.68,
            14.89,
            74.34,
            15.80
        ]
    },
    {
        name: 'Gujarat',
        aliases: [
            'Ahmedabad',
            'Surat',
            'Kutch',
            'Saurashtra',
            'Gandhinagar'
        ],
        bbox: [
            68.10,
            20.10,
            74.47,
            24.70
        ]
    },
    {
        name: 'Haryana',
        aliases: [
            'Gurugram',
            'Faridabad',
            'Ambala',
            'Panipat'
        ],
        bbox: [
            74.45,
            27.65,
            77.60,
            30.92
        ]
    },
    {
        name: 'Himachal Pradesh',
        aliases: [
            'HP',
            'Himachal',
            'Shimla',
            'Kullu',
            'Mandi',
            'Kangra',
            'Lahaul',
            'Spiti'
        ],
        bbox: [
            75.76,
            30.38,
            79.07,
            33.26
        ]
    },
    {
        name: 'Jharkhand',
        aliases: [
            'Ranchi',
            'Jamshedpur',
            'Dhanbad'
        ],
        bbox: [
            83.33,
            21.97,
            87.95,
            25.35
        ]
    },
    {
        name: 'Karnataka',
        aliases: [
            'Bengaluru',
            'Bangalore',
            'Mysuru',
            'Mangaluru',
            'Belagavi'
        ],
        bbox: [
            74.05,
            11.59,
            78.59,
            18.45
        ]
    },
    {
        name: 'Kerala',
        aliases: [
            'Kochi',
            'Thiruvananthapuram',
            'Calicut',
            'Wayanad',
            'Idukki'
        ],
        bbox: [
            74.86,
            8.29,
            77.42,
            12.79
        ]
    },
    {
        name: 'Madhya Pradesh',
        aliases: [
            'MP',
            'Bhopal',
            'Indore',
            'Jabalpur',
            'Gwalior'
        ],
        bbox: [
            74.04,
            21.08,
            82.81,
            26.87
        ]
    },
    {
        name: 'Maharashtra',
        aliases: [
            'Mumbai',
            'Pune',
            'Nagpur',
            'Nashik',
            'Thane',
            'Konkan'
        ],
        bbox: [
            72.64,
            15.60,
            80.89,
            22.03
        ]
    },
    {
        name: 'Manipur',
        aliases: [
            'Imphal'
        ],
        bbox: [
            93.04,
            23.83,
            94.76,
            25.69
        ]
    },
    {
        name: 'Meghalaya',
        aliases: [
            'Shillong',
            'Cherrapunji',
            'Mawsynram'
        ],
        bbox: [
            89.81,
            25.03,
            92.83,
            26.11
        ]
    },
    {
        name: 'Mizoram',
        aliases: [
            'Aizawl'
        ],
        bbox: [
            92.26,
            21.95,
            93.44,
            24.52
        ]
    },
    {
        name: 'Nagaland',
        aliases: [
            'Kohima',
            'Dimapur'
        ],
        bbox: [
            93.33,
            25.10,
            95.25,
            27.04
        ]
    },
    {
        name: 'Odisha',
        aliases: [
            'Orissa',
            'Bhubaneswar',
            'Puri',
            'Cuttack',
            'Similipal',
            'Mayurbhanj'
        ],
        bbox: [
            81.38,
            17.81,
            87.52,
            22.57
        ]
    },
    {
        name: 'Punjab',
        aliases: [
            'Amritsar',
            'Ludhiana',
            'Jalandhar',
            'Patiala'
        ],
        bbox: [
            73.88,
            29.53,
            76.93,
            32.50
        ]
    },
    {
        name: 'Rajasthan',
        aliases: [
            'Jaipur',
            'Jodhpur',
            'Bikaner',
            'Udaipur',
            'Barmer',
            'Jaisalmer',
            'Thar'
        ],
        bbox: [
            69.50,
            23.06,
            78.28,
            30.20
        ]
    },
    {
        name: 'Sikkim',
        aliases: [
            'Gangtok'
        ],
        bbox: [
            88.06,
            27.08,
            88.92,
            28.13
        ]
    },
    {
        name: 'Tamil Nadu',
        aliases: [
            'TN',
            'Chennai',
            'Coimbatore',
            'Madurai',
            'Kanyakumari'
        ],
        bbox: [
            76.24,
            8.08,
            80.35,
            13.57
        ]
    },
    {
        name: 'Telangana',
        aliases: [
            'Hyderabad',
            'Warangal',
            'Nizamabad'
        ],
        bbox: [
            77.24,
            15.83,
            81.32,
            19.92
        ]
    },
    {
        name: 'Tripura',
        aliases: [
            'Agartala'
        ],
        bbox: [
            91.15,
            22.93,
            92.34,
            24.53
        ]
    },
    {
        name: 'Uttar Pradesh',
        aliases: [
            'UP',
            'Lucknow',
            'Varanasi',
            'Kanpur',
            'Noida',
            'Agra',
            'Prayagraj'
        ],
        bbox: [
            77.08,
            23.87,
            84.64,
            30.41
        ]
    },
    {
        name: 'Uttarakhand',
        aliases: [
            'UK',
            'Uttaranchal',
            'Dehradun',
            'Chamoli',
            'Rishikesh',
            'Haridwar',
            'Kedarnath'
        ],
        bbox: [
            77.58,
            28.71,
            81.04,
            31.46
        ]
    },
    {
        name: 'West Bengal',
        aliases: [
            'WB',
            'Kolkata',
            'Calcutta',
            'Howrah',
            'Darjeeling',
            'Siliguri',
            'Sundarbans'
        ],
        bbox: [
            85.82,
            21.52,
            89.88,
            27.22
        ]
    }
];
const ALL_UNION_TERRITORIES = [
    {
        name: 'Andaman and Nicobar Islands',
        aliases: [
            'Andaman & Nicobar',
            'Andaman',
            'Nicobar',
            'Port Blair',
            'Car Nicobar',
            'Diglipur',
            'A&N'
        ],
        bbox: [
            92.15,
            6.75,
            94.35,
            13.75
        ],
        isUt: true
    },
    {
        name: 'Chandigarh',
        aliases: [
            'CHD'
        ],
        bbox: [
            76.71,
            30.68,
            76.84,
            30.79
        ],
        isUt: true
    },
    {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        aliases: [
            'Daman and Diu',
            'Dadra and Nagar Haveli',
            'DNH',
            'Daman',
            'Diu',
            'Silvassa'
        ],
        bbox: [
            70.80,
            20.20,
            73.20,
            20.80
        ],
        isUt: true
    },
    {
        name: 'Delhi',
        aliases: [
            'NCR',
            'New Delhi',
            'National Capital'
        ],
        bbox: [
            76.84,
            28.40,
            77.35,
            28.88
        ],
        isUt: true
    },
    {
        name: 'Jammu and Kashmir',
        aliases: [
            'Jammu & Kashmir',
            'J&K',
            'Jammu',
            'Kashmir',
            'Srinagar',
            'Ramban',
            'Banihal',
            'Udhampur',
            'Anantnag'
        ],
        bbox: [
            73.76,
            32.28,
            77.55,
            35.15
        ],
        isUt: true
    },
    {
        name: 'Ladakh',
        aliases: [
            'Leh',
            'Kargil',
            'Zanskar'
        ],
        bbox: [
            75.50,
            32.20,
            80.35,
            36.00
        ],
        isUt: true
    },
    {
        name: 'Lakshadweep',
        aliases: [
            'Kavaratti',
            'Agatti',
            'Minicoy',
            'Amini'
        ],
        bbox: [
            71.50,
            8.20,
            74.50,
            12.50
        ],
        isUt: true
    },
    {
        name: 'Puducherry',
        aliases: [
            'Pondicherry',
            'Karaikal',
            'Mahe',
            'Yanam'
        ],
        bbox: [
            79.65,
            11.75,
            79.90,
            12.05
        ],
        isUt: true
    }
];
const INDIAN_STATES = [
    ...ALL_INDIAN_STATES,
    ...ALL_UNION_TERRITORIES
];
function extractStateFromAreaDesc(areaDesc = '', headline = '', description = '') {
    const combined = `${areaDesc} ${headline} ${description}`.toLowerCase();
    // 1. Check parentheses match: e.g. "Nicobar (Andaman & Nicobar Islands)" or "Kullu (Himachal Pradesh)"
    const parenMatch = areaDesc.match(/\(([^)]+)\)/);
    if (parenMatch && parenMatch[1]) {
        const candidate = parenMatch[1].trim().toLowerCase();
        for (const state of INDIAN_STATES){
            if (candidate.includes(state.name.toLowerCase())) {
                return state.name;
            }
            for (const alias of state.aliases){
                if (candidate.includes(alias.toLowerCase())) {
                    return state.name;
                }
            }
        }
    }
    // 2. Direct string inclusion against all Indian States, UTs & aliases
    for (const state of INDIAN_STATES){
        if (combined.includes(state.name.toLowerCase())) {
            return state.name;
        }
        for (const alias of state.aliases){
            if (alias.length <= 2) {
                const regex = new RegExp(`\\b${alias}\\b`, 'i');
                if (regex.test(combined)) return state.name;
            } else if (combined.includes(alias.toLowerCase())) {
                return state.name;
            }
        }
    }
    return null;
}
const StateFilter = ({ alerts, selectedState, onSelectState, filteredAlertsCount, currentLang = 'en' })=>{
    _s();
    const [voiceState, setVoiceState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$voiceAdvisoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAdvisoryService"].getState());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StateFilter.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$voiceAdvisoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAdvisoryService"].subscribe(setVoiceState);
            return ({
                "StateFilter.useEffect": ()=>unsubscribe()
            })["StateFilter.useEffect"];
        }
    }["StateFilter.useEffect"], []);
    // Compute active alert count per State & UT
    const stateCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StateFilter.useMemo[stateCounts]": ()=>{
            const counts = {};
            for (const alert of alerts){
                const areaDescs = alert.info.areas.map({
                    "StateFilter.useMemo[stateCounts].areaDescs": (a)=>a.areaDesc
                }["StateFilter.useMemo[stateCounts].areaDescs"]).join(' ');
                const matched = extractStateFromAreaDesc(areaDescs, alert.info.headline, alert.info.description);
                if (matched) {
                    counts[matched] = (counts[matched] || 0) + 1;
                }
            }
            return counts;
        }
    }["StateFilter.useMemo[stateCounts]"], [
        alerts
    ]);
    const handleStateChange = (stateName)=>{
        if (!stateName || stateName === 'ALL') {
            // Pan back to All India overview
            onSelectState(null, [
                68.0,
                7.0,
                97.5,
                37.0
            ]);
            return;
        }
        const stateObj = INDIAN_STATES.find((s)=>s.name === stateName);
        const bbox = stateObj ? stateObj.bbox : null;
        // Filter alerts for that state and cache locally for offline mesh sync
        const stateFiltered = alerts.filter((a)=>{
            const areaDescs = a.info.areas.map((ar)=>ar.areaDesc).join(' ');
            const st = extractStateFromAreaDesc(areaDescs, a.info.headline, a.info.description);
            return st === stateName;
        });
        try {
            localStorage.setItem(`sanket_offline_mesh_state_${stateName}`, JSON.stringify({
                state: stateName,
                timestamp: Date.now(),
                count: stateFiltered.length,
                alerts: stateFiltered
            }));
        } catch (err) {
            console.warn('Failed to cache state alerts to localStorage:', err);
        }
        onSelectState(stateName, bbox);
    };
    const handleVoiceBroadcast = ()=>{
        if (voiceState.isSpeaking) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$voiceAdvisoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAdvisoryService"].stop();
            return;
        }
        const activeStateName = selectedState || 'All India';
        const alertsToSpeak = selectedState ? alerts.filter((a)=>{
            const areaDescs = a.info.areas.map((ar)=>ar.areaDesc).join(' ');
            const st = extractStateFromAreaDesc(areaDescs, a.info.headline, a.info.description);
            return st === selectedState;
        }) : alerts;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$voiceAdvisoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAdvisoryService"].speakAlerts(activeStateName, alertsToSpeak, currentLang);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex flex-col gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[10px] font-bold uppercase text-slate-300 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3.5 h-3.5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "All-India State Filter (36 States & UTs)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVoiceBroadcast,
                        className: `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow-xs ${voiceState.isSpeaking ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse ring-2 ring-red-400/80' : 'bg-cyan-600/25 hover:bg-cyan-600/40 border border-cyan-500/40 text-cyan-300'}`,
                        title: voiceState.isSpeaking ? 'Stop voice broadcast' : 'Read active warnings aloud',
                        children: voiceState.isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                    className: "w-3 h-3 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StateFilter.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Stop Broadcast"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StateFilter.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StateFilter.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-3 h-3 text-cyan-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StateFilter.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Broadcast Alert"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StateFilter.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StateFilter.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StateFilter.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedState || 'ALL',
                        onChange: (e)=>handleStateChange(e.target.value),
                        className: "w-full appearance-none bg-slate-950 border border-slate-700 hover:border-cyan-500/60 rounded-lg px-2.5 py-1.5 pr-8 text-xs font-medium text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "ALL",
                                children: [
                                    "🇮🇳 All States & UTs (",
                                    alerts.length,
                                    " Active Warnings)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                label: "States (28)",
                                children: ALL_INDIAN_STATES.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: state.name,
                                        children: [
                                            "📍 ",
                                            state.name,
                                            " ",
                                            stateCounts[state.name] ? `(${stateCounts[state.name]} active)` : '(0)'
                                        ]
                                    }, state.name, true, {
                                        fileName: "[project]/src/components/StateFilter.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                label: "Union Territories (8)",
                                children: ALL_UNION_TERRITORIES.map((ut)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: ut.name,
                                        children: [
                                            "🏝️ ",
                                            ut.name,
                                            " ",
                                            stateCounts[ut.name] ? `(${stateCounts[ut.name]} active)` : '(0)'
                                        ]
                                    }, ut.name, true, {
                                        fileName: "[project]/src/components/StateFilter.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StateFilter.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-cyan-200 font-semibold truncate",
                        children: [
                            "Active: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: selectedState
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateFilter.tsx",
                                lineNumber: 262,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " (",
                            filteredAlertsCount,
                            " alerts)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleStateChange('ALL'),
                        className: "text-cyan-400 hover:text-white underline font-mono text-[9px] shrink-0",
                        children: "Clear Filter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StateFilter.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StateFilter.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StateFilter.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StateFilter, "lpuKX1cNYW7SgBekbCyDueZH4sc=");
_c = StateFilter;
var _c;
__turbopack_context__.k.register(_c, "StateFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WeatherFX.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherFX",
    ()=>WeatherFX,
    "normalizeHazardType",
    ()=>normalizeHazardType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function normalizeHazardType(rawType = '') {
    const t = rawType.toLowerCase();
    // 1. Avalanche (DGRE / DRDO / SASE)
    if (t.includes('avalanche') || t.includes('snowslide') || t.includes('snow avalanche')) {
        return 'avalanche';
    }
    // 2. Snowfall & Heavy Snow
    if (t.includes('snowfall') || t.includes('heavy snow') || t.includes('snow') || t.includes('blizzard')) {
        return 'snowfall';
    }
    // 3. Forest Fires / Fires (FSI / Van Agni)
    if (t.includes('forest fire') || t.includes('fire') || t.includes('wildfire') || t.includes('bushfire') || t.includes('fsi') || t.includes('van agni')) {
        return 'fire';
    }
    // 4. Cyclone / Depression
    if (t.includes('cyclone') || t.includes('depression') || t.includes('cyclonic') || t.includes('storm surge') || t.includes('squall') || t.includes('gale')) {
        return 'cyclone';
    }
    // 5. Earthquake / Tremor
    if (t.includes('earthquake') || t.includes('tremor') || t.includes('seismic') || t.includes('quake') || t.includes('aftershock')) {
        return 'earthquake';
    }
    // 6. Hailstorm
    if (t.includes('hail') || t.includes('hailstorm')) {
        return 'hailstorm';
    }
    // 7. Flood & Inundation
    if (t.includes('flood') || t.includes('inundation') || t.includes('waterlogging') || t.includes('deluge')) {
        return 'flood';
    }
    // 8. Drought & Arid Dry Spell
    if (t.includes('drought') || t.includes('dry spell') || t.includes('water scarcity') || t.includes('arid') || t.includes('parched')) {
        return 'drought';
    }
    // 9. Heatwaves (Loo / Extreme Heat)
    if (t.includes('heat') || t.includes('heatwave') || t.includes('heat wave') || t.includes('loo') || t.includes('hot') || t.includes('warm')) {
        return 'heatwave';
    }
    // 10. Lightning (Quick, isolated flashes without rain)
    if ((t.includes('lightning') || t.includes('electric') || t.includes('bolt') || t.includes('పిడుగులు')) && !t.includes('rain') && !t.includes('thunder')) {
        return 'lightning';
    }
    // 11. Thunderstorm (Rain + Lightning)
    if (t.includes('thunder') || t.includes('thunderstorm') || t.includes('lightning') || t.includes('ఉరుములు') || t.includes('పిడుగులు')) {
        return 'thunderstorm';
    }
    // 12. Rainfall & Downpour
    if (t.includes('rain') || t.includes('rainfall') || t.includes('precipitation') || t.includes('downpour')) {
        return 'rainfall';
    }
    // 13. Landslide / Mudslide
    if (t.includes('landslide') || t.includes('mudslide') || t.includes('rockfall') || t.includes('debris flow') || t.includes('slope collapse')) {
        return 'landslide';
    }
    return 'rainfall';
}
const WeatherFX = ({ type, className = '', currentZoom, zoom })=>{
    _s();
    const hazard = normalizeHazardType(type);
    // 1. Forest Fires: Smoke plume particles (slowly rising, expanding dark grey circles)
    const smokePlumes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[smokePlumes]": ()=>{
            return Array.from({
                length: 16
            }, {
                "WeatherFX.useMemo[smokePlumes]": (_, i)=>({
                        id: i,
                        startLeft: `${42 + i * 7 % 17 - 8}%`,
                        delay: `${i * 0.28 % 4.2}s`,
                        duration: `${3.5 + i % 4 * 0.5}s`,
                        initialSize: `${16 + i % 4 * 6}px`,
                        driftX: `${(i % 5 - 2) * 24}px`,
                        blur: `${3 + i % 3 * 2}px`
                    })
            }["WeatherFX.useMemo[smokePlumes]"]);
        }
    }["WeatherFX.useMemo[smokePlumes]"], []);
    // 2. Landslides: Brown & dark grey irregular blocks animating downwards diagonally
    const landslideBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[landslideBlocks]": ()=>{
            const colors = [
                '#78350f',
                '#451a03',
                '#1f2937',
                '#374151',
                '#292524',
                '#92400e',
                '#1c1917' // charcoal dark stone
            ];
            const borderRadii = [
                '2px 6px 1px 4px',
                '5px 2px 7px 1px',
                '1px 5px 3px 6px',
                '4px 1px 3px 5px',
                '3px 6px 4px 2px',
                '2px 3px 6px 1px'
            ];
            return Array.from({
                length: 26
            }, {
                "WeatherFX.useMemo[landslideBlocks]": (_, i)=>({
                        id: i,
                        startLeft: `${12 + i * 3.6 % 76}%`,
                        delay: `${i * 0.12 % 2.4}s`,
                        duration: `${1.4 + i % 4 * 0.3}s`,
                        width: `${8 + i % 5 * 3}px`,
                        height: `${7 + i * 3 % 4 * 3}px`,
                        color: colors[i % colors.length],
                        borderRadius: borderRadii[i % borderRadii.length],
                        driftX: `${25 + i % 4 * 14}px`,
                        rotation: `${180 + i % 5 * 90}deg`
                    })
            }["WeatherFX.useMemo[landslideBlocks]"]);
        }
    }["WeatherFX.useMemo[landslideBlocks]"], []);
    // 3. Thunderstorm Rain Dashes
    const thunderstormDashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[thunderstormDashes]": ()=>{
            return Array.from({
                length: 24
            }, {
                "WeatherFX.useMemo[thunderstormDashes]": (_, i)=>({
                        id: i,
                        left: `${i / 24 * 100}%`,
                        delay: `${i * 0.08 % 0.6}s`,
                        height: `${18 + i % 4 * 8}px`,
                        opacity: 0.6 + i % 3 * 0.15
                    })
            }["WeatherFX.useMemo[thunderstormDashes]"]);
        }
    }["WeatherFX.useMemo[thunderstormDashes]"], []);
    // 4. Dense Rainfall Dashes (fast-falling blue vertical dashes)
    const denseRainDashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[denseRainDashes]": ()=>{
            return Array.from({
                length: 32
            }, {
                "WeatherFX.useMemo[denseRainDashes]": (_, i)=>({
                        id: i,
                        left: `${i / 32 * 100}%`,
                        delay: `${i * 0.05 % 0.4}s`,
                        height: `${20 + i % 5 * 6}px`,
                        opacity: 0.7 + i % 3 * 0.15
                    })
            }["WeatherFX.useMemo[denseRainDashes]"]);
        }
    }["WeatherFX.useMemo[denseRainDashes]"], []);
    // 5. Snowfall circles (soft blurred white circles with gentle horizontal sway)
    const snowCircles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[snowCircles]": ()=>{
            return Array.from({
                length: 28
            }, {
                "WeatherFX.useMemo[snowCircles]": (_, i)=>({
                        id: i,
                        left: `${i / 28 * 100}%`,
                        delay: `${i * 0.22 % 3.6}s`,
                        duration: `${3.2 + i % 4 * 0.6}s`,
                        size: `${7 + i % 4 * 4}px`,
                        blur: `${1.5 + i % 3 * 1}px`,
                        opacity: 0.7 + i % 4 * 0.08
                    })
            }["WeatherFX.useMemo[snowCircles]"]);
        }
    }["WeatherFX.useMemo[snowCircles]"], []);
    // 6. Avalanche Snow Blocks (heavy white & light-blue crashing down steep diagonal path)
    const avalancheBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[avalancheBlocks]": ()=>{
            const snowColors = [
                '#ffffff',
                '#f8fafc',
                '#f0f9ff',
                '#e0f2fe',
                '#bae6fd',
                '#e2e8f0'
            ];
            return Array.from({
                length: 32
            }, {
                "WeatherFX.useMemo[avalancheBlocks]": (_, i)=>({
                        id: i,
                        startLeft: `${5 + i * 3.1 % 80}%`,
                        delay: `${i * 0.08 % 1.2}s`,
                        duration: `${0.85 + i % 5 * 0.15}s`,
                        width: `${10 + i % 5 * 5}px`,
                        height: `${9 + i * 2 % 4 * 4}px`,
                        color: snowColors[i % snowColors.length],
                        borderRadius: `${2 + i % 4}px`
                    })
            }["WeatherFX.useMemo[avalancheBlocks]"]);
        }
    }["WeatherFX.useMemo[avalancheBlocks]"], []);
    // 7. Hail dots
    const hailDots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[hailDots]": ()=>{
            return Array.from({
                length: 28
            }, {
                "WeatherFX.useMemo[hailDots]": (_, i)=>({
                        id: i,
                        left: `${i / 28 * 100}%`,
                        delay: `${i * 0.04 % 0.45}s`,
                        size: `${3 + i % 3 * 2.5}px`
                    })
            }["WeatherFX.useMemo[hailDots]"]);
        }
    }["WeatherFX.useMemo[hailDots]"], []);
    // 8. Light rain dashes
    const lightRainDashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeatherFX.useMemo[lightRainDashes]": ()=>{
            return Array.from({
                length: 20
            }, {
                "WeatherFX.useMemo[lightRainDashes]": (_, i)=>({
                        id: i,
                        left: `${i / 20 * 100}%`,
                        delay: `${i * 0.12 % 1.2}s`,
                        height: `${12 + i % 3 * 5}px`
                    })
            }["WeatherFX.useMemo[lightRainDashes]"]);
        }
    }["WeatherFX.useMemo[lightRainDashes]"], []);
    // Dynamic Scaling calculation based on the map's current zoom level
    // Clamped with strict lower bound (0.2) so the orb doesn't completely disappear when zoomed out,
    // and upper bound (2.5) so it doesn't overflow the viewport when zoomed in.
    const MIN_SCALE = 0.2;
    const MAX_SCALE = 2.5;
    const effectiveZoom = typeof currentZoom === 'number' ? currentZoom : typeof zoom === 'number' ? zoom : 7;
    // Calculation requested: transform: scale(${Math.max(0.2, (currentZoom - 4) / 5)})
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, (effectiveZoom - 4) / 5));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `weather-fx-container pointer-events-none select-none relative w-72 h-72 sm:w-88 sm:h-88 origin-center transition-transform duration-75 ease-out flex items-center justify-center overflow-hidden rounded-full ${className}`,
        style: {
            transform: `translate(-50%, -50%) scale(${scale.toFixed(3)})`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            zIndex: 10
        },
        children: [
            hazard === 'fire' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-44 h-44 rounded-full animate-fire-radial-glow",
                        style: {
                            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.85) 0%, rgba(249, 115, 22, 0.65) 40%, rgba(245, 158, 11, 0.3) 70%, transparent 88%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-28 h-28 rounded-full border border-orange-500/60 animate-ping",
                        style: {
                            animationDuration: '2.4s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute z-20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-10 h-10 text-amber-300 drop-shadow-[0_0_16px_rgba(251,191,36,0.95)] animate-pulse",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2c-.5 0-.9.3-1.1.7C9.3 5.4 6 10.3 6 14.5 6 18.1 8.9 21 12.5 21s6.5-2.9 6.5-6.5c0-4.2-3.3-9.1-4.9-11.8-.2-.4-.6-.7-1.1-.7zm0 6c1.9 2.5 3.5 5.2 3.5 6.5 0 2-1.6 3.5-3.5 3.5S8.5 16.5 8.5 14.5c0-1.3 1.6-4 3.5-6.5z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 301,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
                        children: smokePlumes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute rounded-full bg-stone-700/60 animate-smoke-plume",
                                style: {
                                    left: p.startLeft,
                                    bottom: '38%',
                                    width: p.initialSize,
                                    height: p.initialSize,
                                    filter: `blur(${p.blur})`,
                                    animationDelay: p.delay,
                                    '--smoke-duration': p.duration,
                                    '--smoke-drift-x': p.driftX
                                }
                            }, `smoke-${p.id}`, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'cyclone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center animate-cyclone-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 rounded-full bg-radial-gradient from-cyan-900/30 via-sky-950/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "pointer-events-none w-[90%] h-[90%] animate-cyclone-spin drop-shadow-[0_0_18px_rgba(56,189,248,0.7)]",
                        viewBox: "0 0 200 200",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "cycloneArm1",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#38bdf8",
                                                stopOpacity: "0.9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#0284c7",
                                                stopOpacity: "0.6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#082f49",
                                                stopOpacity: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "cycloneArm2",
                                        x1: "100%",
                                        y1: "100%",
                                        x2: "0%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#06b6d4",
                                                stopOpacity: "0.85"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#0369a1",
                                                stopOpacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#082f49",
                                                stopOpacity: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                        id: "cycloneEye",
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#ffffff",
                                                stopOpacity: "0.9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "60%",
                                                stopColor: "#38bdf8",
                                                stopOpacity: "0.4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#0c4a6e",
                                                stopOpacity: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WeatherFX.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M100 100 C115 70, 150 70, 170 90 C190 110, 185 150, 155 175 C125 200, 75 190, 50 160 C25 130, 35 80, 65 55 C95 30, 155 35, 180 65",
                                stroke: "url(#cycloneArm1)",
                                strokeWidth: "9",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M100 100 C85 130, 50 130, 30 110 C10 90, 15 50, 45 25 C75 0, 125 10, 150 40 C175 70, 165 120, 135 145 C105 170, 45 165, 20 135",
                                stroke: "url(#cycloneArm2)",
                                strokeWidth: "7",
                                strokeLinecap: "round",
                                opacity: "0.85"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "100",
                                cy: "100",
                                r: "16",
                                fill: "url(#cycloneEye)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'earthquake' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center animate-seismic-shake",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-24 h-24 rounded-full border-2 border-red-500 animate-seismic-ring",
                        style: {
                            animationDelay: '0s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-24 h-24 rounded-full border-2 border-orange-500 animate-seismic-ring",
                        style: {
                            animationDelay: '0.7s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-24 h-24 rounded-full border-2 border-amber-400 animate-seismic-ring",
                        style: {
                            animationDelay: '1.4s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none relative w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow-[0_0_15px_rgba(239,68,68,0.9)] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 rounded-full bg-white animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'rainfall' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-blue-950/20 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    denseRainDashes.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-sky-400 via-blue-500 to-transparent animate-dense-rain",
                            style: {
                                left: d.left,
                                height: d.height,
                                animationDelay: d.delay,
                                opacity: d.opacity
                            }
                        }, `dense-rain-${d.id}`, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'thunderstorm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-white/75 animate-lightning-strobe rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: thunderstormDashes.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-sky-200 to-transparent animate-rain-dash",
                                style: {
                                    left: d.left,
                                    height: d.height,
                                    animationDelay: d.delay,
                                    opacity: d.opacity
                                }
                            }, `thunder-d-${d.id}`, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 427,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-20 h-28 text-amber-300 animate-pulse drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13 2L3 14h7v8l10-12h-7l3-8z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'hailstorm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: hailDots.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute rounded-full bg-white animate-hail-dot",
                        style: {
                            left: h.left,
                            width: h.size,
                            height: h.size,
                            boxShadow: '0 0 4px #ffffff',
                            animationDelay: h.delay
                        }
                    }, `hail-${h.id}`, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 455,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'flood' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex flex-col justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/40 via-cyan-950/20 to-transparent rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none relative w-full h-24 overflow-hidden rounded-b-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute bottom-0 left-0 w-[200%] h-16 flex animate-flood-wave-slow opacity-75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-1/2 h-full text-blue-600",
                                        viewBox: "0 0 400 100",
                                        preserveAspectRatio: "none",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,40 C100,80 200,0 300,50 C350,75 380,60 400,45 L400,100 L0,100 Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeatherFX.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-1/2 h-full text-blue-600",
                                        viewBox: "0 0 400 100",
                                        preserveAspectRatio: "none",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,40 C100,80 200,0 300,50 C350,75 380,60 400,45 L400,100 L0,100 Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeatherFX.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute bottom-0 left-0 w-[200%] h-14 flex animate-flood-wave-mid opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-1/2 h-full text-cyan-400",
                                        viewBox: "0 0 400 100",
                                        preserveAspectRatio: "none",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,50 C80,10 180,70 280,30 C340,10 380,50 400,35 L400,100 L0,100 Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeatherFX.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-1/2 h-full text-cyan-400",
                                        viewBox: "0 0 400 100",
                                        preserveAspectRatio: "none",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,50 C80,10 180,70 280,30 C340,10 380,50 400,35 L400,100 L0,100 Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeatherFX.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeatherFX.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 479,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'drought' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center animate-drought-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 rounded-full",
                        style: {
                            background: 'radial-gradient(circle, rgba(120, 53, 15, 0.45) 0%, rgba(180, 83, 9, 0.25) 55%, transparent 85%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "pointer-events-none absolute w-[80%] h-[80%] opacity-75",
                        viewBox: "0 0 200 200",
                        fill: "none",
                        stroke: "#92400e",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M100 15 L95 55 L75 80 L80 120 L65 145 L70 185"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 527,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M95 55 L135 65 L160 95 L145 130 L165 160"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M75 80 L40 90 L25 125 L45 155"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M80 120 L115 135 L125 175 L105 190"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M135 65 L120 30 L140 15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M160 95 L190 105"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M40 90 L15 80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M145 130 L185 140"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 534,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M65 145 L35 170"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M115 135 L85 160"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeatherFX.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none w-20 h-20 rounded-full border border-amber-600/40 bg-amber-500/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'heatwave' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute w-[85%] h-[85%] rounded-full animate-heat-shimmer",
                        style: {
                            backdropFilter: 'blur(2px) contrast(1.2)',
                            WebkitBackdropFilter: 'blur(2px) contrast(1.2)',
                            background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(239,68,68,0.15) 50%, transparent 80%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none w-32 h-32 rounded-full border border-orange-400/40 animate-ping",
                        style: {
                            animationDuration: '2.5s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 548,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'lightning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-yellow-400/40 animate-lightning-bolt-strobe rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 570,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "pointer-events-none w-24 h-36 text-yellow-300 animate-lightning-bolt-strobe drop-shadow-[0_0_24px_rgba(250,204,21,1)]",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13 2L3 14h7v8l10-12h-7l3-8z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 568,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'snowfall' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-sky-950/20 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 588,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    snowCircles.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute rounded-full bg-white/95 animate-snow-sway",
                            style: {
                                left: s.left,
                                width: s.size,
                                height: s.size,
                                filter: `blur(${s.blur})`,
                                animationDelay: s.delay,
                                '--snow-duration': s.duration,
                                '--snow-opacity': s.opacity
                            }
                        }, `snow-sway-${s.id}`, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 590,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 587,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'avalanche' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/40 via-sky-950/25 to-blue-900/30 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    avalancheBlocks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute animate-avalanche-crash shadow-lg",
                            style: {
                                left: b.startLeft,
                                top: '-5%',
                                width: `${b.width}px`,
                                height: `${b.height}px`,
                                backgroundColor: b.color,
                                borderRadius: b.borderRadius,
                                animationDelay: b.delay,
                                '--avalanche-duration': b.duration
                            }
                        }, `avalanche-${b.id}`, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 617,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/60 via-sky-100/40 to-transparent blur-md animate-avalanche-cloud"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute bottom-2 left-6 right-6 h-8 bg-white/80 rounded-full blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 611,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hazard === 'landslide' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none relative w-full h-full overflow-hidden rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-stone-950/20 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 644,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    landslideBlocks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute animate-landslide-diagonal shadow-md",
                            style: {
                                left: b.startLeft,
                                top: '0%',
                                width: b.width,
                                height: b.height,
                                backgroundColor: b.color,
                                borderRadius: b.borderRadius,
                                animationDelay: b.delay,
                                '--slide-duration': b.duration,
                                '--slide-drift-x': b.driftX,
                                '--slide-rotation': b.rotation
                            }
                        }, `rock-${b.id}`, false, {
                            fileName: "[project]/src/components/WeatherFX.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-stone-900/40 to-transparent blur-xs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherFX.tsx",
                        lineNumber: 663,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherFX.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WeatherFX.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WeatherFX, "D/D65PfFtahalkv+nfsm6Nv7wxI=");
_c = WeatherFX;
var _c;
__turbopack_context__.k.register(_c, "WeatherFX");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/emergencySops.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMERGENCY_CONTACTS",
    ()=>EMERGENCY_CONTACTS,
    "SURVIVAL_CHECKLISTS",
    ()=>SURVIVAL_CHECKLISTS
]);
const EMERGENCY_CONTACTS = [
    {
        title: 'National Emergency Number',
        number: '112',
        description: 'Single emergency access point across India (Police, Fire, Ambulance, Disaster)',
        priority: 'National',
        category: 'Universal'
    },
    {
        title: 'NDMA Disaster Helpline',
        number: '1078',
        description: 'National Disaster Management Authority 24x7 Control Room & Public Assistance',
        priority: 'National',
        category: 'Disaster'
    },
    {
        title: 'NDRF HQ Control Room',
        number: '011-24363260 / 9711077372',
        description: 'National Disaster Response Force HQ operational rescue control room',
        priority: 'National',
        category: 'Rescue'
    },
    {
        title: 'State Emergency Operation Centre (SEOC)',
        number: '1070',
        description: 'Toll-free state disaster operation centre hotline (All States)',
        priority: 'State',
        category: 'Disaster'
    },
    {
        title: 'District Emergency Operation Centre (DEOC)',
        number: '1077',
        description: 'District collectorate disaster management helpline',
        priority: 'State',
        category: 'Disaster'
    },
    {
        title: 'National Ambulance Service',
        number: '108',
        description: 'Emergency Medical & Trauma Response Service',
        priority: 'National',
        category: 'Medical'
    },
    {
        title: 'Fire & Rescue Service',
        number: '101',
        description: 'Fire hazard, urban search and structural collapse rescue',
        priority: 'National',
        category: 'Fire'
    },
    {
        title: 'Indian Coast Guard SAR',
        number: '1554',
        description: 'Maritime search and rescue, cyclone coastal evacuation',
        priority: 'Specialized',
        category: 'Maritime'
    }
];
const SURVIVAL_CHECKLISTS = {
    cyclone: {
        hazard: 'Tropical Cyclone & Severe Storm',
        color: '#ef4444',
        before: [
            'Inspect roof, tie down tin sheets and loose corrugated sheets.',
            'Trim dry tree branches touching power cables or near houses.',
            'Store 3 days of non-perishable food (chura, gur, biscuits) and sealed potable water.',
            'Keep battery-powered radio, torches with extra cells, and power banks charged.',
            'Keep identity cards, ration card, land papers, and medical prescriptions in double polythene bags.'
        ],
        during: [
            'Switch off electrical mains and turn off gas cylinders.',
            'Remain indoors in the strongest part of the house (preferably under concrete lintel).',
            'Do NOT step outside during the "Eye of the Cyclone" lull — violent reverse winds follow abruptly.',
            'Keep away from glass windows and open verandas.'
        ],
        after: [
            'Wait for official all-clear bulletin on radio or SMS before moving outdoors.',
            'Beware of broken live wires dangling in puddles; inform electricity board.',
            'Boil all drinking water for minimum 10 minutes to prevent cholera and diarrhea.',
            'Cooperate with NDRF and SDRF relief distribution teams.'
        ],
        dos: [
            'Listen to IMD / NDMA radio broadcasts on AIR.',
            'Evacuate immediately when red alert evacuation order is issued by District Collector.',
            'Keep livestock untied so they can escape rising storm surges.'
        ],
        donts: [
            'Do NOT spread unverified rumors on social media.',
            'Do NOT drive or ride two-wheelers through flooded causeways.',
            'Do NOT touch fallen electric poles or street lamps.'
        ]
    },
    flood: {
        hazard: 'Riverine Flash Flood & Inundation',
        color: '#3b82f6',
        before: [
            'Identify high ground, flood shelters, and safe evacuation corridors.',
            'Pack emergency go-bag: torch, matchboxes in wax paper, water purification tablets (Halazone).',
            'Move valuables and household appliances to upper floors or attics.'
        ],
        during: [
            'Do not attempt to walk or swim through moving water above knee depth.',
            'If trapped in house, climb to the roof; do NOT get trapped in closed attics without roof exits.',
            'Signal rescue helicopters with bright colored cloth or waving a torch.',
            'Disconnect inverter batteries before water reaches floor level.'
        ],
        after: [
            'Watch out for snakes and poisonous reptiles seeking refuge on elevated furniture.',
            'Disinfect home and surroundings with bleaching powder and lime.',
            'Discard food items that came into contact with flood silt.'
        ],
        dos: [
            'Drink only boiled or chlorine-treated water.',
            'Use a stick to probe ground ahead when wading in shallow murky water.'
        ],
        donts: [
            'Never drive through flooded bridges or culverts.',
            'Do not eat dead fish or drowned livestock.'
        ]
    },
    earthquake: {
        hazard: 'Earthquake & Structural Collapse',
        color: '#eab308',
        before: [
            'Fasten heavy furniture, cupboards, and water heaters to wall studs.',
            'Practice "DROP, COVER, AND HOLD ON" with family members.',
            'Keep shoes and a torch beside the bed.'
        ],
        during: [
            'DROP to your hands and knees.',
            'COVER your head and neck under a sturdy table or desk.',
            'HOLD ON until shaking stops completely.',
            'If outdoors, move away from high-rise buildings, flyovers, and power poles.'
        ],
        after: [
            'Check for gas leaks by smell. Do not strike matches or operate light switches if smell detected.',
            'Expect aftershocks. Avoid re-entering cracked or distressed masonry buildings.',
            'Leave building using staircases; NEVER use elevators.'
        ],
        dos: [
            'Protect head with pillow or bag if in bed.',
            'Help elderly, injured, and infants first.'
        ],
        donts: [
            'Do NOT rush towards narrow doorway exits during shaking — risk of stampede.'
        ]
    },
    landslide: {
        hazard: 'Hill Slope Landslide & Debris Flow',
        color: '#ea580c',
        before: [
            'Recognize warning signs: leaning utility poles, new cracks in soil, bulging retaining walls.',
            'Monitor hillside streams — abrupt muddying or sudden drop in discharge indicates upstream damming.'
        ],
        during: [
            'Evacuate immediately if rumbling or cracking trees are heard.',
            'Run perpendicular to the landslide path, towards high ridges, never down the slope.'
        ],
        after: [
            'Stay away from slide area; secondary collapses often trigger within 48 hours.',
            'Check for injured persons without entering direct hazard zone.'
        ],
        dos: [
            'Report any slope movement immediately to 1070 / 1077.'
        ],
        donts: [
            'Never sleep on ground floor facing steep cut slopes during prolonged cloudbursts.'
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/indiaBoundaries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Embedded GeoJSON dataset of India national outline & key topographical relief zones for offline rendering
__turbopack_context__.s([
    "INDIA_BASEMAP_GEOJSON",
    ()=>INDIA_BASEMAP_GEOJSON
]);
const INDIA_BASEMAP_GEOJSON = {
    type: 'FeatureCollection',
    features: [
        // 1. India Mainland Landmass
        {
            type: 'Feature',
            properties: {
                name: 'India Mainland',
                type: 'country',
                elevation: 'base'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            74.8,
                            37.0
                        ],
                        [
                            77.5,
                            35.8
                        ],
                        [
                            78.9,
                            34.5
                        ],
                        [
                            80.3,
                            31.8
                        ],
                        [
                            81.5,
                            30.5
                        ],
                        [
                            88.2,
                            27.9
                        ],
                        [
                            89.1,
                            27.3
                        ],
                        [
                            92.0,
                            27.9
                        ],
                        [
                            97.2,
                            28.5
                        ],
                        [
                            96.2,
                            26.8
                        ],
                        [
                            95.0,
                            24.2
                        ],
                        [
                            93.0,
                            24.0
                        ],
                        [
                            91.8,
                            22.4
                        ],
                        [
                            89.2,
                            21.8
                        ],
                        [
                            87.2,
                            21.6
                        ],
                        [
                            85.8,
                            19.9
                        ],
                        [
                            83.2,
                            17.8
                        ],
                        [
                            80.4,
                            13.2
                        ],
                        [
                            79.9,
                            10.4
                        ],
                        [
                            77.6,
                            8.2
                        ],
                        [
                            76.4,
                            9.9
                        ],
                        [
                            74.9,
                            13.1
                        ],
                        [
                            73.9,
                            15.5
                        ],
                        [
                            72.9,
                            19.1
                        ],
                        [
                            72.7,
                            21.3
                        ],
                        [
                            69.1,
                            22.4
                        ],
                        [
                            68.6,
                            23.9
                        ],
                        [
                            70.6,
                            24.6
                        ],
                        [
                            71.1,
                            26.9
                        ],
                        [
                            74.1,
                            30.6
                        ],
                        [
                            74.9,
                            32.6
                        ],
                        [
                            74.8,
                            37.0
                        ]
                    ]
                ]
            }
        },
        // 2. The Great Himalayan Arc (High Alpine Snow & Glacier Topography: >3,500m)
        {
            type: 'Feature',
            properties: {
                name: 'The Great Himalayan Arc',
                type: 'terrain_himalaya',
                elevation: 'high_alpine'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            74.5,
                            36.5
                        ],
                        [
                            76.8,
                            35.8
                        ],
                        [
                            78.5,
                            34.2
                        ],
                        [
                            80.2,
                            31.5
                        ],
                        [
                            82.5,
                            30.0
                        ],
                        [
                            88.0,
                            28.0
                        ],
                        [
                            92.5,
                            28.2
                        ],
                        [
                            96.5,
                            28.8
                        ],
                        [
                            95.8,
                            27.5
                        ],
                        [
                            92.0,
                            27.0
                        ],
                        [
                            88.0,
                            26.8
                        ],
                        [
                            81.5,
                            29.2
                        ],
                        [
                            79.0,
                            30.8
                        ],
                        [
                            76.2,
                            32.5
                        ],
                        [
                            74.5,
                            34.8
                        ],
                        [
                            74.5,
                            36.5
                        ]
                    ]
                ]
            }
        },
        // 3. Indo-Gangetic Alluvial Flood Plains (River Basins: <200m)
        {
            type: 'Feature',
            properties: {
                name: 'Indo-Gangetic Flood Basin',
                type: 'terrain_plains',
                elevation: 'lowland'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            74.5,
                            30.5
                        ],
                        [
                            77.2,
                            29.8
                        ],
                        [
                            80.5,
                            28.0
                        ],
                        [
                            84.5,
                            26.8
                        ],
                        [
                            88.0,
                            25.5
                        ],
                        [
                            89.5,
                            24.0
                        ],
                        [
                            88.5,
                            22.5
                        ],
                        [
                            85.5,
                            24.5
                        ],
                        [
                            81.5,
                            25.2
                        ],
                        [
                            77.5,
                            26.8
                        ],
                        [
                            75.0,
                            28.5
                        ],
                        [
                            74.5,
                            30.5
                        ]
                    ]
                ]
            }
        },
        // 4. Thar Desert Sand Sheet (Western Arid Zone)
        {
            type: 'Feature',
            properties: {
                name: 'Thar Desert Dune Belt',
                type: 'terrain_desert',
                elevation: 'arid_plateau'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            70.0,
                            28.5
                        ],
                        [
                            73.5,
                            29.0
                        ],
                        [
                            74.0,
                            26.5
                        ],
                        [
                            72.5,
                            24.8
                        ],
                        [
                            70.5,
                            24.5
                        ],
                        [
                            69.5,
                            26.0
                        ],
                        [
                            70.0,
                            28.5
                        ]
                    ]
                ]
            }
        },
        // 5. Deccan Traps & Central Highland Plateau (Basalt Plateau: 400m-900m)
        {
            type: 'Feature',
            properties: {
                name: 'Deccan Plateau',
                type: 'terrain_plateau',
                elevation: 'tableland'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            74.0,
                            21.5
                        ],
                        [
                            78.5,
                            22.0
                        ],
                        [
                            81.0,
                            20.5
                        ],
                        [
                            80.0,
                            15.5
                        ],
                        [
                            77.5,
                            13.5
                        ],
                        [
                            75.0,
                            14.5
                        ],
                        [
                            73.8,
                            17.5
                        ],
                        [
                            74.0,
                            21.5
                        ]
                    ]
                ]
            }
        },
        // 6. Western Ghats Escarpment (Heavy Orographics & Landslide Hazard Ridge)
        {
            type: 'Feature',
            properties: {
                name: 'Western Ghats Escarpment',
                type: 'terrain_ghats',
                elevation: 'montane_ridge'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            73.3,
                            20.5
                        ],
                        [
                            74.2,
                            19.5
                        ],
                        [
                            74.8,
                            16.5
                        ],
                        [
                            75.5,
                            14.0
                        ],
                        [
                            76.8,
                            11.5
                        ],
                        [
                            77.3,
                            9.0
                        ],
                        [
                            77.6,
                            8.4
                        ],
                        [
                            77.0,
                            8.8
                        ],
                        [
                            76.2,
                            10.5
                        ],
                        [
                            74.5,
                            13.5
                        ],
                        [
                            73.5,
                            17.0
                        ],
                        [
                            73.0,
                            19.5
                        ],
                        [
                            73.3,
                            20.5
                        ]
                    ]
                ]
            }
        },
        // 7. Brahmaputra Valley & River Basin
        {
            type: 'Feature',
            properties: {
                name: 'Brahmaputra Valley Basin',
                type: 'terrain_river_valley',
                elevation: 'fluvial_basin'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            89.8,
                            26.1
                        ],
                        [
                            92.0,
                            26.5
                        ],
                        [
                            94.5,
                            27.2
                        ],
                        [
                            95.8,
                            27.8
                        ],
                        [
                            95.0,
                            26.8
                        ],
                        [
                            93.2,
                            26.0
                        ],
                        [
                            90.5,
                            25.8
                        ],
                        [
                            89.8,
                            26.1
                        ]
                    ]
                ]
            }
        },
        // 8. Andaman & Nicobar Archipelago (Island Territory)
        {
            type: 'Feature',
            properties: {
                name: 'Andaman & Nicobar Islands',
                type: 'island',
                elevation: 'coastal'
            },
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    // North/Middle/South Andaman
                    [
                        [
                            [
                                92.7,
                                13.5
                            ],
                            [
                                93.0,
                                13.5
                            ],
                            [
                                93.0,
                                11.5
                            ],
                            [
                                92.6,
                                11.5
                            ],
                            [
                                92.7,
                                13.5
                            ]
                        ]
                    ],
                    // Great Nicobar
                    [
                        [
                            [
                                93.6,
                                7.3
                            ],
                            [
                                94.0,
                                7.3
                            ],
                            [
                                94.0,
                                6.7
                            ],
                            [
                                93.7,
                                6.7
                            ],
                            [
                                93.6,
                                7.3
                            ]
                        ]
                    ]
                ]
            }
        },
        // 9. Lakshadweep Coral Atolls
        {
            type: 'Feature',
            properties: {
                name: 'Lakshadweep Islands',
                type: 'island',
                elevation: 'atoll'
            },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            72.5,
                            11.2
                        ],
                        [
                            73.0,
                            11.2
                        ],
                        [
                            73.0,
                            10.0
                        ],
                        [
                            72.5,
                            10.0
                        ],
                        [
                            72.5,
                            11.2
                        ]
                    ]
                ]
            }
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockCapFeeds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Pre-configured authentic NDMA CAP XML Feeds representing major hazard alerts across India
__turbopack_context__.s([
    "ALL_SAMPLE_CAP_FEEDS",
    ()=>ALL_SAMPLE_CAP_FEEDS,
    "SAMPLE_CYCLONE_CAP_XML",
    ()=>SAMPLE_CYCLONE_CAP_XML,
    "SAMPLE_DGRE_LANDSLIDE_XML",
    ()=>SAMPLE_DGRE_LANDSLIDE_XML,
    "SAMPLE_EARTHQUAKE_CAP_XML",
    ()=>SAMPLE_EARTHQUAKE_CAP_XML,
    "SAMPLE_FLOOD_CAP_XML",
    ()=>SAMPLE_FLOOD_CAP_XML,
    "SAMPLE_FOREST_FIRE_FSI_XML",
    ()=>SAMPLE_FOREST_FIRE_FSI_XML,
    "SAMPLE_HEATWAVE_CAP_XML",
    ()=>SAMPLE_HEATWAVE_CAP_XML,
    "SAMPLE_LANDSLIDE_CAP_XML",
    ()=>SAMPLE_LANDSLIDE_CAP_XML,
    "SAMPLE_MUMBAI_SURGE_XML",
    ()=>SAMPLE_MUMBAI_SURGE_XML
]);
const SAMPLE_CYCLONE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-CY-084</identifier>
  <sender>ndma.imd.gov.in</sender>
  <sent>2026-11-05T08:30:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Very Severe Cyclonic Storm 'Varuna'</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: Very Severe Cyclonic Storm Landfall within 12 Hours Along Odisha-Andhra Coast</headline>
    <description>Cyclonic Storm 'Varuna' centered over west-central Bay of Bengal moving north-northwestwards with sustained wind speeds of 135-145 kmph gusting to 160 kmph. Extreme rainfall (above 210mm) expected in coastal Odisha and north coastal Andhra Pradesh. Storm surge of 2.5-3.0m likely to inundate low lying areas.</description>
    <instruction>Total suspension of fishing operations. Immediate evacuation of population living within 5km of coastline to designated Multipurpose Cyclone Shelters. Keep mobile phones charged, maintain 48 hours dry food and water. Do not venture outdoors during landfall eye calm.</instruction>
    <senderName>National Disaster Management Authority (NDMA) &amp; IMD Cyclone Warning Division</senderName>
    <area>
      <areaDesc>Coastal Districts of Puri, Jagatsinghpur, Kendrapara, Ganjam (Odisha) and Srikakulam (Andhra Pradesh)</areaDesc>
      <!-- CAP Polygon coordinate pairs: lat,lon lat,lon -->
      <polygon>18.15,83.90 18.60,84.40 19.30,85.10 19.85,85.85 20.25,86.60 19.80,86.90 19.10,85.90 18.20,84.95 17.80,83.70 18.15,83.90</polygon>
    </area>
  </info>
</alert>`;
const SAMPLE_FLOOD_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-FL-119</identifier>
  <sender>cwc.ndma.gov.in</sender>
  <sent>2026-11-05T09:15:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Severe Riverine Inundation &amp; Flash Flood</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: River Brahmaputra Flowing in Extreme Flood Situation Exceeding Danger Mark by 1.85m</headline>
    <description>Central Water Commission hydrological station at Nematighat and Guwahati reports Brahmaputra river discharging at 42,000 m3/s following continuous cloudbursts in upper catchment. Embankments breached in Kamrup and Barpeta. 85% of Kaziranga National Park inundated. Critical threat to human settlements.</description>
    <instruction>Move livestock and families to elevated flood shelters and highland embankments. Follow SDRF and NDRF rescue boat directives. Avoid wading in fast-flowing flood waters. Boil or chlorinate all drinking water.</instruction>
    <senderName>Central Water Commission &amp; Assam State Disaster Management Authority (ASDMA)</senderName>
    <area>
      <areaDesc>Brahmaputra Floodplains: Kamrup, Morigaon, Nagaon, Golaghat, Majuli, and Barpeta Districts</areaDesc>
      <polygon>26.10,91.30 26.35,91.80 26.50,92.60 26.70,93.40 26.95,94.20 26.65,94.30 26.30,93.10 26.05,92.10 25.90,91.40 26.10,91.30</polygon>
    </area>
  </info>
</alert>`;
const SAMPLE_LANDSLIDE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-LS-042</identifier>
  <sender>gsi.hp-sdma.gov.in</sender>
  <sent>2026-11-05T07:45:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>High-Risk Landslide &amp; Debris Flow Alert</event>
    <urgency>Expected</urgency>
    <severity>Severe</severity>
    <certainty>Likely</certainty>
    <headline>ORANGE ALERT: Active Landslide Threat Along Beas River Corridor (NH-3 &amp; NH-305)</headline>
    <description>Geological Survey of India landslide early warning system indicates slope saturation index exceeding 92% in Mandi and Kullu valleys. Multiple debris flows and rockfall reported near Pandoh Dam and Aut Tunnel. River Beas swelling rapidly.</description>
    <instruction>Vehicular traffic on NH-3 restricted to emergency services only. Residents in unstable slope settlements advised to relocate to designated government schools/community halls. Do not stay inside hillside structures exhibiting fresh drywall cracks.</instruction>
    <senderName>Himachal Pradesh State Disaster Management Authority (HPSDMA)</senderName>
    <area>
      <areaDesc>Kullu, Mandi, Aut, and Pandoh Sector (Himachal Pradesh)</areaDesc>
      <polygon>31.60,76.85 31.95,77.05 32.25,77.20 32.10,77.40 31.75,77.25 31.55,77.00 31.60,76.85</polygon>
    </area>
  </info>
</alert>`;
const SAMPLE_HEATWAVE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-HW-205</identifier>
  <sender>imd.rajasthan.gov.in</sender>
  <sent>2026-11-05T06:00:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Severe Heat Wave (Loo Condition)</event>
    <urgency>Expected</urgency>
    <severity>Severe</severity>
    <certainty>Observed</certainty>
    <headline>ORANGE ALERT: Severe Heat Wave with Maximum Temperatures Exceeding 48.5°C</headline>
    <description>Persistent dry westerly winds causing severe heat wave conditions over western Rajasthan districts. High risk of heat strokes, severe dehydration, and heat exhaustion among outdoor workers, infants, and senior citizens.</description>
    <instruction>Avoid direct sunlight exposure between 11:00 AM and 04:00 PM. Drink plenty of ORS, Lemon water, or butter milk even if not thirsty. Keep livestock under shaded shelters with constant water supply.</instruction>
    <senderName>IMD Meteorological Centre Jaipur &amp; Rajasthan SDMA</senderName>
    <area>
      <areaDesc>Thar Desert Corridor: Barmer, Jaisalmer, Bikaner, and Jodhpur Districts</areaDesc>
      <polygon>25.60,71.20 26.80,70.50 28.00,71.50 28.20,73.00 27.10,73.20 25.80,72.40 25.60,71.20</polygon>
    </area>
  </info>
</alert>`;
const SAMPLE_MUMBAI_SURGE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-URB-071</identifier>
  <sender>mcgm.disastermgmt.gov.in</sender>
  <sent>2026-11-05T10:00:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Safety</category>
    <event>High Spring Astronomical Tide &amp; Flash Flood</event>
    <urgency>Expected</urgency>
    <severity>Moderate</severity>
    <certainty>Likely</certainty>
    <headline>YELLOW ALERT: 4.87m Astronomical High Tide Coinciding with Intense Rain Squalls</headline>
    <description>Municipal Corporation of Greater Mumbai (MCGM) warns of potential sea water backflow and severe waterlogging in low-lying chronic flood spots (Hindmata, Gandhi Market, Milan Subway, Kurla) during peak tide hours (13:45 IST).</description>
    <instruction>Stay away from promenade seafronts (Marine Drive, Bandstand, Worli Sea Face, Juhu). Citizen vehicles should avoid underpasses and waterlogged roads. Keep emergency helpline 1916 on speed dial.</instruction>
    <senderName>Brihanmumbai Municipal Corporation (BMC) Disaster Management Cell</senderName>
    <area>
      <areaDesc>Mumbai Island City, Suburban Coastline, and Thane Creek Area</areaDesc>
      <!-- CAP Circle: lat,lon radius_km -->
      <circle>19.0760,72.8777 35.0</circle>
    </area>
  </info>
</alert>`;
const SAMPLE_FOREST_FIRE_FSI_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-FIRE-018</identifier>
  <sender>fsi.nic.in</sender>
  <sent>2026-11-13T10:30:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Fire</category>
    <event>Severe Forest Fire Warning (FAST 4.0)</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: Large Active Forest Fire Cluster Detected in Similipal Tiger Reserve &amp; Mayurbhanj Hills</headline>
    <description>Forest Survey of India (FSI) SNPP-VIIRS and MODIS near real-time satellite fire alert system FAST 4.0 detected 28 high-confidence active fire spots with high thermal radiative power. Fast-spreading canopy forest fire driven by gusty dry winds through dry deciduous Sal forest. Severe smoke plumes affecting visibility and wildlife habitats.</description>
    <instruction>Evacuate forest edge fringe villages immediately. State Forest Department fire squads deploying blowers and counter-fire lines. Maintain firebreaks and prevent any open burning or agricultural stubble fires.</instruction>
    <senderName>Forest Survey of India (FSI) &amp; Ministry of Environment, Forest and Climate Change</senderName>
    <area>
      <areaDesc>Similipal Tiger Reserve Core, Baripada, Karanjia, and Rairangpur Forest Divisions (Mayurbhanj, Odisha)</areaDesc>
      <circle>21.85,86.35 45.0</circle>
    </area>
  </info>
</alert>`;
const SAMPLE_DGRE_LANDSLIDE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-DGRE-055</identifier>
  <sender>dgre.drdo.in</sender>
  <sent>2026-11-13T11:00:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>Critical Landslide &amp; Slope Collapse Warning</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: Massive Slope Failure &amp; Active Landslide Corridor Along Jammu-Srinagar National Highway (NH-44)</headline>
    <description>Defence Geoinformatics Research Establishment (DGRE / DRDO) radar slope monitoring network records critical displacement velocities along vulnerable mountain corridors. Massive rockfalls and shooting stones triggering active mudslides and debris flows near Panthyal, Mehar, and Cafeteria Morh. Highway impassable.</description>
    <instruction>Complete suspension of vehicular traffic on NH-44. Residents along unstable hill cuts must evacuate to designated relief shelters. Strictly avoid walking under shooting stone zones and rockfall gullies.</instruction>
    <senderName>Defence Geoinformatics Research Establishment (DGRE/DRDO)</senderName>
    <area>
      <areaDesc>Ramban, Banihal, and Udhampur Sector (Jammu &amp; Kashmir)</areaDesc>
      <polygon>33.15,75.10 33.30,75.25 33.40,75.30 33.35,75.40 33.20,75.30 33.10,75.15 33.15,75.10</polygon>
    </area>
  </info>
</alert>`;
const SAMPLE_EARTHQUAKE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-EQ-091</identifier>
  <sender>seismo.gov.in</sender>
  <sent>2026-11-13T09:45:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>Major Earthquake / Seismic Tremor</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: M6.4 Earthquake Epicenter Recorded in Chamoli Sector; Severe Tremors Across Uttarakhand &amp; NCR</headline>
    <description>National Centre for Seismology (NCS) reports an earthquake of Magnitude 6.4 occurring at 09:42 IST at focal depth of 10 km. Strong tremors felt across Uttarakhand, Himachal Pradesh, Punjab, Haryana, and Delhi-NCR. High risk of secondary landslides and aftershocks in mountainous fault lines.</description>
    <instruction>Drop, Cover, and Hold On. Stay away from unreinforced masonry walls, tall glass structures, and overhead electric lines. Do not use elevators. Evacuate calmly to open parks and grounds once shaking stops. Expect aftershocks.</instruction>
    <senderName>National Centre for Seismology (NCS) &amp; NDMA Seismology Division</senderName>
    <area>
      <areaDesc>Chamoli, Rudraprayag, Uttarkashi, and Pithoragarh Districts (Uttarakhand)</areaDesc>
      <circle>30.40,79.35 55.0</circle>
    </area>
  </info>
</alert>`;
const ALL_SAMPLE_CAP_FEEDS = [
    SAMPLE_FOREST_FIRE_FSI_XML,
    SAMPLE_CYCLONE_CAP_XML,
    SAMPLE_DGRE_LANDSLIDE_XML,
    SAMPLE_EARTHQUAKE_CAP_XML,
    SAMPLE_FLOOD_CAP_XML,
    SAMPLE_LANDSLIDE_CAP_XML,
    SAMPLE_HEATWAVE_CAP_XML,
    SAMPLE_MUMBAI_SURGE_XML
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/capParser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capAlertsToGeoJson",
    ()=>capAlertsToGeoJson,
    "circleToPolygon",
    ()=>circleToPolygon,
    "getSeverityColor",
    ()=>getSeverityColor,
    "parseCapPolygon",
    ()=>parseCapPolygon,
    "parseCapXml",
    ()=>parseCapXml
]);
function circleToPolygon(lat, lon, radiusKm, points = 36) {
    const coords = [];
    const earthRadius = 6371; // km
    const latRad = lat * Math.PI / 180;
    const lonRad = lon * Math.PI / 180;
    const distRatio = radiusKm / earthRadius;
    for(let i = 0; i <= points; i++){
        const bearing = i * 360 / points * (Math.PI / 180);
        const pLat = Math.asin(Math.sin(latRad) * Math.cos(distRatio) + Math.cos(latRad) * Math.sin(distRatio) * Math.cos(bearing));
        const pLon = lonRad + Math.atan2(Math.sin(bearing) * Math.sin(distRatio) * Math.cos(latRad), Math.cos(distRatio) - Math.sin(latRad) * Math.sin(pLat));
        coords.push([
            pLon * 180 / Math.PI,
            pLat * 180 / Math.PI
        ]);
    }
    return coords;
}
function parseCapPolygon(coordString) {
    const pairs = coordString.trim().split(/\s+/);
    const ring = [];
    for (const pair of pairs){
        const parts = pair.split(',').map((p)=>parseFloat(p.trim()));
        if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            const val1 = parts[0];
            const val2 = parts[1];
            // CRITICAL: Split CAP coordinate (lat,lon) and reverse to [lon, lat] for MapLibre
            let lon;
            let lat;
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
            ring.push([
                lon,
                lat
            ]);
        }
    }
    // Ensure polygon is closed (first coord equals last coord)
    if (ring.length > 2) {
        const first = ring[0];
        const last = ring[ring.length - 1];
        if (first[0] !== last[0] || first[1] !== last[1]) {
            ring.push([
                first[0],
                first[1]
            ]);
        }
    }
    return ring;
}
function getSeverityColor(severity) {
    switch(severity){
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
function parseCapXml(xmlString) {
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
        alertNodes = Array.from(xmlDoc.querySelectorAll('*')).filter((el)=>el.localName === 'alert');
    }
    if (alertNodes.length === 0) {
        throw new Error('No <alert> elements found in CAP XML');
    }
    const alerts = [];
    for (const alertNode of alertNodes){
        const getChildText = (parent, tagName)=>{
            const el = Array.from(parent.children).find((c)=>c.localName === tagName);
            return el?.textContent?.trim() || '';
        };
        const identifier = getChildText(alertNode, 'identifier') || `NDMA-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const sender = getChildText(alertNode, 'sender') || 'ndma.gov.in';
        const sent = getChildText(alertNode, 'sent') || new Date().toISOString();
        const status = getChildText(alertNode, 'status') || 'Actual';
        const msgType = getChildText(alertNode, 'msgType') || 'Alert';
        const scope = getChildText(alertNode, 'scope') || 'Public';
        // Parse <info> blocks (take first or primary language info)
        const infoNodes = Array.from(alertNode.children).filter((c)=>c.localName === 'info');
        const infoNode = infoNodes[0] || alertNode;
        const event = getChildText(infoNode, 'event') || 'Disaster Alert';
        const category = getChildText(infoNode, 'category') || 'Met';
        const urgency = getChildText(infoNode, 'urgency') || 'Expected';
        const severity = getChildText(infoNode, 'severity') || 'Severe';
        const certainty = getChildText(infoNode, 'certainty') || 'Observed';
        const headline = getChildText(infoNode, 'headline') || event;
        const description = getChildText(infoNode, 'description') || '';
        const instruction = getChildText(infoNode, 'instruction') || '';
        const effective = getChildText(infoNode, 'effective') || sent;
        const expires = getChildText(infoNode, 'expires') || '';
        const senderName = getChildText(infoNode, 'senderName') || sender;
        // Parse <area> blocks
        const areaNodes = Array.from(infoNode.children).filter((c)=>c.localName === 'area');
        const areas = [];
        for (const areaNode of areaNodes){
            const areaDesc = getChildText(areaNode, 'areaDesc') || 'Affected Area';
            const capArea = {
                areaDesc
            };
            // Look for <polygon>
            const polygonNode = Array.from(areaNode.children).find((c)=>c.localName === 'polygon');
            if (polygonNode && polygonNode.textContent) {
                const ring = parseCapPolygon(polygonNode.textContent);
                if (ring.length >= 3) {
                    capArea.polygon = [
                        ring
                    ];
                }
            }
            // Look for <circle> (format: "lat,lon radius_km")
            const circleNode = Array.from(areaNode.children).find((c)=>c.localName === 'circle');
            if (circleNode && circleNode.textContent) {
                const parts = circleNode.textContent.trim().split(/\s+/);
                if (parts.length >= 2) {
                    const [latStr, lonStr] = parts[0].split(',');
                    const radiusKm = parseFloat(parts[1]);
                    const lat = parseFloat(latStr);
                    const lon = parseFloat(lonStr);
                    if (!isNaN(lat) && !isNaN(lon) && !isNaN(radiusKm)) {
                        capArea.circle = {
                            center: [
                                lon,
                                lat
                            ],
                            radiusKm
                        };
                        // Fallback polygon if no polygon specified
                        if (!capArea.polygon) {
                            capArea.polygon = [
                                circleToPolygon(lat, lon, radiusKm)
                            ];
                        }
                    }
                }
            }
            areas.push(capArea);
        }
        const info = {
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
function capAlertsToGeoJson(alerts) {
    const features = [];
    for (const alert of alerts){
        const { info, identifier, sender } = alert;
        const color = getSeverityColor(info.severity);
        for(let i = 0; i < info.areas.length; i++){
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
        features: features
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/indexedDB.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "offlineDB",
    ()=>offlineDB
]);
const DB_NAME = 'SanketDisasterDB';
const DB_VERSION = 2;
const STORE_SOS = 'sos_queue';
const STORE_CAP = 'cached_cap_alerts';
const STORE_PAYLOAD = 'latest_ndma_payload';
const STORE_MESH = 'offline_mesh_queue';
class OfflineIndexedDB {
    db = null;
    initPromise = null;
    async getDB() {
        if (this.db) return this.db;
        if (this.initPromise) return this.initPromise;
        this.initPromise = new Promise((resolve, reject)=>{
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                // Store for SOS emergency broadcasts
                if (!db.objectStoreNames.contains(STORE_SOS)) {
                    const sosStore = db.createObjectStore(STORE_SOS, {
                        keyPath: 'id'
                    });
                    sosStore.createIndex('syncStatus', 'syncStatus', {
                        unique: false
                    });
                    sosStore.createIndex('timestamp', 'timestamp', {
                        unique: false
                    });
                    sosStore.createIndex('priority', 'priority', {
                        unique: false
                    });
                }
                // Store for individual cached NDMA CAP feeds
                if (!db.objectStoreNames.contains(STORE_CAP)) {
                    const capStore = db.createObjectStore(STORE_CAP, {
                        keyPath: 'identifier'
                    });
                    capStore.createIndex('sent', 'sent', {
                        unique: false
                    });
                }
                // Store for the raw latest NDMA JSON payload
                if (!db.objectStoreNames.contains(STORE_PAYLOAD)) {
                    db.createObjectStore(STORE_PAYLOAD, {
                        keyPath: 'id'
                    });
                }
                // Store for offline mesh synchronization queue (outgoing data / location pings)
                if (!db.objectStoreNames.contains(STORE_MESH)) {
                    const meshStore = db.createObjectStore(STORE_MESH, {
                        keyPath: 'id'
                    });
                    meshStore.createIndex('syncStatus', 'syncStatus', {
                        unique: false
                    });
                    meshStore.createIndex('type', 'type', {
                        unique: false
                    });
                    meshStore.createIndex('timestamp', 'timestamp', {
                        unique: false
                    });
                }
            };
            request.onsuccess = ()=>{
                this.db = request.result;
                resolve(this.db);
            };
            request.onerror = ()=>{
                reject(request.error);
            };
        });
        return this.initPromise;
    }
    // --- SOS QUEUE OPERATIONS ---
    async addSos(sos) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readwrite');
            const store = tx.objectStore(STORE_SOS);
            const req = store.put(sos);
            req.onsuccess = ()=>resolve(sos.id);
            req.onerror = ()=>reject(req.error);
        });
    }
    async getAllSos() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readonly');
            const store = tx.objectStore(STORE_SOS);
            const req = store.getAll();
            req.onsuccess = ()=>{
                const results = req.result;
                // Sort descending by timestamp
                results.sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                resolve(results);
            };
            req.onerror = ()=>reject(req.error);
        });
    }
    async getPendingSos() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readonly');
            const store = tx.objectStore(STORE_SOS);
            const index = store.index('syncStatus');
            const req = index.getAll('pending_offline');
            req.onsuccess = ()=>resolve(req.result);
            req.onerror = ()=>reject(req.error);
        });
    }
    async updateSosStatus(id, status, ticketNumber) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readwrite');
            const store = tx.objectStore(STORE_SOS);
            const req = store.get(id);
            req.onsuccess = ()=>{
                const item = req.result;
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
                store.put(item).onsuccess = ()=>resolve();
            };
            req.onerror = ()=>reject(req.error);
        });
    }
    async deleteSos(id) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readwrite');
            const store = tx.objectStore(STORE_SOS);
            const req = store.delete(id);
            req.onsuccess = ()=>resolve();
            req.onerror = ()=>reject(req.error);
        });
    }
    async clearAllSos() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_SOS, 'readwrite');
            const store = tx.objectStore(STORE_SOS);
            const req = store.clear();
            req.onsuccess = ()=>resolve();
            req.onerror = ()=>reject(req.error);
        });
    }
    // --- CAP CACHING OPERATIONS ---
    async cacheCapAlerts(alerts) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_CAP, 'readwrite');
            const store = tx.objectStore(STORE_CAP);
            alerts.forEach((alert)=>store.put(alert));
            tx.oncomplete = ()=>resolve();
            tx.onerror = ()=>reject(tx.error);
        });
    }
    async getCachedCapAlerts() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_CAP, 'readonly');
            const store = tx.objectStore(STORE_CAP);
            const req = store.getAll();
            req.onsuccess = ()=>resolve(req.result);
            req.onerror = ()=>reject(req.error);
        });
    }
    // Store the entire raw latest NDMA JSON payload for full offline resilience
    async saveLatestNdmaPayload(payload) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_PAYLOAD, 'readwrite');
            const store = tx.objectStore(STORE_PAYLOAD);
            const record = {
                id: 'latest',
                savedAt: new Date().toISOString(),
                payload
            };
            const req = store.put(record);
            req.onsuccess = ()=>resolve();
            req.onerror = ()=>reject(req.error);
        });
    }
    // Retrieve the entire latest NDMA JSON payload from IndexedDB
    async getLatestNdmaPayload() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_PAYLOAD, 'readonly');
            const store = tx.objectStore(STORE_PAYLOAD);
            const req = store.get('latest');
            req.onsuccess = ()=>{
                if (req.result && req.result.payload) {
                    resolve(req.result.payload);
                } else {
                    resolve(null);
                }
            };
            req.onerror = ()=>reject(req.error);
        });
    }
    // --- OFFLINE MESH SYNCHRONIZATION QUEUE ---
    // Queue any outgoing data or location pings when offline
    async queueMeshPacket(packet) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_MESH, 'readwrite');
            const store = tx.objectStore(STORE_MESH);
            const req = store.put(packet);
            req.onsuccess = ()=>resolve(packet.id);
            req.onerror = ()=>reject(req.error);
        });
    }
    async getPendingMeshPackets() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_MESH, 'readonly');
            const store = tx.objectStore(STORE_MESH);
            const index = store.index('syncStatus');
            const req = index.getAll('pending_mesh');
            req.onsuccess = ()=>resolve(req.result);
            req.onerror = ()=>reject(req.error);
        });
    }
    async getAllMeshPackets() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_MESH, 'readonly');
            const store = tx.objectStore(STORE_MESH);
            const req = store.getAll();
            req.onsuccess = ()=>{
                const list = req.result;
                list.sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                resolve(list);
            };
            req.onerror = ()=>reject(req.error);
        });
    }
    async updateMeshPacketStatus(id, status) {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_MESH, 'readwrite');
            const store = tx.objectStore(STORE_MESH);
            const req = store.get(id);
            req.onsuccess = ()=>{
                const item = req.result;
                if (!item) return resolve();
                item.syncStatus = status;
                store.put(item).onsuccess = ()=>resolve();
            };
            req.onerror = ()=>reject(req.error);
        });
    }
    async clearSyncedMeshPackets() {
        const db = await this.getDB();
        return new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_MESH, 'readwrite');
            const store = tx.objectStore(STORE_MESH);
            const index = store.index('syncStatus');
            const req = index.openCursor(IDBKeyRange.only('synced_hq'));
            req.onsuccess = (event)=>{
                const cursor = event.target.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                } else {
                    resolve();
                }
            };
            req.onerror = ()=>reject(req.error);
        });
    }
}
const offlineDB = new OfflineIndexedDB();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/liveAlertsMapper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findCoordinatesForTitle",
    ()=>findCoordinatesForTitle,
    "inferAreaDescription",
    ()=>inferAreaDescription,
    "inferEventType",
    ()=>inferEventType,
    "inferSeverity",
    ()=>inferSeverity,
    "inferUrgency",
    ()=>inferUrgency,
    "mapLiveAlertsToCap",
    ()=>mapLiveAlertsToCap,
    "parseDistrictAndState",
    ()=>parseDistrictAndState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/capParser.ts [app-client] (ecmascript)");
;
// Comprehensive registry of Indian districts, regions, and states with coordinates [lat, lon]
const INDIA_LOCATIONS = {
    // Rajasthan Districts
    jaipur: [
        26.9124,
        75.7873
    ],
    jodhpur: [
        26.2389,
        73.0243
    ],
    bikaner: [
        28.0229,
        73.3119
    ],
    barmer: [
        25.7521,
        71.3967
    ],
    jaisalmer: [
        26.9157,
        70.9083
    ],
    udaipur: [
        24.5854,
        73.7125
    ],
    kota: [
        25.2138,
        75.8648
    ],
    ajmer: [
        26.4499,
        74.6399
    ],
    alwar: [
        27.5530,
        76.6346
    ],
    sikar: [
        27.6094,
        75.1398
    ],
    bharatpur: [
        27.2152,
        77.5030
    ],
    bhilwara: [
        25.3407,
        74.6313
    ],
    chittorgarh: [
        24.8887,
        74.6269
    ],
    churu: [
        28.2900,
        74.9600
    ],
    dholpur: [
        26.7025,
        77.8934
    ],
    dungarpur: [
        23.8432,
        73.7147
    ],
    hanumangarh: [
        29.5817,
        74.3294
    ],
    ganganagar: [
        29.9038,
        73.8772
    ],
    sriganganagar: [
        29.9038,
        73.8772
    ],
    jalore: [
        25.3444,
        72.6155
    ],
    jhalawar: [
        24.5973,
        76.1610
    ],
    jhunjhunu: [
        28.1289,
        75.3995
    ],
    karauli: [
        26.4950,
        77.0200
    ],
    nagaur: [
        27.2070,
        73.7423
    ],
    pali: [
        25.7713,
        73.3234
    ],
    pratapgarh: [
        24.0320,
        74.7813
    ],
    rajsamand: [
        25.0744,
        73.8820
    ],
    sawaimadhopur: [
        25.9928,
        76.3526
    ],
    sirohi: [
        24.8826,
        72.8589
    ],
    tonk: [
        26.1664,
        75.7885
    ],
    rajasthan: [
        27.0238,
        74.2179
    ],
    // West Bengal Districts
    kolkata: [
        22.5726,
        88.3639
    ],
    calcutta: [
        22.5726,
        88.3639
    ],
    howrah: [
        22.5958,
        88.2636
    ],
    malda: [
        25.0108,
        88.1411
    ],
    maldah: [
        25.0108,
        88.1411
    ],
    nadia: [
        23.4710,
        88.5565
    ],
    darjeeling: [
        27.0410,
        88.2663
    ],
    kalimpong: [
        27.0667,
        88.4667
    ],
    jalpaiguri: [
        26.5400,
        88.7200
    ],
    alipurduar: [
        26.4900,
        89.5300
    ],
    coochbehar: [
        26.3239,
        89.4510
    ],
    north24parganas: [
        22.7210,
        88.4815
    ],
    south24parganas: [
        22.1352,
        88.4016
    ],
    purba: [
        21.9497,
        87.7774
    ],
    purbamedinipur: [
        21.9497,
        87.7774
    ],
    paschimmedinipur: [
        22.4257,
        87.3199
    ],
    medinipur: [
        22.4257,
        87.3199
    ],
    midnapore: [
        22.4257,
        87.3199
    ],
    hooghly: [
        22.9031,
        88.3846
    ],
    bankura: [
        23.2324,
        87.0715
    ],
    purulia: [
        23.3321,
        86.3652
    ],
    birbhum: [
        23.8400,
        87.6200
    ],
    murshidabad: [
        24.1800,
        88.2700
    ],
    uttardinajpur: [
        25.6200,
        88.1200
    ],
    dakshindinajpur: [
        25.2200,
        88.7600
    ],
    dinajpur: [
        25.4200,
        88.4400
    ],
    westbengal: [
        22.9868,
        87.8550
    ],
    bengal: [
        22.9868,
        87.8550
    ],
    // Tamil Nadu
    kanniyakumari: [
        8.0883,
        77.5385
    ],
    kanyakumari: [
        8.0883,
        77.5385
    ],
    tirunelveli: [
        8.7139,
        77.7567
    ],
    thoothukudi: [
        8.7642,
        78.1348
    ],
    tuticorin: [
        8.7642,
        78.1348
    ],
    chennai: [
        13.0827,
        80.2707
    ],
    madurai: [
        9.9252,
        78.1198
    ],
    coimbatore: [
        11.0168,
        76.9558
    ],
    nilgiris: [
        11.4916,
        76.7337
    ],
    thanjavur: [
        10.7870,
        79.1378
    ],
    cuddalore: [
        11.7480,
        79.7714
    ],
    nagapattinam: [
        10.7672,
        79.8438
    ],
    ramanathapuram: [
        9.3639,
        78.8395
    ],
    vellore: [
        12.9165,
        79.1325
    ],
    salem: [
        11.6643,
        78.1460
    ],
    tiruchirappalli: [
        10.7905,
        78.7047
    ],
    trichy: [
        10.7905,
        78.7047
    ],
    dindigul: [
        10.3673,
        77.9803
    ],
    theni: [
        10.0104,
        77.4768
    ],
    // Jammu & Kashmir & Ladakh
    bandipora: [
        34.4224,
        74.6436
    ],
    kupwara: [
        34.5262,
        74.2546
    ],
    srinagar: [
        34.0837,
        74.7973
    ],
    baramulla: [
        34.2093,
        74.3436
    ],
    anantnag: [
        33.7311,
        75.1524
    ],
    ganderbal: [
        34.2165,
        74.7818
    ],
    budgam: [
        34.0150,
        74.7170
    ],
    pulwama: [
        33.8718,
        74.8955
    ],
    shopian: [
        33.7200,
        74.8300
    ],
    kulgam: [
        33.6400,
        75.0200
    ],
    doda: [
        33.1400,
        75.5400
    ],
    ramban: [
        33.2400,
        75.2400
    ],
    kishtwar: [
        33.3100,
        75.7600
    ],
    poonch: [
        33.7700,
        74.1000
    ],
    rajouri: [
        33.3800,
        74.3000
    ],
    jammu: [
        32.7266,
        74.8570
    ],
    udhampur: [
        32.9200,
        75.1300
    ],
    reasi: [
        33.0800,
        74.8300
    ],
    kathua: [
        32.3700,
        75.5200
    ],
    samba: [
        32.5600,
        75.1200
    ],
    leh: [
        34.1526,
        77.5771
    ],
    kargil: [
        34.5539,
        76.1349
    ],
    // Kerala
    wayanad: [
        11.6854,
        76.1320
    ],
    idukki: [
        9.8500,
        76.9700
    ],
    ernakulam: [
        9.9816,
        76.2999
    ],
    kochi: [
        9.9312,
        76.2673
    ],
    thiruvananthapuram: [
        8.5241,
        76.9366
    ],
    kozhikode: [
        11.2588,
        75.7804
    ],
    palakkad: [
        10.7867,
        76.6548
    ],
    alappuzha: [
        9.4981,
        76.3388
    ],
    kottayam: [
        9.5916,
        76.5222
    ],
    thrissur: [
        10.5276,
        76.2144
    ],
    malappuram: [
        11.0510,
        76.0711
    ],
    kannur: [
        11.8745,
        75.3704
    ],
    kasaragod: [
        12.5102,
        74.9852
    ],
    pathanamthitta: [
        9.2648,
        76.7870
    ],
    kollam: [
        8.8932,
        76.6141
    ],
    // Andhra Pradesh & Telangana
    visakhapatnam: [
        17.6868,
        83.2185
    ],
    vizag: [
        17.6868,
        83.2185
    ],
    srikakulam: [
        18.2949,
        83.8938
    ],
    vizianagaram: [
        18.1166,
        83.4116
    ],
    guntur: [
        16.3067,
        80.4365
    ],
    krishna: [
        16.1875,
        81.1389
    ],
    vijayawada: [
        16.5062,
        80.6480
    ],
    eastgodavari: [
        17.0000,
        82.0000
    ],
    westgodavari: [
        16.7000,
        81.3000
    ],
    kurnool: [
        15.8281,
        78.0373
    ],
    anantapur: [
        14.6819,
        77.6006
    ],
    chittoor: [
        13.2172,
        79.1003
    ],
    kadapa: [
        14.4673,
        78.8242
    ],
    nellore: [
        14.4426,
        79.9865
    ],
    hyderabad: [
        17.3850,
        78.4867
    ],
    warangal: [
        17.9689,
        79.5941
    ],
    karimnagar: [
        18.4386,
        79.1288
    ],
    khammam: [
        17.2473,
        80.1514
    ],
    nizamabad: [
        18.6725,
        78.0941
    ],
    // Odisha
    puri: [
        19.8135,
        85.8312
    ],
    ganjam: [
        19.3800,
        84.9900
    ],
    balasore: [
        21.4934,
        86.9135
    ],
    kendrapara: [
        20.5000,
        86.4200
    ],
    jagatsinghpur: [
        20.2600,
        86.1700
    ],
    cuttack: [
        20.4625,
        85.8830
    ],
    bhubaneswar: [
        20.2961,
        85.8245
    ],
    khordha: [
        20.1800,
        85.6200
    ],
    bhadrak: [
        21.0574,
        86.4950
    ],
    mayurbhanj: [
        21.9200,
        86.7200
    ],
    sambalpur: [
        21.4669,
        83.9812
    ],
    koraput: [
        18.8100,
        82.7100
    ],
    // Himachal Pradesh & Uttarakhand
    mandi: [
        31.7087,
        76.9318
    ],
    kullu: [
        31.9579,
        77.1095
    ],
    shimla: [
        31.1048,
        77.1734
    ],
    kangra: [
        32.0998,
        76.2691
    ],
    dharamshala: [
        32.2190,
        76.3234
    ],
    chamba: [
        32.5534,
        76.1258
    ],
    lahaul: [
        32.5700,
        77.0300
    ],
    spiti: [
        32.2461,
        78.0349
    ],
    kinnaur: [
        31.6500,
        78.4700
    ],
    solan: [
        30.9045,
        77.0967
    ],
    sirmaur: [
        30.5500,
        77.3000
    ],
    chamoli: [
        30.4227,
        79.3242
    ],
    uttarkashi: [
        30.7268,
        78.4354
    ],
    rudraprayag: [
        30.2844,
        78.9811
    ],
    tehri: [
        30.3800,
        78.4800
    ],
    dehradun: [
        30.3165,
        78.0322
    ],
    pauri: [
        30.1500,
        78.7800
    ],
    pithoragarh: [
        29.5800,
        80.2200
    ],
    bageshwar: [
        29.8400,
        79.7700
    ],
    almora: [
        29.5971,
        79.6591
    ],
    nainital: [
        29.3919,
        79.4542
    ],
    haridwar: [
        29.9457,
        78.1642
    ],
    // Assam & North-East
    kamrup: [
        26.1445,
        91.7362
    ],
    guwahati: [
        26.1445,
        91.7362
    ],
    majuli: [
        26.9500,
        94.2167
    ],
    dibrugarh: [
        27.4728,
        94.9120
    ],
    cachar: [
        24.8333,
        92.8000
    ],
    barpeta: [
        26.3219,
        91.0047
    ],
    nagaon: [
        26.3452,
        92.6840
    ],
    sonitpur: [
        26.6528,
        92.7926
    ],
    tezpur: [
        26.6528,
        92.7926
    ],
    golaghat: [
        26.5167,
        93.9667
    ],
    jorhat: [
        26.7509,
        94.2037
    ],
    shillong: [
        25.5788,
        91.8933
    ],
    meghalaya: [
        25.5788,
        91.8933
    ],
    imphal: [
        24.8170,
        93.9368
    ],
    manipur: [
        24.8170,
        93.9368
    ],
    aizawl: [
        23.7271,
        92.7176
    ],
    mizoram: [
        23.7271,
        92.7176
    ],
    agartala: [
        23.8315,
        91.2868
    ],
    tripura: [
        23.8315,
        91.2868
    ],
    kohima: [
        25.6751,
        94.1086
    ],
    nagaland: [
        25.6751,
        94.1086
    ],
    itanagar: [
        27.0844,
        93.6053
    ],
    arunachal: [
        27.0844,
        93.6053
    ],
    // Maharashtra & Goa
    mumbai: [
        19.0760,
        72.8777
    ],
    thane: [
        19.2183,
        72.9781
    ],
    palghar: [
        19.6967,
        72.7699
    ],
    raigad: [
        18.5158,
        73.1822
    ],
    ratnagiri: [
        16.9902,
        73.3120
    ],
    sindhudurg: [
        16.1167,
        73.7000
    ],
    pune: [
        18.5204,
        73.8567
    ],
    satara: [
        17.6805,
        73.9997
    ],
    kolhapur: [
        16.7050,
        74.2433
    ],
    nashik: [
        19.9975,
        73.7898
    ],
    nagpur: [
        21.1458,
        79.0882
    ],
    goa: [
        15.2993,
        74.1240
    ],
    panaji: [
        15.4909,
        73.8278
    ],
    // Gujarat
    kutch: [
        23.7337,
        69.8597
    ],
    bhuj: [
        23.2420,
        69.6669
    ],
    rajkot: [
        22.3039,
        70.8022
    ],
    jamnagar: [
        22.4707,
        70.0577
    ],
    porbandar: [
        21.6417,
        69.6293
    ],
    junagadh: [
        21.5222,
        70.4579
    ],
    amreli: [
        21.6032,
        71.2221
    ],
    bhavnagar: [
        21.7645,
        72.1519
    ],
    surat: [
        21.1702,
        72.8311
    ],
    valsad: [
        20.6100,
        72.9300
    ],
    navsari: [
        20.9500,
        72.9200
    ],
    ahmedabad: [
        23.0225,
        72.5714
    ],
    // West Bengal
    sundarbans: [
        21.9000,
        88.5000
    ],
    purba_medinipur: [
        21.9500,
        87.7500
    ],
    paschim_medinipur: [
        22.4200,
        87.3200
    ],
    digha: [
        21.6266,
        87.5074
    ],
    // Delhi & NCR, Punjab, Haryana, UP, Bihar
    delhi: [
        28.6139,
        77.2090
    ],
    newdelhi: [
        28.6139,
        77.2090
    ],
    noida: [
        28.5355,
        77.3910
    ],
    gurugram: [
        28.4595,
        77.0266
    ],
    gurgaon: [
        28.4595,
        77.0266
    ],
    chandigarh: [
        30.7333,
        76.7794
    ],
    amritsar: [
        31.6340,
        74.8723
    ],
    ludhiana: [
        30.9010,
        75.8573
    ],
    patna: [
        25.5941,
        85.1376
    ],
    gaya: [
        24.7914,
        85.0002
    ],
    muzaffarpur: [
        26.1209,
        85.3647
    ],
    bhagalpur: [
        25.2425,
        86.9842
    ],
    lucknow: [
        26.8467,
        80.9462
    ],
    varanasi: [
        25.3176,
        82.9739
    ],
    gorakhpur: [
        26.7606,
        83.3732
    ],
    prayagraj: [
        25.4358,
        81.8463
    ],
    allahabad: [
        25.4358,
        81.8463
    ],
    kanpur: [
        26.4499,
        80.3319
    ],
    agra: [
        27.1767,
        78.0081
    ],
    meerut: [
        28.9845,
        77.7064
    ],
    // Karnataka & States
    bengaluru: [
        12.9716,
        77.5946
    ],
    bangalore: [
        12.9716,
        77.5946
    ],
    mangaluru: [
        12.9141,
        74.8560
    ],
    mangalore: [
        12.9141,
        74.8560
    ],
    udupi: [
        13.3409,
        74.7421
    ],
    uttarakannada: [
        14.8000,
        74.4000
    ],
    kodagu: [
        12.4244,
        75.7382
    ],
    coorg: [
        12.4244,
        75.7382
    ],
    mysuru: [
        12.2958,
        76.6394
    ],
    mysore: [
        12.2958,
        76.6394
    ],
    // Andaman & Nicobar Islands (Indian Ocean / Bay of Bengal)
    andaman: [
        11.6234,
        92.7265
    ],
    nicobar: [
        9.1500,
        92.7500
    ],
    carnicobar: [
        9.1500,
        92.7500
    ],
    portblair: [
        11.6234,
        92.7265
    ],
    diglipur: [
        13.2667,
        92.9833
    ],
    mayabunder: [
        12.9333,
        92.9000
    ],
    rangat: [
        12.5000,
        92.9333
    ],
    havelock: [
        11.9800,
        92.9800
    ],
    neilisland: [
        11.8333,
        93.0500
    ],
    campbellbay: [
        7.0000,
        93.9167
    ],
    greatnicobar: [
        7.0000,
        93.9167
    ],
    // Lakshadweep Islands (Arabian Sea)
    lakshadweep: [
        10.5667,
        72.6417
    ],
    kavaratti: [
        10.5667,
        72.6417
    ],
    agatti: [
        10.8500,
        72.1833
    ],
    minicoy: [
        8.2833,
        73.0500
    ],
    amini: [
        11.1200,
        72.7300
    ],
    andrott: [
        10.8200,
        73.6700
    ],
    kalpeni: [
        10.0800,
        73.6500
    ],
    // Other UTs
    daman: [
        20.3974,
        72.8328
    ],
    diu: [
        20.7144,
        70.9874
    ],
    dadra: [
        20.1809,
        73.0169
    ],
    silvassa: [
        20.2763,
        73.0083
    ],
    puducherry: [
        11.9416,
        79.8083
    ],
    pondicherry: [
        11.9416,
        79.8083
    ],
    karaikal: [
        10.9254,
        79.8380
    ],
    mahe: [
        11.7000,
        75.5300
    ],
    yanam: [
        16.7300,
        82.2100
    ]
};
// State Fallbacks
const STATE_FALLBACKS = {
    andaman: [
        11.6234,
        92.7265
    ],
    andamanandnicobar: [
        11.6234,
        92.7265
    ],
    andamanandnicobarislands: [
        11.6234,
        92.7265
    ],
    nicobar: [
        9.1500,
        92.7500
    ],
    lakshadweep: [
        10.5667,
        72.6417
    ],
    puducherry: [
        11.9416,
        79.8083
    ],
    pondicherry: [
        11.9416,
        79.8083
    ],
    chandigarh: [
        30.7333,
        76.7794
    ],
    daman: [
        20.3974,
        72.8328
    ],
    dadra: [
        20.1809,
        73.0169
    ],
    tamilnadu: [
        11.1271,
        78.6569
    ],
    kerala: [
        10.8505,
        76.2711
    ],
    andhrapradesh: [
        15.9129,
        79.7400
    ],
    telangana: [
        18.1124,
        79.0193
    ],
    odisha: [
        20.9517,
        85.0985
    ],
    orissa: [
        20.9517,
        85.0985
    ],
    karnataka: [
        15.3173,
        75.7139
    ],
    maharashtra: [
        19.7515,
        75.7139
    ],
    gujarat: [
        22.2587,
        71.1924
    ],
    rajasthan: [
        27.0238,
        74.2179
    ],
    himachalpradesh: [
        31.7433,
        77.1202
    ],
    himachal: [
        31.7433,
        77.1202
    ],
    uttarakhand: [
        30.0668,
        79.0193
    ],
    jammu: [
        33.7782,
        76.5762
    ],
    kashmir: [
        34.0837,
        74.7973
    ],
    ladakh: [
        34.1526,
        77.5771
    ],
    assam: [
        26.2006,
        92.9376
    ],
    westbengal: [
        22.9868,
        87.8550
    ],
    bengal: [
        22.9868,
        87.8550
    ],
    bihar: [
        25.0961,
        85.3131
    ],
    uttarpradesh: [
        26.8467,
        80.9462
    ],
    delhi: [
        28.7041,
        77.1025
    ],
    punjab: [
        31.1471,
        75.3412
    ],
    haryana: [
        29.0588,
        76.0856
    ],
    madhyapradesh: [
        22.9734,
        78.6569
    ],
    chhattisgarh: [
        21.2787,
        81.8661
    ],
    jharkhand: [
        23.6102,
        85.2799
    ],
    goa: [
        15.2993,
        74.1240
    ]
};
function inferEventType(title, description = '') {
    const t = `${title} ${description}`.toLowerCase();
    if (t.includes('forest fire') || t.includes('fire') || t.includes('wildfire') || t.includes('bushfire') || t.includes('fsi') || t.includes('van agni')) {
        return 'Forest Fire Warning';
    }
    if (t.includes('cyclone') || t.includes('cyclonic') || t.includes('depression') || t.includes('deep depression')) {
        return 'Cyclonic Storm / Depression Alert';
    }
    if (t.includes('landslide') || t.includes('mudslide') || t.includes('debris flow') || t.includes('rockfall') || t.includes('slope collapse')) {
        return 'Landslide & Slope Collapse';
    }
    if (t.includes('earthquake') || t.includes('tremor') || t.includes('seismic') || t.includes('quake')) {
        return 'Earthquake / Seismic Alert';
    }
    if (t.includes('avalanche')) return 'Avalanche Warning';
    if (t.includes('lightning') || t.includes('thunderstorm') || t.includes('పిడుగులు') || t.includes('ఉరుములు') || t.includes('ఇంద్ర')) {
        return 'Lightning & Severe Thunderstorm';
    }
    if (t.includes('heavy rain') || t.includes('very heavy rain') || t.includes('downpour')) return 'Heavy Rainfall Alert';
    if (t.includes('flood') || t.includes('inundation') || t.includes('waterlogging')) return 'Flash Flood Warning';
    if (t.includes('heat wave') || t.includes('heatwave') || t.includes('loo')) return 'Severe Heat Wave Advisory';
    if (t.includes('cold wave') || t.includes('coldwave') || t.includes('frost')) return 'Severe Cold Wave Alert';
    if (t.includes('dense fog') || t.includes('fog')) return 'Dense Fog Visibility Hazard';
    if (t.includes('squall') || t.includes('gale') || t.includes('high wind') || t.includes('gusty')) return 'Gale / High Wind Hazard';
    if (t.includes('sea') || t.includes('surge') || t.includes('tide') || t.includes('coastal')) return 'Coastal Storm Surge';
    return 'NDMA Disaster Alert';
}
function inferSeverity(title) {
    const t = title.toLowerCase();
    if (t.includes('red alert') || t.includes('very heavy') || t.includes('extreme') || t.includes('high danger') || t.includes('severe cyclonic')) {
        return 'Extreme';
    }
    if (t.includes('orange alert') || t.includes('heavy rain') || t.includes('medium danger') || t.includes('severe') || t.includes('avalanche') || t.includes('flash flood')) {
        return 'Severe';
    }
    if (t.includes('yellow alert') || t.includes('light to moderate') || t.includes('low danger') || t.includes('thunderstorm') || t.includes('lightning') || t.includes('isolated')) {
        return 'Moderate';
    }
    return 'Moderate';
}
function inferUrgency(title) {
    const t = title.toLowerCase();
    if (t.includes('next 3 hours') || t.includes('next 2 hours') || t.includes('immediate') || t.includes('nowcast')) {
        return 'Immediate';
    }
    if (t.includes('next 24 hours') || t.includes('next 12 hours') || t.includes('expected')) {
        return 'Expected';
    }
    return 'Expected';
}
function inferAreaDescription(title) {
    // Regex to match "over <districts> in next" or "over <districts> during"
    const overMatch = title.match(/over\s+([^,.\n]+(?:,\s*[^,.\n]+)*)\s+(?:in|during|for|from)/i);
    if (overMatch && overMatch[1]) {
        return overMatch[1].trim();
    }
    const isolatedMatch = title.match(/at\s+isolated\s+places\s+over\s+([^,.\n]+)/i);
    if (isolatedMatch && isolatedMatch[1]) {
        return isolatedMatch[1].trim();
    }
    return 'Indian Subcontinent Sector';
}
function parseDistrictAndState(areaDesc = '', geocodes) {
    let district = '';
    let state = '';
    // 1. Inspect geocodes if provided
    if (geocodes) {
        const geoList = Array.isArray(geocodes) ? geocodes : [
            geocodes
        ];
        for (const g of geoList){
            if (!g || typeof g !== 'object') continue;
            const vName = String(g?.valueName ?? g?.['cap:valueName'] ?? '').toLowerCase();
            const val = String(g?.value ?? g?.['cap:value'] ?? '').trim();
            if (vName.includes('state') && val && !state) state = val;
            if (vName.includes('district') && val && !district) district = val;
        }
    }
    // 2. Parse from areaDesc string (e.g., "Kullu, Mandi, Aut (Himachal Pradesh)" or "South Andaman (Andaman and Nicobar Islands)")
    const cleanArea = areaDesc.trim();
    const parenMatch = cleanArea.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    if (parenMatch) {
        if (!district) district = parenMatch[1].trim();
        if (!state) state = parenMatch[2].trim();
    } else {
        const parts = cleanArea.split(',').map((p)=>p.trim()).filter(Boolean);
        if (parts.length > 1) {
            if (!state) state = parts[parts.length - 1];
            if (!district) district = parts.slice(0, -1).join(', ');
        } else if (cleanArea) {
            if (!district) district = cleanArea;
        }
    }
    // 3. Construct clean 'District, State/UT' label
    let locationLabel = '';
    if (district && state && district.toLowerCase() !== state.toLowerCase()) {
        locationLabel = `${district}, ${state}`;
    } else if (district) {
        locationLabel = district;
    } else if (state) {
        locationLabel = state;
    } else {
        locationLabel = 'India (Multi-Region)';
    }
    return {
        district,
        state,
        locationLabel
    };
}
function findCoordinatesForTitle(title, index = 0) {
    const normalized = title.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words = normalized.split(/\s+/);
    // 1. Direct district match
    for (const [key, coords] of Object.entries(INDIA_LOCATIONS)){
        if (normalized.includes(key)) {
            // Add slight jitter so overlapping alerts in same district don't cover each other exactly
            const jitterLat = (index % 5 - 2) * 0.08;
            const jitterLon = (index * 3 % 5 - 2) * 0.08;
            return [
                coords[0] + jitterLat,
                coords[1] + jitterLon
            ];
        }
    }
    // 2. State fallback match
    for (const [key, coords] of Object.entries(STATE_FALLBACKS)){
        if (normalized.includes(key)) {
            const jitterLat = (index % 7 - 3) * 0.25;
            const jitterLon = (index * 2 % 7 - 3) * 0.25;
            return [
                coords[0] + jitterLat,
                coords[1] + jitterLon
            ];
        }
    }
    // 3. Fallback spread across Indian subcontinent
    const defaultCenters = [
        [
            13.0827,
            80.2707
        ],
        [
            19.0760,
            72.8777
        ],
        [
            26.1445,
            91.7362
        ],
        [
            31.1048,
            77.1734
        ],
        [
            20.2961,
            85.8245
        ],
        [
            23.0225,
            72.5714
        ],
        [
            26.9124,
            75.7873
        ],
        [
            28.6139,
            77.2090
        ] // NCR
    ];
    const center = defaultCenters[index % defaultCenters.length];
    return [
        center[0] + Math.sin(index) * 0.4,
        center[1] + Math.cos(index) * 0.4
    ];
}
function mapLiveAlertsToCap(rawAlerts) {
    return rawAlerts.map((item, index)=>{
        // Extract identifier from link or create consistent unique ID
        let identifier = `NDMA-LIVE-${index + 1}`;
        if (item.link) {
            const idMatch = item.link.match(/identifier=([^&]+)/i);
            if (idMatch && idMatch[1]) {
                identifier = `NDMA-${idMatch[1]}`;
            }
        }
        let event = item.event || inferEventType(item.title, item.description || '');
        // Fix FSI Event Tags: explicitly check for 'Pre Fire' and re-map to 'Forest Fire'
        if (event.toLowerCase().includes('pre fire') || event.toLowerCase().includes('pre-fire') || event.toLowerCase() === 'pre fire') {
            event = 'Forest Fire';
        }
        const severity = inferSeverity(item.title);
        const urgency = inferUrgency(item.title);
        const areaDesc = inferAreaDescription(item.title);
        // Spatial coordinates binding strictly from the exact alert item
        let areas = [];
        // 0. If item contains pre-parsed independent areas from API
        if (item.areas && Array.isArray(item.areas) && item.areas.length > 0) {
            areas = item.areas.map((ar)=>{
                let poly = undefined;
                let circ = undefined;
                if (ar.coordinates) {
                    if (Array.isArray(ar.coordinates) && ar.coordinates.length > 0) {
                        if (Array.isArray(ar.coordinates[0])) {
                            poly = [
                                ar.coordinates
                            ];
                            const sumLon = ar.coordinates.reduce((s, c)=>s + c[0], 0) / ar.coordinates.length;
                            const sumLat = ar.coordinates.reduce((s, c)=>s + c[1], 0) / ar.coordinates.length;
                            circ = {
                                center: [
                                    sumLon,
                                    sumLat
                                ],
                                radiusKm: 30
                            };
                        }
                    } else if (ar.coordinates.center) {
                        const circObj = ar.coordinates;
                        circ = circObj;
                        poly = [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleToPolygon"])(circObj.center[1], circObj.center[0], circObj.radiusKm, 32)
                        ];
                    }
                } else if (ar.polygon) {
                    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCapPolygon"])(ar.polygon);
                    if (ring && ring.length >= 3) {
                        poly = [
                            ring
                        ];
                        const sumLon = ring.reduce((s, c)=>s + c[0], 0) / ring.length;
                        const sumLat = ring.reduce((s, c)=>s + c[1], 0) / ring.length;
                        circ = {
                            center: [
                                sumLon,
                                sumLat
                            ],
                            radiusKm: 30
                        };
                    }
                } else if (ar.circle) {
                    const parts = ar.circle.trim().split(/[\s,]+/);
                    if (parts.length >= 2) {
                        const v1 = parseFloat(parts[0]);
                        const v2 = parseFloat(parts[1]);
                        const radiusKm = parts.length >= 3 ? parseFloat(parts[2]) : 30;
                        if (!isNaN(v1) && !isNaN(v2)) {
                            let lon = v2;
                            let lat = v1;
                            if (v1 >= 65 && v2 < 45) {
                                lon = v1;
                                lat = v2;
                            }
                            circ = {
                                center: [
                                    lon,
                                    lat
                                ],
                                radiusKm: isNaN(radiusKm) ? 30 : radiusKm
                            };
                            poly = [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleToPolygon"])(lat, lon, circ.radiusKm, 32)
                            ];
                        }
                    }
                }
                return {
                    areaDesc: ar.areaDesc || areaDesc,
                    polygon: poly,
                    circle: circ,
                    district: ar.district,
                    state: ar.state,
                    locationLabel: ar.locationLabel || ar.areaDesc || areaDesc
                };
            }).filter((a)=>a.polygon || a.circle);
        }
        // 1. If alert contains exact spatial polygon, use it directly
        if (areas.length === 0 && item.polygon) {
            const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCapPolygon"])(item.polygon);
            if (ring && ring.length >= 3) {
                const sumLat = ring.reduce((s, c)=>s + c[1], 0) / ring.length;
                const sumLon = ring.reduce((s, c)=>s + c[0], 0) / ring.length;
                areas = [
                    {
                        areaDesc: item.areaDesc || areaDesc,
                        polygon: [
                            ring
                        ],
                        circle: {
                            center: [
                                sumLon,
                                sumLat
                            ],
                            radiusKm: 30
                        },
                        district: item.district,
                        state: item.state,
                        locationLabel: item.locationLabel || item.areaDesc || areaDesc
                    }
                ];
            }
        } else if (areas.length === 0 && item.coordinates && Array.isArray(item.coordinates)) {
            if (item.coordinates.length > 0 && Array.isArray(item.coordinates[0])) {
                // Linear ring coordinates [[lon, lat], ...]
                const ring = item.coordinates;
                const sumLat = ring.reduce((s, c)=>s + c[1], 0) / ring.length;
                const sumLon = ring.reduce((s, c)=>s + c[0], 0) / ring.length;
                areas = [
                    {
                        areaDesc: item.areaDesc || areaDesc,
                        polygon: [
                            ring
                        ],
                        circle: {
                            center: [
                                sumLon,
                                sumLat
                            ],
                            radiusKm: 30
                        },
                        district: item.district,
                        state: item.state,
                        locationLabel: item.locationLabel || item.areaDesc || areaDesc
                    }
                ];
            } else if (item.coordinates.length === 2 && typeof item.coordinates[0] === 'number') {
                let [val1, val2] = item.coordinates;
                let lon = val1;
                let lat = val2;
                if (val1 < 45 && val2 >= 65) {
                    lat = val1;
                    lon = val2;
                }
                const radiusKm = severity === 'Extreme' ? 45 : severity === 'Severe' ? 35 : 25;
                areas = [
                    {
                        areaDesc: item.areaDesc || areaDesc,
                        polygon: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleToPolygon"])(lat, lon, radiusKm, 32)
                        ],
                        circle: {
                            center: [
                                lon,
                                lat
                            ],
                            radiusKm
                        },
                        district: item.district,
                        state: item.state,
                        locationLabel: item.locationLabel || item.areaDesc || areaDesc
                    }
                ];
            }
        } else if (areas.length === 0 && item.circle) {
            const parts = item.circle.trim().split(/[\s,]+/);
            if (parts.length >= 2) {
                const v1 = parseFloat(parts[0]);
                const v2 = parseFloat(parts[1]);
                const radiusKm = parts.length >= 3 ? parseFloat(parts[2]) : 30;
                if (!isNaN(v1) && !isNaN(v2)) {
                    let lon = v2;
                    let lat = v1;
                    if (v1 >= 65 && v2 < 45) {
                        lon = v1;
                        lat = v2;
                    }
                    areas = [
                        {
                            areaDesc: item.areaDesc || areaDesc,
                            polygon: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleToPolygon"])(lat, lon, isNaN(radiusKm) ? 30 : radiusKm, 32)
                            ],
                            circle: {
                                center: [
                                    lon,
                                    lat
                                ],
                                radiusKm: isNaN(radiusKm) ? 30 : radiusKm
                            },
                            district: item.district,
                            state: item.state,
                            locationLabel: item.locationLabel || item.areaDesc || areaDesc
                        }
                    ];
                }
            }
        }
        // 2. Fallback: Lookup coordinates using THIS exact alert's English text
        if (areas.length === 0) {
            const [lat, lon] = findCoordinatesForTitle(item.title, index);
            const radiusKm = severity === 'Extreme' ? 45 : severity === 'Severe' ? 35 : 25;
            const polygonRing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$capParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleToPolygon"])(lat, lon, radiusKm, 32);
            areas = [
                {
                    areaDesc: item.areaDesc || areaDesc,
                    polygon: [
                        polygonRing
                    ],
                    circle: {
                        center: [
                            lon,
                            lat
                        ],
                        radiusKm
                    },
                    district: item.district,
                    state: item.state,
                    locationLabel: item.locationLabel || item.areaDesc || areaDesc
                }
            ];
        }
        const effective = item.effective || (item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString());
        const expires = item.expires || new Date(new Date(effective).getTime() + 6 * 3600 * 1000).toISOString();
        const titleAndDesc = `${item.title} ${item.description || ''}`.toLowerCase();
        // Preserve and prioritize authentic agency attribution (FSI, DGRE, CWC, IMD, SDMAs)
        let agencyName = item.senderName || item.sender;
        if (!agencyName) {
            if (titleAndDesc.includes('fsi') || titleAndDesc.includes('forest survey') || titleAndDesc.includes('van agni') || titleAndDesc.includes('forest fire') || titleAndDesc.includes('fire')) {
                agencyName = 'Forest Survey of India (FSI)';
            } else if (titleAndDesc.includes('dgre') || titleAndDesc.includes('sase') || titleAndDesc.includes('defence geoinformatics') || titleAndDesc.includes('avalanche') || titleAndDesc.includes('landslide')) {
                agencyName = 'Defence Geoinformatics Research Establishment (DGRE/DRDO)';
            } else if (titleAndDesc.includes('cwc') || titleAndDesc.includes('central water')) {
                agencyName = 'Central Water Commission (CWC)';
            } else if (titleAndDesc.includes('imd') || titleAndDesc.includes('cyclone') || titleAndDesc.includes('meteorological')) {
                agencyName = 'India Meteorological Department (IMD)';
            } else {
                agencyName = 'National Disaster Management Authority (SACHET)';
            }
        }
        // Contextual safety directives
        let instruction = 'Stay in safe reinforced structures. Follow instructions issued by local district disaster management authorities.';
        if (titleAndDesc.includes('fire') || titleAndDesc.includes('forest fire')) {
            instruction = 'Forest fire warning issued by Forest Survey of India (FSI). Maintain firebreaks, evacuate downwind forest zones, and avoid entering dry canopy areas.';
        } else if (titleAndDesc.includes('cyclone') || titleAndDesc.includes('depression')) {
            instruction = 'Total suspension of coastal and marine activities. Relocate to cyclone shelters immediately. Secure loose outdoor property and stay indoors away from glass.';
        } else if (titleAndDesc.includes('landslide') || titleAndDesc.includes('mudslide')) {
            instruction = 'Landslide threat high (DGRE/GSI). Avoid hill cuts, steep slopes, and swollen river ravines. Relocate immediately to stable geological terrain.';
        } else if (titleAndDesc.includes('earthquake') || titleAndDesc.includes('tremor')) {
            instruction = 'Drop, Cover, and Hold On. Move away from glass, facades, and power poles. Evacuate calmly to open clear ground once shaking ceases.';
        } else if (titleAndDesc.includes('avalanche')) {
            instruction = 'Avalanche warning issued by DGRE. Do not venture into avalanche-prone slopes above designated altitude.';
        } else if (item.title.includes('ఆశ్రయం')) {
            instruction = 'తీవ్ర ఉరుములు మెరుపులతో కూడిన వర్షం పడేప్పుడు చెట్లు, టవర్స్, స్తంభాలు కింద ఉండరాదు. సురక్షితమైన భవనాల్లో ఆశ్రయం పొందండి.';
        }
        const category = titleAndDesc.includes('fire') || titleAndDesc.includes('forest fire') ? 'Fire' : titleAndDesc.includes('landslide') || titleAndDesc.includes('earthquake') || titleAndDesc.includes('avalanche') ? 'Geo' : 'Met';
        return {
            identifier,
            sender: agencyName,
            sent: effective,
            status: 'Actual',
            msgType: 'Alert',
            scope: 'Public',
            info: {
                category,
                event,
                urgency,
                severity,
                certainty: 'Observed',
                headline: item.title,
                description: item.description || item.title,
                instruction,
                effective,
                expires,
                senderName: agencyName,
                web: item.link,
                areas
            }
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/soundBeacon.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "soundBeacon",
    ()=>soundBeacon
]);
// Audio synthesizer for International Morse Code SOS Distress Beacon: ... --- ...
class SoundBeaconService {
    audioCtx = null;
    isPlaying = false;
    loopTimeout = null;
    initAudio() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContextClass();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }
    // Play a single tone at frequency (Hz) for duration (ms)
    playTone(freq, durationMs) {
        return new Promise((resolve)=>{
            if (!this.audioCtx || !this.isPlaying) {
                return resolve();
            }
            try {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'square'; // Piercing buzzer tone
                osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
                // Anti-click attack and decay envelope
                gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.4, this.audioCtx.currentTime + 0.02);
                gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime + durationMs / 1000 - 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + durationMs / 1000);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start();
                osc.stop(this.audioCtx.currentTime + durationMs / 1000);
                setTimeout(resolve, durationMs);
            } catch (err) {
                console.error('Audio synthesis error:', err);
                resolve();
            }
        });
    }
    sleep(ms) {
        return new Promise((r)=>setTimeout(r, ms));
    }
    // Plays one SOS sequence: 3 dots (120ms), 3 dashes (360ms), 3 dots (120ms)
    async playSosSequence(onPulse) {
        const dotDuration = 140;
        const dashDuration = 380;
        const symbolGap = 100;
        const letterGap = 280;
        const freq = 880; // High piercing pitch (A5)
        const doPulse = async (duration)=>{
            if (!this.isPlaying) return;
            onPulse?.(true);
            await this.playTone(freq, duration);
            onPulse?.(false);
            await this.sleep(symbolGap);
        };
        // S: ...
        for(let i = 0; i < 3 && this.isPlaying; i++){
            await doPulse(dotDuration);
        }
        await this.sleep(letterGap);
        // O: ---
        for(let i = 0; i < 3 && this.isPlaying; i++){
            await doPulse(dashDuration);
        }
        await this.sleep(letterGap);
        // S: ...
        for(let i = 0; i < 3 && this.isPlaying; i++){
            await doPulse(dotDuration);
        }
    }
    start(onPulse) {
        this.initAudio();
        this.isPlaying = true;
        const runLoop = async ()=>{
            while(this.isPlaying){
                await this.playSosSequence(onPulse);
                if (this.isPlaying) {
                    // 1.5s pause between repeated SOS distress bursts
                    await this.sleep(1500);
                }
            }
        };
        runLoop();
    }
    stop() {
        this.isPlaying = false;
        if (this.loopTimeout) {
            clearTimeout(this.loopTimeout);
            this.loopTimeout = null;
        }
    }
    getIsActive() {
        return this.isPlaying;
    }
}
const soundBeacon = new SoundBeaconService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/syncService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sosSyncService",
    ()=>sosSyncService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/indexedDB.ts [app-client] (ecmascript)");
;
class SosSyncService {
    isSyncing = false;
    listeners = [];
    lastSyncTime = null;
    constructor(){
        if ("TURBOPACK compile-time truthy", 1) {
            window.addEventListener('online', ()=>{
                this.notify();
                // Auto-sync when coming back online
                this.syncPendingQueue();
                this.syncPendingMeshQueue();
            });
            window.addEventListener('offline', ()=>{
                this.notify();
            });
        }
    }
    isOnline() {
        return typeof navigator !== 'undefined' ? navigator.onLine : true;
    }
    subscribe(callback) {
        this.listeners.push(callback);
        callback({
            isOnline: this.isOnline(),
            isSyncing: this.isSyncing,
            syncedCount: 0,
            failedCount: 0,
            lastSyncTime: this.lastSyncTime
        });
        return ()=>{
            this.listeners = this.listeners.filter((l)=>l !== callback);
        };
    }
    notify(synced = 0, failed = 0) {
        this.listeners.forEach((callback)=>{
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
    async transmitSos(sos) {
        // In production, this targets: fetch('/api/v1/sos/broadcast', { method: 'POST', body: JSON.stringify(sos) })
        // We simulate real network latency with graceful retry simulation
        await new Promise((resolve)=>setTimeout(resolve, 600));
        // Generate authentic Indian Disaster Response Ticket ID
        const randomTicket = `NDRF-${sos.emergencyType.toUpperCase().slice(0, 3)}-${Math.floor(100000 + Math.random() * 900000)}`;
        return randomTicket;
    }
    async syncPendingQueue() {
        if (this.isSyncing) return {
            synced: 0,
            failed: 0
        };
        if (!this.isOnline()) {
            return {
                synced: 0,
                failed: 0
            };
        }
        this.isSyncing = true;
        this.notify();
        let syncedCount = 0;
        let failedCount = 0;
        try {
            const pendingList = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getPendingSos();
            for (const item of pendingList){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateSosStatus(item.id, 'transmitting');
                    const ticket = await this.transmitSos(item);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateSosStatus(item.id, 'synced_hq', ticket);
                    syncedCount++;
                } catch (err) {
                    console.error(`Failed to sync SOS ID ${item.id}:`, err);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateSosStatus(item.id, 'failed');
                    failedCount++;
                }
            }
            this.lastSyncTime = new Date();
        } finally{
            this.isSyncing = false;
            this.notify(syncedCount, failedCount);
        }
        return {
            synced: syncedCount,
            failed: failedCount
        };
    }
    // Offline Mesh Synchronization: Queue outgoing data or location pings
    async queueLocationPing(lat, lng, accuracy, batteryLevel) {
        const packet = {
            id: `ping-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            type: 'location_ping',
            timestamp: new Date().toISOString(),
            payload: {
                latitude: lat,
                longitude: lng,
                accuracy: accuracy || 10,
                batteryLevel: batteryLevel ?? null
            },
            syncStatus: 'pending_mesh',
            hopCount: 0
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].queueMeshPacket(packet);
        if (this.isOnline()) {
            this.syncPendingMeshQueue().catch(()=>{});
        }
        return packet.id;
    }
    async queueOutgoingData(type, payload) {
        const packet = {
            id: `mesh-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            type,
            timestamp: new Date().toISOString(),
            payload,
            syncStatus: 'pending_mesh',
            hopCount: 0
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].queueMeshPacket(packet);
        if (this.isOnline()) {
            this.syncPendingMeshQueue().catch(()=>{});
        }
        return packet.id;
    }
    async syncPendingMeshQueue() {
        if (!this.isOnline()) return {
            synced: 0,
            failed: 0
        };
        let synced = 0;
        let failed = 0;
        try {
            const pending = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].getPendingMeshPackets();
            for (const packet of pending){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateMeshPacketStatus(packet.id, 'transmitting');
                    // Simulate transmission to mesh network or regional command hub
                    await new Promise((r)=>setTimeout(r, 150));
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateMeshPacketStatus(packet.id, 'synced_hq');
                    synced++;
                } catch  {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$indexedDB$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offlineDB"].updateMeshPacketStatus(packet.id, 'failed');
                    failed++;
                }
            }
        } catch (e) {
            console.warn('Mesh sync failed:', e);
        }
        return {
            synced,
            failed
        };
    }
    // Generate 112 Emergency SMS text format (compact, critical metadata only for 2G/satellite)
    formatSosForSms(sos) {
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
    exportQueueAsJson(queue) {
        return JSON.stringify({
            exportedAt: new Date().toISOString(),
            system: 'SANकेत India Disaster Response',
            totalRecords: queue.length,
            records: queue
        }, null, 2);
    }
    // Export queue as CSV for incident commander spreadsheet
    exportQueueAsCsv(queue) {
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
        const rows = queue.map((item)=>[
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
        return [
            headers.join(','),
            ...rows.map((r)=>r.join(','))
        ].join('\n');
    }
}
const sosSyncService = new SosSyncService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/voiceAdvisoryService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "voiceAdvisoryService",
    ()=>voiceAdvisoryService
]);
class VoiceAdvisoryService {
    synth = null;
    currentUtterance = null;
    listeners = new Set();
    state = {
        isSpeaking: false,
        currentAlertIndex: 0,
        totalAlerts: 0,
        stateName: ''
    };
    constructor(){
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'speechSynthesis' in window) {
            this.synth = window.speechSynthesis;
            // Preload browser speech voices
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = ()=>{
                    this.getVoices();
                };
            }
        }
    }
    notify() {
        this.listeners.forEach((listener)=>listener({
                ...this.state
            }));
    }
    subscribe(listener) {
        this.listeners.add(listener);
        listener({
            ...this.state
        });
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    getState() {
        return {
            ...this.state
        };
    }
    getVoices() {
        if (!this.synth) return [];
        return this.synth.getVoices();
    }
    pickVoice(lang) {
        const voices = this.getVoices();
        if (lang === 'hi') {
            const hiVoice = voices.find((v)=>v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi'));
            if (hiVoice) return hiVoice;
        }
        // English Indian or standard English voice
        const enInVoice = voices.find((v)=>v.lang === 'en-IN' || v.name.toLowerCase().includes('india'));
        if (enInVoice) return enInVoice;
        const enVoice = voices.find((v)=>v.lang.startsWith('en'));
        return enVoice || voices[0] || null;
    }
    /**
   * Broadcasts a multi-lingual spoken voice advisory for the selected state and active alerts
   */ speakAlerts(stateName, alerts, lang = 'en') {
        if (!this.synth) {
            console.warn('SpeechSynthesis is not supported in this browser.');
            return;
        }
        // Stop any existing speech synthesis
        this.stop();
        if (!alerts || alerts.length === 0) {
            const noAlertsMsg = lang === 'hi' ? `वर्तमान में ${stateName} के लिए कोई सक्रिय आपदा चेतावनी नहीं है। स्थिति सामान्य है।` : `Currently there are no active disaster alerts for ${stateName}. Region status is normal.`;
            const utterance = new SpeechSynthesisUtterance(noAlertsMsg);
            const voice = this.pickVoice(lang);
            if (voice) utterance.voice = voice;
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            this.synth.speak(utterance);
            return;
        }
        // Construct structured, clear emergency voice broadcast message
        let broadcastText = '';
        if (lang === 'hi') {
            broadcastText = `सावधान। ${stateName} के लिए राष्ट्रीय आपदा प्रबंधन प्राधिकरण आपातकालीन चेतावनी प्रसारण। कुल ${alerts.length} सक्रिय चेतावनियां हैं। `;
            alerts.slice(0, 3).forEach((a, idx)=>{
                broadcastText += `चेतावनी नंबर ${idx + 1}: ${a.info.event}। ${a.info.headline}। `;
                if (a.info.instruction) {
                    broadcastText += `सार्वजनिक निर्देश: ${a.info.instruction}। `;
                }
            });
            broadcastText += `सुरक्षित स्थानों पर रहें और स्थानीय प्रशासन के निर्देशों का पालन करें।`;
        } else {
            broadcastText = `Attention. National Disaster Management Emergency Broadcast for ${stateName}. There are ${alerts.length} active warning${alerts.length > 1 ? 's' : ''}. `;
            alerts.slice(0, 3).forEach((a, idx)=>{
                broadcastText += `Warning ${idx + 1}: ${a.info.event}. ${a.info.headline}. `;
                if (a.info.instruction) {
                    broadcastText += `Directive: ${a.info.instruction}. `;
                }
            });
            broadcastText += `Stay in reinforced shelters and follow emergency advisories.`;
        }
        const utterance = new SpeechSynthesisUtterance(broadcastText);
        const voice = this.pickVoice(lang);
        if (voice) utterance.voice = voice;
        utterance.rate = 0.95; // Slightly slower for emergency broadcast clarity
        utterance.pitch = 1.05;
        this.currentUtterance = utterance;
        this.state = {
            isSpeaking: true,
            currentAlertIndex: 1,
            totalAlerts: alerts.length,
            stateName
        };
        this.notify();
        utterance.onend = ()=>{
            this.state.isSpeaking = false;
            this.notify();
        };
        utterance.onerror = (e)=>{
            console.warn('Voice advisory playback error:', e);
            this.state.isSpeaking = false;
            this.notify();
        };
        this.synth.speak(utterance);
    }
    stop() {
        if (this.synth) {
            this.synth.cancel();
        }
        this.state.isSpeaking = false;
        this.notify();
    }
}
const voiceAdvisoryService = new VoiceAdvisoryService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0o0k8_muqjrud._.js.map
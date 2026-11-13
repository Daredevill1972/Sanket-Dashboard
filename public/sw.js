// SANकेत Offline-First Disaster Response Service Worker
// Version 2.0 - Military/NDMA Tier Resilient Caching

const SHELL_CACHE_NAME = 'sanket-app-shell-v2';
const MAP_CACHE_NAME = 'sanket-map-tiles-v2';
const DATA_CACHE_NAME = 'sanket-data-cache-v2';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/shield-alert.svg',
  'https://unpkg.com/maplibre-gl@5.1.0/dist/maplibre-gl.css',
  'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
];

// 1. INSTALL: Precache core shell assets and administrative vector map specification
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const shellCache = await caches.open(SHELL_CACHE_NAME);
      try {
        await shellCache.addAll(PRECACHE_ASSETS);
      } catch (err) {
        console.warn('[ServiceWorker] Some pre-cache assets failed to load:', err);
      }
      await self.skipWaiting();
    })()
  );
});

// 2. ACTIVATE: Purge stale legacy caches and claim active clients immediately
self.addEventListener('activate', (event) => {
  const currentCaches = [SHELL_CACHE_NAME, MAP_CACHE_NAME, DATA_CACHE_NAME];
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!currentCaches.includes(key)) {
            console.log('[ServiceWorker] Removing obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

// 3. FETCH: Robust Offline Routing & Specialized Caching Strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // A. MAP TILES & ASSETS: Carto Positron vector tiles (.pbf), glyphs, sprites, and Esri tiles
  const isMapResource =
    url.hostname.includes('cartocdn.com') ||
    url.hostname.includes('arcgisonline.com') ||
    url.pathname.endsWith('.pbf') ||
    url.pathname.endsWith('.mvt') ||
    url.pathname.includes('/sprites/') ||
    url.pathname.includes('/fonts/') ||
    url.pathname.includes('/glyphs/') ||
    url.pathname.includes('/MapServer/tile/');

  if (isMapResource) {
    event.respondWith(
      (async () => {
        const mapCache = await caches.open(MAP_CACHE_NAME);
        const cached = await mapCache.match(request);

        if (cached) {
          // Serve from cache immediately; refresh in background if online
          fetch(request)
            .then((res) => {
              if (res && res.status === 200) {
                mapCache.put(request, res);
              }
            })
            .catch(() => {});
          return cached;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            mapCache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          // If offline and request is Carto Positron style json, return root style
          if (url.pathname.includes('positron-gl-style')) {
            const shellCache = await caches.open(SHELL_CACHE_NAME);
            const styleFallback = await shellCache.match('https://basemaps.cartocdn.com/gl/positron-gl-style/style.json');
            if (styleFallback) return styleFallback;
          }
          return new Response(null, { status: 504, statusText: 'Offline Map Tile Unavailable' });
        }
      })()
    );
    return;
  }

  // B. LIVE NDMA ALERTS API (/api/alerts): Network-First with Cached Payload Fallback
  if (url.pathname.startsWith('/api/alerts')) {
    event.respondWith(
      (async () => {
        const dataCache = await caches.open(DATA_CACHE_NAME);
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            dataCache.put('/api/alerts', networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          console.warn('[ServiceWorker] /api/alerts offline, serving cached payload:', err);
          const cachedResponse = await dataCache.match('/api/alerts');
          if (cachedResponse) {
            return cachedResponse;
          }
          return new Response(JSON.stringify({
            status: 'offline_cached_fallback',
            timestamp: new Date().toISOString(),
            alerts: []
          }), {
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })()
    );
    return;
  }

  // C. CORE APPLICATION SHELL & STATIC ASSETS: Stale-While-Revalidate
  event.respondWith(
    (async () => {
      const shellCache = await caches.open(SHELL_CACHE_NAME);
      const cached = await shellCache.match(request);

      // Stale-While-Revalidate: Return cached response immediately while revalidating
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            shellCache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(async () => {
          // If offline and navigation request (HTML), serve index.html
          if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
            return (await shellCache.match('/index.html')) || (await shellCache.match('/'));
          }
          return null;
        });

      return cached || (await fetchPromise);
    })()
  );
});

// 4. BACKGROUND SYNC EVENT (Web Background Sync API)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-ndma-alerts') {
    event.waitUntil(
      fetch('/api/alerts?sync=background')
        .then((res) => res.json())
        .then((data) => {
          console.log('[ServiceWorker] Background sync refreshed NDMA alerts:', data?.alerts?.length);
        })
        .catch((err) => console.warn('[ServiceWorker] Background sync failed:', err))
    );
  }
});

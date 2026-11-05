# RAKSHAK (रक्षक) — Offline-First Disaster Response Dashboard for India

An offline-first, high-resilience national disaster response and emergency management platform tailored for India. Built with **MapLibre GL**, **NDMA Common Alerting Protocol (CAP) Feed Ingestion**, and an **IndexedDB-backed Offline SOS Broadcast Queue**.

---

## 🌟 Key Architecture & Capabilities

### 1. Geospatial Hazard Mapping (MapLibre GL + GeoJSON)
- **NDMA Hazard Polygons**: Renders dynamic hazard zones for severe cyclonic storms, riverine flooding, landslides, cloudbursts, heatwaves, and tidal surges with glowing choropleths.
- **Severity-Coded Styling**:
  - 🔴 **Red Alert (Extreme)**: High-risk disaster impact zones (e.g. Cyclone landfall zones, river breach areas)
  - 🟠 **Orange Alert (Severe)**: High probability hazardous conditions (e.g. active landslide corridors)
  - 🟡 **Yellow Alert (Moderate)**: Warning/advisory zones (e.g. urban waterlogging, astronomical tides)
- **100% Offline Vector Basemap**: Embeds a zero-network India boundary and regional GeoJSON layer. Even if cell towers and internet cables fail, MapLibre GL continues to render full tactical maps without failing raster tile requests.
- **Relief Infrastructure Overlays**: Interactive markers for multi-purpose cyclone shelters, flood relief camps, SDRF staging depots, and medical units.

### 2. NDMA CAP (Common Alerting Protocol) Feed Ingestion
- **OASIS CAP v1.1 & v1.2 Standard**: Conforms to the NDMA SACHET (Common Alerting Protocol - India Profile) XML specifications.
- **Polygon & Circle Conversion**: Translates CAP `<polygon>` coordinate pairs (`lat,lon lat,lon`) and CAP `<circle>` tags (`lat,lon radius_km`) into standard GeoJSON `[longitude, latitude]` linear rings and 36-point polygons.
- **Flexible Ingestion Options**:
  - Ingest live RSS/CAP feeds via URL with automatic CORS fallback
  - Direct file upload (`.xml`, `.cap`, `.json`)
  - Direct raw XML paste & syntax validation preview
  - One-click loading of authentic Indian hazard scenarios (Cyclone *Varuna*, Brahmaputra Floods, Himachal Mandi Landslides, Thar Heatwave, Mumbai Spring Surge)

### 3. Offline-First SOS Broadcast Queue (IndexedDB)
- **Local Persistence**: Stores citizen distress signals in browser **IndexedDB** (`RakshakDisasterDB` -> `sos_queue`) when offline.
- **Emergency Classification**: Trapped in rubble, severe water rise/flood, urgent medical trauma, rescue boat needed, lack of potable water, infants/elderly/pregnant distress.
- **GPS Location Capture**: High-accuracy device GPS acquisition with one-click interactive map-pin fallback.
- **Auto-Sync on Reconnection**: Actively listens to `window.ononline` and automatically transmits queued SOS records to the central disaster response server when connectivity resumes.
- **112 Emergency SMS Format**: Formats distress packets into compact 112 emergency text messages for low-bandwidth 2G cellular or satellite phone dispatch.
- **Disaster Manifest Export**: Export queued records to JSON or CSV for drone, Bluetooth, or SD card transmission to NDRF Incident Commanders.

### 4. Tactical Distress Beacon
- **Morse Code Acoustic Synthesizer**: Uses Web Audio API to emit 880Hz piercing square-wave pulses for international SOS (`... --- ...`) to cut through storm noise and rubble.
- **Screen Torch / Visual Strobe**: Synchronized high-contrast strobe for signaling search aircraft or relief boats at night.

### 5. Offline Emergency Directory & Survival SOPs
- **Pre-cached Shelter Directory**: Multi-purpose cyclone shelters across Odisha, Andhra Pradesh, Assam, Himachal Pradesh, Maharashtra, and Rajasthan with capacity gauges and amenities filters.
- **Emergency Hotlines**: One-tap dialing for National Emergency Number (112), NDMA Helpline (1078), NDRF Control Room (011-24363260), State Emergency Operations Centre (1070), Ambulance (108), and Coast Guard (1554).
- **Survival SOP Checklists**: Official NDMA-approved step-by-step checklists (Before, During, After, Do's & Don'ts) for Cyclones, Floods, Earthquakes, and Landslides.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository and navigate into directory
cd disastermanagement

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Geospatial Engine**: MapLibre GL JS
- **Styling**: Tailwind CSS
- **Local Database**: IndexedDB (Native W3C API)
- **Audio Synthesis**: Web Audio API
- **Icons**: Lucide React
- **PWA**: Service Worker caching (`/sw.js`) and Web App Manifest (`/manifest.json`)

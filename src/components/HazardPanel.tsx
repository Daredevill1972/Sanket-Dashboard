import React, { useState } from 'react';
import { CapAlert, AlertSeverity } from '../types/cap';
import { StateFilter, extractStateFromAreaDesc } from './StateFilter';
import { parseDistrictAndState } from '../services/liveAlertsMapper';
import {
  AlertTriangle,
  Flame,
  Droplets,
  Sun,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Radio,
  FileCode2,
  RefreshCw,
  ExternalLink,
  Zap,
  CloudLightning,
  CloudHail,
  Waves,
  Snowflake,
  Mountain,
  CheckCircle2,
  Wifi,
  WifiOff
} from 'lucide-react';

interface HazardPanelProps {
  alerts: CapAlert[];
  selectedAlertId: string | null;
  onSelectAlert: (id: string | null) => void;
  onOpenIngestModal: () => void;
  onRefreshFeeds: () => void;
  isRefreshing?: boolean;
  lastFetchedTime?: Date | null;
  selectedState?: string | null;
  onSelectState?: (stateName: string | null, bbox: [number, number, number, number] | null) => void;
  currentLang?: 'en' | 'hi';
  isOffline?: boolean;
}

export type TemporalStatus = 'OVER' | 'UPCOMING' | 'ONGOING';

export interface TemporalResult {
  status: TemporalStatus;
  label: 'Over' | 'Upcoming' | 'Ongoing';
  boxClass: string;
  badgeClass: string;
  dotColor: string;
  dividerClass: string;
  detailsBg: string;
}

export type HazardCategoryKey =
  | 'fire'
  | 'cyclone'
  | 'earthquake'
  | 'rainfall'
  | 'thunderstorm'
  | 'hailstorm'
  | 'flood'
  | 'drought'
  | 'heatwave'
  | 'lightning'
  | 'snowfall'
  | 'avalanche'
  | 'landslide'
  | 'other';

// Rotating Hurricane icon for Cyclones & Depressions
export const RotatingHurricaneIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-sky-600' }) => (
  <svg
    className={`${className} animate-spin`}
    style={{ animationDuration: '3.5s' }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.5a9.5 9.5 0 0 0-9.1 12.4l1.8-.7A7.5 7.5 0 0 1 12 4.5V2.5z" fill="currentColor" />
    <path d="M12 21.5a9.5 9.5 0 0 0 9.1-12.4l-1.8.7A7.5 7.5 0 0 1 12 19.5v2z" fill="currentColor" />
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
  </svg>
);

// Falling Rocks / Mountain icon for Landslides & Mudslides
export const FallingRocksMountainIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-amber-700' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m2 20 7-14 4 7 3-3 6 10H2z" />
    <path d="M15 11l-1 2" strokeDasharray="1 1" />
    <circle cx="18" cy="14" r="1.3" fill="currentColor" />
    <circle cx="15" cy="17" r="1.1" fill="currentColor" />
    <circle cx="19" cy="18" r="0.9" fill="currentColor" />
  </svg>
);

// Mountain with downward arrow / sliding snow for Avalanches (DGRE / DRDO)
export const MountainSnowSlideIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-sky-400' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m2 20 7-14 4 7 3-3 6 10H2z" />
    <path d="M14 9l3 3m0 0l3-3m-3 3V6" strokeWidth="2.2" stroke="#38bdf8" />
    <circle cx="6" cy="18" r="1.2" fill="currentColor" />
    <circle cx="9" cy="17" r="1.2" fill="currentColor" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);

// Cracked earth pattern for Drought
export const CrackedEarthIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-amber-700' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v6l-3 4 5 3-2 5" />
    <path d="M9 13l-5 1 2 4" />
    <path d="M14 16l6-1-1 3" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

// Cracked earth / Seismic wave icon for Earthquakes & Tremors
export const SeismicEarthquakeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-red-600' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12h4l2-6 3 11 3-8 2 4h6" />
    <path d="M5 19c3.5-1.5 10.5-1.5 14 0" strokeDasharray="2 1.5" />
    <path d="M8 21.5c2.5-.8 5.5-.8 8 0" strokeDasharray="2 1.5" />
  </svg>
);

// Categorizes alert by searching title, description, and event for specific keywords
export function getHazardCategory(
  title: string = '',
  description: string = '',
  event: string = ''
): HazardCategoryKey {
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
  if (
    combined.includes('forest fire') ||
    combined.includes('fire') ||
    combined.includes('wildfire') ||
    combined.includes('bushfire') ||
    combined.includes('fsi') ||
    combined.includes('van agni')
  ) {
    return 'fire';
  }

  // 4. Cyclone / Depression
  if (
    combined.includes('cyclone') ||
    combined.includes('depression') ||
    combined.includes('cyclonic') ||
    combined.includes('storm surge') ||
    combined.includes('gale') ||
    combined.includes('squall')
  ) {
    return 'cyclone';
  }

  // 5. Earthquake / Tremor
  if (
    combined.includes('earthquake') ||
    combined.includes('tremor') ||
    combined.includes('seismic') ||
    combined.includes('quake') ||
    combined.includes('aftershock')
  ) {
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
  if (
    combined.includes('landslide') ||
    combined.includes('mudslide') ||
    combined.includes('debris flow') ||
    combined.includes('rockfall') ||
    combined.includes('slope collapse')
  ) {
    return 'landslide';
  }

  return 'other';
}

// Returns matching hazard icon component for sidebar badge
export function getHazardIcon(category: HazardCategoryKey, className: string = 'w-4 h-4'): React.ReactNode {
  switch (category) {
    case 'fire':
      return <Flame className={`${className} text-orange-500 animate-pulse`} />;
    case 'cyclone':
      return <RotatingHurricaneIcon className={`${className} text-sky-400`} />;
    case 'earthquake':
      return <SeismicEarthquakeIcon className={`${className} text-red-500`} />;
    case 'rainfall':
      return <Droplets className={`${className} text-blue-400`} />;
    case 'thunderstorm':
      return <CloudLightning className={`${className} text-amber-300 animate-pulse`} />;
    case 'hailstorm':
      return <CloudHail className={`${className} text-cyan-200`} />;
    case 'flood':
      return <Waves className={`${className} text-blue-500`} />;
    case 'drought':
      return <CrackedEarthIcon className={`${className} text-amber-700`} />;
    case 'heatwave':
      return <Sun className={`${className} text-amber-500`} />;
    case 'lightning':
      return <Zap className={`${className} text-yellow-400 animate-pulse`} />;
    case 'snowfall':
      return <Snowflake className={`${className} text-sky-200`} />;
    case 'avalanche':
      return <MountainSnowSlideIcon className={`${className} text-sky-300`} />;
    case 'landslide':
      return <FallingRocksMountainIcon className={`${className} text-amber-600`} />;
    default:
      return <AlertTriangle className={`${className} text-amber-400`} />;
  }
}

// Compares effective and expires dates to Date.now() to compute temporal status and styles
export function getTemporalStatus(
  effectiveStr?: string,
  expiresStr?: string,
  fallbackSent?: string
): TemporalResult {
  const now = Date.now();
  const effTime = effectiveStr
    ? new Date(effectiveStr).getTime()
    : fallbackSent
    ? new Date(fallbackSent).getTime()
    : now;
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

// Formats pubDate/sent into human-readable format: 'Nov 13, 2026 - 2:30 PM'
export function formatReadableDate(dateInput: string | Date | undefined): string {
  if (!dateInput) return 'N/A';
  try {
    const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(d.getTime())) return String(dateInput);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
  } catch {
    return String(dateInput);
  }
}

export const HazardPanel: React.FC<HazardPanelProps> = ({
  alerts,
  selectedAlertId,
  onSelectAlert,
  onOpenIngestModal,
  onRefreshFeeds,
  isRefreshing = false,
  lastFetchedTime,
  selectedState = null,
  onSelectState,
  currentLang = 'en',
  isOffline = false
}) => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Upcoming' | 'Over'>('All');
  const [hazardFilter, setHazardFilter] = useState<
    | 'All'
    | 'Fire'
    | 'Cyclone'
    | 'Avalanche'
    | 'Snowfall'
    | 'Earthquake'
    | 'Rainfall'
    | 'Thunderstorm'
    | 'Hailstorm'
    | 'Flood'
    | 'Drought'
    | 'Heatwave'
    | 'Lightning'
    | 'Landslide'
  >('All');
  const [severityFilter, setSeverityFilter] = useState<'All' | AlertSeverity>('All');
  const [expandedAlerts, setExpandedAlerts] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedAlerts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Hazard counts (considering active state filter if selected)
  const stateScopedAlerts = selectedState
    ? alerts.filter((a) => {
        const areaDescs = a.info.areas.map((ar) => ar.areaDesc).join(' ');
        return extractStateFromAreaDesc(areaDescs, a.info.headline, a.info.description) === selectedState;
      })
    : alerts;

  const countForCategory = (cat: HazardCategoryKey) =>
    stateScopedAlerts.filter((a) => getHazardCategory(a.info.headline, a.info.description, a.info.event) === cat).length;

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

  const filteredAlerts = alerts.filter((alert) => {
    // 1. State filter
    if (selectedState) {
      const areaDescs = alert.info.areas.map((a) => a.areaDesc).join(' ');
      const matchedState = extractStateFromAreaDesc(areaDescs, alert.info.headline, alert.info.description);
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
  const renderHazardBadgeIcon = (event: string, headline: string, description: string = '') => {
    const category = getHazardCategory(headline, description, event);
    return getHazardIcon(category, 'w-4 h-4');
  };

  const getSeverityBadge = (severity: AlertSeverity) => {
    switch (severity) {
      case 'Extreme':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs">
            Red Alert
          </span>
        );
      case 'Severe':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-600 text-white shadow-xs">
            Orange Alert
          </span>
        );
      case 'Moderate':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white shadow-xs">
            Yellow Alert
          </span>
        );
      default:
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
            Advisory
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0f1d] border-r border-slate-800 text-slate-100">
      {/* Header bar */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/60 backdrop-blur flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {/* Unified Brand Logo & Typography Block */}
          <div className="flex items-center gap-3">
            <img
              src="/image_10.png"
              alt="SANकेत Logo"
              className="h-10 w-auto object-contain select-none drop-shadow-md shrink-0"
            />
            <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-md flex items-center leading-none font-sans select-none">
              <span>SAN</span>
              <span className="text-red-500 font-devanagari">केत</span>
            </h1>
          </div>

          {/* Feed Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={onRefreshFeeds}
              disabled={isRefreshing}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
              title="Poll /api/alerts now"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
            <button
              onClick={onOpenIngestModal}
              className="px-2 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 rounded text-xs font-semibold flex items-center gap-1 transition"
            >
              <FileCode2 className="w-3.5 h-3.5" /> Ingest
            </button>
          </div>
        </div>

        {/* Status indicator row under branding block */}
        <div className="flex items-center justify-between text-xs px-0.5 pt-0.5 border-t border-slate-800/60">
          <div className="flex items-center gap-1.5">
            {!isOffline ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <Wifi className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span>ONLINE (HQ SYNC ACTIVE)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 border border-slate-600 text-slate-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                <WifiOff className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                <span>OFFLINE - CACHED DATA</span>
              </span>
            )}
          </div>
          <p className="text-[10px] text-slate-400 font-mono truncate">
            {lastFetchedTime ? (
              <span>Synced: {formatReadableDate(lastFetchedTime)}</span>
            ) : (
              <span>Fetching live alerts...</span>
            )}
          </p>
        </div>
      </div>

      {/* State-Wise Search Dropdown & Broadcast Voice Advisory */}
      {onSelectState && (
        <StateFilter
          alerts={alerts}
          selectedState={selectedState || null}
          onSelectState={onSelectState}
          filteredAlertsCount={filteredAlerts.length}
          currentLang={currentLang}
        />
      )}

      {/* Explicit Hazard Category Filter Bar (10-Tier + Snowfall & Avalanche) */}
      <div className="p-2 border-b border-slate-800/80 bg-slate-950/70 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-thin">
        <span className="text-[10px] font-bold uppercase text-slate-400 mr-0.5 shrink-0">Hazard:</span>
        {[
          { key: 'All', label: 'All', count: stateScopedAlerts.length, icon: null },
          { key: 'Fire', label: 'Fires', count: fireCount, icon: <Flame className="w-3 h-3 text-orange-500 animate-pulse" /> },
          { key: 'Cyclone', label: 'Cyclones', count: cycloneCount, icon: <RotatingHurricaneIcon className="w-3 h-3 text-sky-400" /> },
          { key: 'Avalanche', label: 'Avalanches', count: avalancheCount, icon: <MountainSnowSlideIcon className="w-3 h-3 text-sky-300" /> },
          { key: 'Snowfall', label: 'Snow', count: snowfallCount, icon: <Snowflake className="w-3 h-3 text-sky-200" /> },
          { key: 'Earthquake', label: 'Quakes', count: earthquakeCount, icon: <SeismicEarthquakeIcon className="w-3 h-3 text-red-400" /> },
          { key: 'Rainfall', label: 'Rain', count: rainfallCount, icon: <Droplets className="w-3 h-3 text-blue-400" /> },
          { key: 'Thunderstorm', label: 'Storms', count: thunderstormCount, icon: <CloudLightning className="w-3 h-3 text-amber-300" /> },
          { key: 'Hailstorm', label: 'Hail', count: hailstormCount, icon: <CloudHail className="w-3 h-3 text-cyan-200" /> },
          { key: 'Flood', label: 'Floods', count: floodCount, icon: <Waves className="w-3 h-3 text-blue-500" /> },
          { key: 'Drought', label: 'Drought', count: droughtCount, icon: <CrackedEarthIcon className="w-3 h-3 text-amber-700" /> },
          { key: 'Heatwave', label: 'Heat', count: heatwaveCount, icon: <Sun className="w-3 h-3 text-amber-500" /> },
          { key: 'Lightning', label: 'Lightning', count: lightningCount, icon: <Zap className="w-3 h-3 text-yellow-400" /> },
          { key: 'Landslide', label: 'Landslides', count: landslideCount, icon: <FallingRocksMountainIcon className="w-3 h-3 text-amber-600" /> },
        ].map((item) => {
          const isActive = hazardFilter === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setHazardFilter(item.key as typeof hazardFilter)}
              className={`px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                isActive
                  ? 'bg-cyan-950/90 text-cyan-200 border border-cyan-500 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              <span className="px-1 rounded-full text-[9px] bg-slate-800 text-slate-300 font-mono">
                {item.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Temporal Status Filter Tabs (Categorization) */}
      <div className="p-2 border-b border-slate-800 bg-slate-950/60 flex items-center gap-1 overflow-x-auto text-[11px]">
        <span className="text-[10px] font-bold uppercase text-slate-400 mr-1 shrink-0">Status:</span>
        {(['All', 'Ongoing', 'Upcoming', 'Over'] as const).map((st) => {
          const count =
            st === 'All'
              ? alerts.length
              : alerts.filter(
                  (a) => getTemporalStatus(a.info.effective, a.info.expires, a.sent).label === st
                ).length;

          const isActive = statusFilter === st;
          const dotColor =
            st === 'Ongoing'
              ? 'bg-green-500'
              : st === 'Upcoming'
              ? 'bg-yellow-500'
              : st === 'Over'
              ? 'bg-red-500'
              : 'bg-slate-400';

          return (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2 py-1 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive
                  ? 'bg-slate-800 text-white border border-slate-600 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {st !== 'All' && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
              <span>{st}</span>
              <span className="px-1 rounded-full text-[9px] bg-slate-700/60 text-slate-300 font-mono">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Severity Filter Tabs */}
      <div className="px-2 py-1.5 border-b border-slate-800/80 bg-slate-950/40 flex items-center gap-1 overflow-x-auto text-[11px]">
        <span className="text-[10px] font-bold uppercase text-slate-400 mr-1 shrink-0">Severity:</span>
        {(['All', 'Extreme', 'Severe', 'Moderate'] as const).map((sev) => {
          const count =
            sev === 'All'
              ? alerts.length
              : alerts.filter((a) => a.info.severity === sev).length;
          return (
            <button
              key={sev}
              onClick={() => setSeverityFilter(sev)}
              className={`px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                severityFilter === sev
                  ? 'bg-slate-800 text-white border border-slate-600'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>{sev}</span>
              <span className="px-1 rounded-full text-[9px] bg-slate-700/60 text-slate-300 font-mono">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Alert List (Click-to-Pan & Temporal Color-Coded) */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
        {isRefreshing && alerts.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs flex flex-col items-center gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-cyan-400" />
            <span>Connecting to live NDMA feed...</span>
          </div>
        ) : filteredAlerts.length === 0 ? (
          selectedState ? (
            <div className="p-8 text-center text-slate-400 text-xs flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <p className="font-semibold text-slate-200">No Active Warnings in {selectedState}</p>
              <p className="text-[11px] text-slate-400">Map has centered on the territory bounds. All systems normal.</p>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              No active alerts matching current filters.
            </div>
          )
        ) : (
          filteredAlerts.map((alert) => {
            const isSelected = selectedAlertId?.startsWith(alert.identifier) || selectedAlertId === alert.identifier;
            const isExpanded = expandedAlerts[alert.identifier];
            const { info } = alert;

            // Compute temporal status and color-coded styles
            const temporal = getTemporalStatus(info.effective, info.expires, alert.sent);

            // Compute clean 'District, State/UT' location subheader
            const area0 = info.areas[0];
            const districtStateSubheader =
              area0?.locationLabel ||
              (area0?.district && area0?.state ? `${area0.district}, ${area0.state}` : null) ||
              parseDistrictAndState(info.areas.map((a) => a.areaDesc).join('; ')).locationLabel;

            return (
              <div
                key={alert.identifier}
                className={`rounded-xl border transition-all duration-200 overflow-hidden cursor-pointer ${temporal.boxClass} ${
                  isSelected
                    ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-[#0a0f1d] shadow-lg scale-[1.01]'
                    : 'hover:shadow-md'
                }`}
                onClick={() => onSelectAlert(alert.identifier)}
              >
                {/* Header card */}
                <div className="p-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      {renderHazardBadgeIcon(info.event, info.headline, info.description)}
                      <span className="text-xs font-bold text-current line-clamp-1">
                        {info.event}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Temporal Status Badge: 'Over' | 'Upcoming' | 'Ongoing' */}
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border shadow-xs flex items-center gap-1 ${temporal.badgeClass}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${temporal.dotColor} ${
                            temporal.status === 'ONGOING' ? 'animate-pulse' : ''
                          }`}
                        />
                        {temporal.label}
                      </span>
                      {getSeverityBadge(info.severity)}
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-current mb-1.5 leading-snug">
                    {info.headline}
                  </h3>

                  {/* Clean District & State/UT Subheader */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-current opacity-95 mb-1.5 px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 border border-current/20 shadow-xs">
                    <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                    <span className="font-bold tracking-tight truncate">
                      {districtStateSubheader}
                    </span>
                  </div>

                  <div className="flex items-start gap-1 text-[11px] font-medium opacity-85 mb-2">
                    <span className="line-clamp-2">
                      {info.areas.map((a) => a.areaDesc).join('; ') || 'India Region'}
                    </span>
                  </div>

                  {/* Temporal Timestamps (Effective / PubDate & Expires) */}
                  <div className={`flex flex-col gap-1 text-[10px] pt-1.5 border-t ${temporal.dividerClass}`}>
                    <div className="flex items-center justify-between font-mono font-semibold">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-current" />
                        <span>Effective: {formatReadableDate(info.effective || alert.sent)}</span>
                      </span>
                      <span className="font-mono text-[9px] opacity-70 truncate max-w-[100px]">
                        {alert.identifier}
                      </span>
                    </div>
                    {info.expires && (
                      <div className="flex items-center justify-between font-mono text-[9px] opacity-85 pl-4">
                        <span>Expires: {formatReadableDate(info.expires)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Collapsible Action Details */}
                <div className={`border-t ${temporal.dividerClass} bg-black/5 px-3 py-1.5 flex items-center justify-between`}>
                  <span className="text-[10px] font-bold text-current flex items-center gap-1">
                    🎯 Click to Pan & Inspect
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(alert.identifier);
                    }}
                    className="text-[10px] font-bold text-current hover:underline flex items-center gap-1 py-0.5"
                  >
                    {isExpanded ? 'Hide Details' : 'Full Advisory'}
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className={`p-3 ${temporal.detailsBg} text-xs border-t ${temporal.dividerClass} space-y-2`}>
                    {info.description && (
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5 text-current opacity-80">
                          Situation Overview:
                        </div>
                        <p className="text-[11px] leading-relaxed text-current font-normal">
                          {info.description}
                        </p>
                      </div>
                    )}

                    {info.instruction && (
                      <div className="p-2.5 rounded bg-black/10 border border-current/20">
                        <div className="text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1 text-current">
                          <ShieldAlert className="w-3 h-3 text-current" /> Public Directive:
                        </div>
                        <p className="text-[11px] leading-relaxed text-current font-medium">
                          {info.instruction}
                        </p>
                      </div>
                    )}

                    <div className={`flex items-center justify-between pt-1 border-t ${temporal.dividerClass} text-[10px] opacity-85`}>
                      <span className="font-mono">Agency: {info.senderName || alert.sender}</span>
                      {info.web && (
                        <a
                          href={info.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-bold underline flex items-center gap-1 text-current"
                        >
                          CAP XML <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

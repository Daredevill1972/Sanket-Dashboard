import React, { useMemo, useState, useEffect } from 'react';
import { CapAlert } from '../types/cap';
import { voiceAdvisoryService, VoiceAdvisoryState } from '../services/voiceAdvisoryService';
import {
  MapPin,
  Volume2,
  VolumeX,
  Radio,
  Search,
  ChevronDown
} from 'lucide-react';

export interface StateInfo {
  name: string;
  aliases: string[];
  bbox: [number, number, number, number]; // [minLon, minLat, maxLon, maxLat]
  isUt?: boolean;
}

// Hardcoded Array of all 28 Indian States
export const ALL_INDIAN_STATES: StateInfo[] = [
  { name: 'Andhra Pradesh', aliases: ['AP', 'Andhra', 'Visakhapatnam', 'Vijayawada'], bbox: [76.76, 12.62, 84.75, 19.15] },
  { name: 'Arunachal Pradesh', aliases: ['Arunachal', 'Itanagar'], bbox: [91.50, 26.65, 97.40, 29.47] },
  { name: 'Assam', aliases: ['Guwahati', 'Brahmaputra', 'Kamrup', 'Kaziranga', 'Morigaon', 'Barpeta'], bbox: [89.69, 24.13, 96.02, 27.97] },
  { name: 'Bihar', aliases: ['Patna', 'Ganga', 'Muzaffarpur', 'Gaya'], bbox: [83.32, 24.28, 88.30, 27.52] },
  { name: 'Chhattisgarh', aliases: ['Raipur', 'Bastar', 'Bilaspur'], bbox: [80.25, 17.78, 84.40, 24.10] },
  { name: 'Goa', aliases: ['Panaji', 'Mormugao'], bbox: [73.68, 14.89, 74.34, 15.80] },
  { name: 'Gujarat', aliases: ['Ahmedabad', 'Surat', 'Kutch', 'Saurashtra', 'Gandhinagar'], bbox: [68.10, 20.10, 74.47, 24.70] },
  { name: 'Haryana', aliases: ['Gurugram', 'Faridabad', 'Ambala', 'Panipat'], bbox: [74.45, 27.65, 77.60, 30.92] },
  { name: 'Himachal Pradesh', aliases: ['HP', 'Himachal', 'Shimla', 'Kullu', 'Mandi', 'Kangra', 'Lahaul', 'Spiti'], bbox: [75.76, 30.38, 79.07, 33.26] },
  { name: 'Jharkhand', aliases: ['Ranchi', 'Jamshedpur', 'Dhanbad'], bbox: [83.33, 21.97, 87.95, 25.35] },
  { name: 'Karnataka', aliases: ['Bengaluru', 'Bangalore', 'Mysuru', 'Mangaluru', 'Belagavi'], bbox: [74.05, 11.59, 78.59, 18.45] },
  { name: 'Kerala', aliases: ['Kochi', 'Thiruvananthapuram', 'Calicut', 'Wayanad', 'Idukki'], bbox: [74.86, 8.29, 77.42, 12.79] },
  { name: 'Madhya Pradesh', aliases: ['MP', 'Bhopal', 'Indore', 'Jabalpur', 'Gwalior'], bbox: [74.04, 21.08, 82.81, 26.87] },
  { name: 'Maharashtra', aliases: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Konkan'], bbox: [72.64, 15.60, 80.89, 22.03] },
  { name: 'Manipur', aliases: ['Imphal'], bbox: [93.04, 23.83, 94.76, 25.69] },
  { name: 'Meghalaya', aliases: ['Shillong', 'Cherrapunji', 'Mawsynram'], bbox: [89.81, 25.03, 92.83, 26.11] },
  { name: 'Mizoram', aliases: ['Aizawl'], bbox: [92.26, 21.95, 93.44, 24.52] },
  { name: 'Nagaland', aliases: ['Kohima', 'Dimapur'], bbox: [93.33, 25.10, 95.25, 27.04] },
  { name: 'Odisha', aliases: ['Orissa', 'Bhubaneswar', 'Puri', 'Cuttack', 'Similipal', 'Mayurbhanj'], bbox: [81.38, 17.81, 87.52, 22.57] },
  { name: 'Punjab', aliases: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala'], bbox: [73.88, 29.53, 76.93, 32.50] },
  { name: 'Rajasthan', aliases: ['Jaipur', 'Jodhpur', 'Bikaner', 'Udaipur', 'Barmer', 'Jaisalmer', 'Thar'], bbox: [69.50, 23.06, 78.28, 30.20] },
  { name: 'Sikkim', aliases: ['Gangtok'], bbox: [88.06, 27.08, 88.92, 28.13] },
  { name: 'Tamil Nadu', aliases: ['TN', 'Chennai', 'Coimbatore', 'Madurai', 'Kanyakumari'], bbox: [76.24, 8.08, 80.35, 13.57] },
  { name: 'Telangana', aliases: ['Hyderabad', 'Warangal', 'Nizamabad'], bbox: [77.24, 15.83, 81.32, 19.92] },
  { name: 'Tripura', aliases: ['Agartala'], bbox: [91.15, 22.93, 92.34, 24.53] },
  { name: 'Uttar Pradesh', aliases: ['UP', 'Lucknow', 'Varanasi', 'Kanpur', 'Noida', 'Agra', 'Prayagraj'], bbox: [77.08, 23.87, 84.64, 30.41] },
  { name: 'Uttarakhand', aliases: ['UK', 'Uttaranchal', 'Dehradun', 'Chamoli', 'Rishikesh', 'Haridwar', 'Kedarnath'], bbox: [77.58, 28.71, 81.04, 31.46] },
  { name: 'West Bengal', aliases: ['WB', 'Kolkata', 'Calcutta', 'Howrah', 'Darjeeling', 'Siliguri', 'Sundarbans'], bbox: [85.82, 21.52, 89.88, 27.22] }
];

// Hardcoded Array of all 8 Indian Union Territories
export const ALL_UNION_TERRITORIES: StateInfo[] = [
  { name: 'Andaman and Nicobar Islands', aliases: ['Andaman & Nicobar', 'Andaman', 'Nicobar', 'Port Blair', 'Car Nicobar', 'Diglipur', 'A&N'], bbox: [92.15, 6.75, 94.35, 13.75], isUt: true },
  { name: 'Chandigarh', aliases: ['CHD'], bbox: [76.71, 30.68, 76.84, 30.79], isUt: true },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', aliases: ['Daman and Diu', 'Dadra and Nagar Haveli', 'DNH', 'Daman', 'Diu', 'Silvassa'], bbox: [70.80, 20.20, 73.20, 20.80], isUt: true },
  { name: 'Delhi', aliases: ['NCR', 'New Delhi', 'National Capital'], bbox: [76.84, 28.40, 77.35, 28.88], isUt: true },
  { name: 'Jammu and Kashmir', aliases: ['Jammu & Kashmir', 'J&K', 'Jammu', 'Kashmir', 'Srinagar', 'Ramban', 'Banihal', 'Udhampur', 'Anantnag'], bbox: [73.76, 32.28, 77.55, 35.15], isUt: true },
  { name: 'Ladakh', aliases: ['Leh', 'Kargil', 'Zanskar'], bbox: [75.50, 32.20, 80.35, 36.00], isUt: true },
  { name: 'Lakshadweep', aliases: ['Kavaratti', 'Agatti', 'Minicoy', 'Amini'], bbox: [71.50, 8.20, 74.50, 12.50], isUt: true },
  { name: 'Puducherry', aliases: ['Pondicherry', 'Karaikal', 'Mahe', 'Yanam'], bbox: [79.65, 11.75, 79.90, 12.05], isUt: true }
];

// Combined list of all 36 States & UTs
export const INDIAN_STATES: StateInfo[] = [
  ...ALL_INDIAN_STATES,
  ...ALL_UNION_TERRITORIES
];

export function extractStateFromAreaDesc(
  areaDesc: string = '',
  headline: string = '',
  description: string = ''
): string | null {
  const combined = `${areaDesc} ${headline} ${description}`.toLowerCase();

  // 1. Check parentheses match: e.g. "Nicobar (Andaman & Nicobar Islands)" or "Kullu (Himachal Pradesh)"
  const parenMatch = areaDesc.match(/\(([^)]+)\)/);
  if (parenMatch && parenMatch[1]) {
    const candidate = parenMatch[1].trim().toLowerCase();
    for (const state of INDIAN_STATES) {
      if (candidate.includes(state.name.toLowerCase())) {
        return state.name;
      }
      for (const alias of state.aliases) {
        if (candidate.includes(alias.toLowerCase())) {
          return state.name;
        }
      }
    }
  }

  // 2. Direct string inclusion against all Indian States, UTs & aliases
  for (const state of INDIAN_STATES) {
    if (combined.includes(state.name.toLowerCase())) {
      return state.name;
    }
    for (const alias of state.aliases) {
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

export interface StateFilterProps {
  alerts: CapAlert[];
  selectedState: string | null;
  onSelectState: (stateName: string | null, bbox: [number, number, number, number] | null) => void;
  filteredAlertsCount: number;
  currentLang?: 'en' | 'hi';
}

export const StateFilter: React.FC<StateFilterProps> = ({
  alerts,
  selectedState,
  onSelectState,
  filteredAlertsCount,
  currentLang = 'en'
}) => {
  const [voiceState, setVoiceState] = useState<VoiceAdvisoryState>(voiceAdvisoryService.getState());

  useEffect(() => {
    const unsubscribe = voiceAdvisoryService.subscribe(setVoiceState);
    return () => unsubscribe();
  }, []);

  // Compute active alert count per State & UT
  const stateCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const alert of alerts) {
      const areaDescs = alert.info.areas.map((a) => a.areaDesc).join(' ');
      const matched = extractStateFromAreaDesc(areaDescs, alert.info.headline, alert.info.description);
      if (matched) {
        counts[matched] = (counts[matched] || 0) + 1;
      }
    }
    return counts;
  }, [alerts]);

  const handleStateChange = (stateName: string) => {
    if (!stateName || stateName === 'ALL') {
      // Pan back to All India overview
      onSelectState(null, [68.0, 7.0, 97.5, 37.0]);
      return;
    }

    const stateObj = INDIAN_STATES.find((s) => s.name === stateName);
    const bbox = stateObj ? stateObj.bbox : null;

    // Filter alerts for that state and cache locally for offline mesh sync
    const stateFiltered = alerts.filter((a) => {
      const areaDescs = a.info.areas.map((ar) => ar.areaDesc).join(' ');
      const st = extractStateFromAreaDesc(areaDescs, a.info.headline, a.info.description);
      return st === stateName;
    });

    try {
      localStorage.setItem(
        `sanket_offline_mesh_state_${stateName}`,
        JSON.stringify({
          state: stateName,
          timestamp: Date.now(),
          count: stateFiltered.length,
          alerts: stateFiltered
        })
      );
    } catch (err) {
      console.warn('Failed to cache state alerts to localStorage:', err);
    }

    onSelectState(stateName, bbox);
  };

  const handleVoiceBroadcast = () => {
    if (voiceState.isSpeaking) {
      voiceAdvisoryService.stop();
      return;
    }

    const activeStateName = selectedState || 'All India';
    const alertsToSpeak = selectedState
      ? alerts.filter((a) => {
          const areaDescs = a.info.areas.map((ar) => ar.areaDesc).join(' ');
          const st = extractStateFromAreaDesc(areaDescs, a.info.headline, a.info.description);
          return st === selectedState;
        })
      : alerts;

    voiceAdvisoryService.speakAlerts(activeStateName, alertsToSpeak, currentLang);
  };

  return (
    <div className="p-2 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold uppercase text-slate-300 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>All-India State Filter (36 States &amp; UTs)</span>
        </label>

        {/* Multi-Lingual Voice Advisory Broadcast Alert Button */}
        <button
          onClick={handleVoiceBroadcast}
          className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow-xs ${
            voiceState.isSpeaking
              ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse ring-2 ring-red-400/80'
              : 'bg-cyan-600/25 hover:bg-cyan-600/40 border border-cyan-500/40 text-cyan-300'
          }`}
          title={voiceState.isSpeaking ? 'Stop voice broadcast' : 'Read active warnings aloud'}
        >
          {voiceState.isSpeaking ? (
            <>
              <VolumeX className="w-3 h-3 text-white" />
              <span>Stop Broadcast</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3 h-3 text-cyan-300" />
              <span>Broadcast Alert</span>
            </>
          )}
        </button>
      </div>

      {/* Comprehensive Hardcoded 28 States & 8 UTs Dropdown */}
      <div className="relative">
        <select
          value={selectedState || 'ALL'}
          onChange={(e) => handleStateChange(e.target.value)}
          className="w-full appearance-none bg-slate-950 border border-slate-700 hover:border-cyan-500/60 rounded-lg px-2.5 py-1.5 pr-8 text-xs font-medium text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition cursor-pointer"
        >
          <option value="ALL">
            🇮🇳 All States &amp; UTs ({alerts.length} Active Warnings)
          </option>
          <optgroup label="States (28)">
            {ALL_INDIAN_STATES.map((state) => (
              <option key={state.name} value={state.name}>
                📍 {state.name} {stateCounts[state.name] ? `(${stateCounts[state.name]} active)` : '(0)'}
              </option>
            ))}
          </optgroup>
          <optgroup label="Union Territories (8)">
            {ALL_UNION_TERRITORIES.map((ut) => (
              <option key={ut.name} value={ut.name}>
                🏝️ {ut.name} {stateCounts[ut.name] ? `(${stateCounts[ut.name]} active)` : '(0)'}
              </option>
            ))}
          </optgroup>
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* State Filter Active Banner */}
      {selectedState && (
        <div className="flex items-center justify-between px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-[10px]">
          <span className="text-cyan-200 font-semibold truncate">
            Active: <strong>{selectedState}</strong> ({filteredAlertsCount} alerts)
          </span>
          <button
            onClick={() => handleStateChange('ALL')}
            className="text-cyan-400 hover:text-white underline font-mono text-[9px] shrink-0"
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
};


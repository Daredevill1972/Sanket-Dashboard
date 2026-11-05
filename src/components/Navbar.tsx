import React from 'react';
import {
  ShieldAlert,
  Wifi,
  WifiOff,
  Radio,
  BookOpen,
  Volume2,
  Bell,
  Languages,
  Clock,
  Compass
} from 'lucide-react';

interface NavbarProps {
  isOnline: boolean;
  onToggleSimulateOffline: () => void;
  isSimulatedOffline: boolean;
  pendingSosCount: number;
  totalSosCount: number;
  onOpenSosForm: () => void;
  onOpenSosQueue: () => void;
  onOpenBeacon: () => void;
  onOpenShelters: () => void;
  onOpenGuides: () => void;
  lang: 'en' | 'hi';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isOnline,
  onToggleSimulateOffline,
  isSimulatedOffline,
  pendingSosCount,
  totalSosCount,
  onOpenSosForm,
  onOpenSosQueue,
  onOpenBeacon,
  onOpenShelters,
  onOpenGuides,
  lang,
  onToggleLang
}) => {
  return (
    <header className="h-16 bg-[#070b14] border-b border-slate-800 px-3 md:px-5 flex items-center justify-between text-slate-100 z-30 select-none">
      {/* Brand & Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 p-0.5 shadow-lg shadow-red-950/60 flex items-center justify-center">
          <ShieldAlert className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base md:text-lg font-black tracking-wider text-white uppercase flex items-center gap-1.5">
              RAKSHAK <span className="text-xs font-normal text-slate-400 font-sans">(रक्षक)</span>
            </h1>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
              INDIA V2.4
            </span>
          </div>
          <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">
            Offline-First Disaster Response & NDMA CAP Operations
          </p>
        </div>
      </div>

      {/* Middle Status / Network Badges */}
      <div className="flex items-center gap-2">
        {/* Network status pill & offline simulation toggle */}
        <button
          onClick={onToggleSimulateOffline}
          className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all ${
            isOnline
              ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60'
              : 'bg-amber-950/70 border-amber-500/60 text-amber-200 hover:bg-amber-900/80 animate-pulse'
          }`}
          title="Click to simulate Airplane Mode / Tower Outage"
        >
          {isOnline ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Wifi className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">ONLINE (HQ SYNC ACTIVE)</span>
              <span className="sm:hidden">ONLINE</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">
                OFFLINE ({isSimulatedOffline ? 'SIMULATED' : 'NETWORK DOWN'} - INDEXEDDB STORAGE)
              </span>
              <span className="sm:hidden">OFFLINE</span>
            </>
          )}
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-1.5 md:gap-2">
        {/* Quick Language Toggle */}
        <button
          onClick={onToggleLang}
          className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition"
          title="Toggle English / हिंदी"
        >
          <Languages className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'ENG | हिंदी' : 'हिंदी | ENG'}</span>
        </button>

        {/* Shelters Button */}
        <button
          onClick={onOpenShelters}
          className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition"
        >
          <Compass className="w-3.5 h-3.5 text-emerald-400" />
          <span>Shelters</span>
        </button>

        {/* Guides Button */}
        <button
          onClick={onOpenGuides}
          className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span>SOPs & Hotlines</span>
        </button>

        {/* Distress Beacon (Sound & Strobe) */}
        <button
          onClick={onOpenBeacon}
          className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-amber-300 font-medium flex items-center gap-1.5 transition"
          title="Tactical Morse SOS Beacon"
        >
          <Volume2 className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Beacon</span>
        </button>

        {/* SOS Queue Drawer Trigger */}
        <button
          onClick={onOpenSosQueue}
          className="relative p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium flex items-center gap-1.5 transition"
          title="View Local IndexedDB SOS Queue"
        >
          <Radio className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Queue</span>
          {pendingSosCount > 0 ? (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950">
              {pendingSosCount}
            </span>
          ) : totalSosCount > 0 ? (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-300">
              {totalSosCount}
            </span>
          ) : null}
        </button>

        {/* Primary Red SOS Broadcast Button */}
        <button
          onClick={onOpenSosForm}
          className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-xs md:text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-red-950/80 flex items-center gap-1.5 transition animate-pulse"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>BROADCAST SOS</span>
        </button>
      </div>
    </header>
  );
};


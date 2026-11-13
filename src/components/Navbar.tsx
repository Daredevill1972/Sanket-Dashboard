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
  Clock
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
  onOpenGuides,
  lang,
  onToggleLang
}) => {
  return (
    <header className="h-16 bg-[#070b14] border-b border-slate-800 px-3 md:px-5 flex items-center justify-between text-slate-100 z-30 select-none">
      {/* Brand & Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            src="/sanket-logo.png"
            alt="SANकेत Logo"
            className="h-10 md:h-11 w-auto object-contain select-none drop-shadow-md hover:scale-105 transition-transform"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md flex items-center leading-none font-sans select-none">
            <span>SAN</span>
            <span className="text-red-500 font-devanagari">केत</span>
          </h1>
        </div>

        <div className="hidden sm:block border-l border-slate-800 pl-3">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
              INDIA V2.4
            </span>
            <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950/80 text-red-400 border border-red-800/60">
              EARLY WARNING
            </span>
          </div>
          <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">
            National Disaster Response & NDMA CAP Operations
          </p>
        </div>
      </div>

      {/* Middle Status / Network Badges */}
      <div className="flex items-center gap-2">
        {/* Network status pill & offline simulation toggle */}
        <button
          onClick={onToggleSimulateOffline}
          className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all ${
            isOnline
              ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60 shadow-xs'
              : 'bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700 shadow-xs'
          }`}
          title="Click to toggle Offline Simulation Mode"
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
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <WifiOff className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold tracking-wide">OFFLINE - CACHED DATA</span>
              {isSimulatedOffline && (
                <span className="hidden md:inline px-1.5 py-0.2 rounded text-[9px] bg-slate-700 text-slate-300 font-mono">
                  SIMULATED
                </span>
              )}
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


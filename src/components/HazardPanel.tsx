import React, { useState } from 'react';
import { CapAlert, AlertSeverity } from '../types/cap';
import {
  AlertTriangle,
  Flame,
  Wind,
  Droplets,
  Mountain,
  Sun,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Radio,
  FileCode2,
  RefreshCw
} from 'lucide-react';

interface HazardPanelProps {
  alerts: CapAlert[];
  selectedAlertId: string | null;
  onSelectAlert: (id: string | null) => void;
  onOpenIngestModal: () => void;
  onRefreshFeeds: () => void;
  isRefreshing?: boolean;
}

export const HazardPanel: React.FC<HazardPanelProps> = ({
  alerts,
  selectedAlertId,
  onSelectAlert,
  onOpenIngestModal,
  onRefreshFeeds,
  isRefreshing = false
}) => {
  const [severityFilter, setSeverityFilter] = useState<'All' | AlertSeverity>('All');
  const [expandedAlerts, setExpandedAlerts] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedAlerts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (severityFilter === 'All') return true;
    return alert.info.severity === severityFilter;
  });

  const getHazardIcon = (event: string, category: string) => {
    const text = `${event} ${category}`.toLowerCase();
    if (text.includes('cyclone') || text.includes('wind') || text.includes('storm')) {
      return <Wind className="w-4 h-4 text-sky-400" />;
    }
    if (text.includes('flood') || text.includes('water') || text.includes('rain')) {
      return <Droplets className="w-4 h-4 text-blue-400" />;
    }
    if (text.includes('landslide') || text.includes('debris') || text.includes('quake')) {
      return <Mountain className="w-4 h-4 text-amber-400" />;
    }
    if (text.includes('heat') || text.includes('fire')) {
      return <Sun className="w-4 h-4 text-orange-400" />;
    }
    return <AlertTriangle className="w-4 h-4 text-red-400" />;
  };

  const getSeverityBadge = (severity: AlertSeverity) => {
    switch (severity) {
      case 'Extreme':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">
            🔴 Red Alert (Extreme)
          </span>
        );
      case 'Severe':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/40">
            🟠 Orange Alert (Severe)
          </span>
        );
      case 'Moderate':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
            🟡 Yellow Alert (Moderate)
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/40">
            🔵 Advisory
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0f1d] border-r border-slate-800 text-slate-100">
      {/* Header bar */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/60 backdrop-blur flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-wide text-white uppercase flex items-center gap-1.5">
              NDMA CAP Feed
              <span className="px-1.5 py-0.2 bg-red-600/30 text-red-300 text-[10px] font-mono rounded">
                LIVE
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">OASIS v1.2 Standard Ingestion</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onRefreshFeeds}
            disabled={isRefreshing}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
            title="Reload CAP Feeds"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
          </button>
          <button
            onClick={onOpenIngestModal}
            className="px-2.5 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 rounded text-xs font-semibold flex items-center gap-1 transition"
          >
            <FileCode2 className="w-3.5 h-3.5" /> Ingest CAP XML
          </button>
        </div>
      </div>

      {/* Severity Filter Tabs */}
      <div className="p-2 border-b border-slate-800/80 bg-slate-950/40 flex items-center gap-1 overflow-x-auto text-[11px]">
        {(['All', 'Extreme', 'Severe', 'Moderate'] as const).map((sev) => {
          const count =
            sev === 'All'
              ? alerts.length
              : alerts.filter((a) => a.info.severity === sev).length;
          return (
            <button
              key={sev}
              onClick={() => setSeverityFilter(sev)}
              className={`px-2 py-1 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                severityFilter === sev
                  ? 'bg-slate-800 text-white border border-slate-600'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>{sev}</span>
              <span className="px-1 rounded-full text-[9px] bg-slate-700/60 text-slate-300">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Alert List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
        {filteredAlerts.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            No active alerts matching current filter.
          </div>
        ) : (
          filteredAlerts.map((alert) => {
            const isSelected = selectedAlertId?.startsWith(alert.identifier);
            const isExpanded = expandedAlerts[alert.identifier];
            const { info } = alert;

            return (
              <div
                key={alert.identifier}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800'
                }`}
              >
                {/* Header card */}
                <div
                  onClick={() => onSelectAlert(alert.identifier)}
                  className="p-3 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      {getHazardIcon(info.event, info.category)}
                      <span className="text-xs font-semibold text-slate-300 line-clamp-1">
                        {info.event}
                      </span>
                    </div>
                    {getSeverityBadge(info.severity)}
                  </div>

                  <h3 className="text-xs font-bold text-white mb-1.5 leading-snug">
                    {info.headline}
                  </h3>

                  <div className="flex items-start gap-1 text-[11px] text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      {info.areas.map((a) => a.areaDesc).join('; ') || 'Nationwide Alert'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-slate-800/80">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {new Date(alert.sent).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
                    </span>
                    <span className="text-cyan-400 font-mono text-[9px] truncate max-w-[120px]">
                      {alert.identifier}
                    </span>
                  </div>
                </div>

                {/* Collapsible Action Details */}
                <div className="border-t border-slate-800/80 bg-slate-950/60 px-3 py-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    {info.areas[0]?.polygon ? '📍 Geospatial Polygon' : '⭕ Radius Area'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(alert.identifier);
                    }}
                    className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 py-0.5 font-medium"
                  >
                    {isExpanded ? 'Hide Advisory' : 'Read Full NDMA Advisory'}
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="p-3 bg-slate-950/90 text-xs border-t border-slate-800 space-y-2 text-slate-300">
                    {info.description && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                          Situation Overview:
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    )}

                    {info.instruction && (
                      <div className="p-2.5 rounded bg-red-950/40 border border-red-500/30">
                        <div className="text-[10px] font-bold text-red-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <ShieldAlert className="w-3 h-3 text-red-400" /> Public Safety Directive:
                        </div>
                        <p className="text-[11px] text-red-200/90 leading-relaxed">
                          {info.instruction}
                        </p>
                      </div>
                    )}

                    <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60 font-mono">
                      <span>Agency: {info.senderName || alert.sender}</span>
                      <span>Scope: {alert.scope}</span>
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


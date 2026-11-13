import React, { useState } from 'react';
import { SosBroadcast } from '../types/sos';
import { offlineDB } from '../services/indexedDB';
import { sosSyncService } from '../services/syncService';
import {
  X,
  RefreshCw,
  Download,
  Copy,
  Trash2,
  CheckCircle2,
  Clock,
  Send,
  AlertTriangle,
  FileSpreadsheet,
  FileJson,
  Radio,
  Check,
  MapPin,
  Users
} from 'lucide-react';

interface SosQueueDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sosList: SosBroadcast[];
  onRefresh: () => void;
  isOnline: boolean;
}

export const SosQueueDrawer: React.FC<SosQueueDrawerProps> = ({
  isOpen,
  onClose,
  sosList,
  onRefresh,
  isOnline
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedSos, setSelectedSos] = useState<SosBroadcast | null>(null);

  if (!isOpen) return null;

  const pendingCount = sosList.filter((s) => s.syncStatus === 'pending_offline').length;
  const syncedCount = sosList.filter((s) => s.syncStatus === 'synced_hq').length;

  const handleForceSync = async () => {
    setIsSyncing(true);
    await sosSyncService.syncPendingQueue();
    setIsSyncing(false);
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this SOS broadcast record from local IndexedDB?')) {
      await offlineDB.deleteSos(id);
      onRefresh();
      if (selectedSos?.id === id) setSelectedSos(null);
    }
  };

  const handleCopySms = (sos: SosBroadcast) => {
    const text = sosSyncService.formatSosForSms(sos);
    navigator.clipboard.writeText(text);
    setCopiedId(sos.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleExportJson = () => {
    const data = sosSyncService.exportQueueAsJson(sosList);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SANKET_SOS_MANIFEST_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportCsv = () => {
    const data = sosSyncService.exportQueueAsCsv(sosList);
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SANKET_SOS_QUEUE_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-wide flex items-center gap-2">
                SOS Broadcast Queue
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {sosList.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                IndexedDB Local Storage • Auto-sync on Reconnection
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats & Sync Trigger Bar */}
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {pendingCount} Offline Pending
            </span>
            <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {syncedCount} Synced to HQ
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleForceSync}
              disabled={isSyncing || !isOnline || pendingCount === 0}
              className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition ${
                !isOnline
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : pendingCount === 0
                  ? 'bg-slate-800 text-slate-400'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow'
              }`}
              title={!isOnline ? 'Network offline. Will sync when reconnected.' : 'Force transmit offline queue to HQ'}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Transmitting...' : 'Sync Queue Now'}
            </button>
          </div>
        </div>

        {/* Export options */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Export Disaster Manifest:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              disabled={sosList.length === 0}
              className="hover:text-cyan-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-800"
              title="Download JSON format for mesh relay"
            >
              <FileJson className="w-3.5 h-3.5" /> JSON
            </button>
            <button
              onClick={handleExportCsv}
              disabled={sosList.length === 0}
              className="hover:text-cyan-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-800"
              title="Download CSV for Excel / Incident Commander"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" /> CSV
            </button>
          </div>
        </div>

        {/* SOS Records List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {sosList.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-slate-600" />
              <p className="font-semibold text-sm">No Active SOS Broadcasts</p>
              <p className="text-xs text-slate-500 mt-1">
                Emergency calls made offline or online will queue in IndexedDB and appear here.
              </p>
            </div>
          ) : (
            sosList.map((sos) => {
              const isPending = sos.syncStatus === 'pending_offline';
              const isSynced = sos.syncStatus === 'synced_hq';
              const isTransmitting = sos.syncStatus === 'transmitting';

              return (
                <div
                  key={sos.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isPending
                      ? 'bg-amber-950/10 border-amber-500/40'
                      : isSynced
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-red-950/20 border-red-500/40'
                  }`}
                >
                  {/* Top line status */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${
                          isPending
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : isSynced
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : isTransmitting
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}
                      >
                        {isPending && <Clock className="w-3 h-3" />}
                        {isSynced && <CheckCircle2 className="w-3 h-3" />}
                        {isTransmitting && <RefreshCw className="w-3 h-3 animate-spin" />}
                        {isPending
                          ? 'Queued Offline (IndexedDB)'
                          : isSynced
                          ? 'Synced to HQ'
                          : isTransmitting
                          ? 'Transmitting...'
                          : 'Sync Failed'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {new Date(sos.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopySms(sos)}
                        className="p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition"
                        title="Copy 112 SMS dispatch text format"
                      >
                        {copiedId === sos.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(sos.id)}
                        className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded transition"
                        title="Delete from local database"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm uppercase">
                        {sos.emergencyType.replace('_', ' ')}
                      </h4>
                      <span className="text-red-400 font-bold uppercase text-[10px] px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/40">
                        {sos.priority}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" /> {sos.peopleCount} victims
                      </span>
                      <span>
                        Contact: <strong>{sos.name}</strong> ({sos.contact})
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{sos.latitude.toFixed(4)}, {sos.longitude.toFixed(4)}</span>
                      {sos.addressOrLandmark && (
                        <span className="text-slate-300 font-sans truncate">
                          • {sos.addressOrLandmark}
                        </span>
                      )}
                    </div>

                    {sos.details && (
                      <p className="text-[11px] text-slate-300 p-2 rounded bg-slate-950/60 border border-slate-800/60">
                        "{sos.details}"
                      </p>
                    )}

                    {sos.medicalNeeds && (
                      <div className="text-[10px] text-rose-300 bg-rose-950/30 border border-rose-800/30 p-1.5 rounded">
                        <strong>Medical Need:</strong> {sos.medicalNeeds}
                      </div>
                    )}

                    {sos.ticketNumber && (
                      <div className="p-1.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-400 font-mono flex items-center justify-between">
                        <span>Incident Dispatch Ticket:</span>
                        <span className="font-bold">{sos.ticketNumber}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};


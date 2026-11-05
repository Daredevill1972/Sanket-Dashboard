import React, { useState } from 'react';
import { EMERGENCY_CONTACTS, SURVIVAL_CHECKLISTS } from '../data/emergencySops';
import {
  BookOpen,
  X,
  Phone,
  ShieldAlert,
  CheckCircle,
  XCircle,
  HelpCircle,
  Wind,
  Droplets,
  Mountain,
  Sun
} from 'lucide-react';

interface OfflineGuidesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineGuidesModal: React.FC<OfflineGuidesModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'sops'>('sops');
  const [selectedHazard, setSelectedHazard] = useState<string>('cyclone');

  if (!isOpen) return null;

  const currentSop = SURVIVAL_CHECKLISTS[selectedHazard];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600/20 border border-blue-500/40 rounded-lg text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-wide">
                Offline Field Guides & Hotlines
              </h2>
              <p className="text-xs text-slate-400">
                National Disaster Management Authority (NDMA) Approved Standard Operating Procedures
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('sops')}
            className={`flex-1 py-2.5 text-center border-b-2 transition ${
              activeTab === 'sops'
                ? 'border-red-500 text-white bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Disaster Survival SOPs (Do's & Don'ts)
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex-1 py-2.5 text-center border-b-2 transition ${
              activeTab === 'contacts'
                ? 'border-red-500 text-white bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Emergency Hotlines & Helplines (India)
          </button>
        </div>

        {/* Content body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs text-slate-200">
          {activeTab === 'contacts' ? (
            <div className="space-y-2.5">
              <div className="p-2.5 bg-red-950/30 border border-red-500/30 rounded-lg text-red-200 text-xs">
                In severe distress, dial <strong>112</strong> immediately. The 112 emergency network functions even without SIM balance or active roaming across India.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {EMERGENCY_CONTACTS.map((c, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {c.category}
                      </span>
                      <span className="text-[10px] text-slate-500">{c.priority}</span>
                    </div>

                    <h4 className="font-bold text-white text-sm mb-1">{c.title}</h4>
                    <p className="text-[11px] text-slate-400 mb-2">{c.description}</p>

                    <a
                      href={`tel:${c.number.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 rounded font-mono font-bold text-xs transition"
                    >
                      <Phone className="w-3.5 h-3.5" /> {c.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Hazard selector pills */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {[
                  { id: 'cyclone', label: 'Cyclone', icon: Wind },
                  { id: 'flood', label: 'Floods', icon: Droplets },
                  { id: 'earthquake', label: 'Earthquake', icon: Mountain },
                  { id: 'landslide', label: 'Landslide', icon: Mountain }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedHazard(item.id)}
                      className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition ${
                        selectedHazard === item.id
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {currentSop && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <h3 className="text-sm font-bold text-white mb-2 uppercase flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                      {currentSop.hazard} Field SOP
                    </h3>

                    {/* Do's and Don'ts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30">
                        <div className="font-bold text-emerald-400 uppercase text-[11px] mb-1.5 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> What You MUST Do:
                        </div>
                        <ul className="space-y-1 text-[11px] text-emerald-200 list-disc list-inside">
                          {currentSop.dos.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-2.5 rounded bg-rose-950/30 border border-rose-500/30">
                        <div className="font-bold text-rose-400 uppercase text-[11px] mb-1.5 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> What to AVOID:
                        </div>
                        <ul className="space-y-1 text-[11px] text-rose-200 list-disc list-inside">
                          {currentSop.donts.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Phases: During */}
                    <div className="space-y-2">
                      <div>
                        <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                          During the Emergency Event:
                        </div>
                        <ul className="space-y-1 text-slate-300 list-disc list-inside">
                          {currentSop.during.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                          Immediate Post-Disaster Action:
                        </div>
                        <ul className="space-y-1 text-slate-300 list-disc list-inside">
                          {currentSop.after.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { DISASTER_SHELTERS, calculateDistanceKm } from '../data/shelters';
import { Shelter } from '../types/disaster';
import {
  Shield,
  X,
  Phone,
  MapPin,
  Users,
  Navigation,
  Droplet,
  HeartPulse,
  Zap,
  Anchor,
  Search
} from 'lucide-react';

interface ShelterLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  userLocation: { lat: number; lng: number } | null;
  onSelectShelterOnMap?: (shelter: Shelter) => void;
}

export const ShelterLocatorModal: React.FC<ShelterLocatorModalProps> = ({
  isOpen,
  onClose,
  userLocation,
  onSelectShelterOnMap
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  // Compute distance for each shelter if user coordinates exist
  const sheltersWithDistance = DISASTER_SHELTERS.map((s) => {
    let distanceKm: number | undefined;
    if (userLocation) {
      distanceKm = calculateDistanceKm(
        userLocation.lat,
        userLocation.lng,
        s.coordinates[1],
        s.coordinates[0]
      );
    }
    return { ...s, distanceKm };
  });

  // Sort by nearest if distance is known
  if (userLocation) {
    sheltersWithDistance.sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
  }

  const filteredShelters = sheltersWithDistance.filter((s) => {
    if (filterType !== 'all' && s.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.district.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-wide">
                Relief Camps & Cyclone Shelters
              </h2>
              <p className="text-xs text-slate-400">
                100% Pre-cached Offline Directory • Indian Civil Defense Network
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

        {/* Search & Filter Bar */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-wrap gap-2 items-center justify-between text-xs">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by shelter name, district, or state..."
              className="w-full bg-slate-950 border border-slate-700 rounded pl-8 pr-2 py-1.5 text-white placeholder:text-slate-500 text-xs"
            />
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterType === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All ({DISASTER_SHELTERS.length})
            </button>
            <button
              onClick={() => setFilterType('cyclone_shelter')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterType === 'cyclone_shelter'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Cyclone
            </button>
            <button
              onClick={() => setFilterType('relief_camp')}
              className={`px-2.5 py-1 rounded font-medium ${
                filterType === 'relief_camp'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Flood / Relief
            </button>
          </div>
        </div>

        {/* Shelter list */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs text-slate-200">
          {filteredShelters.map((shelter) => {
            const occupancyPct = Math.round((shelter.currentOccupancy / shelter.capacity) * 100);

            return (
              <div
                key={shelter.id}
                className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {shelter.type.replace('_', ' ')}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">
                      {shelter.name}
                    </h3>
                  </div>

                  {shelter.distanceKm !== undefined && (
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {shelter.distanceKm} km away
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>
                    {shelter.district}, {shelter.state} ({shelter.coordinates[1].toFixed(4)}, {shelter.coordinates[0].toFixed(4)})
                  </span>
                </div>

                {/* Capacity gauge */}
                <div className="space-y-1 mb-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Shelter Occupancy:</span>
                    <span className="font-semibold text-slate-200">
                      {shelter.currentOccupancy} / {shelter.capacity} persons ({occupancyPct}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        occupancyPct > 80 ? 'bg-red-500' : occupancyPct > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${occupancyPct}%` }}
                    />
                  </div>
                </div>

                {/* Amenities badges */}
                <div className="flex flex-wrap gap-1.5 mb-3 text-[10px]">
                  {shelter.amenities.medicalSupport && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700 flex items-center gap-1">
                      <HeartPulse className="w-3 h-3 text-rose-400" /> Medical
                    </span>
                  )}
                  {shelter.amenities.cleanWater && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 flex items-center gap-1">
                      <Droplet className="w-3 h-3 text-cyan-400" /> Potable Water
                    </span>
                  )}
                  {shelter.amenities.generators && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-yellow-300 border border-slate-700 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-yellow-400" /> Backup Power
                    </span>
                  )}
                  {shelter.amenities.boatAvailable && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700 flex items-center gap-1">
                      <Anchor className="w-3 h-3 text-sky-400" /> SDRF Boat
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <a
                    href={`tel:${shelter.phone}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> {shelter.contactPerson} ({shelter.phone})
                  </a>

                  {onSelectShelterOnMap && (
                    <button
                      onClick={() => {
                        onSelectShelterOnMap(shelter);
                        onClose();
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px] font-medium flex items-center gap-1 transition"
                    >
                      <Navigation className="w-3 h-3 text-emerald-400" /> View on Map
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


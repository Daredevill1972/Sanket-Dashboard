import React, { useState, useEffect } from 'react';
import { SosEmergencyType, SosPriority, SosBroadcast } from '../types/sos';
import { offlineDB } from '../services/indexedDB';
import { sosSyncService } from '../services/syncService';
import {
  AlertOctagon,
  X,
  MapPin,
  Crosshair,
  Users,
  Phone,
  User,
  HeartPulse,
  Battery,
  ShieldAlert,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface SosFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSosAdded: () => void;
  initialCoords?: { lat: number; lng: number } | null;
  onRequestPickOnMap?: () => void;
  isOnline: boolean;
}

export const SosFormModal: React.FC<SosFormModalProps> = ({
  isOpen,
  onClose,
  onSosAdded,
  initialCoords,
  onRequestPickOnMap,
  isOnline
}) => {
  const [emergencyType, setEmergencyType] = useState<SosEmergencyType>('trapped');
  const [priority, setPriority] = useState<SosPriority>('critical_immediate');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [latitude, setLatitude] = useState<number | ''>(initialCoords ? initialCoords.lat : '');
  const [longitude, setLongitude] = useState<number | ''>(initialCoords ? initialCoords.lng : '');
  const [locationAccuracy, setLocationAccuracy] = useState<number | undefined>(undefined);
  const [addressOrLandmark, setAddressOrLandmark] = useState('');
  const [details, setDetails] = useState('');
  const [medicalNeeds, setMedicalNeeds] = useState('');
  const [hasElderlyOrChildren, setHasElderlyOrChildren] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  const [isLocating, setIsLocating] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<SosBroadcast | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial coordinates if provided
  useEffect(() => {
    if (initialCoords) {
      setLatitude(initialCoords.lat);
      setLongitude(initialCoords.lng);
    }
  }, [initialCoords]);

  // Read battery level if Battery API is available
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
      }).catch(() => {});
    }
  }, []);

  // Request high-accuracy GPS coordinates
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        setLocationAccuracy(pos.coords.accuracy);
        setIsLocating(false);
      },
      (err) => {
        console.warn('GPS lookup error:', err);
        setIsLocating(false);
        // Default to Bay of Bengal / India center if denied
        if (latitude === '') {
          setLatitude(19.8135);
          setLongitude(85.8312);
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (latitude === '' || longitude === '') {
      alert('Please acquire GPS location or select location on map.');
      return;
    }

    setIsSubmitting(true);

    const newSos: SosBroadcast = {
      id: `SOS-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      timestamp: new Date().toISOString(),
      name: name.trim() || 'Distressed Citizen',
      contact: contact.trim() || 'N/A',
      emergencyType,
      priority,
      peopleCount: Number(peopleCount) || 1,
      latitude: Number(latitude),
      longitude: Number(longitude),
      locationAccuracy,
      addressOrLandmark: addressOrLandmark.trim(),
      details: details.trim(),
      medicalNeeds: medicalNeeds.trim(),
      hasElderlyOrChildren,
      batteryLevel,
      syncStatus: 'pending_offline',
      syncAttempts: 0
    };

    try {
      // 1. Always store locally in IndexedDB first (true offline-first guarantee!)
      await offlineDB.addSos(newSos);

      // 2. If online, trigger sync immediately in background
      if (isOnline) {
        sosSyncService.syncPendingQueue();
      }

      setSubmitSuccess(newSos);
      onSosAdded();
    } catch (err) {
      console.error('Failed to write SOS to IndexedDB:', err);
      alert('Error saving SOS to local IndexedDB. Check storage permissions.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(null);
    setName('');
    setContact('');
    setAddressOrLandmark('');
    setDetails('');
    setMedicalNeeds('');
    setHasElderlyOrChildren(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border-2 border-red-600 rounded-xl shadow-2xl overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-red-600 px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-6 h-6 animate-pulse" />
            <div>
              <h2 className="font-black text-lg uppercase tracking-wide">
                Emergency SOS Broadcast
              </h2>
              <p className="text-[11px] text-red-100 font-medium">
                Offline-First Local Queue (IndexedDB Resilient)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-red-700 rounded transition text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success confirmation view */}
        {submitSuccess ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                SOS Logged Successfully!
              </h3>
              <p className="text-xs text-slate-300">
                Broadcast ID:{' '}
                <span className="font-mono text-cyan-400 font-bold">
                  {submitSuccess.id}
                </span>
              </p>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-bold text-amber-400">
                  {isOnline ? 'Transmitting to Emergency HQ...' : 'Saved Offline in IndexedDB'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-mono text-white">
                  {submitSuccess.latitude.toFixed(4)}, {submitSuccess.longitude.toFixed(4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Affected People:</span>
                <span className="text-white font-bold">{submitSuccess.peopleCount} persons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Emergency Type:</span>
                <span className="text-red-400 font-bold uppercase">
                  {submitSuccess.emergencyType}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 p-2 bg-slate-800/60 rounded">
              {isOnline
                ? 'Your SOS signal is being processed. Relief agencies in your sector are alerted.'
                : 'Your distress packet is safely saved in local storage. It will auto-transmit when mobile connection is re-established or can be transferred via 112 SMS format.'}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm transition"
              >
                Close & Return to Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* SOS Input Form */
          <form onSubmit={handleSubmit} className="p-4 space-y-4 max-h-[80vh] overflow-y-auto text-xs text-slate-200">
            {/* Offline notice */}
            <div className={`p-2.5 rounded-lg flex items-center gap-2 border ${
              isOnline
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-950/40 border-amber-500/50 text-amber-200'
            }`}>
              <AlertCircle className="w-4 h-4 shrink-0" />
              <div className="text-[11px]">
                {isOnline
                  ? 'Network Connected: SOS will transmit immediately to NDRF/SDMA dispatch center.'
                  : 'OFFLINE MODE: No internet detected. SOS will be securely queued in local IndexedDB and dispatched as soon as network returns.'}
              </div>
            </div>

            {/* Emergency Type Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                1. Nature of Emergency *
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'trapped', label: 'Trapped / Collapsed', color: 'border-red-500' },
                  { id: 'severe_flood', label: 'Severe Flood / Inundated', color: 'border-blue-500' },
                  { id: 'medical', label: 'Critical Medical / Trauma', color: 'border-rose-500' },
                  { id: 'rescue_boat', label: 'Rescue Boat Required', color: 'border-cyan-500' },
                  { id: 'food_water', label: 'No Food / Potable Water', color: 'border-amber-500' },
                  { id: 'elderly_infant', label: 'Vulnerable / Infant / Pregnant', color: 'border-purple-500' },
                  { id: 'fire_hazardous', label: 'Fire / Chemical / Gas', color: 'border-orange-500' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setEmergencyType(item.id as SosEmergencyType)}
                    className={`p-2 rounded text-left border transition-all ${
                      emergencyType === item.id
                        ? 'bg-red-600/20 border-red-500 text-white font-bold ring-1 ring-red-500'
                        : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Priority and People Count */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Urgency / Priority *
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as SosPriority)}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white font-medium focus:ring-1 focus:ring-red-500"
                >
                  <option value="critical_immediate">Critical (Life-Threatening)</option>
                  <option value="high">High Priority</option>
                  <option value="moderate">Moderate (Evacuation Needed)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Victims / Headcount *
                </label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-2">
                  <Users className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-transparent py-2 text-white font-bold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* GPS Location & Map Picking */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  GPS Disaster Coordinates *
                </label>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={isLocating}
                    className="px-2 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-[11px] font-medium flex items-center gap-1"
                  >
                    <Crosshair className={`w-3 h-3 ${isLocating ? 'animate-spin' : ''}`} />
                    {isLocating ? 'Acquiring...' : 'Get GPS'}
                  </button>
                  {onRequestPickOnMap && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onRequestPickOnMap();
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded text-[11px]"
                    >
                      Pick on Map
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-slate-400">Latitude</span>
                  <input
                    type="number"
                    step="any"
                    required
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    placeholder="e.g. 19.8135"
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono text-xs"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400">Longitude</span>
                  <input
                    type="number"
                    step="any"
                    required
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    placeholder="e.g. 85.8312"
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono text-xs"
                  />
                </div>
              </div>

              {locationAccuracy !== undefined && (
                <div className="text-[10px] text-emerald-400">
                  GPS Accuracy: ±{Math.round(locationAccuracy)} meters
                </div>
              )}

              <div>
                <input
                  type="text"
                  value={addressOrLandmark}
                  onChange={(e) => setAddressOrLandmark(e.target.value)}
                  placeholder="Landmark / Village / Ward / Building description"
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white text-xs placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Caller contact information */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] text-slate-400 mb-0.5">Contact Name</label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-2">
                  <User className="w-3.5 h-3.5 text-slate-500 mr-1.5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name / Group leader"
                    className="w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-slate-400 mb-0.5">Phone / Mobile *</label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500 mr-1.5" />
                  <input
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Mobile number"
                    className="w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Situation Details */}
            <div>
              <label className="block text-[10px] text-slate-400 mb-0.5">
                Situation Details / Trapped Status
              </label>
              <textarea
                rows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe current danger (e.g. water 4ft deep, roof leaking, senior citizen unable to walk)..."
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Vulnerable check & Medical needs */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer p-2 bg-slate-800/50 rounded border border-slate-700/60">
                <input
                  type="checkbox"
                  checked={hasElderlyOrChildren}
                  onChange={(e) => setHasElderlyOrChildren(e.target.checked)}
                  className="w-4 h-4 rounded text-red-600 focus:ring-0"
                />
                <span className="text-xs text-slate-300 font-medium">
                  Group includes Infants, Pregnant Women, or Senior Citizens
                </span>
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-2">
                <HeartPulse className="w-3.5 h-3.5 text-rose-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={medicalNeeds}
                  onChange={(e) => setMedicalNeeds(e.target.value)}
                  placeholder="Special medical requirements (Insulin, Oxygen, Fractures, Dialysis)"
                  className="w-full bg-transparent py-1.5 text-white text-xs focus:outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Device metadata display */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Battery className="w-3 h-3 text-emerald-400" />
                Battery: {batteryLevel !== null ? `${batteryLevel}%` : 'Reading...'}
              </span>
              <span className="font-mono text-cyan-400">
                Storage: IndexedDB Active
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white font-black text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 transition"
            >
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              {isSubmitting ? 'Recording to IndexedDB...' : 'QUEUE EMERGENCY SOS BROADCAST'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


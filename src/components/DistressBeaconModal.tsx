import React, { useState, useEffect } from 'react';
import { soundBeacon } from '../services/soundBeacon';
import {
  Volume2,
  VolumeX,
  Zap,
  X,
  AlertTriangle,
  Lightbulb,
  Radio,
  Eye
} from 'lucide-react';

interface DistressBeaconModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DistressBeaconModal: React.FC<DistressBeaconModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isStrobeActive, setIsStrobeActive] = useState(false);
  const [screenTorch, setScreenTorch] = useState(false);
  const [isPulseOn, setIsPulseOn] = useState(false);

  useEffect(() => {
    return () => {
      soundBeacon.stop();
    };
  }, []);

  if (!isOpen) return null;

  const handleToggleSound = () => {
    if (isActive) {
      soundBeacon.stop();
      setIsActive(false);
      setIsPulseOn(false);
    } else {
      setIsActive(true);
      soundBeacon.start((pulse) => {
        setIsPulseOn(pulse);
      });
    }
  };

  const handleClose = () => {
    soundBeacon.stop();
    setIsActive(false);
    setIsStrobeActive(false);
    setScreenTorch(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors duration-100 ${
        screenTorch && isPulseOn
          ? 'bg-white'
          : 'bg-black/90 backdrop-blur-md'
      }`}
    >
      <div className="relative w-full max-w-md bg-slate-900 border-2 border-red-600 rounded-2xl p-6 shadow-2xl text-slate-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500">
            <Radio className={`w-8 h-8 ${isActive ? 'animate-ping' : ''}`} />
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-wider text-white">
              Tactical Distress Beacon
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              International Morse Code SOS (... --- ...) Audio & Visual Beacon
            </p>
          </div>

          {/* Visual Morse Pulse Indicator */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center gap-2">
            <div
              className={`w-4 h-4 rounded-full transition-all duration-75 ${
                isPulseOn
                  ? 'bg-red-500 scale-125 shadow-lg shadow-red-500'
                  : 'bg-slate-800 scale-100'
              }`}
            />
            <span className="font-mono text-sm tracking-widest text-red-400 font-bold">
              {isActive ? 'TRANSMITTING S-O-S BEACON' : 'BEACON STANDBY'}
            </span>
          </div>

          {/* Controls */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleToggleSound}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-xl transition ${
                isActive
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/60'
              }`}
            >
              {isActive ? (
                <>
                  <VolumeX className="w-5 h-5" /> Silence Audible Beacon
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 animate-bounce" /> Activate Audible SOS (880Hz)
                </>
              )}
            </button>

            <button
              onClick={() => setScreenTorch(!screenTorch)}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2 border transition ${
                screenTorch
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              {screenTorch ? 'Disable Visual Strobe' : 'Synchronize Screen Strobe (Torch)'}
            </button>
          </div>

          <div className="text-[11px] text-slate-400 p-2.5 bg-slate-950/60 rounded-lg text-left">
            <p className="font-semibold text-slate-300 mb-0.5">Field Guidance:</p>
            <p>
              Audible 880Hz acoustic pulses penetrate collapsed rubble, heavy rainfall, and flood noise. Keep screen pointed upward toward rescue search drones or helicopters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


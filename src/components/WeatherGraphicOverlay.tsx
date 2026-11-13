import React, { useMemo } from 'react';
import { CapAlert } from '../types/cap';

interface WeatherGraphicOverlayProps {
  alert: CapAlert | null;
}

export const WeatherGraphicOverlay: React.FC<WeatherGraphicOverlayProps> = ({ alert }) => {
  if (!alert) return null;

  const eventText = `${alert.info.event} ${alert.info.headline}`.toLowerCase();

  // Classify weather phenomenon
  const weatherType = useMemo(() => {
    if (
      eventText.includes('cyclone') ||
      eventText.includes('storm') ||
      eventText.includes('gale') ||
      eventText.includes('squall') ||
      eventText.includes('depression')
    ) {
      return 'cyclone';
    }
    if (
      eventText.includes('lightning') ||
      eventText.includes('thunder') ||
      eventText.includes('ఉరుములు') ||
      eventText.includes('పిడుగులు')
    ) {
      return 'lightning';
    }
    if (
      eventText.includes('avalanche') ||
      eventText.includes('snow') ||
      eventText.includes('blizzard')
    ) {
      return 'avalanche';
    }
    if (
      eventText.includes('rain') ||
      eventText.includes('flood') ||
      eventText.includes('inundation') ||
      eventText.includes('downpour')
    ) {
      return 'rain';
    }
    if (
      eventText.includes('heat') ||
      eventText.includes('loo') ||
      eventText.includes('hot') ||
      eventText.includes('warm')
    ) {
      return 'heatwave';
    }
    return 'cyclone';
  }, [eventText]);

  // Generate deterministic rain streak positions for smooth layered CSS particle simulation
  const rainColumns = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i / 28) * 100 + (Math.sin(i * 3.7) * 2)}%`,
      delay: `${(i * 0.17) % 1.5}s`,
      height: `${28 + (i % 5) * 12}px`,
      layer: i % 3 === 0 ? 'front' : i % 3 === 1 ? 'mid' : 'back',
      opacity: i % 3 === 0 ? 0.75 : i % 3 === 1 ? 0.5 : 0.28
    }));
  }, []);

  // Generate snow particle positions
  const snowParticles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${(i / 30) * 100 + (Math.cos(i * 2.1) * 3)}%`,
      delay: `${(i * 0.21) % 3.0}s`,
      size: `${3 + (i % 4) * 2}px`,
      opacity: 0.4 + ((i % 5) * 0.12)
    }));
  }, []);

  return (
    <div className="pointer-events-none select-none absolute inset-0 z-10 overflow-hidden">
      {/* 1. CYCLONE / GALE STORM: Tactical Doppler Radar Pulse & Sweep */}
      {weatherType === 'cyclone' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center">
          <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-cyan-950/10 to-[#070b14]/40" />

          {/* Radar Scope Container (Centered in view, strictly pointer-events-none) */}
          <div className="pointer-events-none relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] flex items-center justify-center">
            {/* Concentric Range Rings */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-cyan-500/25" />
            <div className="pointer-events-none absolute w-[75%] h-[75%] rounded-full border border-cyan-500/25 border-dashed" />
            <div className="pointer-events-none absolute w-[50%] h-[50%] rounded-full border border-cyan-500/35" />
            <div className="pointer-events-none absolute w-[25%] h-[25%] rounded-full border border-cyan-500/40" />

            {/* Tactical Crosshair Axis Lines */}
            <div className="pointer-events-none absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="pointer-events-none absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

            {/* Concentric Radar Pulse Waves */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-cyan-400/60 animate-radar-pulse"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-teal-400/50 animate-radar-pulse"
              style={{ animationDelay: '1.4s' }}
            />

            {/* Continuous 360° Rotating Doppler Radar Beam Sweep with Conic Gradient */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full animate-radar-sweep"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(34, 197, 94, 0.45) 0deg, rgba(234, 179, 8, 0.5) 30deg, rgba(239, 68, 68, 0.7) 65deg, rgba(225, 29, 72, 0.85) 75deg, transparent 80deg, transparent 360deg)'
              }}
            />

            {/* Spinning Cyclone Storm Spiral Arms */}
            <div className="pointer-events-none absolute w-44 h-44 sm:w-56 sm:h-56 animate-cyclone-spiral flex items-center justify-center">
              <svg
                className="pointer-events-none w-full h-full text-cyan-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.85)] opacity-85"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M50 50 C55 35, 75 35, 85 45 C95 55, 90 75, 75 85 C60 95, 35 90, 25 75 C15 60, 20 35, 35 25"
                  strokeLinecap="round"
                />
                <path
                  d="M50 50 C45 65, 25 65, 15 55 C5 45, 10 25, 25 15 C40 5, 65 10, 75 25 C85 40, 80 65, 65 75"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </div>

            {/* Storm Center / Eye */}
            <div className="pointer-events-none relative w-8 h-8 rounded-full bg-cyan-950 border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            </div>
          </div>
        </div>
      )}

      {/* 2. RAIN / FLOODS: Multi-Layered GPU-Accelerated CSS Particle Rain */}
      {weatherType === 'rain' && (
        <div className="pointer-events-none relative w-full h-full">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-cyan-950/20" />

          {/* Background fine mist rain layer */}
          <div className="pointer-events-none absolute inset-0">
            {rainColumns.filter((c) => c.layer === 'back').map((col) => (
              <div
                key={`rain-b-${col.id}`}
                className="pointer-events-none absolute w-[1px] bg-gradient-to-b from-transparent via-sky-300 to-transparent animate-rain-back"
                style={{
                  left: col.left,
                  height: col.height,
                  animationDelay: col.delay,
                  opacity: col.opacity
                }}
              />
            ))}
          </div>

          {/* Midground medium rain streaks */}
          <div className="pointer-events-none absolute inset-0">
            {rainColumns.filter((c) => c.layer === 'mid').map((col) => (
              <div
                key={`rain-m-${col.id}`}
                className="pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-rain-mid"
                style={{
                  left: col.left,
                  height: col.height,
                  animationDelay: col.delay,
                  opacity: col.opacity
                }}
              />
            ))}
          </div>

          {/* Foreground heavy rain streaks */}
          <div className="pointer-events-none absolute inset-0">
            {rainColumns.filter((c) => c.layer === 'front').map((col) => (
              <div
                key={`rain-f-${col.id}`}
                className="pointer-events-none absolute w-[2px] bg-gradient-to-b from-transparent via-blue-200 to-white animate-rain-front shadow-[0_0_6px_rgba(186,230,253,0.8)]"
                style={{
                  left: col.left,
                  height: col.height,
                  animationDelay: col.delay,
                  opacity: col.opacity
                }}
              />
            ))}
          </div>

          {/* Ground water ripples */}
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-around">
            <div className="w-12 h-4 rounded-full border border-sky-400/50 animate-rain-splash" style={{ animationDelay: '0.2s' }} />
            <div className="w-16 h-5 rounded-full border border-cyan-400/60 animate-rain-splash" style={{ animationDelay: '0.8s' }} />
            <div className="w-10 h-3 rounded-full border border-sky-300/40 animate-rain-splash" style={{ animationDelay: '1.2s' }} />
          </div>
        </div>
      )}

      {/* 3. LIGHTNING & THUNDERSTORMS: Electric Flash & Branched Bolts */}
      {weatherType === 'lightning' && (
        <div className="pointer-events-none relative w-full h-full">
          <div className="pointer-events-none absolute inset-0 bg-amber-200/25 backdrop-brightness-150 animate-lightning-flash" />

          {/* Convective rain streaks in background */}
          <div className="pointer-events-none absolute inset-0">
            {rainColumns.slice(0, 16).map((col) => (
              <div
                key={`thunder-r-${col.id}`}
                className="pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-transparent via-amber-200 to-transparent animate-rain-mid"
                style={{
                  left: col.left,
                  height: col.height,
                  animationDelay: col.delay,
                  opacity: 0.4
                }}
              />
            ))}
          </div>

          {/* Primary Branched High-Voltage Lightning Bolt */}
          <div className="pointer-events-none absolute top-4 left-1/3 w-64 h-96 animate-lightning-strike">
            <svg
              className="pointer-events-none w-full h-full text-amber-300"
              viewBox="0 0 160 300"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M80 0 L70 60 L95 110 L65 170 L85 220 L50 300" />
              <path d="M70 60 L45 95 L55 130" strokeWidth="2" opacity="0.8" />
              <path d="M65 170 L95 200 L110 240" strokeWidth="2" opacity="0.8" />
            </svg>
          </div>

          {/* Secondary Strike Bolt */}
          <div
            className="pointer-events-none absolute top-12 right-1/4 w-48 h-80 animate-lightning-strike"
            style={{ animationDelay: '2.5s' }}
          >
            <svg
              className="pointer-events-none w-full h-full text-white"
              viewBox="0 0 160 300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M90 0 L100 70 L75 130 L105 190 L80 270" />
              <path d="M75 130 L50 160" strokeWidth="1.8" opacity="0.75" />
            </svg>
          </div>
        </div>
      )}

      {/* 4. AVALANCHE & BLIZZARD: Multi-Layer Drifting Snow */}
      {weatherType === 'avalanche' && (
        <div className="pointer-events-none relative w-full h-full">
          <div className="pointer-events-none absolute inset-0 bg-slate-900/20 backdrop-blur-[0.5px]" />
          {snowParticles.map((s) => (
            <div
              key={`snow-${s.id}`}
              className="pointer-events-none absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-snow-particle"
              style={{
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: s.delay,
                opacity: s.opacity
              }}
            />
          ))}
        </div>
      )}

      {/* 5. HEATWAVE / LOO: Convective Thermal Distortion */}
      {weatherType === 'heatwave' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-600/15 via-amber-500/10 to-transparent" />

          {/* Convective heat shimmer waves */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 flex justify-around items-end">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`thermal-${i}`}
                className="pointer-events-none w-16 h-36 bg-gradient-to-t from-orange-500/30 to-transparent rounded-full blur-md animate-thermal-wave"
                style={{ animationDelay: `${(i * 0.23) % 2.0}s` }}
              />
            ))}
          </div>

          <div
            className="pointer-events-none w-56 h-56 rounded-full border border-amber-500/40 animate-ping"
            style={{ animationDuration: '3s' }}
          />
        </div>
      )}
    </div>
  );
};

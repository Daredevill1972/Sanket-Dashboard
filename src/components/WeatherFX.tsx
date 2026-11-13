import React, { useMemo } from 'react';

export interface WeatherFXProps {
  type: string;
  className?: string;
  currentZoom?: number;
  zoom?: number;
}

export type HazardType =
  | 'fire'
  | 'cyclone'
  | 'earthquake'
  | 'rainfall'
  | 'thunderstorm'
  | 'hailstorm'
  | 'flood'
  | 'drought'
  | 'heatwave'
  | 'lightning'
  | 'snowfall'
  | 'avalanche'
  | 'landslide';

/**
 * Normalizes any CAP event text, headline, or description string to one of the supported WeatherFX hazard types
 */
export function normalizeHazardType(rawType: string = ''): HazardType {
  const t = rawType.toLowerCase();

  // 1. Avalanche (DGRE / DRDO / SASE)
  if (t.includes('avalanche') || t.includes('snowslide') || t.includes('snow avalanche')) {
    return 'avalanche';
  }

  // 2. Snowfall & Heavy Snow
  if (t.includes('snowfall') || t.includes('heavy snow') || t.includes('snow') || t.includes('blizzard')) {
    return 'snowfall';
  }

  // 3. Forest Fires / Fires (FSI / Van Agni)
  if (
    t.includes('forest fire') ||
    t.includes('fire') ||
    t.includes('wildfire') ||
    t.includes('bushfire') ||
    t.includes('fsi') ||
    t.includes('van agni')
  ) {
    return 'fire';
  }

  // 4. Cyclone / Depression
  if (
    t.includes('cyclone') ||
    t.includes('depression') ||
    t.includes('cyclonic') ||
    t.includes('storm surge') ||
    t.includes('squall') ||
    t.includes('gale')
  ) {
    return 'cyclone';
  }

  // 5. Earthquake / Tremor
  if (
    t.includes('earthquake') ||
    t.includes('tremor') ||
    t.includes('seismic') ||
    t.includes('quake') ||
    t.includes('aftershock')
  ) {
    return 'earthquake';
  }

  // 6. Hailstorm
  if (t.includes('hail') || t.includes('hailstorm')) {
    return 'hailstorm';
  }

  // 7. Flood & Inundation
  if (t.includes('flood') || t.includes('inundation') || t.includes('waterlogging') || t.includes('deluge')) {
    return 'flood';
  }

  // 8. Drought & Arid Dry Spell
  if (t.includes('drought') || t.includes('dry spell') || t.includes('water scarcity') || t.includes('arid') || t.includes('parched')) {
    return 'drought';
  }

  // 9. Heatwaves (Loo / Extreme Heat)
  if (t.includes('heat') || t.includes('heatwave') || t.includes('heat wave') || t.includes('loo') || t.includes('hot') || t.includes('warm')) {
    return 'heatwave';
  }

  // 10. Lightning (Quick, isolated flashes without rain)
  if ((t.includes('lightning') || t.includes('electric') || t.includes('bolt') || t.includes('పిడుగులు')) && !t.includes('rain') && !t.includes('thunder')) {
    return 'lightning';
  }

  // 11. Thunderstorm (Rain + Lightning)
  if (t.includes('thunder') || t.includes('thunderstorm') || t.includes('lightning') || t.includes('ఉరుములు') || t.includes('పిడుగులు')) {
    return 'thunderstorm';
  }

  // 12. Rainfall & Downpour
  if (t.includes('rain') || t.includes('rainfall') || t.includes('precipitation') || t.includes('downpour')) {
    return 'rainfall';
  }

  // 13. Landslide / Mudslide
  if (
    t.includes('landslide') ||
    t.includes('mudslide') ||
    t.includes('rockfall') ||
    t.includes('debris flow') ||
    t.includes('slope collapse')
  ) {
    return 'landslide';
  }

  return 'rainfall';
}

export const WeatherFX: React.FC<WeatherFXProps> = ({
  type,
  className = '',
  currentZoom,
  zoom
}) => {
  const hazard = normalizeHazardType(type);

  // 1. Forest Fires: Smoke plume particles (slowly rising, expanding dark grey circles)
  const smokePlumes = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      startLeft: `${42 + ((i * 7) % 17) - 8}%`,
      delay: `${(i * 0.28) % 4.2}s`,
      duration: `${3.5 + (i % 4) * 0.5}s`,
      initialSize: `${16 + (i % 4) * 6}px`,
      driftX: `${((i % 5) - 2) * 24}px`,
      blur: `${3 + (i % 3) * 2}px`
    }));
  }, []);

  // 2. Landslides: Brown & dark grey irregular blocks animating downwards diagonally
  const landslideBlocks = useMemo(() => {
    const colors = [
      '#78350f', // rich earth brown
      '#451a03', // dark umber brown
      '#1f2937', // dark slate grey
      '#374151', // medium dark grey
      '#292524', // stone dark grey
      '#92400e', // amber brown
      '#1c1917'  // charcoal dark stone
    ];

    const borderRadii = [
      '2px 6px 1px 4px',
      '5px 2px 7px 1px',
      '1px 5px 3px 6px',
      '4px 1px 3px 5px',
      '3px 6px 4px 2px',
      '2px 3px 6px 1px'
    ];

    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      startLeft: `${12 + (i * 3.6) % 76}%`,
      delay: `${(i * 0.12) % 2.4}s`,
      duration: `${1.4 + (i % 4) * 0.3}s`,
      width: `${8 + (i % 5) * 3}px`,
      height: `${7 + ((i * 3) % 4) * 3}px`,
      color: colors[i % colors.length],
      borderRadius: borderRadii[i % borderRadii.length],
      driftX: `${25 + (i % 4) * 14}px`,
      rotation: `${180 + (i % 5) * 90}deg`
    }));
  }, []);

  // 3. Thunderstorm Rain Dashes
  const thunderstormDashes = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${(i / 24) * 100}%`,
      delay: `${(i * 0.08) % 0.6}s`,
      height: `${18 + (i % 4) * 8}px`,
      opacity: 0.6 + (i % 3) * 0.15
    }));
  }, []);

  // 4. Dense Rainfall Dashes (fast-falling blue vertical dashes)
  const denseRainDashes = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: `${(i / 32) * 100}%`,
      delay: `${(i * 0.05) % 0.4}s`,
      height: `${20 + (i % 5) * 6}px`,
      opacity: 0.7 + (i % 3) * 0.15
    }));
  }, []);

  // 5. Snowfall circles (soft blurred white circles with gentle horizontal sway)
  const snowCircles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i / 28) * 100}%`,
      delay: `${(i * 0.22) % 3.6}s`,
      duration: `${3.2 + (i % 4) * 0.6}s`,
      size: `${7 + (i % 4) * 4}px`,
      blur: `${1.5 + (i % 3) * 1}px`,
      opacity: 0.7 + (i % 4) * 0.08
    }));
  }, []);

  // 6. Avalanche Snow Blocks (heavy white & light-blue crashing down steep diagonal path)
  const avalancheBlocks = useMemo(() => {
    const snowColors = ['#ffffff', '#f8fafc', '#f0f9ff', '#e0f2fe', '#bae6fd', '#e2e8f0'];
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      startLeft: `${5 + (i * 3.1) % 80}%`,
      delay: `${(i * 0.08) % 1.2}s`,
      duration: `${0.85 + (i % 5) * 0.15}s`,
      width: `${10 + (i % 5) * 5}px`,
      height: `${9 + ((i * 2) % 4) * 4}px`,
      color: snowColors[i % snowColors.length],
      borderRadius: `${2 + (i % 4)}px`
    }));
  }, []);

  // 7. Hail dots
  const hailDots = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i / 28) * 100}%`,
      delay: `${(i * 0.04) % 0.45}s`,
      size: `${3 + (i % 3) * 2.5}px`
    }));
  }, []);

  // 8. Light rain dashes
  const lightRainDashes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i / 20) * 100}%`,
      delay: `${(i * 0.12) % 1.2}s`,
      height: `${12 + (i % 3) * 5}px`
    }));
  }, []);

  // Dynamic Scaling calculation based on the map's current zoom level
  // Clamped with strict lower bound (0.2) so the orb doesn't completely disappear when zoomed out,
  // and upper bound (2.5) so it doesn't overflow the viewport when zoomed in.
  const MIN_SCALE = 0.2;
  const MAX_SCALE = 2.5;
  const effectiveZoom = typeof currentZoom === 'number'
    ? currentZoom
    : typeof zoom === 'number'
    ? zoom
    : 7;

  // Calculation requested: transform: scale(${Math.max(0.2, (currentZoom - 4) / 5)})
  const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, (effectiveZoom - 4) / 5));

  return (
    <div
      className={`weather-fx-container pointer-events-none select-none relative w-72 h-72 sm:w-88 sm:h-88 origin-center transition-transform duration-75 ease-out flex items-center justify-center overflow-hidden rounded-full ${className}`}
      style={{
        transform: `translate(-50%, -50%) scale(${scale.toFixed(3)})`,
        transformOrigin: 'center center',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {/* =========================================================================
          1. FOREST FIRES: Flickering orange/red radial glow + rising smoke plumes
          ========================================================================= */}
      {hazard === 'fire' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center">
          {/* Flickering orange/red radial glow at the epicenter */}
          <div
            className="pointer-events-none absolute w-44 h-44 rounded-full animate-fire-radial-glow"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.85) 0%, rgba(249, 115, 22, 0.65) 40%, rgba(245, 158, 11, 0.3) 70%, transparent 88%)'
            }}
          />

          {/* Secondary radiant heat pulse */}
          <div
            className="pointer-events-none absolute w-28 h-28 rounded-full border border-orange-500/60 animate-ping"
            style={{ animationDuration: '2.4s' }}
          />

          {/* Epicenter Core Combustion Flame */}
          <div className="pointer-events-none absolute z-20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-amber-300 drop-shadow-[0_0_16px_rgba(251,191,36,0.95)] animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c-.5 0-.9.3-1.1.7C9.3 5.4 6 10.3 6 14.5 6 18.1 8.9 21 12.5 21s6.5-2.9 6.5-6.5c0-4.2-3.3-9.1-4.9-11.8-.2-.4-.6-.7-1.1-.7zm0 6c1.9 2.5 3.5 5.2 3.5 6.5 0 2-1.6 3.5-3.5 3.5S8.5 16.5 8.5 14.5c0-1.3 1.6-4 3.5-6.5z" />
            </svg>
          </div>

          {/* Slowly rising, expanding semi-transparent dark grey circles to simulate smoke plumes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            {smokePlumes.map((p) => (
              <div
                key={`smoke-${p.id}`}
                className="pointer-events-none absolute rounded-full bg-stone-700/60 animate-smoke-plume"
                style={{
                  left: p.startLeft,
                  bottom: '38%',
                  width: p.initialSize,
                  height: p.initialSize,
                  filter: `blur(${p.blur})`,
                  animationDelay: p.delay,
                  '--smoke-duration': p.duration,
                  '--smoke-drift-x': p.driftX
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          2. CYCLONES: Rotating volumetric SVG spiral with slow spin & pulsing opacity
          ========================================================================= */}
      {hazard === 'cyclone' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center animate-cyclone-pulse">
          {/* Volumetric Radial Ambient Shading */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-radial-gradient from-cyan-900/30 via-sky-950/20 to-transparent" />

          {/* Slow Volumetric SVG Spiral (14s spin) */}
          <svg
            className="pointer-events-none w-[90%] h-[90%] animate-cyclone-spin drop-shadow-[0_0_18px_rgba(56,189,248,0.7)]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <linearGradient id="cycloneArm1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cycloneArm2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0369a1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="cycloneEye" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Volumetric Spiral Feeder Bands */}
            <path
              d="M100 100 C115 70, 150 70, 170 90 C190 110, 185 150, 155 175 C125 200, 75 190, 50 160 C25 130, 35 80, 65 55 C95 30, 155 35, 180 65"
              stroke="url(#cycloneArm1)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M100 100 C85 130, 50 130, 30 110 C10 90, 15 50, 45 25 C75 0, 125 10, 150 40 C175 70, 165 120, 135 145 C105 170, 45 165, 20 135"
              stroke="url(#cycloneArm2)"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="100" cy="100" r="16" fill="url(#cycloneEye)" />
          </svg>
        </div>
      )}

      {/* =========================================================================
          3. EARTHQUAKES: Radiating concentric rings + translate-x shake
          ========================================================================= */}
      {hazard === 'earthquake' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center animate-seismic-shake">
          {/* Concentric seismic ripple rings */}
          <div className="pointer-events-none absolute w-24 h-24 rounded-full border-2 border-red-500 animate-seismic-ring" style={{ animationDelay: '0s' }} />
          <div className="pointer-events-none absolute w-24 h-24 rounded-full border-2 border-orange-500 animate-seismic-ring" style={{ animationDelay: '0.7s' }} />
          <div className="pointer-events-none absolute w-24 h-24 rounded-full border-2 border-amber-400 animate-seismic-ring" style={{ animationDelay: '1.4s' }} />

          {/* Fault Line Core */}
          <div className="pointer-events-none relative w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow-[0_0_15px_rgba(239,68,68,0.9)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
        </div>
      )}

      {/* =========================================================================
          4. RAINFALL: Dense fast-falling blue vertical dashes
          ========================================================================= */}
      {hazard === 'rainfall' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          <div className="pointer-events-none absolute inset-0 bg-blue-950/20 rounded-full" />
          {denseRainDashes.map((d) => (
            <div
              key={`dense-rain-${d.id}`}
              className="pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-sky-400 via-blue-500 to-transparent animate-dense-rain"
              style={{
                left: d.left,
                height: d.height,
                animationDelay: d.delay,
                opacity: d.opacity
              }}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          5. THUNDERSTORMS: Rain animation + random full-screen white flashes
          ========================================================================= */}
      {hazard === 'thunderstorm' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          {/* Semi-transparent white overlay flashing randomly */}
          <div className="pointer-events-none absolute inset-0 bg-white/75 animate-lightning-strobe rounded-full" />

          {/* Fast downward diagonal rain dashes */}
          <div className="pointer-events-none absolute inset-0">
            {thunderstormDashes.map((d) => (
              <div
                key={`thunder-d-${d.id}`}
                className="pointer-events-none absolute w-[1.5px] bg-gradient-to-b from-sky-200 to-transparent animate-rain-dash"
                style={{
                  left: d.left,
                  height: d.height,
                  animationDelay: d.delay,
                  opacity: d.opacity
                }}
              />
            ))}
          </div>

          {/* Core Electric Bolt Accent */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
            <svg className="w-20 h-28 text-amber-300 animate-pulse drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h7v8l10-12h-7l3-8z" />
            </svg>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. HAILSTORMS: Fast-falling white dots of varying sizes
          ========================================================================= */}
      {hazard === 'hailstorm' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          {hailDots.map((h) => (
            <div
              key={`hail-${h.id}`}
              className="pointer-events-none absolute rounded-full bg-white animate-hail-dot"
              style={{
                left: h.left,
                width: h.size,
                height: h.size,
                boxShadow: '0 0 4px #ffffff',
                animationDelay: h.delay
              }}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          7. FLOODS: Horizontally translating layered blue SVG waves at bottom
          ========================================================================= */}
      {hazard === 'flood' && (
        <div className="pointer-events-none relative w-full h-full flex flex-col justify-end">
          {/* Water ambient pool */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/40 via-cyan-950/20 to-transparent rounded-full" />

          {/* Layered Horizontal Translating Waves at Bottom */}
          <div className="pointer-events-none relative w-full h-24 overflow-hidden rounded-b-full">
            {/* Wave Layer 1 (Slow) */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[200%] h-16 flex animate-flood-wave-slow opacity-75">
              <svg className="w-1/2 h-full text-blue-600" viewBox="0 0 400 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,40 C100,80 200,0 300,50 C350,75 380,60 400,45 L400,100 L0,100 Z" />
              </svg>
              <svg className="w-1/2 h-full text-blue-600" viewBox="0 0 400 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,40 C100,80 200,0 300,50 C350,75 380,60 400,45 L400,100 L0,100 Z" />
              </svg>
            </div>

            {/* Wave Layer 2 (Counter/Mid) */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[200%] h-14 flex animate-flood-wave-mid opacity-60">
              <svg className="w-1/2 h-full text-cyan-400" viewBox="0 0 400 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,50 C80,10 180,70 280,30 C340,10 380,50 400,35 L400,100 L0,100 Z" />
              </svg>
              <svg className="w-1/2 h-full text-cyan-400" viewBox="0 0 400 100" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,50 C80,10 180,70 280,30 C340,10 380,50 400,35 L400,100 L0,100 Z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          8. DROUGHT: Static semi-transparent brown cracked texture overlay
          ========================================================================= */}
      {hazard === 'drought' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center animate-drought-pulse">
          {/* Parched warm brown background */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(120, 53, 15, 0.45) 0%, rgba(180, 83, 9, 0.25) 55%, transparent 85%)'
            }}
          />

          {/* High-Contrast Cracked Earth SVG Texture Overlay */}
          <svg
            className="pointer-events-none absolute w-[80%] h-[80%] opacity-75"
            viewBox="0 0 200 200"
            fill="none"
            stroke="#92400e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Fissure Network */}
            <path d="M100 15 L95 55 L75 80 L80 120 L65 145 L70 185" />
            <path d="M95 55 L135 65 L160 95 L145 130 L165 160" />
            <path d="M75 80 L40 90 L25 125 L45 155" />
            <path d="M80 120 L115 135 L125 175 L105 190" />
            <path d="M135 65 L120 30 L140 15" />
            <path d="M160 95 L190 105" />
            <path d="M40 90 L15 80" />
            <path d="M145 130 L185 140" />
            <path d="M65 145 L35 170" />
            <path d="M115 135 L85 160" />
          </svg>

          {/* Arid sun core */}
          <div className="pointer-events-none w-20 h-20 rounded-full border border-amber-600/40 bg-amber-500/10" />
        </div>
      )}

      {/* =========================================================================
          9. HEAT WAVES: Wavy CSS backdrop-filter blur/contrast + distortion
          ========================================================================= */}
      {hazard === 'heatwave' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center">
          {/* Localized CSS backdrop-filter: blur(2px) contrast(1.2) */}
          <div
            className="pointer-events-none absolute w-[85%] h-[85%] rounded-full animate-heat-shimmer"
            style={{
              backdropFilter: 'blur(2px) contrast(1.2)',
              WebkitBackdropFilter: 'blur(2px) contrast(1.2)',
              background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(239,68,68,0.15) 50%, transparent 80%)'
            }}
          />

          {/* Radiant Solar Convective Core */}
          <div className="pointer-events-none w-32 h-32 rounded-full border border-orange-400/40 animate-ping" style={{ animationDuration: '2.5s' }} />
        </div>
      )}

      {/* =========================================================================
          10. LIGHTNING: Quick isolated yellow flashes without rain
          ========================================================================= */}
      {hazard === 'lightning' && (
        <div className="pointer-events-none relative w-full h-full flex items-center justify-center">
          {/* Yellow Strobe Flash */}
          <div className="pointer-events-none absolute inset-0 bg-yellow-400/40 animate-lightning-bolt-strobe rounded-full" />

          {/* Electric Bolt SVG Centerpiece */}
          <svg
            className="pointer-events-none w-24 h-36 text-yellow-300 animate-lightning-bolt-strobe drop-shadow-[0_0_24px_rgba(250,204,21,1)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 2L3 14h7v8l10-12h-7l3-8z" />
          </svg>
        </div>
      )}

      {/* =========================================================================
          11. SNOWFALLS: Soft white blurred circles dropping with gentle horizontal sway
          ========================================================================= */}
      {hazard === 'snowfall' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          <div className="pointer-events-none absolute inset-0 bg-sky-950/20 rounded-full" />
          {snowCircles.map((s) => (
            <div
              key={`snow-sway-${s.id}`}
              className="pointer-events-none absolute rounded-full bg-white/95 animate-snow-sway"
              style={{
                left: s.left,
                width: s.size,
                height: s.size,
                filter: `blur(${s.blur})`,
                animationDelay: s.delay,
                '--snow-duration': s.duration,
                '--snow-opacity': s.opacity
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          12. AVALANCHES: Heavy white & light-blue blocks crashing down steep diagonal
          ========================================================================= */}
      {hazard === 'avalanche' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          {/* Cold mountain slope gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/40 via-sky-950/25 to-blue-900/30 rounded-full" />

          {/* Aggressive crashing snow and ice blocks */}
          {avalancheBlocks.map((b) => (
            <div
              key={`avalanche-${b.id}`}
              className="pointer-events-none absolute animate-avalanche-crash shadow-lg"
              style={{
                left: b.startLeft,
                top: '-5%',
                width: `${b.width}px`,
                height: `${b.height}px`,
                backgroundColor: b.color,
                borderRadius: b.borderRadius,
                animationDelay: b.delay,
                '--avalanche-duration': b.duration
              } as React.CSSProperties}
            />
          ))}

          {/* Snow Dust Cloud Accumulating at the Bottom */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/60 via-sky-100/40 to-transparent blur-md animate-avalanche-cloud" />
          <div className="pointer-events-none absolute bottom-2 left-6 right-6 h-8 bg-white/80 rounded-full blur-sm" />
        </div>
      )}

      {/* =========================================================================
          13. LANDSLIDES: Irregular earth rock particles sliding diagonally
          ========================================================================= */}
      {hazard === 'landslide' && (
        <div className="pointer-events-none relative w-full h-full overflow-hidden rounded-full">
          <div className="pointer-events-none absolute inset-0 bg-stone-950/20 rounded-full" />
          {landslideBlocks.map((b) => (
            <div
              key={`rock-${b.id}`}
              className="pointer-events-none absolute animate-landslide-diagonal shadow-md"
              style={{
                left: b.startLeft,
                top: '0%',
                width: b.width,
                height: b.height,
                backgroundColor: b.color,
                borderRadius: b.borderRadius,
                animationDelay: b.delay,
                '--slide-duration': b.duration,
                '--slide-drift-x': b.driftX,
                '--slide-rotation': b.rotation
              } as React.CSSProperties}
            />
          ))}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-stone-900/40 to-transparent blur-xs" />
        </div>
      )}
    </div>
  );
};

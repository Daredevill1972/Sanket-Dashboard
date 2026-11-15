'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const DashboardApp = dynamic(
  () => import('../App').then((mod) => mod.App),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-screen bg-[#0a0f1d] flex flex-col items-center justify-center text-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/image_10.png"
            alt="SANकेत Logo"
            className="h-16 w-auto object-contain animate-pulse"
          />
          <h1 className="text-3xl font-black tracking-wider text-white">
            SAN<span className="text-red-500 font-devanagari">केत</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Connecting to Indian Early Warning &amp; NDMA Response System...</span>
        </div>
      </div>
    ),
  }
);

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#0a0f1d]">
      <DashboardApp />
    </main>
  );
}

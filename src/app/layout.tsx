import type { Metadata } from 'next';
import React from 'react';
import '../src/index.css';
import 'maplibre-gl/dist/maplibre-gl.css';

export const metadata: Metadata = {
  title: 'SANकेत - Live Disaster Alerts',
  description: 'National Disaster Management Authority (NDMA) CAP Early Warning & Multi-Hazard Response System for India',
  icons: {
    icon: '/shield-alert.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.1.0/dist/maplibre-gl.css" />
      </head>
      <body className="bg-[#0a0f1d] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

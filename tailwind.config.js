/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hazard: {
          critical: '#ef4444', // Red
          severe: '#f97316',   // Orange
          moderate: '#eab308', // Yellow
          minor: '#3b82f6',    // Blue
          advisory: '#10b981'  // Green
        },
        tactical: {
          bg: '#0a0f1d',
          card: '#111827',
          border: '#1f2937',
          accent: '#0284c7'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}


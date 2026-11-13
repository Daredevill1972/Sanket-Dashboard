import React, { useState } from 'react';
import { CapAlert } from '../types/cap';
import { parseCapXml } from '../services/capParser';
import { offlineDB } from '../services/indexedDB';
import {
  ALL_SAMPLE_CAP_FEEDS,
  SAMPLE_FOREST_FIRE_FSI_XML,
  SAMPLE_CYCLONE_CAP_XML,
  SAMPLE_DGRE_LANDSLIDE_XML,
  SAMPLE_EARTHQUAKE_CAP_XML,
  SAMPLE_FLOOD_CAP_XML,
  SAMPLE_LANDSLIDE_CAP_XML,
  SAMPLE_HEATWAVE_CAP_XML,
  SAMPLE_MUMBAI_SURGE_XML
} from '../data/mockCapFeeds';
import {
  X,
  FileCode,
  Upload,
  Globe,
  CheckCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface CapIngestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAlertsIngested: (newAlerts: CapAlert[]) => void;
}

export const CapIngestionModal: React.FC<CapIngestionModalProps> = ({
  isOpen,
  onClose,
  onAlertsIngested
}) => {
  const [xmlInput, setXmlInput] = useState('');
  const [feedUrl, setFeedUrl] = useState('');
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parsePreview, setParsePreview] = useState<CapAlert[] | null>(null);

  if (!isOpen) return null;

  const handlePreviewXml = (xml: string) => {
    setXmlInput(xml);
    setParseError(null);
    if (!xml.trim()) {
      setParsePreview(null);
      return;
    }

    try {
      const parsed = parseCapXml(xml);
      setParsePreview(parsed);
    } catch (err: any) {
      setParseError(err.message || 'Invalid CAP XML syntax');
      setParsePreview(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      handlePreviewXml(content);
    };
    reader.readAsText(file);
  };

  const handleFetchUrl = async () => {
    if (!feedUrl) return;
    setIsLoadingUrl(true);
    setParseError(null);

    try {
      // In web browsers, many external URLs require CORS. We attempt direct fetch first, then CORS proxy.
      let response: Response;
      try {
        response = await fetch(feedUrl);
      } catch (e) {
        // Fallback to public CORS proxy
        response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`);
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to retrieve feed`);
      }

      const text = await response.text();
      handlePreviewXml(text);
    } catch (err: any) {
      setParseError(`Could not fetch URL: ${err.message}. Please paste raw CAP XML directly.`);
    } finally {
      setIsLoadingUrl(false);
    }
  };

  const handleCommitIngestion = async () => {
    if (!parsePreview || parsePreview.length === 0) return;

    // Cache to IndexedDB for offline persistence
    await offlineDB.cacheCapAlerts(parsePreview);

    onAlertsIngested(parsePreview);
    onClose();
  };

  const handleLoadSample = (sampleXml: string) => {
    handlePreviewXml(sampleXml);
  };

  const handleLoadAllSamples = async () => {
    const allAlerts: CapAlert[] = [];
    ALL_SAMPLE_CAP_FEEDS.forEach((xml) => {
      try {
        const parsed = parseCapXml(xml);
        allAlerts.push(...parsed);
      } catch (err) {}
    });

    await offlineDB.cacheCapAlerts(allAlerts);
    onAlertsIngested(allAlerts);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyan-600/20 border border-cyan-500/40 rounded-lg text-cyan-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-wide">
                NDMA CAP Feed Ingestion Engine
              </h2>
              <p className="text-xs text-slate-400">
                OASIS CAP v1.1 & v1.2 Standard • SACHET India XML / GeoJSON Parser
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-4 overflow-y-auto space-y-4 text-xs text-slate-200">
          {/* Quick presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Quick Load Official NDMA Preset Scenarios:
              </span>
              <button
                onClick={handleLoadAllSamples}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> Ingest All 5 Scenarios
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleLoadSample(SAMPLE_FOREST_FIRE_FSI_XML)}
                className="px-2.5 py-1.5 rounded bg-orange-950/60 border border-orange-500/50 text-orange-200 hover:bg-orange-900/80 transition flex items-center gap-1 font-semibold"
              >
                🔥 FSI Forest Fire (Similipal)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_CYCLONE_CAP_XML)}
                className="px-2.5 py-1.5 rounded bg-sky-950/50 border border-sky-500/50 text-sky-200 hover:bg-sky-900/70 transition flex items-center gap-1 font-semibold"
              >
                🌪️ Cyclone 'Varuna' (Odisha/AP)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_DGRE_LANDSLIDE_XML)}
                className="px-2.5 py-1.5 rounded bg-amber-950/60 border border-amber-500/50 text-amber-200 hover:bg-amber-900/80 transition flex items-center gap-1 font-semibold"
              >
                ⛰️ DGRE Landslide (NH-44 J&amp;K)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_EARTHQUAKE_CAP_XML)}
                className="px-2.5 py-1.5 rounded bg-red-950/60 border border-red-500/50 text-red-200 hover:bg-red-900/80 transition flex items-center gap-1 font-semibold"
              >
                ⚡ M6.4 Earthquake (Chamoli Fault)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_FLOOD_CAP_XML)}
                className="px-2.5 py-1.5 rounded bg-blue-950/40 border border-blue-500/40 text-blue-200 hover:bg-blue-900/60 transition"
              >
                🌊 Brahmaputra Flood (Assam)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_LANDSLIDE_CAP_XML)}
                className="px-2.5 py-1.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-200 hover:bg-amber-900/60 transition"
              >
                ⛰️ Mandi Landslide (Himachal)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_HEATWAVE_CAP_XML)}
                className="px-2.5 py-1.5 rounded bg-orange-950/40 border border-orange-500/40 text-orange-200 hover:bg-orange-900/60 transition"
              >
                ☀️ 48.5°C Heatwave (Rajasthan)
              </button>
              <button
                onClick={() => handleLoadSample(SAMPLE_MUMBAI_SURGE_XML)}
                className="px-2.5 py-1.5 rounded bg-yellow-950/40 border border-yellow-500/40 text-yellow-200 hover:bg-yellow-900/60 transition"
              >
                🌊 High Spring Tide (Mumbai)
              </button>
            </div>
          </div>

          {/* URL fetch or file upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
            {/* Feed URL */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                Live Feed URL (RSS / CAP Atom)
              </label>
              <div className="flex gap-1.5">
                <input
                  type="url"
                  value={feedUrl}
                  onChange={(e) => setFeedUrl(e.target.value)}
                  placeholder="https://sachet.ndma.gov.in/cap/rss..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500"
                />
                <button
                  onClick={handleFetchUrl}
                  disabled={isLoadingUrl || !feedUrl}
                  className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-semibold rounded text-xs transition"
                >
                  {isLoadingUrl ? 'Fetching...' : 'Fetch'}
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                Upload CAP XML (.xml / .cap)
              </label>
              <input
                type="file"
                accept=".xml,.cap,.txt,.json"
                onChange={handleFileUpload}
                className="w-full text-xs text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-400 hover:file:bg-slate-700 cursor-pointer"
              />
            </div>
          </div>

          {/* Raw XML input textarea */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Paste Raw CAP XML Content:
            </label>
            <textarea
              rows={6}
              value={xmlInput}
              onChange={(e) => handlePreviewXml(e.target.value)}
              placeholder="Paste <alert xmlns='urn:oasis:names:tc:emergency:cap:1.2'> ... </alert>"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 font-mono text-[11px] text-cyan-300 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
            />
          </div>

          {/* Validation Feedback */}
          {parseError && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">XML Parse Failure</p>
                <p className="text-[11px] text-red-200">{parseError}</p>
              </div>
            </div>
          )}

          {parsePreview && parsePreview.length > 0 && (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Successfully Validated {parsePreview.length} Alert(s)
                </span>
                <span className="text-[10px] font-mono text-emerald-300">
                  {parsePreview[0].identifier}
                </span>
              </div>

              {parsePreview.map((alert, i) => (
                <div key={i} className="text-[11px] text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800">
                  <p className="font-bold text-white mb-0.5">{alert.info.headline}</p>
                  <p className="text-slate-400 mb-1">
                    Severity: <strong className="text-red-400">{alert.info.severity}</strong> •
                    Category: <strong>{alert.info.category}</strong> •
                    Polygons: <strong>{alert.info.areas.filter((a) => a.polygon).length}</strong>
                  </p>
                  <p className="text-slate-300 text-[10px] line-clamp-2">
                    {alert.info.areas.map((a) => a.areaDesc).join(' | ')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              setXmlInput('');
              setParsePreview(null);
              setParseError(null);
            }}
            className="px-3 py-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 flex items-center gap-1 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>

          <button
            onClick={handleCommitIngestion}
            disabled={!parsePreview || parsePreview.length === 0}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-950/50 transition"
          >
            <Play className="w-4 h-4 fill-white" />
            Ingest & Render On Map
          </button>
        </div>
      </div>
    </div>
  );
};


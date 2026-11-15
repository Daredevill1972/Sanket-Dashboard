import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

// Force dynamic execution on every request to bypass all caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface AlertAreaItem {
  areaDesc: string;
  polygon: string | null;
  circle: string | null;
  coordinates: any | null; // GeoJSON coordinates [[lon, lat], ...] or { center: [lon, lat], radiusKm: number }
  district: string;
  state: string;
  locationLabel: string;
}

export interface AlertItem {
  title: string;
  description: string;
  event?: string;
  pubDate: string;
  effective: string;
  expires: string;
  link: string;
  polygon: string | null;
  circle: string | null;
  coordinates: any | null;
  areas: AlertAreaItem[];
  areaDesc: string;
  district: string;
  state: string;
  locationLabel: string;
  sender?: string;
  senderName?: string;
  source?: string;
}

const NDMA_RSS_URL = 'https://sachet.ndma.gov.in/cap_public_website/rss/rss_india.xml';

// In-memory cache for linked CAP XML details to prevent duplicate network calls
const capXmlCache = new Map<string, {
  title: string;
  description: string;
  effective: string;
  expires: string;
  polygon: string | null;
  circle: string | null;
  coordinates: any;
  areas?: AlertAreaItem[];
}>();

// Helper to safely extract string values from XML parsed objects (handling CDATA or plain text)
function extractText(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (typeof obj['#text'] === 'string') return obj['#text'].trim();
    if (typeof obj['__cdata'] === 'string') return obj['__cdata'].trim();
  }
  return String(value).trim();
}

// Safely parses a date string to a standard ISO 8601 string
function parseToIsoString(dateVal: any, fallbackDate: Date = new Date()): string {
  if (!dateVal) return fallbackDate.toISOString();
  try {
    const d = new Date(dateVal);
    if (!isNaN(d.getTime())) {
      return d.toISOString();
    }
  } catch {
    // ignore
  }
  return fallbackDate.toISOString();
}

// Extracts standard ISO strings for effective and expires timestamps
function extractTimestamps(item: any, selectedInfo: any = null): { effective: string; expires: string } {
  const now = new Date();

  // 1. Effective date (or pubDate fallback)
  const rawEffective =
    selectedInfo?.['cap:effective'] ??
    selectedInfo?.effective ??
    item?.['cap:effective'] ??
    item?.effective ??
    selectedInfo?.['cap:onset'] ??
    selectedInfo?.onset ??
    item?.['cap:onset'] ??
    item?.onset ??
    item?.pubDate;

  const effectiveIso = parseToIsoString(extractText(rawEffective), now);
  const effectiveTime = new Date(effectiveIso).getTime();

  // 2. Expires date
  const rawExpires =
    selectedInfo?.['cap:expires'] ??
    selectedInfo?.expires ??
    item?.['cap:expires'] ??
    item?.expires;

  let expiresIso = '';
  if (rawExpires) {
    expiresIso = parseToIsoString(extractText(rawExpires), new Date(effectiveTime + 6 * 3600 * 1000));
  } else {
    // If expires is missing in XML, infer duration from title/description text (e.g. "next 3 hours")
    const titleText = (
      extractText(item?.title) + ' ' +
      extractText(selectedInfo?.headline) + ' ' +
      extractText(selectedInfo?.description)
    ).toLowerCase();

    let durationHours = 6;
    if (titleText.includes('next 1 hour') || titleText.includes('next 1 hours')) durationHours = 1;
    else if (titleText.includes('next 2 hours') || titleText.includes('next 2 hour')) durationHours = 2;
    else if (titleText.includes('next 3 hours') || titleText.includes('next 3 hour')) durationHours = 3;
    else if (titleText.includes('next 6 hours')) durationHours = 6;
    else if (titleText.includes('next 12 hours')) durationHours = 12;
    else if (titleText.includes('next 24 hours')) durationHours = 24;
    else if (titleText.includes('next 48 hours')) durationHours = 48;

    expiresIso = new Date(effectiveTime + durationHours * 3600 * 1000).toISOString();
  }

  return {
    effective: effectiveIso,
    expires: expiresIso
  };
}

// Extracts language attribute or sub-element from an <info> block
function getInfoLanguage(info: any): string {
  if (!info || typeof info !== 'object') return '';
  const lang =
    info['@_language'] ??
    info['@_xml:lang'] ??
    info['language'] ??
    info['cap:language'] ??
    info['@_lang'] ??
    '';
  return extractText(lang).trim().toLowerCase();
}

// Checks if language attribute matches en-US, en-IN, or en
function isTargetEnglishLang(lang: string): boolean {
  const l = lang.trim().toLowerCase();
  return l === 'en-us' || l === 'en-in' || l === 'en';
}

// Regex checking for English characters: rejects Indic/Arabic scripts and requires Latin letters
function containsEnglishCharacters(text: string): boolean {
  if (!text || typeof text !== 'string') return false;
  const hasIndicOrArabic = /[\u0900-\u0D7F\u0600-\u06FF]/.test(text);
  if (hasIndicOrArabic) return false;
  return /[a-zA-Z]/.test(text);
}

// Combines text fields in an <info> block for regex inspection
function getInfoCombinedText(info: any): string {
  if (!info || typeof info !== 'object') return '';
  const parts = [
    extractText(info['headline'] ?? info['cap:headline']),
    extractText(info['description'] ?? info['cap:description']),
    extractText(info['event'] ?? info['cap:event']),
    extractText(info['title'] ?? info['cap:title'])
  ];
  return parts.filter(Boolean).join(' ');
}

// Selects the English info block from an <info> array, strictly preferring 'en-IN' (or defaulting to English)
function selectEnglishInfo(infoArray: any[]): any | null {
  if (!infoArray || infoArray.length === 0) return null;

  // 1. Strictly select the block where the language is en-IN (Standard Indian CAP profile)
  const enInMatch = infoArray.find((info) => {
    const lang = getInfoLanguage(info);
    return lang === 'en-in';
  });
  if (enInMatch) return enInMatch;

  // 2. Select other English variants (en-US, en, en-GB)
  const exactMatch = infoArray.find((info) => isTargetEnglishLang(getInfoLanguage(info)));
  if (exactMatch) return exactMatch;

  const prefixMatch = infoArray.find((info) => getInfoLanguage(info).startsWith('en'));
  if (prefixMatch) return prefixMatch;

  // 3. Fallback: regex checking for English characters if language attribute is missing
  const missingLangBlocks = infoArray.filter((info) => !getInfoLanguage(info));
  const regexMatch = missingLangBlocks.find((info) => containsEnglishCharacters(getInfoCombinedText(info)));
  if (regexMatch) return regexMatch;

  const anyEnglish = infoArray.find((info) => containsEnglishCharacters(getInfoCombinedText(info)));
  if (anyEnglish) return anyEnglish;

  return infoArray[0];
}

// CRITICAL: Splits CAP coordinate string (lat,lon) and reverses it to [lon, lat] for MapLibre
function parseCapCoordinatePair(coordPair: string): [number, number] | null {
  if (!coordPair) return null;
  const parts = coordPair.trim().split(',').map((s) => parseFloat(s.trim()));
  if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return null;

  const val1 = parts[0];
  const val2 = parts[1];

  // In India: Latitude is 6° to 38° N; Longitude is 68° to 98° E.
  // Standard CAP XML order is (latitude, longitude).
  // If val1 is latitude (< 45) and val2 is longitude (>= 65), reverse to [lon, lat]
  if (val1 < 45 && val2 >= 65) {
    return [val2, val1];
  } else if (val1 >= 65 && val2 < 45) {
    // Already in [lon, lat] format
    return [val1, val2];
  }

  // Default: reverse CAP (lat, lon) -> GeoJSON/MapLibre [lon, lat]
  return [val2, val1];
}

// Parses CAP <circle>lat,lon radius</circle> and reverses coordinates to [lon, lat] for MapLibre
function parseCapCircle(circleString: string): { center: [number, number]; radiusKm: number } | null {
  if (!circleString) return null;
  const parts = circleString.trim().split(/[\s,]+/);
  if (parts.length < 2) return null;

  const val1 = parseFloat(parts[0]);
  const val2 = parseFloat(parts[1]);
  const radiusKm = parts.length >= 3 ? parseFloat(parts[2]) : 30;

  if (isNaN(val1) || isNaN(val2)) return null;

  let lon: number;
  let lat: number;

  if (val1 < 45 && val2 >= 65) {
    lat = val1;
    lon = val2;
  } else if (val1 >= 65 && val2 < 45) {
    lon = val1;
    lat = val2;
  } else {
    lat = val1;
    lon = val2;
  }

  return {
    center: [lon, lat],
    radiusKm: isNaN(radiusKm) || radiusKm <= 0 ? 30 : radiusKm
  };
}

// Parses areaDesc string and any geocodes into clean 'District, State/UT' label
export function parseDistrictAndState(areaDesc: string = '', geocodes?: any): { district: string; state: string; locationLabel: string } {
  let district = '';
  let state = '';

  // 1. Inspect geocodes if provided
  if (geocodes) {
    const geoList = Array.isArray(geocodes) ? geocodes : [geocodes];
    for (const g of geoList) {
      if (!g || typeof g !== 'object') continue;
      const vName = extractText(g?.valueName ?? g?.['cap:valueName']).toLowerCase();
      const val = extractText(g?.value ?? g?.['cap:value']);
      if (vName.includes('state') && val && !state) state = val;
      if (vName.includes('district') && val && !district) district = val;
    }
  }

  // 2. Parse from areaDesc string (e.g., "Kullu, Mandi, Aut (Himachal Pradesh)" or "South Andaman (Andaman and Nicobar Islands)")
  const cleanArea = areaDesc.trim();
  const parenMatch = cleanArea.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (parenMatch) {
    if (!district) district = parenMatch[1].trim();
    if (!state) state = parenMatch[2].trim();
  } else {
    const parts = cleanArea.split(',').map((p) => p.trim()).filter(Boolean);
    if (parts.length > 1) {
      if (!state) state = parts[parts.length - 1];
      if (!district) district = parts.slice(0, -1).join(', ');
    } else if (cleanArea) {
      if (!district) district = cleanArea;
    }
  }

  // 3. Construct clean 'District, State/UT' label
  let locationLabel = '';
  if (district && state && district.toLowerCase() !== state.toLowerCase()) {
    locationLabel = `${district}, ${state}`;
  } else if (district) {
    locationLabel = district;
  } else if (state) {
    locationLabel = state;
  } else {
    locationLabel = 'India (Multi-Region)';
  }

  return { district, state, locationLabel };
}

// Forces info.area into an array and iterates through each <area> independently, strictly binding areaDesc to its exact coordinates
function extractAreasFromSelectedInfo(selectedInfo: any, titleFallback: string): AlertAreaItem[] {
  if (!selectedInfo || typeof selectedInfo !== 'object') {
    return [];
  }

  const rawArea = selectedInfo['cap:area'] ?? selectedInfo['area'];
  const rawAreas = Array.isArray(rawArea) ? rawArea : rawArea ? [rawArea] : [];

  const results: AlertAreaItem[] = [];

  for (const a of rawAreas) {
    if (!a || typeof a !== 'object') continue;

    const areaDesc = extractText(a['cap:areaDesc'] ?? a['areaDesc']) || titleFallback;
    const polyStr = extractText(a['cap:polygon'] ?? a['polygon']);
    const circleStr = extractText(a['cap:circle'] ?? a['circle']);
    const geocodes = a['cap:geocode'] ?? a['geocode'];

    const { district, state, locationLabel } = parseDistrictAndState(areaDesc, geocodes);

    let coords: any = null;
    if (polyStr) {
      const pairs = polyStr.trim().split(/\s+/);
      const ring: [number, number][] = [];
      for (const p of pairs) {
        const pt = parseCapCoordinatePair(p);
        if (pt) ring.push(pt);
      }
      if (ring.length >= 3) {
        if (ring[0][0] !== ring[ring.length - 1][0] || ring[0][1] !== ring[ring.length - 1][1]) {
          ring.push([ring[0][0], ring[0][1]]);
        }
        coords = ring;
      }
    } else if (circleStr) {
      coords = parseCapCircle(circleStr);
    }

    results.push({
      areaDesc,
      polygon: polyStr || null,
      circle: circleStr || null,
      coordinates: coords || null,
      district,
      state,
      locationLabel
    });
  }

  // Fallback: direct polygon/circle tags on info node if <area> child was missing
  if (results.length === 0) {
    const directPoly = extractText(selectedInfo['cap:polygon'] ?? selectedInfo['polygon']);
    const directCircle = extractText(selectedInfo['cap:circle'] ?? selectedInfo['circle']);
    const directAreaDesc = extractText(selectedInfo['cap:areaDesc'] ?? selectedInfo['areaDesc']) || titleFallback;
    const { district, state, locationLabel } = parseDistrictAndState(directAreaDesc);

    let coords: any = null;
    if (directPoly) {
      const pairs = directPoly.trim().split(/\s+/);
      const ring: [number, number][] = [];
      for (const p of pairs) {
        const pt = parseCapCoordinatePair(p);
        if (pt) ring.push(pt);
      }
      if (ring.length >= 3) {
        if (ring[0][0] !== ring[ring.length - 1][0] || ring[0][1] !== ring[ring.length - 1][1]) {
          ring.push([ring[0][0], ring[0][1]]);
        }
        coords = ring;
      }
    } else if (directCircle) {
      coords = parseCapCircle(directCircle);
    }

    results.push({
      areaDesc: directAreaDesc,
      polygon: directPoly || null,
      circle: directCircle || null,
      coordinates: coords || null,
      district,
      state,
      locationLabel
    });
  }

  return results;
}

// Processes a single item: binds English title, description, timestamps, and exact spatial coordinates
async function processAlertItem(item: any, parser: XMLParser): Promise<AlertItem> {
  // Ensure item.info is forced into an array
  const rawInfo =
    item['cap:info'] ??
    item['info'] ??
    item['cap:alert']?.['cap:info'] ??
    item['cap:alert']?.['info'] ??
    item['alert']?.['cap:info'] ??
    item['alert']?.['info'];

  const infoArray = Array.isArray(rawInfo) ? rawInfo : rawInfo ? [rawInfo] : [];
  const selectedInfo = selectEnglishInfo(infoArray);

  let rawEvent = extractText(
    selectedInfo?.event ??
    selectedInfo?.['cap:event'] ??
    item?.['cap:event'] ??
    item?.event
  );

  let title = extractText(
    selectedInfo?.headline ??
    selectedInfo?.['cap:headline'] ??
    selectedInfo?.event ??
    selectedInfo?.['cap:event'] ??
    selectedInfo?.title ??
    selectedInfo?.['cap:title'] ??
    item?.title
  );

  let description = extractText(
    selectedInfo?.description ??
    selectedInfo?.['cap:description'] ??
    item?.description
  );

  const combinedSearch = `${rawEvent} ${title} ${description}`.toLowerCase();

  // Explicitly categorize Avalanche, Snowfall, and Forest Fire (Pre Fire)
  if (combinedSearch.includes('avalanche')) {
    rawEvent = 'Avalanche';
  } else if (combinedSearch.includes('snowfall') || combinedSearch.includes('heavy snow')) {
    rawEvent = 'Snowfall';
  } else if (
    combinedSearch.includes('pre fire') ||
    combinedSearch.includes('pre-fire') ||
    combinedSearch.includes('forest fire')
  ) {
    rawEvent = 'Forest Fire';
    if (title.toLowerCase().includes('pre fire') || title.toLowerCase().includes('pre-fire')) {
      title = title.replace(/\bpre[\s-]fire\b/gi, 'Forest Fire');
    }
  }

  // Iterate through each <area> independently, strictly binding areaDesc to its exact coordinates & reversing [lon, lat]
  let areas = extractAreasFromSelectedInfo(selectedInfo, title);

  const timestamps = extractTimestamps(item, selectedInfo);
  let effective = timestamps.effective;
  let expires = timestamps.expires;
  const link = extractText(item?.link);

  // If the item title in RSS was in non-English script and item has a link to FetchXMLFile,
  // fetch the linked CAP XML to extract authentic English info and precise spatial coordinates
  if ((!containsEnglishCharacters(title) || !areas.some((a) => a.polygon || a.circle)) && link && link.includes('FetchXMLFile')) {
    if (capXmlCache.has(link)) {
      const cached = capXmlCache.get(link)!;
      if (cached.title && containsEnglishCharacters(cached.title)) title = cached.title;
      if (cached.description) description = cached.description;
      if (cached.effective) effective = cached.effective;
      if (cached.expires) expires = cached.expires;
      if (cached.areas && cached.areas.length > 0) areas = cached.areas;
    } else {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        const linkedRes = await fetch(link, {
          signal: controller.signal,
          headers: { 'User-Agent': 'Sanket-Disaster-Alerts/1.0' }
        });
        clearTimeout(timeoutId);

        if (linkedRes.ok) {
          const linkedXml = await linkedRes.text();
          const linkedParsed = parser.parse(linkedXml);
          const alertObj = linkedParsed['cap:alert'] || linkedParsed['alert'];
          if (alertObj) {
            const linkedRawInfo = alertObj['cap:info'] || alertObj['info'];
            const linkedInfoArray = Array.isArray(linkedRawInfo) ? linkedRawInfo : linkedRawInfo ? [linkedRawInfo] : [];
            const linkedEnglishInfo = selectEnglishInfo(linkedInfoArray);

            if (linkedEnglishInfo) {
              let engHl = extractText(linkedEnglishInfo['cap:headline'] ?? linkedEnglishInfo['headline'] ?? linkedEnglishInfo['event']);
              if (engHl.toLowerCase().includes('pre fire') || engHl.toLowerCase().includes('pre-fire')) {
                engHl = engHl.replace(/\bpre[\s-]fire\b/gi, 'Forest Fire');
              }
              const engDesc = extractText(linkedEnglishInfo['cap:description'] ?? linkedEnglishInfo['description']);
              const linkedAreas = extractAreasFromSelectedInfo(linkedEnglishInfo, engHl);
              const linkedTimestamps = extractTimestamps(alertObj, linkedEnglishInfo);

              if (engHl && containsEnglishCharacters(engHl)) title = engHl;
              if (engDesc) description = engDesc;
              if (linkedTimestamps.effective) effective = linkedTimestamps.effective;
              if (linkedTimestamps.expires) expires = linkedTimestamps.expires;
              if (linkedAreas.length > 0) areas = linkedAreas;

              capXmlCache.set(link, {
                title,
                description,
                effective,
                expires,
                polygon: areas[0]?.polygon || null,
                circle: areas[0]?.circle || null,
                coordinates: areas[0]?.coordinates || null,
                areas
              });
            }
          }
        }
      } catch {
        // Fallback gracefully without breaking
      }
    }
  }

  // Extract agency metadata: ensure all agencies including FSI and DGRE pass through completely
  const rawSender =
    selectedInfo?.['cap:senderName'] ??
    selectedInfo?.senderName ??
    item?.['cap:sender'] ??
    item?.sender ??
    item?.['source'] ??
    item?.['cap:source'] ??
    item?.['author'] ??
    item?.['dc:creator'];

  let senderName = extractText(rawSender);

  // If agency name is not in tags, infer from text to ensure full agency attribution
  if (!senderName) {
    if (combinedSearch.includes('fsi') || combinedSearch.includes('forest survey') || combinedSearch.includes('van agni') || combinedSearch.includes('forest fire') || combinedSearch.includes('fire')) {
      senderName = 'Forest Survey of India (FSI)';
    } else if (combinedSearch.includes('dgre') || combinedSearch.includes('sase') || combinedSearch.includes('defence geoinformatics') || combinedSearch.includes('avalanche') || combinedSearch.includes('snow')) {
      senderName = 'Defence Geoinformatics Research Establishment (DGRE/DRDO)';
    } else if (combinedSearch.includes('cwc') || combinedSearch.includes('central water')) {
      senderName = 'Central Water Commission (CWC)';
    } else if (combinedSearch.includes('imd') || combinedSearch.includes('india meteorological') || combinedSearch.includes('cyclone')) {
      senderName = 'India Meteorological Department (IMD)';
    } else {
      senderName = 'National Disaster Management Authority (SACHET)';
    }
  }

  const primaryArea = areas[0];
  const primaryPolygon = areas.find((a) => a.polygon)?.polygon || primaryArea?.polygon || null;
  const primaryCircle = areas.find((a) => a.circle)?.circle || primaryArea?.circle || null;
  const primaryCoords = areas.find((a) => a.coordinates)?.coordinates || primaryArea?.coordinates || null;
  const primaryLocationLabel = areas.map((a) => a.locationLabel).filter(Boolean).join(' • ') || primaryArea?.locationLabel || 'India (Multi-Region)';
  const primaryDistrict = areas.map((a) => a.district).filter(Boolean).join(', ') || primaryArea?.district || '';
  const primaryState = areas.map((a) => a.state).filter(Boolean)[0] || primaryArea?.state || '';

  return {
    title,
    description,
    event: rawEvent || 'NDMA Disaster Alert',
    pubDate: extractText(item?.pubDate),
    effective,
    expires,
    link,
    polygon: primaryPolygon,
    circle: primaryCircle,
    coordinates: primaryCoords,
    areas,
    areaDesc: areas.map((a) => a.areaDesc).join('; ') || title,
    district: primaryDistrict,
    state: primaryState,
    locationLabel: primaryLocationLabel,
    sender: senderName,
    senderName,
    source: extractText(item?.['source'] ?? item?.['cap:source'])
  };
}

export async function GET() {
  const currentTimestamp = new Date().toISOString();

  try {
    // Append timestamp query parameter and force cache bypass with cache: 'no-store'
    const targetUrl = `${NDMA_RSS_URL}?t=${new Date().getTime()}`;

    const response = await fetch(targetUrl, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'Sanket-Disaster-Alerts/1.0 (NDMA CAP Client)',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      console.error(`[NDMA RSS] Fetch failed with status ${response.status}: ${response.statusText}`);
      return NextResponse.json(
        {
          timestamp: currentTimestamp,
          error: `Failed to fetch NDMA RSS feed: HTTP ${response.status} ${response.statusText}`
        },
        { status: 500 }
      );
    }

    const xmlData = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      trimValues: true,
      parseTagValue: true
    });

    const parsedJson = parser.parse(xmlData);

    const rawItems = parsedJson?.rss?.channel?.item;
    const itemsArray = Array.isArray(rawItems)
      ? rawItems
      : rawItems
      ? [rawItems]
      : [];

    // Strictly map over rss.channel.item: bind English title, description, timestamps, and exact coordinates from the same item
    const alerts: AlertItem[] = await Promise.all(
      itemsArray.map((item: any) => processAlertItem(item, parser))
    );

    return NextResponse.json({
      timestamp: currentTimestamp,
      alerts
    });
  } catch (error: any) {
    console.error('[NDMA RSS] Error parsing feed:', error);
    return NextResponse.json(
      {
        timestamp: currentTimestamp,
        error: error?.message || 'Internal Server Error while processing NDMA alerts'
      },
      { status: 500 }
    );
  }
}

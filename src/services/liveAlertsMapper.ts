import { CapAlert, AlertSeverity, AlertUrgency, CapArea } from '../types/cap';
import { circleToPolygon, parseCapPolygon, getSeverityColor } from './capParser';

export interface RawLiveArea {
  areaDesc: string;
  polygon: string | null;
  circle: string | null;
  coordinates: any | null;
  district?: string;
  state?: string;
  locationLabel?: string;
}

export interface RawLiveAlert {
  title: string;
  description: string;
  event?: string;
  pubDate: string;
  link: string;
  effective?: string;
  expires?: string;
  polygon?: string | null;
  circle?: string | null;
  coordinates?: any | null;
  areas?: RawLiveArea[];
  areaDesc?: string;
  district?: string;
  state?: string;
  locationLabel?: string;
  sender?: string;
  senderName?: string;
  source?: string;
  category?: string;
}

// Comprehensive registry of Indian districts, regions, and states with coordinates [lat, lon]
const INDIA_LOCATIONS: Record<string, [number, number]> = {
  // Rajasthan Districts
  jaipur: [26.9124, 75.7873],
  jodhpur: [26.2389, 73.0243],
  bikaner: [28.0229, 73.3119],
  barmer: [25.7521, 71.3967],
  jaisalmer: [26.9157, 70.9083],
  udaipur: [24.5854, 73.7125],
  kota: [25.2138, 75.8648],
  ajmer: [26.4499, 74.6399],
  alwar: [27.5530, 76.6346],
  sikar: [27.6094, 75.1398],
  bharatpur: [27.2152, 77.5030],
  bhilwara: [25.3407, 74.6313],
  chittorgarh: [24.8887, 74.6269],
  churu: [28.2900, 74.9600],
  dholpur: [26.7025, 77.8934],
  dungarpur: [23.8432, 73.7147],
  hanumangarh: [29.5817, 74.3294],
  ganganagar: [29.9038, 73.8772],
  sriganganagar: [29.9038, 73.8772],
  jalore: [25.3444, 72.6155],
  jhalawar: [24.5973, 76.1610],
  jhunjhunu: [28.1289, 75.3995],
  karauli: [26.4950, 77.0200],
  nagaur: [27.2070, 73.7423],
  pali: [25.7713, 73.3234],
  pratapgarh: [24.0320, 74.7813],
  rajsamand: [25.0744, 73.8820],
  sawaimadhopur: [25.9928, 76.3526],
  sirohi: [24.8826, 72.8589],
  tonk: [26.1664, 75.7885],
  rajasthan: [27.0238, 74.2179],

  // West Bengal Districts
  kolkata: [22.5726, 88.3639],
  calcutta: [22.5726, 88.3639],
  howrah: [22.5958, 88.2636],
  malda: [25.0108, 88.1411],
  maldah: [25.0108, 88.1411],
  nadia: [23.4710, 88.5565],
  darjeeling: [27.0410, 88.2663],
  kalimpong: [27.0667, 88.4667],
  jalpaiguri: [26.5400, 88.7200],
  alipurduar: [26.4900, 89.5300],
  coochbehar: [26.3239, 89.4510],
  north24parganas: [22.7210, 88.4815],
  south24parganas: [22.1352, 88.4016],
  purba: [21.9497, 87.7774],
  purbamedinipur: [21.9497, 87.7774],
  paschimmedinipur: [22.4257, 87.3199],
  medinipur: [22.4257, 87.3199],
  midnapore: [22.4257, 87.3199],
  hooghly: [22.9031, 88.3846],
  bankura: [23.2324, 87.0715],
  purulia: [23.3321, 86.3652],
  birbhum: [23.8400, 87.6200],
  murshidabad: [24.1800, 88.2700],
  uttardinajpur: [25.6200, 88.1200],
  dakshindinajpur: [25.2200, 88.7600],
  dinajpur: [25.4200, 88.4400],
  westbengal: [22.9868, 87.8550],
  bengal: [22.9868, 87.8550],
  // Tamil Nadu
  kanniyakumari: [8.0883, 77.5385],
  kanyakumari: [8.0883, 77.5385],
  tirunelveli: [8.7139, 77.7567],
  thoothukudi: [8.7642, 78.1348],
  tuticorin: [8.7642, 78.1348],
  chennai: [13.0827, 80.2707],
  madurai: [9.9252, 78.1198],
  coimbatore: [11.0168, 76.9558],
  nilgiris: [11.4916, 76.7337],
  thanjavur: [10.7870, 79.1378],
  cuddalore: [11.7480, 79.7714],
  nagapattinam: [10.7672, 79.8438],
  ramanathapuram: [9.3639, 78.8395],
  vellore: [12.9165, 79.1325],
  salem: [11.6643, 78.1460],
  tiruchirappalli: [10.7905, 78.7047],
  trichy: [10.7905, 78.7047],
  dindigul: [10.3673, 77.9803],
  theni: [10.0104, 77.4768],

  // Jammu & Kashmir & Ladakh
  bandipora: [34.4224, 74.6436],
  kupwara: [34.5262, 74.2546],
  srinagar: [34.0837, 74.7973],
  baramulla: [34.2093, 74.3436],
  anantnag: [33.7311, 75.1524],
  ganderbal: [34.2165, 74.7818],
  budgam: [34.0150, 74.7170],
  pulwama: [33.8718, 74.8955],
  shopian: [33.7200, 74.8300],
  kulgam: [33.6400, 75.0200],
  doda: [33.1400, 75.5400],
  ramban: [33.2400, 75.2400],
  kishtwar: [33.3100, 75.7600],
  poonch: [33.7700, 74.1000],
  rajouri: [33.3800, 74.3000],
  jammu: [32.7266, 74.8570],
  udhampur: [32.9200, 75.1300],
  reasi: [33.0800, 74.8300],
  kathua: [32.3700, 75.5200],
  samba: [32.5600, 75.1200],
  leh: [34.1526, 77.5771],
  kargil: [34.5539, 76.1349],

  // Kerala
  wayanad: [11.6854, 76.1320],
  idukki: [9.8500, 76.9700],
  ernakulam: [9.9816, 76.2999],
  kochi: [9.9312, 76.2673],
  thiruvananthapuram: [8.5241, 76.9366],
  kozhikode: [11.2588, 75.7804],
  palakkad: [10.7867, 76.6548],
  alappuzha: [9.4981, 76.3388],
  kottayam: [9.5916, 76.5222],
  thrissur: [10.5276, 76.2144],
  malappuram: [11.0510, 76.0711],
  kannur: [11.8745, 75.3704],
  kasaragod: [12.5102, 74.9852],
  pathanamthitta: [9.2648, 76.7870],
  kollam: [8.8932, 76.6141],

  // Andhra Pradesh & Telangana
  visakhapatnam: [17.6868, 83.2185],
  vizag: [17.6868, 83.2185],
  srikakulam: [18.2949, 83.8938],
  vizianagaram: [18.1166, 83.4116],
  guntur: [16.3067, 80.4365],
  krishna: [16.1875, 81.1389],
  vijayawada: [16.5062, 80.6480],
  eastgodavari: [17.0000, 82.0000],
  westgodavari: [16.7000, 81.3000],
  kurnool: [15.8281, 78.0373],
  anantapur: [14.6819, 77.6006],
  chittoor: [13.2172, 79.1003],
  kadapa: [14.4673, 78.8242],
  nellore: [14.4426, 79.9865],
  hyderabad: [17.3850, 78.4867],
  warangal: [17.9689, 79.5941],
  karimnagar: [18.4386, 79.1288],
  khammam: [17.2473, 80.1514],
  nizamabad: [18.6725, 78.0941],

  // Odisha
  puri: [19.8135, 85.8312],
  ganjam: [19.3800, 84.9900],
  balasore: [21.4934, 86.9135],
  kendrapara: [20.5000, 86.4200],
  jagatsinghpur: [20.2600, 86.1700],
  cuttack: [20.4625, 85.8830],
  bhubaneswar: [20.2961, 85.8245],
  khordha: [20.1800, 85.6200],
  bhadrak: [21.0574, 86.4950],
  mayurbhanj: [21.9200, 86.7200],
  sambalpur: [21.4669, 83.9812],
  koraput: [18.8100, 82.7100],

  // Himachal Pradesh & Uttarakhand
  mandi: [31.7087, 76.9318],
  kullu: [31.9579, 77.1095],
  shimla: [31.1048, 77.1734],
  kangra: [32.0998, 76.2691],
  dharamshala: [32.2190, 76.3234],
  chamba: [32.5534, 76.1258],
  lahaul: [32.5700, 77.0300],
  spiti: [32.2461, 78.0349],
  kinnaur: [31.6500, 78.4700],
  solan: [30.9045, 77.0967],
  sirmaur: [30.5500, 77.3000],
  chamoli: [30.4227, 79.3242],
  uttarkashi: [30.7268, 78.4354],
  rudraprayag: [30.2844, 78.9811],
  tehri: [30.3800, 78.4800],
  dehradun: [30.3165, 78.0322],
  pauri: [30.1500, 78.7800],
  pithoragarh: [29.5800, 80.2200],
  bageshwar: [29.8400, 79.7700],
  almora: [29.5971, 79.6591],
  nainital: [29.3919, 79.4542],
  haridwar: [29.9457, 78.1642],

  // Assam & North-East
  kamrup: [26.1445, 91.7362],
  guwahati: [26.1445, 91.7362],
  majuli: [26.9500, 94.2167],
  dibrugarh: [27.4728, 94.9120],
  cachar: [24.8333, 92.8000],
  barpeta: [26.3219, 91.0047],
  nagaon: [26.3452, 92.6840],
  sonitpur: [26.6528, 92.7926],
  tezpur: [26.6528, 92.7926],
  golaghat: [26.5167, 93.9667],
  jorhat: [26.7509, 94.2037],
  shillong: [25.5788, 91.8933],
  meghalaya: [25.5788, 91.8933],
  imphal: [24.8170, 93.9368],
  manipur: [24.8170, 93.9368],
  aizawl: [23.7271, 92.7176],
  mizoram: [23.7271, 92.7176],
  agartala: [23.8315, 91.2868],
  tripura: [23.8315, 91.2868],
  kohima: [25.6751, 94.1086],
  nagaland: [25.6751, 94.1086],
  itanagar: [27.0844, 93.6053],
  arunachal: [27.0844, 93.6053],

  // Maharashtra & Goa
  mumbai: [19.0760, 72.8777],
  thane: [19.2183, 72.9781],
  palghar: [19.6967, 72.7699],
  raigad: [18.5158, 73.1822],
  ratnagiri: [16.9902, 73.3120],
  sindhudurg: [16.1167, 73.7000],
  pune: [18.5204, 73.8567],
  satara: [17.6805, 73.9997],
  kolhapur: [16.7050, 74.2433],
  nashik: [19.9975, 73.7898],
  nagpur: [21.1458, 79.0882],
  goa: [15.2993, 74.1240],
  panaji: [15.4909, 73.8278],

  // Gujarat
  kutch: [23.7337, 69.8597],
  bhuj: [23.2420, 69.6669],
  rajkot: [22.3039, 70.8022],
  jamnagar: [22.4707, 70.0577],
  porbandar: [21.6417, 69.6293],
  junagadh: [21.5222, 70.4579],
  amreli: [21.6032, 71.2221],
  bhavnagar: [21.7645, 72.1519],
  surat: [21.1702, 72.8311],
  valsad: [20.6100, 72.9300],
  navsari: [20.9500, 72.9200],
  ahmedabad: [23.0225, 72.5714],

  // West Bengal
  sundarbans: [21.9000, 88.5000],
  purba_medinipur: [21.9500, 87.7500],
  paschim_medinipur: [22.4200, 87.3200],
  digha: [21.6266, 87.5074],

  // Delhi & NCR, Punjab, Haryana, UP, Bihar
  delhi: [28.6139, 77.2090],
  newdelhi: [28.6139, 77.2090],
  noida: [28.5355, 77.3910],
  gurugram: [28.4595, 77.0266],
  gurgaon: [28.4595, 77.0266],
  chandigarh: [30.7333, 76.7794],
  amritsar: [31.6340, 74.8723],
  ludhiana: [30.9010, 75.8573],
  patna: [25.5941, 85.1376],
  gaya: [24.7914, 85.0002],
  muzaffarpur: [26.1209, 85.3647],
  bhagalpur: [25.2425, 86.9842],
  lucknow: [26.8467, 80.9462],
  varanasi: [25.3176, 82.9739],
  gorakhpur: [26.7606, 83.3732],
  prayagraj: [25.4358, 81.8463],
  allahabad: [25.4358, 81.8463],
  kanpur: [26.4499, 80.3319],
  agra: [27.1767, 78.0081],
  meerut: [28.9845, 77.7064],

  // Karnataka & States
  bengaluru: [12.9716, 77.5946],
  bangalore: [12.9716, 77.5946],
  mangaluru: [12.9141, 74.8560],
  mangalore: [12.9141, 74.8560],
  udupi: [13.3409, 74.7421],
  uttarakannada: [14.8000, 74.4000],
  kodagu: [12.4244, 75.7382],
  coorg: [12.4244, 75.7382],
  mysuru: [12.2958, 76.6394],
  mysore: [12.2958, 76.6394],

  // Andaman & Nicobar Islands (Indian Ocean / Bay of Bengal)
  andaman: [11.6234, 92.7265],
  nicobar: [9.1500, 92.7500],
  carnicobar: [9.1500, 92.7500],
  portblair: [11.6234, 92.7265],
  diglipur: [13.2667, 92.9833],
  mayabunder: [12.9333, 92.9000],
  rangat: [12.5000, 92.9333],
  havelock: [11.9800, 92.9800],
  neilisland: [11.8333, 93.0500],
  campbellbay: [7.0000, 93.9167],
  greatnicobar: [7.0000, 93.9167],

  // Lakshadweep Islands (Arabian Sea)
  lakshadweep: [10.5667, 72.6417],
  kavaratti: [10.5667, 72.6417],
  agatti: [10.8500, 72.1833],
  minicoy: [8.2833, 73.0500],
  amini: [11.1200, 72.7300],
  andrott: [10.8200, 73.6700],
  kalpeni: [10.0800, 73.6500],

  // Other UTs
  daman: [20.3974, 72.8328],
  diu: [20.7144, 70.9874],
  dadra: [20.1809, 73.0169],
  silvassa: [20.2763, 73.0083],
  puducherry: [11.9416, 79.8083],
  pondicherry: [11.9416, 79.8083],
  karaikal: [10.9254, 79.8380],
  mahe: [11.7000, 75.5300],
  yanam: [16.7300, 82.2100]
};

// State Fallbacks
const STATE_FALLBACKS: Record<string, [number, number]> = {
  andaman: [11.6234, 92.7265],
  andamanandnicobar: [11.6234, 92.7265],
  andamanandnicobarislands: [11.6234, 92.7265],
  nicobar: [9.1500, 92.7500],
  lakshadweep: [10.5667, 72.6417],
  puducherry: [11.9416, 79.8083],
  pondicherry: [11.9416, 79.8083],
  chandigarh: [30.7333, 76.7794],
  daman: [20.3974, 72.8328],
  dadra: [20.1809, 73.0169],
  tamilnadu: [11.1271, 78.6569],
  kerala: [10.8505, 76.2711],
  andhrapradesh: [15.9129, 79.7400],
  telangana: [18.1124, 79.0193],
  odisha: [20.9517, 85.0985],
  orissa: [20.9517, 85.0985],
  karnataka: [15.3173, 75.7139],
  maharashtra: [19.7515, 75.7139],
  gujarat: [22.2587, 71.1924],
  rajasthan: [27.0238, 74.2179],
  himachalpradesh: [31.7433, 77.1202],
  himachal: [31.7433, 77.1202],
  uttarakhand: [30.0668, 79.0193],
  jammu: [33.7782, 76.5762],
  kashmir: [34.0837, 74.7973],
  ladakh: [34.1526, 77.5771],
  assam: [26.2006, 92.9376],
  westbengal: [22.9868, 87.8550],
  bengal: [22.9868, 87.8550],
  bihar: [25.0961, 85.3131],
  uttarpradesh: [26.8467, 80.9462],
  delhi: [28.7041, 77.1025],
  punjab: [31.1471, 75.3412],
  haryana: [29.0588, 76.0856],
  madhyapradesh: [22.9734, 78.6569],
  chhattisgarh: [21.2787, 81.8661],
  jharkhand: [23.6102, 85.2799],
  goa: [15.2993, 74.1240]
};

// Infers event name from live alert title and description text
export function inferEventType(title: string, description: string = ''): string {
  const t = `${title} ${description}`.toLowerCase();
  if (t.includes('forest fire') || t.includes('fire') || t.includes('wildfire') || t.includes('bushfire') || t.includes('fsi') || t.includes('van agni')) {
    return 'Forest Fire Warning';
  }
  if (t.includes('cyclone') || t.includes('cyclonic') || t.includes('depression') || t.includes('deep depression')) {
    return 'Cyclonic Storm / Depression Alert';
  }
  if (t.includes('landslide') || t.includes('mudslide') || t.includes('debris flow') || t.includes('rockfall') || t.includes('slope collapse')) {
    return 'Landslide & Slope Collapse';
  }
  if (t.includes('earthquake') || t.includes('tremor') || t.includes('seismic') || t.includes('quake')) {
    return 'Earthquake / Seismic Alert';
  }
  if (t.includes('avalanche')) return 'Avalanche Warning';
  if (t.includes('lightning') || t.includes('thunderstorm') || t.includes('పిడుగులు') || t.includes('ఉరుములు') || t.includes('ఇంద్ర')) {
    return 'Lightning & Severe Thunderstorm';
  }
  if (t.includes('heavy rain') || t.includes('very heavy rain') || t.includes('downpour')) return 'Heavy Rainfall Alert';
  if (t.includes('flood') || t.includes('inundation') || t.includes('waterlogging')) return 'Flash Flood Warning';
  if (t.includes('heat wave') || t.includes('heatwave') || t.includes('loo')) return 'Severe Heat Wave Advisory';
  if (t.includes('cold wave') || t.includes('coldwave') || t.includes('frost')) return 'Severe Cold Wave Alert';
  if (t.includes('dense fog') || t.includes('fog')) return 'Dense Fog Visibility Hazard';
  if (t.includes('squall') || t.includes('gale') || t.includes('high wind') || t.includes('gusty')) return 'Gale / High Wind Hazard';
  if (t.includes('sea') || t.includes('surge') || t.includes('tide') || t.includes('coastal')) return 'Coastal Storm Surge';
  return 'NDMA Disaster Alert';
}

// Infers alert severity from title
export function inferSeverity(title: string): AlertSeverity {
  const t = title.toLowerCase();
  if (
    t.includes('red alert') ||
    t.includes('very heavy') ||
    t.includes('extreme') ||
    t.includes('high danger') ||
    t.includes('severe cyclonic')
  ) {
    return 'Extreme';
  }
  if (
    t.includes('orange alert') ||
    t.includes('heavy rain') ||
    t.includes('medium danger') ||
    t.includes('severe') ||
    t.includes('avalanche') ||
    t.includes('flash flood')
  ) {
    return 'Severe';
  }
  if (
    t.includes('yellow alert') ||
    t.includes('light to moderate') ||
    t.includes('low danger') ||
    t.includes('thunderstorm') ||
    t.includes('lightning') ||
    t.includes('isolated')
  ) {
    return 'Moderate';
  }
  return 'Moderate';
}

// Infers urgency
export function inferUrgency(title: string): AlertUrgency {
  const t = title.toLowerCase();
  if (t.includes('next 3 hours') || t.includes('next 2 hours') || t.includes('immediate') || t.includes('nowcast')) {
    return 'Immediate';
  }
  if (t.includes('next 24 hours') || t.includes('next 12 hours') || t.includes('expected')) {
    return 'Expected';
  }
  return 'Expected';
}

// Extracts area description or district names from title
export function inferAreaDescription(title: string): string {
  // Regex to match "over <districts> in next" or "over <districts> during"
  const overMatch = title.match(/over\s+([^,.\n]+(?:,\s*[^,.\n]+)*)\s+(?:in|during|for|from)/i);
  if (overMatch && overMatch[1]) {
    return overMatch[1].trim();
  }
  const isolatedMatch = title.match(/at\s+isolated\s+places\s+over\s+([^,.\n]+)/i);
  if (isolatedMatch && isolatedMatch[1]) {
    return isolatedMatch[1].trim();
  }
  return 'Indian Subcontinent Sector';
}

// Parses areaDesc string and any geocodes into a clean 'District, State/UT' label
export function parseDistrictAndState(areaDesc: string = '', geocodes?: any): { district: string; state: string; locationLabel: string } {
  let district = '';
  let state = '';

  // 1. Inspect geocodes if provided
  if (geocodes) {
    const geoList = Array.isArray(geocodes) ? geocodes : [geocodes];
    for (const g of geoList) {
      if (!g || typeof g !== 'object') continue;
      const vName = String(g?.valueName ?? g?.['cap:valueName'] ?? '').toLowerCase();
      const val = String(g?.value ?? g?.['cap:value'] ?? '').trim();
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

// Finds matching coordinates for the districts mentioned in title
export function findCoordinatesForTitle(title: string, index = 0): [number, number] {
  const normalized = title.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const words = normalized.split(/\s+/);

  // 1. Direct district match
  for (const [key, coords] of Object.entries(INDIA_LOCATIONS)) {
    if (normalized.includes(key)) {
      // Add slight jitter so overlapping alerts in same district don't cover each other exactly
      const jitterLat = ((index % 5) - 2) * 0.08;
      const jitterLon = (((index * 3) % 5) - 2) * 0.08;
      return [coords[0] + jitterLat, coords[1] + jitterLon];
    }
  }

  // 2. State fallback match
  for (const [key, coords] of Object.entries(STATE_FALLBACKS)) {
    if (normalized.includes(key)) {
      const jitterLat = ((index % 7) - 3) * 0.25;
      const jitterLon = (((index * 2) % 7) - 3) * 0.25;
      return [coords[0] + jitterLat, coords[1] + jitterLon];
    }
  }

  // 3. Fallback spread across Indian subcontinent
  const defaultCenters: [number, number][] = [
    [13.0827, 80.2707], // South
    [19.0760, 72.8777], // West
    [26.1445, 91.7362], // North-East
    [31.1048, 77.1734], // North/Himalayas
    [20.2961, 85.8245], // East Coast
    [23.0225, 72.5714], // Gujarat
    [26.9124, 75.7873], // Central/NW
    [28.6139, 77.2090]  // NCR
  ];

  const center = defaultCenters[index % defaultCenters.length];
  return [center[0] + (Math.sin(index) * 0.4), center[1] + (Math.cos(index) * 0.4)];
}

// Converts live RSS alerts into full CapAlert objects with GeoJSON hazard polygons
export function mapLiveAlertsToCap(rawAlerts: RawLiveAlert[]): CapAlert[] {
  return rawAlerts.map((item, index) => {
    // Extract identifier from link or create consistent unique ID
    let identifier = `NDMA-LIVE-${index + 1}`;
    if (item.link) {
      const idMatch = item.link.match(/identifier=([^&]+)/i);
      if (idMatch && idMatch[1]) {
        identifier = `NDMA-${idMatch[1]}`;
      }
    }

    let event = item.event || inferEventType(item.title, item.description || '');
    // Fix FSI Event Tags: explicitly check for 'Pre Fire' and re-map to 'Forest Fire'
    if (
      event.toLowerCase().includes('pre fire') ||
      event.toLowerCase().includes('pre-fire') ||
      event.toLowerCase() === 'pre fire'
    ) {
      event = 'Forest Fire';
    }
    const severity = inferSeverity(item.title);
    const urgency = inferUrgency(item.title);
    const areaDesc = inferAreaDescription(item.title);

    // Spatial coordinates binding strictly from the exact alert item
    let areas: CapArea[] = [];

    // 0. If item contains pre-parsed independent areas from API
    if (item.areas && Array.isArray(item.areas) && item.areas.length > 0) {
      areas = item.areas
        .map((ar) => {
          let poly: number[][][] | undefined = undefined;
          let circ: { center: [number, number]; radiusKm: number } | undefined = undefined;

          if (ar.coordinates) {
            if (Array.isArray(ar.coordinates) && ar.coordinates.length > 0) {
              if (Array.isArray(ar.coordinates[0])) {
                poly = [ar.coordinates];
                const sumLon = ar.coordinates.reduce((s: number, c: any) => s + c[0], 0) / ar.coordinates.length;
                const sumLat = ar.coordinates.reduce((s: number, c: any) => s + c[1], 0) / ar.coordinates.length;
                circ = { center: [sumLon, sumLat], radiusKm: 30 };
              }
            } else if (ar.coordinates.center) {
              const circObj = ar.coordinates as { center: [number, number]; radiusKm: number };
              circ = circObj;
              poly = [circleToPolygon(circObj.center[1], circObj.center[0], circObj.radiusKm, 32)];
            }
          } else if (ar.polygon) {
            const ring = parseCapPolygon(ar.polygon);
            if (ring && ring.length >= 3) {
              poly = [ring];
              const sumLon = ring.reduce((s, c) => s + c[0], 0) / ring.length;
              const sumLat = ring.reduce((s, c) => s + c[1], 0) / ring.length;
              circ = { center: [sumLon, sumLat], radiusKm: 30 };
            }
          } else if (ar.circle) {
            const parts = ar.circle.trim().split(/[\s,]+/);
            if (parts.length >= 2) {
              const v1 = parseFloat(parts[0]);
              const v2 = parseFloat(parts[1]);
              const radiusKm = parts.length >= 3 ? parseFloat(parts[2]) : 30;
              if (!isNaN(v1) && !isNaN(v2)) {
                let lon = v2;
                let lat = v1;
                if (v1 >= 65 && v2 < 45) {
                  lon = v1;
                  lat = v2;
                }
                circ = { center: [lon, lat], radiusKm: isNaN(radiusKm) ? 30 : radiusKm };
                poly = [circleToPolygon(lat, lon, circ.radiusKm, 32)];
              }
            }
          }

          return {
            areaDesc: ar.areaDesc || areaDesc,
            polygon: poly,
            circle: circ,
            district: ar.district,
            state: ar.state,
            locationLabel: ar.locationLabel || ar.areaDesc || areaDesc
          };
        })
        .filter((a) => a.polygon || a.circle);
    }

    // 1. If alert contains exact spatial polygon, use it directly
    if (areas.length === 0 && item.polygon) {
      const ring = parseCapPolygon(item.polygon);
      if (ring && ring.length >= 3) {
        const sumLat = ring.reduce((s, c) => s + c[1], 0) / ring.length;
        const sumLon = ring.reduce((s, c) => s + c[0], 0) / ring.length;
        areas = [
          {
            areaDesc: item.areaDesc || areaDesc,
            polygon: [ring],
            circle: {
              center: [sumLon, sumLat],
              radiusKm: 30
            },
            district: item.district,
            state: item.state,
            locationLabel: item.locationLabel || item.areaDesc || areaDesc
          }
        ];
      }
    } else if (areas.length === 0 && item.coordinates && Array.isArray(item.coordinates)) {
      if (item.coordinates.length > 0 && Array.isArray(item.coordinates[0])) {
        // Linear ring coordinates [[lon, lat], ...]
        const ring = item.coordinates as [number, number][];
        const sumLat = ring.reduce((s, c) => s + c[1], 0) / ring.length;
        const sumLon = ring.reduce((s, c) => s + c[0], 0) / ring.length;
        areas = [
          {
            areaDesc: item.areaDesc || areaDesc,
            polygon: [ring],
            circle: {
              center: [sumLon, sumLat],
              radiusKm: 30
            },
            district: item.district,
            state: item.state,
            locationLabel: item.locationLabel || item.areaDesc || areaDesc
          }
        ];
      } else if (item.coordinates.length === 2 && typeof item.coordinates[0] === 'number') {
        let [val1, val2] = item.coordinates as [number, number];
        let lon = val1;
        let lat = val2;
        if (val1 < 45 && val2 >= 65) {
          lat = val1;
          lon = val2;
        }
        const radiusKm = severity === 'Extreme' ? 45 : severity === 'Severe' ? 35 : 25;
        areas = [
          {
            areaDesc: item.areaDesc || areaDesc,
            polygon: [circleToPolygon(lat, lon, radiusKm, 32)],
            circle: {
              center: [lon, lat],
              radiusKm
            },
            district: item.district,
            state: item.state,
            locationLabel: item.locationLabel || item.areaDesc || areaDesc
          }
        ];
      }
    } else if (areas.length === 0 && item.circle) {
      const parts = item.circle.trim().split(/[\s,]+/);
      if (parts.length >= 2) {
        const v1 = parseFloat(parts[0]);
        const v2 = parseFloat(parts[1]);
        const radiusKm = parts.length >= 3 ? parseFloat(parts[2]) : 30;
        if (!isNaN(v1) && !isNaN(v2)) {
          let lon = v2;
          let lat = v1;
          if (v1 >= 65 && v2 < 45) {
            lon = v1;
            lat = v2;
          }
          areas = [
            {
              areaDesc: item.areaDesc || areaDesc,
              polygon: [circleToPolygon(lat, lon, isNaN(radiusKm) ? 30 : radiusKm, 32)],
              circle: {
                center: [lon, lat],
                radiusKm: isNaN(radiusKm) ? 30 : radiusKm
              },
              district: item.district,
              state: item.state,
              locationLabel: item.locationLabel || item.areaDesc || areaDesc
            }
          ];
        }
      }
    }

    // 2. Fallback: Lookup coordinates using THIS exact alert's English text
    if (areas.length === 0) {
      const [lat, lon] = findCoordinatesForTitle(item.title, index);
      const radiusKm = severity === 'Extreme' ? 45 : severity === 'Severe' ? 35 : 25;
      const polygonRing = circleToPolygon(lat, lon, radiusKm, 32);

      areas = [
        {
          areaDesc: item.areaDesc || areaDesc,
          polygon: [polygonRing],
          circle: {
            center: [lon, lat],
            radiusKm
          },
          district: item.district,
          state: item.state,
          locationLabel: item.locationLabel || item.areaDesc || areaDesc
        }
      ];
    }

    const effective = item.effective || (item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString());
    const expires = item.expires || new Date(new Date(effective).getTime() + 6 * 3600 * 1000).toISOString();

    const titleAndDesc = `${item.title} ${item.description || ''}`.toLowerCase();

    // Preserve and prioritize authentic agency attribution (FSI, DGRE, CWC, IMD, SDMAs)
    let agencyName = item.senderName || item.sender;
    if (!agencyName) {
      if (titleAndDesc.includes('fsi') || titleAndDesc.includes('forest survey') || titleAndDesc.includes('van agni') || titleAndDesc.includes('forest fire') || titleAndDesc.includes('fire')) {
        agencyName = 'Forest Survey of India (FSI)';
      } else if (titleAndDesc.includes('dgre') || titleAndDesc.includes('sase') || titleAndDesc.includes('defence geoinformatics') || titleAndDesc.includes('avalanche') || titleAndDesc.includes('landslide')) {
        agencyName = 'Defence Geoinformatics Research Establishment (DGRE/DRDO)';
      } else if (titleAndDesc.includes('cwc') || titleAndDesc.includes('central water')) {
        agencyName = 'Central Water Commission (CWC)';
      } else if (titleAndDesc.includes('imd') || titleAndDesc.includes('cyclone') || titleAndDesc.includes('meteorological')) {
        agencyName = 'India Meteorological Department (IMD)';
      } else {
        agencyName = 'National Disaster Management Authority (SACHET)';
      }
    }

    // Contextual safety directives
    let instruction = 'Stay in safe reinforced structures. Follow instructions issued by local district disaster management authorities.';
    if (titleAndDesc.includes('fire') || titleAndDesc.includes('forest fire')) {
      instruction = 'Forest fire warning issued by Forest Survey of India (FSI). Maintain firebreaks, evacuate downwind forest zones, and avoid entering dry canopy areas.';
    } else if (titleAndDesc.includes('cyclone') || titleAndDesc.includes('depression')) {
      instruction = 'Total suspension of coastal and marine activities. Relocate to cyclone shelters immediately. Secure loose outdoor property and stay indoors away from glass.';
    } else if (titleAndDesc.includes('landslide') || titleAndDesc.includes('mudslide')) {
      instruction = 'Landslide threat high (DGRE/GSI). Avoid hill cuts, steep slopes, and swollen river ravines. Relocate immediately to stable geological terrain.';
    } else if (titleAndDesc.includes('earthquake') || titleAndDesc.includes('tremor')) {
      instruction = 'Drop, Cover, and Hold On. Move away from glass, facades, and power poles. Evacuate calmly to open clear ground once shaking ceases.';
    } else if (titleAndDesc.includes('avalanche')) {
      instruction = 'Avalanche warning issued by DGRE. Do not venture into avalanche-prone slopes above designated altitude.';
    } else if (item.title.includes('ఆశ్రయం')) {
      instruction = 'తీవ్ర ఉరుములు మెరుపులతో కూడిన వర్షం పడేప్పుడు చెట్లు, టవర్స్, స్తంభాలు కింద ఉండరాదు. సురక్షితమైన భవనాల్లో ఆశ్రయం పొందండి.';
    }

    const category = (titleAndDesc.includes('fire') || titleAndDesc.includes('forest fire'))
      ? 'Fire'
      : (titleAndDesc.includes('landslide') || titleAndDesc.includes('earthquake') || titleAndDesc.includes('avalanche'))
      ? 'Geo'
      : 'Met';

    return {
      identifier,
      sender: agencyName,
      sent: effective,
      status: 'Actual',
      msgType: 'Alert',
      scope: 'Public',
      info: {
        category,
        event,
        urgency,
        severity,
        certainty: 'Observed',
        headline: item.title,
        description: item.description || item.title,
        instruction,
        effective,
        expires,
        senderName: agencyName,
        web: item.link,
        areas
      }
    };
  });
}


import { Shelter } from '../types/disaster';

export const DISASTER_SHELTERS: Shelter[] = [
  {
    id: 'SHELTER-OD-01',
    name: 'Gopalpur Multi-Purpose Cyclone Shelter',
    type: 'cyclone_shelter',
    district: 'Ganjam',
    state: 'Odisha',
    coordinates: [84.9080, 19.2612],
    capacity: 2500,
    currentOccupancy: 420,
    contactPerson: 'Bimal Pattnaik (OSDMA In-charge)',
    phone: '+91-94370-12891',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: true,
      oxygenSupport: true,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-OD-02',
    name: 'Puri Sea Beach Disaster Relief Camp #3',
    type: 'cyclone_shelter',
    district: 'Puri',
    state: 'Odisha',
    coordinates: [85.8312, 19.8135],
    capacity: 1800,
    currentOccupancy: 310,
    contactPerson: 'S. K. Mohanty',
    phone: '+91-94371-88421',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: false,
      oxygenSupport: true,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-AP-01',
    name: 'Srikakulam Coastal High School Cyclone Refuge',
    type: 'cyclone_shelter',
    district: 'Srikakulam',
    state: 'Andhra Pradesh',
    coordinates: [84.0150, 18.4200],
    capacity: 2000,
    currentOccupancy: 640,
    contactPerson: 'R. Venkateswarlu',
    phone: '+91-98480-55122',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: true,
      oxygenSupport: false,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-AS-01',
    name: 'Majuli Highland Flood Relief Center',
    type: 'relief_camp',
    district: 'Majuli',
    state: 'Assam',
    coordinates: [94.2167, 26.9500],
    capacity: 3500,
    currentOccupancy: 1850,
    contactPerson: 'Himanta Borah (SDRF Coordinator)',
    phone: '+91-98640-77192',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: true,
      oxygenSupport: false,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-AS-02',
    name: 'Guwahati Saraighat Flood Evacuation Depot',
    type: 'relief_camp',
    district: 'Kamrup',
    state: 'Assam',
    coordinates: [91.6800, 26.1700],
    capacity: 4000,
    currentOccupancy: 1200,
    contactPerson: 'Prabin Sarma',
    phone: '+91-99540-33219',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: true,
      oxygenSupport: true,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-HP-01',
    name: 'Mandi Community Hall Landslide Transit Camp',
    type: 'relief_camp',
    district: 'Mandi',
    state: 'Himachal Pradesh',
    coordinates: [76.9318, 31.7087],
    capacity: 1200,
    currentOccupancy: 280,
    contactPerson: 'Sunil Thakur (SDMA Tehsildar)',
    phone: '+91-98160-44910',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: false,
      oxygenSupport: true,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-RJ-01',
    name: 'Barmer Desert Cooling & Hydration Staging Base',
    type: 'medical_post',
    district: 'Barmer',
    state: 'Rajasthan',
    coordinates: [71.3967, 25.7532],
    capacity: 1500,
    currentOccupancy: 190,
    contactPerson: 'Dr. Rameshwar Bishnoi',
    phone: '+91-94141-89301',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: false,
      oxygenSupport: true,
      cookedFood: true
    }
  },
  {
    id: 'SHELTER-MH-01',
    name: 'Dadar Swatantryaveer Savarkar Relief Station',
    type: 'relief_camp',
    district: 'Mumbai',
    state: 'Maharashtra',
    coordinates: [72.8360, 19.0178],
    capacity: 3000,
    currentOccupancy: 450,
    contactPerson: 'S. Kadam (MCGM Disaster Officer)',
    phone: '+91-98200-11234',
    amenities: {
      medicalSupport: true,
      cleanWater: true,
      generators: true,
      boatAvailable: true,
      oxygenSupport: true,
      cookedFood: true
    }
  }
];

// Calculate Haversine distance in km between two GPS coordinates
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}


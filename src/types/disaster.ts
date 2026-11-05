export interface Shelter {
  id: string;
  name: string;
  type: 'cyclone_shelter' | 'relief_camp' | 'medical_post' | 'food_depot';
  district: string;
  state: string;
  coordinates: [number, number]; // [lon, lat]
  capacity: number;
  currentOccupancy: number;
  contactPerson: string;
  phone: string;
  amenities: {
    medicalSupport: boolean;
    cleanWater: boolean;
    generators: boolean;
    boatAvailable: boolean;
    oxygenSupport: boolean;
    cookedFood: boolean;
  };
  distanceKm?: number;
}

export interface EmergencyContact {
  title: string;
  number: string;
  description: string;
  priority: 'National' | 'State' | 'Specialized';
  category: string;
}

export interface SurvivalChecklist {
  hazard: string;
  color: string;
  before: string[];
  during: string[];
  after: string[];
  dos: string[];
  donts: string[];
}


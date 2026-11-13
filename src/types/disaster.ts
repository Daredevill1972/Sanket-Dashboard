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


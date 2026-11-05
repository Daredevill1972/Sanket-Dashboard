import { EmergencyContact, SurvivalChecklist } from '../types/disaster';

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    title: 'National Emergency Number',
    number: '112',
    description: 'Single emergency access point across India (Police, Fire, Ambulance, Disaster)',
    priority: 'National',
    category: 'Universal'
  },
  {
    title: 'NDMA Disaster Helpline',
    number: '1078',
    description: 'National Disaster Management Authority 24x7 Control Room & Public Assistance',
    priority: 'National',
    category: 'Disaster'
  },
  {
    title: 'NDRF HQ Control Room',
    number: '011-24363260 / 9711077372',
    description: 'National Disaster Response Force HQ operational rescue control room',
    priority: 'National',
    category: 'Rescue'
  },
  {
    title: 'State Emergency Operation Centre (SEOC)',
    number: '1070',
    description: 'Toll-free state disaster operation centre hotline (All States)',
    priority: 'State',
    category: 'Disaster'
  },
  {
    title: 'District Emergency Operation Centre (DEOC)',
    number: '1077',
    description: 'District collectorate disaster management helpline',
    priority: 'State',
    category: 'Disaster'
  },
  {
    title: 'National Ambulance Service',
    number: '108',
    description: 'Emergency Medical & Trauma Response Service',
    priority: 'National',
    category: 'Medical'
  },
  {
    title: 'Fire & Rescue Service',
    number: '101',
    description: 'Fire hazard, urban search and structural collapse rescue',
    priority: 'National',
    category: 'Fire'
  },
  {
    title: 'Indian Coast Guard SAR',
    number: '1554',
    description: 'Maritime search and rescue, cyclone coastal evacuation',
    priority: 'Specialized',
    category: 'Maritime'
  }
];

export const SURVIVAL_CHECKLISTS: Record<string, SurvivalChecklist> = {
  cyclone: {
    hazard: 'Tropical Cyclone & Severe Storm',
    color: '#ef4444',
    before: [
      'Inspect roof, tie down tin sheets and loose corrugated sheets.',
      'Trim dry tree branches touching power cables or near houses.',
      'Store 3 days of non-perishable food (chura, gur, biscuits) and sealed potable water.',
      'Keep battery-powered radio, torches with extra cells, and power banks charged.',
      'Keep identity cards, ration card, land papers, and medical prescriptions in double polythene bags.'
    ],
    during: [
      'Switch off electrical mains and turn off gas cylinders.',
      'Remain indoors in the strongest part of the house (preferably under concrete lintel).',
      'Do NOT step outside during the "Eye of the Cyclone" lull — violent reverse winds follow abruptly.',
      'Keep away from glass windows and open verandas.'
    ],
    after: [
      'Wait for official all-clear bulletin on radio or SMS before moving outdoors.',
      'Beware of broken live wires dangling in puddles; inform electricity board.',
      'Boil all drinking water for minimum 10 minutes to prevent cholera and diarrhea.',
      'Cooperate with NDRF and SDRF relief distribution teams.'
    ],
    dos: [
      'Listen to IMD / NDMA radio broadcasts on AIR.',
      'Evacuate immediately when red alert evacuation order is issued by District Collector.',
      'Keep livestock untied so they can escape rising storm surges.'
    ],
    donts: [
      'Do NOT spread unverified rumors on social media.',
      'Do NOT drive or ride two-wheelers through flooded causeways.',
      'Do NOT touch fallen electric poles or street lamps.'
    ]
  },
  flood: {
    hazard: 'Riverine Flash Flood & Inundation',
    color: '#3b82f6',
    before: [
      'Identify high ground, flood shelters, and safe evacuation corridors.',
      'Pack emergency go-bag: torch, matchboxes in wax paper, water purification tablets (Halazone).',
      'Move valuables and household appliances to upper floors or attics.'
    ],
    during: [
      'Do not attempt to walk or swim through moving water above knee depth.',
      'If trapped in house, climb to the roof; do NOT get trapped in closed attics without roof exits.',
      'Signal rescue helicopters with bright colored cloth or waving a torch.',
      'Disconnect inverter batteries before water reaches floor level.'
    ],
    after: [
      'Watch out for snakes and poisonous reptiles seeking refuge on elevated furniture.',
      'Disinfect home and surroundings with bleaching powder and lime.',
      'Discard food items that came into contact with flood silt.'
    ],
    dos: [
      'Drink only boiled or chlorine-treated water.',
      'Use a stick to probe ground ahead when wading in shallow murky water.'
    ],
    donts: [
      'Never drive through flooded bridges or culverts.',
      'Do not eat dead fish or drowned livestock.'
    ]
  },
  earthquake: {
    hazard: 'Earthquake & Structural Collapse',
    color: '#eab308',
    before: [
      'Fasten heavy furniture, cupboards, and water heaters to wall studs.',
      'Practice "DROP, COVER, AND HOLD ON" with family members.',
      'Keep shoes and a torch beside the bed.'
    ],
    during: [
      'DROP to your hands and knees.',
      'COVER your head and neck under a sturdy table or desk.',
      'HOLD ON until shaking stops completely.',
      'If outdoors, move away from high-rise buildings, flyovers, and power poles.'
    ],
    after: [
      'Check for gas leaks by smell. Do not strike matches or operate light switches if smell detected.',
      'Expect aftershocks. Avoid re-entering cracked or distressed masonry buildings.',
      'Leave building using staircases; NEVER use elevators.'
    ],
    dos: [
      'Protect head with pillow or bag if in bed.',
      'Help elderly, injured, and infants first.'
    ],
    donts: [
      'Do NOT rush towards narrow doorway exits during shaking — risk of stampede.'
    ]
  },
  landslide: {
    hazard: 'Hill Slope Landslide & Debris Flow',
    color: '#ea580c',
    before: [
      'Recognize warning signs: leaning utility poles, new cracks in soil, bulging retaining walls.',
      'Monitor hillside streams — abrupt muddying or sudden drop in discharge indicates upstream damming.'
    ],
    during: [
      'Evacuate immediately if rumbling or cracking trees are heard.',
      'Run perpendicular to the landslide path, towards high ridges, never down the slope.'
    ],
    after: [
      'Stay away from slide area; secondary collapses often trigger within 48 hours.',
      'Check for injured persons without entering direct hazard zone.'
    ],
    dos: [
      'Report any slope movement immediately to 1070 / 1077.'
    ],
    donts: [
      'Never sleep on ground floor facing steep cut slopes during prolonged cloudbursts.'
    ]
  }
};


import pincodes from "@/data/pincodes.json";

export interface PincodeInfo {
  oda: boolean;
  city: string;
  state: string;
}

export interface RouteInfo {
  from: PincodeInfo;
  to: PincodeInfo;
  fromPin: string;
  toPin: string;
  distanceKm: number;
  distanceLabel: string;
  sameCity: boolean;
  sameState: boolean;
}

export interface VehicleRecommendation {
  type: string;
  capacity: string;
  bestFor: string;
  icon: string;
}

export interface ServiceAvailability {
  id: string;
  name: string;
  available: boolean;
  estimatedTime: string;
  note: string;
}

export interface RouteCheckResult {
  success: boolean;
  error?: string;
  route?: RouteInfo;
  services?: ServiceAvailability[];
  vehicles?: VehicleRecommendation[];
}

const PINCODE_DATA = pincodes as Record<string, PincodeInfo>;

// Major city approximate distances (km) - keyed as "cityA|cityB" alphabetically sorted
const CITY_DISTANCES: Record<string, number> = {
  "Ahmedabad|Bangalore": 1250,
  "Ahmedabad|Chennai": 1350,
  "Ahmedabad|Delhi": 950,
  "Ahmedabad|Hyderabad": 850,
  "Ahmedabad|Indore": 400,
  "Ahmedabad|Kolkata": 1650,
  "Ahmedabad|Mumbai": 530,
  "Ahmedabad|Pune": 660,
  "Bangalore|Chennai": 350,
  "Bangalore|Delhi": 2100,
  "Bangalore|Hyderabad": 570,
  "Bangalore|Indore": 1200,
  "Bangalore|Kolkata": 1850,
  "Bangalore|Mumbai": 980,
  "Bangalore|Pune": 840,
  "Bhopal|Delhi": 780,
  "Bhopal|Indore": 195,
  "Bhopal|Mumbai": 800,
  "Chennai|Delhi": 2200,
  "Chennai|Hyderabad": 800,
  "Chennai|Indore": 1350,
  "Chennai|Kolkata": 1350,
  "Chennai|Mumbai": 1300,
  "Chennai|Pune": 1200,
  "Delhi|Hyderabad": 1250,
  "Delhi|Indore": 800,
  "Delhi|Kolkata": 1450,
  "Delhi|Mumbai": 1400,
  "Delhi|Pune": 1400,
  "Hyderabad|Indore": 750,
  "Hyderabad|Kolkata": 1200,
  "Hyderabad|Mumbai": 720,
  "Hyderabad|Pune": 560,
  "Indore|Kolkata": 1500,
  "Indore|Mumbai": 580,
  "Indore|Pune": 650,
  "Jaipur|Delhi": 270,
  "Jaipur|Indore": 400,
  "Jaipur|Mumbai": 1150,
  "Kolkata|Mumbai": 1700,
  "Kolkata|Pune": 1600,
  "Mumbai|Pune": 150,
  "Lucknow|Delhi": 550,
  "Lucknow|Indore": 650,
  "Nagpur|Delhi": 1050,
  "Nagpur|Indore": 430,
  "Nagpur|Mumbai": 800,
  "Patna|Delhi": 850,
  "Patna|Kolkata": 590,
  "Surat|Ahmedabad": 265,
  "Surat|Mumbai": 280,
  "Varanasi|Delhi": 680,
  "Varanasi|Kolkata": 690,
};

function getDistanceKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

export function lookupPincode(pin: string): PincodeInfo | null {
  return PINCODE_DATA[pin] || null;
}

export function getDistance(cityA: string, cityB: string): number | null {
  if (cityA === cityB) return 0;
  const key = getDistanceKey(cityA, cityB);
  return CITY_DISTANCES[key] ?? null;
}

export function getVehicleRecommendations(distanceKm: number): VehicleRecommendation[] {
  if (distanceKm <= 50) {
    return [
      { type: "Tata Ace / Mini Truck", capacity: "500 kg – 1.5 ton", bestFor: "Local intra-city", icon: "🚐" },
      { type: "Tata 407 / LCV", capacity: "2 – 2.5 ton", bestFor: "Same city bulk", icon: "🛻" },
    ];
  }
  if (distanceKm <= 300) {
    return [
      { type: "LCV 6-Wheeler", capacity: "9 – 11 ton", bestFor: "Short-haul regional", icon: "🚚" },
      { type: "Tata 407 / Eicher", capacity: "2 – 4 ton", bestFor: "Medium parcels", icon: "🛻" },
    ];
  }
  if (distanceKm <= 800) {
    return [
      { type: "10-Wheeler (17–19 MT)", capacity: "16 – 20 ton", bestFor: "Medium distance", icon: "🚛" },
      { type: "LCV 6-Wheeler", capacity: "9 – 11 ton", bestFor: "Smaller loads", icon: "🚚" },
    ];
  }
  return [
    { type: "Multi-Axle (20–32 MT)", capacity: "20 – 32 ton", bestFor: "Long-haul freight", icon: "🚛" },
    { type: "10-Wheeler (17–19 MT)", capacity: "16 – 20 ton", bestFor: "Medium bulk", icon: "🚛" },
    { type: "32ft Container", capacity: "20 – 28 ton", bestFor: "Containerized cargo", icon: "📦" },
  ];
}

export function getAvailableServices(distanceKm: number, sameCity: boolean): ServiceAvailability[] {
  const services: ServiceAvailability[] = [
    {
      id: "ftl",
      name: "Full Truck Load (FTL)",
      available: !sameCity,
      estimatedTime: sameCity ? "N/A" : distanceKm <= 500 ? "18–24 hrs" : distanceKm <= 1000 ? "24–48 hrs" : "48–72 hrs",
      note: "Dedicated truck for your cargo only",
    },
    {
      id: "ptl",
      name: "Part Truck Load (PTL / LTL)",
      available: true,
      estimatedTime: sameCity ? "Same day" : distanceKm <= 500 ? "24–48 hrs" : "48–72 hrs",
      note: "Share truck space, pay only for your load",
    },
    {
      id: "express",
      name: "Express Delivery",
      available: true,
      estimatedTime: sameCity ? "4–8 hrs" : distanceKm <= 500 ? "12–24 hrs" : "24–48 hrs",
      note: "Guaranteed time-definite delivery",
    },
    {
      id: "b2bcoloading",
      name: "B2B Coloading",
      available: !sameCity,
      estimatedTime: distanceKm <= 500 ? "24–36 hrs" : "36–60 hrs",
      note: "Consolidate with other shippers going the same route",
    },
    {
      id: "warehousing",
      name: "Warehouse & Distribution",
      available: true,
      estimatedTime: "On-demand",
      note: "9 warehouses across Indore with digital inventory",
    },
    {
      id: "reverselog",
      name: "Reverse Logistics",
      available: true,
      estimatedTime: sameCity ? "Same day" : "2–5 days",
      note: "End-to-end returns management",
    },
  ];

  return services;
}

export function checkRoute(fromPin: string, toPin: string): RouteCheckResult {
  const fromRecord = lookupPincode(fromPin);
  const toRecord = lookupPincode(toPin);

  if (!fromRecord) {
    return { success: false, error: `Pincode ${fromPin} not found. Please check and try again.` };
  }
  if (!toRecord) {
    return { success: false, error: `Pincode ${toPin} not found. Please check and try again.` };
  }

  const sameCity = fromRecord.city === toRecord.city;
  const sameState = fromRecord.state === toRecord.state;

  let distanceKm = getDistance(fromRecord.city, toRecord.city);
  if (distanceKm === null) {
    distanceKm = sameCity ? 15 : sameState ? 350 : 800;
  }

  const distanceLabel = sameCity
    ? `~${distanceKm} km (same city)`
    : `~${distanceKm} km`;

  const route: RouteInfo = {
    from: fromRecord,
    to: toRecord,
    fromPin,
    toPin,
    distanceKm,
    distanceLabel,
    sameCity,
    sameState,
  };

  const services = getAvailableServices(distanceKm, sameCity);
  const vehicles = getVehicleRecommendations(distanceKm);

  return {
    success: true,
    route,
    services,
    vehicles,
  };
}

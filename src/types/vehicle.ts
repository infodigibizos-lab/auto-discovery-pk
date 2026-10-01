export type VehicleStatus = 'AVAILABLE' | 'NEWLY LAUNCHED' | 'UPCOMING' | 'ELECTRIC' | 'HYBRID' | 'PREMIUM' | 'PERFORMANCE' | 'COMMERCIAL' | 'DISCONTINUED' | 'IMPORTED';
export type Vehicle = {
  id: string; brand: string; model: string; generation?: string; variant?: string; year?: number;
  category: string; bodyType?: string; fuelType?: string; transmission?: string; engine?: string;
  displacement?: string; horsepower?: string; torque?: string; drivetrain?: string;
  seatingCapacity?: number; dimensions?: string; groundClearance?: string; bootSpace?: string;
  batteryCapacity?: string; electricRange?: string; hybridType?: string; chargingSpeed?: string;
  safetyFeatures?: string[]; driverAssistance?: string[]; infotainment?: string[];
  exteriorFeatures?: string[]; interiorFeatures?: string[]; colors?: string[];
  price?: number; priceRange?: [number, number]; availabilityStatus?: string; launchDate?: string;
  bookingStatus?: string; warranty?: string; images?: string[]; gallery?: string[]; videos?: string[];
  specifications?: Record<string, string>; description?: string; highlights?: string[];
  pros?: string[]; cons?: string[]; officialSource?: string; lastUpdated?: string;
  statuses: VehicleStatus[];
};

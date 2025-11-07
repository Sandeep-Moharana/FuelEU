export interface Route {
  id: number;
  routeId: string;
  vesselType: string;
  fuelType: string;
  year: number;
  ghgIntensity: number; // gCO₂e/MJ
  fuelConsumption: number; // tons
  distance: number; // km
  totalEmissions: number; // tons
  isBaseline: boolean;
}

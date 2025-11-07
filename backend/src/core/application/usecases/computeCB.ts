import { ShipCompliance } from "../../domain/Compliance.ts";

export function computeCB(shipId: string, year: number, actualIntensity: number, fuelConsumption: number): ShipCompliance {
  const TARGET_INTENSITY_2025 = 89.3368; // gCO₂e/MJ
  const energy = fuelConsumption * 41000; // MJ
  const cbValue = (TARGET_INTENSITY_2025 - actualIntensity) * energy;
  return { shipId, year, cbValue };
}

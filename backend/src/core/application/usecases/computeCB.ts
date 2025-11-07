import { Route } from "../../domain/Route";
import { ShipCompliance } from "../../domain/Compliance";

export function computeCB(shipId: string, year: number, actualIntensity: number, fuelConsumption: number): ShipCompliance {
  const TARGET_INTENSITY_2025 = 89.3368; // gCO₂e/MJ

  // Energy in scope (MJ) ≈ fuelConsumption × 41,000 MJ/t
  const energy = fuelConsumption * 41000;

  // CB = (Target − Actual) × Energy
  const cbValue = (TARGET_INTENSITY_2025 - actualIntensity) * energy;

  return { shipId, year, cbValue };
}

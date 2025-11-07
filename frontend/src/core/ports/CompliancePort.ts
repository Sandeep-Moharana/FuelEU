import { Compliance } from "../domain/Compliance.ts";

export interface CompliancePort {
  fetchCB(shipId: string, year: number, intensity: number, fuel: number): Promise<Compliance>;
}

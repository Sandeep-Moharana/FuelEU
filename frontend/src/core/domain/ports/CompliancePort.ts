import { Compliance } from "../domain/Compliance";

export interface CompliancePort {
  fetchCB(shipId: string, year: number, intensity: number, fuel: number): Promise<Compliance>;
}

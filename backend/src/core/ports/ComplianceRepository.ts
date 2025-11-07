import { ShipCompliance } from "../domain/Compliance.ts";

export interface ComplianceRepository {
  saveCompliance(cb: ShipCompliance): Promise<void>;
  getCompliance(shipId: string, year: number): Promise<ShipCompliance | null>;
}

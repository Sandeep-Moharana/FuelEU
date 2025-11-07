import { CompliancePort } from "../../ports/CompliancePort";

export function fetchCBUseCase(compliancePort: CompliancePort) {
  return (shipId: string, year: number, intensity: number, fuel: number) =>
    compliancePort.fetchCB(shipId, year, intensity, fuel);
}

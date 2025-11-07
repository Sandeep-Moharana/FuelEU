import axios from "axios";
import { Compliance } from "../../../core/domain/Compliance.ts";
import { CompliancePort } from "../../../core/ports/CompliancePort.ts";

const BASE = "http://localhost:4000/compliance";

export class ComplianceAPI implements CompliancePort {
  async fetchCB(shipId: string, year: number, intensity: number, fuel: number): Promise<Compliance> {
    const res = await axios.get(`${BASE}/cb`, {
      params: { shipId, year, intensity, fuel }
    });
    return res.data;
  }
}

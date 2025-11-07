import axios from "axios";
import { Route } from "../../../core/domain/Route.ts";
import { RoutesPort } from "../../../core/ports/RoutesPort.ts";

const BASE = "http://localhost:4000/routes";

export class RoutesAPI implements RoutesPort {
  async fetchRoutes(): Promise<Route[]> {
    const res = await axios.get(BASE);
    return res.data;
  }
  async setBaseline(id: number): Promise<void> {
    await axios.post(`${BASE}/${id}/baseline`);
  }
  async fetchComparison(): Promise<any> {
    const res = await axios.get(`${BASE}/comparison`);
    return res.data;
  }
}

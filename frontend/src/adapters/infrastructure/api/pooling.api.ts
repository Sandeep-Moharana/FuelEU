import axios from "axios";
import { PoolingPort } from "../../../core/ports/PoolingPort.ts";

const BASE = "http://localhost:4000/pools";

export class PoolingAPI implements PoolingPort {
  async createPool(year: number, members: { shipId: string; cbBefore: number }[]): Promise<any> {
    const res = await axios.post(BASE, { year, members });
    return res.data;
  }
}

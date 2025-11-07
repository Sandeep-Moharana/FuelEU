import axios from "axios";
import { BankingPort } from "../../../core/ports/BankingPort.ts";

const BASE = "http://localhost:4000/banking";

export class BankingAPI implements BankingPort {
  async getBanked(shipId: string, year: number): Promise<number> {
    const res = await axios.get(`${BASE}/records`, { params: { shipId, year } });
    return res.data.banked;
  }
  async bank(shipId: string, year: number, amount: number): Promise<any> {
    const res = await axios.post(`${BASE}/bank`, { shipId, year, amount });
    return res.data;
  }
  async apply(shipId: string, year: number, amount: number): Promise<any> {
    const res = await axios.post(`${BASE}/apply`, { shipId, year, amount });
    return res.data;
  }
}

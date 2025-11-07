import { Router } from "express";
import { PrismaBankingRepository } from "../../outbound/postgres/PrismaBankingRepository.ts";
import { bankSurplus } from "../../../core/application/usecases/bankSurplus.ts";
import { applyBanked } from "../../../core/application/usecases/applyBanked.ts";

const router = Router();
const repo = new PrismaBankingRepository();

router.get("/records", async (req, res) => {
  const { shipId, year } = req.query;
  if (!shipId || !year) return res.status(400).json({ error: "Missing params" });
  const amount = await repo.getBanked(shipId as string, Number(year));
  res.json({ shipId, year, banked: amount });
});

router.post("/bank", async (req, res) => {
  const { shipId, year, amount } = req.body;
  try {
    const result = await bankSurplus(repo, shipId, year, amount);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/apply", async (req, res) => {
  const { shipId, year, amount } = req.body;
  try {
    const result = await applyBanked(repo, shipId, year, amount);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

export default router;

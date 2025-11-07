import { Router } from "express";
import { computeCB } from "../../../core/application/usecases/computeCB.ts";
import { PrismaComplianceRepository } from "../../outbound/postgres/PrismaComplianceRepository.ts";

const router = Router();
const repo = new PrismaComplianceRepository();

router.get("/cb", async (req, res) => {
  const { shipId, year, intensity, fuel } = req.query;
  if (!shipId || !year || !intensity || !fuel)
    return res.status(400).json({ error: "Missing parameters" });

  const cb = computeCB(
    shipId as string,
    Number(year),
    Number(intensity),
    Number(fuel)
  );
  await repo.saveCompliance(cb);
  res.json(cb);
});

export default router;

import { Router } from "express";
import { PrismaRouteRepository } from "../../outbound/postgres/PrismaRouteRepository.ts";
import { computeComparison } from "../../../core/application/usecases/computeComparison.ts";

const router = Router();
const repo = new PrismaRouteRepository();

router.get("/", async (_, res) => {
  const routes = await repo.getAll();
  res.json(routes);
});

router.post("/:id/baseline", async (req, res) => {
  await repo.setBaseline(Number(req.params.id));
  res.json({ message: "Baseline updated" });
});

router.get("/comparison", async (_, res) => {
  const baseline = await repo.getBaseline();
  const all = await repo.getAll();
  if (!baseline) return res.status(400).json({ error: "No baseline set" });
  const others = all.filter(r => r.id !== baseline.id);
  res.json(computeComparison(baseline, others));
});

export default router;

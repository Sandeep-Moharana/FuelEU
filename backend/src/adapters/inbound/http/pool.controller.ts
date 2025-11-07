import { Router } from "express";
import { PrismaPoolRepository } from "../../outbound/postgres/PrismaPoolRepository";
import { createPool } from "../../../core/application/usecases/createPool";

const router = Router();
const repo = new PrismaPoolRepository();
const createPoolUC = createPool(repo);

router.post("/", async (req, res) => {
  const { year, members } = req.body;
  try {
    const result = await createPoolUC(year, members);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

export default router;

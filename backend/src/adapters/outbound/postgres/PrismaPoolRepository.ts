import { PrismaClient } from "@prisma/client";
import { PoolRepository } from "../../../core/ports/PoolRepository.ts";

const prisma = new PrismaClient();

export class PrismaPoolRepository implements PoolRepository {
  async createPool(year: number, members: { shipId: string; cbBefore: number; cbAfter: number }[]) {
    const pool = await prisma.pool.create({
      data: {
        year,
        members: {
          create: members.map(m => ({
            shipId: m.shipId,
            cbBefore: m.cbBefore,
            cbAfter: m.cbAfter
          }))
        }
      }
    });
    return pool.id;
  }
}

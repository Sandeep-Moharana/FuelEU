import { PrismaClient } from "@prisma/client";
import { BankingRepository } from "../../../core/ports/BankingRepository";

const prisma = new PrismaClient();

export class PrismaBankingRepository implements BankingRepository {
  async getBanked(shipId: string, year: number) {
    const entries = await prisma.bankEntry.findMany({ where: { shipId, year } });
    return entries.reduce((sum, e) => sum + e.amount, 0);
  }

  async bank(shipId: string, year: number, amount: number) {
    await prisma.bankEntry.create({ data: { shipId, year, amount } });
  }

  async apply(shipId: string, year: number, amount: number) {
    await prisma.bankEntry.create({ data: { shipId, year, amount: -amount } });
  }
}

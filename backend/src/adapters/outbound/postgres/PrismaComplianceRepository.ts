import { PrismaClient } from "@prisma/client";
import { ComplianceRepository } from "../../../core/ports/ComplianceRepository.ts";
import { ShipCompliance } from "../../../core/domain/Compliance.ts";

const prisma = new PrismaClient();

export class PrismaComplianceRepository implements ComplianceRepository {
  async saveCompliance(cb: ShipCompliance) {
    await prisma.shipCompliance.upsert({
      where: { shipId_year: { shipId: cb.shipId, year: cb.year } },
      update: { cbValue: cb.cbValue },
      create: { shipId: cb.shipId, year: cb.year, cbValue: cb.cbValue }
    });
  }
  async getCompliance(shipId: string, year: number) {
    return prisma.shipCompliance.findUnique({
      where: { shipId_year: { shipId, year } }
    });
  }
}

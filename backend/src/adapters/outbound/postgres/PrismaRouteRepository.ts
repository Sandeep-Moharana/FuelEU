import { PrismaClient } from "@prisma/client";
import { RouteRepository } from "../../../core/ports/RouteRepository";

const prisma = new PrismaClient();

export class PrismaRouteRepository implements RouteRepository {
  async getAll() {
    return prisma.route.findMany();
  }

  async getBaseline() {
    return prisma.route.findFirst({ where: { isBaseline: true } });
  }

  async setBaseline(routeId: number) {
    await prisma.route.updateMany({ data: { isBaseline: false } });
    await prisma.route.update({ where: { id: routeId }, data: { isBaseline: true } });
  }
}

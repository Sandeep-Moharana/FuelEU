import { PoolRepository } from "../../ports/PoolRepository.ts";

export function createPool(repo: PoolRepository) {
  return async (year: number, members: { shipId: string; cbBefore: number }[]) => {
    const total = members.reduce((sum, m) => sum + m.cbBefore, 0);
    if (total < 0) throw new Error("Pool must be non-negative");
    const result = members.map(m => ({ ...m, cbAfter: m.cbBefore }));
    const poolId = await repo.createPool(year, result);
    return { poolId, members: result };
  };
}

import { BankingRepository } from "../../ports/BankingRepository.ts";

export async function applyBanked(repo: BankingRepository, shipId: string, year: number, amount: number) {
  const available = await repo.getBanked(shipId, year);
  if (amount > available) throw new Error("Insufficient banked CB");
  await repo.apply(shipId, year, amount);
  return { status: "applied", applied: amount, remaining: available - amount };
}

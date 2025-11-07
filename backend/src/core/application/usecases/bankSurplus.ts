import { BankingRepository } from "../../ports/BankingRepository";

export async function bankSurplus(repo: BankingRepository, shipId: string, year: number, amount: number) {
  if (amount <= 0) throw new Error("Cannot bank non-positive CB");
  await repo.bank(shipId, year, amount);
  return { status: "banked", amount };
}

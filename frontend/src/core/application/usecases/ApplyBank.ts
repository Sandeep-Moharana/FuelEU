import { BankingPort } from "../../ports/BankingPort.ts";

export function applyBankUseCase(bankingPort: BankingPort) {
  return (shipId: string, year: number, amount: number) =>
    bankingPort.apply(shipId, year, amount);
}

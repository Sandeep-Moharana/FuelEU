import { BankingPort } from "../../ports/BankingPort";

export function applyBankUseCase(bankingPort: BankingPort) {
  return (shipId: string, year: number, amount: number) =>
    bankingPort.apply(shipId, year, amount);
}

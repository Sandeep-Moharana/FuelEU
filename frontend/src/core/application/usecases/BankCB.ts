import { BankingPort } from "../../ports/BankingPort.ts";

export function bankCBUseCase(bankingPort: BankingPort) {
  return (shipId: string, year: number, amount: number) =>
    bankingPort.bank(shipId, year, amount);
}

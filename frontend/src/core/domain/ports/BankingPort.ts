export interface BankingPort {
  getBanked(shipId: string, year: number): Promise<number>;
  bank(shipId: string, year: number, amount: number): Promise<any>;
  apply(shipId: string, year: number, amount: number): Promise<any>;
}

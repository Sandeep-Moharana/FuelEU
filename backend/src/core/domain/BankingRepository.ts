export interface BankingRepository {
  getBanked(shipId: string, year: number): Promise<number>;
  bank(shipId: string, year: number, amount: number): Promise<void>;
  apply(shipId: string, year: number, amount: number): Promise<void>;
}

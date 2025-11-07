export interface PoolRepository {
  createPool(year: number, members: { shipId: string; cbBefore: number; cbAfter: number }[]): Promise<number>;
}

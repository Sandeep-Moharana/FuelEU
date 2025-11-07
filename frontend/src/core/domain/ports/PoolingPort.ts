export interface PoolingPort {
  createPool(year: number, members: { shipId: string; cbBefore: number }[]): Promise<any>;
}

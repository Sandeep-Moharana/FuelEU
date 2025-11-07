import { PoolingPort } from "../../ports/PoolingPort.ts";

export function createPoolUseCase(poolingPort: PoolingPort) {
  return (year: number, members: { shipId: string; cbBefore: number }[]) =>
    poolingPort.createPool(year, members);
}

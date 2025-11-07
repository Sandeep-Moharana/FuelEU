import { createPool } from "../../src/core/application/usecases/createPool.ts";

describe("createPool", () => {
  it("throws if total CB is negative", async () => {
    const repo = { createPool: jest.fn() } as any;
    const usecase = createPool(repo);
    await expect(usecase(2025, [
      { shipId: "S1", cbBefore: -50 },
      { shipId: "S2", cbBefore: 20 }
    ])).rejects.toThrow("Pool must be non-negative");
  });

  it("creates pool and returns members", async () => {
    const repo = { createPool: jest.fn().mockResolvedValue(1) } as any;
    const usecase = createPool(repo);
    const result = await usecase(2025, [
      { shipId: "S1", cbBefore: 50 },
      { shipId: "S2", cbBefore: -30 }
    ]);
    expect(result.poolId).toBe(1);
    expect(result.members.length).toBe(2);
  });
});

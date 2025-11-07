import { computeCB } from "../../src/core/application/usecases/computeCB.ts";

describe("computeCB", () => {
  it("calculates Compliance Balance correctly", () => {
    const result = computeCB("S1", 2025, 85, 100);
    expect(result.cbValue).toBeCloseTo((89.3368 - 85) * 41000 * 100);
  });
});

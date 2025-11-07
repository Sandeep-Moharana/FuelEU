import request from "supertest";
import app from "../../src/server/app.ts";

describe("Banking API", () => {
  it("prevents applying more than banked", async () => {
    const res = await request(app).post("/banking/apply").send({
      shipId: "S1",
      year: 2025,
      amount: 100
    });
    expect(res.status).toBe(400);
  });
});

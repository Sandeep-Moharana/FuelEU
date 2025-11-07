import request from "supertest";
import app from "../../src/server/app.ts";

describe("Pool API", () => {
  it("rejects negative pool sum", async () => {
    const res = await request(app).post("/pools").send({
      year: 2025,
      members: [
        { shipId: "S1", cbBefore: -20 },
        { shipId: "S2", cbBefore: 10 }
      ]
    });
    expect(res.status).toBe(400);
  });
});

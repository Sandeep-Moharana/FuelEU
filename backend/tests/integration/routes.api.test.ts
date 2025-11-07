import request from "supertest";
import app from "../../src/server/app";

describe("Routes API", () => {
  it("GET /routes returns list", async () => {
    const res = await request(app).get("/routes");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

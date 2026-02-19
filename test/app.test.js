const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("CI/CD Demo App Running 🚀");
  });
});

describe("GET /health", () => {
  it("should return health status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });
});

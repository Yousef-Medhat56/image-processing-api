import * as supertest from "supertest";
import app from "../app";

//create request object
const request = supertest(app);

describe("Test image endpoint response", () => {
  it("Get (Bad Request) error when not adding query string", async () => {
    const response = await request.get("/image");
    expect(response.status).toBe(400);
  }),
    it("Get (Not Found) error when inputing wrong image name", async () => {
      const response = await request.get("/image?filename=imag");
      expect(response.status).toBe(404);
    }),
    it("Get (Bad Request) error when inputing non-numeric value for width or height", async () => {
      const response = await request.get(
        "/image?filename=image&width=abc&height=200"
      );
      expect(response.status).toBe(400);
    }),
    it("Get (Bad Request) error when inputing 0 as value for width or height", async () => {
      const response = await request.get(
        "/image?filename=image&width=200&height=0"
      );
      expect(response.status).toBe(400);
    }),
    it("Get 200 response when inputing the right image name", async () => {
      const response = await request.get("/image?filename=image");
      expect(response.status).toBe(200);
    }),
    it("Get 200 response when inputing the right image name and numeric values for width and height", async () => {
      const response = await request.get(
        "/image?filename=image&width=200&height=200"
      );
      expect(response.status).toBe(200);
    });
});

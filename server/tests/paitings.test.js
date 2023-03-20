import { it, describe } from "vitest";
import request from "supertest";
import { app } from "../app";

describe("GET paintings/", () => {
  it("responds with error forbidden 401 (no token)", () => {
    return request(app)
      .get("/paintings")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(401);
  });
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5MDA3MDAwLCJleHAiOjE2NzkwMTA2MDB9.lXyHpvIrefesNrUBPpjqRnZt7Wp2cB7zDV9h8Xw1gHo";

describe("GET paintings/", () => {
  it("responds with the correct JSON data", async () => {
    const response = await request(app)
      .get("/paintings")
      .set({ Authorization: `Bearer ${token}` })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

describe("GET paintings/:uuid", () => {
  it("responds with the correct JSON data", () => {
    return request(app)
      .get("/paintings/3ed35487-0e9b-4068-a10a-2a533cc25b82")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, {
        paintingResult: {
          id: 4,
          painting_uuid: "3ed35487-0e9b-4068-a10a-2a533cc25b82",
          url: "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/CAR/lpdp_25745-1.jpg?itok=Qrqw80MA",
          painter_id: 1,
        },
        painterResult: {
          id: 1,
          name: "Gustave Courbet",
          date_of_birth: "1819–06–10",
          date_of_death: "1877–12–31",
          picture: null,
          picture_credits: null,
          wiki_link: null,
        },
      });
  });
});

describe("GET paintings/:uuid", () => {
  it("responds with error 404 not found", () => {
    return request(app)
      .get("/paintings/3ed35487-0e9b-4068-a10a-2a533cc25b8")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});

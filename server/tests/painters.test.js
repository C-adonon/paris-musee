import { it, describe } from "vitest";
import request from "supertest";
import { app } from "../app";

describe("GET painters/1/random/", () => {
  it("responds with random painting JSON data from a specific painter", () => {
    return request(app)
      .get("/painters/1/random")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

describe("GET painters/random", () => {
  it("responds with random painters JSON data", () => {
    return request(app)
      .get("/painters/random")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

describe("GET painters/", () => {
  it("responds with painters JSON data", () => {
    return request(app)
      .get("/painters")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

describe("GET painters/search/:id", () => {
  it("responds with a specific painter JSON data", () => {
    return request(app)
      .get("/painters/search/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, {
        id: 1,
        name: "Gustave Courbet",
        date_of_birth: "1819–06–10",
        date_of_death: "1877–12–31",
        picture: null,
        picture_credits: null,
        wiki_link: null,
      });
  });
});

describe("GET painters/search/:id", () => {
  it("responds with a specific painter JSON data", () => {
    return request(app)
      .get("/painters/search/1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});

describe("GET painters/:id/paintings", () => {
  it("responds with paintings JSON data from a specific painter", () => {
    return request(app)
      .get("/painters/1/paintings")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

const supertest = require("supertest");
const mockingoose = require("mockingoose").default;

const express = require("express");

const app = express();

describe("Booking Route API", () => {
  const app = require("../../server");

  describe("Route GET Single Booking", () => {
    it("should return status 200 if found", () => {
      const _booking = { _id: "507f191e810c19729de860ea" };
      mockingoose.BookingModel.toReturn(_booking, "findOne");
    });

    it("should return a JSON booking if found", () => {});

    it("should return status 500 in case of error", () => {});

    it("should return status 404 if not found", () => {});
  });
});

const mockingoose = require("mockingoose").default;
const model = require("../db/booking-model");
const bookingController = require("./booking-controller");

describe("Booking Controller Test Suite", () => {
  describe("Retrieve single booking", () => {
    // random id
    const _id = "5aab18fff827b20f54107dd3";
    let req = {};

    // run before each test
    beforeEach(() => {
      mockingoose.resetAll();

      req = { params: { id: _id } };
    });

    it("should return status 200 if found", () => {
      const _booking = { _id: _id };
      const res = { status: jest.fn(), send: jest.fn() };
      mockingoose.BookingModel.toReturn(_booking, "findOne");
      bookingController.booking_detail(req, res);

      expect(res.status.mock.calls[0][0]).toBe(200);
    });

    it("should return the booking object if found", () => {
      const _booking = { _id: _id };
      const res = { status: jest.fn(), send: jest.fn() };

      mockingoose.BookingModel.toReturn(_booking, "findOne");
      bookingController.booking_detail(req, res);

      const result = JSON.stringify(res.send.mock.calls[0][0]);
      expect(result).toEqual(JSON.stringify(_booking));
    });

    it("should return status 404 if not found", () => {
      mockingoose.BookingModel.toReturn(null, "findOne");
      const res = { status: jest.fn(), send: jest.fn() };

      bookingController.booking_detail(req, res);

      expect(res.status.mock.calls[0][0]).toBe(404);
    });

    it("should return status 500 in case of error", () => {
      mockingoose.BookingModel.toReturn(new Error(), "findOne");
      const res = { status: jest.fn(), send: jest.fn() };

      bookingController.booking_detail(req, res);

      expect(res.status.mock.calls[0][0]).toBe(500);
      expect(res.send.mock.calls[0][0]).toMatch(/error occurred/);
    });
  });

  describe("Retrieve a list of bookings", () => {
    const _id = "5aab18fff827b20f54107dd3";

    let req = {},
      res = {};

    // run before each test
    beforeEach(() => {
      mockingoose.resetAll();
    });

    it("should return 200", () => {
      const res = { status: jest.fn(), send: jest.fn() };
      const result = [{ _id: _id }];
      mockingoose.BookingModel.toReturn(result, "find");

      bookingController.booking_list(req, res);

      expect(res.status.mock.calls[0][0]).toBe(200);
      expect(JSON.stringify(res.send.mock.calls[0][0])).toEqual(
        JSON.stringify(result)
      );
    });

    it("should return 500 if error", () => {
      const res = { status: jest.fn(), send: jest.fn() };
      mockingoose.BookingModel.toReturn(new Error(), "find");

      bookingController.booking_list(req, res);

      expect(res.status.mock.calls[0][0]).toBe(500);
      expect(res.send.mock.calls[0][0]).toMatch(/error occurred/);
    });
  });

  describe("Create new booking", () => {
    beforeEach(() => {
      mockingoose.resetAll();
    });

    it("should return 201 on success", () => {
      // arrange
      const req = {
        body: {
          service: "haircut"
        }
      };
      const res = { status: jest.fn(), send: jest.fn() };
      mockingoose.BookingModel.toReturn({}, "save");

      // act
      bookingController.booking_create(req, res);

      // assert
      expect(res.status.mock.calls[0][0]).toBe(201);
      expect(res.send.mock.calls[0][0]).toMatch(/created booking/);
    });

    it("should return 500 on error", () => {
      // arrange
      const req = { body: { service: "haircut" } };
      const res = { status: jest.fn(), send: jest.fn() };
      mockingoose.BookingModel.toReturn(new Error(), "save");

      // act
      bookingController.booking_create(req, res);

      // assert
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });

  describe("Update booking", () => {
    beforeEach(() => {
      mockingoose.resetAll();
    });

    it("should update the booking successfuly", () => {
      // arrange
      const result = {
        service: "haircut",
        resource: "staff"
      };
      const req = { params: { id: "5aab18fff827b20f54107dd3" }, body: result };
      const res = {
        status: jest.fn(),
        send: jest.fn()
      };
      mockingoose.BookingModel.toReturn(result, "update");

      // act
      bookingController.booking_update(req, res);

      // assert
      console.log(res);

      // expect(res.status.mock.calls[0][0]).toBe(200);
      expect(res.send.mock.calls[0][0]).toEqual(result);
    });
  });
});

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    // define schema here
    startTime: { type: Date, required: [true, "Start time is required"] },
    endTime: { type: Date, required: [true, "End time is required"] },
    service: { type: String, enum: ["haircut", "meeting", "reservation"] },
    customer: {
      firstName: String,
      lastName: String,
      email: String
    },
    resource: String
  },
  { collection: "bookings" }
);

const BookingModel = mongoose.model("BookingModel", "BookingSchema");

module.exports = {
  schema: BookingSchema,
  model: BookingModel
};

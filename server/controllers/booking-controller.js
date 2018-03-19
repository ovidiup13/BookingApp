const BookingModel = require("../db/booking-model");
const ObjectId = require("mongoose").Types.ObjectId;

// List all bookings on GET.
exports.booking_list = (req, res) => {
  BookingModel.find({}, (err, bookings) => {
    if (err) {
      res.status(500);
      res.send(
        JSON.stringify("An error occurred while processing your request.")
      );
    }
    res.status(200);
    res.send(bookings);
  });
};

// List a single booking on GET.
exports.booking_detail = (req, res) => {
  const id = req.params.id;
  BookingModel.findOne({ _id: new ObjectId(id.toString()) }, (err, booking) => {
    if (err) {
      res.status(500);
      res.send(
        JSON.stringify("An error occurred while processing your request.")
      );
    } else if (booking == null) {
      res.status(404);
      res.send(JSON.stringify("Booking not found."));
    } else {
      res.status(200);
      res.send(booking);
    }
  });
};

// Create a booking on POST.
exports.booking_create = (req, res) => {
  // const booking = new BookingModel(req.body);
  BookingModel.create(req.body, (err, value) => {
    if (err) {
      res.status(500);
      res.send(JSON.stringify("Unable to create booking"));
    } else {
      res.status(201);
      res.send(JSON.stringify("Successfully created booking"));
    }
  });
};

// Update booking on PUT.
exports.booking_update = (req, res) => {
  const id = req.params.id;
  // const options = { upsert: true, new: true, runValidators: true };
  const update = req.body;
  BookingModel.update({ _id: id }, req.body, (err, value) => {
    console.log(value);
    if (err) {
      res.status(500);
      res.send(JSON.stringify("An error occurred when updating booking."));
    } else {
      res.status(200);
      res.send(JSON.stringify("Sucessfully updated booking."));
    }
  });
};

exports.booking_delete = (req, res) => {
  const id = req.params.id;
  BookingModel.remove({ _id: id }, (err, result) => {
    if (err) {
      res.status(500);
      res.send(JSON.stringify("An error occurred when removing the booking."));
    } else {
      res.status(200);
      res.send(JSON.stringify("Successfully removed booking."));
    }
  });
};

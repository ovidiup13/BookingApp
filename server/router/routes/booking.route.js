const router = require("express").Router();

const BookingModel = require("../../db/booking.model").model;
const ObjectId = require("mongoose").Types.ObjectId;

// get all
router.get("/", (req, res) => {
  BookingModel.find({}, (err, bookings) => {
    if (err) {
      res.status(500).send("An error occurred while processing your request.");
    }
    res.status(200).send(bookings);
  });
});

// get one
router.get("/:id", (req, res) => {
  const id = req.params.id;
  BookingModel.findOne({ _id: new ObjectId(id.toString()) }, (err, booking) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
    } else if (booking == null) {
      res.status(404).send("Booking not found.");
    } else {
      res.status(200).send(booking);
    }
  });
});

// post
router.post("/", (req, res) => {
  const booking = new BookingModel(req.body);
  booking.save(err => {
    if (err) {
      console.erro(err);
      res.status(500).send("Unable to create booking");
    }
    res.status(201).send("Successfully created booking");
  });
});

// put
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send();
});

// delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send();
});

module.exports = router;

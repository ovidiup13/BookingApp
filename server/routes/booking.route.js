const express = require("express");
const router = express.Router();
const path = require("path");

const BookingModel = require("../db/booking.model").model;
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
      res.status(500).send("An error occurred while processing your request.");
      console.error(err);
    } else if (booking == null) {
      res.status(404).send("Booking not found.");
    } else {
      res.status(200).send(booking);
    }
  });
});

// post
router.post("/", (req, res) => {});

// put
router.put("/:id", (req, res) => {});

// delete
router.delete("/:id", (req, res) => {});

module.exports = router;

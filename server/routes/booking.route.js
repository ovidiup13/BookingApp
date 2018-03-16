const express = require("express");
const router = express.Router();
const path = require("path");

const BookingModel = require("../db/booking.model").model;

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
  console.log(id);
  res.send(`This is booking ${id}`);
});

// post
router.get("/", (req, res) => {});

// put
router.get("/:id", (req, res) => {});

// delete
router.get("/:id", (req, res) => {});

module.exports = router;

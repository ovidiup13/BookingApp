const express = require("express");
const router = express.Router();
const path = require("path");

// get all
router.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// get one
router.get("/:id", (req, res) => {});

// post
router.get("/", (req, res) => {});

// put
router.get("/:id", (req, res) => {});

// delete
router.get("/:id", (req, res) => {});

module.exports = router;

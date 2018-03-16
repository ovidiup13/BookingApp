// setup environment
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// define app
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

// init routes
const router = require("./router")(app);

// connect to mongodb
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/app";
const mongoose = require("mongoose");
mongoose.connect(mongoUrl);
const db = mongoose.connection;

// handle connection error
db.on("error", err => {
  console.error("MongoDB Connection Error.", err);
});

// handle connection successful
db.once("open", () => {
  // might want to remove this since it is leaking username:password combination in URL
  console.info("Successfully connected to MongoDB.", mongoUrl);

  // start server only on successful connection
  app.listen(port, () => {
    console.log(`Server successfully initialised on port ${port}`);
  });
});

module.exports = app;

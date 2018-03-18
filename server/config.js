// setup environment
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || "development",
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/app"
};

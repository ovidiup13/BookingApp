module.exports = function(app) {
  app.use("/api/bookings", require("./routes/booking.route"));
};

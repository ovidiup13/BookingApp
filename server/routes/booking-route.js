const router = require("express").Router();
const bookingController = require("../controllers/booking-controller");

// get all
router.get("/", bookingController.booking_list);

// get one
router.get("/:id", bookingController.booking_detail);

// post
router.post("/", bookingController.booking_create);

// put
router.put("/:id", bookingController.booking_update);

// delete
router.delete("/:id", bookingController.booking_delete);

module.exports = router;

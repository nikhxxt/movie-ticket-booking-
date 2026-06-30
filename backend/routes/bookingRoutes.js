const express = require("express");
const router = express.Router();

const {
  bookSeats,
  cancelBooking,
} = require("../controllers/bookingController");

// Book seats
router.post("/", bookSeats);

// Cancel booking
router.delete("/:id", cancelBooking);

module.exports = router;

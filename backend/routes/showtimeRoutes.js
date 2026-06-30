const express = require("express");
const router = express.Router();

const {
  addShowtime,
  getSeats,
} = require("../controllers/showtimeController");

// Add a showtime
router.post("/", addShowtime);

// Get seats for a showtime
router.get("/:id/seats", getSeats);

module.exports = router;

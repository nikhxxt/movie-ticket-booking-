const Showtime = require("../models/Showtime");

// Add Showtime
const addShowtime = async (req, res) => {
  try {
    const showtime = new Showtime(req.body);

    await showtime.save();

    res.status(201).json({
      success: true,
      message: "Showtime added successfully",
      data: showtime,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Seats
const getSeats = async (req, res) => {
  try {
    const showtime = await Showtime.findById(req.params.id);

    if (!showtime) {
      return res.status(404).json({
        success: false,
        message: "Showtime not found",
      });
    }

    res.status(200).json(showtime.seats);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addShowtime,
  getSeats,
};

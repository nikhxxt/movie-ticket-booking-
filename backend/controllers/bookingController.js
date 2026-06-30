const Booking = require("../models/Booking");
const Showtime = require("../models/Showtime");

// Book Seats
const bookSeats = async (req, res) => {
  try {
    const { userId, showtimeId, seats } = req.body;

    const showtime = await Showtime.findById(showtimeId);

    if (!showtime) {
      return res.status(404).json({
        success: false,
        message: "Showtime not found",
      });
    }

    // Check if any seat is already booked
    for (let seat of seats) {
      const existingSeat = showtime.seats.find(
        (s) => s.seatNumber === seat && s.booked
      );

      if (existingSeat) {
        return res.status(400).json({
          success: false,
          message: `${seat} is already booked`,
        });
      }
    }

    // Mark seats as booked
    showtime.seats.forEach((seat) => {
      if (seats.includes(seat.seatNumber)) {
        seat.booked = true;
      }
    });

    await showtime.save();

    const booking = await Booking.create({
      userId,
      showtimeId,
      seats,
    });

    res.status(201).json({
      success: true,
      message: "Booking Successful",
      data: booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Cancel Booking
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const showtime = await Showtime.findById(booking.showtimeId);

    showtime.seats.forEach((seat) => {
      if (booking.seats.includes(seat.seatNumber)) {
        seat.booked = false;
      }
    });

    await showtime.save();

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booking Cancelled Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  bookSeats,
  cancelBooking,
};

const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    startHour: {
      type: Number,
      required: true,
      min: 0,
      max: 23,
    },
    seats: [
      {
        seatNumber: String,
        booked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Showtime", showtimeSchema);

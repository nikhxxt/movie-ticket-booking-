import { useState } from "react";
import api from "../services/api";

function BookingForm() {

  const [booking, setBooking] = useState({
    userName: "",
    showtimeId: "",
    seats: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const bookingData = {
        userName: booking.userName,
        showtimeId: booking.showtimeId,
        seats: booking.seats.split(","),
      };

      await api.post("/bookings", bookingData);

      alert("Booking Successful!");

      setBooking({
        userName: "",
        showtimeId: "",
        seats: "",
      });

    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="section">

      <h2>Book Tickets</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="userName"
          placeholder="Customer Name"
          value={booking.userName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="showtimeId"
          placeholder="Showtime ID"
          value={booking.showtimeId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="seats"
          placeholder="Seats (Example: A1,A2)"
          value={booking.seats}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Book Ticket
        </button>

      </form>

    </div>
  );
}

export default BookingForm;

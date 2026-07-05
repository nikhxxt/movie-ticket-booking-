import { useState, useEffect } from "react";
import "../styles/Booking.css";

function Booking({ setCurrentPage }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const SEAT_PRICE = 250;

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("selectedMovie"));
    setSelectedMovie(movie);
  }, []);

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 12;

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  useEffect(() => {
    setTotalPrice(selectedSeats.length * SEAT_PRICE);
  }, [selectedSeats]);

  const bookedSeats = ["A3", "A4", "B5", "B6", "C2", "C7", "D1"];

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const booking = {
      movie: selectedMovie,
      seats: selectedSeats,
      totalPrice: totalPrice,
      bookingDate: new Date().toLocaleDateString(),
      bookingId: `BK${Math.random().toString(36).substr(2, 9)}`,
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking successful! Your booking ID: " + booking.bookingId);
    setCurrentPage("bookings");
  };

  return (
    <div className="booking-page">
      <button className="back-btn" onClick={() => setCurrentPage("movies")}>
        ← Back to Movies
      </button>

      <div className="booking-container">
        <div className="seats-section">
          <h2>Select Your Seats</h2>
          {selectedMovie && (
            <div className="movie-info-bar">
              <span>{selectedMovie.title}</span>
              <span>Showtime: {selectedMovie.selectedShowtime}</span>
            </div>
          )}

          <div className="screen">
            <p>🎬 SCREEN 🎬</p>
          </div>

          <div className="seats-grid">
            {rows.map((row) => (
              <div key={row} className="seat-row">
                <span className="row-label">{row}</span>
                {Array.from({ length: seatsPerRow }).map((_, idx) => {
                  const seatId = `${row}${idx + 1}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <button
                      key={seatId}
                      className={`seat ${isBooked ? "booked" : ""} ${
                        isSelected ? "selected" : ""
                      }`}
                      onClick={() => !isBooked && toggleSeat(seatId)}
                      disabled={isBooked}
                      title={seatId}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
                <span className="row-label">{row}</span>
              </div>
            ))}
          </div>

          <div className="seat-legend">
            <div className="legend-item">
              <div className="seat available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="seat selected"></div>
              <span>Selected</span>
            </div>
            <div className="legend-item">
              <div className="seat booked"></div>
              <span>Booked</span>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-card">
            <h3>Booking Summary</h3>
            {selectedMovie && (
              <>
                <div className="summary-item">
                  <span>Movie:</span>
                  <span className="value">{selectedMovie.title}</span>
                </div>
                <div className="summary-item">
                  <span>Showtime:</span>
                  <span className="value">{selectedMovie.selectedShowtime}</span>
                </div>
              </>
            )}

            <div className="summary-item">
              <span>Selected Seats:</span>
              <span className="value seats-display">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
              </span>
            </div>

            <div className="summary-item">
              <span>Number of Seats:</span>
              <span className="value">{selectedSeats.length}</span>
            </div>

            <div className="price-per-seat">
              <span>Price per Seat:</span>
              <span className="value">₹{SEAT_PRICE}</span>
            </div>

            <hr />

            <div className="summary-item total">
              <span>Total Price:</span>
              <span className="value">₹{totalPrice}</span>
            </div>

            <button
              className={`book-btn ${selectedSeats.length === 0 ? "disabled" : ""}`}
              onClick={handleBooking}
              disabled={selectedSeats.length === 0}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;

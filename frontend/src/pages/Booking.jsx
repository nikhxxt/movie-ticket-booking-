import { useState } from "react";
import "../styles/Booking.css";

function Booking({ setCurrentPage }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState("7:00 PM");

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 10;
  const bookedSeats = ["A5", "B3", "B4", "C1", "C2", "D5", "D6", "D7"];

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const totalPrice = selectedSeats.length * 250;

  return (
    <div className="booking-page">
      <button className="back-btn" onClick={() => setCurrentPage("movies")}>
        ← Back to Movies
      </button>

      <div className="booking-container">
        <div className="booking-left">
          <div className="booking-header">
            <h1>Movie Name: Inception</h1>
            <p>Showing: {showtime} | Hall 1</p>
          </div>

          <div className="screen">
            <p>SCREEN</p>
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
                      onClick={() => toggleSeat(seatId)}
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
              <div className="seat-icon available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="seat-icon selected"></div>
              <span>Selected</span>
            </div>
            <div className="legend-item">
              <div className="seat-icon booked"></div>
              <span>Booked</span>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="summary-card">
            <h2>Booking Summary</h2>

            <div className="summary-section">
              <label>Movie:</label>
              <p>Inception</p>
            </div>

            <div className="summary-section">
              <label>Date & Time:</label>
              <p>Today, {showtime}</p>
            </div>

            <div className="summary-section">
              <label>Selected Seats:</label>
              <p className="selected-seats">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "No seats selected"}
              </p>
            </div>

            <div className="summary-section">
              <label>Number of Seats:</label>
              <p>{selectedSeats.length}</p>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Ticket Price ({selectedSeats.length} × ₹250)</span>
                <span>₹{selectedSeats.length * 250}</span>
              </div>
              <div className="price-row">
                <span>Convenience Fee</span>
                <span>₹50</span>
              </div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span>₹{selectedSeats.length * 250 + 50}</span>
              </div>
            </div>

            <button
              className="proceed-btn"
              disabled={selectedSeats.length === 0}
              onClick={() => setCurrentPage("payment")}
            >
              Proceed to Payment
            </button>

            <button
              className="cancel-btn"
              onClick={() => {
                setSelectedSeats([]);
                setCurrentPage("movies");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;

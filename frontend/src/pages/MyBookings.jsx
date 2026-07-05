import { useState, useEffect } from "react";
import "../styles/MyBookings.css";

function MyBookings({ setCurrentPage }) {
  const [bookings, setBookings] = useState([]);
  const [expandedBooking, setExpandedBooking] = useState(null);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancel = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      const updatedBookings = bookings.filter((b) => b.bookingId !== bookingId);
      setBookings(updatedBookings);
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      alert("Booking cancelled successfully");
    }
  };

  const toggleExpand = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
  };

  return (
    <div className="my-bookings">
      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Back to Home
      </button>

      <div className="bookings-container">
        <h1>My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="no-bookings">
            <div className="empty-state">
              <div className="empty-icon">🎬</div>
              <h2>No Bookings Yet</h2>
              <p>You haven't booked any movies yet</p>
              <button
                className="explore-btn"
                onClick={() => setCurrentPage("movies")}
              >
                Explore Movies
              </button>
            </div>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking.bookingId} className="booking-card">
                <div className="booking-header">
                  <div className="booking-movie-info">
                    <div className="booking-poster">{booking.movie.poster}</div>
                    <div className="booking-details">
                      <h3>{booking.movie.title}</h3>
                      <p className="booking-time">
                        🕐 {booking.movie.selectedShowtime}
                      </p>
                      <p className="booking-date">📅 {booking.bookingDate}</p>
                    </div>
                  </div>
                  <div className="booking-status">
                    <div className="status-badge confirmed">✓ Confirmed</div>
                    <p className="booking-id">ID: {booking.bookingId}</p>
                  </div>
                </div>

                <div
                  className={`booking-content ${
                    expandedBooking === booking.bookingId ? "expanded" : ""
                  }`}
                >
                  <div className="booking-seats">
                    <h4>Seats Booked:</h4>
                    <div className="seats-list">
                      {booking.seats.map((seat, idx) => (
                        <span key={idx} className="seat-tag">
                          {seat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="booking-price">
                    <span>Total Amount:</span>
                    <span className="amount">₹{booking.totalPrice}</span>
                  </div>

                  <div className="booking-actions">
                    <button
                      className="action-btn ticket-btn"
                      onClick={() => {
                        alert("Ticket details for " + booking.bookingId);
                      }}
                    >
                      View Ticket
                    </button>
                    <button
                      className="action-btn cancel-btn"
                      onClick={() => handleCancel(booking.bookingId)}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>

                <button
                  className="expand-btn"
                  onClick={() => toggleExpand(booking.bookingId)}
                >
                  {expandedBooking === booking.bookingId ? "−" : "+"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;

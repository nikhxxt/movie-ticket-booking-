import "../styles/MyBookings.css";

function MyBookings({ setCurrentPage }) {
  const bookings = [
    {
      id: 1,
      movie: "Inception",
      date: "2025-01-15",
      time: "7:00 PM",
      seats: ["A5", "A6"],
      status: "Confirmed",
      amount: 500,
    },
    {
      id: 2,
      movie: "The Dark Knight",
      date: "2025-01-20",
      time: "9:30 PM",
      seats: ["B3", "B4", "B5"],
      status: "Confirmed",
      amount: 750,
    },
    {
      id: 3,
      movie: "Interstellar",
      date: "2025-01-10",
      time: "5:30 PM",
      seats: ["C1", "C2"],
      status: "Completed",
      amount: 500,
    },
  ];

  return (
    <div className="my-bookings">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <button className="back-btn" onClick={() => setCurrentPage("home")}>
          ← Back to Home
        </button>
      </div>

      {bookings.length > 0 ? (
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-left">
                <div className="movie-icon">🎬</div>
                <div className="booking-details">
                  <h2>{booking.movie}</h2>
                  <p className="booking-date">
                    📅 {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p className="booking-time">⏱️ {booking.time}</p>
                  <p className="booking-seats">
                    🎫 Seats: {booking.seats.join(", ")}
                  </p>
                </div>
              </div>

              <div className="booking-right">
                <span className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
                <div className="booking-amount">₹{booking.amount}</div>
                <div className="booking-actions">
                  <button className="action-btn">View Ticket</button>
                  {booking.status === "Confirmed" && (
                    <button className="action-btn cancel">Cancel Booking</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-bookings">
          <div className="empty-icon">🎫</div>
          <h2>No Bookings Yet</h2>
          <p>You haven't booked any movies yet.</p>
          <button
            className="book-btn"
            onClick={() => setCurrentPage("movies")}
          >
            Book a Movie
          </button>
        </div>
      )}
    </div>
  );
}

export default MyBookings;

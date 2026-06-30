import { useState } from "react";

function SeatGrid() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [];

  for (let row = 65; row <= 84; row++) {
    const rowLetter = String.fromCharCode(row);

    for (let seat = 1; seat <= 20; seat++) {
      seats.push(`${rowLetter}${seat}`);
    }
  }

  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="section">

      <h2>Seat Selection</h2>

      <div className="seat-grid">

        {seats.map((seat) => (

          <button
            key={seat}
            className={
              selectedSeats.includes(seat)
                ? "seat selected"
                : "seat"
            }
            onClick={() => selectSeat(seat)}
          >
            {seat}
          </button>

        ))}

      </div>

      <h3>
        Selected Seats:
      </h3>

      <p>
        {selectedSeats.join(", ")}
      </p>

    </div>
  );
}

export default SeatGrid;

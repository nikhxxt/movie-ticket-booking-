import { useEffect, useState } from "react";
import api from "../services/api";

function AddShowtime() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [startHour, setStartHour] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies");
      setMovies(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/showtimes", {
        movieId,
        startHour,
      });

      alert("Showtime Added Successfully!");

      setMovieId("");
      setStartHour("");
    } catch (error) {
      console.log(error);
      alert("Unable to Add Showtime");
    }
  };

  return (
    <div className="section">
      <h2>Add Showtime</h2>

      <form onSubmit={handleSubmit}>

        <select
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          required
        >
          <option value="">Select Movie</option>

          {movies.map((movie) => (
            <option
              key={movie._id}
              value={movie._id}
            >
              {movie.title}
            </option>
          ))}

        </select>

        <input
          type="number"
          placeholder="Start Hour (0-23)"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
          required
        />

        <button type="submit">
          Add Showtime
        </button>

      </form>
    </div>
  );
}

export default AddShowtime;

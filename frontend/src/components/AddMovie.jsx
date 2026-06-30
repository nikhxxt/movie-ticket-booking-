import { useState } from "react";
import api from "../services/api";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/movies", movie);

      alert("Movie Added Successfully!");

      setMovie({
        title: "",
        genre: "",
        duration: "",
        releaseYear: "",
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Movie");
    }
  };

  return (
    <div className="section">
      <h2>Add Movie</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={movie.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={movie.genre}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (Minutes)"
          value={movie.duration}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={movie.releaseYear}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Movie
        </button>

      </form>
    </div>
  );
}

export default AddMovie;

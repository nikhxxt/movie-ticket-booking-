import { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await api.get("/movies");
      setMovies(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="section">

      <h2>Movie List</h2>

      {movies.length === 0 ? (
        <p>No Movies Available</p>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))
      )}

    </div>
  );
}

export default MovieList;

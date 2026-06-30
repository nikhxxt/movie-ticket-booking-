function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <h3>{movie.title}</h3>

      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>

      <p>
        <strong>Duration:</strong> {movie.duration} Minutes
      </p>

      <p>
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>

    </div>
  );
}

export default MovieCard;

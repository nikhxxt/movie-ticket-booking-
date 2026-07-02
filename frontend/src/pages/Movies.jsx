import { useState } from "react";
import "../styles/Movies.css";

function Movies({ setCurrentPage }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      duration: "2h 28m",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      year: 2010,
      shows: ["10:00 AM", "2:30 PM", "7:00 PM", "10:30 PM"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      duration: "2h 32m",
      description: "Batman faces the Joker, a criminal mastermind.",
      year: 2008,
      shows: ["11:00 AM", "3:00 PM", "7:30 PM", "11:00 PM"],
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 8.6,
      duration: "2h 49m",
      description: "A team of explorers travel through a wormhole in space.",
      year: 2014,
      shows: ["9:00 AM", "1:00 PM", "5:30 PM", "9:30 PM"],
    },
    {
      id: 4,
      title: "Parasite",
      genre: "Thriller",
      rating: 8.6,
      duration: "2h 12m",
      description: "A poor family schemes their way into employment.",
      year: 2019,
      shows: ["12:00 PM", "3:30 PM", "8:00 PM"],
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: 9.3,
      duration: "2h 22m",
      description: "Two imprisoned men bond over a number of years.",
      year: 1994,
      shows: ["10:30 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
    },
    {
      id: 6,
      title: "Pulp Fiction",
      genre: "Crime",
      rating: 8.9,
      duration: "2h 34m",
      description: "The stories of various mobsters and gang members.",
      year: 1994,
      shows: ["11:30 AM", "3:30 PM", "7:00 PM", "10:30 PM"],
    },
  ];

  const genres = ["All", "Sci-Fi", "Action", "Thriller", "Drama", "Crime"];

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="movies-page">
      {selectedMovie ? (
        <div className="movie-detail">
          <button
            className="back-btn"
            onClick={() => setSelectedMovie(null)}
          >
            ← Back to Movies
          </button>

          <div className="detail-hero" style={{
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
          }}>
            <div className="detail-content">
              <h1>{selectedMovie.title}</h1>
              <p className="detail-meta">
                <span>⭐ {selectedMovie.rating}</span>
                <span>📅 {selectedMovie.year}</span>
                <span>⏱️ {selectedMovie.duration}</span>
              </p>
              <p className="detail-desc">{selectedMovie.description}</p>
            </div>
          </div>

          <div className="detail-section">
            <h2>Select Show Time</h2>
            <div className="shows-grid">
              {selectedMovie.shows.map((show, idx) => (
                <button
                  key={idx}
                  className="show-btn"
                  onClick={() => {
                    setCurrentPage("booking");
                    setSelectedMovie(null);
                  }}
                >
                  {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="movies-header">
            <h1>Movies</h1>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="genre-filter">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card-large"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="movie-poster-large" style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                }}>
                  <div className="movie-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
                <div className="movie-card-info">
                  <h3>{movie.title}</h3>
                  <p className="genre-tag">{movie.genre}</p>
                  <p className="rating-badge">⭐ {movie.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;

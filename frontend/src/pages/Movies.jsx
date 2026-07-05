import { useState } from "react";
import "../styles/Movies.css";

function Movies({ setCurrentPage }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      duration: "2h 28m",
      description: "A thief who steals corporate secrets through dream-sharing technology is offered a chance at redemption.",
      year: 2010,
      language: "English",
      director: "Christopher Nolan",
      cast: [
        { name: "Leonardo DiCaprio", role: "Cobb" },
        { name: "Marion Cotillard", role: "Mal" },
        { name: "Ellen Page", role: "Ariadne" }
      ],
      shows: ["10:00 AM", "2:30 PM", "7:00 PM", "10:30 PM"],
      poster: "🎬"
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      duration: "2h 32m",
      description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
      year: 2008,
      language: "English",
      director: "Christopher Nolan",
      cast: [
        { name: "Christian Bale", role: "Batman" },
        { name: "Heath Ledger", role: "Joker" },
        { name: "Aaron Eckhart", role: "Harvey Dent" }
      ],
      shows: ["11:00 AM", "3:00 PM", "7:30 PM", "11:00 PM"],
      poster: "🦇"
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 8.6,
      duration: "2h 49m",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      year: 2014,
      language: "English",
      director: "Christopher Nolan",
      cast: [
        { name: "Matthew McConaughey", role: "Cooper" },
        { name: "Anne Hathaway", role: "Brand" },
        { name: "Jessica Chastain", role: "Murph" }
      ],
      shows: ["9:00 AM", "1:00 PM", "5:30 PM", "9:30 PM"],
      poster: "🌌"
    },
    {
      id: 4,
      title: "Parasite",
      genre: "Thriller",
      rating: 8.6,
      duration: "2h 12m",
      description: "A poor family schemes their way into employment at a wealthy household, leading to unexpected consequences.",
      year: 2019,
      language: "Korean",
      director: "Bong Joon-ho",
      cast: [
        { name: "Song Kang-ho", role: "Ki-taek" },
        { name: "Lee Sun-kyun", role: "Dong-ik" },
        { name: "Cho Yeo-jeong", role: "Yeon-kyo" }
      ],
      shows: ["12:00 PM", "3:30 PM", "8:00 PM"],
      poster: "🎭"
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: 9.3,
      duration: "2h 22m",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      year: 1994,
      language: "English",
      director: "Frank Darabont",
      cast: [
        { name: "Tim Robbins", role: "Andy" },
        { name: "Morgan Freeman", role: "Red" },
        { name: "Bob Gunton", role: "Warden" }
      ],
      shows: ["10:30 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
      poster: "🔓"
    },
    {
      id: 6,
      title: "Pulp Fiction",
      genre: "Crime",
      rating: 8.9,
      duration: "2h 34m",
      description: "The stories of various mobsters and gang members intertwine in four tales of violence and redemption.",
      year: 1994,
      language: "English",
      director: "Quentin Tarantino",
      cast: [
        { name: "John Travolta", role: "Vincent" },
        { name: "Samuel L. Jackson", role: "Jules" },
        { name: "Uma Thurman", role: "Mia" }
      ],
      shows: ["11:30 AM", "3:30 PM", "7:00 PM", "10:30 PM"],
      poster: "🎥"
    }
  ];

  const genres = ["All", "Sci-Fi", "Action", "Thriller", "Drama", "Crime"];

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleSelectShowtime = (showtime) => {
    setSelectedShowtime(showtime);
    localStorage.setItem("selectedMovie", JSON.stringify({
      ...selectedMovie,
      selectedShowtime: showtime
    }));
    setCurrentPage("booking");
  };

  return (
    <div className="movies-page">
      {selectedMovie ? (
        <div className="movie-detail-view">
          <button className="back-btn" onClick={() => setSelectedMovie(null)}>
            ← Back to Movies
          </button>

          <div className="movie-detail-banner">
            <div className="detail-container">
              <div className="movie-poster-large">
                <div className="poster-emoji">{selectedMovie.poster}</div>
              </div>
              
              <div className="detail-content">
                <h1>{selectedMovie.title}</h1>
                <div className="movie-meta">
                  <span className="rating">⭐ {selectedMovie.rating}/10</span>
                  <span className="year">📅 {selectedMovie.year}</span>
                  <span className="duration">⏱️ {selectedMovie.duration}</span>
                  <span className="language">🗣️ {selectedMovie.language}</span>
                </div>
                
                <p className="director"><strong>Director:</strong> {selectedMovie.director}</p>
                <p className="genre"><strong>Genre:</strong> {selectedMovie.genre}</p>
                <p className="description">{selectedMovie.description}</p>
                
                <div className="cast-section">
                  <h3>Cast</h3>
                  <div className="cast-list">
                    {selectedMovie.cast.map((actor, idx) => (
                      <div key={idx} className="cast-member">
                        <div className="cast-avatar">👤</div>
                        <div className="cast-info">
                          <p className="actor-name">{actor.name}</p>
                          <p className="actor-role">{actor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showtimes-section">
            <h2>Select Showtime</h2>
            <div className="showtimes-grid">
              {selectedMovie.shows.map((showtime, idx) => (
                <button
                  key={idx}
                  className={`showtime-btn ${selectedShowtime === showtime ? 'active' : ''}`}
                  onClick={() => handleSelectShowtime(showtime)}
                >
                  {showtime}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="movies-browse">
          <div className="search-bar">
            <input
              type="text"
              placeholder="🔍 Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="genre-filter">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <div className="movie-poster">
                  <div className="poster-emoji">{movie.poster}</div>
                  <div className="movie-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-rating">
                    <span className="stars">⭐ {movie.rating}</span>
                    <span className="year">{movie.year}</span>
                  </div>
                  <p className="genre-tag">{movie.genre}</p>
                  <p className="duration">⏱️ {movie.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="no-movies">
              <p>No movies found matching your criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Movies;

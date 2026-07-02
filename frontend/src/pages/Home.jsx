import "../styles/Home.css";

function Home({ setCurrentPage }) {
  const movies = [
    { id: 1, title: "Inception", rating: "8.8", genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", rating: "9.0", genre: "Action" },
    { id: 3, title: "Interstellar", rating: "8.6", genre: "Sci-Fi" },
    { id: 4, title: "Parasite", rating: "8.6", genre: "Thriller" },
    { id: 5, title: "The Shawshank Redemption", rating: "9.3", genre: "Drama" },
    { id: 6, title: "Pulp Fiction", rating: "8.9", genre: "Crime" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CineBook</h1>
          <p>Book your favorite movies with ease</p>
          <button
            className="cta-button"
            onClick={() => setCurrentPage("movies")}
          >
            Explore Movies →
          </button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster" style={{
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              }}>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <button className="book-btn" onClick={() => setCurrentPage("movies")}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <div className="link-card" onClick={() => setCurrentPage("movies")}>
          <div className="link-icon">🎥</div>
          <h3>Browse Movies</h3>
          <p>Discover latest releases</p>
        </div>
        <div className="link-card" onClick={() => setCurrentPage("bookings")}>
          <div className="link-icon">🎫</div>
          <h3>My Bookings</h3>
          <p>Manage your tickets</p>
        </div>
        <div className="link-card" onClick={() => setCurrentPage("support")}>
          <div className="link-icon">💬</div>
          <h3>Get Help</h3>
          <p>Contact support</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

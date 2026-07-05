import "../styles/Home.css";

function Home({ setCurrentPage }) {
  const movies = [
    { id: 1, title: "Inception", rating: "8.8", genre: "Sci-Fi", poster: "🎬" },
    { id: 2, title: "The Dark Knight", rating: "9.0", genre: "Action", poster: "🦇" },
    { id: 3, title: "Interstellar", rating: "8.6", genre: "Sci-Fi", poster: "🌌" },
    { id: 4, title: "Parasite", rating: "8.6", genre: "Thriller", poster: "🎭" },
    { id: 5, title: "The Shawshank Redemption", rating: "9.3", genre: "Drama", poster: "🔓" },
    { id: 6, title: "Pulp Fiction", rating: "8.9", genre: "Crime", poster: "🎥" },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>🎬 Welcome to CineBook</h1>
          <p>Book your favorite movies with the best experience</p>
          <button
            className="cta-button"
            onClick={() => setCurrentPage("movies")}
          >
            Explore Movies →
          </button>
        </div>
      </div>

      <div className="featured-section">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => setCurrentPage("movies")}>
              <div className="movie-poster">
                <div style={{ fontSize: "4rem" }}>{movie.poster}</div>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <button className="book-btn">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h2>Why Choose CineBook?</h2>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-card-icon">⚡</div>
            <h3>Quick Booking</h3>
            <p>Book your tickets in seconds with our fast and secure checkout</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Get exclusive offers and discounts on every booking</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">🎯</div>
            <h3>Easy Seat Selection</h3>
            <p>Interactive seat map for choosing your perfect seats</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Access CineBook anytime, anywhere on any device</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>Your payment information is always safe and encrypted</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">🎁</div>
            <h3>Exclusive Rewards</h3>
            <p>Earn points on every booking and enjoy premium benefits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

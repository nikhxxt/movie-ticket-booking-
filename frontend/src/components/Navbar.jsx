import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, setCurrentPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentPage("login");
    setDropdownOpen(false);
  };

  const user = JSON.parse(localStorage.getItem("user")) || { firstName: "Guest" };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setCurrentPage("home")}>
          🎬 CineBook
        </div>

        <ul className="navbar-menu">
          <li>
            <button
              className={`nav-link ${currentPage === "home" ? "active" : ""}`}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentPage === "movies" ? "active" : ""}`}
              onClick={() => setCurrentPage("movies")}
            >
              Movies
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentPage === "bookings" ? "active" : ""}`}
              onClick={() => setCurrentPage("bookings")}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentPage === "support" ? "active" : ""}`}
              onClick={() => setCurrentPage("support")}
            >
              Support
            </button>
          </li>
        </ul>

        <div className="navbar-user">
          <div className="user-dropdown">
            <button
              className="user-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              👤 {user.firstName}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">Profile</button>
                <button className="dropdown-item">My Bookings</button>
                <button className="dropdown-item">Settings</button>
                <hr />
                <button className="dropdown-item logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

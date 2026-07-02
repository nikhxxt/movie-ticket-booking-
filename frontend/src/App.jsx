import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import AddShowtime from "./components/AddShowtime";
import SeatGrid from "./components/SeatGrid";
import BookingForm from "./components/BookingForm";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Simple routing based on hash or current page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "home":
      default:
        return (
          <>
            <Navbar />
            <div className="container">
              <AddMovie />
              <GenreFilter />
              <MovieList />
              <AddShowtime />
              <SeatGrid />
              <BookingForm />
            </div>
          </>
        );
    }
  };

  return <>{renderPage()}</>;
}

export default App;

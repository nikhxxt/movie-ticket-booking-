import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Support from "./pages/Support";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

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

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    window.location.hash = "#home";
  };

  const renderPage = () => {
    if (!isAuthenticated && currentPage !== "login" && currentPage !== "signup") {
      return <Login setCurrentPage={setCurrentPage} onAuthSuccess={handleAuthSuccess} />;
    }

    switch (currentPage) {
      case "login":
        return <Login setCurrentPage={setCurrentPage} onAuthSuccess={handleAuthSuccess} />;
      case "signup":
        return <Signup setCurrentPage={setCurrentPage} onAuthSuccess={handleAuthSuccess} />;
      case "movies":
        return (
          <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Movies setCurrentPage={setCurrentPage} />
          </>
        );
      case "booking":
        return (
          <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Booking setCurrentPage={setCurrentPage} />
          </>
        );
      case "bookings":
        return (
          <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MyBookings setCurrentPage={setCurrentPage} />
          </>
        );
      case "support":
        return (
          <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Support setCurrentPage={setCurrentPage} />
          </>
        );
      case "home":
      default:
        return (
          <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Home setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  return <>{renderPage()}</>;
}

export default App;

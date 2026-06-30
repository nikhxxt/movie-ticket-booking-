import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import AddShowtime from "./components/AddShowtime";
import SeatGrid from "./components/SeatGrid";
import BookingForm from "./components/BookingForm";

function App() {
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

export default App;
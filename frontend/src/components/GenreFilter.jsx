import { useState } from "react";

function GenreFilter() {
  const [genre, setGenre] = useState("All");

  const handleChange = (e) => {
    setGenre(e.target.value);
    alert(`Selected Genre: ${e.target.value}`);
  };

  return (
    <div className="section">

      <h2>Filter Movies By Genre ⭐</h2>

      <select
        value={genre}
        onChange={handleChange}
      >
        <option>All</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
      </select>

    </div>
  );
}

export default GenreFilter;

const Movie = require("../models/Movie");

// Add Movie
const addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addMovie,
  getMovies,
};

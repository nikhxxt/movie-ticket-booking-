const express = require("express");
const router = express.Router();

const {
  addMovie,
  getMovies,
} = require("../controllers/movieController");

// Add a new movie
router.post("/", addMovie);

// Get all movies
router.get("/", getMovies);

module.exports = router;

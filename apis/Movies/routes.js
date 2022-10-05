const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");
const { authMidClient } = require("../Users/services/auth.service");


// GET
// route.get("/active-movie", moviesController.getActiveMovie);
route.get("/movies/:movie_id", moviesController.getOneMovie);
route.get("/movies", moviesController.getAllMovies);

// POST
route.post("/movie", moviesController.createMovie);
route.post("/restore-movie/:movie_id", moviesController.restoreMovie);

// PUT
route.put("/movie/:movie_id", moviesController.editMovie);

// DELETE
route.delete("/delete-movie/:movie_id", moviesController.deleteMovie);

module.exports = route;


// FAZER!!!!
// route.get
// /movies-api/movies/?genre=drama
// /movies-api/movies/?sortBy=title
// route.get("movies/?sortBy=genre", moviesController.getMovieGenre);



const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");
const { authMidClient } = require("../Users/services/auth.service");


// GET
route.get("/movies/:movie_id", moviesController.getOneMovie);
route.get("/movies", moviesController.getAllMovies);
route.get("/movies-genre", moviesController.getMoviesbyGenre);
route.get("/movies-title", moviesController.getMoviebyTitle);

// POST
route.post("/movie", moviesController.createMovie);
route.post("/restore-movie/:movie_id", moviesController.restoreMovie);

// PUT
route.put("/movie/:movie_id", moviesController.editMovie);

// DELETE
route.delete("/delete-movie/:movie_id", moviesController.deleteMovie);

module.exports = route;




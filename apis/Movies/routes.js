const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");
const { authMidEmployee } = require("../Users/services/auth.service");


// GET
route.get("/movies/:movie_id", moviesController.getOneMovie);
route.get("/movies", moviesController.getAllMovies);
route.get("/movies-genres", moviesController.getMoviesbyGenres);
route.get("/movies-title", moviesController.getMoviebyTitle);

// POST
route.post("/movie", authMidEmployee, moviesController.createMovie);
route.post("/restore-movie/:movie_id", authMidEmployee, moviesController.restoreMovie);

// PUT
route.put("/movie/:movie_id", authMidEmployee, moviesController.editMovie);

// DELETE
route.delete("/hard-delete-movie/:movie_id", authMidEmployee, moviesController.hardDeleteMovie);
route.delete("/soft-delete-movie/:movie_id", authMidEmployee, moviesController.softDeleteMovie);

module.exports = route;




const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");
const { authMidEmployee } = require("../People/services/auth.service");

// GET
route.get("/movies/:movie_id", moviesController.getOneMovie);
route.get("/movies", moviesController.getAllMovies);
route.get("/movies-genres/:genre", moviesController.getMoviesbyGenres);
route.get("/movies-title", moviesController.getMoviebyTitle);

// POST
route.post("/movie", moviesController.createMovie);
route.post("/restore-movie/:movie_id", moviesController.restoreMovie);

// PUT
route.put("/movie/:movie_id", moviesController.editMovie);
route.put("/edit-genre/:movie_id/:genre_id", moviesController.editGenre);

// DELETE
route.delete(
  "/hard-delete-movie/:movie_id",
  authMidEmployee,
  moviesController.hardDeleteMovie
);
route.delete(
  "/soft-delete-movie/:movie_id",
  authMidEmployee,
  moviesController.softDeleteMovie
);

module.exports = route;

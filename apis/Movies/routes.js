const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");

route.get("/movies/:movie_id", moviesController.getOneMovie);
route.get("/movies", moviesController.getAllMovie);
route.post("/movie", moviesController.createMovie);
route.post("/restore-movie/:movie_id", moviesController.restoreMovie);
route.put("/movie/:movie_id", moviesController.editMovie);
route.delete("/delete-movie/:movie_id", moviesController.deleteMovie);

module.exports = route;


const { Router } = require("express");
const route = Router();
const moviesController = require("./controllers/MoviesController");

route.get("/movies", moviesController.getall);
route.get("/movies/:id", moviesController.getOne);
route.post("movie", moviesController.createMovie);
route.put("movie/:id", moviesController.editMovie);
route.delete("/delete-movie/:movieId", moviesController.deleteMovie);


module.exports = route;

// ONDE FICA???
// ('/movie/') -> alugar um filme
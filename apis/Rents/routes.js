const { Router } = require("express");
const route = Router();
const rentsController = require("./controllers/rentsController");

// GET
route.get("/rents", rentsController.getAllRents);
route.get("/rents/:client_id/rents", rentsController.getRentsByClient);

// POST
// cliente fez um aluguel (rent)
route.post("/rents/:client_id/movie/:movie_id", rentsController.createRent);

// DELETE
// cliente devolveu um aluguel (rent)
route.delete("/rents/rent-delete/:id", rentsController.deleteRent); 

module.exports = route;


const { Router } = require("express");
const route = Router();
const rentsController = require("./controllers/rentsController");

// GET
route.get("/rents", rentsController.getAllRents);
route.get("/rents/:client_id/rent/:id", rentsController.getRentsbyClient);

// POST
// cliente fez um aluguel (rent)
route.put("/rents/:client_id/movie/:movie_id", rentsController.newRent);

// PUT
// cliente fez um aluguel de um filme, porém desistiu imediatamente depois
route.patch("/rent/:rent_id/", rentsController.editRent);

// DELETE
// cliente devolveu um aluguel (rent)
route.delete("/rents/rent-delete/:rent_id", rentsController.deleteRent); 

module.exports = route;


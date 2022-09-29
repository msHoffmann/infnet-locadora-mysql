const { Router } = require("express");
const route = Router();
const rentsController = require("./controllers/rentsController");


route.get("/rents", rentsController.getAllRents);

route.patch(
    "/rent/:rent_id/",
    rentsController.editRent);

    
// cliente alugou um filme, vamos colocar que o cliente alugou o filme
// route.post("/rent/:client_id/movie/:movie_id", rentsController.newRent);


// cliente desistiu do aluguel, foi embora da locadora
// route.delete("/rent/:rent_id/", rentsController.deleteRent);    

module.exports = route;


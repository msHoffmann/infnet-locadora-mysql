const { Router } = require("express");
const route = Router();
const ClientsController = require("./controllers/ClientsController");


route.get("/clients", ClientsController.getAllClients);
route.get("/client/:cliend_id", ClientsController.getOneClient);
route.post("/client", ClientsController.createClient);
route.put("client/:client_id", ClientsController.editClient);
route.delete("/client/:client_id", ClientsController.deleteClient);

module.exports = route;

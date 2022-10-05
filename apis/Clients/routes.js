const { Router } = require("express");
const route = Router();
const { authMidClient } = require("../Users/services/auth.service");
const ClientsController = require("./controllers/ClientsController");

// GET
route.get("/client/:client_id", ClientsController.getOneClient);
route.get("/clients", ClientsController.getAllClients);

// POST
route.post("/client", ClientsController.createClient);

// PUT
route.put("/edit-client/:client_id", ClientsController.editClient);

// DELETE
route.delete("/delete-client/:client_id", ClientsController.deleteClient);

module.exports = route;

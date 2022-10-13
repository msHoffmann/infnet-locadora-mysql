const { Router } = require("express");
const route = Router();
const { authMidEmployee } = require("../Users/services/auth.service");
const { restoreClient } = require("./controllers/ClientsController");
const ClientsController = require("./controllers/ClientsController");

// router.use(authMidEmployee); quero colocar em todas de POST, PUT, DELETE

// GET
route.get("/client/:client_id", ClientsController.getOneClient);
route.get("/clients", ClientsController.getAllClients);

// POST
route.post("/client", ClientsController.createClient);
route.post("/client-restore/:client_id", restoreClient);
// PUT
route.put("/edit-client/:client_id", ClientsController.editClient);

// DELETE
route.delete("/delete-client/:client_id", ClientsController.deleteClient);

module.exports = route;

const { Router } = require("express");
const route = Router();
const { authMidEmployee } = require("../Users/services/auth.service");
const { restorePeople } = require("./controllers/PeopleController");
const PeopleController = require("./controllers/PeopleController");

// router.use(authMidEmployee); quero colocar em todas de POST, PUT, DELETE

// GET
route.get("/people/:people_id", PeopleController.getOnePeople);
route.get("/people", PeopleController.getAllPeople);

// POST
route.post("/people", authMidEmployee, PeopleController.createPeople);
route.post("/people-restore/:people_id", authMidEmployee, restorePeople);
// PUT
route.put("/edit-people/:people_id", authMidEmployee, PeopleController.editPeople);

// DELETE
route.delete("/delete-people/:people_id", authMidEmployee, PeopleController.deletePeople);

module.exports = route;

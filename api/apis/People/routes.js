const { Router } = require("express");
const route = Router();
const { authMidEmployee } = require("../People/services/auth.service");
const PeopleController = require("./controllers/PeopleController");

// GET
route.get("/people/:people_id", PeopleController.getOnePeople);
route.get("/people", PeopleController.getAllPeople);

// POST
route.post("/create-people", PeopleController.createPeople);
route.post("/people-restore/:people_id", PeopleController.restorePeople);

// PUT
route.put("/edit-people/:people_id", PeopleController.editPeople);

// DELETE
route.delete(
  "/hard-delete-people/:people_id",
  authMidEmployee,
  PeopleController.hardDeletePeople
);
route.delete(
  "/soft-delete-people/:people_id",
  authMidEmployee,
  PeopleController.softDeletePeople
);

module.exports = route;

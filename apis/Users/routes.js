const { Router } = require("express");
const route = Router();
const userController = require("./controllers/userController");
// const { authMidEmployee } = require("./services/auth.service");

// route.use(authMidEmployee);

// POST
route.post("/user", userController.createUser);

module.exports = route;
const { router } = require("express");
const jwt = require("jsonwebtoken");
const { authMidFuncionario } = require("./services/auth.service");
const userController = require("./controllers/userController");
const router = Router();

router.use(authMidFuncionario);

// POST
route.post("/user", userController.createUser);

module.exports = router;
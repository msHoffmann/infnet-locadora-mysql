const { router } = require("express");
const { authMidEmployee, authMidEmployee } = require("./services/auth.service");
const userController = require("./controllers/userController");
const router = Router();

router.use(authMidEmployee);

// POST
route.post("/user", userController.createUser);

module.exports = router;
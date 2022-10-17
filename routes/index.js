const peopleApi = require("../apis/People/routes");
const moviesApi = require("../apis/Movies/routes");
const rentsApi = require("../apis/Rents/routes");
const user = require("../apis/Users/routes");

const { createToken } = require("../apis/Users/services/auth.service");

module.exports = (app) => {
    app.get("/locadora", (req, res) => res.send("Welcome to my first Backend Project :)"));
    app.post("/auth", createToken);
    app.use("/people-api", peopleApi);
    app.use("/movies-api", moviesApi);
    app.use("/rents-api", rentsApi);
    app.use("/users-api", user);
}

const peopleApi = require("../apis/People/routes");
const moviesApi = require("../apis/Movies/routes");
const rentsApi = require("../apis/Rents/routes");

const { createToken } = require("../apis/People/services/auth.service");

module.exports = (app) => {
  app.get("/locadora", (req, res) =>
    res.send("Welcome to my first Backend Project :)")
  );
  app.post("/auth-create-token", createToken);
  app.use("/people-api", peopleApi);
  app.use("/movies-api", moviesApi);
  app.use("/rents-api", rentsApi);
};

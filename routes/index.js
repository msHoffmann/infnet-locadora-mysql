const clientsApi = require("../apis/Clients/routes");
const moviesApi = require("../apis/Movies/routes");
const rentsApi = require("../apis/Rents/routes");

module.exports = (app) => {
    app.get("/", (req, res) => res.send("Welcome to Frania's Api :)"));
    app.use("/clients-api", clientsApi);
    app.use("/movies-api", moviesApi);
    app.use("/rents-api", rentsApi);
}

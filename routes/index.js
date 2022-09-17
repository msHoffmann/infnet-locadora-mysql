const clientsApi = require("../apis/Clients/routes");
const rentApi = require("../apis/Rents/routes");

module.exports = (app) => {
    app.get("/", (req, res) => res.send("Welcome to Frania's Api :)"));
    app.use("/clients-api", clientsApi)
}
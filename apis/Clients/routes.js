const { Router } = require("express");
const route = Router();

route.get("/clients", (req, res) =>
res.send({ message: "Tudo funcionando.", serviceRoute: "Clients Service API"})
);

module.exports = route;

const jwt = require("jsonwebtoken");
const database = require("../../../dbConfig/db/models");
require("dotenv").config();

const createToken = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await database.AdminUsers.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            if (user.password == password) {
                const payload = {
                    name: name,
                    email: email,
                };
                const token = jwt.sign(payload, process.env.JWT_KEY);
                res.set("Authorization", token);
                res.status(204).send("Success");           
            }
        } else {
            return res.status(400).send("Invalid credentials.");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const authMidClient = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        if (payload.role === "cliente") {
          return next();
        } else {
          return res.status(400).send("Invalid token");
        }
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      return res.status(401).send("Não está autorizado.");
    }
  };
  
  const authMidFuncionario = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        if (payload.role === "funcionario") {
          return next();
        } else {
          return res.status(400).send("Invalid token");
        }
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      return res.status(401).send("Não está autorizado.");
    }
  };
  
  module.exports = {
    authMidEstudante,
    createToken,
    authMidDocente
  };
  
  
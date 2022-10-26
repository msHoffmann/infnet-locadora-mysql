const jwt = require("jsonwebtoken");
const database = require("../../../dbConfig/db/models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createToken = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const user = await database.People.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare === true) {
        const payload = {
          email: email,
          name: name,
          role: role,
        };
        const token = jwt.sign(payload, process.env.JWT_KEY, {
          expiresIn: "2h",
        });
        res.set("Authorization", token);
        res.status(204).send("Success");
      } else {
        return res.status(400).send("Invalid credentials.");
      }
    } else {
      return res.status(400).send("Usuário não encontrado. Tente novamente.");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const authMidEmployee = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_KEY);
      console.log(payload);
      if (payload.role === "Employee") {
        return next();
      } else {
        return res.status(400).send("Token inválido.");
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    return res.status(401).send("Você não está autorizado.");
  }
};

module.exports = {
  createToken,
  authMidEmployee,
};

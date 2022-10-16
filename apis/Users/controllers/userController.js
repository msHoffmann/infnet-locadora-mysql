const database = require("../../../dbConfig/db/models");
const validator = require("validator");

class User {
  static async createUser(req, res) {
    const { email, name, password } = req.body;
    const isEmail = email ? validator.isEmail(email) : false;
    const isPassword = password
      ? validator.isStrongPassword(password, [
          { minLength: 8 },
          { minUppercase: 1 },
          { minSymbols: 1 },
          { minNumbers: 1 },
          {},
        ])
      : false;

    if (!isEmail) {
      return res.status(400).send("Invalid credentials.");
    }
    if (!isPassword) {
      return res.status(400).send("Invalid credentails.");
    }
    try {
      const user = await database.AdminUsers.create({
        name,
        email,
        password,
      });

      return res.status(200).send(user);
    } catch {
      return error.message;
    }
  }
}

module.exports = User;
const database = require("../../../dbConfig/db/models");
const validator = require("validator");
const db = require("../../../dbConfig/db/models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await database.People.findAndCountAll();
      return res.status(200).send(allPeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOnePeople(req, res) {
    const { people_id } = req.params;
    try {
      const onePeople = await database.People.findOne({
        where: {
          id: Number(people_id),
        },
      });

      if (!onePeople) {
        return res.status(404).send("A pessoa não existe. Tente outro id.");
      }

      return res.status(200).send(onePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createPeople(req, res) {
    const { name, email, role, password } = req.body;
    const isEmail = email ? validator.isEmail(email) : false;
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    console.log(newPassword);
    newPassword
      ? await database.People.create({
          name,
          email,
          role,
          password: newPassword,
        })
      : console.log("Erro");

    try {
      const verifyingPeople = await database.People.findOne({
        where: {
          email: email,
        },
      });

      if (verifyingPeople) {
        return res.send("A pessoa já está cadastrada.", { verifyingPeople });
      }

      if (!isEmail) {
        return res.status(400).send("E-mail não válido. Escreva novamente.");
      }

      const people = await database.People.create({
        name,
        email,
        role,
        password,
      });
      return res
        .status(200)
        .send({ msg: "Pessoa cadastrada com sucesso!", ...people });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restorePeople(req, res) {
    const { people_id } = req.params;
    try {
      await database.peoples.restore({
        where: {
          id: Number(people_id),
        },
      });
      return res.status(200).send({ msg: "Pessoa restaurada com sucesso!" });
    } catch (error) {}
  }

  static async editPeople(req, res) {
    const { people_id } = req.params;
    const newPeople = req.body;
    try {
      await database.peoples.update(newPeople, {
        where: {
          id: Number(people_id),
        },
      });

      const updatedPeople = await database.People.findOne({
        where: {
          id: Number(people_id),
        },
      });
      return res
        .status(200)
        .send({ message: "Pessoa atualizada com sucesso!", ...updatedPeople });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async softDeletePeople(req, res) {
    const { people_id } = req.params;
    try {
      await database.People.destroy({
        where: {
          id: Number(people_id),
        },
      });
      return res.status(200).send("Pessoa deletada com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async hardDeletePeople(req, res) {
    const { people_id } = req.params;
    try {
      await database.People.destroy({
        where: {
          id: Number(people_id),
        },
        force: true,
      });
      return res.status(200).send("Pessoa deletada com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PeopleController;

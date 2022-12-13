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
        throw "A pessoa não existe. Tente outro id.";
      }

      return res.status(200).send(onePeople);
    } catch (error) {
      return res.status(500).send({
        Message: error,
      });
    }
  }

  static async createPeople(req, res) {
    const { name, email, role, password } = req.body;
    const isEmail = email ? validator.isEmail(email) : false;
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    try {
      if (!isEmail) {
        return res
          .status(400)
          .send({ msg: "E-mail não válido. Escreva novamente." });
      }

      const verifyingPeople = await database.People.findOne({
        where: {
          email: email,
        },
      });

      if (verifyingPeople) {
        return res.status(400).send({ msg: "A pessoa já está cadastrada." });
      }

      const people = await database.People.create({
        name,
        email,
        role,
        password: newPassword,
      });
      return res
        .status(200)
        .send({ msg: "Pessoa cadastrada com sucesso!", people });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restorePeople(req, res) {
    const { people_id } = req.params;
    try {
      await database.People.restore({
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
      await database.People.update(newPeople, {
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
        .send({ msg: "Pessoa atualizada com sucesso!", ...updatedPeople });
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
      return res.status(200).send({ msg: "Pessoa deletada com sucesso!" });
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
      return res.status(200).send({ msg: "Pessoa deletada com sucesso!" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PeopleController;

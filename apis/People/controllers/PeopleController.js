const database = require("../../../dbConfig/db/models");
const validator = require("validator");

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
          id: Number(people_id)
        }
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
    
    try {
      const verifyingPeople = await database.People.findOne({
        where: {
          email: email
        }
      });

      if (verifyingPeople) {
        return res.send("A pessoa já está cadastrada.", { verifyingPeople });
      }

      // colocar BCRYPT!!!!

      const people = await database.People.create({
        name,
        email,
        role,
        password
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
          id: Number(people_id)
        }
      });
      return res.status(200).send({ msg: "Pessoa restaurada com sucesso!"});
    } catch (error) {}
  }

  static async editPeople(req, res) {
    const { people_id } = req.params;
    const newPeople = req.body;
    try {
      await database.peoples.update(newPeople, {
        where: {
          id: Number(people_id)
        }
      });

      const updatedPeople = await database.People.findOne({
        where: {
          id: Number(people_id)
        }
      });
      return res
        .status(200)
        .send({ message: "Pessoa atualizada com sucesso!", ...updatedPeople });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletePeople(req, res) {
    const { people_id } = req.params;
    try {
      await database.People.destroy({
        where: {
          id: Number(people_id)
        }
      });
      return res
      .status(200)
      .send({ message: `A pessoa com id ${people_id} foi deletada com sucesso.`});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PeopleController;

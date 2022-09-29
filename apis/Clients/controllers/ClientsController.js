const database = require("../../../dbConfig/db/models");
const { MissingEmailExecption } = require("../../common/exceptions");

class ClientsController {
  
  static async getAllClients(req, res) {
    try {
      const allClients = await database.Clients.findAll();
      return res.status(200).send(allClients);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneClient(req, res) {
    const { client_id } = req.params;
    try {
      const oneClient = await database.Clients.findOne({
        where: {
          id: Number(client_id)
        }
      });

      if (!oneClient) {
        return res.status(404).send("O cliente não existe. Tente outro id.");
      }

      return res.status(200).send(oneClient);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createClient(req, res) {
    const { name, email } = req.body;
    const isEmail = validator.isEmail(email);
    if(!isEmail) throw new MissingEmailExecption();

    try {
      const verifyingClient = await database.Clients.findOne({
        where: {
          email: email
        }
      });

      if (verifyingClient) {
        return res.send("O cliente já está cadastrado.", { verifyingClient });
      }
      const client = await database.Clients.create({
        name,
        email,
      });
      return res
        .status(200)
        .send({ msg: "Cliente cadastrado com sucesso!", ...movie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editClient(req, res) {
    const { client_id } = req.params;
    const newClient = req.body;
    try {
      await database.Clients.update(newClient, {
        where: {
          id: Number(client_id)
        }
      });

      const updatedClient = await database.Clients.findOne({
        where: {
          id: Number(client_id)
        }
      });
      return res
        .status(200)
        .send({ msg: "Cliente atualizado com sucesso!", ...updatedClient });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteClient(req, res) {
    const { client_id } = req.params;
    try {
      await database.Movies.destroy({
        where: {
          id: Number(client_id)
        }
      });
      return res.status(200).send("Cliente deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = ClientsController;

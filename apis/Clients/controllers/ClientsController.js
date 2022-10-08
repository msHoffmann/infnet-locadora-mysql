const database = require("../../../dbConfig/db/models");
const { MissingEmailException } = require("../../Movies/common/exceptions");
const validator = require("validator");

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
    const { name, email, role } = req.body;
    const isEmail = validator.isEmail(email);
    if(!isEmail) throw new MissingEmailException();

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
        role
      });
      return res
        .status(200)
        .send({ msg: "Cliente cadastrado com sucesso!", ...client });
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
        .send({ message: "Cliente atualizado com sucesso!", ...updatedClient });
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
      return res
      .status(200)
      .send({ message: "O cliente com id: ${client_id} foi deletado com sucesso."});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = ClientsController;

const database = require("../../../dbConfig/db/models");

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

      return res.status(200).send(client);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createClient(req, res) {
    const { name, email, rent} = req.body;
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
        rent
      });
      return res
        .status(200)
        .send({ msg: "Cliente cadastrado com sucesso!", ...movie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editClient(req, res) {
    const { clientId } = req.params;
    const newClient = req.body;
    try {
      await database.Clients.update(newClient, {
        where: {
          id: Number(clientId)
        }
      });

      const updatedClient = await database.Clients.findOne({
        where: {
          id: Number(clientId)
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
    const { clientId } = req.params;
    try {
      await database.Movies.destroy({
        where: {
          id: Number(clientId)
        }
      });
      return res.status(200).send("Cliente deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = ClientsController;

const database = require("../../../dbConfig/db/models");

class RentsController {
  static async getAllRents(req, res) {
    try {
      const allRents = await database.Rents.findAll({
        include: [
          {
            model: database.Movies,
          },
          {
            model: database.Clients,
          },
        ],
      });
      return res.status(200).send(allRents);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getRentsByClient(req, res) {
    const { client_id } = req.params;
    try {
      const rentsClient = await database.Rents.findOne({
        where: {
          id: Number(client_id),
        },
        include: [
          {
            model: database.Clients,
          },
          {
            model: database.Movies,
          },
        ],
      });
      if (!rentsClient) {
        return res.status(404).send("Aluguel não existe.");
      }f
      return res.status(200).send(rentsClient);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createRent(req, res) {
    const { movie_id, client_id } = req.params;
    try {
      const verifyingRent = await database.Rents.findOne({
        where: {
          movie_id: movie_id,
          status: "Alugado!",
        },
      });

      if (verifyingRent) {
        return res.send("O filme já está alugado! Alugue outro.", { verifyingRent });
      }

      const verifyingClient = await database.Clients.findOne({
        where: {
          id: client_id
        },
      });

      if (!verifyingClient) {
        return res.send("Usuário não existe.", { verifyingClient });
      }

      const verifyingMovie = await database.Movies.findOne({
        where: {
          id: movie_id
        },
      });

      if (!verifyingMovie) {
        return res.send("Filme não existe.", { verifyingMovie });
      }

      const rent = await database.Rents.create({
          movie_id: movie_id,
          client_id: client_id,
          status: "Alugado!"
      });

      return res
        .status(200)
        .send({ msg: "Filme alugado com sucesso!", ...rent });
    } catch (error) {
      console.log("erro!!!!", error);
      return res.status(500).send(error.message);
    }
  }

  static async deleteRent(req, res) {
    const { id } = req.params;
    try {
      await database.Rents.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .send("Obrigada por ter devolvido o filme, volte sempre :)");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = RentsController;

// EXEMPLO
// where: {
//   id: 1, 2, 3
// },
// order:[
//   ['id', 'DESC'],
//   ['name', 'ASC']
// ]

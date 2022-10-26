const database = require("../../../dbConfig/db/models");

class RentsController {
  static async getAllRents(req, res) {
    try {
      const allRents = await database.Rents.findAndCountAll({
        include: [
          {
            model: database.Movies,
            include: {
              model: database.Genres,
              attributes: ["description"],
            },
          },
          {
            model: database.People,
          },
        ],
      });
      return res.status(200).send({
        Rents: allRents,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getRentsByPeople(req, res) {
    const { people_id } = req.params;
    try {
      const rentsPeople = await database.Rents.findOne({
        where: {
          id: Number(people_id),
        },
        include: [
          {
            model: database.People,
          },
          {
            model: database.Movies,
            include: {
              model: database.Genres,
              attributes: ["description"],
            },
          },
        ],
      });
      if (!rentsPeople) {
        return res.status(404).send({ msg: "Aluguel não existe." });
      }
      return res.status(200).send({
        Rents: rentsPeople,
        // Genres: allGenres,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createRent(req, res) {
    const { movie_id, people_id } = req.params;
    try {
      const verifyingRent = await database.Rents.findOne({
        where: {
          movie_id: movie_id,
          status: "Filme alugado! Divirta-se!",
        },
      });

      if (verifyingRent) {
        return res.send("O filme já está alugado! Alugue outro.", {
          verifyingRent,
        });
      }

      const verifyingPeople = await database.People.findOne({
        where: {
          id: people_id,
        },
      });

      if (!verifyingPeople) {
        return res.send("Usuário não existe.", { verifyingPeople });
      }

      const verifyingMovie = await database.Movies.findOne({
        where: {
          id: movie_id,
        },
      });

      if (!verifyingMovie) {
        return res.send("Filme não existe.", { verifyingMovie });
      }

      const rent = await database.Rents.create({
        movie_id: movie_id,
        people_id: people_id,
        status: "Filme alugado! Divirta-se!",
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

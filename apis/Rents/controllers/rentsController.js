const database = require("../../../dbConfig/db/models");

class RentsController {
    static async editRent(req, res) {
        const movie_id = req.body.movie_id
    };

    static async getAllRents(req, res) {
        const rentId = req.params.rent_id
        // exemplo no postman = /rents/?movie_id=2
        // filtrar por filme especifico
        const where = {}
        if (movieId) {
            where.movie_id = movieId
        }
        try {
          const allRents = await database.Rents.findAll({
            where
          });
          return res.status(200).send(allRents);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
}

// EXEMPLO
// where: {
//   id: 1, 2, 3
// },
// order:[
//   ['id', 'DESC'],
//   ['name', 'ASC']
// ]

module.exports = RentsController;
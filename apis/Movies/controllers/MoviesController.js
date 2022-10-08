const database = require("../../../dbConfig/db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class MoviesController {

  static async getOneMovie(req, res) {
    const { movie_id } = req.params;
    try {
      const movie = await database.Movies.findOne({
        where: {
          id: Number(movie_id)
        }
      });

      if (!movie) {
        return res.status(404).send("O filme não existe. Tente outro id.");
      }
      return res.status(200).send(movie);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllMovies(req, res) {
    try {
      const allMovies = await database.Movies.findAll();
      return res.status(200).send(allMovies);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getMoviesbyGenre(req, res) {
    const { genre } = req.body;
    try {
      const movieGenre = await database.Movies.findAll({
        include: [
          {
            model: database.Genre, 
            where: {
              description: genre,
            },
            attributes: [
              "description"
            ]
          }
          ]
        });
      return res.status(200).send(movieGenre);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getMoviebyTitle(req, res) {
    const { title } = req.body;
    try {
      const movieTitle = await database.Movies.findAll({
        where: {
          title: {
            [Op.like]: '%' + title + '%'
          }
        }
      });

      if (!movieTitle) {
        return res.status(404).send("Desculpe, não temos esse filme na locadora.");
      }
      return res.status(200).send(movieTitle);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createMovie(req, res) {
    const { title, description, year, genres } = req.body;
    try {
      const verifyingMovie = await database.Movies.findOne({
        where: {
          title: title
        }
      });

      if (verifyingMovie) {
        return res.send("O filme já está cadastrado.", { verifyingMovie });
      }
      const movie = await database.Movies.create({
        title,
        description,
        year,
      });
      genres.forEach(element => {
        database.Genre.create(
          {
            description: element,
            movie_id: movie.id,
          }
        )
      });
      return res
        .status(200)
        .send({ msg: "Filme cadastrado com sucesso!", ...movie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restoreMovie(req, res) {
    const { movie_id } = req.params;
    try {
      await database.Movies.restore({
        where: {
          id: Number(movie_id)
        }
      });
      return res.status(200).send("Filme recuperado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  static async editMovie(req, res) {
    const { movie_id } = req.params;
    const newMovie = req.body;
    try {
      await database.Movies.update(newMovie, {
        where: {
          id: Number(movie_id)
        }
      });

      const updatedMovie = await database.Movies.findOne({
        where: {
          id: Number(movie_id)
        }
      });
      return res
        .status(200)
        .send({ msg: "Filme atualizado com sucesso!", ...updatedMovie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteMovie(req, res) {
    const { movie_id } = req.params;
    try {
      await database.Movies.destroy({
        where: {
          id: Number(movie_id)
        }
      });
      return res.status(200).send("Filme deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = MoviesController;


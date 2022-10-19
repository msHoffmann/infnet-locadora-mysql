const database = require("../../../dbConfig/db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class MoviesController {
  static async getAllMovies(req, res) {
    try {
      const allMovies = await database.Movies.findAndCountAll({});
      // const allMovies = await database.findAndCountAall({ include: Genres }); - > erro: Genres is not defined
      return res.status(200).send(allMovies);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneMovie(req, res) {
    const { movie_id } = req.params;
    try {
      const movie = await database.Movies.findOne({
        where: {
          id: Number(movie_id),
        },
      });
      if (!movie) {
        return res.status(404).send("O filme não existe. Tente outro id.");
      }

      const genre = await database.Genres.findAll({
        where: {
          movie_id: Number(movie_id),
        },
        attributes: ["description"],
      });

      const result = genre.map((item) => item.dataValues.description);
      movie.dataValues.genres = result;

      return res.status(200).send(movie);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getMoviesbyGenres(req, res) {
    const { genres } = req.body;
    try {
      const movieGenres = await database.Movies.findAll({
        include: [
          {
            model: database.Genres,
            where: {
              description: genres,
            },
            attributes: ["description"],
          },
        ],
      });

      if (movieGenres == 0) {
        throw "Não temos nenhum filme com esse gênero.";
      }
      return res.status(200).send(movieGenres);
    } catch (error) {
      return res.status(500).send({
        Message: error,
      });
    }
  }

  static async getMoviebyTitle(req, res) {
    const { title } = req.body;
    try {
      const movieTitle = await database.Movies.findAll({
        where: {
          title: {
            [Op.like]: "%" + title + "%",
          },
        },
      });
      if (movieTitle == 0) {
        throw "Desculpe, não temos esse filme na locadora.";
      }
      return res.status(200).send(movieTitle);
    } catch (error) {
      return res.status(500).send({
        Message: error,
      });
    }
  }

  static async createMovie(req, res) {
    const { title, description, year, genres } = req.body;
    try {
      const verifyingMovie = await database.Movies.findOne({
        where: {
          title: title,
        },
      });

      if (verifyingMovie) {
        return res.send("O filme já está cadastrado.", { verifyingMovie });
      }
      const movie = await database.Movies.create({
        title,
        description,
        year,
      });
      genres.forEach((element) => {
        database.Genres.create({
          description: element,
          movie_id: movie.id,
        });
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
          id: Number(movie_id),
        },
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
          id: Number(movie_id),
        },
      });

      const updatedMovie = await database.Movies.findOne({
        where: {
          id: Number(movie_id),
        },
      });
      return res
        .status(200)
        .send({ msg: "Filme atualizado com sucesso!", ...updatedMovie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async softDeleteMovie(req, res) {
    const { movie_id } = req.params;
    try {
      await database.Movies.destroy({
        where: {
          id: Number(movie_id),
        },
      });
      return res.status(200).send("Filme deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async hardDeleteMovie(req, res) {
    const { movie_id } = req.params;
    try {
      await database.Movies.scope("forceDelete").destroy({
        where: {
          id: Number(movie_id),
        },
        force: true,
      });
      return res.status(200).send("Filme deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = MoviesController;

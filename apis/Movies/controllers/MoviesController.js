const database = require("../../../dbConfig/db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class MoviesController {
  static async getAllMovies(req, res) {
    try {
      const countMovies = await database.Movies.count();
      const allMovies = await database.Movies.findAll({
        include: {
          model: database.Genres,
          attributes: ["description"],
        },
      });
      return res.status(200).send({
        "Total Movies": countMovies,
        Movies: allMovies,
      });
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
        return res
          .status(404)
          .send({ msg: "O filme não existe. Tente outro id." });
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
      const movieGenres = await database.Genres.findAll({
        where: {
          description: genres,
        },
        include: [
          {
            model: database.Movies,
            include: {
              model: database.Genres,
              attributes: ["description"],
            },
          },
        ],
      });

      if (movieGenres == 0) {
        throw "Não temos nenhum filme com esse gênero.";
      }
      return res
        .status(200)
        .send(movieGenres.map((item) => item.dataValues.Movie));
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
        return res.send({ msg: "O filme já está cadastrado." });
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
      return res.status(200).send({ msg: "Filme recuperado com sucesso!" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editMovie(req, res) {
    const { movie_id } = req.params;
    const { ...movieEdited } = req.body;
    console.log(movieEdited);
    try {
      const verifyingMovie = await database.Movies.findOne({
        where: {
          id: movie_id,
        },
      });

      if (!verifyingMovie) {
        return res.send({ msg: "O Filme não existe." });
      }

      await database.Movies.update(movieEdited, {
        where: {
          id: movie_id,
        },
      });

      return res.status(200).send({ msg: "Filme editado!" });
    } catch (error) {
      return res.status(500).send({ msg: "Erro!!!!", error: error.message });
    }
  }

  static async editGenre(req, res) {
    const { movie_id, genre_id } = req.params;
    const { description } = req.body;

    const where = {
      movie_id: movie_id,
      id: genre_id,
    };
    try {
      const result = await database.Genres.findOne({
        where,
      });

      if (!result) {
        return res
          .status(404)
          .send({ msg: "Gênero não encontrado. Tente outro." });
      }

      await database.Genres.update(
        { description },
        {
          where,
        }
      );

      return res.status(200).send({ msg: "Filme editado!" });
    } catch (error) {
      return res
        .status(500)
        .send({ msg: "Gênero não editado. Tente novamente." });
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
      return res.status(200).send({ msg: "Filme deletado com sucesso!" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async hardDeleteMovie(req, res) {
    const { movie_id } = req.params;
    try {
      await database.Rents.destroy({
        where: {
          movie_id: movie_id,
        },
        force: true,
      });
      await database.Genres.destroy({
        where: {
          movie_id: movie_id,
        },
        force: true,
      });
      await database.Movies.destroy({
        where: {
          id: Number(movie_id),
        },
        force: true,
      });
      return res.status(200).send({ msg: "Filme deletado com sucesso!" });
    } catch (error) {
      console.log(error, "Erro!!!!");
      return res.status(500).send(error.message);
    }
  }
}

module.exports = MoviesController;

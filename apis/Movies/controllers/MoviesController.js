const database = require("../../../dbConfig/db/models");

class MoviesController {
  
  static async getAll(req, res) {
    try {
      const allMovies = await database.Movies.findAll();
      return res.status(200).send(allMovies);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOne(req, res) {
    const { movieId } = req.params;
    try {
      const movie = await database.Movies.findOne({
        where: {
          id: Number(movieId)
        }
      });

      if (!movie) {
        return res.status(404).send("O filme não existe. Tente outro id. não existe, tente outro id");
      }

      return res.status(200).send(movie);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createMovie(req, res) {
    const { title, description, year, genre } = req.body;
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
        genre
      });
      return res
        .status(200)
        .send({ msg: "Filme cadastrado com sucesso!", ...movie });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editMovie(req, res) {
    const { movieId } = req.params;
    const newMovie = req.body;
    try {
      await database.Movies.update(newMovie, {
        where: {
          id: Number(movieId)
        }
      });

      const updatedMovie = await database.Movies.findOne({
        where: {
          id: Number(movieId)
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
    const { movieId } = req.params;
    try {
      await database.Movies.destroy({
        where: {
          id: Number(movieId)
        }
      });
      return res.status(200).send("Filme deletado com sucesso!");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = MoviesController;

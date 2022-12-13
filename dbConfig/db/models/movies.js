"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    static associate(models) {
      Movies.hasOne(models.Rents, {
        foreignKey: "movie_id",
      });

      Movies.hasMany(models.Genres, {
        foreignKey: "movie_id",
      });
    }
  }
  Movies.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      year: DataTypes.STRING,
      image_url: DataTypes.STRING,
      wallpaper_url: DataTypes.STRING,
      voteAverage: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Movies",
      paranoid: true,
      scopes: {
        forceDelete: {
          ativo: false,
        },
      },
    }
  );
  return Movies;
};

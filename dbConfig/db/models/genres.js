'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      Genres.belongsTo(models.Movies, {
        foreignKey: "movie_id"
      })
    }
  }
  Genres.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};
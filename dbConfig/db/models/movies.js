'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    static associate(models) {
      // Movies.hasOne(models.Clients, {
      //   foreignKey: "movie_id"
      // })

      Movies.hasOne(models.Rents, {
        foreignKey: "id"
      }); 

      Movies.hasMany(models.Genre, {
        foreignKey: "movie_id"
      })
      // (se tiver apenas 1 unidade do filme)

      // Movies.hasMany(models.Rents, {
      //   foreignKey: "rent_id"
      // }); 
      // (se tiver varias unidades do filme)
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Movies',
    paranoid: true,
  });
  return Movies;
};
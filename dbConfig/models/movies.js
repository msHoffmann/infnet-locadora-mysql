'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movies.hasMany(models.Clients, {
        foreignKey: "movie_id"
      })

      Movies.hasOne(models.Rents, {
        foreignKey: "rent_id"
      }); 
      // (se tiver apenas 1 unidade do filme)

      // Movies.hasMany(models.Rents, {
      //   foreignKey: "rent_id"
      // }); 
      // (se tiver apenas varias unidades do filme)
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.NUMBER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movies',
    paranoid: true,
  });
  return Movies;
};
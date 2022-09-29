'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    static associate(models) {
      // Clients.hasOne(models.Movies, {
      //   foreignKey: "movie_id"
      // });

      Clients.hasOne(models.Rents, {
        foreignKey: "rent_id"
      });
    }
  }
  Clients.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Clients',
    paranoid: true
  });
  return Clients;
};
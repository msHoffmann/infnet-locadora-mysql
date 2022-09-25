'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clients.belongsTo(models.Movies, {
        foreignKey: "movie_id"
      });

      Clients.hasMany(models.Rents, {
        foreignKey: "rent_id"
      });
    }
  }
  Clients.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    rent: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Clients',
    paranoid: true
  });
  return Clients;
};
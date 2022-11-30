"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rents extends Model {
    static associate(models) {
      Rents.belongsTo(models.People, {
        foreignKey: "people_id"
      });

      Rents.belongsTo(models.Movies, {
        foreignKey: "movie_id"
      });
    }
  }
  Rents.init(
    {
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Rents",
      paranoid: true,
    }
  );
  return Rents;
};


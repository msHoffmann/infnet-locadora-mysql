"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasOne(models.Rents, {
        foreignKey: "id",
      });
    }
  }
  People.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "E-mail inválido.",
          },
        },
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["Employee", "Client"]],
            msg: "Os usuários só podem ser cadastrados como 'Employee' ou 'Client'.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "People",
      paranoid: true,
    }
  );
  return People;
};

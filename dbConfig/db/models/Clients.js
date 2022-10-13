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
        foreignKey: "id"
      });
    }
  }
  Clients.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "E-mail inválido."
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["employee", "client"]],
          msg: "Os usuários só podem ser cadastrados como 'Employee' ou 'Client'."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Clients',
    paranoid: true
  });
  return Clients;
};
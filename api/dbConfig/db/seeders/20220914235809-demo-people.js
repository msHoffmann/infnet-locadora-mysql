"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("People", [
      {
        name: "Eduarda Blei",
        email: "eduarda@blei.com",
        role: "Client",
        password:
          "$2a$10$ite72fSqlHImSWbXzhNGBu4ojYi1R/ZG15NBpV2j9gfVpISnJSEs6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fernanda Cardoso",
        email: "fernanda@cardoso.com",
        role: "Client",
        password:
          "$2a$10$cjH3UfoYdvutGW155z/gS.hZoMOemT40GUeQ9Ft3fQf9Lg6hjmBsW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tayná Yasmin Almeida",
        email: "tayna@yasmin.com",
        role: "Client",
        password:
          "$2a$10$QwoIU3kfbwJhxVNDxqD6HOUmgaDSN8Vg3WW9et6H.rPPohad1F1UC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Michel Baes",
        email: "mbaes@baes.com",
        role: "Employee",
        password:
          "$2a$10$MJNAFenFSI6wi8HwHRVYruSKXzCzxRo94PDIgppyuEfYY5mGZedLu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Frania Hoffmann",
        email: "frania@hoffmann.com",
        role: "Employee",
        password:
          "$2a$10$CAttP//NX0k5GKXbWggUm.ff4A2tBxBwr5DyPLw.2cJYScg3QlnXG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};

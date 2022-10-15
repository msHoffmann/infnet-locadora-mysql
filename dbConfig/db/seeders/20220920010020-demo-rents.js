"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rents",
      [
        {
          status: "Alugado!",
          movie_id: 1,
          people_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "Alugado!",
          movie_id: 2,
          people_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "Alugado!",
          movie_id: 3,
          people_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  }
};

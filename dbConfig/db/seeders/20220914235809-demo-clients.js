'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          nome: "Michel Baes",
          email: "mbaes@baes.com",
          aluguel: "Titanic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Emilia Lopes",
          email: "emilia@lopes.com",
          aluguel: "Jaws",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

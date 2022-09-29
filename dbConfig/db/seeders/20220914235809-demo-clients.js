'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "Michel Baes",
          email: "mbaes@baes.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Emilia Lopes",
          email: "emilia@lopes.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: "Frania Hoffmann",
          email: "frania@hoffmann.com",
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

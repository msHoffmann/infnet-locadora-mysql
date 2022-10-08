'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "Michel Baes",
          email: "mbaes@baes.com",
          role: "client",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Emilia Lopes",
          email: "emilia@lopes.com",
          role: "client",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: "Frania Hoffmann",
          email: "frania@hoffmann.com",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },  
      ]
    )
  },

  async down (queryInterface, Sequelize) {
  }
};

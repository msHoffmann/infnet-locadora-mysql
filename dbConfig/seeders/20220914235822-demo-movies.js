'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
     await queryInterface.bulkInsert('Movies', 
     [
      {
        nome: "Andre de Minas",
        ativo: false,
        email: "andre@minas.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Fran de Prtugal",
        ativo: true,
        email: "fran@portuga.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Alexandre Corinthiano",
        ativo: true,
        email: "alexandre@corinthians.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
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

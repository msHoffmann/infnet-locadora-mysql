'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Jaws",
          year: "1975",
          description: "Jaws is a 1975 American thriller film directed by Steven Spielberg, based on the 1974 novel by Peter Benchley.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Titanic",
          year: "1997",
          description: "Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Lion King",
          year: "1994",
          description: "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff, released by Walt Disney Pictures.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
  }
};

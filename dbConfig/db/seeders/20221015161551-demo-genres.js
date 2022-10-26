"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          description: "Horror",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Adventure",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Monster",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Drama",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Historical",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Disaster",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Musical",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Disney",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Children",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};

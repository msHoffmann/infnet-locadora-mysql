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
        {
          description: "Horror",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Horror",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Horror",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Horror",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Action",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Action",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Action",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Action",
          movie_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Action",
          movie_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Comedy",
          movie_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Comedy",
          movie_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Comedy",
          movie_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Clients", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE
    });

    await queryInterface.addColumn("Rents", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE
    });

    await queryInterface.addColumn("Movies", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Clients");
    await queryInterface.removeColumn("Rents");
    await queryInterface.removeColumn("Movies");
  }
};

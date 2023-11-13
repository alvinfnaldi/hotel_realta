"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Category_Groups", {
      cagro_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cagro_name: {
        type: Sequelize.STRING,
      },
      cagro_description: {
        type: Sequelize.STRING,
      },
      cagro_type: {
        type: Sequelize.STRING,
      },
      cagro_icon: {
        type: Sequelize.STRING,
      },
      cagro_icon_url: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Category_Groups");
  },
};

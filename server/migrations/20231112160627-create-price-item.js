"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Price_Items", {
      prit_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prit_name: {
        type: Sequelize.STRING,
      },
      prit_price: {
        type: Sequelize.INTEGER,
      },
      prit_description: {
        type: Sequelize.STRING,
      },
      prit_type: {
        type: Sequelize.STRING,
      },
      prit_modified_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Price_Items");
  },
};

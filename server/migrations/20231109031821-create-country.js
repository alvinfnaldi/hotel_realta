"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Countries", {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country_name: {
        type: Sequelize.STRING,
      },
      country_region_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: {
            tableName: "Regions",
          },
          key: "region_code",
        },
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
    await queryInterface.dropTable("Countries");
  },
};

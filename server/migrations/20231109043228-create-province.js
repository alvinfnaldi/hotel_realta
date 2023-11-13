"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Provinces", {
      prov_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prov_name: {
        type: Sequelize.STRING,
      },
      prov_country_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: {
            tableName: "Countries",
          },
          key: "country_id",
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
    await queryInterface.dropTable("Provinces");
  },
};

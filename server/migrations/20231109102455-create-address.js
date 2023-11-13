"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "create extension if not exists postgis;"
    );
    await queryInterface.createTable("Addresses", {
      addr_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      addr_line1: {
        type: Sequelize.STRING,
      },
      addr_line2: {
        type: Sequelize.STRING,
      },
      addr_postal_code: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.FLOAT,
      },
      long: {
        type: Sequelize.FLOAT,
      },
      addr_spatial_location: {
        type: Sequelize.GEOGRAPHY,
      },
      addr_prov_id: {
        type: Sequelize.INTEGER,
        foreginKey: true,
        references: {
          model: {
            tableName: "Provinces",
          },
          key: "prov_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Addresses");
  },
};

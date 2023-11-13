"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Policy_Category_Groups", {
      poca_poli_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Policies",
          },
          key: "poli_id",
        },
      },
      poca_cagro_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Category_Groups",
          },
          key: "cagro_id",
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
    await queryInterface.dropTable("Policy_Category_Groups");
  },
};

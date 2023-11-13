"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policy_Category_Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Policy_Category_Group.belongsTo(models.Policy, {
        foreignKey: "poca_poli_id",
      });
      Policy_Category_Group.belongsTo(models.Category_Group, {
        foreignKey: "poca_cagro_id",
      });
    }
  }
  Policy_Category_Group.init(
    {
      poca_poli_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      poca_cagro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
    },
    {
      sequelize,
      modelName: "Policy_Category_Group",
    }
  );
  return Policy_Category_Group;
};

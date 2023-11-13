"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Policy.hasOne(models.Policy_Category_Group, {
        foreignKey: "poca_poli_id",
      });
    }
  }
  Policy.init(
    {
      poli_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      poli_name: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 55],
        },
      },
      poli_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Policy",
    }
  );
  return Policy;
};

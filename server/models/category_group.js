"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category_Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category_Group.hasOne(models.Policy_Category_Group, {
        foreignKey: "poca_cagro_id",
      });
    }
  }
  Category_Group.init(
    {
      cagro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cagro_name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [1, 25],
        },
      },
      cagro_description: DataTypes.STRING,
      cagro_type: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 25],
        },
      },
      cagro_icon: {
        type: DataTypes.STRING,
        defaultValue: "https://via.placeholder.com/100",
      },
      cagro_icon_url: {
        type: DataTypes.STRING,
        defaultValue: "https://via.placeholder.com/100",
      },
    },
    {
      sequelize,
      modelName: "Category_Group",
    }
  );
  return Category_Group;
};

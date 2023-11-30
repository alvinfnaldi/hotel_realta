"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Price_Item.init(
    {
      prit_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      prit_name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [1, 55],
        },
      },
      prit_price: DataTypes.INTEGER,
      prit_description: DataTypes.STRING,
      prit_type: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 15],
        },
      },
      prit_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Price_Item",
    }
  );
  return Price_Item;
};

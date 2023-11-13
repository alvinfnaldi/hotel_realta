"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Region.hasMany(models.Country, {
        foreignKey: "country_region_id",
      });
    }
  }
  Region.init(
    {
      region_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      region_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Region",
    }
  );
  return Region;
};

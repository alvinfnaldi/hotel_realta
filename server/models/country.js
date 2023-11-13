"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.hasMany(models.Province, {
        foreignKey: "prov_country_id",
      });
    }
  }
  Country.init(
    {
      country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      country_name: DataTypes.STRING,
      country_region_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Regions",
          key: "region_code",
        },
      },
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};

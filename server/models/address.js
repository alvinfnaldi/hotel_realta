"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init(
    {
      addr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      addr_line1: DataTypes.STRING,
      addr_line2: DataTypes.STRING,
      addr_postal_code: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      long: DataTypes.FLOAT,
      addr_spatial_location: DataTypes.GEOGRAPHY,
      addr_prov_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Provinces",
          key: "prov_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Address",
      timestamps: true,
    }
  );
  return Address;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Province.hasMany(models.Address, {
        foreignKey: "addr_prov_id",
      });
    }
  }
  Province.init(
    {
      prov_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      prov_name: DataTypes.STRING,
      prov_country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Countries",
          key: "country_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Province",
    }
  );
  return Province;
};

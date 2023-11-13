"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service_Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service_Task.init(
    {
      seta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      seta_name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [1, 85],
        },
      },
      seta_seq: DataTypes.SMALLINT,
    },
    {
      sequelize,
      modelName: "Service_Task",
    }
  );
  return Service_Task;
};

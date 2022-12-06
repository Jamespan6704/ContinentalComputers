const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Computer: sequelize.define("computer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    gpu: DataTypes.STRING,
    cpu: DataTypes.STRING,
    ram: DataTypes.STRING,
    motherboard: DataTypes.STRING,
  }),
};

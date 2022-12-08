const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database.js");

module.exports = {
  Computers: sequelize.define("computers", {
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

const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database.js");

module.exports = {
  Users: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    cpassword: DataTypes.STRING,
  }),
};

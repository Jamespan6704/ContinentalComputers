require("dotenv").config();
const connection_string = process.env["CONNECTION_STRING"];
const Sequelize = require("sequelize");

const sequelize = new Sequelize(connection_string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  sequelize,
};

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { Computer } = require("./models/computer");
const { sequelize } = require("./util/database");
const { getComputers } = require("./controller.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getComputers", getComputers);

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () =>
      console.log("I really hope this works on port 5000")
    );
  })
  .catch((err) => console.log(err));

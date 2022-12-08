require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { Computers } = require("./models/computer");
const { sequelize } = require("./util/database");
const {
  getComputers,
  updateComputers,
  addComputer,
  deleteComputer
} = require("./controller.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getComputers", getComputers);
// app.put("/updateComputers", updateComputers);
app.post("/addComputer", addComputer);
app.delete("/deleteComputer/:id", deleteComputer)

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () =>
      console.log("I really hope this works on port 5000")
    );
  })
  .catch((err) => console.log(err));

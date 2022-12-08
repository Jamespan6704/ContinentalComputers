//REST METHODS
//Get, Post, Delete, Push

// require("dotenv").config();
// const { CONNECTION_STRING } = process.env;
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(CONNECTION_STRING, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// });

const { Computers } = require("./models/computer");

module.exports = {
  getComputers: async (req, res) => {
    const computers = await Computers.findAll({});
    console.log(computers[0]);
    res.status(200).send(computers);
  },
  addComputer: async (req, res) => {
    try {
      const { name, price, gpu, cpu, ram, motherboard } = req.body;
      await Computers.create({
        name,
        price,
        gpu,
        cpu,
        ram,
        motherboard,
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  deleteComputer: async (req, res) => {
    try {
      const { id } = req.params;
      await Computers.destroy({
        where: {
          id: +id,
        },
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  //  addUser = async (req, res) => {
  //   try{
  //   const { userId, password, confirmPassword } = req.body;
  //   await Users.create({
  //     userId,
  //     password,
  //     confirmPassword
  //   })
  // }
  //  }
};

// module.exports = {
//   getComputer: (req, res) => {
//     res.status(200).send(computers);
//   },
//   addPart: (req, res) => {
//     const { name, picture, specifications, price } = req.body;

//     let newPart = {
//       id: computerId,
//       name: name,
//       picture: picture,
//       specifications: specifications,
//       price: +price,
//     };
//     computers.push(newPart);
//     computerId++;
//     res.status(200).send(computers);
//   },
//   deletePart: (req, res) => {
//     const index = computers.findIndex((el) => el.id === +req.params.id);

//     computers.splice(index, 1);

//     res.status(200).send(computers);
//   },
// };

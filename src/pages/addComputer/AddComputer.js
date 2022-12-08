import React from "react";
import { useState } from "react";
import axios from "axios";
// import styles from "./AddComputer.css";

const AddComputer = () => {
  const [name, newName] = useState("");
  const [price, newPrice] = useState("");
  const [gpu, newGpu] = useState("");
  const [cpu, newCpu] = useState("");
  const [ram, newRam] = useState("");
  const [motherboard, newMotherboard] = useState("");

  const addNewComputer = (e) => {
    e.preventDefault();
    const body = { name, price, gpu, cpu, ram, motherboard };

    axios
      .post("/addComputer", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => addNewComputer(e)}>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => newName(e.target.value)}
        />
        <input
          placeholder="Price"
          type="integer"
          onChange={(e) => newPrice(e.target.value)}
        />
        <input
          placeholder="GPU"
          type="text"
          onChange={(e) => newGpu(e.target.value)}
        />
        <input
          placeholder="CPU"
          type="text"
          onChange={(e) => newCpu(e.target.value)}
        />
        <input
          placeholder="Ram"
          type="text"
          onChange={(e) => newRam(e.target.value)}
        />
        <input
          placeholder="MotherBoard"
          type="text"
          onChange={(e) => newMotherboard(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddComputer;

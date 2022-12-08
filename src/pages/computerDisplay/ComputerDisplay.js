import React from "react";
import axios from "axios";
import { useState } from "react";

const ComputerDisplay = ({ computer, getAllComputers }) => {
  const deleteComputer = () => {
    axios
      .delete(`/deleteComputer/${computer.id}`)
      .then((res) => {
        console.log(res.data);
        getAllComputers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Get all computers</h2>
      <p>Name: {computer.name}</p>
      <p>price: {computer.price}</p>
      <p>GPU: {computer.gpu}</p>
      <p>CPU: {computer.cpu}</p>
      <p>Ram: {computer.ram}</p>
      <p>MotherBoard: {computer.motherboard}</p>
      <button onClick={deleteComputer}>Delete Computer</button>
    </div>
  );
};

export default ComputerDisplay;

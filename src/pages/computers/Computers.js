import { React, useState, useEffect } from "react";
import axios from "axios";
import ComputerDisplay from "../computerDisplay/ComputerDisplay";

const Computers = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    getAllComputers();
  }, []);

  const getAllComputers = () => {
    axios
      .get("/getComputers")
      .then((res) => {
        setComputers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComputers = (id) => {
    axios.put(`/computers/${id}`).then(() => {
      setComputers();
    });
  };
  return (
    <div>
      Computers go here
      <button onClick={() => {}}>Get Computers</button>
      {computers.map((computer) => {
        return (
          <ComputerDisplay
            computer={computer}
            getAllComputers={getAllComputers}
          ></ComputerDisplay>
        );
      })}
    </div>
  );
};

export default Computers;

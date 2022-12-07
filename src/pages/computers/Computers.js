import { React, useState, useEffect } from "react";
import axios from "axios";

const Computers = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    axios
      .get("/getComputers")
      .then((res) => {
        setComputers(res);
        console.log(computers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Computers go here</div>;
};

export default Computers;

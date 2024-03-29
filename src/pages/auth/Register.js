import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./auth.module.scss";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const addNewUser = (e) => {
    e.preventDefault();
    const body = { email, password, confirmPassword };

    axios
      .post("/addUser", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
  };

  return (
    <section>
      <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="--btn">
            Register
          </button>
        </form>
        <span className={styles.register}>
          <p>Have an account?</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </section>
  );
};

export default Register;

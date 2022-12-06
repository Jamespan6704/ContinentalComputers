import React from "react";
import styles from "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
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
          <button type="submit" className="--btn --btn-primary">
            Login
          </button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
        </form>
        <span className={styles.register}>
          <p>Don't Have an Account?</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;

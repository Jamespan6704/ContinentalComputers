import React from "react";
import styles from "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="--btn --btn-primary">Login</button>
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

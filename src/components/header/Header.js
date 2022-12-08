import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Continental<span>Computers</span>.
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">Orders</Link>
            </span>
            <span className={styles.cart}>
              <Link to="/cart">Cart</Link>
              <Link to="/computers">Computers</Link>
              <Link to="/addComputer">addComputers</Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

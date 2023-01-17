import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => (
  <div>
    <header className={styles.header}>
      <i className="styles.logo">
        <NavLink className={styles.link} to="/">
          Harz5
        </NavLink>
      </i>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/flashbook">
          Flashbook
        </NavLink>
        <NavLink className={styles.link} to="/commission_work">
          Commission Work
        </NavLink>
        <NavLink className={styles.link} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;

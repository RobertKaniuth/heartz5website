import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const handleActiveLink = ({ isActive }) => {
  return isActive ? { color: "red" } : null;
};
const Header = () => (
  <div>
    <header className={styles.header}>
      <i className="styles.logo">
        <NavLink style={handleActiveLink} className={styles.link} to="/">
          ❤❤❤❤❤
        </NavLink>
      </i>
      <nav className={styles.nav}>
        <NavLink
          style={handleActiveLink}
          className={styles.link}
          to="/flashbook"
        >
          Flashbook
        </NavLink>
        <NavLink
          style={handleActiveLink}
          className={styles.link}
          to="/commission_work"
        >
          Commission Work
        </NavLink>
        <NavLink style={handleActiveLink} className={styles.link} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import image from "../assets/frontend/logo/logo3.jpg";

const Navbar = () => {
  return (
    <nav>
      <div className="navLeft">
        <NavLink to="/" className={styles.navLink}>
          <img className={styles.image} src={image} alt="" />
        </NavLink>
      </div>
      <div className="navRight">
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/blogs" className={styles.navLink}>
          Blogs
        </NavLink>
        <NavLink to="/signup" className={styles.navLink}>
          Signup
        </NavLink>
        <NavLink to="/login" className={styles.navLink}>
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

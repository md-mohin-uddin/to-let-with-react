import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import image from "../assets/frontend/logo/logo3.jpg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

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
        <NavLink to="/add-property" className={styles.navLink}>
          Add Property
        </NavLink>
        <NavLink
          to="/signup"
          className={styles.navLink}
          onClick={handleLoginToggle}
        >
          Signup
        </NavLink>
        {/* Conditionally render either Signup or Login based on isLoggedIn state */}
        {isLoggedIn ? (
          <NavLink
            to="/login"
            className={styles.navLink}
            onClick={handleLoginToggle}
          >
            Login
          </NavLink>
        ) : (
          <NavLink
            to="/logout"
            className={styles.navLink}
            onClick={handleLoginToggle}
          >
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from "./user.module.css";
import image from "../assets/avatar.jpg";

const userProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <div className={styles.userProfile}>
        <div className={styles.leftProfile}>
          <h3>Profile Info</h3>
          <form action="">
            <label htmlFor="name">
              <p>
                Name: <span>user</span>
              </p>
            </label>
            <br />
            <label htmlFor="email">
              <p>
                Email: <span>user@example.com</span>
              </p>
            </label>
            <br />
            <label htmlFor="phone">
              <p>
                Phone: <span>01833088879</span>
              </p>
            </label>
          </form>
        </div>
        <div className={styles.rightProfile}>
          <div className={styles.card}>
            <img className={styles.profileImg} src={image} alt="" />

            <ul>
              <li>
                <a href="">User Name</a>
              </li>
              <li>
                <a href="">Change Password</a>
              </li>
              <li>
                <a href="">Edit Profile</a>
              </li>
              <li>
                <a href="">Add My Property</a>
              </li>
            </ul>
            <button className={styles.profileBtn}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;

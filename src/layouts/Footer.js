import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <h2>
            Get In <b>Touch</b>
          </h2>
          <div className={styles.getInTouch}>
            <div className={styles.city}>
              <h3>Chittagong</h3>
              <p>+098888888</p>
              <p>mohin@mail.com</p>
            </div>
            <div className={styles.city}>
              <h3>Dhaka</h3>
              <p>+098888888</p>
              <p>mohin@mail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <h2>Send Feedback</h2>
          <form className="form">
            <div className={styles.form}>
              <div>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email address" />
              </div>
              <div>
                <input type="number" placeholder="Phone no" />
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div>
              <textarea
                name="text"
                id=""
                placeholder="Your message will go here"
              ></textarea>
            </div>
            <button className={styles.detailsBtn}>Submit</button>
          </form>
        </div>
      </div>
      <div>
        <p>
          Copyright all Rights Reserved By{" "}
          <a href="https://www.github.com/md-mohin-uddin">Md Mohin Uddin</a>
        </p>
      </div>
    </>
  );
};

export default Footer;

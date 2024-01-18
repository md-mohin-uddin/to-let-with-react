import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(name, email, phone, subject, text);
  };
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
          <form className="form" onSubmit={handleSubmit}>
            <div className={styles.form}>
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={handleNameChange}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone no"
                  onChange={handlePhoneChange}
                  value={phone}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  onChange={handleSubjectChange}
                  value={subject}
                />
              </div>
            </div>
            <div>
              <textarea
                name="text"
                id=""
                placeholder="Your message will go here"
                onChange={handleTextChange}
                value={text}
              ></textarea>
            </div>
            <button type="submit" className={styles.detailsBtn}>
              Submit
            </button>
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

import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    let userInfo = {
      fullName: fullName,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(userInfo);
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="  logreg center">
      <div className="contact_form_container col-lg-6 container">
        <div className="contact_form_title text-primary">
          <h1>Sign Up</h1>
        </div>

        <Form
          action="{{ route('register') }}"
          id="contact_form"
          className="m-2 text-start "
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label for="exampleInputEmail1">Full Name </label>
            <InputGroup
              type="text"
              aria-describedby="emailHelp"
              name="name"
              required=""
            >
              <Form.Control
                placeholder="Full Name"
                aria-label="Username"
                onChange={handleFullName}
                value={fullName}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Phone </label>
            <InputGroup
              type="text"
              name="phone"
              value="{{ old('phone') }}"
              aria-describedby="emailHelp"
              placeholder="Phone "
              required=""
            >
              <Form.Control
                placeholder="Phone"
                aria-label="Phone"
                onChange={handlePhone}
                value={phone}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="form-group my-2">
            <label for="exampleInputEmail1">Email </label>
            <InputGroup
              type="text"
              name="email"
              value="{{ old('email') }}"
              aria-describedby="emailHelp"
              placeholder="Email "
              required=""
            >
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                onChange={handleEmail}
                value={email}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="form-group  my-2">
            <label for="exampleInputEmail1">Password</label>
            <InputGroup
              type="password"
              aria-describedby="emailHelp"
              placeholder="Password"
              name="password"
              required=""
              autocomplete="new-password"
            >
              <Form.Control
                placeholder="password"
                aria-label="password"
                onChange={handlePassword}
                value={password}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="form-group my-2">
            <label for="exampleInputEmail1">Confirm Password</label>
            <InputGroup
              type="password"
              aria-describedby="emailHelp"
              placeholder="Re-type Password"
              name="password_confirmation"
              required=""
              autocomplete="new-password"
            >
              <Form.Control
                placeholder="Re-type Password"
                aria-label="password"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="contact_form_button more">
            <Button
              type="submit"
              className="btn  text-white button-pipaluk button--inverted px-4 py-2 mt-1"
              style={{ fontSize: "16px" }}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

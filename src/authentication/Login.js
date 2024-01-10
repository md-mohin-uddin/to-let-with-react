import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Login = () => {
  return (
    <div className="contact_form">
      <div className="container">
        <div className="row">
          <div className=" logreg">
            <div className="contact_form_container col-lg-6 container">
              <div className="contact_form_title text-center text-primary">
                <h1>Login</h1>
              </div>

              <Form className="text-start">
                <div className="form-group ">
                  <Form.Label for="exampleInputEmail1">
                    Email Or Phone
                  </Form.Label>
                  <InputGroup type="text" required="">
                    <Form.Control
                      placeholder="Email Or Phone"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <InputGroup type="password" placeholder="Password">
                    {" "}
                    <Form.Control
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="contact_form_button more">
                  <Button
                    type="submit"
                    className="btn  text-white button-pipaluk button--inverted px-4 py-2 mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    Login
                  </Button>
                </div>
              </Form>
              <a href="{{ route('password.request') }}">
                I Forgot My Password.
              </a>
              <br />
              <br />
              <div className="m-2">
                <span className="more  m-2">
                  <Button
                    type="submit"
                    className="btn btn-block text-white  button-pipaluk button--inverted"
                    style={{
                      fontSize: " 15px",
                      padding: "8px",
                      marginTop: "1px",
                    }}
                  >
                    <i className="fab fa-facebook-square"></i> Login With
                    Facebook
                  </Button>
                </span>
                <span className="more more2 mx-2">
                  <Button
                    type="submit"
                    className="btn btn-block text-white  button-pipaluk button--inverted"
                    style={{
                      fontSize: " 15px",
                      padding: "8px",
                      marginTop: "1px",
                    }}
                  >
                    <i className="fab fa-google-plus-square"></i> Login With
                    Google
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

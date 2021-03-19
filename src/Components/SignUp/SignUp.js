import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleOnBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="col log-in-card">
      <h3>Create an account</h3>
      <Form
        className="logIn-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
        <Form.Group className="col-12" controlId="validationCustom03">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              onChange={handleSubmit}
              type="text"
              placeholder="Enter your Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="col-12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              onChange={handleSubmit}
              type="text"
              placeholder="Enter your Email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="col-12" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide your Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="col-12" controlId="validationCustom04">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide your Password.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Link
          type="submit"
          className="log-in-btn btn-primary  btn-lg btn-block"
        >
          Create an account
        </Link>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <div className="social-sign-up">
          <p className="or">
            <span>or</span>
          </p>
          <div className="social-icon-with-btn">
            <div className="social google-area">
              <span className="social-link">
                <img
                  className="icon google"
                  src="https://i.pinimg.com/originals/81/8f/f7/818ff7a3edc40836182c585939fbe82a.png"
                  alt=""
                />{" "}
                <span>Join with google</span>{" "}
              </span>
            </div>
            <div className="social facebook-area">
              <span className="social-link">
                <img
                  className="icon facebook"
                  src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                  alt=""
                />
                <span>Join with facebook</span>
              </span>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;

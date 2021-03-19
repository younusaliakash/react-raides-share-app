import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleFacebookSingIn, handleGoogleSingIn, initializeLoginFramework } from "../AuthManager/AuthManager";
import "./Login.css";

const LogIn = () => {
    initializeLoginFramework()

    const googleSIngIn = () =>{
        handleGoogleSingIn()
    }

    const fbSignIn = () =>{
        handleFacebookSingIn()
    }



  return (
    <div className="col log-in-card">
      <h1>Log In</h1>
      <Form
        className="logIn-form"
        noValidate
      >
        <Form.Row>
          <Form.Group className="col-12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
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
        </Form.Row>
        <Form.Group>
          <Form.Check label="Remember Password" />
        </Form.Group>
        <Link
          type="submit"
          className="log-in-btn btn-primary  btn-lg btn-block"
        >
          Login
        </Link>
        <p>
          Don't have an account? <Link to="/signUp">Create an account</Link>
        </p>
        <div className="social-sign-up">
          <p className="or">
            <span>or</span>
          </p>
          <div className="social-icon-with-btn">
            <div className="social google-area">
              <span className="social-link" onClick={googleSIngIn}>
                <img
                  className="icon google"
                  src="https://i.pinimg.com/originals/81/8f/f7/818ff7a3edc40836182c585939fbe82a.png"
                  alt=""
                />{" "}
                <span>Join with google</span>{" "}
              </span>
            </div>
            <div className="social facebook-area">
              <span className="social-link" onClick={fbSignIn}>
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

export default LogIn;

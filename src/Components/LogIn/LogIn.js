import React, { useContext, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  handleFacebookSingIn,
  handleGoogleSingIn,
  initializeLoginFramework,
  createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "../AuthManager/AuthManager";
import "./Login.css";
import { UserInfoContext } from '../../App'
// import { useForm } from "react-hook-form";



const LogIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
    successNote: '',
    errorNote : '',
    notMatchPassword:''
  });

  const [loggedInUser, setLoggedInUser ] = useContext(UserInfoContext)
  console.log(loggedInUser)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  

  initializeLoginFramework();

  const googleSIngIn = () => {
    handleGoogleSingIn()
    .then(result => {
        handleResponseData(result,true)
    })
  };

  const fbSignIn = () => {
    handleFacebookSingIn()
    .then(result => {
        handleResponseData(result,true)
    })
  };

  const handleResponseData = (result,redirect) =>{
      console.log(redirect)
    setUser(result);
    setLoggedInUser(!newUser ? result : {})
    if(redirect){
        history.replace(from);
    }
    // if(result.displayName){
    //   history.replace(from);
    // }
  }

  const handleOnBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isFieldValid)
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      console.log(isFieldValid)
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSingUp = () =>{
    if(user.password !== user.confirmPassword){
      let newUserInfo = {...user}
      newUserInfo.notMatchPassword = "Password not match";
      newUserInfo.isSignedIn = true;
      setUser(newUserInfo);
      return;
    }
    console.log(user.email, user.password ,user.confirmPassword)
    if(newUser && user.email && user.password){
        console.log(user.email)
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(result => {
        handleResponseData(result,false);
      })
    }
  }

  const handleSingIn = () =>{
    if(!newUser && user.email && user.password){
      console.log(user.email, user.password)
    signInWithEmailAndPassword(user.email, user.password)
    .then(result => {
      handleResponseData(result,true);
    })
  }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(!newUser){
      handleSingIn()
    }
    else{
      handleSingUp()
    }
  }
  // const { register, handleSubmit, watch, errors } = useForm();

  
  

  return (
    <div className="col log-in-card">
      <h2 className='title'>{newUser ? "Create New Account" : "Log In"}</h2>
      {user.successStatus ? <p className="text-success text-center">{user.successNote}</p> : <p className="text-danger text-center">{user.error}</p>}
      {console.log(user.errorNote)}
      <Form className="logIn-form" onSubmit={ (e) => handleOnSubmit(e)}  noValidate>
        <Form.Row>
          {newUser && (
            <Form.Group className="col-12" controlId="validationCustom03">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name"
                onBlur={handleOnBlur}
                // ref={register({ required: true })}
              />
              {/* {
                errors.name && <p className="text-danger">Name is required</p>
              } */}
            </Form.Group>
          )}
          <Form.Group className="col-12" controlId="validationCustom03">
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter your Email"
              onBlur={handleOnBlur}
              required
            />
            
          </Form.Group>
          <Form.Group className="col-12" controlId="validationCustom04">
            <Form.Control type="password" name="password" placeholder="Password" onBlur={handleOnBlur} required />
            
          </Form.Group>
          {newUser && (
            <Form.Group className="col-12" controlId="validationCustom04">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onBlur={handleOnBlur}
                required
              />
              <p className="text-danger">{user.notMatchPassword}</p>
            </Form.Group>
          )}
        </Form.Row>
        {!newUser && (
          <Form.Group>
            <Form.Check label="Remember Password" />
          </Form.Group>
        )}
        {newUser ? (
          <Button
            type="submit"
            className="log-in-btn btn-primary  btn-lg btn-block"
          >
            Create an account
          </Button>
        ) : (
          <Button
            type="submit"
            className="log-in-btn btn-primary  btn-lg btn-block"
          >
            Login
          </Button>
        )}
        {newUser ? (
          <p>
            Already have an account?{" "}
            <Link onClick={() => setNewUser(!newUser)}>Log In</Link>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Link onClick={() => setNewUser(!newUser)}>Create new account</Link>
          </p>
        )}
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

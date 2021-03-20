import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import './Header.css'
import { UserInfoContext } from "../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserInfoContext);
  console.log(loggedInUser)
  const {displayName} = loggedInUser;
  console.log(displayName)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transperant" variant="light">
        <Link className="page-head-title" to="/">Rapid Rides</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-item" to="/home">Home</Link>
            <Link className="nav-item" to="/destination">Destination</Link>
            <Link className="nav-item" to="/blog">Blog</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
            {displayName ? <Link className="nav-item">{displayName}</Link> : <Link className="nav-item btn btn-primary" to="/login">Log In</Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transperant" variant="light">
        <Link className="page-head-title" to="/">Rapid Riders</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-item" to="/home">Home</Link>
            <Link className="nav-item" to="/destination">Destination</Link>
            <Link className="nav-item" to="/blog">Blog</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
            <Link className="nav-item btn btn-primary" to="/login">Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

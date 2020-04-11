import React from "react";
import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-red ">
      <Navbar.Brand className="text-light">Catalog Movie</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav text-center mx-auto order-0">
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/Catalog">
              Catalog
            </Link>
          </Nav.Link>
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/News">
              News
            </Link>
          </Nav.Link>
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/About">
              About
            </Link>
          </Nav.Link>
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/Shop">
              Shop
            </Link>
          </Nav.Link>
          <Nav.Link className="pr-3 ">
            <Link className="text-light" to="/">
              Contact Us
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="danger" className="mr-3 py-0" size="sm">
            <Nav.Link className="text-light" href="#deets">
              Sign In
            </Nav.Link>
          </Button>
          <Button variant="danger" className="mr-3 py-0" size="sm">
            <Nav.Link className="text-light" href="#deets">
              Sign Up
            </Nav.Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

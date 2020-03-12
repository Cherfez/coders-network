import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link exact as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/posts">
            Posts
          </Nav.Link>
          <Nav.Link as={NavLink} to="/developers">
            Developers
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

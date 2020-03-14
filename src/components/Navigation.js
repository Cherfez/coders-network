import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { selectToken, selectUserEmail } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user/action";
import Button from "react-bootstrap/Button";

export default function Navigation() {
  const token = useSelector(selectToken);
  //console.log("token in nav", token);
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

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
          {token === null ? (
            <Nav.Link as={NavLink} to="/signup">
              SignUp
            </Nav.Link>
          ) : (
            <p>Welcome, {email}</p>
          )}

          {token === null ? (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          ) : (
            <Button onClick={handleLogout}>Logout</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

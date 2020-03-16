import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { selectToken, selectUserName } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user/action";
import Button from "react-bootstrap/Button";
import { GiAstronautHelmet } from "react-icons/gi";

export default function Navigation() {
  const token = useSelector(selectToken);
  //console.log("token in nav", token);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        <GiAstronautHelmet style={{ fontSize: "2rem" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }}>
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
            <p
              style={{ color: "white" }}
              className="d-inline-flex ml-auto my-auto mr-5"
            >
              Welcome, {name}
            </p>
          )}

          {token === null ? (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          ) : (
            <Button
              variant="outline-info"
              className="d-inline-flex"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

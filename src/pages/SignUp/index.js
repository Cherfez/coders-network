import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUpThunk } from "../../store/user/action";
import { useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  //console.log("token in signup", token);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/posts");
    }
  }, [token, history]);

  function submitHandler(event) {
    event.preventDefault();
    //console.log(name, email, password);

    dispatch(signUpThunk(name, password, email));

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <h1>SIGNUP</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

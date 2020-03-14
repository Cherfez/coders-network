import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { postCommentThunk } from "../../store/posts/actions";
import { selectToken } from "../../store/user/selectors";
import { Link } from "react-router-dom";

export default function CommentForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(text);

    dispatch(postCommentThunk(text));
    setText("");
  }

  const form = token ? (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        value={text}
        onChange={event => setText(event.target.value)}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>
          <h2>Post A Comment</h2>
        </Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  ) : (
    <Link to="/login">
      <h2>Log in to comment</h2>
    </Link>
  );

  return <div>{form}</div>;
}

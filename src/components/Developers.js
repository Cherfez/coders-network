import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Developers(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Developers(props) {
  //console.log("what are props?", props);

  return (
    <Card className="bg-light" style={{ margin: "2rem auto", width: "60%" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="my-2">
          <FaGithub style={{ fontSize: "1.3rem" }} /> {props.github_username}
        </Card.Subtitle>
        <Link to={`/developers/${props.id}`}>
          <Button className="mt-2" variant="outline-info bg-white">
            View Profile
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

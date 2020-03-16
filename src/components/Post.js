import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Post(props) {
  //console.log("what are props", props);
  return (
    <Card className="bg-light" style={{ margin: "2rem auto", width: "60%" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Tags:{" "}
          <span>
            {props.tags
              .map(tag => {
                return tag.tag;
              })
              .join(", ")}
          </span>
        </Card.Text>
        <Link to={`/posts/${props.id}`}>
          <Button variant="outline-info bg-white">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDeveloperById } from "../../store/developersDetails/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectDeveloperDetails } from "../../store/developersDetails/selectors";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function DeveloperDetails() {
  const { id } = useParams(); //grab ID from URL
  //console.log("id", id);
  const dispatch = useDispatch();
  const developer = useSelector(selectDeveloperDetails);
  console.log("developer!!", developer);

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  if (!developer.name) return <h1>Loading</h1>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Text>{developer.intro}</Card.Text>
        <hr />
        <Card.Title>Posts</Card.Title>
        <ListGroup>
          {developer.posts.map(post => {
            return (
              <ListGroup.Item key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

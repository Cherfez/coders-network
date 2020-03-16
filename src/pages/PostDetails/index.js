import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostDetails } from "../../store/postDetails/selectors";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

export default function PostDetails() {
  // I WANT THE ID OF THIS POST
  const params = useParams();
  //   console.log(params.id);
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  console.log(postDetails);

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, [dispatch, params.id]);

  if (!postDetails.title) return <Spinner animation="border" variant="info" />;

  const dateWrittenPost = new Date(postDetails.createdAt);
  const dateStringPost = dateWrittenPost.toDateString();

  return (
    <Container>
      <Jumbotron>
        <h1>{postDetails.title}</h1>
        <h3>
          Author:{" "}
          <Link to={`/developers/${postDetails.developer.id}`}>
            {postDetails.developer.name}
          </Link>
        </h3>
        <h6 className="text-muted">{dateStringPost}</h6>
      </Jumbotron>
      <ReactMarkdown source={postDetails.content} />
      <hr />
      <CommentForm />
      {postDetails.comments.map(comment => {
        const date = new Date(comment.createdAt);
        const dateString = date.toDateString();

        return (
          <Card
            key={comment.id}
            style={{ margin: "1rem auto", padding: "1rem" }}
          >
            <div className="d-flex justify-content-between bg-light">
              <h6 className="text-info " style={{ padding: "1rem" }}>
                {comment.developer.name} says:
              </h6>{" "}
              <span className="my-auto text-muted">{dateString}</span>
            </div>

            <p style={{ fontSize: "1.2rem", padding: "1rem" }}>
              {comment.text}
            </p>
          </Card>
        );
      })}
    </Container>
  );
}

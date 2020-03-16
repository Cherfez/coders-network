import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsThunk } from "../../store/posts/actions";
import { selectPosts } from "../../store/posts/selectors";
import Post from "../../components/Post";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  //console.log(posts);

  useEffect(
    function() {
      // async function fetchPosts() {
      //   const response = await axios.get(
      //     "https://codaisseur-coders-network.herokuapp.com/posts"
      //   );

      //   console.log(response);
      //   dispatch({ type: "FETCHED_POSTS_SUCCESS", payload: response.data });
      // }

      // fetchPosts();

      // dispatch(thunkExample());
      dispatch(fetchPostsThunk());
    },
    [dispatch]
  );

  function handleClick() {
    dispatch(fetchPostsThunk());
  }

  return (
    <Container>
      {posts.map(post => {
        //console.log(post);
        return (
          <Post
            title={post.title}
            key={post.id}
            id={post.id}
            tags={post.tags}
          />
        );
      })}
      <Button
        onClick={handleClick}
        variant="info"
        className="d-flex mx-auto mt-2 mb-4"
        style={{ width: "40%" }}
      >
        I want to read more posts
      </Button>
    </Container>
  );
}

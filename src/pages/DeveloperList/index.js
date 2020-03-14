import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Developers from "../../components/Developers";
import { useDispatch, useSelector } from "react-redux";
import { selectDevelopers } from "../../store/developers/selectors";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import Button from "react-bootstrap/Button";

export default function DeveloperList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);
  //console.log("devs?????", developers);

  useEffect(
    function() {
      dispatch(fetchDevelopersThunk());
    },
    [dispatch]
  );

  function handleClick() {
    dispatch(fetchDevelopersThunk());
  }

  return (
    <Container>
      <h1>Our Developers</h1>
      {developers.map(dev => {
        //console.log("dev in map", dev);
        return (
          <Developers
            name={dev.name}
            github_username={dev.github_username}
            key={dev.id}
            id={dev.id}
          />
        );
      })}
      <Button onClick={handleClick}>I want to read more posts</Button>
    </Container>
  );
}

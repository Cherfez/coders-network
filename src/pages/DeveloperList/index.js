import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Developers from "../../components/Developers";
import { useDispatch, useSelector } from "react-redux";
import { selectDevelopers } from "../../store/developers/selectors";
import { fetchDevelopersThunk } from "../../store/developers/actions";

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

  return (
    <Container>
      <h1>hello?</h1>
      {developers.map(dev => {
        //console.log("dev in map", dev);
        return <Developers name={dev.name} key={dev.id} />;
      })}
    </Container>
  );
}

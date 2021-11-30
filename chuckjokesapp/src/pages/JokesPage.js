import React, { useEffect, useContext } from "react";
import { Container } from '@material-ui/core';
import Header from "../components/Header";
import Context from '../context/Context'
import JokeCard from "../components/JokeCard";
import GetJokeBtn from "../components/GetJokeBtn";

function JokesPage () {
  const { getJoke, jokeData } = useContext(Context);

  useEffect(() => {
    getJoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <JokeCard data={ jokeData }/>
      <GetJokeBtn />
    </Container>
  )
}
export default JokesPage;
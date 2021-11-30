import { Container } from "@material-ui/core";
import React from "react";
import JokeCard from "./JokeCard";

function FavoriteList ({ list }) {
  return (
    <Container>
      {list.map((joke, index) =>  <JokeCard key={ index } data={ joke } />)}
    </Container>
  )
}

export default FavoriteList;
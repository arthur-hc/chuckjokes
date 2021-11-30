import React, { useContext } from "react";
import Context from "../context/Context";
import { Container } from '@material-ui/core';
import Header from "../components/Header";
import FavoriteList from "../components/FavoriteList";


function FavoritesPage () {
  const { favoritesJokes } = useContext(Context);

  if(favoritesJokes.length === 0) {
    return (
      <Container>
        <Header />
        <h1>No favorites yet</h1>
      </Container>
    )
  }

  return (
    <Container>
      <Header />
      <FavoriteList list={ favoritesJokes } />
    </Container>
  )
}
export default FavoritesPage;
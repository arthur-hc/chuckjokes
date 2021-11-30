import React, { useContext } from "react";
import Context from "../context/Context";
import {  Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: '#F50057',
  },
}));

function FavoriteJokeBtn ({ jokeItemData }) {
  const { favoritesJokes, setFavoritesjokes } = useContext(Context);
  const classes = useStyles();

  const handleFavoriteClick = () => {
    const joke = favoritesJokes.find((joke) => joke.id === jokeItemData.id);
    if(!joke) {
      return setFavoritesjokes([...favoritesJokes, jokeItemData]);
    }
    setFavoritesjokes(favoritesJokes.filter((joke) => joke.id !== jokeItemData.id))
  }

  return (
    <Button
      size="small"
      className={classes.button}
      onClick={ () => handleFavoriteClick() }
    >
      Favorite <FavoriteIcon fontSize="small" />
    </Button>
  )
}

export default FavoriteJokeBtn;
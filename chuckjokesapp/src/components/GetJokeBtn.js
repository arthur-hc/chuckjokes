import React, { useContext } from "react";
import Context from "../context/Context";
import {  Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: '#F50057',
  },
}));

function GetJokeBtn () {
  const { getJoke } = useContext(Context);
  const classes = useStyles();
  return (
    <Button
      size="small"
      className={classes.button}
      onClick={ () => getJoke() }
    >
      Get Other Joke
    </Button>
  )
}

export default GetJokeBtn;
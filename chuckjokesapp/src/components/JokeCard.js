import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Context from '../context/Context';
import FavoriteJokeBtn from './FavoriteBtn';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '5px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  favoriteButton: {
    backgroundColor: '#F50057'
  },
});

function JokeCard({ data }) {
  const { name } = useContext(Context);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  if(!data) {
    return (
      <span>Loading...</span>
    )
  }

  const nameToShow = () => {
    if(!name || name === '') {
      return 'user'
    }
    return name
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hi {nameToShow()}, now it's time to learn some lessons about
        </Typography>
        <Typography variant="h5" component="h2">
          Chuck{bull}The{bull}Legend{bull}Norris
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          facts
        </Typography>
        <Typography variant="body2" component="p">
          { data.value }
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteJokeBtn jokeItemData={ data } />
      </CardActions>
    </Card>
  );
}

export default JokeCard
import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import {Breadcrumbs, Chip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const useStyles = makeStyles({
  NavButtons: {
    backgroundColor: '#F50057'
  },
});

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const HandleNavIconClick = (e, url) => {
    e.preventDefault();
    navigate(url);
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="/jokes"
        label="Jokes"
        icon={<HomeIcon fontSize="small" />}
        className={classes.NavButtons}
        onClick={ (e) => HandleNavIconClick(e, '/jokes') }
      />
      <StyledBreadcrumb
        component="a" 
        href="/favorites" 
        label="Favorites"
        icon={<FavoriteIcon fontSize="small" />}
        className={classes.NavButtons}
        onClick={ (e) => HandleNavIconClick(e, '/favorites') } />
    </Breadcrumbs>
  );
}
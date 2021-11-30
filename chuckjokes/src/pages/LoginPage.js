import React, { useContext } from "react";
import Context from "../context/Context";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField, Link, Typography, Avatar } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

// import { Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: '#F50057'
  },
}));


function LoginPage () {
  const { setName } = useContext(Context);
  const classes = useStyles();
  const navigate = useNavigate();

  const HandleSubmitClick = (e) => {
    e.preventDefault();
    navigate('/jokes');
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.body}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Welcome to Chuck Jokes.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Type your name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={({ target }) => setName(target.value) }
          />
          <Link href="sss" variant="body2">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => HandleSubmitClick(e)}
            >
              See Chuck Jokes
            </Button>
          </Link>
        </form>
      </div>
  </Container>
  )
}

export default LoginPage;
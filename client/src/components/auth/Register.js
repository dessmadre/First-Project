import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import {
  Box,
  makeStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const Register = props => {
  // Init Context
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/blog');
    }
    if (error === 'User already exists') {
      setAlert(error, 'warning');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  });

  const { username, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '' || password2 === '') {
      setAlert('Please enter your credentials', 'warning');
    } else if (password !== password2) {
      setAlert('Password does not match', 'warning');
    } else {
      register({
        username,
        password,
      });
    }
  };

  // Init Styling
  const classes = useStyles();
  return (
    <>
      <Box className={classes.containerStyle}>
        <Box className={classes.headerstyle}>
          <Typography variant='h1' component='h1'>
            Register
          </Typography>
        </Box>
        <form className={classes.root} onSubmit={onSubmit}>
          <TextField
            variant='filled'
            label='username'
            name='username'
            value={username}
            required
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            variant='filled'
            label='password'
            name='password'
            required
            value={password}
            onChange={onChange}
          ></TextField>{' '}
          <br />
          <TextField
            variant='filled'
            label='password'
            name='password2'
            required
            value={password2}
            onChange={onChange}
          ></TextField>
          <br />
          <Button
            className={classes.buttonStyle}
            variant='outlined'
            type='submit'
            color='primary'
            value={password}
          >
            Create New Account
          </Button>
        </form>
      </Box>
    </>
  );
};
const useStyles = makeStyles(theme => ({
  containerStyle: {
    height: '800px',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
    position: 'relative',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    top: '25px',
  },
  buttonStyle: {
    width: '470px',
    justifySelf: 'center',
  },
  headerstyle: {
    textAlign: 'center',
    paddingTop: '70px',
    fontWeight: '700',
  },
}));

export default Register;

import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async e => {
    // eslint-disable-next-line
    const form = await axios.post('/api/contact', { name, email, message });
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        style={{
          height: '800px',
          backgroundColor: '#cccccc',
          position: 'relative',
        }}
      >
        <Box className={classes.containerStyle}>
          <form
            className={matches ? classes.root2 : classes.root}
            noValidate
            autoComplete='off'
            onSubmit={onSubmit}
          >
            <Typography
              variant='h1'
              style={{
                textAlign: 'center',
              }}
            >
              Contact
            </Typography>
            <TextField
              name='name'
              variant='outlined'
              label='Name'
              onChange={e => setName(e.target.value)}
              onSubmit={e => setName('')}
              value={name}
            />
            {matches && (
              <>
                <br />{' '}
              </>
            )}
            <TextField
              name='email'
              variant='outlined'
              label='Email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <TextField
              name='message'
              variant='outlined'
              label='Message'
              multiline
              rows={2}
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
            {matches && (
              <>
                <br />{' '}
              </>
            )}
            <Button
              className={matches ? classes.button2 : classes.button}
              type='submit'
              variant='outlined'
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '450px',
    },
  },
  root2: {
    [theme.breakpoints.down('lg')]: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
    },
  },
  containerStyle: {
    border: '10px solid',
    borderColor: 'white',
    width: '80%',

    height: '80vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
  button: {
    width: '450px',
    height: '75px',
    position: 'relative',
    top: '8px',
    left: '8px',
  },
  button2: {
    [theme.breakpoints.down('lg')]: {
      width: '300px',
      height: '75px',
      position: 'relative',
      top: '8px',
      left: '8px',
    },
  },
}));

export default ContactForm;

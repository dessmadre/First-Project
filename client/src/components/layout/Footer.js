import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant='body2'>&copy; 7 Pedals Designs</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    top: 'auto',
    bottom: 0,
    position: 'relative',
    backgroundColor: 'black',
  },
  textStyle: {
    color: '#BBBFBF',
  },
}));

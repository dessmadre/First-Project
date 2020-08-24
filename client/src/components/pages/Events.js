import React from 'react';
import calander from '../images/calander.jpg';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Events = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyle();

  return (
    <>
      <Box
        style={{
          height: '800px',
        }}
      >
        <Box
          className={classes.introStlye}
          style={{
            backgroundColor: 'black',
            opacity: '0.8',
          }}
        ></Box>
        <Box className={classes.introStlye}>
          <Typography
            style={{
              fontWeight: '700',
            }}
            variant={matches ? 'h2' : 'h1'}
            gutterBottom
          >
            Events
          </Typography>
        </Box>
        <Box className={classes.header}></Box>
      </Box>
    </>
  );
};

const useStyle = makeStyles(theme => ({
  header: {
    backgroundImage: `url(${calander})`,
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    height: '300px',
  },
  introStlye: {
    top: '10%',
    left: '12.5%',
    color: 'white',
    fontWeight: '700',
    width: '75%',
    height: '250px',
    border: '5px solid',
    position: 'absolute',
    textAlign: 'center',
    margin: 'auto',
    padding: '50px',
  },
}));

export default Events;

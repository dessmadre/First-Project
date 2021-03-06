import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Box, useMediaQuery } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box className={classes.root}>
        <Box
          style={{
            backgroundImage: `url(${long})`,
          }}
          className={classes.bgImages}
          alt='Matosem'
        ></Box>
        <Box
          style={{
            backgroundImage: `url(${stairs})`,
          }}
          className={classes.bgImages}
          alt='Dan Schiumarini'
        ></Box>
        <Box
          style={{
            backgroundImage: `url(${chair})`,
          }}
          className={classes.bgImages}
          alt='AbsolutVision'
        ></Box>
        <Box
          style={{
            backgroundImage: `url(${meet})`,
          }}
          className={classes.bgImages}
          alt='Mario Gogh'
        ></Box>

        <Box
          className={matchesSM ? classes.mobileIntroStlye : classes.introStlye}
          style={{
            backgroundColor: 'black',
            opacity: '0.80',
          }}
        ></Box>
        <Box
          className={matchesSM ? classes.mobileIntroStlye : classes.introStlye}
        >
          <Typography
            variant={matchesSM ? 'h4' : 'h1'}
            style={{
              fontWeight: '550',
              marginTop: '20px',
            }}
          >
            Keith Birch
          </Typography>
          <Typography
            variant={matchesSM ? 'h6' : 'h4'}
            style={{
              marginTop: '20px',
            }}
          >
            Speaker | Consultant | Specialist{' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const long = require('../images/4build.jpg');

const stairs = require('../images/stairs.jpg');
const chair = require('../images/chair.jpg');
const meet = require('../images/meet.jpg');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  introStlye: {
    top: '10%',
    left: '12.5%',
    color: 'white',
    width: '75%',
    height: '250px',
    border: '5px solid',
    position: 'absolute',
    textAlign: 'center',
    margin: 'auto',
  },
  mobileIntroStlye: {
    top: '10%',
    left: '12.5%',
    color: 'white',
    width: '75%',
    height: '150px',
    border: '5px solid',
    position: 'absolute',
    textAlign: 'center',
    margin: 'auto',
  },
  bgImages: {
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    display: 'block',
    [theme.breakpoints.down('lg')]: {
      height: '60vh',
    },
    [theme.breakpoints.down('md')]: {
      height: '60vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '55vh',
      position: 'relative',
    },
    [theme.breakpoints.down('xs')]: {
      height: '45vh',
      position: 'relative',
    },
  },
}));

export default Home;

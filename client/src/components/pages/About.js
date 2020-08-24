import React from 'react';
import { Box, useMediaQuery, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.header}></Box>
        <Box
          className={classes.boxStyle}
          style={{
            backgroundColor: 'black',
            opacity: '0.8',
          }}
        ></Box>
        <Box className={classes.boxStyle}>
          <Typography
            variant={matches ? 'h2' : 'h1'}
            style={{
              fontWeight: 700,
            }}
          >
            About Me
          </Typography>
        </Box>
        <Box
          display='flex'
          style={{
            justifyContent: 'space-between',
            padding: '40px 20px',
          }}
        >
          {' '}
          {/**Text Section - Left */}
          <Box
            style={{
              width: '50%',
            }}
          >
            <Typography variant='body2'>
              <strong>Keith Birch</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras quis justo condimentum, auctor
              felis vitae, consequat ante. Curabitur vehicula velit ut neque
              pulvinar, ac porttitor velit varius. Aliquam erat volutpat. In vel
              mauris quis nisl commodo viverra. Suspendisse hendrerit, dui eget
              fermentum tincidunt, magna lacus iaculis est, quis porttitor purus
              metus sit amet tortor. Nunc condimentum enim in felis viverra
              lobortis. Nullam at gravida eros. Integer ac metus ut nunc
              facilisis tristique vel at augue. Fusce consectetur, eros eget
              imperdiet vestibulum, ligula dolor auctor tortor, sit amet
              efficitur metus nulla id diam. Sed vel sollicitudin mi, at gravida
              urna. Curabitur felis elit, malesuada vitae feugiat ut, commodo
              vitae dolor. Nullam fringilla tempus condimentum. Nulla hendrerit
              malesuada hendrerit. Nullam elementum metus vitae ex semper, sit
              amet sollicitudin arcu aliquam. Maecenas tincidunt varius eros sed
              bibendum. Donec tortor mi, luctus eu elit ut, gravida tincidunt
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Mauris vulputate lectus ut
              nisi euismod hendrerit. Praesent feugiat felis sit amet
              pellentesque fermentum. Cras nec urna dignissim, lacinia enim et,
              imperdiet risus. Duis et nisl dui. Sed viverra purus in ante
              auctor ullamcorper. Etiam eget nulla lorem. Phasellus pharetra
              ipsum augue, gravida egestas risus facilisis at. Vestibulum
              iaculis fermentum mauris luctus blandit. Etiam euismod massa et
              nisi faucibus, et sagittis augue sollicitudin. Praesent nec neque
              vitae ex placerat faucibus et et lectus. Ut non tortor non lorem
              vulputate luctus. Quisque in lorem quis orci pellentesque
              sollicitudin. Phasellus fermentum ex dolor. Suspendisse rhoncus
              eros ipsum, a tincidunt mi dignissim et. In in condimentum felis.
              Etiam dapibus est lacus, ac varius sapien lobortis ut. Sed in
              lorem ut nibh placerat ultricies eget quis erat. Duis quis nulla
              interdum, fermentum libero non, tincidunt lectus. Duis interdum
              feugiat erat sollicitudin vehicula. Fusce pharetra nibh vel nisi
              imperdiet lacinia. Aliquam ac volutpat eros. Nulla facilisi.
              Aenean ullamcorper enim eget nisi accumsan luctus. Donec a nisi
              ultrices diam luctus mollis. Etiam dictum felis id nisl
              vestibulum, sit amet posuere libero laoreet. Integer sollicitudin
              justo quam, at consectetur elit efficitur ut.{' '}
            </Typography>
          </Box>
          {/**Image Section - Right */}
          <Box
            style={{
              width: '50%',
            }}
          >
            <img
              src={require('../images/cat.jpg')}
              alt='Manja Vitolic'
              style={{
                width: '100%',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

const triangles = require('../images/triangles.jpg');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  imgStyle: {
    width: '100%',
    position: 'relative',
    display: 'block',
  },
  boxStyle: {
    top: '10%',
    left: '12.5%',
    color: 'white',
    width: '75%',
    height: '250px',
    border: '5px solid',
    position: 'absolute',
    textAlign: 'center',
    margin: 'auto',
    padding: '50px',
  },
  header: {
    backgroundImage: `url(${triangles})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: '300px',
  },
}));

export default About;

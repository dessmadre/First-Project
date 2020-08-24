import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography, useMediaQuery } from '@material-ui/core';

const Consulting = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const classes = useStyles();
  return (
    <>
      <Box className={classes.header}></Box>{' '}
      <Box
        className={classes.title}
        style={{
          backgroundColor: 'black',
          opacity: '0.8',
        }}
      ></Box>
      <Box className={classes.title}>
        <Typography
          variant={matches ? 'h2' : 'h1'}
          style={{
            fontWeight: '700',
          }}
        >
          The Process
        </Typography>
      </Box>
      <Box className={classes.content}>
        <Typography
          className={classes.titleText}
          variant={matches ? 'h4' : 'h3'}
          style={{
            paddingTop: '30px',
          }}
        >
          Process Improvement &gt; Project Management &gt; Change Management
        </Typography>
        <Typography
          variant={matches ? 'body2' : 'body1'}
          style={{
            padding: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
          ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
        </Typography>
      </Box>
      <Box
        className={classes.contentii}
        display='flex'
        style={{
          justifyContent: 'space-between',
          padding: '40px 20px',
        }}
      >
        <Box
          style={{
            width: '50%',
          }}
        >
          <img
            src={require('../images/improvementcycle.jpg')}
            alt=''
            style={{
              width: '50%',
            }}
          />
        </Box>
        <Box
          style={{
            width: '50%',
            padding: '40px, 30px',
            textAlign: 'left',
          }}
        >
          <Typography
            className={classes.titleText}
            variant={matches ? 'h4' : 'h3'}
            style={{
              textDecoration: 'underline',
            }}
          >
            Process Improvement
          </Typography>
          <Typography variant={matches ? 'body2' : 'body1'} component='h1'>
            <br />
            Volutpat lacus laoreet non curabitur gravida arcu. Sollicitudin
            aliquam ultrices sagittis orci a. Odio ut enim blandit volutpat
            maecenas volutpat blandit aliquam etiam. Nam libero justo laoreet
            sit amet cursus sit amet dictum. In arcu cursus euismod quis viverra
            nibh cras pulvinar. Posuere urna nec tincidunt praesent. Laoreet non
            curabitur gravida arcu ac tortor dignissim convallis.
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.content}
        display='flex'
        style={{
          justifyContent: 'space-between',
          padding: '40px 20px',
        }}
      >
        <Box
          style={{
            width: '50%',
            padding: '40px, 30px',
            textAlign: 'right',
          }}
        >
          <Typography
            className={classes.titleText}
            variant={matches ? 'h4' : 'h3'}
            style={{
              textDecoration: 'underline',
            }}
          >
            Project Management
          </Typography>
          <Typography variant={matches ? 'body2' : 'body1'}>
            <br />
            Volutpat lacus laoreet non curabitur gravida arcu. Sollicitudin
            aliquam ultrices sagittis orci a. Odio ut enim blandit volutpat
            maecenas volutpat blandit aliquam etiam. Nam libero justo laoreet
            sit amet cursus sit amet dictum. In arcu cursus euismod quis viverra
            nibh cras pulvinar. Posuere urna nec tincidunt praesent. Laoreet non
            curabitur gravida arcu ac tortor dignissim convallis.
          </Typography>
        </Box>{' '}
        <Box
          style={{
            width: '50%',
          }}
        >
          <img
            src={require('../images/improvementcycle.jpg')}
            alt=''
            style={{
              width: '50%',
            }}
          />
        </Box>
      </Box>
      <Box
        className={classes.contentii}
        display='flex'
        style={{
          justifyContent: 'space-between',
          padding: '40px 20px',
        }}
      >
        <Box
          style={{
            width: '50%',
          }}
        >
          <img
            src={require('../images/improvementcycle.jpg')}
            alt=''
            style={{
              width: '50%',
            }}
          />
        </Box>
        <Box
          style={{
            width: '50%',
            padding: '40px, 30px',
            textAlign: 'left',
          }}
        >
          <Typography
            className={classes.titleText}
            variant={matches ? 'h4' : 'h3'}
            style={{
              textDecoration: 'underline',
            }}
          >
            Change Management
          </Typography>
          <Typography variant={matches ? 'body2' : 'body1'}>
            <br />
            Volutpat lacus laoreet non curabitur gravida arcu. Sollicitudin
            aliquam ultrices sagittis orci a. Odio ut enim blandit volutpat
            maecenas volutpat blandit aliquam etiam. Nam libero justo laoreet
            sit amet cursus sit amet dictum. In arcu cursus euismod quis viverra
            nibh cras pulvinar. Posuere urna nec tincidunt praesent. Laoreet non
            curabitur gravida arcu ac tortor dignissim convallis.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundImage: `url(${puzzle})`,
    backgroundSize: '100%',
    height: '300px',
  },
  title: {
    top: '10%',
    left: '12.5%',
    color: 'white',
    width: '75%',
    height: '250px',
    border: '5px solid',
    position: 'absolute',
    textAlign: 'center',
    margin: 'auto',
    padding: '60px',
  },
  content: {
    height: '500px',
    backgroundColor: '#cccccc',
    textAlign: 'center',
    padding: '50px',
  },
  contentii: {
    height: '500px',
    backgroundColor: '#e6e6e6e',
    textAlign: 'center',
    padding: '50px',
  },
  titleText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
}));
const puzzle = require('../images/puzzle.jpg');

//alt='Markus Winkler'
export default Consulting;

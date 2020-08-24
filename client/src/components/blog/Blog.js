import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Component
import BlogItem from './BlogItem';

//Auth
import AuthContext from '../../context/auth/authContext';

// Blog Context
import BlogContext from '../../context/blog/blogContext';

import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import chairs from '../images/chairs.jpg';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Blog = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const authContext = useContext(AuthContext);
  const blogContext = useContext(BlogContext);

  const { isAuthenticated, loadUser } = authContext;
  const { posts, getPosts } = blogContext;

  useEffect(() => {
    getPosts();
    loadUser();
    // eslint-disable-next-line
  }, []);

  const authButtons = (
    <>
      <Link to='/blog/post' className={classes.linkStyle}>
        <Button color='secondary' variant='contained'>
          Create a new Post
        </Button>
      </Link>
    </>
  );

  return (
    <>
      <Box>
        <Box className={classes.headerStyle}></Box>
        <Box className={classes.backingStyle}></Box>
        <Box>
          <Typography
            className={classes.introStlye}
            variant={matches ? 'h2' : 'h1'}
            gutterBottom
          >
            Blog
          </Typography>
        </Box>
        <Container
          className={matches ? classes.mobilePostStyle : classes.postStyle}
        >
          {posts.map(post => (
            <BlogItem key={post.title} post={post} />
          ))}
          <div>{isAuthenticated && authButtons}</div>
        </Container>
      </Box>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  postStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  },
  mobilePostStyle: {
    [theme.breakpoints.down('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: '1rem',
    },
  },
  headerStyle: {
    backgroundImage: `url(${chairs})`,
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
  backingStyle: {
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
    backgroundColor: 'black',
    opacity: '0.8',
  },
  linkStyle: {
    textDecoration: 'none',
  },
}));

export default Blog;

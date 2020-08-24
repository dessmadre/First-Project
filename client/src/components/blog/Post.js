import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Post = props => {
  const classes = useStyles();
  const blogContext = useContext(BlogContext);

  const { current, clearCurrent } = blogContext;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      props.history.push('/blog');
    }
  }, [blogContext, current, props.history]);

  const [post, setPost] = useState({
    title: '',
    text: '',
    postImage: '',
    createdAt: '',
  });
  const { title, text, postImage, createdAt } = post;
  return (
    <>
      <Container fixed>
        <Typography variant='h3'>{title}</Typography>
        <br />
        <Typography>{text}</Typography>
      </Container>
    </>
  );
};

const useStyles = makeStyles(theme => ({}));

export default Post;

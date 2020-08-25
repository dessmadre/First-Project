import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';
import { Container, Typography, Button } from '@material-ui/core';
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

  const onClick = e => {
    clearCurrent();
    props.history.push('/blog');
  };

  const [post, setPost] = useState({
    title: '',
    text: '',
    createdAt: '',
  });
  const { title, text, createdAt } = post;
  return (
    <>
      <Container fixed>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle2'>{createdAt}</Typography>
        <br />
        <Typography variant='body1'>{text}</Typography>
        <br />
        <Button variant='contained' onClick={onClick}>
          Back
        </Button>
      </Container>
    </>
  );
};

const useStyles = makeStyles(theme => ({}));

export default Post;

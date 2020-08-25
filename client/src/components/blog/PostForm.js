import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, TextField, Button } from '@material-ui/core';

const PostForm = props => {
  const classes = useStyles();
  const blogContext = useContext(BlogContext);

  const { addPost, current, clearCurrent, updatePost } = blogContext;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        title: '',
        text: '',
        postImage: '',
      });
    }
  }, [blogContext, current]);

  const [post, setPost] = useState({
    title: '',
    text: '',
    postImage: '',
  });

  const { title, text, postImage } = post;

  const onChange = e =>
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });

  const clearForm = e => {
    e.preventDefault();
    clearCurrent();
    props.history.push('/blog');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
    } else {
      updatePost(post);
    }

    setPost({
      title: '',
      text: '',
      postImage: '',
    });
    props.history.push('/blog');
  };

  return (
    <>
      {' '}
      <Box style={boxStyle}>
        <Container>
          <form
            action='/upload'
            className={classes.root}
            onSubmit={onSubmit}
            encType='multipart/form-data'
          >
            <TextField
              type='text'
              label='Title'
              name='title'
              value={title}
              onChange={onChange}
            ></TextField>
            <br />
            <TextField
              type='text'
              label='Text'
              name='text'
              value={text}
              multiline
              rows={5}
              onChange={onChange}
            ></TextField>
            <Box>
              <Link to='/blog' className={classes.linkStyle}>
                <Button
                  color='secondary'
                  variant='contained'
                  className={classes.buttonStyle}
                  onClick={clearForm}
                >
                  Cancel
                </Button>
              </Link>

              <Button
                type='submit'
                color='primary'
                variant='contained'
                className={classes.buttonStyle}
              >
                Create
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
const boxStyle = {
  height: '800px',
};

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '85%',
    },
  },
  buttonStyle: {
    margin: '2px',
  },
  linkStyle: {
    textDecoration: 'none',
  },
  input: {
    display: 'none',
  },
}));
export default PostForm;

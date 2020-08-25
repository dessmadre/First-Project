import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

//Auth
import AuthContext from '../../context/auth/authContext';
import BlogContext from '../../context/blog/blogContext';

const BlogItem = ({ post }) => {
  const classes = useStyles();

  const blogContext = useContext(BlogContext);
  const authContext = useContext(AuthContext);

  const { deletePost, setCurrent, clearCurrent } = blogContext;
  const { isAuthenticated } = authContext;

  const { _id, title, text, postImage } = post;

  const onDelete = () => {
    deletePost(_id);
    clearCurrent();
  };

  const authButtons = (
    <>
      <Button variant='outlined' color='secondary' onClick={onDelete}>
        Delete
      </Button>
      <Link to='/blog/create' className={classes.linkStyle}>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => setCurrent(post)}
        >
          Edit
        </Button>
      </Link>
    </>
  );

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/blog/post`} className={classes.linkStyle}>
            <CardContent onClick={() => setCurrent(post)}>
              <Typography variant='h5' component='h2' gutterBottom>
                {title}
              </Typography>
              <Typography
                variant='body2'
                component='p'
                className={classes.contentStyle}
              >
                {text}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          {isAuthenticated && authButtons}
          <Link to={`/blog/post`} className={classes.linkStyle}>
            <Button
              onClick={() => setCurrent(post)}
              variant='contained'
              color='primary'
            >
              Read
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

BlogItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'black',
  },
  contentStyle: {
    height: 60,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default BlogItem;

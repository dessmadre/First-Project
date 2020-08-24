import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//Styling
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Context
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  // Styling
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  //Component level State
  const [anchorEl, setAnchorEl] = useState(null);

  // Context API
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logoutUser } = authContext;

  const onLogout = () => {
    logoutUser();
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const authLinks = (
    <>
      <Link onClick={onLogout} className={classes.linkStyle} to='/blog'>
        <Button className={classes.logoutButtonStyle}>Logout</Button>
      </Link>
    </>
  );
  const guestLinks = (
    <>
      <Link to='/' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>Home</Button>
      </Link>
      <Link to='/consulting' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>Consulting</Button>
      </Link>{' '}
      <Link to='/events' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>Events</Button>
      </Link>
      <Link to='/blog' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>Blog</Button>
      </Link>
      <Link to='/about' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>About</Button>
      </Link>
      <Link to='/contact' className={classes.linkStyle}>
        <Button className={classes.buttonStyle}>Contact</Button>
      </Link>
    </>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position='static'
          boxshadow={5}
          style={{
            backgroundColor: 'black',
            flexGrow: 1,
            alignSelf: 'left',
          }}
        >
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              KB
            </Typography>
            {matches && (
              <>
                <IconButton
                  edge='end'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                  </Link>
                  <Link
                    to='/consulting'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Consulting
                    </MenuItem>
                  </Link>
                  <Link
                    to='/events'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Events
                    </MenuItem>
                  </Link>
                  <Link
                    to='/blog'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Blog
                    </MenuItem>
                  </Link>
                  <Link
                    to='/about'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      About
                    </MenuItem>
                  </Link>
                  <Link
                    to='/contact'
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Contact
                    </MenuItem>
                  </Link>
                  {isAuthenticated && (
                    <Link
                      to='/blog'
                      onClick={onLogout}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                        color='secondary'
                      >
                        Logout
                      </MenuItem>
                    </Link>
                  )}
                </Menu>
              </>
            )}
            {guestLinks}
            {isAuthenticated && authLinks}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

//CSS-like
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: '#BBBFBF',
  },
  linkStyle: {
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  buttonStyle: {
    '&:hover': {
      color: '#CCCFCF',
      borderRadius: 0,
      borderBottom: '5px solid',
      borderBottomColor: '#CCCFCF',
      fontWeight: '600',
    },
    color: '#BBBFBF',
    fontSize: '15px',
    fontWeight: '500',
  },
  logoutButtonStyle: {
    '&:hover': {
      color: '#CCCFCF',
      borderRadius: 0,

      fontWeight: '600',
    },
    color: '#BBBFBF',
    fontSize: '15px',
    fontWeight: '500',
    border: '3px solid',
    borderColor: '#CCCFCF',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  menuItem: {
    color: 'black',
  },
}));

export default Navbar;

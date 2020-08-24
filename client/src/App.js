import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Home from './components/pages/Home';
import Admin from './components/auth/Admin';
import Register from './components/auth/Register';
import About from './components/pages/About';
import Blog from './components/blog/Blog';
import PostForm from './components/blog/PostForm';
import Post from './components/blog/Post';
import Events from './components/pages/Events';
import Consulting from './components/pages/Consulting';
import ContactForm from './components/pages/ContactForm';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alerts from './components/layout/Alerts';
import { CssBaseline } from '@material-ui/core';

// Context API
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import BlogState from './context/blog/BlogState';

// Auth
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <BlogState>
        <AlertState>
          <Router>
            <CssBaseline>
              <>
                <Navbar />
                <Alerts />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/consulting' component={Consulting} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/create' component={PostForm} />
                <Route exact path={`/blog/post`} component={Post} />

                <Route exact path='/contact' component={ContactForm} />
              </>
              <Footer></Footer>
            </CssBaseline>
          </Router>
        </AlertState>
      </BlogState>
    </AuthState>
  );
}

export default App;

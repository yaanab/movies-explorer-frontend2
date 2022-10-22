import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import '../../index.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [isFilmSaved, setIsFilmSaved] = useState(true);

  function havdleNavPopupOpen() {
    setIsNavPopupOpen(true);
  }

  function havdleNavPopupClose() {
    setIsNavPopupOpen(false);
  }

  return (
    <div className="app_content">
      <div className="app_page">
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
          {/* <Header
              isNavPopupOpen={isNavPopupOpen}
              onNavMenuClick={havdleNavPopupOpen}
              onNavPopupClose={havdleNavPopupClose}
            /> */}
            <Movies 
            isFilmSaved={isFilmSaved} />
            {/* <Footer /> */}
          </Route>
          <Route>
            
          </Route>
        </Switch>
        {/* <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route> */}
        {/* </Switch> */}
        {/* <Route path="*">
          <PageNotFound />
        </Route> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default withRouter(App);

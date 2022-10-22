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

import movieImg1 from "../../images/movie-img-1.png";
import movieImg2 from "../../images/movie-img-2.png";

function App() {

  const cards = [
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImg2,
      'movieId': '1265458'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImg1,
      'movieId': '1265488'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImg2,
      'movieId': '1265555'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImg1,
      'movieId': '1233333'
    },
  ]

  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [isFilmSaved, setIsFilmSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
            <Header
              isNavPopupOpen={isNavPopupOpen}
              onNavMenuClick={havdleNavPopupOpen}
              onNavPopupClose={havdleNavPopupClose}
            />
            <Movies
              cards={cards}
              isLoading={isLoading}
              isFilmSaved={isFilmSaved}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header
              isNavPopupOpen={isNavPopupOpen}
              onNavMenuClick={havdleNavPopupOpen}
              onNavPopupClose={havdleNavPopupClose}
            />
            <Movies
              isLoading={isLoading}
              isFilmSaved={isFilmSaved}
            />
            <Footer />
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

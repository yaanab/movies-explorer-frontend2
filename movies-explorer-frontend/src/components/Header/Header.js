import { Switch, Route, Link, NavLink, withRouter } from 'react-router-dom';
import logoLoggedOut from '../../images/header-logo-logged-out.svg';
import logoLoggedIn from '../../images/header-logo-logged-in.svg';
import profileIcon from '../../images/header-profile-icon.svg'

function Header({ loggedIn }) {

  const headerLogo = (loggedIn ? logoLoggedIn : logoLoggedOut);

  return (
    <header className="header">
      <Switch>
        <Route exact path="/">
          <div className="header__main">
            <div className='header__content'>
              <Link to="/">
                <img src={headerLogo} alt="Логотип" className="header__logo" />
              </Link>
              <div className="header__authorization">
                <Link to="sign-up" className="header__auth-link">
                  Регистрация
                </Link>
                <Link to="sign-in" className="header__login-link">
                  Войти
                </Link>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/(saved-movies|movies|profile)/">
          <div className='header__content'>
            <Link to="/">
              <img src={headerLogo} alt="Логотип" className="header__logo" />
            </Link>
            <nav className="header__movies-links">
              <NavLink to="movies" activeClassName='header__movies-link_active' className="header__movies-link">
                Фильмы
              </NavLink>
              <NavLink to="saved-movies" activeClassName='header__movies-link_active' className="header__movies-link">
                Сохраненные фильмы
              </NavLink>
            </nav>
            <Link to="profile" className='header__profile'>
                <img src={profileIcon} alt="Контур человека до плеч" className="header__profile-icon" />
                <h2 className='header__profile-text'>Аккаунт</h2>
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default withRouter(Header);
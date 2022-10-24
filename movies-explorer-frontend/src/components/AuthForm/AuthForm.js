import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function AuthForm({ title, text, link }) {
  return (
    <div className="auth-form">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth-form__logo" />
      </Link>
      <h2 className="auth-form__title">{title}</h2>
      <form className="auth-form__form">
        <button type="submit" className="auth-form__submit-btn">{button}</button>
      </form>
      <div className="auth__form__link-block">
        <p>{text}</p>
        <Link to={link}>{linkText}</Link>
      </div>
    </div>
  );
}

export default AuthForm;
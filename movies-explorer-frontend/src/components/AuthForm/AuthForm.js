import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function AuthForm({ title, isNameBlock, button, text, link, linkText }) {
  return (
    <div className="auth-form">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth-form__logo" />
      </Link>
      <h2 className="auth-form__title">{title}</h2>
      <form className="auth-form__form">
        <div className="auth-form__inputs">
          <div className={`auth-form__input-group ${(isNameBlock) && "auth-form__input-group_block"}`}>
            <label className="auth-form__label" htmlFor="name">Имя</label>
            <input className="auth-form__input" type="text" id="name" name="name" required />
          </div>
          <div className="auth-form__input-group">
            <label className="auth-form__label" htmlFor="email">E-mail</label>
            <input className="auth-form__input" type="email" id="email" name="email" required />
          </div>
          <div className="auth-form__input-group">
            <label className="auth-form__label" htmlFor="password">Пароль</label>
            <input className="auth-form__input" type="password" id="password" name="password" required />
          </div>
        </div>
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
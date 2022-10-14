import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <div className="nav-tab__content">
      <nav className="nav-tab__navigation">
        <NavLink exact to="/" className="nav-tab__link">О проекте</NavLink>
        <NavLink exact to="/" className="nav-tab__link">Технологии</NavLink>
        <NavLink exact to="/" className="nav-tab__link">Студент</NavLink>
      </nav>
    </div>
  );
}

export default NavTab;
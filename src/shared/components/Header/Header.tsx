import { Link } from 'react-router-dom';
import { NavBar } from './header-styled';

const Header = () => {
  return (
    <>
      <NavBar>
        <img
          src="/assets/img/logo-black.svg"
          className="header__logo-black"
          alt="obron-logo"
        />
        <div className="header__links-container">
          <Link className="header__text" to={'#'}>
            Projects
          </Link>
          <Link className="header__text" to={'#'}>
            Priority
          </Link>
          <Link className="header__text" to={'#'}>
            I´m
          </Link>
        </div>
        <div className="header__user-info">
          <Link className="header__text" to={'#'}>
            User Name
          </Link>
          <img
            src="/assets/img/avatar-obron.svg"
            className="header__avatar-logo"
            alt="user-img"
          />
          <Link className="header__text" to={'#'}>
            Log Out
          </Link>
        </div>
      </NavBar>
    </>
  );
};

export default Header;

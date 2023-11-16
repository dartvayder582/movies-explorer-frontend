import { memo } from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import { NAV_LINKS_DEFAULT, NAV_LINKS_LOGGED_IN } from '../../utils/constants';
import './Header.css';

const Header = memo(({
  isLoggedIn,
  location,
}) => {

  return (
    <header className={`header ${isLoggedIn ? 'header_logged-in' : ''} ${location.pathname === '/' ? 'header_theme_blue' : ''}`}>
      <div className="header__main-el content">
        <div className='header__logo-block'>
          <Logo />
        </div>
        <NavBar
          isLoggedIn={isLoggedIn}
          location={location}
          items={isLoggedIn ? NAV_LINKS_LOGGED_IN : NAV_LINKS_DEFAULT}
        />
      </div>
    </header>
  );
});

export default Header;

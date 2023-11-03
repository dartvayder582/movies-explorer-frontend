import { memo } from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import { navLinksDefault, navLinksLoggedIn } from '../../utils/constants';
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
          items={isLoggedIn ? navLinksLoggedIn : navLinksDefault}

        />

      </div>


    </header>
  );
});

export default Header;

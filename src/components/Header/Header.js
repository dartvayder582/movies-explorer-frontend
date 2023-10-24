import React from 'react';
// import headerLogo from '../images/logo-mesto.svg';
// import { Divide as Hamburger } from 'hamburger-react'
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = React.memo(({
  // email,
  // onSignOut,
  isLoggedIn,
  location,
  // isLoadCheckToken
}) => {

  // const [isShowMobileNavbar, setIsShowMobileNavbar] = React.useState(false);

  // React.useEffect(() => {
  //   setIsShowMobileNavbar(false);
  // }, []);

  // const handleMobileSignOut = () => {
  //   setIsShowMobileNavbar(false);
  //   setTimeout(onSignOut, 500);
  // }

  return (
    // <header className={`header ${isLoggedIn ? 'header_auth' : ''}`}>
    //   <div className="header__main-el">
    //     <img className="header__logo" src={headerLogo} alt="Место. Россия" />
    //     {isLoggedIn ? <Hamburger color='white' size={28} rounded onToggle={setIsShowMobileNavbar} /> : ''}
    //   </div>
    //   {isLoadCheckToken ? '' :
    //     <Navbar
    //       isLoggedIn={isLoggedIn}
    //       email={email}
    //       onSignOut={isShowMobileNavbar ? handleMobileSignOut : onSignOut}
    //     isShowMobileNavbar={isShowMobileNavbar}
    //     />
    //   }
    // </header>
    <header className={`header ${isLoggedIn ? 'header_logged-in' : ''} ${location.pathname === '/' ? 'header_theme_blue' : ''}`}>
      <div className="header__main-el content">
        {/* <img className="header__logo" src={headerLogo} alt="Место. Россия" /> */}
        {/* {isLoggedIn ? <Hamburger color='white' size={28} rounded onToggle={setIsShowMobileNavbar} /> : ''} */}
        <div className='header__logo-block'>
          <Logo />
        </div>

        {/* {isLoadCheckToken ? '' : */}
        <NavBar
          isLoggedIn={isLoggedIn}
          location={location}
        // onSignOut={isShowMobileNavbar ? handleMobileSignOut : onSignOut}
        // isShowMobileNavbar={isShowMobileNavbar}
        />
        {/* } */}
      </div>

    </header>
  );
});

export default Header;

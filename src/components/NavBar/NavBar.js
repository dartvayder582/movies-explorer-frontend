import { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
// import AnimatedNavbar from './animation/AnimatedNavbar';
// import { AnimatePresence } from 'framer-motion';
import './NavBar.css'

const NavBar = memo(({
  items,
  isLoggedIn,
  location,
  // onSignOut
}) => {
  const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);

  useEffect(() => {
    setIsShowMobileNavbar(false);
  }, [location]);

  const showMobileNav = () => {
    setIsShowMobileNavbar(true);
  }

  const hideMobileNav = () => {
    setIsShowMobileNavbar(false);
  }

  return (
    <>
      <nav className={
        `navbar
        ${isLoggedIn ? 'navbar_logged-in' : ''}
        ${isShowMobileNavbar ? 'navbar_active' : ''}`}>
        {isLoggedIn ? <button type='button' className='button-style button-style_opacity navbar-button-close' onClick={hideMobileNav} /> : ''}
        <ul className={
          `list-style navbar__links
          ${isLoggedIn ? 'navbar__links_logged-in' : ''}`}>
          {items.map((item, i) =>
            <li key={item.id} className={`navbar__list-item navbar__list-item_${item.id}`}>
              <NavLink
                to={item.href}
                id={item.id}
                className={
                  ({ isActive }) =>
                    `link-style navbar__link navbar__link-${item.id}
                  ${isLoggedIn ? 'navbar__link_logged-in' : ''}
                  ${location.pathname === '/' ? 'navbar__link_theme_blue' : ''}
                  ${isActive ? `navbar__link-${item.id}_active` : ''}`
                }
              >{item.text}</NavLink>
            </li>
          )}
        </ul>

      </nav>
      {isLoggedIn ?
        <>
          <div className={`shading ${isShowMobileNavbar ? 'shading_active' : ''}`} onClick={hideMobileNav} />
          <button
            type='button'
            className={`button-style button-style_opacity navbar-button-open ${location.pathname === '/' ? 'navbar-button-open_white' : ''}`}
            onClick={showMobileNav} />
        </>
        : ''}

    </>

  )
})

export default NavBar;

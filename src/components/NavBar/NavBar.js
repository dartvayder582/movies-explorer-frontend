import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import AnimatedNavbar from './animation/AnimatedNavbar';
// import { AnimatePresence } from 'framer-motion';
import './NavBar.css'

const NavBar = React.memo(({
  isLoggedIn,
  location,
  // isShowMobileNavbar,
  // onSignOut
}) => {

  // const location = useLocation()
  return (
    <nav className={`navbar ${isLoggedIn ? 'navbar_logged-in' : ''}`}>
      {isLoggedIn ?
        <>
          <Link
            to='/movies'
            type="button"
            className={
              `link-style
              navbar__link
              navbar__link_logged-in
              ${location.pathname === '/movies' ? 'navbar__link_active' : ''}`}
          >Фильмы</Link>
          <Link
            to='/saved-movies'
            type="button"
            className={
              `link-style
              navbar__link
              navbar__link_logged-in
              ${location.pathname === '/saved-movies' ? 'navbar__link_active' : ''}`}
          >Сохранённые фильмы</Link>
          <Link
            to='/signin'
            type="button"
            className={`link-style navbar__link navbar__link_account`}
          >Аккаунт</Link>
        </>
        :
        <>
          <Link
            to='/signup'
            type="button"
            className={`link-style navbar__link`}
          >Регистрация</Link>
          <Link
            to='/signin'
            type="button"
            className={`link-style navbar__link navbar__link_login`}
          >Войти</Link>
        </>
      }
    </nav>



  )
  // return
  // <AnimatePresence mode='wait'>
  //   <Routes key={location.pathname} location={location}>
  //     <Route
  //       path="/signin"
  //       element={
  //         <AnimatedNavbar>
  //           <nav className="navbar">
  //             <Link
  //               to='/signup'
  //               type="button"
  //               className="navbar__link link-style"
  //             >Регистрация</Link>
  //           </nav>
  //         </AnimatedNavbar>
  //       } />
  //     <Route
  //       path="/signup"
  //       element={
  //         <AnimatedNavbar>
  //           <nav className="navbar">
  //             <Link
  //               to='/signin'
  //               type="button"
  //               className="navbar__link link-style"
  //             >Войти</Link>
  //           </nav>
  //         </AnimatedNavbar>
  //       } />
  //     <Route
  //       exact path="/"
  //       element={
  //         <AnimatedNavbar>
  //           <nav className={`navbar navbar_auth ${isShowMobileNavbar ? 'navbar_active' : ''}`}>
  //             <p className='navbar__email'>{email}</p>
  //             <Link
  //               to='/signin'
  //               type="button"
  //               onClick={onSignOut}
  //               className="navbar__link link-style navbar__link_auth"
  //             >Выйти</Link>
  //           </nav>

  //         </AnimatedNavbar>
  //       } />
  //   </Routes>
  // </AnimatePresence>
  // <AnimatePresence mode='wait'>
  // <Routes key={location.pathname} location={location}>
  //   <Route
  //     path="/signin"
  //     element={
  //       // <AnimatedNavbar>
  //         <nav className="navbar">
  //           <Link
  //             to='/signup'
  //             type="button"
  //             className="navbar__link link-style"
  //           >Регистрация</Link>
  //         </nav>
  //       // </AnimatedNavbar>
  //     } />
  //   <Route
  //     path="/signup"
  //     element={
  //       // <AnimatedNavbar>
  //         <nav className="navbar">
  //           <Link
  //             to='/signin'
  //             type="button"
  //             className="navbar__link link-style"
  //           >Войти</Link>
  //         </nav>
  //       // </AnimatedNavbar>
  //     } />

  // </Routes>
  // </AnimatePresence>

})

export default NavBar;

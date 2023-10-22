// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import Login from '../auth/Login';
import Register from '../auth/Register';
import NavTab from '../Main/NavTab/NavTab';
import AboutProject from '../Main/AboutProject/AboutProject';
import AboutMe from '../Main/AboutMe/AboutMe';
import Techs from '../Main/Techs/Techs';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import Login from './auth/Login';
// import Register from './auth/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                location={location} />
              <Main />
              <Footer />

            </>

          } />
        <Route
          path='/movies'
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                location={location} />
              <Footer />
            </>
          } />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                location={location} />
              <Footer />
            </>

          } />
        <Route
          path='/profile'
          element={
            <Header
              isLoggedIn={isLoggedIn}
              location={location} />

          } />
        <Route
          path='/signup'
          element={
            <Register />

          } />
        <Route
          path='/signin'
          element={
            <Login />
          } />
      </Routes>

    </>
  );
}

export default App;

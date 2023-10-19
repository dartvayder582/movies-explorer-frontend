// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Login from '../auth/Login';
import Register from '../auth/Register';
// import Login from './auth/Login';
// import Register from './auth/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
              <Promo />
            </>

          } />
        <Route
          path='/movies'
          element={
            <Header
              isLoggedIn={isLoggedIn}
              location={location} />

          } />
        <Route
          path='/saved-movies'
          element={
            <Header
              isLoggedIn={isLoggedIn}
              location={location} />

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

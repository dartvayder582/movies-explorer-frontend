// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import Header from '../Header/Header';
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
            <Header
              isLoggedIn={isLoggedIn}
              location={location} />

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
      </Routes>

    </>
  );
}

export default App;

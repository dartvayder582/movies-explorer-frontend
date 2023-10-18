// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <PageNotFound />
    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import Login from '../forms/auth/Login';
import Register from '../forms/auth/Register';
import NavTab from '../Main/NavTab/NavTab';
import AboutProject from '../Main/AboutProject/AboutProject';
import AboutMe from '../Main/AboutMe/AboutMe';
import Techs from '../Main/Techs/Techs';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import Login from './auth/Login';
// import Register from './auth/Register';
import './App.css';
import AllMovies from '../movies/AllMovies/AllMovies';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import { cardData } from '../../utils/devConfig';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  // console.log(cardData);
  // const navigate = useNavigate();

  // карточки
  // const [cards, setCards] = useState();

  // useEffect(() => {
  //   setCards(cardData);
  // },[]);

  //обработчики
  // const handleCardClick = ((card) => {});
  const handleCardLike = ((card) => { });
  const handleCardDelete = ({ cardId }) => { };

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
              <AllMovies
                cards={cardData}
                // onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
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
              <SavedMovies
                cards={cardData}
                // onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
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

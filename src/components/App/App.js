import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Login from '../forms/auth/Login';
import Register from '../forms/auth/Register';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AllMovies from '../Movies/AllMovies/AllMovies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import { cardData } from '../../utils/devConfig';
import Profile from '../forms/Profile/Profile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isShowApiError, setIsShowApiError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

// аутентификация
const onLogin = (email, password) => {
  setIsLoggedIn(true);;
  navigate('/', { replace: true });
}
const onRegister = (name, email, password) => {
  navigate('/signin', { replace: true });
}
const onSignOut = () => {
  setIsLoggedIn(false);
  navigate('/', { replace: true });
}


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
          path='/signup'
          element={
            <Register
            isShowApiError={isShowApiError}
            onRegister={onRegister} />

          } />
        <Route
          path='/signin'
          element={
            <Login
            isShowApiError={isShowApiError}
            onLogin={onLogin} />
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
            <>
              <Header
                isLoggedIn={isLoggedIn}
                location={location} />
              <Profile
              isShowApiError={isShowApiError}
              onSignOut={onSignOut} />
            </>
          } />

        <Route
          path='*'
          element={
            <PageNotFound
              navigate={navigate} />
          } />
      </Routes>

    </>
  );
}

export default App;

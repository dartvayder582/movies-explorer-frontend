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
import Profile from '../forms/Profile/Profile';
import * as api from '../../utils/api/MainApi';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { MESSAGE_TEXT, REGEX } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  // location
  const location = useLocation();
  const navigate = useNavigate();

  // user
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage(false, 'isLoggedIn');
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });

  // карточки
  const [myCards, setMyCards] = useState([]);

  //api messages
  const [isShowApiMessage, setIsShowApiMessage] = useState(false);
  const [isSuccessApiMessage, setIsSuccessApiMessage] = useState(false);
  const [apiMessageText, setApiMessageText] = useState('');
  const showApiMessage = (isSucces, text) => {
    setApiMessageText(text);
    setIsSuccessApiMessage(isSucces);
    setIsShowApiMessage(true);
  }
  const hideApiMessage = () => {
    setIsShowApiMessage(false);
  }
  useEffect(() => {
    if (isShowApiMessage) {
      return hideApiMessage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // индикаторы загрузки
  const [isLoadLogin, setIsLoadLogin] = useState(false);
  const [isLoadRegister, setIsLoadRegister] = useState(false);
  const [isLoadEditProfile, setIsLoadEditProfile] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        api.getUserData(),
        api.getCardInfo()
      ])
        .then(([userData, cardData]) => {
          setCurrentUser(userData);
          setMyCards(cardData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // аутентификация
  const onLogin = (email, password) => {
    setIsLoadLogin(true);
    api.authorize(email, password)
      .then((data) => {
        if (data._id) {
          localStorage.setItem("userId", data._id);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err)
        showApiMessage(false, MESSAGE_TEXT[err]);
      })
      .finally(() => {
        setIsLoadLogin(false);
      });
  }

  const onRegister = (name, email, password) => {
    setIsLoadRegister(true);
    api.register(name, email, password)
      .then(() => {
        onLogin(email, password)
      })
      .catch((err) => {
        console.log(err)
        showApiMessage(false, MESSAGE_TEXT[err]);
      })
      .finally(() => {
        setIsLoadRegister(false);
      });
  }

  const onSignOut = () => {
    api.logout()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/', { replace: true });
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  }

  // сохранение/удаление карточки
  const onCardAdd = ((card) => {
    api.addCard(card)
      .then((newCard) => {
        setMyCards([newCard, ...myCards]);
      })
      .catch((err) => console.log(err));
  });

  const onCardDelete = ({ _id }) => {
    api.deleteCard(_id)
      .then(() => {
        setMyCards((state) => state.filter((c) => c._id !== _id));
      })
      .catch((err) => console.log(err));
  };

  // обновление профиля
  const onUpdateUser = ({ name, email }) => {
    setIsLoadEditProfile(true);
    api.updateUserInfo({
      name,
      email,
    })
      .then((userData) => {
        setCurrentUser(userData);
        showApiMessage(true, MESSAGE_TEXT[200]);
      })
      .catch((err) => {
        showApiMessage(false, MESSAGE_TEXT[err]);
      })
      .finally(() => setIsLoadEditProfile(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <>
              {isLoggedIn
                ?
                <Navigate to={-1} replace />
                :
                <Register
                  isLoad={isLoadRegister}
                  isShowApiMessage={isShowApiMessage}
                  isSuccessApiMessage={isSuccessApiMessage}
                  apiMessageText={apiMessageText}
                  hideApiMessage={hideApiMessage}
                  onRegister={onRegister}
                  regex={REGEX} />
              }
            </>
          } />
        <Route
          path='/signin'
          element={
            <>
              {isLoggedIn
                ?
                <Navigate to={-1} replace />
                :
                <Login
                  isLoad={isLoadLogin}
                  isShowApiMessage={isShowApiMessage}
                  isSuccessApiMessage={isSuccessApiMessage}
                  apiMessageText={apiMessageText}
                  hideApiMessage={hideApiMessage}
                  onLogin={onLogin}
                  regex={REGEX} />
              }
            </>
          } />
        <Route
          exact path='/movies'
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                location={location} />
              <ProtectedRouteElement
                element={AllMovies}
                myCards={myCards}
                onCardAdd={onCardAdd}
                onCardDelete={onCardDelete}
                isShowApiMessage={isShowApiMessage}
                isSuccessApiMessage={isSuccessApiMessage}
                apiMessageText={apiMessageText}
                showApiMessage={showApiMessage}
                hideApiMessage={hideApiMessage}
                location={location}
                isLoggedIn={isLoggedIn} />
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
              <ProtectedRouteElement
                element={SavedMovies}
                cards={myCards}
                onCardDelete={onCardDelete}
                location={location}
                isLoggedIn={isLoggedIn} />
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
              <ProtectedRouteElement
                element={Profile}
                isLoad={isLoadEditProfile}
                isShowApiMessage={isShowApiMessage}
                isSuccessApiMessage={isSuccessApiMessage}
                apiMessageText={apiMessageText}
                hideApiMessage={hideApiMessage}
                onUpdateUser={onUpdateUser}
                onSignOut={onSignOut}
                regex={REGEX}
                isLoggedIn={isLoggedIn} />
            </>
          } />
        <Route
          path='*'
          element={
            <PageNotFound />
          } />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

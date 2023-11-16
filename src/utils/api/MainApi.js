import { apiBodyTemplate } from "../utils";
import { MAIN_API as BASE_URL } from "../constants";

// проверка ответа
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

// запрос на регистрацию
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => checkResponse(res))
};

// запрос на вход
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res))
};

// запрос на выход
export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => checkResponse(res))
};


// загрузка пользователя
export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include'
  })
    .then((res) => checkResponse(res))
}

// обновление информации о пользователе
export const updateUserInfo = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then((res) => checkResponse(res))
}

// загрузка сохраненных карточек
export const getCardInfo = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => checkResponse(res))
}

// сохранение карточки
export const addCard = (movieData) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(apiBodyTemplate(movieData))
  })
    .then((res) => checkResponse(res))
}

// удаление карточки
export const deleteCard = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then((res) => checkResponse(res))
}

import { EXTERNAL_API } from "../constants";

const BASE_URL = EXTERNAL_API + '/beatfilm-movies';

// проверка ответа
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

// загрузка всех карточек
export const getAllCardInfo = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
  })
    .then((res) => checkResponse(res))
};
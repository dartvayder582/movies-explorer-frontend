// export const MAIN_API = 'http://localhost:3000';
export const MAIN_API = 'https://api.movie.finder.nomoredomainsrocks.ru';
export const EXTERNAL_API = 'https://api.nomoreparties.co';

export const NAV_LINKS_DEFAULT = [
  {
    href: '/signup',
    text: 'Регистрация',
    id: 'signup'
  },
  {
    href: '/signin',
    text: 'Войти',
    id: 'signin'
  },
];

export const NAV_LINKS_LOGGED_IN = [
  {
    href: '/',
    text: 'Главная',
    id: 'main'
  },
  {
    href: '/movies',
    text: 'Фильмы',
    id: 'movies'
  },
  {
    href: '/saved-movies',
    text: 'Сохранённые фильмы',
    id: 'saved-movies'
  },
  {
    href: '/profile',
    text: 'Аккаунт',
    id: 'profile'
  },
];

export const MESSAGE_TEXT = {
  500: 'На сервере произошла ошибка. Повторите попытку позже.',
  400: 'Переданы некорректные данные',
  409: 'Пользователь с таким e-mail уже существует',
  401: 'Неправильные почта или пароль',
  200: 'Успешно!',
  moviesError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  filmRequired: 'Нужно ввести ключевое слово',
};

export const REGEX = {
  email: "^[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+)*@[a-zA-Z0-9]+(?:\-[a-zA-Z0-9]+)*\\.[a-zA-Z0-9\\-]*[a-zA-Z0-9]?$",
  name: "^[a-zA-Zа-яА-ЯЁё\\s\\-']+$",
};

export const BREAKPOINTS = {
  SCREEN_1280: {
    width: 1280,
    initCards: 16,
    addCards: 4,
  },
  SCREEN_930: {
    width: 930,
    initCards: 12,
    addCards: 3,
  },
  SCREEN_580: {
    width: 580,
    initCards: 8,
    addCards: 2,
  },
  SCREEN_579: {
    width: 579,
    initCards: 5,
    addCards: 2,
  },
};
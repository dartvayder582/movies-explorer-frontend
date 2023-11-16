import { EXTERNAL_API } from "./constants";

export const parseArr = (arr) => {
  const source = EXTERNAL_API;


  return arr.map((item) => {
    return {
      country: item.country,
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: source + item.image.url,
      trailerLink: item.trailerLink,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
      thumbnail: source + item.image.formats.thumbnail.url,
      movieId: item.id,
    }
  })
};

export const movieFilter = (moviesArr, searchText, isShortMovie) => {
  return moviesArr.filter(({ nameRU, nameEN, duration }) => {
    const searchString = searchText.toLowerCase();
    const durationMovie = isShortMovie ? (duration <= 40) : true;
    const nameMovie = nameRU.toLowerCase().includes(searchString) || nameEN.toLowerCase().includes(searchString);

    return nameMovie && durationMovie;
  })
};

export const apiBodyTemplate = (obj) => {
  return {
    country: obj.country,
    director: obj.director,
    duration: obj.duration,
    year: obj.year,
    description: obj.description,
    image: obj.image,
    trailerLink: obj.trailerLink,
    nameRU: obj.nameRU,
    nameEN: obj.nameEN,
    thumbnail: obj.thumbnail,
    movieId: obj.movieId,
  }
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (hours === 0) {
    return minutes + 'м';
  } else if (minutes === 0) {
    return hours + 'ч';
  }
  return hours + 'ч' + minutes + 'м';
};

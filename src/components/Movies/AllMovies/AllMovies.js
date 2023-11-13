import { memo, useState, useEffect } from "react";
import SearchForm from "../../forms/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movieFilter } from "../../../utils/utils";
import { useLocalStorage } from "../../../utils/hooks/useLocalStorage";
import { useInitialSearch } from "../../../utils/hooks/useInitialSearch";
import { useValidationForm } from "../../../utils/hooks/useValidationForm";
import { MESSAGE_TEXT } from "../../../utils/constants";

const AllMovies = memo(({
  myCards,
  onCardAdd,
  onCardDelete,
  isShowApiMessage,
  isSuccessApiMessage,
  apiMessageText,
  hideApiMessage,
  showApiMessage,
  location
}) => {
  const {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
  } = useValidationForm({
    film: '',
  });

  const [isInitialSearch, setIsInitialSearch] = useState(false);
  const {
    allCards,
    isPreloader,
    isError,
  } = useInitialSearch(isInitialSearch);

  // карточки
  const [savedAllCards, setSavedAllCards] = useLocalStorage(allCards || [], 'allCards');
  const [filteredCards, setFilteredCards] = useState([]);
  const [savedFilteredCards, setSavedFilteredCards] = useLocalStorage(filteredCards, 'filteredCards');

  // чекбокс
  const [isChecked, setIsChecked] = useState(false);
  const [savedCheckbox, setSavedCheckbox] = useLocalStorage(isChecked, 'checkbox');

  // текст ввода
  const [savedSearchText, setSavedSearchText] = useLocalStorage(values.film || '', 'searchText');

  // состояние результата поиска
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    savedSearchText && setValues({ film: savedSearchText });
    savedCheckbox && setIsChecked(savedCheckbox);
    hideApiMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSavedCheckbox(isChecked);
    savedAllCards && setFilteredCards(movieFilter(savedAllCards, savedSearchText, isChecked));
    setErrors({ film: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  useEffect(() => {
    allCards && setSavedAllCards(allCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCards]);

  useEffect(() => {
    isError && showApiMessage(false, MESSAGE_TEXT.moviesError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])

  useEffect(() => {
    filteredCards && setSavedFilteredCards(filteredCards);
    if (filteredCards.length === 0 && values.film) {
      return setIsFound(false);
    } else {
      return setIsFound(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCards]);

  useEffect(() => {
    savedAllCards && setFilteredCards(movieFilter(savedAllCards, savedSearchText, isChecked));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedAllCards]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.film) {
      return setErrors({ film: MESSAGE_TEXT.filmRequired });
    }

    setIsInitialSearch(true);
    setSavedSearchText(values.film);
    setSavedCheckbox(isChecked);
    savedAllCards && setFilteredCards(movieFilter(savedAllCards, values.film, isChecked));
  }

  const handleArrItem = (item) => {
    const isSavedMovies = myCards.length > 0 && myCards.filter((movie) => movie.movieId === item.movieId);
    item._id = isSavedMovies.length > 0 && isSavedMovies ? isSavedMovies[0]._id : '';
    item.owner = isSavedMovies.length > 0 && isSavedMovies ? isSavedMovies[0].owner : '';
  }

  return (
    <main className='main'>
      <SearchForm
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        onCheckboxChange={handleCheckboxChange}
        isChecked={isChecked}
        error={errors.film}
        value={values.film}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isFound={isFound}
        isError={isError}
        isShowApiMessage={isShowApiMessage}
        apiMessageText={apiMessageText}
        isSuccessApiMessage={isSuccessApiMessage}
        cards={savedFilteredCards}
        onCardAdd={onCardAdd}
        onCardDelete={onCardDelete}
        handleArrItem={handleArrItem}
        location={location}
      />
    </main>
  )
})

export default AllMovies;
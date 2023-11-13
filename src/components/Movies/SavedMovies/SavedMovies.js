import { memo, useEffect, useState } from "react";
import SearchForm from "../../forms/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movieFilter } from "../../../utils/utils";
import { useValidationForm } from "../../../utils/hooks/useValidationForm";
import { MESSAGE_TEXT } from "../../../utils/constants";

const SavedMovies = memo(({
  cards,
  onCardDelete,
  location,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [savedCards, setSavedCards] = useState(cards);
  const [isFound, setIsFound] = useState(true);

  const {
    values,
    handleChange,
    errors,
    setErrors,
  } = useValidationForm({
    film: '',
  });

  useEffect(() => {
    setSavedCards(movieFilter(cards, values.film || '', isChecked));
    setErrors({ film: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, cards]);

  // not found
  useEffect(() => {
    if (savedCards.length === 0 && values.film) {
      setIsFound(false);
    } else {
      setIsFound(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedCards, isChecked])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.film) {
      return setErrors({ film: MESSAGE_TEXT.filmRequired });
    }
    setSavedCards(movieFilter(cards, values.film, isChecked));
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
        cards={savedCards}
        isFound={isFound}
        onCardDelete={onCardDelete}
        location={location} />
    </main>
  )
})

export default SavedMovies;
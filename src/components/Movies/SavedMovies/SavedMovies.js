import { memo } from "react";
import SearchForm from "../../forms/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = memo(({
  cards,
  //  onCardClick,
  // onCardLike,
  // onCardDelete,
  location
}) => {
  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList
        cards={cards}
        //  onCardClick
        // onCardLike={onCardLike}
        // onCardDelete={onCardDelete}
        location={location} />
    </main>
  )
})


export default SavedMovies;
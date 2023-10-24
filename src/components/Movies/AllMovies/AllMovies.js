import React from "react";
import SearchForm from "../../forms/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const AllMovies = React.memo(({
  cards,
  //  onCardClick,
  onCardLike,
  onCardDelete,
  location
 }) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        cards={cards}
        //  onCardClick
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
        location={location} />
    </main>
  )
})


export default AllMovies;
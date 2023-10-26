import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
// import '../movies.css';

const MoviesCardList = React.memo(({
  cards,
  //  onCardClick,
  onCardLike,
  onCardDelete,
  location
}) => {
  // const currentUser = React.useContext(CurrentUserContext);
  // console.log(cards)
  return (

    <section className='content'>
      <ul className="cards list-style">
        {cards.map((item, i) => (
          <li key={item._id}>
            <MoviesCard
              card={item}
              // onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              location={location} />
          </li>

        ))}
      </ul>
      <button className='button-style cards__show-more'>Ещё</button>
    </section>



  );
});

export default MoviesCardList;
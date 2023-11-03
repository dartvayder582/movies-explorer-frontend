import { memo } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
// import '../movies.css';

const MoviesCardList = memo(({
  cards,
  //  onCardClick,
  // onCardLike,
  // onCardDelete,
  location
}) => {
  // const currentUser = React.useContext(CurrentUserContext);
  // console.log(cards)
  return (

    <section className='cards content' aria-label="Карточки с фильмами">
      <ul className="cards__items list-style">
        {cards.map((item, i) => (
          <li key={item._id}>
            <MoviesCard
              card={item}
              // onCardClick={onCardClick}
              // onCardLike={onCardLike}
              // onCardDelete={onCardDelete}
              location={location} />
          </li>

        ))}
      </ul>
      <button type='button' className={`button-style button-style_opacity cards__show-more ${location.pathname === '/saved-movies' ? 'cards__show-more_hidden' : ''}`}>Ещё</button>
    </section>



  );
});

export default MoviesCardList;
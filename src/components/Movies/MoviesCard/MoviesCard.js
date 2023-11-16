import { useState, memo, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { getTimeFromMins } from "../../../utils/utils";
import './MoviesCard.css';

const MoviesCard = memo(({
  card,
  onCardAdd,
  onCardDelete,
  location
}) => {
  const [isImgError, setIsImgError] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const isAdded = card.owner === currentUser._id;

  const handleAddOrDeleteCard = () => {
    if (isAdded) {
      onCardDelete(card);
    } else {
      onCardAdd(card);
    }
  }

  return (
    <div className="card">
      <a className="card__link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className={`card__image ${isImgError ? 'card__image_error' : ''}`}
          aria-label={card.nameRU}
          src={card.thumbnail}
          alt={card.nameRU}
          onError={() => setIsImgError(true)} />
      </a>

      <div className="card__info">
        <div className="card__text">
          <h2 className="card__name">{card.nameRU}</h2>
          <p className="card__duration">{getTimeFromMins(card.duration)}</p>
        </div>
        {location.pathname === '/saved-movies' ?
          <button
            type="button"
            className={`card__button card__button_delete`}
            aria-label="Удалить"
            onClick={handleAddOrDeleteCard} />
          :
          <button
            type="button"
            className={`card__button card__button_add ${isAdded ? 'card__button_add-active' : ''}`}
            aria-label="Добавить"
            onClick={handleAddOrDeleteCard} />
        }
      </div>
    </div>
  )
});

export default MoviesCard;
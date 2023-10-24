import React from "react";
import './MoviesCard.css';

const MoviesCard = React.memo(({
  card,
  // onCardClick,
  onCardLike,
  onCardDelete,
  location
}) => {

  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = card.owner === currentUser._id;
  // const isLiked = card.likes.some(id => id === currentUser._id);


  const [isImgError, setIsImgError] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);
  // console.log(card);

  // function handleClick() {
  //   onCardClick(card);
  // }

  function handleAddClick() {
    setIsAdded(!isAdded);
  }

  // utils
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч' + minutes + 'м';
  };

  // function handleDeleteClick() {
  //   onCardDelete(card)
  // }

  // ${isLiked ? 'place__like-button_active' : ''}

  return (
    <div className="card">
      {/* {isOwn && <button type="button" className="place__delete-button" aria-label="Удалить" onClick={handleDeleteClick} />} */}
      <img className={`card__image ${isImgError ? 'card__image_error' : ''}`}
        aria-label={card.nameRU}
        src={card.thumbnail}
        alt={' '}
        // onClick={handleClick}
        onError={() => setIsImgError(true)} />
      <div className="card__info">
        <div className="card__text">
          <h2 className="card__name">{card.nameRU}</h2>
          <p className="card__duration">{getTimeFromMins(card.duration)}</p>
        </div>
        {location.pathname === '/saved-movies' ?
          <button type="button" className={`card__button card__button_delete`} aria-label="Добавить" onClick={handleAddClick} />
          :
          <button type="button" className={`card__button card__button_add ${isAdded ? 'card__button_add-active' : ''}`} aria-label="Добавить" onClick={handleAddClick} />
        }

        {/* <div className="card__like"> */}
        {/*  */}
        {/* <span className="place__like-count">{card.likes.length}</span> */}
        {/* </div> */}
      </div>
    </div>
  )
});

export default MoviesCard;
import { memo, useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ApiMessage from '../../ApiMessage/ApiMessage';
import Preloader from '../Preloader/Preloader';
import { useResizeWindow } from '../../../utils/hooks/useResizeWindow';
import { BREAKPOINTS } from '../../../utils/constants';
import './MoviesCardList.css';

const MoviesCardList = memo(({
  isPreloader,
  isFound,
  isError,
  cards,
  onCardAdd,
  onCardDelete,
  handleArrItem,
  isShowApiMessage,
  isSuccessApiMessage,
  apiMessageText,
  location,
}) => {
  const {
    width,
    isScreenXl,
    isScreenLg,
    isScreenMd,
    isScreenSm,
  } = useResizeWindow();

  // счетчик карточек
  const [initCards, setInitCards] = useState(0);
  const [addCards, setAddCards] = useState(0);

  useEffect(() => {
    handleCardsCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, width])

  const handleCardsCount = () => {
    if (isScreenXl) {
      setInitCards(BREAKPOINTS.SCREEN_1280.initCards);
      setAddCards(BREAKPOINTS.SCREEN_1280.addCards)
    } else if (isScreenLg) {
      setInitCards(BREAKPOINTS.SCREEN_930.initCards);
      setAddCards(BREAKPOINTS.SCREEN_930.addCards)
    }
    else if (isScreenMd) {
      setInitCards(BREAKPOINTS.SCREEN_580.initCards);
      setAddCards(BREAKPOINTS.SCREEN_580.addCards)
    }
    else if (isScreenSm) {
      setInitCards(BREAKPOINTS.SCREEN_579.initCards);
      setAddCards(BREAKPOINTS.SCREEN_579.addCards)
    }
  };

  const showMoreItems = () => {
    setInitCards((prevValue) => prevValue + addCards);
  }

  const handleSliceCards = (cards) => {
    if (location.pathname === '/movies') {
      return cards.slice(0, initCards)
    }
    return cards;
  }

  return (
    <section className='cards content' aria-label="Карточки с фильмами">
      {isPreloader
        ? <Preloader />
        : isError
          ? <ApiMessage
              isShowApiMessage={isShowApiMessage}
              isSuccessApiMessage={isSuccessApiMessage}
              apiMessageText={apiMessageText} />
          : !isFound
            ? <p className='cards__message'>По запросу ничего не найдено</p>
            : <ul className="cards__items list-style">
              {handleSliceCards(cards).map((item, i) => {
                (location.pathname === '/movies') && handleArrItem(item);
                return (
                  <li key={item.movieId}>
                    <MoviesCard
                      card={item}
                      onCardAdd={onCardAdd}
                      onCardDelete={onCardDelete}
                      location={location} />
                  </li>
                )
              })}
            </ul>
      }
      {((location.pathname === '/movies') && (initCards < cards.length) && !isError && !isPreloader)
        && <button
            type='button'
            onClick={showMoreItems}
            className="button-style button-style_opacity cards__show-more">
            Ещё</button>
      }
    </section>
  );
});

export default MoviesCardList;
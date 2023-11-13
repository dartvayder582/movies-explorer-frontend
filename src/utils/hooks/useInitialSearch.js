import { useState, useEffect } from "react";
import { getAllCardInfo } from "../api/MoviesApi";
import { parseArr } from "../utils";

export const useInitialSearch = (value) => {
  const [allCards, setAllCards] = useState();
  const [isPreloader, setIsPreloader] = useState(false);
  const [isError, setIsError] = useState(false);

  const getOriginalCards = () => {
    setIsPreloader(true);
    getAllCardInfo()
      .then((data) => setAllCards(parseArr(data)))
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsPreloader(false));
  };

  useEffect(() => {
    value && getOriginalCards();
  }, [value]);

  return {
    allCards,
    setAllCards,
    isPreloader,
    isError,
  };
}
import { useEffect, useState } from "react";

export const useLocalStorage = (initial, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage && (storage !== 'undefined')) {
      return JSON.parse(storage);
    }
    return initial;
  }

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}
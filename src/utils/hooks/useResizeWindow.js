import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

export const useResizeWindow = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleResize, 1000));
    handleResize();
    return () => {
      window.removeEventListener('resize', () => setTimeout(handleResize, 1000));
    };
  }, []);

  return {
    width,
    isScreenXl: width >= BREAKPOINTS.SCREEN_1280.width,
    isScreenLg: width >= BREAKPOINTS.SCREEN_930.width,
    isScreenMd: width >= BREAKPOINTS.SCREEN_580.width,
    isScreenSm: width <= BREAKPOINTS.SCREEN_579.width,
  };
};
import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio section'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__links'>
        <p className='portfolio__link-text'>
          Статичный сайт
          <a href='#' className='portfolio__link link-style' target="_blank" rel="noreferrer"></a>
        </p>
        <p className='portfolio__link-text'>
          Адаптивный сайт
          <a href='#' className='portfolio__link link-style' target="_blank" rel="noreferrer"></a>
        </p>
        <p className='portfolio__link-text'>
          Одностраничное приложение
          <a href='#' className='portfolio__link link-style' target="_blank" rel="noreferrer"></a>
        </p>

      </div>

    </section>
  )
}

export default Portfolio;
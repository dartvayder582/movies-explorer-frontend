import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__links'>
        <p className='portfolio__link-text'>
          Статичный сайт
          <a href='https://dartvayder582.github.io/how-to-learn/' className='portfolio__link link-style' target="_blank" rel="noreferrer">{''}</a>
        </p>
        <p className='portfolio__link-text'>
          Адаптивный сайт
          <a href='https://dartvayder582.github.io/russian-travel/' className='portfolio__link link-style' target="_blank" rel="noreferrer">{''}</a>
        </p>
        <p className='portfolio__link-text'>
          Одностраничное приложение
          <a href='https://mesto-russia.nomoredomainsrocks.ru' className='portfolio__link link-style' target="_blank" rel="noreferrer">{''}</a>
        </p>

      </div>

    </section>
  )
}

export default Portfolio;
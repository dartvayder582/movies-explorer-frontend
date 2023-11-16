import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='list-style portfolio__links'>
        <li className='portfolio__link-item'>
          <a
            href='https://dartvayder582.github.io/how-to-learn/'
            target="_blank"
            rel="noreferrer"
            className='link-style portfolio__link'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://dartvayder582.github.io/russian-travel/'
            target="_blank"
            rel="noreferrer"
            className='link-style portfolio__link'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://mesto-russia.nomoredomainsrocks.ru'
            target="_blank"
            rel="noreferrer"
            className='link-style portfolio__link'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
      </ul>

    </section>
  )
}

export default Portfolio;
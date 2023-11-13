import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__main-content content'>
        <p className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__copyright-content'>
          <p className='footer__author'>© 2023 Ivan Akimov</p>
          <ul className='footer__links list-style'>
            <li className='footer__link'>
              <a href="https://practicum.yandex.ru/" target="_blank" className='footer__link-item link-style' rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__link'>
              <a href="https://github.com/" target="_blank" className='footer__link-item link-style' rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
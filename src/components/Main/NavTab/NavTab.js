import React from 'react';
import './NavTab.css'

const NavTab = () => {
  return (
    <nav className='navtab'>
      <ul className='navtab__list list-style'>
        <li><a href="#project" className="link-style navtab__link">О проекте</a></li>
        <li><a href="#techs" className="link-style navtab__link">Технологии</a></li>
        <li><a href="#student" className="link-style navtab__link">Студент</a></li>
      </ul>
    </nav>
  )
}

export default NavTab;
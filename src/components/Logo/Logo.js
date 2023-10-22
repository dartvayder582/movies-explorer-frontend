import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = React.memo(() => {
  return (
    <div className='logo'>
      <Link className='logo__item' to='/' type='button' />
    </div>

  )
})

export default Logo;
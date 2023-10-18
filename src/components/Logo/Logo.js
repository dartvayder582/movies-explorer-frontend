import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = React.memo(() => {
  return (
    <Link className='logo' to='/' type='button' />
  )
})

export default Logo;
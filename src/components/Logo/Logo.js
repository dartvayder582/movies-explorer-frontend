import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = memo(() => {
  return (
    <Link className='logo button-style button-style_scale' to='/' />
  )
})

export default Logo;
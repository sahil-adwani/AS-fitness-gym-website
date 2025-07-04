import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setnav] = useState(true);

const changeBackground = () => {

  if (window.scrollY >= 50) { 
    setnav(true);
  }
  else{
    setnav(false);
  }
}

window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>

      <Link to='#' className='logo'>
      {/* <img src={logo} alt='/'/> */}
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li><Link to='Workouts' smooth = {true} duration = {1000}>Features</Link></li>
        <li><Link to='#'>gallery</Link></li>
        <li><Link to='#'>Offers</Link></li>
        <li><Link to='#'>book demo</Link></li>
        <li><Link to='#'>Contact</Link></li>
      </ul>
  </nav>

  )
}
export default Navbar
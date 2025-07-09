import React from 'react'
import { useState } from "react";
import { Link } from "react-scroll";

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
        <li><Link to="workouts" smooth={true} duration={500}>Features</Link></li>
        <li><Link to="images" smooth={true} duration={500}>Gallery</Link></li>
        <li><Link to="packages" smooth={true} duration={500}>Offers</Link></li>
        <li><Link to="bookdemo" smooth={true} duration={500}>Book Demo</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
  </nav>

  )
}
export default Navbar
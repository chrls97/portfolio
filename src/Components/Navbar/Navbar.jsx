import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  const handleNavClick = () => {
    // Close menu only on mobile view (width <= 800px)
    if (window.innerWidth <= 800) {
      closeMenu();
    }
  };

  return (
    <div className='navbar'>
      <HashLink smooth to="#hero"><h2>CHARLES <span>AMON</span></h2></HashLink>
      <button className='nav-mob-open' onClick={openMenu}><FontAwesomeIcon icon={faBars} /></button>
      <ul ref={menuRef} className='nav-menu'>
        <button className='nav-mob-close' onClick={closeMenu}><FontAwesomeIcon icon={faXmark} /></button>
        <li onClick={handleNavClick}><HashLink smooth to="/#hero">Home</HashLink></li>
        <li onClick={handleNavClick}><HashLink smooth to="/#aboutme">About Me</HashLink></li>
        <li onClick={handleNavClick}><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li onClick={handleNavClick}><HashLink smooth to="/#contact">Contact Me</HashLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
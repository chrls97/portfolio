import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px"
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
  // items-start gap-10 fixed  top-0 right-[0] sm:right-[-350px] w-[350px] h-full z-2 bg-[rgb(36,35,35)]

  // <ul ref={menuRef} className='flex flex-col sm:flex-row items-center gap-10  md:gap-5 lg:gap-10 text-[20px]  top-0  right-[0] sm:right-[-350px] w-[-350px] sm:w-auto bg-[rgb(36,35,35)] h-full'>
  return (
    <>
      <nav className='top-0 left-0 right-0 sticky z-50 bg-[rgb(36,35,35)] px-[5%]'>
        <div className='flex justify-between items-center  max-w-[1520px] w-full mx-auto py-3'>
             <HashLink smooth to="#hero" className='text-3xl sm:text-3xl lg:text-3xl'><h2 className='font-bold'>CHARLES <span className='font-extralight text-white'>AMON</span></h2></HashLink>
          <button className='sm:hidden bg-white text-gray-700 px-2 py-1 rounded cursor-pointer' onClick={openMenu}><FontAwesomeIcon icon={faBars} /></button>
          <ul ref={menuRef} className='flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-5 lg:gap-15 fixed sm:static top-0 right-[-350px] px-10 sm:px-0 w-[350px] sm:w-auto h-full sm:h-auto z-2 bg-[rgb(36,35,35)] text-[20px]'>
            <button className='block relative top-[15px] left-[250px] cursor-pointer bg-white text-gray-700 px-[5px] py-[0px] rounded sm:hidden' onClick={closeMenu}><FontAwesomeIcon icon={faXmark} /></button>
            <li onClick={handleNavClick}><HashLink smooth to="/#hero">Home</HashLink></li>
            <li onClick={handleNavClick}><HashLink smooth to="/#aboutme">About Me</HashLink></li>
            <li onClick={handleNavClick}><HashLink smooth to="/#projects">Projects</HashLink></li>
            <li onClick={handleNavClick}><HashLink smooth to="/#contact">Contact Me</HashLink></li>
          </ul>
        </div>
         
      </nav>
    </>
  );
};

export default Navbar;
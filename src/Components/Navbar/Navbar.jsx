import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>CHARLES <span>AMON</span></h2>

      <ul>

        <li><HashLink smooth to="/#hero">Home</HashLink></li>
        <li><HashLink smooth to="/#aboutme">About Me</HashLink></li>
        <li><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact Me</HashLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
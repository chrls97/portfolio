import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>CHARLES <span>AMON</span></h2>

      <ul>
         <NavLink to='/'><li >Home</li></NavLink>
        <NavLink to='#aboutme'><li >About Me</li></NavLink>
        <NavLink to='#project'><li >Projects</li></NavLink>
        <NavLink to='#contact'><li >Contact</li></NavLink>
      </ul>
      
    </div>
  )
}

export default Navbar

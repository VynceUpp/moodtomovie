import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Moodto<span>Movie</span></h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
        </ul>
        <div className='mobilemenu'>
            <i class="ri-menu-line"></i>
        </div>
    </div>
  )
}

export default Navbar
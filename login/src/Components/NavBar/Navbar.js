import React, { useState } from 'react';
import './nav.css';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
       Portfolio
      </a>
      <i className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleMenuClick}></i>
      <div className='bb'>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        {/* <a href="#">Portfolio</a> */}
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      </div>
      <div className={`nav-bg ${isActive ? 'active' : ''}`}></div>
    </header>
  );
};

export default Navbar;

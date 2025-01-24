import React from 'react';
import './nav2.css';

function Navbar() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><a href="/nav">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Works</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="title">
          <h1>I'm Mistry Vinit</h1>
          <p>I'm a Software Developer</p>
        </div>
        <div className="social-links">
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-skype"></i></a>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Yash Tailor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Navbar;
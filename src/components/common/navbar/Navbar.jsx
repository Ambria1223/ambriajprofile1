import React from 'react';
import './Navbar.css';

function Navbar () {
    
    return (
        <section className="navbar">
      <a href="/" className="navbar-item">About</a>
      <a href="/about" className="navbar-item">Portfolio</a>
      <a href="/portfolio" className="navbar-item">Contact</a>
      <a href="/shop" className="navbar-item">Resume</a>
    
  </section>
    )
}



   

export default Navbar;

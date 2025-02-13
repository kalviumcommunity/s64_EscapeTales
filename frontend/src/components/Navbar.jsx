import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">EscapeTales</h1>
        
        {/* Mobile menu button */}
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/stories" className="nav-link">Stories</a>
          <a href="/puzzles" className="nav-link">Puzzles</a>
          <a href="/about" className="nav-link">About</a>
          <button className="nav-button">Play Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
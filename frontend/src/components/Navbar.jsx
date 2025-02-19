import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>Stories</Link>
          <Link to="/puzzles" className="nav-link" onClick={() => setIsMenuOpen(false)}>Puzzles</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/play" className="nav-button" onClick={() => setIsMenuOpen(false)}>Play Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

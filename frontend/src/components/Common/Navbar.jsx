import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">EscapeTales</h1>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/stories" className="nav-link">Stories</Link>
          <Link to="/puzzles" className="nav-link">Puzzles</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/play" className="nav-button">Play Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

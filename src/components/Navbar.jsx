import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink as LinkHash } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Portfolio</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-right ${isOpen ? 'active' : ''}`}>
        <li><LinkHash smooth to="/#about" onClick={() => setIsOpen(false)}>About</LinkHash></li>
        <li><LinkHash smooth to="/#project" onClick={() => setIsOpen(false)}>Projects</LinkHash></li>
        <li><LinkHash smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</LinkHash></li>
      </ul>
    </nav>
  );
};

export default Navbar;

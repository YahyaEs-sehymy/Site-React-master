import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ onSearchClick, onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="logo-image"
          />
          React
        </Link>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {/* <li className="nav__item">
              <a href="#About" className="nav__link" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#Lessons" className="nav__link" onClick={closeMenu}>
                Lessons
              </a>
            </li> */}
            <li className="nav__item">
              <Link to="/exercice" className="nav__link" onClick={closeMenu}>
                Exercise
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Projet" className="nav__link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/test" className="nav__link" onClick={closeMenu}>
                Test
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Blog" className="nav__link" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            {/* <li className="nav__item">
              <a href="#Contact" className="nav__link" onClick={closeMenu}>
                Contact Me
              </a>
            </li> */}
          </ul>

          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__actions">
          <i className="ri-search-line nav__search" onClick={onSearchClick}></i>
          <i className="ri-user-line nav__login" onClick={onLoginClick}></i>
          <button className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

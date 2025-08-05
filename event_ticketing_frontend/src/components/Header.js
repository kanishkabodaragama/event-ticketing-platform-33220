import React from 'react';
import './Header.css';

// PUBLIC_INTERFACE
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">EventTicket</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#events" className="nav-link">Events</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

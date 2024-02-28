// Header.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const ApplyButton = () => {
  return (
    <div className="apply-button">
      <Link to="/apply">
        <Button variant="primary">Apply</Button>
      </Link>
    </div>
  );
};

const LoginButton = () =>{
  return (
    <div className="login-button">
      <Link to="/login">
        <Button variant="secondary">Login</Button>
      </Link>
    </div>
  );
};

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        {/* ... Navbar structure ... */}
        <Nav className="mr-auto">
          <Link to="/" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
          <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
          <Link to="/links" className={`nav-link ${location.pathname === '/links' ? 'active' : ''}`}>Useful links</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact us</Link>
          <Link to="/admin-panel" className={`nav-link ${location.pathname === '/admin-panel' ? 'active' : ''}`}>Admin Panel</Link>
        </Nav>
        <div className="buttons-container">
            <ApplyButton /> {/* Include the ApplyButton component within the Navbar */}
            <LoginButton /> {/* Include the LoginButton component within the Navbar*/}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;

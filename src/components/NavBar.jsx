import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../Utils/auth';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/specialization">Specialization</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        {isAuthenticated() ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

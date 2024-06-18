import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/TherapyLogo01.png';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const token = localStorage.getItem('token');
  const userInitial = token ? JSON.parse(atob(token.split('.')[1])).name.charAt(0).toUpperCase() : '';

  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="Dr. Nandy's Mind Studio Logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/specialization">Specialization</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/events">Events</Link>
      </div>
      <div className="nav-right">
        {token ? (
          <>
            <div className="profile-icon" onClick={() => navigate('/profile')}>
              {userInitial}
            </div>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

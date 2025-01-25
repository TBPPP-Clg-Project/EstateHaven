import { useState, useEffect, useRef } from 'react';
import { Building2, User } from 'lucide-react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginSignup from '../components/LoginSignup';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginSignupOpen, setLoginSignupOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  const dropdownRef = useRef(null);  // Reference for dropdown menu

  // Use localStorage to check if the user is already logged in
  const [userState, setUserState] = useState(JSON.parse(localStorage.getItem('userInfo')) || null);

  const handleProfileClick = () => {
    if (isAuthenticated || userState) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      loginWithRedirect();
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem('userInfo');  // Remove user info from localStorage on logout
    setUserState(null);  // Clear user state
  };

  const handleLoginClick = () => {
    setLoginSignupOpen(true);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-section">
          <Building2 size={28} className="logo-icon" />
          <h1 className="logo-title">EstateHaven</h1>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#buy" className="nav-link">Buy & Rent</a>
          <a href="#sell" className="nav-link">Sell</a>
          <a href="#HavenBot" className="nav-link">HavenBot</a>
          <a href="#About" className="nav-link">About us</a>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          {isAuthenticated || userState ? (  // Check if the user is authenticated or stored in localStorage
            <>
              <button className="profile-button" onClick={handleProfileClick}>
                <User size={24} className="profile-icon" />
              </button>
              <span className="welcome-message">{userState ? userState.name : user.name}</span>

              {isProfileOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  <button className="dropdown-item">My Profile</button>
                  <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                </div>
              )}
            </>
          ) : (
            <button className="btn login-btn" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>

      {/* Render LoginSignup Component as Modal */}
      {isLoginSignupOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setLoginSignupOpen(false)}>✖</button>
            <LoginSignup />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

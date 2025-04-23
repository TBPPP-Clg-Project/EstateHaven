import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User } from 'lucide-react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginSignup from '../components/LoginSignup';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginSignupOpen, setLoginSignupOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  const dropdownRef = useRef(null);

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
    localStorage.removeItem('userInfo');
    setUserState(null);
  };

  const handleLoginClick = () => {
    setLoginSignupOpen(true);
  };


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
        
        <div className="logo-section">
          <Link to="/">
            <Building2 size={28} className="logo-icon" />
          </Link>
          <h1 className="logo-title">EstateHaven</h1>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/buy" className="nav-link">Buy & Rent</Link>
          <Link to="/sell" className="nav-link">Sell</Link>
        </div>

        
        <div className="profile-section">
          {isAuthenticated || userState ? (
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
              Log In
            </button>
          )}
        </div>
      </div>

      
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
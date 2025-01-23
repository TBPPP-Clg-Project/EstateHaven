import { useState } from 'react';
import { Building2 } from 'lucide-react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginSignup from '../components/LoginSignup'; 

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginSignupOpen, setLoginSignupOpen] = useState(false); 
  const [isDropdownOpen, setDropdownOpen] = useState(false); 
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleProfileClick = () => {
    if (isAuthenticated) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      loginWithRedirect();
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleCustomLoginClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDatabaseLoginClick = () => {
    setLoginSignupOpen(true); 
    setDropdownOpen(false); 
  };

  return (
    <nav className="navbar">
        <div className="navbar-content">

          {/* Logo Section */}
          <div className="logo-section">
            <Building2 size={32} className="logo-icon" />
            <h1 className="logo-title">EstateHaven</h1>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#agents" className="nav-link">Agents</a>
            <a href="#About" className="nav-link">About</a>
          </div>

          {/* Profile Section */}
          <div className="profile-section">
            {isAuthenticated ? (
              <>
                <span className="welcome-message">Hi {user.name}</span>
                <button className="btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn login-btn" onClick={handleCustomLoginClick}>
                  Login
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleDatabaseLoginClick}>
                      Signup/Login with username & password
                    </button>
                    <button className="dropdown-item" onClick={loginWithRedirect}>
                      Login with Google
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

      {/* Render LoginSignup Component as Modal */}
      {isLoginSignupOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setLoginSignupOpen(false)}>
              ✖
            </button>
            <LoginSignup /> {/* Custom Login/Signup Form */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import { Building2, User} from 'lucide-react'; // Import Phone icon
import './Navbar.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="#properties" className="nav-link">Properties</a>
           <a href="#agents" className="nav-link">Agents</a>
            <a href="#About" className="nav-link">About</a>
          </div>

          {/* Logo Section */}
          <div className="logo-section">
            <Building2 size={32} className="logo-icon" />
            <h1 className="logo-title">EstateHaven</h1>
          </div>

          {/* Phone Number and Profile Section */}
          <div className="profile-section">
            {/* Profile Menu */}
            <div className="profile-menu">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="profile-button"
              >
                <User className="icon" />
              </button>
            </div>
            <div className="user">
              <p>Hi User</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

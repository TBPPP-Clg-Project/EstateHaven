import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              EstateHeaven is your premier destination for high-end real estate.
              We specialize in luxury properties across the globe.
            </p>
          </div>
          
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <div className="footer-item">
                <Mail className="footer-icon" />
                <span>contact@estateHaven.com</span>
              </div>
              <div className="footer-item">
                <Phone className="footer-icon" />
                <span>+91 (555) 123-6567</span>
              </div>
              <div className="footer-item">
                <MapPin className="footer-icon" />
                <span>London, 789 Lakeside Road</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#properties" className="footer-link">Properties</a></li>
              <li><a href="#agents" className="footer-link">Our Agents</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-text">Subscribe to our newsletter for the latest updates</p>
            <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="footer-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 EstateHaven. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <Facebook />
            </a>
            <a href="#" className="footer-social-link">
              <Twitter />
            </a>
            <a href="#" className="footer-social-link">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

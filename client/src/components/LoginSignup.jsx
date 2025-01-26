import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLoginSignupOpen, setLoginSignupOpen] = useState(true); 
  const { loginWithRedirect } = useAuth0();
  const [isSignUpMode, setIsSignUpMode] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
  });
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Signup logic
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/auth/signup', {
        name,
        email,
        password,
      });
      alert('Signup successful! Please log in.');
      setIsSignUpMode(false); 
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      window.location.href = '/';
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  // Login logic
  const handleLogin = async (e) => {
    e.preventDefault(); 
    const { email, password } = formData;

    if (!email || !password) {
      alert('Both email and password are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email,
        password,
      });

      // Store user info in localStorage to display name in navbar
      localStorage.setItem('userInfo', JSON.stringify({
        name: response.data.name,
        email: response.data.email
      }));

      alert('Login successful!');
      window.location.href = '/';
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  // Google Login Handler
  const handleGoogleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="login-container">
      <div className="modal-overlay">
        <div 
          ref={modalRef} 
          className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}
        >
          {/* Close Button */}
          <button 
            className="close-button" 
            onClick={() => window.location.href = '/'}
          >
            &times;
          </button>

          <div className="forms-container">
            <div className="signin-signup">
              {/* Sign In Form */}
              <form className="sign-in-form" onSubmit={handleLogin}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input type="submit" value="Login" className="btn login-btn" />
                <button type="button" className="second-option" onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </form>

              {/* Sign Up Form */}
              <form className="sign-up-form" onSubmit={handleSignUp}>
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input type="submit" className="btn signup-btn" value="Sign up" />
                <button type="button" className="second-option" onClick={handleGoogleLogin}>
                  Sign up with Google
                </button>
              </form>
            </div>
          </div>

          {/* Panels */}
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Sign up and discover great properties
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={() => setIsSignUpMode(true)}
                >
                  Sign Up
                </button>
              </div>
              <img src="building2.png" className="image" alt="building image" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Login to continue exploring your dream homes.
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={() => setIsSignUpMode(false)}
                >
                  Sign In
                </button>
              </div>
              <img
                src="building.png"
                className="image"
                alt="building picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
  };
  
  exports.register = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      const token = generateToken(newUser._id);
      res.status(201).json({ user: newUser, token });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error: error.message });
      console.error(error);
    }
  };
  
  exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user._id);
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json({ message: 'Login failed. Please try again.', error: error.message });
      console.error(error);
    }
  };
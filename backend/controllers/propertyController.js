const Property = require('../models/Property');
const multer = require('multer');
const path = require('path');

// Setting up Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

// Create Property
const allowedTypes = ["Apartment", "House", "Villa", "Shop"];

exports.createProperty = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    const { title, location, bedrooms, bathrooms, parking, area, price, description, type } = req.body;
    const image = req.file ? req.file.path : null;

    if (!allowedTypes.includes(type)) {
      return res.status(400).json({ error: "Invalid property type" });
    }

    try {
      const newProperty = new Property({
        title,
        location,
        bedrooms,
        bathrooms,
        parking,
        area,
        price,
        description,
        image,
        type,
      });
      await newProperty.save();
      res.status(201).json(newProperty);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

// Get all Properties
exports.getAllProperties = async (req, res) => {
  try {
    const { type } = req.query;
    let filter = {};

    if (type) {
      filter.type = type;
    }

    const properties = await Property.find(filter);
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Property
exports.updateProperty = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    try {
      const property = await Property.findById(req.params.id);
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }

      const updatedData = {
        ...req.body,
        image: req.file ? req.file.path : property.image,
      };

      const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updatedData, {
        new: true,
      });
      res.status(200).json(updatedProperty);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

// Delete Property

exports.deleteProperty = async (req, res) => {
    try {
      const property = await Property.findByIdAndDelete(req.params.id);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
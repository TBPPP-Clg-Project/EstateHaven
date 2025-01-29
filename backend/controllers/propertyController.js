const Property = require('../models/Property');
const multer = require('multer');
const path = require('path');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const dotenv = require('dotenv');
dotenv.config();


const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


const upload = multer({
  storage: multer.memoryStorage(),
});


const uploadToS3 = async (file) => {
  const fileKey = `${Date.now()}${path.extname(file.originalname)}`;
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: file.buffer,
    ACL: 'public-read',
    ContentType: file.mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
  } catch (err) {
    throw new Error(`Error uploading file to S3: ${err.message}`);
  }
};


const deleteFromS3 = async (imageUrl) => {
  if (!imageUrl) return;

  const key = imageUrl.split('/').pop(); 
  const deleteParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  try {
    await s3Client.send(new DeleteObjectCommand(deleteParams));
  } catch (err) {
    console.error(`Error deleting file from S3: ${err.message}`);
  }
};


const createProperty = async (req, res) => {
  try {
    const { title, location, bedrooms, bathrooms, parking, area, price, description, type } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const imageUrl = await uploadToS3(req.file); 

    const newProperty = new Property({
      title,
      location,
      bedrooms,
      bathrooms,
      parking,
      area,
      price,
      description,
      image: imageUrl,
      type,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getAllProperties = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    const properties = await Property.find(filter);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getPropertyById = async (req, res) => {
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

// Update a property
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    let updatedData = { ...req.body };

    if (req.file) {
      await deleteFromS3(property.image); 
      updatedData.image = await uploadToS3(req.file); 
    }

    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).json(updatedProperty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    await deleteFromS3(property.image); 
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProperty: [upload.single('image'), createProperty],
  getAllProperties,
  getPropertyById,
  updateProperty: [upload.single('image'), updateProperty],
  deleteProperty,
};

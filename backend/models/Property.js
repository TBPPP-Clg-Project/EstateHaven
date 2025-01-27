const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  parking: { type: Number, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  type: { type: String, required: true },
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
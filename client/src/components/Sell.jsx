import React, { useState } from 'react';
import axios from 'axios';
import './Sell.css';

const Sell = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    area: '',
    price: '',
    description: '',
    type: '',
    image: null,
  });
  const [showPopup, setShowPopup] = useState(false); //popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === 'image' && formData[key]) {
        formDataToSend.append(key, formData[key], formData[key].name);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    console.log('Submitting form with data:');
    formDataToSend.forEach((value, key) => {
      console.log(key, value);
    });
  
    try {
      const response = await axios.post('http://localhost:5001/api/properties', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Property added:', response.data);
      setShowPopup(true);
      setFormData({
        title: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        parking: '',
        area: '',
        price: '',
        description: '',
        type: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding property:', error.response ? error.response.data : error.message);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="sell-container">
      <h2>Sell Your Property</h2>
      <form onSubmit={handleSubmit} className="sell-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required />
        <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        <input type="number" name="parking" placeholder="Parking" value={formData.parking} onChange={handleChange} required />
        <input type="number" name="area" placeholder="Area (sq ft)" value={formData.area} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Shop">Shop</option>
        </select>
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Property Submitted Successfully!</h3>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sell;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuyRent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BuyRent = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    type: "",
  });
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/properties')
      .then((res) => {
        console.log('API response:', res.data);
        setProperties(res.data);
        setFilteredProperties(res.data);
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Filters:', filters); 

    const filtered = properties.filter((prop) => {
      console.log('Property:', prop); 

      const matchesLocation = filters.location === "" || (prop.location && prop.location.toLowerCase().includes(filters.location.toLowerCase()));
      const matchesMinPrice = filters.minPrice === "" || prop.price >= parseFloat(filters.minPrice);
      const matchesMaxPrice = filters.maxPrice === "" || prop.price <= parseFloat(filters.maxPrice);
      const matchesBedrooms = filters.bedrooms === "" || prop.bedrooms === parseInt(filters.bedrooms);
      const matchesType = filters.type === "" || (prop.type && prop.type.toLowerCase() === filters.type.toLowerCase());

      console.log('matchesLocation:', matchesLocation);
      console.log('matchesMinPrice:', matchesMinPrice);
      console.log('matchesMaxPrice:', matchesMaxPrice);
      console.log('matchesBedrooms:', matchesBedrooms);
      console.log('matchesType:', matchesType);

      return matchesLocation && matchesMinPrice && matchesMaxPrice && matchesBedrooms && matchesType;
    });

    console.log('Filtered Properties:', filtered); 
    setFilteredProperties(filtered);
  };

  return (
    <div className="buy-rent-container">
      <div className="search-bar">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          aria-label="Property Type"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="shop">Shop</option>
        </select>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          aria-label="Location"
        />
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
          placeholder="Min Price"
          min={100000}
          max={5000000}
        />
        <input
          type="number"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          placeholder="Bedrooms"
          min={1}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
          Search
        </button>
      </div>

      <div className="properties">
        {filteredProperties.length === 0 ? (
          <div className="no-results">No properties found matching your filters.</div>
        ) : (
          filteredProperties.map((prop) => (
            <div
              key={prop._id}
              className="property-card"
            >
              <img
                src={prop.image ? prop.image : 'https://via.placeholder.com/300'}
                alt={prop.title}
              />
              <div className="property-content">
                <h2>{prop.title}</h2>
                <div className="property-details">
                  <span>📍 {prop.location}</span>
                </div>
                <div className="property-stats">
                  <div>🛏️ {prop.bedrooms} Beds</div>
                  <div>🚿 {prop.bathrooms} Baths</div>
                  <div>💰 ${prop.price.toLocaleString()}</div>
                </div>
                <button>View Details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyRent;
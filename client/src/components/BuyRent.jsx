import React, { useState, useEffect } from 'react';
import './BuyRent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const properties = [
    {
      id: 1,
      image: "/project_img_1.jpg",
      location: "Mumbai",
      title: "Bandra Sea Breeze Apartment",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 25.00,
      description: "Luxurious apartment with stunning sea views in the heart of Bandra."
    },
    {
      id: 2,
      image: "/project_img_2.jpg",
      location: "Bangalore",
      title: "Indiranagar Tech Haven",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 22.00,
      description: "Modern apartment in the bustling tech hub of Indiranagar."
    },
    {
      id: 3,
      image: "/project_img_3.jpg",
      location: "Hyderabad",
      title: "Jubilee Hills Luxury Villa",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 19.00,
      description: "Elegant villa in the prestigious Jubilee Hills neighborhood."
    },
    {
      id: 4,
      image: "/project_img_4.jpg",
      location: "Pune",
      title: "Koregaon Park Riverside Retreat",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 15.00,
      description: "Serene apartment overlooking the river in Koregaon Park."
    },
    {
      id: 5,
      image: "/project_img_5.jpg",
      location: "Chennai",
      title: "Marina Beach View Apartment",
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: 500,
      price: 35.00,
      description: "Spacious apartment with breathtaking Marina Beach views."
    },
    {
      id: 6,
      image: "/project_img_6.jpg",
      location: "Delhi",
      title: "Luxe Connaught Place Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 600,
      price: 45.00,
      description: "Opulent penthouse in the prestigious Connaught Place area."
    },
    {
      id: 7,
      image: "/project_img_1.jpg",
      location: "Mumbai",
      title: "Colaba Seafront Residence",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 27.00,
      description: "Elegant apartment with panoramic sea views in Colaba."
    },
    {
      id: 8,
      image: "/project_img_2.jpg",
      location: "Bangalore",
      title: "Whitefield IT Corridor Apartment",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 23.00,
      description: "Contemporary apartment in the heart of Bangalore's IT hub."
    },
    {
      id: 9,
      image: "/project_img_3.jpg",
      location: "Hyderabad",
      title: "Gachibowli Premium Residence",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 20.00,
      description: "Modern apartment in the upscale Gachibowli neighborhood."
    },
    {
      id: 10,
      image: "/project_img_4.jpg",
      location: "Pune",
      title: "Hinjewadi Tech Park Apartment",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 16.00,
      description: "Comfortable apartment near Pune's prominent tech parks."
    }
  ];

const BuyRent = () => {
  const backgroundImage=[
    '/Header1.jpg'
  ]
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    type: "",
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply filters when the search button is clicked
  const handleSearch = () => {
    const filtered = properties.filter((prop) => {
      return (
        (filters.location === "" ||
          prop.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.minPrice === "" || prop.price >= parseFloat(filters.minPrice)) &&
        (filters.maxPrice === "" || prop.price <= parseFloat(filters.maxPrice)) &&
        (filters.bedrooms === "" || prop.bedrooms === parseInt(filters.bedrooms)) &&
        (filters.type === "" || prop.title.toLowerCase().includes(filters.type.toLowerCase()))
      );
    });
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
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              aria-label="Location"
            >
              <option value="">Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
            </select>
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
        {filteredProperties.map(prop => (
          <div 
            key={prop.id} 
            className="property-card"
          >
            <img 
              src={prop.image} 
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
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="no-results">
          No properties found matching your filters.
        </div>
      )}
    </div>
  );
};

export default BuyRent;
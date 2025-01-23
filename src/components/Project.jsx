import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './Project.css'; // Import the separate CSS file

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      id: 1,
      image: "/project_img_1.jpg",
      location: "Chicago",
      title: "Riverside Retreat Tranquil",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 3250.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    },
    {
      id: 2,
      image: "/project_img_2.jpg",
      location: "Lahore",
      title: "Seaside Serenity Coastal",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 2950.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    },
    {
      id: 3,
      image: "/project_img_3.jpg",
      location: "Lahore",
      title: "Mountain View Majestic",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 2500.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    },
    {
      id: 4,
      image: "/project_img_4.jpg",
      location: "Phoenix",
      title: "Garden Grove Oasis Retreat",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 400,
      price: 2000.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    },
    {
      id: 5,
      image: "/project_img_5.jpg",
      location: "Miami",
      title: "Beachfront Paradise Villa",
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: 500,
      price: 4500.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    },
    {
      id: 6,
      image: "/project_img_6.jpg",
      location: "New York",
      title: "Manhattan Skyline Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 600,
      price: 5500.00,
      description: "This villa is a stunning masterpiece of luxury and art. Adorned with two..."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= properties.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? Math.max(0, properties.length - 4) : prevIndex - 1
    );
  };

  return (
    <div className="project-container">
      <h2 className="project-title">Our New Launches</h2>
      <p className="project-subtitle">Your Future Home Awaits!</p>

      <div className="pagination-controls">
        <p className="pagination-info">
          Showing {currentIndex + 1}-{Math.min(currentIndex + 4, properties.length)} out of {properties.length} properties
        </p>
        <div className="pagination-buttons">
          <button
            onClick={prevSlide}
            className="prev-button"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className={`chevron-icon ${currentIndex === 0 ? 'disabled' : ''}`} />
          </button>
          <button
            onClick={nextSlide}
            className="next-button"
            disabled={currentIndex + 4 >= properties.length}
          >
            <ChevronRight className={`chevron-icon ${currentIndex + 4 >= properties.length ? 'disabled' : ''}`} />
          </button>
        </div>
      </div>

      <div className="properties-grid">
        {properties.slice(currentIndex, currentIndex + 4).map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              <img 
                src={property.image}
                alt={property.title}
                className="property-image"
              />
              <button className="favorite-button">
                <Heart className="heart-icon" />
              </button>
            </div>
            <div className="property-details">
              <p className="property-location">{property.location}</p>
              <h3 className="property-title">{property.title}</h3>

              <div className="property-meta">
                <span className="meta-item">{property.bedrooms} Bedrooms</span>
                <span className="meta-item">{property.bathrooms} Bathrooms</span>
                <span className="meta-item">{property.parking} Parking</span>
                <span className="meta-item">{property.area} Sq Ft</span>
              </div>

              <p className="property-description">{property.description}</p>

              <div className="property-footer">
                <p className="property-price">${property.price.toFixed(2)}</p>
                <button className="view-details-button">View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
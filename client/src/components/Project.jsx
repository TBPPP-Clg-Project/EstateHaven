import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './Project.css';

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

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

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= properties.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideDirection('prev');
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

      <div className={`properties-grid ${slideDirection}`}>
        {properties.slice(currentIndex, currentIndex + 4).map((property) => (
          <div key={property.id} className="property-card sliding-property">
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
                <p className="property-price">₹{property.price.toFixed(2)} Cr</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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
        title: "Garden Grove Oasis Retre",
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
    <div className="w-full max-w-[1440px] px-2 py-6 text-center mx-auto">
      <h2 className="text-3xl font-bold mb-1 hover:scale-105 transition-transform duration-300">
        Find Your Dream Here
      </h2>
      <p className="text-gray-600 text-sm mb-4 hover:translate-y-1 transition-transform duration-300">
        Your Future Home Awaits!
      </p>

      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600 text-sm">
          Showing {currentIndex + 1}-{Math.min(currentIndex + 4, properties.length)} out of {properties.length} properties
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={currentIndex === 0}
          >
            <ChevronLeft
              className={`w-5 h-5 ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-600'}`}
            />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={currentIndex + 4 >= properties.length}
          >
            <ChevronRight
              className={`w-5 h-5 ${currentIndex + 4 >= properties.length ? 'text-gray-300' : 'text-gray-600'}`}
            />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-4 gap-3">
          {properties.slice(currentIndex, currentIndex + 4).map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >
              <div className="relative">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-3">
                <p className="text-blue-600 text-xs mb-0.5">{property.location}</p>
                <h3 className="font-semibold text-base mb-1.5 line-clamp-1">{property.title}</h3>
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-3">
                    <span className="flex items-center text-xs">
                      <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.bedrooms}
                    </span>
                    <span className="flex items-center text-xs">
                      <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.bathrooms}
                    </span>
                    <span className="flex items-center text-xs">
                      <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.parking}
                    </span>
                    <span className="flex items-center text-xs">
                      <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.area}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{property.description}</p>
                
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">${property.price.toFixed(2)}</p>
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
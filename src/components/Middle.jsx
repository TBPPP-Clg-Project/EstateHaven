import React from 'react';
import './Middle.css'; // Import the CSS file for styles

const Middle = () => {
  return (
    <div className="middle-container">
      {/* Main Content */}
      <main className="middle-main">
        <div className="middle-grid">
          {/* Text Section */}
          <div className="text-section">
            <div className="heading-section">
              <h1 className="title">
                Find Your<br />
                Perfect Home<br />
                Instantly.
              </h1>
              <p className="subtitle">
                From budget-friendly to luxurious, 
                find the residence of your dreams without breaking a sweat.
              </p>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat">
                <p className="stat-value">0<span className="highlight">+</span></p>
                <p className="stat-label">Premium<br />Properties</p>
              </div>
              <div className="stat">
                <p className="stat-value">0<span className="highlight">+</span></p>
                <p className="stat-label">Happy<br />Customers</p>
              </div>
              <div className="stat">
                <p className="stat-value">0<span className="highlight">+</span></p>
                <p className="stat-label">Award<br />Winning</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <div className="image-wrapper">
              <div className="image-border">
                <div className="image-content">
                  <img
                    src="/project_img_5.jpg"
                    alt="Modern architectural home design"
                    className="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Middle;

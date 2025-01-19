import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">
        {/* Section Header */}
        <div className="about-us-header">
          <h2 className="about-us-title">Meet Our Team</h2>
          <p className="about-us-description">
            At EstateHaven, we simplify property transactions. Whether you're buying, selling, or renting, our platform offers seamless and reliable solutions to meet your needs. Explore listings and make your property journey effortless with us!
          </p>
        </div>

        {/* Team Members */}
        <div className="team-members">
          {/* Team Member Card */}
          {[
            { name: 'Priyanshu Yadav', role: 'Frontend Developer', image: './profile.jpg' },
            { name: 'Krishnangi Agrawal', role: 'Frontend Developer', image: './profile2.jpg' },
            { name: 'Teena Gautam', role: 'Frontend Developer', image: './profile2.jpg' },
            { name: 'Milind Rai', role: 'Backend Developer', image: './profile.jpg' },
          ].map((member, index) => (
            <div key={index} className="team-member-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
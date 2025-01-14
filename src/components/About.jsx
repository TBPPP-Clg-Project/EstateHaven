import React from 'react';

const AboutUs = () => {
  return (
    <section
      className="bg-white text-gray-900 py-12"
      id="about-us"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At EstateHaven, we simplify property transactions. Whether you're buying, selling, or renting, our platform offers seamless and reliable solutions to meet your needs. Explore listings and make your property journey effortless with us!
          </p>
        </div>

        {/* Team Members */}
        <div className="flex justify-between flex-wrap">
          {/* Team Member Card */}
          {[
            { name: 'Priyanshu Yadav', role: 'Frontend Developer', image: './profile.jpg' },
            { name: 'Krishnangi Agrawal', role: 'Frontend Developer', image: './profile2.jpg' },
            { name: 'Teena Gautam', role: 'Frontend Developer', image: './profile2.jpg' },
            { name: 'Milind Rai', role: 'Backend Developer', image: './profile.jpg' },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center w-[22%]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 border border-gray-300 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

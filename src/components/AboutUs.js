import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 p-8">
      {/* Image on the left */}
      <div className="w-1/3">
        <img
          src="https://via.placeholder.com/400x400"
          alt="About Us"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text on the right */}
      <div className="w-2/3 pl-8 text-white">
        <h2 className="text-4xl font-bold mb-4 px-6">About Us</h2>
        <p className="text-xl leading-relaxed text-justify px-6">
          At lawAware, our mission is to make legal knowledge accessible, engaging, and practical for Indian citizens. Our platform features law-related news, an interactive 'Awareness' section, FAQs, and educational tools like games and videos that simplify legal concepts. By promoting legal literacy through innovative content, we empower users to make informed decisions, safeguard their rights, and foster trust in the legal system. lawAware encourages civic engagement, helping create a society where citizens are well-informed, legally empowered, and confident in navigating the laws that govern their lives.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

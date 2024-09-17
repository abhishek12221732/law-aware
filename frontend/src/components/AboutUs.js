import React from 'react';
import justicelady from '../assets/images/justicelady.png';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 p-8 z-100">
      {/* Image on the left */}
      <div className="w-1/2 z-100">
        <img
          src={justicelady}
          alt="About Us"
          className="rounded-lg object-cover lady z-100"
        />
      </div>

      {/* Text on the right */}
      <div className="w-1/2 pl-8 text-white">
        <h2 className="text-4xl font-bold mb-4 px-6 about-us-head">About Us</h2>
        <p className="text-xl leading-relaxed text-justify px-6 about-us-text">
          At lawAware, our mission is to make legal knowledge accessible, engaging, and practical for Indian citizens. <br/><br/>Our platform features law-related news, an interactive 'Awareness' section, FAQs, and educational tools like games and videos that simplify legal concepts.<br/><br/> By promoting legal literacy through innovative content, we empower users to make informed decisions, safeguard their rights, and foster trust in the legal system. lawAware encourages civic engagement, helping create a society where citizens are well-informed, legally empowered, and confident in navigating the laws that govern their lives.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

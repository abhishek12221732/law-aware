import React from 'react';
import { Link } from 'react-router-dom';

const ConstitutionFeature = () => {
  return (
    <section className="relative h-screen z-0 bg-[#01161B] flex items-center justify-center">
      <div className="relative p-8 rounded-lg border-4 border-transparent bg-transparent transition duration-500 ease-in-out hover:border-gradient hover:shadow-glow animate-float">
        <h1 className="text-4xl font-extrabold mb-6 text-white opacity-0 animate-fade-in-down-fast">
          Learn About Constitution
        </h1>
        <p className="text-white mb-6 text-lg opacity-0 animate-fade-in-up-fast">
          Dive deep into the Indian Constitution and enhance your knowledge. Discover the core values, articles, and rights that shape our society.
        </p>
        <Link to="/article"><button className="px-6 py-3 mt-4 bg-transparent border-2 border-gradient text-white rounded-full font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FAD47D] hover:via-[#AB7529] hover:to-[#D3A553] hover:text-white">
          Click to Learn
        </button></Link>
      </div>
    </section>
  );
};

export default ConstitutionFeature;

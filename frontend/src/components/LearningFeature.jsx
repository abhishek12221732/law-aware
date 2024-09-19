import React from 'react';
import card1 from '../assets/images/card1.png';
import card3 from '../assets/images/card3.png';

const LearningFeature = () => {
  return (
    <section className="relative h-screen z-0 bg-[#01161B]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-20 backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-white feature-heading opacity-0 animate-fade-in-down-fast">
          Upgrade Your Knowledge.
          <br /> Start Today!
        </h1>

        <div className="flex flex-col md:flex-row justify-between w-full mt-8 gap-6">
          {/* Card 1: Games */}
          
          <div
            className="w-full md:w-[48%] h-80 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-2xl"
            style={{ backgroundImage: `url(${card1})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-30 rounded-lg text-white text-lg font-bold backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-out">
              <div className="opacity-100 hover:opacity-100 transition duration-500 ease-out">Games</div>
            </div>
          </div>
          

          {/* Card 3: Study Material */}
          <div
            className="w-full md:w-[48%] h-80 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-2xl"
            style={{ backgroundImage: `url(${card3})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-30 rounded-lg text-white text-lg font-bold backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-out">
              <div className="opacity-100 hover:opacity-100 transition duration-500 ease-out">Study Material</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFeature;

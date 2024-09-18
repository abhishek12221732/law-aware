import React from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

const FeaturesSection = () => {
  return (
    <section className="relative h-screen z-0">
      <div className="absolute inset-y-0 flex flex-col items-start justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 feature-heading text-left">
          Upgrade Your Knowledge.
        </h1>
        <h1 className="text-4xl font-bold mb-4 feature-heading-2 text-left">
          Start Today!
        </h1>
        {/* <h2 className="text-2xl font-medium mb-12">Discover the best we have to offer</h2> */}

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-screen">
          {/* Card 1: Games */}
          <div
            className="feature-card h-100 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${card1})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40 rounded-lg text-white text-lg font-bold">
              Games
            </div>
          </div>

          {/* Card 2: Case Study */}
          <div
            className="feature-card h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${card2})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40 rounded-lg text-white text-lg font-bold">
              Case Study
            </div>
          </div>

          {/* Card 3: Constitution */}
          <div
            className="feature-card h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${card3})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40 rounded-lg text-white text-lg font-bold">
              Constitution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

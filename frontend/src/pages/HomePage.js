import React from "react";
import { Link } from "react-router-dom";
import emblemImage from "../assets/images/emblem.png";
import PreambleSection from "../components/PreambleSection.js";
import NewsSection from "../components/NewsSection.js";
import AboutUs from "../components/AboutUs.js";
import FAQSection from "../components/FAQSection.js";
import line from "../assets/images/line.png";
import FeaturesSection from "../components/FeatureSection.js";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#01161B] text-gray-300">
      {/* Hero Section */}
      <section className=" text-white py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto flex items-center">
          {/* <!-- Left side: Centered text and button --> */}
          <div className="w-1/2 flex flex-col items-center justify-center p-8">
            <h2 className="text-xl font-bold mb-4 text-center hero-heading">
              Your Rights, Your Power.
            </h2>
            <p className="text-lg mb-6 text-center hero-text">
            An One-Stop Learning Solution about<br/>
            the Laws and Rights that protect you.
            </p>
            <Link
              to="/awareness"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hero-button"
            ><div className="hero-button-text flex justify-between">Get Started 
            {/* <img
                src={arrowIcon}
              /> */}
            </div>
              
            </Link>
          </div>

          {/* <!-- Right side: Image --> */}
          <div className="w-1/2 h-screen flex items-center justify-center">
            <div className="relative h-full w-auto overflow-hidden shadow-lg">
              <img
                src={emblemImage}
                alt="Legal knowledge"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preamble of Indian Constitution */}
      <section className="bg-black">
        <PreambleSection />
 

      {/* News Section of Page */}
      <img src={line} className="lines mx-auto"></img>
   
        <NewsSection />
        <img src={line} className="lines mx-auto mt-12"></img>
      </section>

      {/* Feature Section */}
      <section>
        <FeaturesSection />
      </section>
      
      {/* About Us Section */}
      <section>
        <AboutUs />
      </section>

      {/* FAQ Section */}
      <section>
        <FAQSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Law Aware. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

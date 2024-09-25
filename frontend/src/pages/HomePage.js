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
      <section className="text-white py-[10vh] h-screen flex items-center justify-center mt-[4vh]">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-[4vw] font-bold mb-4 text-center hero-heading">
              Your Rights,<br/> Your Power.
            </h2>
            <p className="text-[2vw] mb-6 text-center hero-text">
              <span className="darking opacity-50">An</span> One-Stop Learning Solution <span className="darking opacity-50">about<br/>
              the </span>Laws and Rights <span className="darking opacity-50">that protect you.</span>
            </p>
            <Link
              to="/awareness"
              className="inline-block bg-white text-blue-600 px-[2vw] py-[1vw] rounded-lg font-semibold hero-button"
            >
              <div className="hero-button-text text-center">
                Get Started
              </div>
            </Link>
          </div>
          <div className="w-1/2 h-screen flex items-end">
            <div className="relative w-full max-h-full overflow-hidden">
              <img
                src={emblemImage}
                alt="Legal knowledge"
                className="w-full max-h-[90vh] object-contain"
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
      <section className="z-100">
        <AboutUs />
      </section>

      {/* FAQ Section */}
      <section>
        <FAQSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-[2vh]">
        <div className="container mx-auto text-center">
          <p className="text-[1.2vw]">
            &copy; {new Date().getFullYear()} Law Aware. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

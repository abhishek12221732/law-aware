import React from "react";
import { Link } from "react-router-dom";
import emblemImage from "../assets/images/emblem.png";
import PreambleSection from "../components/PreambleSection.js";
import NewsSection from "../components/NewsSection.js";
import AboutUs from "../components/AboutUs.js";
import FAQSection from "../components/FAQSection.js";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 h-screen flex items-center justify-center mt-16">
        <div className="container mx-auto flex items-center">
          {/* <!-- Left side: Centered text and button --> */}
          <div className="w-1/2 flex flex-col items-center justify-center p-8">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Empowering You with Legal Knowledge
            </h2>
            <p className="text-lg mb-6 text-center">
              Understand your rights, stay informed, and become aware of the
              laws that matter to you.
            </p>
            <Link
              to="/awareness"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* <!-- Right side: Image --> */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={emblemImage}
              alt="Legal knowledge"
              className="w-2/3 max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Preamble of Indian Constitution */}
      <section>
        <PreambleSection />
      </section>


      {/* News Section of Page */}
      <section>
        <NewsSection />
      </section>


      {/* Abiut Us Section */}
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

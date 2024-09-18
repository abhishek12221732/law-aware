import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import line from '../assets/images/line.png';

const faqData = [
  {
    question: "What is the Constitution of India?",
    answer: "The Constitution of India is the supreme law of the land. It lays down the framework defining fundamental political principles, establishes the structure, procedures, and duties of government institutions, and outlines the fundamental rights and duties of citizens.",
  },
  {
    question: "What are Fundamental Rights?",
    answer: "Fundamental Rights are basic human rights guaranteed by the Indian Constitution to all citizens, such as the right to equality, freedom of speech, and protection against discrimination.",
  },
  {
    question: "What is the role of the Supreme Court of India?",
    answer: "The Supreme Court of India is the highest judicial authority. It ensures the protection of the Constitution and the laws of India, acting as the final court of appeal and safeguarding the fundamental rights of citizens.",
  },
  {
    question: "What is the difference between civil and criminal law?",
    answer: "Civil law deals with disputes between individuals or organizations, while criminal law deals with offenses against the state and society, such as theft, assault, and murder.",
  },
  {
    question: "What is PIL (Public Interest Litigation)?",
    answer: "Public Interest Litigation allows individuals or groups to file petitions in court on behalf of the public, often for the enforcement of rights related to social justice, environmental protection, or government accountability.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 p-8 min-h-screen">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white mb-8 text-center feature-heading">
        Frequently Asked Legal Questions
      </h2>

      {/* FAQ Boxes */}
      <div className="space-y-4 max-w-7xl mx-auto"> {/* Increased width */}
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg shadow-lg p-4 bg-gray-800 cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
            onClick={() => toggleFAQ(index)}
            style={{ padding: '1rem 1.5rem' }} // Adjust padding for better fit
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-100">
                {faq.question}
              </h3>
              <button className="text-gray-400">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {/* Answer with smooth animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="mt-3 text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More FAQ Button */}
      <div className="mt-8 flex justify-center">
        <Link to="/faq-page">
          <button className="bg-yellow-800 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-800">
            More FAQs
          </button>
        </Link>
        
      </div>
      <img src={line} className="lines mx-auto mt-8"></img>
    </div>
  );
};

export default FAQSection;

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const newsData = [
  {
    id: 1,
    title: "News 1",
    content: "This is the detailed explanation for news 1.",
  },
  {
    id: 2,
    title: "News 2",
    content: "This is the detailed explanation for news 2.",
  },
  {
    id: 3,
    title: "News 3",
    content: "This is the detailed explanation for news 3.",
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('left');
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="relative flex items-center justify-center p-4 bg-black shadow-md rounded-lg" style={{ height: 'auto' }}>
      <button
        className="absolute bg-blue-500 text-gray-800 p-4 rounded-full hover:bg-gray-100"
        style={{ width: '3rem', height: '3rem', marginRight: '1rem', top: '50%', left: '1rem', transform: 'translateY(-50%)', zIndex: 10 }}
        onClick={handlePrevClick}
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div
        className={`news-card flex items-center justify-between p-6 border border-gray-300 rounded-md shadow-lg w-[calc(100%-10rem)] h-64 bg-gray-800 transition-transform duration-500 transform ${
          isAnimating ? (direction === 'left' ? 'slide-in-left' : 'slide-in-right') : ''
        }`}
      >
        {/* News Content */}
        <div className="flex flex-col justify-center w-full pr-4">
          {/* News Heading */}
          <h2 className="text-3xl font-bold mb-2">
            {newsData[currentIndex].title}
          </h2>

          {/* News Explanation */}
          <p className="text-lg mb-4">
            {newsData[currentIndex].content}
          </p>
        </div>
      </div>

      <button
        className="absolute bg-blue-500 text-gray-800 p-4 rounded-full hover:bg-gray-100"
        style={{ width: '3rem', height: '3rem', marginLeft: '1rem', top: '50%', right: '1rem', transform: 'translateY(-50%)', zIndex: 10 }}
        onClick={handleNextClick}
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default NewsSection;

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import line from '../assets/images/line.png'

const newsData = [
  {
    id: 1,
    title: "Bhopal Gas Tragedy",
    content: "The Bhopal Gas Tragedy occurred on the night of December 2-3, 1984, when methyl isocyanate (MIC) gas leaked from the Union Carbide India Limited (UCIL) pesticide plant in Bhopal, Madhya Pradesh. The incident immediately killed over 3,000 people, with long-term health effects causing the death toll to rise to around 15,000-20,000 in the following years. Articles Violated Section 304A of the IPC (Causing death by negligence)",
  },
  {
    id: 2,
    title: "The Harshad Mehta Scam (1992)",
    content: "The Harshad Mehta scam was one of the largest financial frauds in India's history, exposed in 1992. Harshad Mehta, a stockbroker, manipulated the stock market using illegal means, causing stock prices to rise abnormally. His fraudulent methods involved exploiting loopholes in the banking system to divert funds into the stock market, specifically targeting shares of companies like ACC (Associated Cement Company), which saw a rapid price rise. Section 420 of the IPC (Cheating and dishonestly inducing delivery of property) Section 409 of the IPC (Criminal breach of trust by public servant, banker, merchant, or agent)",
  },
  {
    id: 3,
    title: "The Mumbai Attacks (2008)",
    content: "A series of coordinated terrorist attacks on multiple locations in Mumbai, including the Taj Mahal Palace Hotel and the Chhatrapati Shivaji Terminus railway station, resulted in the deaths of hundreds of people. Section 302 of the IPC (Murder) Section 307 of the IPC (Attempt to murder) Section 121 of the IPC (Waging war against the government of India) Section 120B of the IPC (Criminal conspiracy) Unlawful Activities (Prevention) Act, 1967 (UAPA)",
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // match this duration with your animation duration
    }, 5000); // Change news every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center p-4 bg-black shadow-md rounded-lg flex-col" style={{ height: 'auto' }}>
      <h2 className='news-text'>NEWS</h2>
      <div
        className={`news-card flex items-center justify-between p-6 rounded-md shadow-lg w-[calc(100%-10rem)] h-64 bg-gray-800 transition-transform duration-500 transform ${
          isAnimating ? (direction === 'left' ? 'slide-in-left' : 'slide-in-right') : ''
        }`}
      >
        {/* News Content */}
        <div className="flex flex-col justify-center w-full pr-2">
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
      
    </div>
  );
};

export default NewsSection;

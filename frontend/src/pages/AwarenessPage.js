// src/pages/AwarenessPage.js

import React, { useState } from 'react';
import FactsSlider from '../components/FactsSlider';

const facts = [
  "Did you know? The right to freedom of speech is a fundamental right.",
  "Fact: Legal aid is available to those who cannot afford it.",
  "Did you know? You have the right to a fair trial.",
  "Fact: Laws are in place to protect consumer rights.",
  "Did you know? The Constitution is the supreme law of the land."
];

const awarenessCards = [
  { id: 1, title: "Understanding Your Rights", content: "Details about your rights..." },
  { id: 2, title: "Legal Procedures and Processes", content: "Info on legal processes..." },
  { id: 3, title: "Consumer Protection Laws", content: "Know your consumer rights..." },
  { id: 4, title: "Access to Legal Aid", content: "How to access legal aid..." },
  { id: 5, title: "Your Rights During a Trial", content: "What rights you have in a trial..." }
];

const AwarenessPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleBarClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Slider */}
      <div className="fixed top-0 left-0 w-full z-10">
        <FactsSlider facts={facts} />
      </div>

      {/* Main Content */}
      <div className="flex mt-20">
        {/* Awareness Cards Area (80% Width) */}
        <div className="w-4/5 p-8">
          <h2 className="text-2xl font-semibold mb-4">Legal Awareness Topics</h2>
          <div className="space-y-8">
            {awarenessCards.map((card) => (
              <div
                key={card.id}
                className={`p-6 bg-white rounded shadow-md transition-all duration-300 ${
                  activeCard === card.id ? 'block' : 'hidden'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Right Sidebar (20% Width) */}
        <div className="w-1/5 fixed right-0 top-0 h-full flex flex-col justify-start items-center mt-20">
          {awarenessCards.map((card) => (
            <div
              key={card.id}
              className="w-full bg-blue-500 text-white text-center py-4 cursor-pointer hover:bg-blue-600"
              onClick={() => handleBarClick(card.id)}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwarenessPage;

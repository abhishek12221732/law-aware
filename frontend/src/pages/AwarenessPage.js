import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  "Did you know? The right to freedom of speech is a fundamental right.",
  "Fact: Legal aid is available to those who cannot afford it.",
  "Did you know? You have the right to a fair trial.",
  "Fact: Laws are in place to protect consumer rights.",
  "Did you know? The Constitution is the supreme law of the land."
];

const awarenessCards = [
  { id: 1, title: "Understanding Your Rights", content: "Your rights are the fundamental freedoms and protections guaranteed by law. These include freedom of speech, religion, and assembly, as well as the right to privacy and due process. Understanding your rights is crucial for participating fully in society and protecting yourself from potential abuses." },
  { id: 2, title: "Legal Procedures and Processes", content: "Legal procedures encompass the methods and rules for conducting litigation and other legal matters. This includes filing complaints, discovery processes, trial procedures, and appeals. Familiarity with these processes can help you navigate the legal system more effectively." },
  { id: 3, title: "Consumer Protection Laws", content: "Consumer protection laws are designed to ensure fair trade, competition, and accurate information in the marketplace. These laws protect against fraud, unfair practices, and dangerous products. They cover areas such as product safety, fair credit reporting, and truth in advertising." },
  { id: 4, title: "Access to Legal Aid", content: "Legal aid provides free or low-cost legal services to individuals who cannot afford private attorneys. This ensures that everyone has access to justice, regardless of their financial situation. Legal aid can assist with various issues including housing, family law, and public benefits." },
  { id: 5, title: "Your Rights During a Trial", content: "During a trial, you have several important rights, including the right to a speedy and public trial, the right to an impartial jury, the right to confront witnesses, and the right against self-incrimination. Understanding these rights is crucial for ensuring a fair legal process." }
];

const FactsSlider = ({ facts }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [facts.length]);

  return (
    <div className="bg-gradient-to-r from-[#01161B] to-[#022a33] text-white p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFactIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center font-semibold text-lg"
        >
          {facts[currentFactIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AwarenessPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleBarClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#01161B] to-[#022a33] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-[#01161B] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-[#FAD47D]"></h1>
        </div>
      </header>

      {/* Facts Slider */}
      <div className="fixed top-14 left-0 w-full z-20 text-3xl">
        <FactsSlider facts={facts} className="text-3xl" />
      </div>

      {/* Main Content */}
      <div className="flex pt-32">
        {/* Awareness Cards Area (75% Width) */}
        <div className="w-3/4 p-8">
          <h2 className="text-3xl font-semibold mb-8 text-[#FAD47D]">Legal Awareness Topics</h2>
          <AnimatePresence mode="wait">
            {activeCard && (
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-[#033641] rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#FAD47D]">
                  {awarenessCards.find(card => card.id === activeCard)?.title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {awarenessCards.find(card => card.id === activeCard)?.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Fixed Right Sidebar (25% Width) */}
        <div className="w-1/4 fixed right-0 top-0 h-full flex flex-col justify-start items-stretch pt-32 bg-[#022a33] shadow-lg">
          {awarenessCards.map((card) => (
            <motion.div
              key={card.id}
              className={`p-4 m-2 cursor-pointer transition-all duration-300 rounded-lg ${
                activeCard === card.id 
                  ? 'bg-[#FAD47D] text-[#01161B] shadow-lg' 
                  : 'bg-[#033641] hover:bg-[#044b5a] hover:shadow-md'
              }`}
              onClick={() => handleBarClick(card.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h4 className="text-lg font-medium">{card.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwarenessPage;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AwarenessPage from './pages/AwarenessPage';
import NewsPage from './pages/NewsPage';
import GamesPage from './pages/GamesPage';
import Navbar from './components/Navbar';
import Lenis from '@studio-freight/lenis';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/games" element={<GamesPage />} />
        {/* Add more routes as needed */}
        
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;

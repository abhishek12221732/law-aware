import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AwarenessPage from './pages/AwarenessPage';
import NewsPage from './pages/NewsPage';
import GamesPage from './pages/GamesPage';
import Navbar from './components/Navbar';
import Lenis from '@studio-freight/lenis';
import Chatbot from './components/Chatbot';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ArticleList from './components/ArticlesPage';
import SingleArticle from './components/SingleArticle';
import QuizPage from './components/QuizPage';
import UserProfilePage from './components/UserProfile';
import LearningPage from './pages/LearningPage.js';
import TypeAnimationComponent from './components/TypeAnimationComponent.jsx';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/article" element={<ArticleList/>} />
        <Route path="/article/:articleId" element={<SingleArticle />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<UserProfilePage/>} />
        <Route path='/learning' element={<LearningPage/>} />
        {/* Add more routes as needed */}
        
      </Routes>
      <Chatbot/>
    </Router>
  );
}

export default App;

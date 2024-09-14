import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AwarenessPage from './pages/AwarenessPage';
import NewsPage from './pages/NewsPage';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/games" element={<GamesPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

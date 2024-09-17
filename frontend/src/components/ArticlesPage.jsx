import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../constants/contants';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${base_url}/api/article/getall?page=${page}&limit=50`);
      const newArticles = response.data.articles;
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setHasMore(page < response.data.totalPages);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h2>
              <p className="text-gray-600 mb-4">Article #{article.article}</p>
              <a
                href={`/article/${article._id}`}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={fetchArticles}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
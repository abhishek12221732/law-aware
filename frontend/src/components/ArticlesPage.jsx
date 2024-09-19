import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { base_url } from '../constants/contants';
import { FaBookOpen, FaSpinner, FaChevronRight } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-16">
          <span className="inline-block mr-3">
            <FaBookOpen className="text-blue-500" />
          </span>
          Articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article._id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 line-clamp-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">Article #{article.article}</p>
                <Link
                  to={`/article/${article._id}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300 font-medium"
                >
                  Read more
                  <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={fetchArticles}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
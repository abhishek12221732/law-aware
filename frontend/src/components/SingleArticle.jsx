import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../constants/contants';
import { FaHeart, FaBookmark, FaShareAlt, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { articleId } = useParams();

  // Function to ping the backend and mark the article as read
  const markArticleAsRead = async (articleId) => {
    try {
      // POST request to mark the article as read if user is logged in
      await axios.post(`${base_url}/api/article/read/${articleId}`, {}, { withCredentials: true });
    } catch (err) {
      console.error('Failed to mark the article as read', err);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch the article from the backend
        const response = await axios.get(`${base_url}/api/article/get/${articleId}`, { withCredentials: true });
        setArticle(response.data);
        setIsLoading(false);

        // Mark the article as read after successful fetch
        markArticleAsRead(articleId);
      } catch (err) {
        setError('Failed to load the article. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500 text-xl">{error}</p>
        <Link to="/article" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Articles
        </Link>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const splitIntoParagraphs = (text) => {
    return text.split('\n\n').filter(para => para.trim() !== '');
  };

  const paragraphs = splitIntoParagraphs(article.description);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
          <div className="p-6 sm:p-10">
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg text-blue-600 font-semibold">Article {article.article}</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setLiked(!liked)} 
                  className={`transition-colors duration-300 ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                >
                  <FaHeart className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => setBookmarked(!bookmarked)} 
                  className={`transition-colors duration-300 ${bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <FaBookmark className="h-6 w-6" />
                </button>
                <button className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <FaShareAlt className="h-6 w-6" />
                </button>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 leading-tight">{article.title}</h1>
            <div className="prose max-w-none text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 sm:px-10 sm:py-6 mt-8">
            <p className="text-lg font-semibold text-gray-700 mb-2">Was this article helpful?</p>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-300">
                <FaThumbsUp className="h-6 w-6" />
                <span>Yes</span>
              </button>
              <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-300">
                <FaThumbsDown className="h-6 w-6" />
                <span>No</span>
              </button>
            </div>
          </div>
        </article>
        <div className="mt-10 text-center">
          <Link
            to="/article"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;

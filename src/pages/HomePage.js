import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white">
        <nav className="flex justify-between container mx-auto">
          <h1 className="text-2xl font-bold">Law Aware</h1>
          <div>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/awareness" className="px-4">Awareness</Link>
            <Link to="/news" className="px-4">News</Link>
            <Link to="/games" className="px-4">Games</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Empowering You with Legal Knowledge</h2>
          <p className="text-lg">Understand your rights, stay informed, and become aware of the laws that matter to you.</p>
          <Link to="/awareness" className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">Get Started</Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Legal Awareness</h3>
            <p>Stay informed about your rights, duties, and laws that affect you in everyday life.</p>
            <Link to="/awareness" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">Learn More</Link>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Latest News</h3>
            <p>Get insights into the latest news and understand the legal implications behind the events.</p>
            <Link to="/news" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">Read News</Link>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Interactive Games</h3>
            <p>Test your knowledge about the Indian Constitution and legal system with fun, engaging games.</p>
            <Link to="/games" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">Play Now</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Legal Questions</h3>
          <ul className="space-y-6">
            <li>
              <p className="font-semibold">What are my fundamental rights?</p>
              <p>Your fundamental rights are basic human rights guaranteed by the Constitution of India.</p>
            </li>
            <li>
              <p className="font-semibold">How can I file a complaint?</p>
              <p>You can file a complaint either online or by visiting your local police station. Learn more in the Awareness section.</p>
            </li>
            <li>
              <p className="font-semibold">What are my duties as a citizen?</p>
              <p>The Constitution lists several duties, including respecting the law and protecting public property.</p>
            </li>
          </ul>
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Law Aware. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

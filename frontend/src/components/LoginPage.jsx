import { Alert, Button, Label, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { base_url } from '../constants/contants';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill all the fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${base_url}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'An error occurred');
        setLoading(false);
        return;
      }

      // Handle successful login, e.g., storing token, navigating, etc.
      navigate('/');

    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            LawAware
          </Link>
          <p className="text-gray-600 mt-2 text-lg">Sign in with your email and password</p>
        </motion.div>

        {error && (
          <Alert className="mb-4" color="failure">
            {error}
          </Alert>
        )}

        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
        >
          <div>
            <Label htmlFor="email" value="Your email" />
            <input
              type="email"
              placeholder="name@example.com"
              id="email"
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Your password" />
            <input
              type="password"
              placeholder="**********"
              id="password"
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
            className="w-full py-3 transition-transform duration-300 transform hover:scale-105"
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="ml-2">Loading...</span>
              </>
            ) : (
              'Login'
            )}
          </Button>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link to="/forget-password" className="text-indigo-600 hover:text-indigo-800 text-sm">
              Forgot Password?
            </Link>
            
          </div>
        </motion.form>

        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <Link to="/register" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

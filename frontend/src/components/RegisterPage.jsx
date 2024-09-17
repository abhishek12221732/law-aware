import { Alert, Button, Label, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base_url } from '../constants/contants';

export default function RegisterPage() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(`${base_url}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        return setErrorMessage(data.message || 'An error occurred.');
      }
      alert(data.message);
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            LawAware
          </Link>
          <p className="text-gray-600 mt-2 text-lg">Create your account</p>
        </motion.div>

        {errorMessage && (
          <Alert className="mb-4" color="failure">
            {errorMessage}
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
            <Label htmlFor="username" value="Your username" />
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label htmlFor="email" value="Your email" />
            <input
              type="email"
              placeholder="name@company.com"
              id="email"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Your password" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
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
              'Sign Up'
            )}
          </Button>
        </motion.form>

        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

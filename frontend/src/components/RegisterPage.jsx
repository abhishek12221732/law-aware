import { Alert, Button, Label, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base_url } from '../constants/contants';

export default function RegisterPage() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('english'); // Language state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage(language === 'english' ? 'Please fill out all fields.' : 'कृपया सभी फ़ील्ड भरें।');
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
        return setErrorMessage(data.message || (language === 'english' ? 'An error occurred.' : 'एक त्रुटि हुई।'));
      }
      alert(data.message);
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message || (language === 'english' ? 'An error occurred.' : 'एक त्रुटि हुई।'));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/" className="text-4xl font-bold text-black signin">
            LAW AWARE
          </Link>
          <p className="text-gray-600 mt-2 text-lg">
            {language === 'english' ? 'Create your account' : 'अपना खाता बनाएं'}
          </p>
        </motion.div>

        {/* Language Selector */}
        <div className="text-center">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="mt-2 w-full border-gray-300 border-2 rounded-lg p-3"
  >
    <option value="english">English</option>
    <option value="hindi">हिंदी (Hindi)</option>
    <option value="assamese">অসমীয়া (Assamese)</option>
    <option value="bengali">বাংলা (Bengali)</option>
    <option value="bodo">बड़ो (Bodo)</option>
    <option value="dogri">डोगरी (Dogri)</option>
    <option value="gujarati">ગુજરાતી (Gujarati)</option>
    <option value="kannada">ಕನ್ನಡ (Kannada)</option>
    <option value="kashmiri">کٲشُر (Kashmiri)</option>
    <option value="konkani">कोंकणी (Konkani)</option>
    <option value="maithili">मैथिली (Maithili)</option>
    <option value="malayalam">മലയാളം (Malayalam)</option>
    <option value="manipuri">মৈতৈলোন (Manipuri)</option>
    <option value="marathi">मराठी (Marathi)</option>
    <option value="nepali">नेपाली (Nepali)</option>
    <option value="oriya">ଓଡ଼ିଆ (Odia)</option>
    <option value="punjabi">ਪੰਜਾਬੀ (Punjabi)</option>
    <option value="sanskrit">संस्कृतम् (Sanskrit)</option>
    <option value="santali">ᱥᱟᱱᱛᱟᱲᱤ (Santali)</option>
    <option value="sindhi">سنڌي (Sindhi)</option>
    <option value="tamil">தமிழ் (Tamil)</option>
    <option value="telugu">తెలుగు (Telugu)</option>
    <option value="urdu">اردو (Urdu)</option>
  </select>
</div>

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
            <Label htmlFor="username" value={language === 'english' ? 'Your username' : 'आपका उपयोगकर्ता नाम'} />
            <input
              type="text"
              placeholder={language === 'english' ? 'Username' : 'उपयोगकर्ता नाम'}
              id="username"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label htmlFor="email" value={language === 'english' ? 'Your email' : 'आपका ईमेल'} />
            <input
              type="email"
              placeholder={language === 'english' ? 'name@company.com' : 'name@company.com'}
              id="email"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label htmlFor="password" value={language === 'english' ? 'Your password' : 'आपका पासवर्ड'} />
            <input
              type="password"
              placeholder={language === 'english' ? 'Password' : 'पासवर्ड'}
              id="password"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <Button
  type="submit"
  disabled={loading}
  className="w-full py-3 transition-transform duration-300 transform hover:scale-105"
  style={{ background: 'linear-gradient(258.44deg, #FAD47D 4.55%, #AB7529 42.13%, #D3A553 82.84%)' }}
>
  {loading ? (
    <>
      <Spinner size="sm" />
      <span className="ml-2">{language === 'english' ? 'Loading...' : 'लोड हो रहा है...'}</span>
    </>
  ) : (
    language === 'english' ? 'Sign Up' : 'साइन अप करें'
  )}
</Button>

        </motion.form>

        <div className="text-center mt-6">
          <span className="text-gray-600">
            {language === 'english' ? 'Already have an account?' : 'पहले से ही खाता है?'}
          </span>
          <Link to="/login" className="text-blue-500 hover:underline">
            {language === 'english' ? 'Login' : 'लॉग इन करें'}
          </Link>
        </div>
      </div>
    </div>
  );
}

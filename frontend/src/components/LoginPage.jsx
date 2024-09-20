import { Alert, Button, Label, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../constants/contants";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("english"); // State for language selection
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError(
        language === "english"
          ? "Please fill all the fields"
          : "कृपया सभी फ़ील्ड भरें"
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${base_url}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        setError(
          data.message ||
            (language === "english" ? "An error occurred" : "एक त्रुटि हुई")
        );
        setLoading(false);
        return;
      }

      // Handle successful login
      navigate("/");
    } catch (error) {
      setError(
        error.message ||
          (language === "english" ? "An error occurred" : "एक त्रुटि हुई")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/" className="text-4xl font-bold text-black signin">
            LAW AWARE
          </Link>
          <p className="text-gray-600 mt-2 text-lg">
            {language === "english"
              ? "Sign in with your email and password"
              : "अपने ईमेल और पासवर्ड से साइन इन करें"}
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
          transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
        >
          <div>
            <Label
              htmlFor="email"
              value={language === "english" ? "Your email" : "आपका ईमेल"}
            />
            <input
              type="email"
              placeholder={
                language === "english"
                  ? "name@example.com"
                  : "name@udaharan.com"
              }
              id="email"
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value={language === "english" ? "Your password" : "आपका पासवर्ड"}
            />
            <input
              type="password"
              placeholder={language === "english" ? "**********" : "**********"}
              id="password"
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full py-3 transition-transform duration-300 transform hover:scale-105"
            style={{
              background:
                "linear-gradient(258.44deg, #FAD47D 4.55%, #AB7529 42.13%, #D3A553 82.84%)",
            }}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="ml-2">
                  {language === "english" ? "Loading..." : "लोड हो रहा है..."}
                </span>
              </>
            ) : language === "english" ? (
              "Sign Up"
            ) : (
              "साइन अप करें"
            )}
          </Button>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link
              to="/forget-password"
              className="text-indigo-600 hover:text-indigo-800 text-sm"
            >
              {language === "english" ? "Forgot Password?" : "पासवर्ड भूल गए?"}
            </Link>
          </div>
        </motion.form>

        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">
            {language === "english"
              ? "Don't have an account?"
              : "क्या आपका खाता नहीं है?"}
          </span>
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-800 text-sm"
          >
            {language === "english" ? "Sign Up" : "साइन अप करें"}
          </Link>
        </div>
      </div>
    </div>
  );
}

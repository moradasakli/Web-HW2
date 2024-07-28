// src/components/Navbar.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const getIcon = (score) => {
    if (typeof score !== 'number') {
      score = Number(score);
    }

    console.log('the score now is :',  score );

    if (score === 0) return '❤️'; // Love heart for score 0
    if (score >= 10 && score <= 20) return '😢'; // Very sad
    if (score >= 21 && score <= 40) return '😞'; // Sad
    if (score >= 41 && score <= 60) return '😟'; // Nervous
    if (score >= 61 && score <= 80) return '🙂'; // Smile
    if (score >= 81 && score <= 100) return '😃'; // Happy
    return '😶'; // Default neutral face
  };
  

  console.log('Auth State:', auth);
  

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="EmotionAI Trainer Logo" className="h-10 mr-3" />
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">EmotionAI Trainer</span>
            </Link>
            {auth.username && (
              <span className="ml-4 text-gray-800 dark:text-gray-200 flex items-center">
                Hello, {auth.username}
                <span className="ml-2">{getIcon(auth.score)}</span>
              </span>
            )}
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Home</Link>
            {!auth.username && (
              <>
                <Link to="/signin" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Sign In</Link>
                <Link to="/register" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Register</Link>
              </>
            )}
            {auth.username && (
              <button onClick={handleLogout} className="text-gray-800 dark:text-gray-200 hover:text-gray-600">
                Logout
              </button>
            )}
            <Link to="/contactus" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Contact Us</Link>
            <Link to="/exam" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Exam</Link>
            <Link to="/training" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Training</Link>
            <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200 focus:outline-none">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

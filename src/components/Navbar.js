// src/components/Navbar.js
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { auth } = useContext(AuthContext); // Access the auth state

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
              <span className="ml-4 text-gray-800 dark:text-gray-200">Hello, {auth.username}</span>
            )}
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Home</Link>
            <Link to="/signin" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Sign In</Link>
            <Link to="/register" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">Register</Link>
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

// src/pages/Home.js
import React from 'react';

const Home = () => (
  <div className="container mx-auto mt-10 px-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to the Emotional Intelligence Trainer
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Our platform is designed to help you recognize and manage emotions in yourself and others.
        Through various exercises and assessments, you'll develop your emotional intelligence skills
        and enhance your personal and professional relationships.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Get started by signing in or registering for an account. Once you're logged in, you can take our
        comprehensive exam to assess your current emotional intelligence level and participate in tailored
        training sessions to improve your skills.
      </p>
    </div>
  </div>
);

export default Home;

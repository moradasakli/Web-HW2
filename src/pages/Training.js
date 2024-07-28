// src/pages/Training.js
import React from 'react';

const Training = () => (
  <div className="container mx-auto mt-10 px-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Training for Exam</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        This page will provide various exercises and training sessions to help users improve their emotional intelligence
        skills in preparation for the exam.
      </p>
      <div className="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
        <p className="font-bold text-gray-700 dark:text-gray-300">Exercise 1: Mindfulness Meditation</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Practice mindfulness meditation for 10 minutes daily to enhance your self-awareness and emotional regulation.</p>
      </div>
      <div className="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
        <p className="font-bold text-gray-700 dark:text-gray-300">Exercise 2: Journaling</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Write about your daily emotional experiences in a journal to better understand and manage your emotions.</p>
      </div>
    </div>
  </div>
);

export default Training;

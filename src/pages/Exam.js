// src/pages/Exam.js
import React from 'react';

const Exam = () => (
  <div className="container mx-auto mt-10 px-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Exam</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        This page will contain the emotional intelligence assessment exam. Users can take this exam to assess their
        current level of emotional intelligence.
      </p>
      <div className="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
        <p className="font-bold text-gray-700 dark:text-gray-300">Question 1: How often do you find it difficult to control your emotions?</p>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input type="radio" name="question1" className="mr-2" /> Always
          </label>
          <label className="block">
            <input type="radio" name="question1" className="mr-2" /> Often
          </label>
          <label className="block">
            <input type="radio" name="question1" className="mr-2" /> Sometimes
          </label>
          <label className="block">
            <input type="radio" name="question1" className="mr-2" /> Rarely
          </label>
          <label className="block">
            <input type="radio" name="question1" className="mr-2" /> Never
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Exam;

// src/pages/Register.js
import React from 'react';

const Register = () => (
  <div className="container mx-auto mt-10 px-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Register</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  </div>
);

export default Register;

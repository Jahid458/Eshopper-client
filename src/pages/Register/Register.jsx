import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('register done ')
    // You can send this to your backend or Firebase
  };

  return (
    <div className="flex items-center justify-center lg:mt-28 mt-7">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your Email"
      
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
      
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Profile Photo
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
           
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-primary rounded-md hover:bg-orange-500 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm lg:text-base">
          Already have an account?{' '}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>

        <div className="flex items-center justify-center divider">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

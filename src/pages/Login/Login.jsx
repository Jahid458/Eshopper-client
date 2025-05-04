import React from 'react';

export const Login = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Login to your account
        </h2> 

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
              required
            />
          </div>
          <span className='block mt-2'>Forgot Password</span>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-primary rounded-md hover:bg-orange-500 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-100 transition"
          onClick={() => alert('Google login triggered')}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-700 font-medium">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

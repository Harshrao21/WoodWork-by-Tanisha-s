import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-serif font-bold text-gray-900">Create Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="rounded-md shadow-sm -space-y-px">
             <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-wood-500 focus:border-wood-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-wood-500 focus:border-wood-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-wood-500 focus:border-wood-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
             <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-wood-500 focus:border-wood-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-wood-600 hover:bg-wood-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood-500">
              Create Account
            </button>
          </div>
          <div className="text-center text-sm">
              <p>Already have an account? <Link to="/login" className="font-medium text-wood-600 hover:text-wood-500">Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

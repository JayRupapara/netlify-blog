import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-800">T-Express</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-blue-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">About</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Services</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-blue-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

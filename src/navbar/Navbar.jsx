// Navbar.js

import React, { useState } from 'react';
import logo  from './../asset/map.jpg';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="" 
          className="h-8 w-8 mr-5 rounded-lg" />
        <div className="relative">
        <input
          type="text"
          placeholder="Search for province"
          className="bg-gray-700 text-white p-2 rounded-lg pl-10 lg:w-64 xl:w-96"
        />
          <RiSearchLine className="absolute top-3 left-4 text-gray-500" />
        </div>
      </div>
      {/* Responsive Menu Icon */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-gray-800 p-4 rounded-md shadow-md">
          <div className="flex flex-col items-end">
            <span className="cursor-pointer" onClick={toggleMenu}>
              {/* Close Menu Icon */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
            <Link
              to="/"
              className="text-white my-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className="text-white my-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}

      {/* Regular Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4 mr-6">
        <Link to="/" className="text-white mr-4 hover:text-red-500">
          Home
        </Link>
        <Link to="/aboutUs" className="text-white mr-4 hover:text-red-500">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

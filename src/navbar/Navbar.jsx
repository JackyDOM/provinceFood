// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [result, setResult] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <nav className="bg-gray-800 sticky top-0 p-4 flex items-center justify-between z-50 ">
       <div className="relative">
        <SearchBar setResult={setResult}/>
        <SearchResultList result={result}/>
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

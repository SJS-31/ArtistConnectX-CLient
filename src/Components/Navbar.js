// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            &#8801; {/* Unicode character for hamburger icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center space-x-4 flex-1 justify-center`}
        >
          <li className="text-center">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link to="/community" className="text-white hover:text-gray-300">
              Community
            </Link>
          </li>
          <li className="text-center">
            <Link to="/Profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>

        {/* Wallet Link on the Right */}
        <div className="hidden lg:flex items-center">
          <Link to="/wallet" className="text-white hover:text-gray-300">
            Wallet
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

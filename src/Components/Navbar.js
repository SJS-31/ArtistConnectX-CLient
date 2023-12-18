// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <div className="space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">All Posts</Link>
          </li>
          <li>
            <Link to="/single">Category Name 1</Link>
          </li>
          <li>
            <Link to="/single">Category Name 2</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

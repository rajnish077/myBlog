import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold hover:text-gray-400">
          My Blog
        </div>
        <div className="flex space-x-10">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

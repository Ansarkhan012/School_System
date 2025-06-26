import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">StudentSync</div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
            <Link to="/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-indigo-600">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop CTA Button */}
          <Link
            to="/register"
            className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
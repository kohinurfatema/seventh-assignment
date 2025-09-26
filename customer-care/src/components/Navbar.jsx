// src/components/Navbar.jsx

import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", title: "Home" },
    { href: "#", title: "FAQ" },
    { href: "#", title: "Changelog" },
    { href: "#", title: "Blog" },
    { href: "#", title: "Download" },
    { href: "#", title: "Contact" },
  ];

  // Define the button classes in one place to reuse them
  const gradientButtonClasses = "btn border-none text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105";

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">CS – Ticket System</a>
        </div>

        {/* Desktop Menu & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors">
              {link.title}
            </a>
          ))}
          {/* --- DESKTOP BUTTON UPDATED --- */}
          <button className={`${gradientButtonClasses} ml-4`}>
            <span className="mr-2 text-lg">+</span>
            New Ticket
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-800 hover:text-indigo-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute w-full bg-white shadow-lg py-4`}>
        {navLinks.map((link) => (
          <a key={link.title} href={link.href} className="block px-6 py-2 text-gray-600 hover:bg-gray-100">
            {link.title}
          </a>
        ))}
        <div className="px-6 py-4">
          {/* --- MOBILE BUTTON UPDATED --- */}
          <button className={`${gradientButtonClasses} w-full`}>
            <span className="mr-2 text-lg">+</span>
            New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
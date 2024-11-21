// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Prishni Ghimire</div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-600 smooth-scroll">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 smooth-scroll">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 smooth-scroll">Contact</a></li>
          <li>
            <a
              href="/path/to/resume.pdf"
              download
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


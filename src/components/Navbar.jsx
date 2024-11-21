import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand text-2xl font-bold">
        <div className="text-2xl font-bold handwriting">
          <Link to="/" className="hover:text-gray-400">Prishni's Portfolio</Link>
        </div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-400">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
          <Link to="/resume" className="hover:text-gray-400">Resume</Link>

          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

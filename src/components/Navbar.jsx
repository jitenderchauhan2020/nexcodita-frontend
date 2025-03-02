import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark text-light p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-extrabold text-primary">Nexcodita</h1>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/" className="hover:text-primary transition duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-primary transition duration-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-primary transition duration-300">Contact</Link></li>
        <li><Link to="/blog" className="hover:text-primary transition duration-300">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

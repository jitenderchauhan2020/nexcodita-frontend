import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4 text-center mt-10">
      <p>© 2024 Nexcodita. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-primary transition duration-300">Facebook</a>
        <a href="#" className="hover:text-primary transition duration-300">Twitter</a>
        <a href="#" className="hover:text-primary transition duration-300">LinkedIn</a>
        <a href="#" className="hover:text-primary transition duration-300">Nexcoditasolution@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;

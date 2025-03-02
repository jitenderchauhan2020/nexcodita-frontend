import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#373643] text-white flex flex-col justify-center items-center p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <h1 className="text-6xl font-bold text-[#fad02c] mb-6 text-center">
        Nexcodita
      </h1>
      <p className="text-xl text-gray-300 mb-6 text-center max-w-2xl">
        Your trusted partner in Full-Stack Web & Software Development.  
        We build scalable, high-performance applications for businesses.
      </p>

      {/* Call to Action Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link to="/contact">
          <button className="bg-[#fad02c] text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#ff0000] hover:text-white transition duration-300">
            Get a Quote
          </button>
        </Link>
        <Link to="/about">
          <button className="border border-[#fad02c] text-[#fad02c] px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#fad02c] hover:text-black transition duration-300">
            Learn More
          </button>
        </Link>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#fad02c] mb-2">Full-Stack Development</h3>
          <p className="text-gray-400">We create dynamic and scalable web applications using the MERN stack.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#fad02c] mb-2">Custom Software Solutions</h3>
          <p className="text-gray-400">Tailor-made software solutions for startups and enterprises.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#fad02c] mb-2">UI/UX Design</h3>
          <p className="text-gray-400">We design user-friendly, visually stunning, and modern interfaces.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

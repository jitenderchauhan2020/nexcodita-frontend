import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen bg-dark text-light flex flex-col justify-center items-center p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-primary mb-6 text-center">
        About Us
      </h2>
      <p className="text-lg text-gray-400 mb-6 text-center max-w-3xl">
        Expert Assistance is a platform designed to connect individuals with industry professionals. Our mission is to provide 
        expert guidance and solutions to users seeking assistance in various domains.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-2">Expert Connections</h3>
          <p className="text-gray-400">We bring you closer to professionals who can help you solve real-world problems.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-2">Innovative Solutions</h3>
          <p className="text-gray-400">Our experts provide cutting-edge solutions tailored to your needs.</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-2">24/7 Assistance</h3>
          <p className="text-gray-400">Get support anytime, anywhere with our reliable team of experts.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

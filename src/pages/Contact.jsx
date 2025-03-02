import React from "react";
import InquiryForm from "../components/InquiryForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      className="p-10 bg-dark text-light min-h-screen flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-primary mb-6">Contact Us</h2>
      <p className="text-lg text-gray-400 mb-6 text-center max-w-lg">
        Have a question or a project idea? Reach out to us, and we’ll get back to you as soon as possible.
      </p>
      <InquiryForm />
    </motion.div>
  );
};

export default Contact;

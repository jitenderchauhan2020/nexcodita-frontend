import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const InquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/inquiries", formData);
      setResponseMessage("✅ Inquiry sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("❌ Error submitting inquiry.");
    }
  };

  return (
    <motion.div 
      className="p-6 bg-gray-800 text-light rounded-lg shadow-md w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-semibold text-primary mb-4 text-center">Send an Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name"
          className="w-full p-3 border rounded-lg bg-dark text-light border-primary focus:outline-none focus:ring-2 focus:ring-primary" 
          onChange={handleChange} value={formData.name} required />
        <input type="email" name="email" placeholder="Your Email"
          className="w-full p-3 border rounded-lg bg-dark text-light border-primary focus:outline-none focus:ring-2 focus:ring-primary" 
          onChange={handleChange} value={formData.email} required />
        <textarea name="message" placeholder="Your Message"
          className="w-full p-3 border rounded-lg bg-dark text-light border-primary focus:outline-none focus:ring-2 focus:ring-primary" 
          onChange={handleChange} value={formData.message} required />
        <button type="submit" 
          className="bg-primary text-dark px-6 py-3 text-lg font-semibold rounded-full hover:bg-secondary transition duration-300 w-full">
          Submit
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-center text-green-500">{responseMessage}</p>}
    </motion.div>
  );
};

export default InquiryForm;

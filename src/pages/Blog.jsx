import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Future of Web Development",
    description: "Discover the latest trends and technologies shaping the future of web development.",
    image: "https://source.unsplash.com/400x250/?technology,coding",
    link: "#"
  },
  {
    title: "Why React is Still the Best Choice in 2024",
    description: "A deep dive into why React remains the top frontend framework for developers worldwide.",
    image: "https://source.unsplash.com/400x250/?react,code",
    link: "#"
  },
  {
    title: "How AI is Transforming Software Development",
    description: "Learn how artificial intelligence is changing the way software is built and deployed.",
    image: "https://source.unsplash.com/400x250/?ai,technology",
    link: "#"
  }
];

const Blog = () => {
  return (
    <motion.div 
      className="bg-dark text-light min-h-screen p-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-primary mb-6">Our Blog</h2>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-lg">
        Stay updated with the latest insights in technology, web development, and artificial intelligence.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.description}</p>
            <a href={post.link} className="text-primary font-bold hover:text-secondary transition duration-300">
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;

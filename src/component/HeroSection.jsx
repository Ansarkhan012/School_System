import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-6 py-16 md:py-24 text-center"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto"
      >
        Transforming Education Through Intelligent Student Management
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        StudentSync offers the essential tools for schools and educational institutions to streamline student management and enhance learning outcomes.
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
        >
          Start for Free →
        </motion.button>
        
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition font-medium"
        >
          Explore Now →
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
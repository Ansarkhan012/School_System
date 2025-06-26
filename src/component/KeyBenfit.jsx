import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function KeyBenefits() {
  const benefits = [
    {
      title: "Streamlined Administration",
      description: "Reduce paperwork by up to 70% with our automated processes and centralized student data management.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Enhanced Parent Engagement",
      description: "Keep parents informed with real-time updates on attendance, grades, and school announcements.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Decisions",
      description: "Powerful analytics help identify at-risk students and measure program effectiveness with actionable insights.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
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

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const rotate = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const button = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform How Your Institution Operates
          </motion.h2>
          <motion.p variants={slideUp} className="text-xl text-gray-600">
            StudentSync delivers measurable results for schools of all sizes through innovative education technology.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition"
            >
              <motion.div 
                variants={rotate}
                whileHover={{ rotate: 10 }}
                className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-20 bg-indigo-600 rounded-xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "500+", label: "Schools Trust StudentSync" },
              { value: "1M+", label: "Students Managed" },
              { value: "70%", label: "Time Saved on Admin Tasks" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="p-4"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-indigo-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={button}
          >
            <Link
              to="/features"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-md hover:bg-indigo-700 transition font-medium text-lg"
            >
              Explore All Features →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default KeyBenefits;
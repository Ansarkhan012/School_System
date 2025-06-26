import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Education Through Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              StudentSync is revolutionizing how educational institutions manage student data, streamline operations, and enhance learning experiences.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 2020 by a team of educators and technologists, StudentSync began with a simple mission: to reduce administrative burdens so educators can focus on what matters most - teaching.
            </p>
            <p>
              After years of witnessing teachers and administrators struggle with outdated systems, we set out to build a modern, intuitive platform that actually meets the needs of today's educational institutions.
            </p>
            <p>
              Today, StudentSync serves over 500 schools and educational organizations worldwide, helping them manage more than 1 million student records with efficiency and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-indigo-600 mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Impact</h3>
                <p className="text-gray-600">
                  We measure our success by how much time we give back to educators and how we improve student outcomes.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-indigo-600 mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We constantly evolve our platform based on real educator feedback and emerging educational technologies.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-indigo-600 mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integrity</h3>
                <p className="text-gray-600">
                  We treat student data with the highest level of security and compliance, because trust is everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-indigo-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former school principal with 15+ years in education technology
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-indigo-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Software architect specializing in educational systems
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Amanda Rodriguez</h3>
              <p className="text-indigo-600 mb-2">Head of Product</p>
              <p className="text-gray-600 text-sm">
                Former teacher and curriculum developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of schools already using StudentSync to simplify administration and focus on education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pricing"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
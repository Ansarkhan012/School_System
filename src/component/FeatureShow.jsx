import React, { useState } from "react";
import { Link } from "react-router-dom";

function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      name: "Student Dashboard",
      title: "Comprehensive Student Profiles",
      description: "Access all student information in one centralized location - academic records, attendance, behavior notes, and more - with role-based permissions.",
      image: "/images/student-dashboard-screenshot.png", // Replace with actual image path
      cta: "Explore Student Management",
      stats: [
        { value: "80%", label: "Faster access to student records" },
        { value: "360°", label: "Holistic student view" }
      ]
    },
    {
      name: "Gradebook",
      title: "Automated Grading System",
      description: "Streamline grade collection with customizable grading scales, weighted categories, and instant report card generation that saves teachers 10+ hours per term.",
      image: "/images/gradebook-screenshot.png", // Replace with actual image path
      cta: "See Academic Tools",
      stats: [
        { value: "95%", label: "Reduced grading errors" },
        { value: "10h", label: "Saved per teacher monthly" }
      ]
    },
    {
      name: "Parent Portal",
      title: "Real-Time Communication",
      description: "Our parent portal increases family engagement with instant notifications, grade monitoring, and secure messaging - with 85% adoption rates at partner schools.",
      image: "/images/parent-portal-screenshot.png", // Replace with actual image path
      cta: "View Communication Features",
      stats: [
        { value: "85%", label: "Parent adoption rate" },
        { value: "4.8/5", label: "Satisfaction score" }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for Education Excellence
          </h2>
          <p className="text-xl text-gray-600">
            See how StudentSync's powerful features solve real challenges in educational institutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="md:w-1/3">
            <div className="space-y-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition ${activeTab === index ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'hover:bg-gray-50'}`}
                >
                  <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.title}</p>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 bg-indigo-50 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 mb-4">Key Results</h4>
              <div className="grid grid-cols-2 gap-4">
                {features[activeTab].stats.map((stat, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-gray-50 rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {features[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {features[activeTab].description}
              </p>
              <Link
                to="/features"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                {features[activeTab].cta}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center border-t border-gray-300">
              {/* Replace with actual screenshot */}
              <div className="text-gray-500 text-center p-6">
                <svg className="h-12 w-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>{features[activeTab].name} Screenshot</p>
                <p className="text-sm mt-1">(Actual UI will display here)</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Features CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/features"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-md hover:bg-indigo-700 transition font-medium text-lg"
          >
            See All Features
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
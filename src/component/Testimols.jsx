import React from "react";

function Testimonials() {
  const testimonials = [
    {
      quote: "StudentSync reduced our administrative workload by 60%, allowing our teachers to focus on what really matters - teaching.",
      name: "Dr. Sarah Johnson",
      title: "Principal, Greenfield High School",
      avatar: (
        <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
          SJ
        </div>
      )
    },
    {
      quote: "Parent engagement has skyrocketed since we implemented StudentSync's communication tools. Attendance improved by 22% in one semester.",
      name: "Michael Rodriguez",
      title: "Superintendent, Riverside District",
      avatar: (
        <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
          MR
        </div>
      )
    },
    {
      quote: "The analytics dashboard helped us identify at-risk students early and improve our graduation rate by 15% this year.",
      name: "Amanda Chen",
      title: "Dean of Students, Oakwood Academy",
      avatar: (
        <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
          AC
        </div>
      )
    }
  ];

  const caseStudies = [
    {
      title: "How Lincoln Elementary Improved Parent Engagement",
      result: "85% increase in parent portal adoption",
      link: "#"
    },
    {
      title: "Central High's Journey to Paperless Administration",
      result: "Reduced printing costs by $18,000 annually",
      link: "#"
    },
    {
      title: "Special Needs Program Success at Westfield School",
      result: "40% faster IEP documentation process",
      link: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of schools transforming education with StudentSync
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                {testimonial.avatar}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <a 
                key={index} 
                href={study.link}
                className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {study.title}
                </h4>
                <p className="text-sm text-indigo-600 font-medium">{study.result}</p>
                <div className="mt-4 flex items-center text-indigo-600">
                  <span className="text-sm font-medium">Read case study</span>
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Trusted by leading educational institutions</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {["School A", "Academy B", "District C", "College D", "Institute E"].map((logo, index) => (
              <div key={index} className="h-12 flex items-center text-gray-700 font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
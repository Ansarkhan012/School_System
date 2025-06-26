import React from "react";
import { Link } from "react-router-dom";

function Comparison() {
  const competitors = [
    {
      name: "Traditional Systems",
      studentProfiles: "Basic information only",
      analytics: "Limited or non-existent",
      parentEngagement: "Manual processes",
      cost: "Hidden IT expenses",
      support: "Slow response times"
    },
    {
      name: "Other EdTech Solutions",
      studentProfiles: "Partial integration",
      analytics: "Basic reporting",
      parentEngagement: "Separate modules",
      cost: "Expensive add-ons",
      support: "Business hours only"
    },
    {
      name: "StudentSync",
      studentProfiles: "360° holistic view",
      analytics: "AI-powered insights",
      parentEngagement: "Built-in real-time portal",
      cost: "Transparent pricing",
      support: "24/7 dedicated support"
    }
  ];

  return (
    <>
      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Schools Choose StudentSync
            </h2>
            <p className="text-xl text-gray-600">
              See how we compare to other solutions in the education market
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50">Features</th>
                  {competitors.map((competitor, index) => (
                    <th 
                      key={index} 
                      className={`px-6 py-4 text-center font-semibold ${competitor.name === "StudentSync" ? "bg-indigo-50 text-indigo-600" : "text-gray-900 bg-gray-50"}`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Student Profiles</td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-600">
                      {competitor.studentProfiles}
                      {competitor.name === "StudentSync" && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Best
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Analytics</td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-600">
                      {competitor.analytics}
                      {competitor.name === "StudentSync" && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Best
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Parent Engagement</td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-600">
                      {competitor.parentEngagement}
                      {competitor.name === "StudentSync" && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Best
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Cost Structure</td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-600">
                      {competitor.cost}
                      {competitor.name === "StudentSync" && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Best
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Support</td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-600">
                      {competitor.support}
                      {competitor.name === "StudentSync" && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Best
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              See Detailed Pricing Comparison
              <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-indigo-700">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join the thousands of educators who trust StudentSync to streamline their operations and enhance student success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/demo"
              className="bg-white text-indigo-700 px-8 py-4 rounded-md hover:bg-gray-100 transition font-medium text-lg"
            >
              Request a Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-indigo-800 transition font-medium text-lg"
            >
              See Pricing Plans
            </Link>
          </div>
          <p className="mt-8 text-indigo-200 text-sm">
            Need help deciding? <Link to="/contact" className="text-white underline hover:text-indigo-100">Contact our team</Link> for a personalized recommendation.
          </p>
        </div>
      </section>
    </>
  );
}

export default Comparison;
import React from "react";
import HeroSection from "../component/HeroSection";
import KeyBenefits from "../component/KeyBenfit";
import Testimonials from "../component/Testimols";
import FeatureShowcase from "../component/FeatureShow";
import Comparison from "../component/Comparison";

function Landing() {
  return (
    <div className="bg-white">
      <HeroSection />
      <KeyBenefits />
      <FeatureShowcase />
      <Testimonials />
      <Comparison />
      <div className="border-t border-gray-200 mx-auto max-w-7xl"></div>
    </div>
  );
}

export default Landing;

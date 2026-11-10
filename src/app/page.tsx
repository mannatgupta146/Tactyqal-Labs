import React from "react";
import Hero from "../components/hero";
import SuccessStories from "../components/success-stories";
import Curriculum from "../components/curriculum";
import WhyUs from "../components/why-us";
import AssessmentTools from "../components/assessment-tools";
import Testimonials from "../components/testimonials";
import FeaturedBlog from "../components/featured-blog";
import Pricing from "../components/pricing";
import FAQ from "../components/faq";
import ContactSection from "../components/contact-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SuccessStories />
      <Curriculum />
      <WhyUs />
      <AssessmentTools />
      <Testimonials />
      <FeaturedBlog />
      <Pricing />
      <FAQ />
      <ContactSection />
    </div>
  );
}

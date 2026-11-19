import React from "react";
import {
  Hero,
  SuccessStories,
  Curriculum,
  Testimonials,
  Pricing,
  FAQ,
} from "@/components/sections";
import { WhyUs } from "@/components/why-us";
import { AssessmentTools } from "@/components/tools";
import { FeaturedBlog } from "@/components/blog";
import { ContactSection } from "@/components/contact";

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

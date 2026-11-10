"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What if my teen has no coding experience?",
      a: "That is completely fine and very common! Over 80% of our incoming students have never written a line of code. We utilize modern visual development platforms, no-code frameworks, and AI assistants. Students learn computational logic, database architecture, and product design without getting bogged down by low-level syntax errors.",
    },
    {
      q: "How do you guarantee university admissions?",
      a: "While no ethical institution can promise admission to a specific university, we guarantee that your student will have a published, tangible application with real metrics, a live Product Hunt launch, and a polished pitch deck. Admissions officers at Ivy League and top-20 universities consistently state that real-world founder initiatives and independent extracurriculars rank in the top 1% of applicant profiles.",
    },
    {
      q: "What kind of apps do students typically build?",
      a: "Students build apps aligned with their genuine passions. Past examples include KrishiDrishti (an AI soil diagnosis app for Indian farmers), Elenor Vegan Handbags (an ethical corporate gifting e-commerce platform), One Last Chapter (a book subscription service for kids), and Converza (an AI language tutor).",
    },
    {
      q: "How much time commitment is required?",
      a: "Students attend one 60-minute 1:1 live session per week with their mentor, plus roughly 3 to 5 hours of independent building time. We tailor the schedule around their school exams, extracurriculars, and vacations so it never causes academic burnout.",
    },
    {
      q: "What is the success rate?",
      a: "100% of students who complete all 8 weekly milestones successfully build, launch, and deploy their applications. Over 60% of our graduates have generated revenue or won regional/national pitch competitions.",
    },
    {
      q: "Can my teen generate real revenue?",
      a: "Yes! Several of our students start making revenue within weeks of launch. For example, a 16-year-old student generated INR 9,000 in week 1 with corporate gifting, and a 13-year-old reached INR 100,000/month recurring revenue with a subscription service.",
    },
    {
      q: "What universities have your students gotten into?",
      a: "Our alumni have earned admissions to Stanford, UC Berkeley, Carnegie Mellon, University of Pennsylvania, Oxford, UT Austin, and premier Indian institutions like IIT and Ashoka University.",
    },
    {
      q: "What ongoing support do you provide after the 8 weeks?",
      a: "Mentorship does not end at week 8. All alumni receive lifetime access to our private community, quarterly founder masterclasses, investor introductions, and ongoing support for grant applications and college recommendation letters.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Common Queries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know about our mentorship format, tech requirements, and outcomes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-indigo-400 font-mono text-sm">0{index + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

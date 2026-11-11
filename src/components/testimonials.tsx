"use client";

import React from "react";
import { testimonialsList } from "../data/testimonials-data";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white relative border-t border-stone-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Student Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback directly from young founders who moved from an abstract idea to a functional application with Tactyqal Labs.
          </p>
        </div>

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsList.map((r) => (
            <div
              key={r.name}
              className="group rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400 hover:bg-white hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Top Row: 5 Star Ratings on Left & Comma Quote Icon on Right */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300 group-hover:text-amber-400 transition-colors duration-200" />
                </div>

                {/* Real Student Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium min-h-[52px]">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Row: Real Student Avatar + Verified Name */}
              <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center gap-3.5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-stone-200 group-hover:border-amber-400 transition-colors duration-200 shadow-2xs"
                />
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    {r.name}
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Student Founder • Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

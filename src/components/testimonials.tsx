"use client";

import React from "react";
import { Sparkles, Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      age: "16 years old",
      role: "Founder, KrishiDrishti",
      quote: "I had to struggle to find a tech cofounder for months. Tactyqal Labs gave me the tools and 1:1 guidance to build and ship my agritech app myself.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Isha Patel",
      age: "17 years old",
      role: "Stanford '28 Admit",
      quote: "Now I feel truly independent and can build anything I want. Having a functional app with paying customers made my college applications stand out completely.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Rohan Verma",
      age: "14 years old",
      role: "Founder, Gaming Micro-SaaS",
      quote: "It's literally the future. Learning to build full-stack apps with modern tools in 8 weeks felt like having a superpower compared to normal school classes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Simran Kaur",
      age: "16 years old",
      role: "Founder, Elenor Handbags",
      quote: "I can focus on the creative and marketing side and don't have to worry about whether it can be built. We did INR 9,000 in our first week after launch!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Devansh Mehta",
      age: "15 years old",
      role: "Product Hunt Top 10",
      quote: "I went on from having no concrete idea to launching my app on Product Hunt with hundreds of active users. The 1:1 mentorship is unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Priya Nair",
      age: "13 years old",
      role: "Founder, One Last Chapter",
      quote: "My impact app was only in my head till I built it here. Today it generates over INR 100,000 every single month in subscription revenue.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Alumni Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Hear directly from young founders who moved from an abstract idea to a functional application and college admissions edge.
          </p>
        </div>

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {r.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {r.role} • {r.age}
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

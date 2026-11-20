"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export interface TestimonialItem {
  name: string;
  quote: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  cardIndex: number;
}

export default function TestimonialCard({
  testimonial,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
  cardIndex,
}: TestimonialCardProps) {
  // If another card is hovered, this card gently softens/dims to create a spotlight focus
  const dimStyle = isAnyHovered && !isHovered ? "opacity-60 scale-[0.98]" : "opacity-100 scale-100";

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`testimonial-card testimonial-card-${cardIndex} group rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/15 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 shadow-xs cursor-pointer relative z-10 ${dimStyle}`}
    >
      <div>
        {/* Top Row: 5 Star Ratings on Left & Comma Quote Icon on Right */}
        <div className="flex items-center justify-between mb-4">
          <div className="star-group flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="star-icon w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>
          <Quote className="quote-icon w-6 h-6 text-stone-300 group-hover:text-amber-500 group-hover:rotate-12 transition-all duration-300" />
        </div>

        {/* Real Student Quote */}
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium min-h-[52px] group-hover:text-slate-950 transition-colors">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Bottom Row: Real Student Avatar + Verified Name */}
      <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center gap-3.5">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-stone-200 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 shadow-2xs"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
        <div>
          <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5 group-hover:text-amber-700 transition-colors">
            {testimonial.name}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Student Founder • Verified
          </div>
        </div>
      </div>
    </div>
  );
}

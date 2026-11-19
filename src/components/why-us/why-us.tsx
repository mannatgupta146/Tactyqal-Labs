"use client";

import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import {
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Layers,
  Award,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  Mic,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import rawWhyUs from "../../data/why-us-data.json";
import { WhyUsCard, type WhyUsReason } from "./why-us-card";

const whyUsIconMap: Record<string, LucideIcon> = {
  UserCheck,
  Layers,
  Award,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  Mic,
  Lightbulb,
};

const whyUsReasons: WhyUsReason[] = rawWhyUs.map((item) => ({
  id: item.id,
  tag: item.tag,
  title: item.title,
  description: item.description,
  badge: item.badge,
  icon: whyUsIconMap[item.iconName] || Lightbulb,
}));

export default function WhyUs() {
  const dispatch = useAppDispatch();

  // Duplicate array for seamless 100% infinite loop
  const marqueeItems = [...whyUsReasons, ...whyUsReasons];

  return (
    <section id="why" className="py-24 bg-[#FDFCF7] relative border-t border-stone-200 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>The Tactyqal Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Why Parents Choose Tactyqal Labs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We bridge the gap between abstract academic theory and tangible real-world execution. Continuous 8-pillar founder ecosystem.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Rotating Marquee Track with Side Fade Gradients */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Left & Right Soft Edge Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FDFCF7] via-[#FDFCF7]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FDFCF7] via-[#FDFCF7]/90 to-transparent z-20 pointer-events-none" />

        {/* Moving Track - Automatically pauses on card hover */}
        <div className="animate-infinite-carousel gap-6 px-4">
          {marqueeItems.map((reason, idx) => (
            <WhyUsCard
              key={`${reason.title}-${idx}`}
              reason={reason}
              index={idx % whyUsReasons.length}
            />
          ))}
        </div>
      </div>

      {/* Founder Consultation CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10">
        <button
          onClick={() => dispatch(openConsultationModal("Why Us Bottom CTA"))}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <span>Book A Free Consultation With Our Founder</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

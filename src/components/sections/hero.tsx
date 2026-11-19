"use client";

import React, { useRef } from "react";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  GraduationCap,
  Building2,
  Users,
  Play,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const dispatch = useAppDispatch();
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        opacity: 0,
        y: 25,
        duration: 0.8,
      })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-pill-badge",
          {
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-ctas",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".hero-price",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
          },
          "-=0.2"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FDFCF7] text-slate-900"
    >
      {/* Subtle Mint Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#00df82]/15 via-teal-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Subtle Warm Grid / Dot Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#05966912_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 max-w-4xl mx-auto">
          Empower Your Kid To Build The Next App That <span className="text-[#059669]">Impacts Millions</span>, in 8 Weeks
        </h1>

        {/* Subtitle with Core Pillars */}
        <p className="hero-subtitle mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To The Best Colleges • Grants • Media Coverage
        </p>

        {/* 3 Metric Badges - Exact Placement as on tactyqal.com */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="hero-pill-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#059669]" />
              <span>100+ Students Mentored</span>
            </div>

            <div className="hero-pill-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
              <Building2 className="w-4 h-4 text-[#059669]" />
              <span>Top University Admissions</span>
            </div>
          </div>

          <div className="hero-pill-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
            <Users className="w-4 h-4 text-[#059669]" />
            <span>₹Thousands of People Impacted</span>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="hero-ctas mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Solid Mint Green Button */}
          <button
            onClick={() => dispatch(openConsultationModal("Hero Primary CTA"))}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Free Consultation
          </button>

          {/* Secondary Outlined Button with Play Icon */}
          <a
            href="#success"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-stone-300 hover:border-[#00df82] text-slate-800 hover:text-[#059669] font-bold text-sm sm:text-base transition-all shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Success Stories</span>
          </a>
        </div>

        {/* Pricing Anchor Snippet */}
        <div className="hero-price mt-6 inline-flex items-center justify-center gap-3 text-sm">
          <span className="text-slate-400 line-through font-semibold text-base">₹25,000</span>
          <span className="text-[#059669] font-black text-xl">₹16,000</span>
          <span className="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80">
            Limited Time Offer
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" /> Results Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}

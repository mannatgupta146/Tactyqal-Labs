"use client";

import React, { useRef } from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const dispatch = useAppDispatch();
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3"
        )
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
          ".hero-offer-pill",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
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
          ".hero-metric-card",
          {
            opacity: 0,
            y: 30,
            stagger: 0.12,
            duration: 0.7,
          },
          "-=0.3"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white"
    >
      {/* Radiant Background Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/25 via-violet-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-violet-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Scarcity Pill */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Limited Time Offer • Results Guaranteed • Only 15 Spots Available</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Empower Your Kid To Build The Next App That{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Impacts Millions,
          </span>{" "}
          in 8 Weeks
        </h1>

        {/* Subtitle with Pillars */}
        <p className="hero-subtitle mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">1:1 Mentoring</span> • Idea To Full-Stack App •{" "}
          <span className="font-semibold text-white">No Coding</span> • Admissions To The Best Colleges • Grants • Media Coverage
        </p>

        {/* Dynamic Pricing Callout Banner */}
        <div className="hero-offer-pill inline-flex flex-wrap items-center justify-center gap-3 mt-6 px-5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-sm shadow-xl">
          <span className="text-slate-400 line-through text-xs sm:text-sm">₹25,000</span>
          <span className="text-emerald-400 font-extrabold text-lg sm:text-xl">₹16,000</span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wide">
            Save 36%
          </span>
          <span className="text-slate-400 text-xs hidden sm:inline">|</span>
          <span className="text-slate-300 text-xs sm:text-sm flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-indigo-400" /> Results Guaranteed or Money Back
          </span>
        </div>

        {/* Dual CTA Buttons */}
        <div className="hero-ctas mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => dispatch(openConsultationModal("Hero Primary CTA"))}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5" />
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#success"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-base transition-all"
          >
            <span>Explore Success Stories</span>
            <span className="text-xs text-indigo-400">↓</span>
          </a>
        </div>

        {/* Metrics Social Proof Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="hero-metric-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 mx-auto mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">100+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Students Mentored</div>
          </div>

          <div className="hero-metric-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 mx-auto mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">Top Tier</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">University Admissions</div>
          </div>

          <div className="hero-metric-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 mx-auto mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">₹ Millions</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Impact & Revenue</div>
          </div>

          <div className="hero-metric-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 mx-auto mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">1:1 Live</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Dedicated Mentorship</div>
          </div>
        </div>
      </div>
    </section>
  );
}

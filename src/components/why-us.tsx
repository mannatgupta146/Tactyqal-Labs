"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Sparkles,
  UserCheck,
  Layers,
  Award,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  Mic,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function WhyUs() {
  const dispatch = useAppDispatch();

  const reasons = [
    {
      title: "1:1 Personalized Mentoring",
      description: "Every student gets dedicated, expert guidance from an experienced founder. Zero generic group classes.",
      icon: UserCheck,
      iconColor: "text-indigo-400",
      bgGradient: "from-indigo-500/10 to-indigo-500/5",
    },
    {
      title: "Full Stack App with No-Code & AI",
      description: "Build production-grade real applications using modern no-code platforms, AI APIs, and agile workflows.",
      icon: Layers,
      iconColor: "text-cyan-400",
      bgGradient: "from-cyan-500/10 to-cyan-500/5",
    },
    {
      title: "Proven Track Record",
      description: "50+ successful teen alumni, verified MRR revenue, media features, and Ivy League / Top 20 admits.",
      icon: Award,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-500/10 to-emerald-500/5",
    },
    {
      title: "University Admission Edge",
      description: "Stand out dramatically in college applications with tangible, published apps rather than theoretical clubs.",
      icon: GraduationCap,
      iconColor: "text-violet-400",
      bgGradient: "from-violet-500/10 to-violet-500/5",
    },
    {
      title: "Real Revenue Generation",
      description: "Students learn how to price, market, and monetize their software, turning ideas into cash-flow businesses.",
      icon: TrendingUp,
      iconColor: "text-amber-400",
      bgGradient: "from-amber-500/10 to-amber-500/5",
    },
    {
      title: "Lifelong Alumni Support",
      description: "Mentorship does not end at Week 8. Alumni enjoy ongoing investor intros, demo days, and masterclasses.",
      icon: HeartHandshake,
      iconColor: "text-pink-400",
      bgGradient: "from-pink-500/10 to-pink-500/5",
    },
    {
      title: "Pitch & Presentation Skills",
      description: "Master the art of storytelling, high-stakes investor pitching, and high-visibility Product Hunt launches.",
      icon: Mic,
      iconColor: "text-blue-400",
      bgGradient: "from-blue-500/10 to-blue-500/5",
    },
    {
      title: "Startup Ideas 101",
      description: "Learn how to systematically identify and validate profitable startup opportunities directly from our founder.",
      icon: Lightbulb,
      iconColor: "text-yellow-400",
      bgGradient: "from-yellow-500/10 to-yellow-500/5",
    },
  ];

  return (
    <section id="why" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Why Tactyqal Labs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Parents Choose Tactyqal Labs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We bridge the gap between abstract academic theory and tangible real-world execution. Here is why ambitious families trust us.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-7 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${r.bgGradient} border border-white/5 ${r.iconColor} mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => dispatch(openConsultationModal("Why Us Bottom CTA"))}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book A Free Consultation With Our Founder</span>
          </button>
        </div>
      </div>
    </section>
  );
}

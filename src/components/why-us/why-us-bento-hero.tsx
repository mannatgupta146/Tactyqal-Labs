"use client";

import React from "react";
import { UserCheck, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function WhyUsBentoHero() {
  return (
    <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-9 lg:col-span-7 flex flex-col justify-between hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08),0_12px_24px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
      {/* Ambient Radial Spotlight Bloom */}
      <div className="absolute -top-16 -right-16 w-52 h-52 bg-emerald-400/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#00df82]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Radiant Sheen */}
      <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top Header Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-bold tracking-wide uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>01 • Founder-Led Incubator</span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#059669] transition-colors">
            1:1 Mentorship
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          1:1 Personalized Founder Mentoring
        </h3>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
          Every student works directly with an experienced founder. No junior teaching assistants, no pre-recorded video lectures, and zero generic 40-student classrooms.
        </p>

        {/* Three Pillars List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/60 group-hover:border-emerald-200/60 transition-all duration-300">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <span>Direct Founder</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">Weekly 1:1 live strategy &amp; coding review sessions</p>
          </div>

          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/60 group-hover:border-emerald-200/60 transition-all duration-300">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <span>Loom &amp; Slack</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">24/7 async feedback on designs, code &amp; pitch</p>
          </div>

          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/60 group-hover:border-emerald-200/60 transition-all duration-300">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <span>Custom Path</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">Tailored exclusively to each student’s unique idea</p>
          </div>
        </div>
      </div>

      {/* Visual Live Status Pill Widget */}
      <div className="relative pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-[#00df82] font-black text-xs flex items-center justify-center shadow-xs">
              TL
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00df82] ring-2 ring-white animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Founder On-Call Sync</div>
            <div className="text-[11px] text-slate-500">Only 10 ambitious students accepted per cohort</div>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00df82]/15 text-emerald-900 border border-emerald-300/40">
          100% 1:1 Guided
        </span>
      </div>
    </div>
  );
}

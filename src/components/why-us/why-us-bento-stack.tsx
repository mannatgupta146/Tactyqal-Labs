"use client";

import React from "react";
import { Layers, ArrowRight, Cpu, Database, CreditCard, Sparkles } from "lucide-react";

export function WhyUsBentoStack() {
  return (
    <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-9 lg:col-span-5 flex flex-col justify-between hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08),0_12px_24px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
      {/* Ambient Radial Spotlight Bloom */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-400/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Radiant Sheen */}
      <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top Header Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-bold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>02 • Production Tech</span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#059669] transition-colors">
            No-Code + AI
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          Full-Stack App with No-Code &amp; AI
        </h3>

        {/* Narrative Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Teens skip theoretical boilerplate and master modern production stacks: high-fidelity UI, scalable databases, AI copilots, and real payment integrations.
        </p>

        {/* Interactive Architecture Flow Widget */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-slate-700 shadow-2xs font-mono text-[11px] font-bold">
                01
              </div>
              <span className="text-xs font-bold text-slate-800">UI / UX Prototyping</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
              Figma 60fps
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#059669] shadow-2xs font-mono text-[11px] font-bold">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-800">AI Logic &amp; Agents</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
              OpenAI / Claude
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#059669] shadow-2xs font-mono text-[11px] font-bold">
                <CreditCard className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-800">Payments &amp; Auth</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
              Stripe Live
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Proof Tag */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
        <span className="font-semibold text-slate-900 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00df82] shrink-0" />
          100% Student Owned IP
        </span>
        <span className="font-mono text-emerald-700 font-bold">Week 6 Deploy</span>
      </div>
    </div>
  );
}

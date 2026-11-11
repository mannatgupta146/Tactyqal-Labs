"use client";

import React from "react";
import {
  TrendingUp,
  GraduationCap,
  Award,
  Mic,
  Lightbulb,
  HeartHandshake,
  DollarSign,
  CheckCircle2,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

export function WhyUsBentoCards() {
  return (
    <>
      {/* Card 03: Real Revenue Generation */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              03 • Monetization
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            Real Revenue Generation
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Students learn pricing psychology, distribution channels, and land their very first paying customers.
          </p>

          {/* Mini Stripe MRR Widget */}
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Verified Teen MRR</span>
              <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-sm">
                +148% MoM
              </span>
            </div>
            <div className="text-xl font-black text-slate-900 tracking-tight">$1,200<span className="text-xs text-slate-500 font-semibold">/mo</span></div>
            <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00df82]" />
              Stripe checkout live by Week 7
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Target Metric</span>
          <span className="text-emerald-700 font-bold">First 100 Paying Users</span>
        </div>
      </div>

      {/* Card 04: University Admission Edge */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              04 • Admissions
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            University Admission Edge
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Admissions officers review thousands of club members. A live app with active users proves real initiative and grit.
          </p>

          {/* Admission Comparative Widget */}
          <div className="space-y-1.5 p-3 rounded-2xl bg-stone-50 border border-stone-200/70 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Typical Extracurricular:</span>
              <span className="text-slate-500 line-through">School Club President</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
              <span className="text-[#059669]">Tactyqal Alumni:</span>
              <span className="text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">Live App Founder</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Target Destinations</span>
          <span className="text-emerald-700 font-bold">Ivy League &amp; Top 20</span>
        </div>
      </div>

      {/* Card 05: Proven Track Record */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              05 • Verified Alumni
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <Award className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            Proven Track Record
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Over 50+ successful teen graduates have shipped production apps, received grant funding, and secured top university seats.
          </p>

          {/* Stat Box */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">50+</div>
              <div className="text-[10px] text-slate-500 font-medium">Teen Alumni Apps Launched</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-black text-[#059669]">4.9 / 5.0</div>
              <div className="text-[10px] text-slate-500 font-medium">Parent Rating</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Completion Rate</span>
          <span className="text-emerald-700 font-bold">100% Milestone Success</span>
        </div>
      </div>

      {/* Card 06: Pitch & Public Launch */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              06 • Go-To-Market
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <Mic className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            Pitch &amp; Public Launch
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Master the art of storytelling, high-stakes investor pitch decks, and high-visibility Product Hunt community launches.
          </p>

          {/* Product Hunt Widget */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200/70 group-hover:bg-emerald-50/50 group-hover:border-emerald-200/70 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="text-base">🚀</span>
              <div>
                <div className="text-xs font-bold text-slate-900">Product Hunt Launch</div>
                <div className="text-[10px] text-slate-500">Official featured campaign</div>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
              ▲ 480+
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Deliverable</span>
          <span className="text-emerald-700 font-bold">Investor Pitch Deck</span>
        </div>
      </div>

      {/* Card 07: Startup Ideas 101 */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              07 • Ideation
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <Lightbulb className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            Startup Ideas 101
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Learn how to systematically identify high-value consumer and B2B software opportunities directly from our founder.
          </p>

          {/* Validation Steps Pill */}
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
            <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60 text-slate-700">1. Problem</div>
            <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60 text-slate-700">2. Moat</div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200/70 text-emerald-800">3. Validated</div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Framework</span>
          <span className="text-emerald-700 font-bold">Problem-Solution Fit</span>
        </div>
      </div>

      {/* Card 08: Lifelong Alumni Support */}
      <div className="group relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_10px_25px_-8px_rgba(5,150,105,0.08)] hover:-translate-y-1.5 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-default">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-[#059669] border border-emerald-200/70">
              08 • Ecosystem
            </span>
            <div className="w-8 h-8 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#059669] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-colors">
              <HeartHandshake className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug mb-2 group-hover:text-[#059669] transition-colors">
            Lifelong Alumni Support
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            Mentorship does not end at Week 8. Alumni enjoy perpetual community access, angel syndicate intros, and demo day invitations.
          </p>

          {/* Network Badges */}
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-stone-50 border border-stone-200 text-slate-700">
              Investor Intros
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-stone-50 border border-stone-200 text-slate-700">
              Demo Day Stage
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-50 border border-emerald-200/70 text-emerald-800">
              Alumni Slack
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-600">
          <span>Access</span>
          <span className="text-emerald-700 font-bold">Lifetime Membership</span>
        </div>
      </div>
    </>
  );
}

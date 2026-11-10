"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Sparkles,
  Search,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  Quote,
  Clock,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Curriculum() {
  const dispatch = useAppDispatch();

  const sprints = [
    {
      weeks: "Week 1–2",
      title: "Ideation & Market Research",
      icon: Search,
      iconColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10",
      description:
        "Brainstorm profitable and high-impact ideas. Conduct real user interviews, evaluate competitors, and establish ironclad problem-solution fit.",
      milestones: [
        "Founder problem discovery framework",
        "Competitor teardown & moat analysis",
        "15+ prospective user discovery interviews",
        "Final MVP feature prioritization spec",
      ],
    },
    {
      weeks: "Week 3–4",
      title: "Design & Prototyping",
      icon: Palette,
      iconColor: "text-violet-400",
      accentBg: "bg-violet-500/10",
      description:
        "Translate the validated concept into high-fidelity Figma screens, responsive wireframes, design tokens, and a clickable user test prototype.",
      milestones: [
        "Modern UI/UX principles & component design",
        "Clickable Figma prototype creation",
        "Usability testing with prospective users",
        "Design system tokens (colors, typography, cards)",
      ],
    },
    {
      weeks: "Week 5–6",
      title: "Full-Stack & No-Code Development",
      icon: Code2,
      iconColor: "text-indigo-400",
      accentBg: "bg-indigo-500/10",
      description:
        "Bring the prototype to life. Build the database architecture, user authentication, business logic, payment gateways, and AI agent integrations.",
      milestones: [
        "Database schema & user auth setup",
        "Modern front-end interface development",
        "Payment integration (Stripe / Razorpay)",
        "AI copilots & backend API automations",
      ],
    },
    {
      weeks: "Week 7–8",
      title: "Launch & Go-To-Market",
      icon: Rocket,
      iconColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      description:
        "Prepare the official product launch. Craft pitch decks, distribute press releases, launch publicly on Product Hunt, and acquire first paying users.",
      milestones: [
        "Product Hunt launch campaign prep",
        "Investor & university admission pitch deck",
        "First 100 organic users & feedback loops",
        "Application for youth founder grants & media",
      ],
    },
  ];

  return (
    <section id="program" className="py-24 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Structured 8-Week Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Idea to Full App in 8 Weeks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A battle-tested milestone system designed specifically for students. Every student is paired 1:1 with an expert founder-mentor.
          </p>

          {/* Key Attributes Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
              <Clock className="w-4 h-4 text-indigo-400" /> Personal 1:1 Live Sessions (1 Hr Each)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
              <UserCheck className="w-4 h-4 text-indigo-400" /> Dedicated Founder Guidance
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
              <Award className="w-4 h-4 text-indigo-400" /> College Admissions & Grants Edge
            </span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sprints.map((sprint, index) => {
            const Icon = sprint.icon;
            return (
              <div
                key={sprint.weeks}
                className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {sprint.weeks}
                    </span>
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${sprint.accentBg} ${sprint.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {sprint.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {sprint.description}
                  </p>
                </div>

                {/* Milestone Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables:
                  </div>
                  {sprint.milestones.map((m) => (
                    <div key={m} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Naval Ravikant Quote Card */}
        <div className="mt-16 relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-900/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <Quote className="w-10 h-10 text-indigo-400/40 mx-auto mb-4" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug tracking-tight">
            &ldquo;Learn to sell. Learn to build. If you can do both, you will be unstoppable.&rdquo;
          </blockquote>
          <div className="mt-4 text-sm font-semibold text-indigo-300">
            — Naval Ravikant, Entrepreneur & Investor
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => dispatch(openConsultationModal("Curriculum Quote CTA"))}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition hover:scale-105"
            >
              <span>Start Your Journey Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

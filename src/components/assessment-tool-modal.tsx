"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeAssessmentTool, openConsultationModal } from "../store/uiSlice";
import { X, Sparkles, CheckCircle2, ArrowRight, Lightbulb, BarChart3, ShieldCheck } from "lucide-react";

export default function AssessmentToolModal() {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.ui.selectedAssessmentTool);

  // States for Idea Generator
  const [selectedIndustry, setSelectedIndustry] = useState("AI & Automation");
  const [targetUser, setTargetUser] = useState("Gen-Z & Students");
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);

  // States for Fundability Quiz
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [hasWorkingPrototype, setHasWorkingPrototype] = useState("yes");
  const [customerInterviews, setCustomerInterviews] = useState("10-30");
  const [monetizationReady, setMonetizationReady] = useState("yes");

  if (!selectedTool) return null;

  const handleGenerateIdeas = () => {
    const ideas = [
      `AI-powered ${selectedIndustry} workflow tailored for ${targetUser} that automates repetitive daily tasks with zero learning curve.`,
      `A curated micro-marketplace connecting ${targetUser} with pre-vetted service providers in ${selectedIndustry} with built-in escrow.`,
      `Gamified community platform helping ${targetUser} build verified portfolio credentials in ${selectedIndustry}.`,
    ];
    setGeneratedIdeas(ideas);
  };

  const calculateFundability = () => {
    let score = 50;
    if (hasWorkingPrototype === "yes") score += 25;
    if (customerInterviews === "10-30" || customerInterviews === "30+") score += 15;
    if (monetizationReady === "yes") score += 10;
    setQuizScore(score);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100">
        <button
          onClick={() => dispatch(closeAssessmentTool())}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Founder Diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {selectedTool}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Free diagnostic tool used by 1,000+ teen founders and mentors at Tactyqal Labs.
          </p>
        </div>

        {/* Content based on tool */}
        {selectedTool.includes("Idea Generator") ? (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Industry Domain
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="EdTech & Learning">EdTech & Learning</option>
                  <option value="Climate & Food Waste">Climate & Food Waste</option>
                  <option value="Sustainable E-Commerce">Sustainable E-Commerce</option>
                  <option value="Creator Economy">Creator Economy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Target Audience
                </label>
                <select
                  value={targetUser}
                  onChange={(e) => setTargetUser(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Gen-Z & High Schoolers">Gen-Z & High Schoolers</option>
                  <option value="Local Farmers & Agriculture">Local Farmers & Agriculture</option>
                  <option value="Pet Lovers & Shelters">Pet Lovers & Shelters</option>
                  <option value="Parents & Kids">Parents & Kids</option>
                  <option value="Early Stage Founders">Early Stage Founders</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateIdeas}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-md transition"
            >
              <Lightbulb className="w-4 h-4" /> Generate Validated Startup Ideas
            </button>

            {generatedIdeas.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400">
                  Tailored Concepts for 8-Week Build:
                </h4>
                {generatedIdeas.map((idea, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">{idea}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : selectedTool.includes("Fundability") ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                1. Do you have a clickable prototype or functioning app?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasWorkingPrototype("yes")}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                    hasWorkingPrototype === "yes"
                      ? "bg-indigo-600/30 border-indigo-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  Yes (Functional / Clickable)
                </button>
                <button
                  type="button"
                  onClick={() => setHasWorkingPrototype("no")}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                    hasWorkingPrototype === "no"
                      ? "bg-indigo-600/30 border-indigo-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  No (Idea Stage Only)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                2. How many prospective users have you interviewed?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["0-5", "10-30", "30+"].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setCustomerInterviews(tier)}
                    className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                      customerInterviews === tier
                        ? "bg-indigo-600/30 border-indigo-500 text-white"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    {tier} interviews
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                3. Can this startup charge users or sponsors immediately?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMonetizationReady("yes")}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                    monetizationReady === "yes"
                      ? "bg-indigo-600/30 border-indigo-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  Yes (Clear Revenue Model)
                </button>
                <button
                  type="button"
                  onClick={() => setMonetizationReady("no")}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                    monetizationReady === "no"
                      ? "bg-indigo-600/30 border-indigo-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  Not Yet (Free / Ads)
                </button>
              </div>
            </div>

            <button
              onClick={calculateFundability}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md transition"
            >
              <BarChart3 className="w-4 h-4" /> Calculate Fundability & Grant Readiness
            </button>

            {quizScore !== null && (
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 text-center">
                <div className="text-4xl font-extrabold text-emerald-400">{quizScore} / 100</div>
                <div className="text-sm font-semibold text-white mt-1">
                  {quizScore >= 80 ? "High Fundability & Grant Potential" : "Needs Rapid Prototype & Validation"}
                </div>
                <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                  Our 8-week 1:1 mentorship program equips teens to build functional apps, launch on Product Hunt, and qualify for young founder grants.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-base">Tactyqal Founder Diagnostic Checklist</h4>
                <p className="text-sm text-slate-300 mt-1">
                  In our 1:1 sessions, every student uses this assessment framework to evaluate their competitive advantage, moat, and target unit economics before writing code.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300 pl-4 list-disc marker:text-indigo-400">
              <li>Identifies high-margin monetization hooks early</li>
              <li>Exposes customer acquisition blindspots</li>
              <li>Prepares students for college admissions essays & pitch competitions</li>
            </ul>
          </div>
        )}

        {/* Modal Footer CTA */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Want us to analyze your idea in depth?
          </span>
          <button
            onClick={() => {
              dispatch(closeAssessmentTool());
              dispatch(openConsultationModal("Startup Assessment & Idea Review"));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition"
          >
            Review With A Mentor 1:1 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { BarChart3 } from "lucide-react";

export default function FundabilityQuizView() {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [hasWorkingPrototype, setHasWorkingPrototype] = useState("yes");
  const [customerInterviews, setCustomerInterviews] = useState("10-30");
  const [monetizationReady, setMonetizationReady] = useState("yes");

  const calculateFundability = () => {
    let score = 50;
    if (hasWorkingPrototype === "yes") score += 25;
    if (customerInterviews === "10-30" || customerInterviews === "30+") score += 15;
    if (monetizationReady === "yes") score += 10;
    setQuizScore(score);
  };

  return (
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
                ? "bg-emerald-500/20 border-[#00df82] text-white font-bold"
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
                ? "bg-emerald-500/20 border-[#00df82] text-white font-bold"
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
                  ? "bg-emerald-500/20 border-[#00df82] text-white font-bold"
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
                ? "bg-emerald-500/20 border-[#00df82] text-white font-bold"
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
                ? "bg-emerald-500/20 border-[#00df82] text-white font-bold"
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
  );
}

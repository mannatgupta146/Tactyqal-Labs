"use client";

import React, { useState } from "react";
import { Lightbulb, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";

const IDEA_DATABASE: Record<string, string[]> = {
  "AI & Automation": [
    "StudySync AI: Real-time collaborative note-taking copilot that converts lecture recordings into spaced-repetition flashcards with peer leaderboards.",
    "SkillForge: Micro-internship bounty marketplace connecting high school developers with pre-seed startups for paid weekend sprint tickets.",
    "PromptCraft Hub: Interactive prompt engineering sandbox where students build, test, and share specialized AI agent micro-tools.",
  ],
  "EdTech & Learning": [
    "PeerPrep: Gamified peer-to-peer AP and SAT mock exam battlegrounds with instant step-by-step AI error breakdown.",
    "CurioLabs: Browser-based interactive physics & chemistry experiment simulator for high schools requiring zero expensive lab hardware.",
    "TeenTutor Network: Verified peer tutoring platform with automated escrow payouts and university admission verified hours.",
  ],
  "Climate & Food Waste": [
    "BiteBack: Hyper-local surplus food distribution network connecting neighborhood bakeries with youth community volunteers.",
    "EcoTransit: Micro-incentive transit app that rewards students with local cafe vouchers for biking and carpooling.",
    "UpCycle Hub: Zero-waste creative marketplace where teenagers sell upcycled apparel and recycled plastic accessories.",
  ],
  "Sustainable E-Commerce": [
    "ThriftLoop: AI-assisted vintage fashion reselling assistant with automated studio background removal and dynamic pricing.",
    "CampusSwap: Secure, verified student-to-student marketplace for textbooks, dorm essentials, and electronics.",
    "ArtisanYouth: Curated direct-to-consumer storefront platform for teen creators and handcrafted lifestyle goods.",
  ],
  "Creator Economy": [
    "PodCut AI: Autonomous video clip repackager that turns long-form student podcasts into high-engagement vertical reels.",
    "SponsorKit: Automated media kit builder and brand collaboration manager built specifically for teen content creators.",
    "CollabHouse Digital: Decentralized creator collaboration network matching teen designers, animators, and music producers.",
  ],
};

export default function IdeaGeneratorView() {
  const [selectedIndustry, setSelectedIndustry] = useState("AI & Automation");
  const [targetUser, setTargetUser] = useState("Gen-Z & High Schoolers");
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerateIdeas = () => {
    const ideas = IDEA_DATABASE[selectedIndustry] || [
      `AI-powered ${selectedIndustry} workflow tailored for ${targetUser} that automates repetitive daily tasks with zero learning curve.`,
      `A curated micro-marketplace connecting ${targetUser} with pre-vetted opportunities in ${selectedIndustry} with built-in escrow.`,
      `Gamified community platform helping ${targetUser} build verified portfolio credentials in ${selectedIndustry}.`,
    ];
    setGeneratedIdeas(ideas);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Input Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Industry Domain
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#00df82] focus:bg-white transition"
          >
            <option value="AI & Automation">AI &amp; Automation</option>
            <option value="EdTech & Learning">EdTech &amp; Learning</option>
            <option value="Climate & Food Waste">Climate &amp; Food Waste</option>
            <option value="Sustainable E-Commerce">Sustainable E-Commerce</option>
            <option value="Creator Economy">Creator Economy</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Target Audience
          </label>
          <select
            value={targetUser}
            onChange={(e) => setTargetUser(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#00df82] focus:bg-white transition"
          >
            <option value="Gen-Z & High Schoolers">Gen-Z &amp; High Schoolers</option>
            <option value="Local Farmers & Agriculture">Local Farmers &amp; Agriculture</option>
            <option value="Pet Lovers & Shelters">Pet Lovers &amp; Shelters</option>
            <option value="Parents & Kids">Parents &amp; Kids</option>
            <option value="Early Stage Founders">Early Stage Founders</option>
          </select>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={handleGenerateIdeas}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-95"
      >
        <Lightbulb className="w-4 h-4" />
        <span>Generate Validated Startup Ideas</span>
      </button>

      {/* Generated Ideas Output List */}
      {generatedIdeas.length > 0 && (
        <div className="space-y-2.5 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900">
            <span className="text-[#059669]">✦ 3 Tailored 8-Week Concepts</span>
            <span className="text-slate-400 font-normal text-[11px]">Click copy to save</span>
          </div>

          {generatedIdeas.map((idea, index) => (
            <div
              key={index}
              className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex items-start justify-between gap-3 shadow-2xs group hover:bg-white hover:border-emerald-200 transition-all"
            >
              <div className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200/80 font-bold text-[10px] shrink-0 mt-0.5">
                  0{index + 1}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                  {idea}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(idea, index)}
                aria-label="Copy idea"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition shrink-0"
              >
                {copiedIndex === index ? (
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

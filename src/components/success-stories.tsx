"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Sparkles,
  TrendingUp,
  Award,
  ExternalLink,
  Bot,
  ShoppingBag,
  BookOpen,
  Heart,
  Music,
  Languages,
  CheckCircle2,
  X,
} from "lucide-react";

interface AppStory {
  id: string;
  name: string;
  category: string;
  age: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  tags: string[];
  fullStory: string;
}

const stories: AppStory[] = [
  {
    id: "krishidrishti",
    name: "KrishiDrishti",
    category: "AI & ML",
    age: "Built by a 15-year-old",
    description: "AI-powered soil analysis & crop recommendation app that can impact millions of local farmers in India.",
    metric: "500+ Farmers",
    metricLabel: "Active In Initial Pilot",
    icon: Bot,
    iconColor: "text-emerald-400",
    bgColor: "from-emerald-500/10 to-teal-500/5",
    tags: ["AI Vision", "Agritech", "Social Impact"],
    fullStory:
      "A 15-year-old student observed the severe struggles farmers faced with declining crop yields. In 8 weeks with Tactyqal Labs, they integrated computer vision models with real-time soil data to build KrishiDrishti. The app provides instant fertilizer recommendations on basic mobile phones, drastically reducing costs.",
  },
  {
    id: "elenor",
    name: "Elenor Vegan Handbags",
    category: "E-Commerce",
    age: "Built by a 16-year-old",
    description: "Corporate gifting platform that sells cruelty-free vegan handbags, started by a 16 year old.",
    metric: "INR 9,000",
    metricLabel: "Generated In Week 1",
    icon: ShoppingBag,
    iconColor: "text-pink-400",
    bgColor: "from-pink-500/10 to-rose-500/5",
    tags: ["E-Commerce", "B2B Gifting", "Cruelty-Free"],
    fullStory:
      "Passionate about ethical fashion, this 16-year-old founder built an e-commerce platform targeted at corporate gifting. In their very first week after launch, they closed orders worth INR 9,000 and established partnerships with three corporate gifting managers.",
  },
  {
    id: "one-last-chapter",
    name: "One Last Chapter",
    category: "EdTech",
    age: "Built by a 13-year-old",
    description: "Curated book subscription service for kids that transforms reading habits into an engaging monthly ritual.",
    metric: "INR 100,000/mo",
    metricLabel: "Recurring Monthly Revenue",
    icon: BookOpen,
    iconColor: "text-amber-400",
    bgColor: "from-amber-500/10 to-orange-500/5",
    tags: ["Subscription", "Kids Books", "Recurring MRR"],
    fullStory:
      "At just 13 years old, the founder designed an automated subscription portal for children's books. What started as an 8-week MVP scaled to over 100 active subscribers, generating INR 100,000 every single month in predictable revenue.",
  },
  {
    id: "paws-of-promise",
    name: "Paws of Promise",
    category: "Social Impact",
    age: "Built by a 14-year-old",
    description: "App for virtual pet adoption that connects animal lovers directly with verified rescue pets from local shelters.",
    metric: "50+ Pets",
    metricLabel: "Shelter Animals Adopted",
    icon: Heart,
    iconColor: "text-rose-400",
    bgColor: "from-rose-500/10 to-red-500/5",
    tags: ["Pet Adoption", "Shelters", "Community"],
    fullStory:
      "Paws of Promise gamifies pet adoption and donation transparency. Local animal shelters upload profiles of rescues, while users can virtually sponsor and track a pet before completing full in-person adoption.",
  },
  {
    id: "audionova",
    name: "AudioNova",
    category: "AI & ML",
    age: "Built by a 17-year-old",
    description: "AI-driven music and audio production company delivering royalty-free soundtracks for indie creators and games.",
    metric: "12,000+ Tracks",
    metricLabel: "Generated & Streamed",
    icon: Music,
    iconColor: "text-indigo-400",
    bgColor: "from-indigo-500/10 to-violet-500/5",
    tags: ["Generative AI", "Audio Engineering", "SaaS"],
    fullStory:
      "A high school senior passionate about sound design built AudioNova to synthesize custom mood music for indie game devs and YouTubers. The platform went viral on TikTok and attracted commercial licensing requests.",
  },
  {
    id: "converza",
    name: "Converza - Spanish Learning App",
    category: "EdTech",
    age: "Built by a 15-year-old",
    description: "Language learning app featuring Luna, the friendly AI language learning bot that conducts realistic conversational practice.",
    metric: "Top 5",
    metricLabel: "Product Hunt Daily Ranking",
    icon: Languages,
    iconColor: "text-cyan-400",
    bgColor: "from-cyan-500/10 to-blue-500/5",
    tags: ["AI Tutor", "Product Hunt", "Language"],
    fullStory:
      "Traditional language apps focus on memorizing flashcards. Converza pairs students with 'Luna', an AI avatar that adapts vocabulary difficulty dynamically. It ranked in the top 5 on Product Hunt on launch day.",
  },
];

export default function SuccessStories() {
  const dispatch = useAppDispatch();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStoryModal, setActiveStoryModal] = useState<AppStory | null>(null);

  const categories = ["All", "AI & ML", "E-Commerce", "Social Impact", "EdTech"];

  const filteredStories =
    activeFilter === "All"
      ? stories
      : stories.filter((s) => s.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="success" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Real Students. Real Apps. Real Success.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See what teenagers aged 13–17 built in just 8 weeks through our 1:1 mentorship program. From idea to launch and revenue.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeFilter === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story) => {
            const Icon = story.icon;
            return (
              <div
                key={story.id}
                onClick={() => setActiveStoryModal(story)}
                className="group relative cursor-pointer rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${story.bgColor} border border-white/5 ${story.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700/60">
                      {story.age}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                    {story.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {story.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                </div>

                {/* Bottom Highlight Metric Chip */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-emerald-400">
                      {story.metric}
                    </div>
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      {story.metricLabel}
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Story →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Your teen could be our next spotlight story.</h3>
            <p className="text-sm text-slate-300 mt-1">
              No technical or coding background needed. We guide them step-by-step from zero to launch.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal("Success Stories Banner"))}
            className="shrink-0 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition hover:scale-105"
          >
            Schedule Free Strategy Call
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {activeStoryModal.age}
              </span>
              <span className="text-xs text-slate-400 font-medium">{activeStoryModal.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeStoryModal.name}</h3>

            <div className="mt-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase text-slate-400 font-semibold">Key Achievement</div>
                <div className="text-xl font-extrabold text-emerald-400">{activeStoryModal.metric}</div>
              </div>
              <div className="text-xs text-slate-300 font-medium">{activeStoryModal.metricLabel}</div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-400 mb-2">The Journey</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{activeStoryModal.fullStory}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeStoryModal.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveStoryModal(null)}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const storyName = activeStoryModal.name;
                  setActiveStoryModal(null);
                  dispatch(openConsultationModal(`Interested in building like ${storyName}`));
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md"
              >
                Build An App Like This
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

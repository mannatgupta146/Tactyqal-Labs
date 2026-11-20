"use client";

import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import successStoriesRaw from "../../data/success-stories.json";
import CaseStudyModal from "../modals/case-study-modal";
import StoryCard from "./story-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AppStory {
  id: string;
  name: string;
  description: string;
  image: string;
}

const successStories: AppStory[] = successStoriesRaw;

export default function SuccessStories() {
  const dispatch = useAppDispatch();
  const [activeStoryModal, setActiveStoryModal] = useState<AppStory | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Header entrance when header scrolls into view
      gsap.from(".success-header", {
        scrollTrigger: {
          trigger: ".success-header",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
      });

      // 2. 3D Perspective Tilt & Blur-to-Sharp Cascade triggers strictly when CARDS scroll into view!
      gsap.fromTo(
        ".story-card-wrapper",
        {
          opacity: 0,
          y: 50,
          scale: 0.94,
          filter: "blur(6px)",
        },
        {
          scrollTrigger: {
            trigger: ".story-card-grid",
            start: "top 80%", // Only fires when user scrolls down and cards enter the viewport
            once: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(".story-card-wrapper", { clearProps: "filter,opacity,transform" });
          },
        }
      );

      // 3. Bottom banner entrance
      gsap.from(".success-bottom-banner", {
        scrollTrigger: {
          trigger: ".success-bottom-banner",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="success" className="py-20 bg-white relative border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="success-header text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
            Real Proof • Real Students
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Students. Real Apps. Real Success.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            See what teenagers aged 13–17 built in just 8 weeks through our 1:1 mentorship program. From idea to launch and revenue.
          </p>
        </div>

        {/* 6 Real Apps 3D Grid */}
        <div className="story-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {successStories.map((story, idx) => (
            <div key={story.id} className="story-card-wrapper flex flex-col h-full">
              <StoryCard
                story={story}
                index={idx}
                onSelect={(selected) => setActiveStoryModal(selected)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="success-bottom-banner mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50/50 via-[#FAFDF9] to-[#FAF8F5] border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xs">
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900">Your teen could be our next spotlight story.</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              No technical or coding background needed. We guide them step-by-step from zero to a live, published application.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal("Success Stories Banner"))}
            className="shrink-0 px-7 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition hover:scale-105 active:scale-95"
          >
            Schedule Free Strategy Call
          </button>
        </div>
      </div>

      <CaseStudyModal story={activeStoryModal} onClose={() => setActiveStoryModal(null)} />
    </section>
  );
}

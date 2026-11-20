"use client";

import React, { useRef } from "react";
import rawSprints from "../../data/curriculum-data.json";
import SprintCard, { CurriculumSprint } from "./sprint-card";
import CurriculumHeader from "./curriculum-header";
import CurriculumQuoteCard from "./curriculum-quote-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search, Palette, Code2, Rocket, type LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sprintIcons: Record<string, LucideIcon> = { Search, Palette, Code2, Rocket };

const curriculumSprints: CurriculumSprint[] = rawSprints.map((s) => ({
  ...s,
  icon: sprintIcons[s.iconName] || Rocket,
}));

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Header entrance when header scrolls into view
      gsap.from(".curriculum-header", {
        scrollTrigger: {
          trigger: ".curriculum-header",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      });

      // 2. Desktop Cards: Triggers strictly when the CARDS reach the viewport!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".curriculum-cards-container",
          start: "top 75%", // Only fires when user reaches the cards
          once: true,
        },
        onComplete: () => {
          gsap.set(".sprint-col", { clearProps: "x,y,scale,opacity" });
        },
      });

      // Lead-in line segment
      tl.fromTo(
        ".curriculum-line-0",
        { strokeDashoffset: 150, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.3, ease: "power1.inOut" }
      );

      // Balanced, natural Left-to-Right flow (~2s total)
      [0, 1, 2, 3].forEach((idx) => {
        tl.fromTo(
          `.sprint-col-${idx}`,
          { x: -32, y: 12, scale: 0.96, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" },
          idx === 0 ? "-=0.1" : "-=0.22"
        );

        if (idx < 3) {
          tl.fromTo(
            `.curriculum-line-${idx + 1}`,
            { strokeDashoffset: 350, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 0.4, ease: "power1.inOut" },
            "-=0.2"
          );
        }
      });

      // 3. Mobile timeline triggers when mobile list enters viewport
      gsap.fromTo(
        ".sprint-mobile-item",
        { x: -35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".curriculum-cards-mobile",
            start: "top 80%",
            once: true,
          },
          x: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".sprint-mobile-item", { clearProps: "x,opacity" });
          },
        }
      );

      // 4. Quote Card entrance
      gsap.from(".curriculum-quote", {
        scrollTrigger: {
          trigger: ".curriculum-quote",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      });

      // Continuous subtle ambient flow through the line
      gsap.to(".curriculum-line-0, .curriculum-line-1, .curriculum-line-2, .curriculum-line-3", {
        strokeDashoffset: "-=30",
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="program" className="py-20 bg-[#FAF8F5] relative border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CurriculumHeader />

        {/* Desktop Stepped Timeline: Left-to-Right Animated Path */}
        <div className="curriculum-cards-container hidden lg:block relative max-w-6xl mx-auto my-8">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 340"
            preserveAspectRatio="none"
          >
            <path className="curriculum-line-0" d="M 40 16 H 125" fill="none" stroke="#00df82" strokeWidth="2.5" strokeDasharray="6 4" />
            <path className="curriculum-line-1" d="M 125 16 H 250 V 64 H 375" fill="none" stroke="#00df82" strokeWidth="2.5" strokeDasharray="6 4" />
            <path className="curriculum-line-2" d="M 375 64 H 500 V 16 H 625" fill="none" stroke="#00df82" strokeWidth="2.5" strokeDasharray="6 4" />
            <path className="curriculum-line-3" d="M 625 16 H 750 V 64 H 960" fill="none" stroke="#00df82" strokeWidth="2.5" strokeDasharray="6 4" />
          </svg>

          {/* 4 Cards in 4 columns: One UP (pt-0), One DOWN (pt-12) */}
          <div className="grid grid-cols-4 gap-6 items-start relative z-10">
            {curriculumSprints.map((sprint, idx) => {
              const isDown = idx % 2 === 1;
              return (
                <div
                  key={sprint.weeks}
                  className={`sprint-col sprint-col-${idx} group cursor-pointer ${isDown ? "pt-12" : "pt-0"}`}
                >
                  <div className="step-badge w-8 h-8 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-xs flex items-center justify-center shadow-xs mx-auto mb-3 group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                    {`0${idx + 1}`}
                  </div>
                  <SprintCard sprint={sprint} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (< lg) */}
        <div className="curriculum-cards-mobile lg:hidden relative pl-6 space-y-5 my-8 border-l-2 border-emerald-300 ml-3">
          {curriculumSprints.map((sprint, idx) => (
            <div key={sprint.weeks} className="sprint-mobile-item group relative">
              <div className="absolute -left-[35px] top-4 w-7 h-7 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-[11px] flex items-center justify-center shadow-xs group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-all">
                0{idx + 1}
              </div>
              <SprintCard sprint={sprint} />
            </div>
          ))}
        </div>

        <CurriculumQuoteCard />
      </div>
    </section>
  );
}

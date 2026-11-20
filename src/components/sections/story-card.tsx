"use client";

import React, { useRef, useState } from "react";
import { AppStory } from "./success-stories";
import { ExternalLink } from "lucide-react";

interface StoryCardProps {
  story: AppStory;
  onSelect: (story: AppStory) => void;
  index: number;
}

export default function StoryCard({ story, onSelect }: StoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Calculate rotation (-8deg to +8deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const subdomain = story.name.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(story)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)",
        transition: isHovered
          ? "transform 0.12s ease-out, box-shadow 0.25s ease-out"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out",
      }}
      className="story-card group cursor-pointer rounded-2xl bg-[#FAF8F5] border border-stone-200/90 p-4 sm:p-5 shadow-xs hover:border-emerald-400/80 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/15 flex flex-col justify-between relative overflow-hidden will-change-transform h-full flex-1"
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 223, 130, 0.15), transparent 70%)`,
        }}
      />

      {/* Top Luminous Neon Bar */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header Info */}
      <div className="text-center min-h-[58px] sm:min-h-[64px] flex flex-col justify-start relative z-10">
        <div className="flex items-center justify-center gap-1.5">
          <h3 className="text-base sm:text-lg font-extrabold text-[#059669] group-hover:text-[#047857] transition-colors leading-snug">
            {story.name}
          </h3>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-600/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
        </div>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-normal line-clamp-2">
          {story.description}
        </p>
      </div>

      {/* Real App Screenshot Frame with Realistic macOS Browser Shell */}
      <div className="mt-3.5 rounded-xl overflow-hidden border border-stone-200/90 bg-stone-100 shadow-xs relative z-10 group-hover:border-stone-300 transition-colors">
        {/* macOS Browser Chrome Bar */}
        <div className="bg-stone-100 border-b border-stone-200/80 px-2.5 py-1.5 flex items-center justify-between">
          {/* Traffic Light Dots with Interactive Color Glow on Hover */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-[#ff5f56] transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-[#ffbd2e] transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-[#27c93f] transition-colors duration-300" />
          </div>
          <span className="text-[10px] text-slate-400 group-hover:text-emerald-700 font-mono truncate transition-colors">
            {subdomain}.tactyqal.app
          </span>
          <span className="text-[9px] uppercase font-bold text-slate-400 group-hover:text-emerald-600 bg-white/70 px-1.5 py-0.5 rounded border border-stone-200/60 transition-colors">
            Live
          </span>
        </div>

        {/* Screenshot Image with Parallax Depth & Soft Zoom */}
        <div className="relative w-full overflow-hidden bg-white flex items-center justify-center">
          <img
            src={story.image}
            alt={story.name}
            className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Quick Hover Overlay: "Click to View Case Study" */}
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition-transform">
              <span>View Case Study</span>
              <span className="text-emerald-600">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";
import testimonialsList from "../../data/testimonials-data.json";
import TestimonialCard, { TestimonialItem } from "./testimonial-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials: TestimonialItem[] = testimonialsList;

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useGSAP(
    () => {
      // Unique Elastic Card Deal & Star Sparkle Cascade Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 80%", // Fires strictly when reviews enter user's viewport
          once: true,
        },
        onComplete: () => {
          // Clear props so CSS hover & spotlight focus function with zero friction
          gsap.set(".testimonial-card, .star-icon", {
            clearProps: "transform,opacity",
          });
        },
      });

      // 1. Header entrance
      tl.from(".testimonials-header", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        ease: "power2.out",
      });

      // 2. Playful Elastic "Card Deal": Alternating angles snap into crisp alignment
      testimonials.forEach((_, idx) => {
        const tiltAngle = idx % 2 === 0 ? -3.5 : 3.5;
        tl.fromTo(
          `.testimonial-card-${idx}`,
          {
            opacity: 0,
            y: 50,
            rotate: tiltAngle,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          idx === 0 ? "-=0.2" : "-=0.6"
        );
      });

      // 3. Golden Star Wave: 5 stars sparkle sequentially across all cards
      tl.fromTo(
        ".star-icon",
        { scale: 0.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.025,
          duration: 0.35,
          ease: "back.out(2.2)",
        },
        "-=0.7"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="reviews" className="py-24 bg-white relative border-t border-stone-200 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="testimonials-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
            <span>Student Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback directly from young founders who moved from an abstract idea to a functional application with Tactyqal Labs.
          </p>
        </div>

        {/* Testimonials Grid with Spotlight Focus Dimming */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((r, idx) => (
            <TestimonialCard
              key={r.name}
              testimonial={r}
              cardIndex={idx}
              isHovered={hoveredIdx === idx}
              isAnyHovered={hoveredIdx !== null}
              onHover={() => setHoveredIdx(idx)}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import ContactInfoCards from "./contact-info-cards";
import ContactBookingForm from "./contact-booking-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#FDFCF7] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered matching tactyqal.com */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Start Your Teen&apos;s Success Story?
          </h2>
        </div>

        {/* 2-Column Grid: Contact Us & Book a Free Appointment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <ContactInfoCards />
          <ContactBookingForm />
        </div>
      </div>
    </section>
  );
}

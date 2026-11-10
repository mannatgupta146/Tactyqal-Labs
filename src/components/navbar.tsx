"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Rocket,
  Menu,
  X,
  Phone,
  Sparkles,
  ArrowRight,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Success Stories", href: "/#success" },
    { label: "8-Week Program", href: "/#program" },
    { label: "Why Us", href: "/#why" },
    { label: "Free Tools", href: "/#tools" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-black/40"
          : "bg-slate-950/30 backdrop-blur-sm py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition duration-200">
            <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <div className="absolute -inset-1 rounded-2xl bg-indigo-500/20 blur-sm -z-10 group-hover:opacity-100 opacity-60 transition" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              Tactyqal<span className="text-indigo-400">Labs</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
              Teen Builders Incubator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Admin CMS Shortcut */}
          <Link
            href="/admin/blog"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl text-slate-300 bg-slate-900/80 border border-slate-800 hover:text-white hover:border-slate-700 transition"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />
            <span>Admin CMS</span>
          </Link>

          {/* Quick Phone */}
          <a
            href="tel:+919804772106"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-indigo-300 transition px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-medium">+91-98047-72106</span>
          </a>

          {/* Consultation CTA */}
          <button
            onClick={() => dispatch(openConsultationModal("Navbar CTA"))}
            className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Free Call</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => dispatch(openConsultationModal("Mobile Header"))}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold"
          >
            Book Call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <Link
              href="/admin/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200"
            >
              <span className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" /> Blog Admin CMS
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>

            <a
              href="tel:+919804772106"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
            >
              <Phone className="w-4 h-4 text-indigo-400" /> +91-98047-72106
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(openConsultationModal("Mobile Drawer"));
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book Free 30-Min Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

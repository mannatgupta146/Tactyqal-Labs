import {
  UserCheck,
  Layers,
  Award,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  Mic,
  Lightbulb,
} from "lucide-react";

export interface WhyUsReason {
  title: string;
  description: string;
  icon: any;
  iconColor: string;
  bgGradient: string;
}

export const whyUsReasons: WhyUsReason[] = [
  {
    title: "1:1 Personalized Mentoring",
    description: "Every student gets dedicated, expert guidance from an experienced founder. Zero generic group classes.",
    icon: UserCheck,
    iconColor: "text-[#00df82]",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Full Stack App with No-Code & AI",
    description: "Build production-grade real applications using modern no-code platforms, AI APIs, and agile workflows.",
    icon: Layers,
    iconColor: "text-cyan-400",
    bgGradient: "from-cyan-500/10 to-cyan-500/5",
  },
  {
    title: "Proven Track Record",
    description: "50+ successful teen alumni, verified MRR revenue, media features, and Ivy League / Top 20 admits.",
    icon: Award,
    iconColor: "text-[#00df82]",
    bgGradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    title: "University Admission Edge",
    description: "Stand out dramatically in college applications with tangible, published apps rather than theoretical clubs.",
    icon: GraduationCap,
    iconColor: "text-teal-400",
    bgGradient: "from-teal-500/10 to-emerald-500/5",
  },
  {
    title: "Real Revenue Generation",
    description: "Students learn how to price, market, and monetize their software, turning ideas into cash-flow businesses.",
    icon: TrendingUp,
    iconColor: "text-amber-400",
    bgGradient: "from-amber-500/10 to-amber-500/5",
  },
  {
    title: "Lifelong Alumni Support",
    description: "Mentorship does not end at Week 8. Alumni enjoy ongoing investor intros, demo days, and masterclasses.",
    icon: HeartHandshake,
    iconColor: "text-emerald-400",
    bgGradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    title: "Pitch & Presentation Skills",
    description: "Master the art of storytelling, high-stakes investor pitching, and high-visibility Product Hunt launches.",
    icon: Mic,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Startup Ideas 101",
    description: "Learn how to systematically identify and validate profitable startup opportunities directly from our founder.",
    icon: Lightbulb,
    iconColor: "text-yellow-400",
    bgGradient: "from-yellow-500/10 to-yellow-500/5",
  },
];

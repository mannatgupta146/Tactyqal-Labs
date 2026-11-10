import { Search, Palette, Code2, Rocket } from "lucide-react";

export interface CurriculumSprint {
  weeks: string;
  title: string;
  icon: any;
  iconColor: string;
  accentBg: string;
  description: string;
  milestones: string[];
}

export const curriculumSprints: CurriculumSprint[] = [
  {
    weeks: "Week 1–2",
    title: "Ideation & Market Research",
    icon: Search,
    iconColor: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    description:
      "Brainstorm profitable and high-impact ideas. Conduct real user interviews, evaluate competitors, and establish ironclad problem-solution fit.",
    milestones: [
      "Founder problem discovery framework",
      "Competitor teardown & moat analysis",
      "15+ prospective user discovery interviews",
      "Final MVP feature prioritization spec",
    ],
  },
  {
    weeks: "Week 3–4",
    title: "Design & Prototyping",
    icon: Palette,
    iconColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    description:
      "Translate the validated concept into high-fidelity Figma screens, responsive wireframes, design tokens, and a clickable user test prototype.",
    milestones: [
      "Modern UI/UX principles & component design",
      "Clickable Figma prototype creation",
      "Usability testing with prospective users",
      "Design system tokens (colors, typography, cards)",
    ],
  },
  {
    weeks: "Week 5–6",
    title: "Full-Stack & No-Code Development",
    icon: Code2,
    iconColor: "text-teal-400",
    accentBg: "bg-teal-500/10",
    description:
      "Bring the prototype to life. Build the database architecture, user authentication, business logic, payment gateways, and AI agent integrations.",
    milestones: [
      "Database schema & user auth setup",
      "Modern front-end interface development",
      "Payment integration (Stripe / Razorpay)",
      "AI copilots & backend API automations",
    ],
  },
  {
    weeks: "Week 7–8",
    title: "Launch & Go-To-Market",
    icon: Rocket,
    iconColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    description:
      "Prepare the official product launch. Craft pitch decks, distribute press releases, launch publicly on Product Hunt, and acquire first paying users.",
    milestones: [
      "Product Hunt launch campaign prep",
      "Investor & university admission pitch deck",
      "First 100 organic users & feedback loops",
      "Application for youth founder grants & media",
    ],
  },
];

import {
  Lightbulb,
  DollarSign,
  Users2,
  FileText,
  Trophy,
  HeartHandshake,
  Target,
  Layout,
} from "lucide-react";

export interface AssessmentToolItem {
  title: string;
  tagline: string;
  icon: any;
  iconColor: string;
  category: string;
  interactive: boolean;
}

export const assessmentToolsList: AssessmentToolItem[] = [
  {
    title: "Startup Idea Generator",
    tagline: "Generate validated startup concepts based on your domain and target user.",
    icon: Lightbulb,
    iconColor: "text-amber-400",
    category: "Ideation",
    interactive: true,
  },
  {
    title: "Fundability Assessment",
    tagline: "Score your startup's readiness for angel funding, grants, and accelerators.",
    icon: DollarSign,
    iconColor: "text-emerald-400",
    category: "Funding",
    interactive: true,
  },
  {
    title: "Team Evaluation Tool",
    tagline: "Audit your founding team's skill distribution and uncover critical skill gaps.",
    icon: Users2,
    iconColor: "text-cyan-400",
    category: "Team",
    interactive: false,
  },
  {
    title: "Pitch Deck Analyzer",
    tagline: "Evaluate your 10-slide deck against standard VC and judge evaluation criteria.",
    icon: FileText,
    iconColor: "text-[#00df82]",
    category: "Storytelling",
    interactive: false,
  },
  {
    title: "Top 10 Traits For Business Success",
    tagline: "Benchmark your founder mindset, resilience score, and execution velocity.",
    icon: Trophy,
    iconColor: "text-yellow-400",
    category: "Mindset",
    interactive: false,
  },
  {
    title: "Cofounder Compatibility Test",
    tagline: "Assess values alignment, equity distribution expectations, and work ethics.",
    icon: HeartHandshake,
    iconColor: "text-emerald-400",
    category: "Partnership",
    interactive: false,
  },
  {
    title: "Problem-Solution Fit",
    tagline: "Confirm whether customers genuinely care about the problem you are solving.",
    icon: Target,
    iconColor: "text-amber-400",
    category: "Validation",
    interactive: false,
  },
  {
    title: "Website Landing Page Assessment",
    tagline: "Audit conversion rate friction, copy clarity, and user action triggers.",
    icon: Layout,
    iconColor: "text-teal-400",
    category: "Growth",
    interactive: false,
  },
];

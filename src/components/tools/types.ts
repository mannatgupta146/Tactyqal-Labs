import {
  Lightbulb,
  DollarSign,
  Users2,
  FileText,
  Trophy,
  HeartHandshake,
  Target,
  Layout,
  type LucideIcon,
} from "lucide-react";
import rawData from "../../data/assessment-tools-data.json";

export interface AssessmentToolItem {
  title: string;
  tagline: string;
  icon: LucideIcon;
  iconColor: string;
  category: string;
  interactive: boolean;
  timeEstimate: string;
  targetOutcome: string;
  keyChecks: [string, string, string, string];
  samplePreview: {
    label: string;
    badge: string;
    details: string;
  };
}

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  DollarSign,
  Users2,
  FileText,
  Trophy,
  HeartHandshake,
  Target,
  Layout,
};

export const assessmentToolsList: AssessmentToolItem[] = rawData.map((item) => ({
  title: item.title,
  tagline: item.tagline,
  icon: iconMap[item.iconName] || Lightbulb,
  iconColor: item.iconColor,
  category: item.category,
  interactive: item.interactive,
  timeEstimate: item.timeEstimate,
  targetOutcome: item.targetOutcome,
  keyChecks: item.keyChecks as [string, string, string, string],
  samplePreview: item.samplePreview,
}));

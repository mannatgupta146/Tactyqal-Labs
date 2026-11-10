import { Bot, ShoppingBag, BookOpen, Heart, Music, Languages } from "lucide-react";

export interface AppStory {
  id: string;
  name: string;
  category: string;
  age: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  tags: string[];
  fullStory: string;
}

export const successStories: AppStory[] = [
  {
    id: "krishidrishti",
    name: "KrishiDrishti",
    category: "AI & ML",
    age: "Built by a 15-year-old",
    description: "AI-powered soil analysis & crop recommendation app that can impact millions of local farmers in India.",
    metric: "500+ Farmers",
    metricLabel: "Active In Initial Pilot",
    icon: Bot,
    iconColor: "text-emerald-400",
    bgColor: "from-emerald-500/10 to-teal-500/5",
    tags: ["AI Vision", "Agritech", "Social Impact"],
    fullStory:
      "A 15-year-old student observed the severe struggles farmers faced with declining crop yields. In 8 weeks with Tactyqal Labs, they integrated computer vision models with real-time soil data to build KrishiDrishti. The app provides instant fertilizer recommendations on basic mobile phones, drastically reducing costs.",
  },
  {
    id: "elenor",
    name: "Elenor Vegan Handbags",
    category: "E-Commerce",
    age: "Built by a 16-year-old",
    description: "Corporate gifting platform that sells cruelty-free vegan handbags, started by a 16 year old.",
    metric: "INR 9,000",
    metricLabel: "Generated In Week 1",
    icon: ShoppingBag,
    iconColor: "text-pink-400",
    bgColor: "from-pink-500/10 to-rose-500/5",
    tags: ["E-Commerce", "B2B Gifting", "Cruelty-Free"],
    fullStory:
      "Passionate about ethical fashion, this 16-year-old founder built an e-commerce platform targeted at corporate gifting. In their very first week after launch, they closed orders worth INR 9,000 and established partnerships with three corporate gifting managers.",
  },
  {
    id: "one-last-chapter",
    name: "One Last Chapter",
    category: "EdTech",
    age: "Built by a 13-year-old",
    description: "Curated book subscription service for kids that transforms reading habits into an engaging monthly ritual.",
    metric: "INR 100,000/mo",
    metricLabel: "Recurring Monthly Revenue",
    icon: BookOpen,
    iconColor: "text-amber-400",
    bgColor: "from-amber-500/10 to-orange-500/5",
    tags: ["Subscription", "Kids Books", "Recurring MRR"],
    fullStory:
      "At just 13 years old, the founder designed an automated subscription portal for children's books. What started as an 8-week MVP scaled to over 100 active subscribers, generating INR 100,000 every single month in predictable revenue.",
  },
  {
    id: "paws-of-promise",
    name: "Paws of Promise",
    category: "Social Impact",
    age: "Built by a 14-year-old",
    description: "App for virtual pet adoption that connects animal lovers directly with verified rescue pets from local shelters.",
    metric: "50+ Pets",
    metricLabel: "Shelter Animals Adopted",
    icon: Heart,
    iconColor: "text-rose-400",
    bgColor: "from-rose-500/10 to-red-500/5",
    tags: ["Pet Adoption", "Shelters", "Community"],
    fullStory:
      "Paws of Promise gamifies pet adoption and donation transparency. Local animal shelters upload profiles of rescues, while users can virtually sponsor and track a pet before completing full in-person adoption.",
  },
  {
    id: "audionova",
    name: "AudioNova",
    category: "AI & ML",
    age: "Built by a 17-year-old",
    description: "AI-driven music and audio production company delivering royalty-free soundtracks for indie creators and games.",
    metric: "12,000+ Tracks",
    metricLabel: "Generated & Streamed",
    icon: Music,
    iconColor: "text-indigo-400",
    bgColor: "from-indigo-500/10 to-violet-500/5",
    tags: ["Generative AI", "Audio Engineering", "SaaS"],
    fullStory:
      "A high school senior passionate about sound design built AudioNova to synthesize custom mood music for indie game devs and YouTubers. The platform went viral on TikTok and attracted commercial licensing requests.",
  },
  {
    id: "converza",
    name: "Converza - Spanish Learning App",
    category: "EdTech",
    age: "Built by a 15-year-old",
    description: "Language learning app featuring Luna, the friendly AI language learning bot that conducts realistic conversational practice.",
    metric: "Top 5",
    metricLabel: "Product Hunt Daily Ranking",
    icon: Languages,
    iconColor: "text-cyan-400",
    bgColor: "from-cyan-500/10 to-blue-500/5",
    tags: ["AI Tutor", "Product Hunt", "Language"],
    fullStory:
      "Traditional language apps focus on memorizing flashcards. Converza pairs students with 'Luna', an AI avatar that adapts vocabulary difficulty dynamically. It ranked in the top 5 on Product Hunt on launch day.",
  },
];

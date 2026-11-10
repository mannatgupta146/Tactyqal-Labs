import React from "react";
import { BlogStats } from "../../lib/types";
import { FileText, CheckCircle2, Clock, Eye } from "lucide-react";

interface AdminStatsBarProps {
  stats: BlogStats | null;
  totalFallback: number;
  publishedFallback: number;
  draftsFallback: number;
  viewsFallback: number;
}

export default function AdminStatsBar({
  stats,
  totalFallback,
  publishedFallback,
  draftsFallback,
  viewsFallback,
}: AdminStatsBarProps) {
  const statCards = [
    {
      label: "Total Articles",
      value: stats?.totalPosts || totalFallback,
      icon: FileText,
      iconColor: "text-[#00df82]",
    },
    {
      label: "Published",
      value: stats?.publishedPosts || publishedFallback,
      icon: CheckCircle2,
      iconColor: "text-emerald-400",
    },
    {
      label: "Drafts",
      value: stats?.draftPosts || draftsFallback,
      icon: Clock,
      iconColor: "text-amber-400",
    },
    {
      label: "Total Views",
      value: stats?.totalViews || viewsFallback,
      icon: Eye,
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
      {statCards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>{card.label}</span>
              <Icon className={`w-4 h-4 ${card.iconColor}`} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">{card.value}</div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { BlogCategory } from "../../lib/types";
import { Search } from "lucide-react";

interface BlogSearchFilterProps {
  searchQuery: string;
  selectedCategory: string;
  categories: BlogCategory[];
  onSearchChange: (val: string) => void;
  onCategorySelect: (slug: string) => void;
}

export default function BlogSearchFilter({
  searchQuery,
  selectedCategory,
  categories,
  onSearchChange,
  onCategorySelect,
}: BlogSearchFilterProps) {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      {/* Search Box */}
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search guides, ideas, elevator pitches..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] transition shadow-xs"
        />
      </div>

      {/* Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        <button
          onClick={() => onCategorySelect("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
            selectedCategory === "all"
              ? "bg-[#00df82] text-slate-950 font-bold shadow-md shadow-emerald-500/20"
              : "bg-white text-slate-600 hover:text-slate-900 border border-stone-200 shadow-xs"
          }`}
        >
          All Topics
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => onCategorySelect(c.slug)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === c.slug
                ? "bg-[#00df82] text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                : "bg-white text-slate-600 hover:text-slate-900 border border-stone-200 shadow-xs"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

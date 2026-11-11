import React from "react";
import { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { Calendar, Clock, Eye, Share2 } from "lucide-react";

interface BlogPostHeaderProps {
  post: BlogPost;
  onCopyLink: () => void;
}

export default function BlogPostHeader({ post, onCopyLink }: BlogPostHeaderProps) {
  return (
    <header className="mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200/80 text-[#059669] mb-4">
        {post.category?.name || "Startup Guide"}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        {post.title}
      </h1>

      <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
        {post.excerpt}
      </p>

      {/* Author & Meta Bar */}
      <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
            alt={post.author?.name}
            className="w-11 h-11 rounded-full object-cover border border-stone-200"
          />
          <div>
            <div className="text-sm font-bold text-slate-900">{post.author?.name || "Tactyqal Team"}</div>
            <div className="text-xs text-slate-500">{post.author?.role || "Mentor & Founder"}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            {formatDate(post.publishedAt)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-[#059669]" />
            {post.readTimeMin} min read
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-slate-400" />
            {post.views} views
          </span>
          <button
            onClick={onCopyLink}
            className="p-2 rounded-xl bg-white border border-stone-200 text-slate-600 hover:text-slate-900 hover:border-stone-300 transition ml-2 shadow-xs"
            title="Copy Article Link"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

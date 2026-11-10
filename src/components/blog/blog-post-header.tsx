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
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-[#00df82] mb-4">
        {post.category?.name || "Startup Guide"}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
        {post.title}
      </h1>

      <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
        {post.excerpt}
      </p>

      {/* Author & Meta Bar */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
            alt={post.author?.name}
            className="w-11 h-11 rounded-full object-cover border border-slate-700"
          />
          <div>
            <div className="text-sm font-bold text-white">{post.author?.name || "Tactyqal Team"}</div>
            <div className="text-xs text-slate-400">{post.author?.role || "Mentor & Founder"}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" />
            {formatDate(post.publishedAt)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#00df82]" />
            {post.readTimeMin} min read
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-slate-500" />
            {post.views} views
          </span>
          <button
            onClick={onCopyLink}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition ml-2"
            title="Copy Article Link"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

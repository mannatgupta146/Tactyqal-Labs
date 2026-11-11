import React from "react";
import Link from "next/link";
import { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { Clock, Eye } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-3xl bg-white border border-stone-200/90 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <img
            src={post.coverImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#059669] border border-stone-200 shadow-xs">
            {post.category?.name}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#059669]" /> {post.readTimeMin} min read
            </span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            {post.views > 0 && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Eye className="w-3 h-3" /> {post.views}
                </span>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#059669] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#059669]">
        <span className="text-slate-500 font-normal">By {post.author?.name || "Tactyqal Team"}</span>
        <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
          Read More →
        </span>
      </div>
    </Link>
  );
}

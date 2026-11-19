import React from "react";
import Link from "next/link";
import { BlogPost } from "../../lib/types";
import { formatDate, getBlogCoverImage } from "../../lib/utils";
import { Clock, Eye, Star } from "lucide-react";

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
            src={getBlogCoverImage(post.coverImage, post.slug, post.title)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#059669] border border-stone-200 shadow-xs">
            {post.category?.name}
          </div>
          {post.featured && (
            <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-md text-amber-800 border border-amber-200/90 shadow-xs">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
              <span>Featured</span>
            </div>
          )}
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

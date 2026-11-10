import React from "react";
import Link from "next/link";
import { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { Clock } from "lucide-react";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <div className="mt-10">
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5"
      >
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-slate-800 overflow-hidden">
          <img
            src={post.coverImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400 text-slate-950 shadow-lg">
            Featured Masterclass
          </div>
        </div>

        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-emerald-400 font-semibold border border-slate-700">
                {post.category?.name}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> {post.readTimeMin} min read
              </span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-snug">
              {post.title}
            </h2>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                alt={post.author?.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-700"
              />
              <span className="text-xs font-semibold text-slate-300">
                {post.author?.name}
              </span>
            </div>

            <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read Article →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { BlogPost } from "../../lib/types";
import { formatDate, getBlogCoverImage } from "../../lib/utils";
import { Clock } from "lucide-react";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <div className="mt-10">
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white border border-stone-200/90 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
      >
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-stone-100 overflow-hidden">
          <img
            src={getBlogCoverImage(post.coverImage, post.slug, post.title)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#00df82] text-slate-950 shadow-md">
            Featured Masterclass
          </div>
        </div>

        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#059669] font-semibold border border-emerald-200/80">
                {post.category?.name}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#059669]" /> {post.readTimeMin} min read
              </span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#059669] transition-colors leading-snug">
              {post.title}
            </h2>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                alt={post.author?.name}
                className="w-8 h-8 rounded-full object-cover border border-stone-200"
              />
              <span className="text-xs font-semibold text-slate-700">
                {post.author?.name}
              </span>
            </div>

            <span className="text-xs font-bold text-[#059669] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read Article →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

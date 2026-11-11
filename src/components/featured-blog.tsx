"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { api } from "../lib/api";
import { BlogPost } from "../lib/types";
import { initialPosts } from "../../backend/seeds/seedData";

export default function FeaturedBlog() {
  const [posts, setPosts] = useState<BlogPost[]>(
    (initialPosts.slice(0, 6) as unknown) as BlogPost[]
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.getPosts({ limit: 6 });
        if (res.posts && res.posts.length > 0) {
          setPosts(res.posts.slice(0, 6));
        }
      } catch (err) {
        console.error("Failed to fetch featured posts:", err);
      }
    };
    fetchArticles();
  }, []);

  const formatBlogDate = (dateStr?: string) => {
    if (!dateStr) return "2024-05-01";
    try {
      return new Date(dateStr).toISOString().split("T")[0];
    } catch {
      return dateStr.split("T")[0] || "2024-05-01";
    }
  };

  return (
    <section id="blog" className="py-20 bg-[#FDFCF7] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Centered matching tactyqal.com */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Learn from Industry Experts
          </h2>
        </div>

        {/* 6 Real Articles Grid (3x2) - Exact layout from tactyqal.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {posts.map((post) => (
            <div
              key={post._id || post.slug}
              className="group relative rounded-2xl bg-white border border-stone-200/90 p-5 shadow-xs hover:border-stone-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Luminous Light Sheen */}
              <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Cover Image inside card padding */}
                <div className="rounded-xl overflow-hidden aspect-[16/10] bg-stone-100 mb-4 shadow-2xs">
                  <img
                    src={post.coverImage || "/images/blog-articles/elevator-pitch-for-entrepreneurs.png"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 min-h-[50px]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed min-h-[40px]">
                  {post.excerpt}
                </p>

                {/* Metadata Line matching tactyqal.com */}
                <div className="mt-3 text-xs font-semibold text-[#059669]">
                  By Tactyqal • {post.readTimeMin} min read • {formatBlogDate(post.publishedAt)}
                </div>
              </div>

              {/* Full-width Mint Green Pill Button */}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 w-full block py-2.5 px-4 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm text-center shadow-xs transition hover:scale-[1.01]"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Read All Articles */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-stone-300 text-slate-900 font-bold text-xs sm:text-sm shadow-xs hover:border-[#00df82] hover:bg-stone-50 transition duration-200"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 text-[#059669]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

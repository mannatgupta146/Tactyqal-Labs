"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "../../../lib/api";
import { BlogPost } from "../../../lib/types";
import { formatDate } from "../../../lib/utils";
import { useAppDispatch } from "../../../store/hooks";
import { openConsultationModal, showToast } from "../../../store/uiSlice";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Eye,
  Share2,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Copy,
  ChevronRight,
} from "lucide-react";

export default function BlogPostReaderPage() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const data = await api.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error("Failed to load post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      dispatch(showToast({ message: "Article link copied to clipboard!", type: "success" }));
    }
  };

  if (loading) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-slate-950 text-center text-slate-400">
        <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-slate-950 text-center text-slate-100">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="text-sm text-slate-400 mt-2">The article you requested could not be located.</p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
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
                <Clock className="w-4 h-4 text-indigo-400" />
                {post.readTimeMin} min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-slate-500" />
                {post.views} views
              </span>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition ml-2"
                title="Copy Article Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-slate-900 border border-slate-800">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert prose-indigo max-w-none text-slate-200 leading-relaxed font-normal space-y-5 text-base sm:text-lg">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("# ")) {
              return null; // Skip redundant H1
            }
            if (block.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-indigo-300 mt-6 mb-2">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-indigo-950/30 border-l-4 border-indigo-500 text-slate-200 italic my-6 text-base"
                >
                  {block.replace("> ", "")}
                </blockquote>
              );
            }
            if (block.startsWith("- ") || block.startsWith("* ")) {
              const items = block.split("\n");
              return (
                <ul key={idx} className="space-y-2 my-4 pl-4 list-disc marker:text-indigo-400">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^[-*]\s*/, "")}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(block)) {
              const items = block.split("\n");
              return (
                <ol key={idx} className="space-y-2 my-4 pl-4 list-decimal marker:text-indigo-400">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold text-slate-500 mr-2">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 text-slate-300"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Mentorship Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-900/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> 8-Week 1:1 Incubator
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want to build and launch your own app?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-md">
              Apply to join Tactyqal Labs and get paired with an expert founder to build your full-stack app.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal(`Interested after reading: ${post.title}`))}
            className="shrink-0 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}

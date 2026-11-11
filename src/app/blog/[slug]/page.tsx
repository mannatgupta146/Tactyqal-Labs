"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "../../../lib/api";
import { BlogPost } from "../../../lib/types";
import { initialPosts } from "../../../../backend/seeds/seedData";
import { useAppDispatch } from "../../../store/hooks";
import { openConsultationModal, showToast } from "../../../store/uiSlice";
import { getBlogCoverImage } from "../../../lib/utils";
import BlogPostHeader from "../../../components/blog/blog-post-header";
import BlogContentRenderer from "../../../components/blog/blog-content-renderer";
import { ArrowLeft, ChevronRight } from "lucide-react";

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
        if (data) {
          setPost(data);
        } else {
          const fallback = initialPosts.find((p) => p.slug === slug);
          if (fallback) setPost(fallback as unknown as BlogPost);
        }
      } catch (err) {
        console.error("Failed to load post:", err);
        const fallback = initialPosts.find((p) => p.slug === slug);
        if (fallback) setPost(fallback as unknown as BlogPost);
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
      <div className="pt-40 pb-32 min-h-screen bg-[#FDFCF7] text-center text-slate-500">
        <div className="w-6 h-6 border-2 border-[#059669] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-[#FDFCF7] text-center text-slate-900">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="text-sm text-slate-600 mt-2">The article you requested could not be located.</p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00df82] text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-[#FDFCF7] text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#059669] transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-[#059669] transition">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header with Title, Author, Meta */}
        <BlogPostHeader post={post} onCopyLink={handleCopyLink} />

        {/* Featured Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-stone-100 border border-stone-200/90 shadow-sm">
            <img
              src={getBlogCoverImage(post.coverImage, post.slug, post.title)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <BlogContentRenderer content={post.content} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold text-slate-400 mr-2">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs bg-white border border-stone-200 text-slate-700 shadow-xs"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Mentorship Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-stone-200 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#059669] uppercase tracking-wider mb-1">
              8-Week 1:1 Incubator
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Want to build and launch your own app?
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-md">
              Apply to join Tactyqal Labs and get paired with an expert founder to build your full-stack app.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal(`Interested after reading: ${post.title}`))}
            className="shrink-0 px-7 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#059669] transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}

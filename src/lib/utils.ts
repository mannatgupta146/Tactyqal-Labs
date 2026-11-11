import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Resolves the real cover image from the local public/images/blog-articles folder,
 * matching by article slug/title if missing or external.
 */
export function getBlogCoverImage(coverImage?: string, slug?: string, title?: string): string {
  const identifier = `${slug || ""} ${title || ""}`.toLowerCase();

  // If identifier matches one of the 6 real articles, prefer the verified local image
  if (identifier.includes("elevator-pitch")) {
    return "/images/blog-articles/elevator-pitch-for-entrepreneurs.png";
  }
  if (identifier.includes("startup-team") || identifier.includes("tech-team")) {
    return "/images/blog-articles/how-to-build-tech-startup-team.png";
  }
  if (identifier.includes("fail-at-idea") || identifier.includes("fail") || identifier.includes("11-reasons")) {
    return "/images/blog-articles/startups-fail-at-idea-stage.png";
  }
  if (identifier.includes("no-code") || identifier.includes("50-no-code")) {
    return "/images/blog-articles/no-code-startup-ideas.webp";
  }
  if (identifier.includes("food-waste") || identifier.includes("30-startup")) {
    return "/images/blog-articles/food-waste-startup-ideas.jpg";
  }
  if (identifier.includes("generation-z") || identifier.includes("gen-z")) {
    return "/images/blog-articles/generation-z-startup-ideas.jpg";
  }

  // If coverImage is provided, normalize any old paths
  if (coverImage) {
    if (coverImage.startsWith("/learn/")) {
      return coverImage.replace("/learn/", "/images/blog-articles/");
    }
    if (coverImage.startsWith("/blog-articles/")) {
      return coverImage.replace("/blog-articles/", "/images/blog-articles/");
    }
    if (coverImage.startsWith("/images/blog-articles/")) {
      return coverImage;
    }
    if (!coverImage.startsWith("http")) {
      return `/images/blog-articles/${coverImage.replace(/^\/+/, "")}`;
    }
  }

  return "/images/blog-articles/elevator-pitch-for-entrepreneurs.png";
}

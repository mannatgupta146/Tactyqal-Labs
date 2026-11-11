import React from "react";

interface BlogContentRendererProps {
  content: string;
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className="prose prose-emerald max-w-none text-slate-700 leading-relaxed font-normal space-y-5 text-base sm:text-lg">
      {content.split("\n\n").map((block, idx) => {
        if (block.startsWith("# ")) {
          return null; // Skip redundant H1
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-2xl sm:text-3xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#059669] mt-6 mb-2">
              {block.replace("### ", "")}
            </h3>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-l-4 border-[#059669] text-slate-800 italic my-6 text-base"
            >
              {block.replace("> ", "")}
            </blockquote>
          );
        }
        if (block.startsWith("- ") || block.startsWith("* ")) {
          const items = block.split("\n");
          return (
            <ul key={idx} className="space-y-2 my-4 pl-4 list-disc marker:text-[#059669]">
              {items.map((it, i) => (
                <li key={i}>{it.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(block)) {
          const items = block.split("\n");
          return (
            <ol key={idx} className="space-y-2 my-4 pl-4 list-decimal marker:text-[#059669]">
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
  );
}

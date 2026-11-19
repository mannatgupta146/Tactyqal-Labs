import React from "react";
import { renderMarkdown } from "../../lib/markdown-renderer";

interface BlogContentRendererProps {
  content: string;
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className="max-w-none text-slate-700 font-normal text-base sm:text-lg">
      {renderMarkdown(content, true)}
    </div>
  );
}

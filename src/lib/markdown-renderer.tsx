import React from "react";

/**
 * Parses inline markdown: **bold**, *italic*, `code`, and [link](url)
 */
export function parseInlineMarkdown(text: string): React.ReactNode[] {
  if (!text) return [];

  // Match links, bold, italic, code
  const regex = /(\[.*?\]\(.*?\)|\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|_.*?_|`.*?`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Bold + Italic: ***text***
    if (part.startsWith("***") && part.endsWith("***") && part.length >= 6) {
      return (
        <strong key={index} className="font-bold italic text-slate-900">
          {part.slice(3, -3)}
        </strong>
      );
    }

    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text* or _text_
    if (
      ((part.startsWith("*") && part.endsWith("*")) ||
        (part.startsWith("_") && part.endsWith("_"))) &&
      part.length >= 2
    ) {
      return (
        <em key={index} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }

    // Inline Code: `code`
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-stone-100 text-slate-800 font-mono text-xs sm:text-sm border border-stone-200 font-medium"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Link: [text](url)
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#059669] hover:text-[#047857] underline underline-offset-2 font-medium transition-colors"
          >
            {match[1]}
          </a>
        );
      }
    }

    return part;
  });
}

/**
 * Editorial-grade, pixel-perfect Markdown renderer.
 * Generous breathing room, relaxed line heights, and balanced spacing between sections.
 */
export function renderMarkdown(content: string, skipH1: boolean = false): React.ReactNode[] {
  if (!content) return [];

  const rawLines = content.replace(/\r\n/g, "\n").split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let keyIdx = 0;

  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();

    // 0. Skip blank lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Fenced Code Block: ```
    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < rawLines.length && !rawLines[i].trim().startsWith("```")) {
        codeLines.push(rawLines[i]);
        i++;
      }
      if (i < rawLines.length && rawLines[i].trim().startsWith("```")) {
        i++; // Consume closing fence
      }
      elements.push(
        <div key={keyIdx++} className="my-8 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900 px-4 py-2 text-xs font-mono text-slate-400 flex items-center justify-between border-b border-slate-800">
            <span>Code snippet</span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">raw</span>
          </div>
          <pre className="p-4 sm:p-5 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // 2. Horizontal Rule: --- or *** or ___
    if (/^([-*_]){3,}$/.test(trimmed)) {
      elements.push(<hr key={keyIdx++} className="my-10 border-t border-stone-200" />);
      i++;
      continue;
    }

    // 3. Heading 1: #
    if (/^#\s+/.test(trimmed)) {
      const text = trimmed.replace(/^#\s+/, "");
      if (!skipH1) {
        elements.push(
          <h1 key={keyIdx++} className="text-3xl sm:text-4xl font-black text-slate-900 mt-10 mb-6 tracking-tight leading-tight">
            {parseInlineMarkdown(text)}
          </h1>
        );
      }
      i++;
      continue;
    }

    // 4. Heading 2: ## (Generous top breathing room, balanced bottom margin)
    if (/^##\s+/.test(trimmed)) {
      let text = trimmed.replace(/^##\s+/, "");

      // Handle accidental compound line: `## Heading - Item 1 - Item 2`
      let extraBullets: string[] = [];
      if (/\s+-\s+/.test(text)) {
        const parts = text.split(/\s+-\s+/);
        text = parts[0];
        extraBullets = parts.slice(1);
      }

      elements.push(
        <h2 key={keyIdx++} className="text-2xl sm:text-3xl font-black text-slate-900 mt-14 sm:mt-16 mb-5 tracking-tight leading-snug">
          {parseInlineMarkdown(text)}
        </h2>
      );

      if (extraBullets.length > 0) {
        elements.push(
          <div key={keyIdx++} className="space-y-4 my-6">
            {extraBullets.map((it, idx) => (
              <div key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
                <span className="shrink-0 text-slate-400 font-black text-xl leading-none select-none mt-0.5">•</span>
                <div className="flex-1">{parseInlineMarkdown(it)}</div>
              </div>
            ))}
          </div>
        );
      }

      i++;
      continue;
    }

    // 5. Heading 3: ### (Spaced comfortably from previous text, breathing room below)
    if (/^###\s+/.test(trimmed)) {
      let text = trimmed.replace(/^###\s+/, "");

      // Handle accidental compound line with blockquote ` > `
      let inlineQuote: string | null = null;
      if (text.includes(" > ")) {
        const parts = text.split(" > ");
        text = parts[0];
        inlineQuote = parts.slice(1).join(" > ");
      }

      elements.push(
        <h3 key={keyIdx++} className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 sm:mt-12 mb-4 leading-snug tracking-tight">
          {parseInlineMarkdown(text)}
        </h3>
      );

      if (inlineQuote) {
        elements.push(
          <div
            key={keyIdx++}
            className="my-7 rounded-2xl bg-gradient-to-r from-emerald-50/50 via-[#FAFDF9] to-[#FAF8F5] border border-emerald-200/70 p-5 sm:p-6 shadow-2xs relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#00df82] to-[#059669]" />
            <div className="pl-3 text-slate-800 italic text-base sm:text-lg leading-relaxed font-normal">
              {parseInlineMarkdown(inlineQuote.replace(/^["']|["']$/g, ""))}
            </div>
          </div>
        );
      }

      i++;
      continue;
    }

    // 6. Heading 4: ####
    if (/^####\s+/.test(trimmed)) {
      const text = trimmed.replace(/^####\s+/, "");
      elements.push(
        <h4 key={keyIdx++} className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3">
          {parseInlineMarkdown(text)}
        </h4>
      );
      i++;
      continue;
    }

    // 7. Blockquote: > (Warm card with subtle mint-green accent bar & generous padding)
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith(">")) {
        quoteLines.push(rawLines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      elements.push(
        <div
          key={keyIdx++}
          className="my-8 sm:my-10 rounded-2xl bg-gradient-to-r from-emerald-50/50 via-[#FAFDF9] to-[#FAF8F5] border border-emerald-200/70 p-6 sm:p-7 shadow-2xs relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#00df82] to-[#059669]" />
          <div className="pl-3 text-slate-800 italic text-base sm:text-lg leading-relaxed font-normal">
            {parseInlineMarkdown(quoteLines.join(" "))}
          </div>
        </div>
      );
      continue;
    }

    // 8. Unordered List: - or * (Generous list margins and relaxed row spacing)
    if (/^[-*]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < rawLines.length && /^[-*]\s+/.test(rawLines[i].trim())) {
        const lineContent = rawLines[i].trim().replace(/^[-*]\s+/, "");
        if (/\s+-\s+/.test(lineContent)) {
          const subItems = lineContent.split(/\s+-\s+/);
          subItems.forEach((s) => listItems.push(s));
        } else {
          listItems.push(lineContent);
        }
        i++;
      }
      elements.push(
        <div key={keyIdx++} className="space-y-4 my-6 sm:my-8">
          {listItems.map((it, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="shrink-0 text-slate-400 font-black text-xl leading-none select-none mt-0.5">•</span>
              <div className="flex-1">{parseInlineMarkdown(it)}</div>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // 9. Ordered List: 1. 2. 3. (Comfortable spacing above/below, clean row separation)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < rawLines.length && /^\d+\.\s+/.test(rawLines[i].trim())) {
        const rawLine = rawLines[i].trim();
        if (/\s+\d+\.\s+/.test(rawLine)) {
          const splitItems = rawLine.split(/\s+(?=\d+\.\s+)/);
          splitItems.forEach((it) => listItems.push(it.replace(/^\d+\.\s+/, "")));
        } else {
          listItems.push(rawLine.replace(/^\d+\.\s+/, ""));
        }
        i++;
      }
      elements.push(
        <div key={keyIdx++} className="space-y-4 my-6 sm:my-8">
          {listItems.map((it, idx) => (
            <div key={idx} className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="shrink-0 font-semibold text-slate-700 font-mono text-base sm:text-lg min-w-[20px]">
                {idx + 1}.
              </span>
              <div className="flex-1">{parseInlineMarkdown(it)}</div>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // 10. Regular Paragraph (Relaxed line-height and generous bottom margin)
    const pLines: string[] = [];
    while (
      i < rawLines.length &&
      rawLines[i].trim() &&
      !/^#{1,6}\s+/.test(rawLines[i].trim()) &&
      !/^[-*]\s+/.test(rawLines[i].trim()) &&
      !/^\d+\.\s+/.test(rawLines[i].trim()) &&
      !rawLines[i].trim().startsWith(">") &&
      !rawLines[i].trim().startsWith("```") &&
      !/^([-*_]){3,}$/.test(rawLines[i].trim())
    ) {
      pLines.push(rawLines[i].trim());
      i++;
    }

    if (pLines.length > 0) {
      elements.push(
        <p key={keyIdx++} className="text-slate-700 leading-relaxed sm:leading-loose mb-6 text-base sm:text-lg">
          {parseInlineMarkdown(pLines.join(" "))}
        </p>
      );
    }
  }

  return elements;
}

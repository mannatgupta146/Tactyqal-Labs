"use client";

import React from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Code,
  FileCode,
  Link2,
  ImageIcon,
  Minus,
} from "lucide-react";

interface EditorMarkdownToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  content: string;
  onContentChange: (val: string) => void;
}

export default function EditorMarkdownToolbar({
  textareaRef,
  content,
  onContentChange,
}: EditorMarkdownToolbarProps) {
  const applyFormat = (type: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    let prefix = "";
    let suffix = "";
    let defaultText = "";

    switch (type) {
      case "bold":
        prefix = "**";
        suffix = "**";
        defaultText = "bold text";
        break;
      case "italic":
        prefix = "*";
        suffix = "*";
        defaultText = "italic text";
        break;
      case "strikethrough":
        prefix = "~~";
        suffix = "~~";
        defaultText = "strikethrough text";
        break;
      case "h2":
        prefix = "\n\n## ";
        suffix = "\n";
        defaultText = "Section Heading";
        break;
      case "h3":
        prefix = "\n\n### ";
        suffix = "\n";
        defaultText = "Sub-Heading";
        break;
      case "bullet":
        prefix = "\n- ";
        defaultText = "List item";
        break;
      case "number":
        prefix = "\n1. ";
        defaultText = "Numbered item";
        break;
      case "quote":
        prefix = "\n> ";
        defaultText = "Key founder quote or takeaway";
        break;
      case "code":
        prefix = "`";
        suffix = "`";
        defaultText = "code";
        break;
      case "codeblock":
        prefix = "\n```typescript\n";
        suffix = "\n```\n";
        defaultText = "// Code snippet";
        break;
      case "link":
        prefix = "[";
        suffix = "](https://)";
        defaultText = "Link text";
        break;
      case "image":
        prefix = "![";
        suffix = "](/images/blog-articles/cover.jpg)";
        defaultText = "Image description";
        break;
      case "hr":
        prefix = "\n\n---\n\n";
        break;
      default:
        return;
    }

    const inserted = selectedText ? selectedText : defaultText;
    const newContent =
      content.substring(0, start) + prefix + inserted + suffix + content.substring(end);

    onContentChange(newContent);

    setTimeout(() => {
      textarea.focus();
      const cursorStart = start + prefix.length;
      const cursorEnd = cursorStart + inserted.length;
      textarea.setSelectionRange(cursorStart, cursorEnd);
    }, 0);
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const tools = [
    { label: "Bold (Ctrl+B)", icon: Bold, type: "bold" },
    { label: "Italic (Ctrl+I)", icon: Italic, type: "italic" },
    { label: "Strikethrough", icon: Strikethrough, type: "strikethrough" },
    { divider: true },
    { label: "H2 Heading", icon: Heading2, type: "h2" },
    { label: "H3 Heading", icon: Heading3, type: "h3" },
    { divider: true },
    { label: "Blockquote", icon: Quote, type: "quote" },
    { label: "Bullet List", icon: List, type: "bullet" },
    { label: "Numbered List", icon: ListOrdered, type: "number" },
    { divider: true },
    { label: "Inline Code", icon: Code, type: "code" },
    { label: "Code Block", icon: FileCode, type: "codeblock" },
    { divider: true },
    { label: "Insert Link", icon: Link2, type: "link" },
    { label: "Insert Image", icon: ImageIcon, type: "image" },
    { label: "Horizontal Divider", icon: Minus, type: "hr" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-stone-100/90 border-b border-stone-200 select-none">
      {/* Left: Button Group */}
      <div className="flex flex-wrap items-center gap-1">
        {tools.map((tool, i) => {
          if (tool.divider) {
            return <div key={i} className="h-4 w-px bg-stone-300 mx-1" />;
          }
          const Icon = tool.icon!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => applyFormat(tool.type!)}
              title={tool.label}
              className="p-1.5 rounded-lg text-slate-700 hover:text-[#059669] hover:bg-white active:bg-stone-200 transition-all shadow-2xs cursor-pointer"
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>

      {/* Right: Live Word & Read Time Stats */}
      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pr-1">
        <span className="font-semibold text-slate-700">{wordCount}</span>
        <span>words</span>
        <span className="text-stone-300">•</span>
        <span className="font-semibold text-[#059669]">{readTime}m</span>
        <span>read</span>
      </div>
    </div>
  );
}

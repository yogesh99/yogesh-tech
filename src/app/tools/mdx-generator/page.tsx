"use client";

import { useState, useRef } from "react";
import { Copy, Download, Bold, Italic, Link as LinkIcon, Code, Palette, Type, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MDXGeneratorPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [sizePickerOpen, setSizePickerOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const generateMDX = () => {
    return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${date}"
---

${content}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMDX());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generateMDX()], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    const fileName = title ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "untitled-post";
    element.download = `${fileName}.mdx`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const insertText = (before: string, after: string = "", defaultText?: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end) || defaultText || "";
    const newText = content.substring(0, start) + before + selectedText + after + content.substring(end);
    
    setContent(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  // Toolbar Actions
  const addBold = () => insertText("**", "**", "bold text");
  const addItalic = () => insertText("*", "*", "italic text");
  const addLink = () => insertText("[", "](https://example.com)", "link text");
  const addCode = () => insertText("\n```typescript\n", "\n```\n", "// your code here");
  const addColor = (color: string) => {
    insertText(`<span style={{ color: '${color}' }}>`, "</span>", "colored text");
    setColorPickerOpen(false);
  };
  const addSize = (size: string) => {
    insertText(`<span style={{ fontSize: '${size}' }}>`, "</span>", "resized text");
    setSizePickerOpen(false);
  };

  const presetColors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#64748b"];
  const presetSizes = [{ label: "Small", val: "0.875rem" }, { label: "Large", val: "1.25rem" }, { label: "Huge", val: "1.5rem" }];

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto pb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <Link 
        href="/tools" 
        className="inline-flex items-center text-sm font-bold text-foreground/50 hover:text-foreground transition-all duration-300 w-fit group bg-foreground/5 px-5 py-2.5 rounded-2xl border border-foreground/5 hover:border-foreground/10 hover:bg-foreground/[0.08]"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Tools
      </Link>

      <header className="flex flex-col gap-4 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15]">
          MDX Blog Studio
        </h1>
        <p className="text-xl text-foreground/60 font-medium max-w-2xl">
          Write and format your blog posts visually. Generates perfectly structured `.mdx` files instantly.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        
        {/* Editor Side */}
        <div className="flex flex-col gap-6">
          <div className="bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-6 shadow-sm flex flex-col gap-5">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs">1</span>
              Post Metadata
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground/70 mb-2">Post Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Building a Custom MDX Blog"
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-foreground/70 mb-2">Short Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Appears on the blog listing grid..."
                  rows={2}
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground/70 mb-2">Publish Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-6 shadow-sm flex flex-col gap-4 flex-grow">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs">2</span>
              Content Editor
            </h2>
            
            {/* Rich Text Toolbar */}
            <div className="flex flex-wrap gap-2 p-2 bg-foreground/5 rounded-xl border border-foreground/10">
              <button onClick={addBold} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/80" title="Bold"><Bold className="w-4 h-4" /></button>
              <button onClick={addItalic} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/80" title="Italic"><Italic className="w-4 h-4" /></button>
              <button onClick={addLink} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/80" title="Link"><LinkIcon className="w-4 h-4" /></button>
              <button onClick={addCode} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors text-foreground/80" title="Code Snippet"><Code className="w-4 h-4" /></button>
              
              <div className="w-px h-6 bg-foreground/10 self-center mx-1" />
              
              {/* Color Picker Dropdown */}
              <div className="relative">
                <button onClick={() => setColorPickerOpen(!colorPickerOpen)} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors flex items-center gap-1 text-foreground/80" title="Font Color">
                  <Palette className="w-4 h-4" />
                </button>
                {colorPickerOpen && (
                  <div className="absolute top-full left-0 mt-2 p-3 bg-background border border-foreground/10 shadow-xl rounded-xl flex gap-2 z-20 w-max">
                    {presetColors.map(c => (
                      <button key={c} onClick={() => addColor(c)} className="w-6 h-6 rounded-full border border-foreground/10 hover:scale-110 transition-transform" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                )}
              </div>

              {/* Size Picker Dropdown */}
              <div className="relative">
                <button onClick={() => setSizePickerOpen(!sizePickerOpen)} className="p-2 hover:bg-foreground/10 rounded-lg transition-colors flex items-center gap-1 text-foreground/80" title="Font Size">
                  <Type className="w-4 h-4" />
                </button>
                {sizePickerOpen && (
                  <div className="absolute top-full left-0 mt-2 p-2 bg-background border border-foreground/10 shadow-xl rounded-xl flex flex-col gap-1 z-20 w-32">
                    {presetSizes.map(s => (
                      <button key={s.label} onClick={() => addSize(s.val)} className="text-left px-3 py-2 hover:bg-foreground/5 rounded-lg text-sm font-medium transition-colors">
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <textarea 
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your markdown content here. Use the toolbar above to style it."
              className="w-full flex-grow min-h-[400px] bg-foreground/[0.02] border border-foreground/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-mono text-sm leading-relaxed resize-y"
            />
          </div>
        </div>

        {/* Output Side */}
        <div className="flex flex-col gap-6">
          <div className="bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-[2rem] p-6 shadow-sm flex flex-col gap-5 h-full">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">3</span>
                Generated MDX
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors text-xs font-bold text-foreground/70"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </h2>

            <div className="relative flex-grow">
              <pre className="absolute inset-0 bg-background/50 border border-emerald-500/10 rounded-xl p-5 overflow-auto text-sm font-mono text-foreground/80 leading-relaxed custom-scrollbar shadow-inner">
                {generateMDX()}
              </pre>
            </div>

            <Button onClick={handleDownload} className="w-full rounded-2xl h-14 font-bold shadow-md hover:shadow-xl transition-all group/btn bg-emerald-600 hover:bg-emerald-700 text-white border-0 mt-4">
              <Download className="mr-2 h-5 w-5 group-hover/btn:-translate-y-1 transition-transform" />
              Download .mdx File
            </Button>
            <p className="text-xs text-center text-foreground/50 font-medium">
              Save this file directly into <code className="bg-foreground/5 px-1 rounded">src/content/blog/</code>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

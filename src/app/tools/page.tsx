import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { Wrench } from "lucide-react";

export const metadata = {
  title: "Tools | yogesh.tech",
  description: "Explore practical developer tools, browser extensions, and utilities.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <header className="flex flex-col gap-6 relative overflow-hidden bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-xl group">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-foreground/[0.04] rounded-full blur-3xl group-hover:bg-foreground/[0.06] transition-colors duration-700 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-foreground/70 mb-2 uppercase tracking-widest w-fit">
          <Wrench className="h-4 w-4" />
          The Utility Lab
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15]">
          All Tools
        </h1>
        <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-medium">
          A collection of utilities built to solve specific problems. 
          Expect a mix of browser extensions, web apps, and CLI tools.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.shortDescription}
            slug={tool.slug}
            isComingSoon={tool.isComingSoon}
            label={tool.label}
          />
        ))}
      </div>
    </div>
  );
}

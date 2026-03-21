import { Button } from "@/components/Button";
import ToolCard from "@/components/ToolCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { tools } from "@/data/tools";
import { ArrowRight, UserCircle2, Settings } from "lucide-react";

export default function Home() {
  const featuredTool = tools.find((t) => t.slug === "reset-site");
  const comingSoonTool = tools.find((t) => t.slug === "voice-filler");

  return (
    <div className="relative flex flex-col w-full overflow-visible">
      {/* Global Background Blobs */}
      <div className="fixed inset-0 overflow-hidden w-full h-full -z-10 pointer-events-none bg-background">
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-500/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Fully Enclosed Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10 w-full mb-8">

        {/* 1. Hero Box (Spans 2 columns) */}
        <div className="md:col-span-2 flex flex-col justify-center p-8 md:p-12 bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-[2rem] relative overflow-hidden group hover:border-foreground/20 transition-all min-h-[360px]">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-foreground/10 px-3 py-1 text-xs font-semibold bg-background/50 backdrop-blur-md mb-6 shadow-sm">
              <Settings className="w-3 h-3 mr-2 opacity-70" />
              <span>Building high-performance utilities.</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 leading-[1.1]">
              Focus on what matters.
            </h1>
            <p className="text-base md:text-lg text-foreground/60 max-w-lg mt-4 leading-relaxed font-medium">
              A collection of minimal, beautifully designed tools for engineers and creators who respect their time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
              <Button href="/tools" size="lg" className="group rounded-xl px-6 py-5 text-sm font-bold shadow-lg shadow-foreground/5 hover:shadow-foreground/10 transition-all w-full sm:w-auto">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          {/* Subtle glow */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-foreground/[0.02] rounded-full blur-3xl group-hover:bg-foreground/[0.04] transition-colors duration-700 pointer-events-none" />
        </div>

        {/* 2. The Maker Box (Spans 1 column) */}
        <div className="md:col-span-1 flex w-full">
          <div className="w-full flex flex-col justify-between bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-8 hover:bg-background/60 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full text-center items-center justify-center pt-4">
              <UserCircle2 className="h-16 w-16 text-foreground/20 mb-6 group-hover:text-foreground/40 transition-colors duration-500" />
              <h3 className="font-sans text-2xl font-bold tracking-tight mb-3">The Maker</h3>
              <p className="text-foreground/60 leading-relaxed text-sm mb-8 max-w-[200px]">
                I'm Yogesh. I build fast, minimal software that respects your privacy.
              </p>
              <div className="mt-auto w-full">
                <Button href="/about" variant="outline" className="w-full rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all">
                  Read My Mission
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section (Spans all 3 columns, split equally into 2) */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
          {/* Featured Tool (Left Half) */}
          {featuredTool && (
            <div className="flex w-full">
              <ToolCard
                title={featuredTool.title}
                description={featuredTool.shortDescription}
                slug={featuredTool.slug}
                label={featuredTool.label}
              />
            </div>
          )}

          {/* Coming Soon Tool (Right Half) */}
          {comingSoonTool && (
            <div className="flex w-full opacity-90 hover:opacity-100 transition-opacity">
              <ToolCard
                title={comingSoonTool.title}
                description={comingSoonTool.shortDescription}
                slug={comingSoonTool.slug}
                isComingSoon={true}
                label={comingSoonTool.label}
              />
            </div>
          )}
        </div>

        {/* 5. Newsletter Signup (Spans 3 columns) */}
        <div className="md:col-span-3 flex w-full">
          <NewsletterSignup />
        </div>

      </main>
    </div>
  );
}

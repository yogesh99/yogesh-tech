import Link from "next/link";
import { Button } from "@/components/Button";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredTool = tools.find((t) => t.slug === "reset-site");
  const comingSoonTool = tools.find((t) => t.slug === "voice-filler");

  return (
    <div className="flex flex-col gap-24 pb-12">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 pt-12 md:pt-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Simple Tech Tools That Solve Real Problems
        </h1>
        <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
          Fast, practical tools built by a tech engineer to solve real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button href="/tools" size="lg" className="group w-full sm:w-auto">
            Explore Tools
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
            Read My Story
          </Button>
        </div>
      </section>

      {/* Featured Tool */}
      {featuredTool && (
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight font-mono">Featured Tool</h2>
            <Link href="/tools" className="text-sm text-foreground/60 hover:text-foreground transition-colors flex items-center">
              View all tools <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              title={featuredTool.title}
              description={featuredTool.shortDescription}
              slug={featuredTool.slug}
              label={featuredTool.label}
            />
          </div>
        </section>
      )}

      {/* Coming Soon */}
      {comingSoonTool && (
        <section className="flex flex-col gap-8 opacity-80">
          <h2 className="text-2xl font-bold tracking-tight font-mono">In Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              title={comingSoonTool.title}
              description={comingSoonTool.shortDescription}
              slug={comingSoonTool.slug}
              isComingSoon={true}
              label={comingSoonTool.label}
            />
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="p-8 md:p-12 rounded-3xl bg-foreground/[0.03] border border-foreground/5 mt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight">The Maker Behind the Tools</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm Yogesh, building practical solutions to everyday tech annoyances. My goal is to create lightweight, fast, and beautifully minimal tools that respect your time and privacy.
          </p>
          <div>
            <Button href="/about" variant="outline" className="mt-2">
              More About Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Rocket, Mail, Github, Zap, Target, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About | yogesh.tech",
  description: "Learn about the maker behind yogesh.tech and the mission to build practical tools.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Back Link */}
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-bold text-foreground/50 hover:text-foreground transition-all duration-300 w-fit group bg-foreground/5 px-5 py-2.5 rounded-2xl border border-foreground/5 hover:border-foreground/10 hover:bg-foreground/[0.08]"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Intro Card */}
        <div className="md:col-span-2 relative overflow-hidden bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:bg-background/80 hover:shadow-xl hover:-translate-y-1 group">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-foreground/[0.04] rounded-full blur-3xl group-hover:bg-foreground/[0.06] transition-colors duration-700 pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15] mb-6">
            Building tools that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              actually solve real problems.
            </span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-lg mb-0 font-medium">
            I'm Yogesh, a Full Stack engineer and product builder. Welcome to my utility lab.
          </p>
        </div>

        {/* Connect Card */}
        <div className="relative overflow-hidden bg-foreground/[0.02] backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-foreground/[0.04] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center items-center gap-4 text-center group">
          <div className="h-16 w-16 bg-background rounded-full flex items-center justify-center border border-foreground/10 mb-2 shadow-sm group-hover:scale-105 transition-transform duration-500">
            <Mail className="h-7 w-7 text-foreground/80" />
          </div>
          <h2 className="text-xl font-bold tracking-tight pb-2">Let's Connect</h2>
          <Button href="mailto:yogesh.waradkar@gmail.com" className="w-full rounded-2xl h-12 font-bold shadow-sm hover:shadow-md transition-all text-sm">
            Email Me
          </Button>
          <Button href="https://github.com/yogesh99" target="_blank" variant="outline" className="w-full rounded-2xl h-12 font-bold bg-background/50 backdrop-blur-sm border-foreground/10 hover:bg-background transition-all text-sm group/btn">
            <Github className="mr-2 h-4 w-4 group-hover/btn:-translate-y-1 transition-transform" />
            GitHub Profile
          </Button>
        </div>

        {/* The Mission Card */}
        <div className="md:col-span-3 relative overflow-hidden bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:border-foreground/20">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-foreground/70 mb-8 uppercase tracking-widest">
              <Rocket className="h-4 w-4" />
              The Mission
            </div>
            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground/90 mb-6">
              I started <span className="text-foreground">yogesh.tech</span> because I was tired of bloated, ad-ridden tools that solved simple problems with maximum friction.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              This site is a home for the utilities I build to scratch my own itch. When I need to clear my cache, I don't want a 10-step wizard. I just want it done. They are designed for developers, creators, and power users who value speed and minimal design. No fluff, just function.
            </p>
          </div>
          
          <div className="absolute -bottom-48 -right-12 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Core Philosophy - 3 Columns */}
        <div className="relative overflow-hidden bg-rose-500/5 backdrop-blur-xl border border-rose-500/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-rose-500/10 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-14 w-14 bg-rose-500/10 rounded-2xl flex items-center justify-center border border-rose-500/20 mb-6 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">Lightning Fast</h3>
          <p className="text-foreground/70 font-medium leading-relaxed text-sm">
            Every millisecond counts. No unnecessary libraries or bloat. Built for absolute speed.
          </p>
        </div>

        <div className="relative overflow-hidden bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-blue-500/10 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-14 w-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">Laser Focused</h3>
          <p className="text-foreground/70 font-medium leading-relaxed text-sm">
            Each utility does one thing and does it exceptionally well. No feature creep allowed.
          </p>
        </div>

        <div className="relative overflow-hidden bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-emerald-500/10 hover:shadow-xl hover:-translate-y-1 group">
          <div className="h-14 w-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">Privacy First</h3>
          <p className="text-foreground/70 font-medium leading-relaxed text-sm">
            No dark patterns. Extreme privacy defaults. Your data stays with you, always.
          </p>
        </div>

      </div>
    </div>
  );
}

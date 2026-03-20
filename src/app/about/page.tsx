import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Rocket, Mail, Github, Twitter } from "lucide-react";

export const metadata = {
  title: "About | yogesh.tech",
  description: "Learn about the maker behind yogesh.tech and the mission to build practical tools.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 max-w-2xl mx-auto pb-12">
      {/* Back Link */}
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <header className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-mono">
          Building tools that <span className="text-foreground/50">don't suck.</span>
        </h1>
        <p className="text-xl text-foreground/80 leading-relaxed">
          I'm Yogesh, a Full Stack engineer and product builder. Welcome to my utility lab.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-foreground/80">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans mt-0">The Mission</h2>
        <p>
          I started <strong>yogesh.tech</strong> because I was tired of bloated, ad-ridden tools that solved simple problems with maximum friction. 
          When I need to clear my cache, I don't want a 10-step wizard. I just want it done.
        </p>

        <p>
          This site is a home for the utilities I build to scratch my own itch. They are designed for developers, creators, and power users who value speed and minimal design. No fluff, just function.
        </p>

        <div className="bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-8 my-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 font-semibold text-foreground">
            <Rocket className="h-5 w-5" />
            Core Philosophy
          </div>
          <ul className="list-disc pl-5 space-y-2 m-0 mt-2 text-foreground/80">
            <li><strong>Fast:</strong> Every millisecond counts. No unnecessary libraries.</li>
            <li><strong>Focused:</strong> Do one thing exceptionally well.</li>
            <li><strong>Respectful:</strong> No dark patterns. Extreme privacy defaults.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans pt-4">Let's Connect</h2>
        <p>
          If you have a problem you think could be solved with a small, focused tool, reach out! I'm always looking for new ideas to add to the lab.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 not-prose">
          <Button href="mailto:hello@yogesh.tech" size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
          <Button href="https://twitter.com/yogesh" target="_blank" variant="outline" size="lg" className="w-full sm:w-auto">
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button href="https://github.com/yogesh" target="_blank" variant="outline" size="lg" className="w-full sm:w-auto">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

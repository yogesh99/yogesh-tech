import { getToolBySlug, tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const dynamicParams = false;

// Generate static params for all known tools
export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: "Tool Not Found | yogesh.tech",
    };
  }

  return {
    title: `${tool.title} | yogesh.tech`,
    description: tool.shortDescription,
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-16 max-w-3xl mx-auto pb-12">
      {/* Back Link */}
      <Link 
        href="/tools" 
        className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Tools
      </Link>

      {/* Tool Hero */}
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-mono">
            {tool.title}
          </h1>
          {tool.label && (
             <span className="inline-flex items-center rounded-full border border-foreground/20 px-3 py-1 text-sm font-medium text-foreground/80 bg-background/50">
             {tool.label}
           </span>
          )}
        </div>
        <p className="text-xl text-foreground/70 leading-relaxed">
          {tool.fullDescription}
        </p>

        {tool.installUrl && !tool.isComingSoon && (
          <div className="pt-4 flex gap-4">
            <Button href={tool.installUrl} target="_blank" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Install Extension
            </Button>
          </div>
        )}
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-foreground/10">
        
        {/* How it Works */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <ul className="flex flex-col gap-4">
            {tool.howItWorks.map((step, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/5 text-foreground flex items-center justify-center font-mono text-sm font-medium border border-foreground/10">
                  {index + 1}
                </div>
                <p className="text-foreground/80 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Benefits</h2>
          <ul className="flex flex-col gap-4">
            {tool.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80 leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Screenshot Placeholder */}
      {tool.imageUrl && (
        <section className="w-full aspect-[16/9] border border-foreground/10 rounded-2xl overflow-hidden shadow-xl">
          <img src={tool.imageUrl} alt={`${tool.title} Screenshot`} className="w-full h-full object-cover" />
        </section>
      )}

      {/* Feedback CTA */}
      <section className="bg-foreground/[0.02] border border-foreground/10 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
         <div className="flex flex-col gap-2">
           <h3 className="text-lg font-semibold">Have feedback or feature requests?</h3>
           <p className="text-foreground/60 text-sm">Help shape the future of this tool.</p>
         </div>
         <Button variant="outline" href="https://twitter.com/yogesh" target="_blank">
           Reach out on Twitter
         </Button>
      </section>

    </div>
  );
}

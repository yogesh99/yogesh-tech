import { getToolBySlug, tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ArrowLeft, Download, CheckCircle2, Lightbulb, Zap, MessageSquare } from "lucide-react";
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
    <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Back Link */}
      <Link 
        href="/tools" 
        className="inline-flex items-center text-sm font-bold text-foreground/50 hover:text-foreground transition-all duration-300 w-fit group bg-foreground/5 px-5 py-2.5 rounded-2xl border border-foreground/5 hover:border-foreground/10 hover:bg-foreground/[0.08]"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Tools
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tool Hero Card */}
        <div className="md:col-span-2 relative overflow-hidden bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-xl group">
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-foreground/[0.03] rounded-full blur-3xl group-hover:bg-foreground/[0.05] transition-colors duration-700 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 justify-between md:items-start relative z-10 w-full">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15]">
                  {tool.title}
                </h1>
                {tool.label && (
                   <span className="inline-flex items-center rounded-full border border-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground bg-foreground/5 backdrop-blur-sm shadow-sm">
                   {tool.label}
                 </span>
                )}
              </div>
              <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                {tool.fullDescription}
              </p>
            </div>
            
            {tool.installUrl && !tool.isComingSoon && (
              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 animate-in fade-in slide-in-from-right-8 duration-700 delay-150 relative z-10">
                <Button href={tool.installUrl} target="_blank" className="w-full md:w-auto h-14 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all px-8 text-base group/btn">
                  <Download className="mr-2 h-5 w-5 group-hover/btn:-translate-y-1 transition-transform" />
                  {tool.installText || "Install Extension"}
                </Button>
                {tool.installUrl.endsWith('.zip') && (
                  <p className="text-xs text-foreground/50 max-w-[200px] text-center md:text-right font-medium float-right self-end">
                    Requires manual installation via Chrome Developer Mode.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Screenshot Placeholder */}
        {tool.imageUrl && (
          <div className="md:col-span-2 relative overflow-hidden bg-foreground/[0.02] backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-4 md:p-6 transition-all duration-500 hover:shadow-xl group">
            <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-foreground/10 relative">
              <div className="absolute inset-0 bg-foreground/5 animate-pulse" />
              <img src={tool.imageUrl} alt={`${tool.title} Screenshot`} className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </div>
        )}

        {/* How it Works Card */}
        <div className="relative overflow-hidden bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:bg-blue-500/10 hover:shadow-xl group">
          <div className="h-14 w-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 shadow-sm">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground">How it works</h2>
          <ul className="flex flex-col gap-5">
            {tool.howItWorks.map((step, index) => (
              <li key={index} className="flex gap-4 items-start group/step">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/20 shadow-sm group-hover/step:bg-blue-500/20 transition-colors">
                  {index + 1}
                </div>
                <p className="text-foreground/80 leading-relaxed pt-1.5 font-medium">{step}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Card */}
        <div className="relative overflow-hidden bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:bg-emerald-500/10 hover:shadow-xl group">
          <div className="h-14 w-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3 shadow-sm">
            <Zap className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground">Benefits</h2>
          <ul className="flex flex-col gap-5">
            {tool.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start group/item">
                <div className="mt-1 bg-emerald-500/10 rounded-full p-1 border border-emerald-500/20 shadow-sm group-hover/item:bg-emerald-500/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                </div>
                <p className="text-foreground/80 leading-relaxed font-medium pt-0.5">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback CTA */}
        <div className="md:col-span-2 relative overflow-hidden bg-foreground/[0.02] backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:bg-foreground/[0.04] hover:shadow-xl group flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
           <div className="flex items-center gap-6">
             <div className="h-16 w-16 bg-background rounded-full hidden sm:flex items-center justify-center border border-foreground/10 shadow-sm group-hover:scale-105 transition-transform duration-500 shrink-0">
               <MessageSquare className="h-7 w-7 text-foreground/80" />
             </div>
             <div className="flex flex-col gap-2 relative z-10">
               <h3 className="text-2xl font-bold tracking-tight">Have feedback or feature requests?</h3>
               <p className="text-foreground/60 font-medium">Help shape the future of this tool.</p>
             </div>
           </div>
           
           <Button variant="outline" href="mailto:yogesh.waradkar@gmail.com" target="_blank" className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold bg-background/50 backdrop-blur-sm border-foreground/10 hover:bg-background transition-all shadow-sm">
             Reach out via Email
           </Button>
           
           <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-foreground/[0.03] rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>

      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.title,
            "operatingSystem": "Any Chrome-based Browser",
            "applicationCategory": "DeveloperApplication",
            "description": tool.fullDescription,
            "url": `https://yogesh.tech/tools/${tool.slug}`
          })
        }}
      />
    </div>
  );
}

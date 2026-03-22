import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { PenTool, ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | yogesh.tech",
  description: "Writings on software engineering, tools, and building products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-16 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <header className="flex flex-col gap-6 relative overflow-hidden bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-xl group">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-foreground/[0.04] rounded-full blur-3xl group-hover:bg-foreground/[0.06] transition-colors duration-700 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-foreground/70 mb-2 uppercase tracking-widest w-fit">
          <PenTool className="h-4 w-4" />
          The Lab Notes
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15]">
          Blog
        </h1>
        <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-medium">
          Thoughts, tutorials, and behind-the-scenes engineering of the tools built in the yogesh.tech utility lab.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="p-12 text-center text-foreground/60 border border-foreground/10 border-dashed rounded-[2.5rem] bg-foreground/[0.02]">
          No posts found. Add some .mdx files to src/content/blog to see them here.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col justify-between p-8 overflow-hidden rounded-[2.5rem] border border-foreground/20 shadow-lg md:border-foreground/10 md:shadow-none bg-background/60 md:bg-background/50 backdrop-blur-xl transition-all duration-500 md:hover:bg-background/80 md:hover:shadow-xl md:hover:-translate-y-1 md:hover:border-foreground/20 w-full min-h-[280px]"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-foreground/[0.05] md:bg-foreground/[0.03] rounded-full blur-2xl md:group-hover:bg-foreground/[0.05] transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold tracking-widest uppercase text-foreground/60 shadow-sm">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                
                <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-3 leading-snug group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sm text-foreground/70 mb-8 leading-relaxed font-medium flex-grow">
                  {post.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-foreground/10 w-full flex items-center justify-between text-sm font-bold text-foreground/80">
                  Read Article
                  <ArrowRight className="h-4 w-4 translate-x-1 -translate-y-1 md:translate-x-0 md:translate-y-0 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

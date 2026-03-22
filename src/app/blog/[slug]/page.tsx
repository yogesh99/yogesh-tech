import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found | yogesh.tech" };
  }

  return {
    title: `${post.title} | yogesh.tech`,
    description: post.description,
  };
}

// Custom components to perfectly style the MDX output using Tailwind variables
const components = {
  h1: (props: any) => <h1 className="text-4xl font-extrabold tracking-tight mt-10 mb-6 font-sans" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold tracking-tight mt-10 mb-4 border-b border-foreground/10 pb-2 font-sans text-foreground/90" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold tracking-tight mt-8 mb-4 shadow-[none] text-foreground/80" {...props} />,
  p: (props: any) => <p className="leading-relaxed text-lg text-foreground/80 mb-6 font-medium" {...props} />,
  pre: (props: any) => <pre className="not-prose bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-5 overflow-x-auto my-6 text-sm backdrop-blur-sm shadow-inner text-foreground/80 font-mono" {...props} />,
  code: (props: any) => <code className="bg-foreground/[0.05] rounded-md px-1.5 py-0.5 text-[0.9em] font-mono font-bold border border-foreground/10 drop-shadow-sm text-foreground/80" {...props} />,
  a: (props: any) => <a className="text-blue-600 dark:text-blue-400 hover:text-blue-500 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-500 font-semibold transition-all" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80 font-medium" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground/80 font-medium" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/70 my-6 bg-foreground/[0.02] py-2 pr-4 rounded-r-xl" {...props} />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto pb-20 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm font-bold text-foreground/50 hover:text-foreground transition-all duration-300 w-fit group bg-foreground/5 px-5 py-2.5 rounded-2xl border border-foreground/5 hover:border-foreground/10 hover:bg-foreground/[0.08] mb-10"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <header className="mb-14 flex flex-col gap-6 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.15] text-foreground">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-foreground/60 font-medium">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-[11px] font-bold tracking-widest uppercase text-foreground/80 shadow-sm">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
        
        {/* Subtle decorative line */}
        <div className="h-px w-full bg-gradient-to-r from-foreground/10 to-transparent mt-4" />
      </header>

      {/* The prose plugin is generally meant for standard tailwind setups. We will use the plugin but with our custom components mapping for exact parity with the new glowing UI style. */}
      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-p:leading-relaxed">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}

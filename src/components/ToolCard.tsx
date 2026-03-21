import { Button } from './Button';
import { ArrowRight, Lock } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  slug: string;
  isComingSoon?: boolean;
  label?: string;
}

export default function ToolCard({ title, description, slug, isComingSoon, label }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 md:p-8 overflow-hidden rounded-[2rem] border border-foreground/10 bg-background/40 backdrop-blur-xl hover:bg-background/60 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 w-full min-h-[280px]">
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-foreground transition-colors">
            {title}
          </h3>
          {label && (
            <span className="inline-flex items-center rounded-full border border-foreground/10 px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-foreground bg-foreground/5 backdrop-blur-sm shadow-sm whitespace-nowrap ml-4 mt-1">
              {label}
            </span>
          )}
        </div>
        <p className="text-sm md:text-base text-foreground/60 mb-8 leading-relaxed max-w-sm flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-foreground/5 w-full flex items-center justify-between">
          {isComingSoon ? (
            <div className="flex items-center text-sm font-semibold text-foreground/40">
              <Lock className="mr-2 h-4 w-4" />
              In Development
            </div>
          ) : (
            <Button href={`/tools/${slug}`} variant="secondary" className="w-full sm:w-auto rounded-xl text-sm font-semibold shadow-sm group-hover:bg-foreground group-hover:text-background transition-all hover:shadow-md">
              View Specifics
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

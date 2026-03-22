import { Button } from './Button';
import { ArrowRight, Lock, Command } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  slug: string;
  isComingSoon?: boolean;
  label?: string;
}

export default function ToolCard({ title, description, slug, isComingSoon, label }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-8 overflow-hidden rounded-[2.5rem] border border-foreground/20 shadow-lg md:border-foreground/10 md:shadow-none bg-background/60 md:bg-background/50 backdrop-blur-xl transition-all duration-500 md:hover:bg-background/80 md:hover:shadow-xl md:hover:-translate-y-1 md:hover:border-foreground/20 w-full min-h-[320px]">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-foreground/[0.05] md:bg-foreground/[0.03] rounded-full blur-2xl md:group-hover:bg-foreground/[0.05] transition-colors duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className="h-14 w-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 text-foreground/80 scale-110 -rotate-3 md:scale-100 md:rotate-0 md:group-hover:scale-110 md:group-hover:-rotate-3 transition-transform duration-500 shadow-sm">
             <Command className="h-6 w-6" />
          </div>
          {label && (
            <span className="inline-flex items-center rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-foreground bg-background/50 backdrop-blur-sm shadow-sm whitespace-nowrap">
              {label}
            </span>
          )}
        </div>
        
        <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-3 leading-snug">
          {title}
        </h3>
        
        <p className="text-sm text-foreground/70 mb-8 leading-relaxed font-medium flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-foreground/10 w-full flex items-center justify-between">
          {isComingSoon ? (
            <div className="flex w-full justify-center items-center text-sm font-bold text-foreground/40 bg-foreground/5 px-4 py-3 rounded-2xl">
              <Lock className="mr-2 h-4 w-4" />
              In Development
            </div>
          ) : (
            <Button href={`/tools/${slug}`} className="w-full rounded-2xl text-sm font-bold shadow-sm md:shadow-none transition-all md:hover:shadow-md group/btn h-12">
              View Specifics
              <ArrowRight className="ml-2 h-4 w-4 translate-x-1 -translate-y-1 md:translate-x-0 md:translate-y-0 md:group-hover/btn:translate-x-1 md:group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

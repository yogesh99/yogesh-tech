import Link from 'next/link';
import { Button } from './Button';

interface ToolCardProps {
  title: string;
  description: string;
  slug: string;
  isComingSoon?: boolean;
  label?: string;
}

export default function ToolCard({ title, description, slug, isComingSoon, label }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 overflow-hidden rounded-2xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] transition-colors shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-mono text-xl font-bold tracking-tight group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          {label && (
            <span className="inline-flex items-center rounded-full border border-foreground/20 px-2.5 py-0.5 text-xs font-semibold text-foreground/70 bg-background/50 backdrop-blur-sm">
              {label}
            </span>
          )}
        </div>
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-foreground/5">
        {isComingSoon ? (
          <Button variant="outline" className="w-full justify-center" disabled>
            Coming Soon
          </Button>
        ) : (
          <Button href={`/tools/${slug}`} variant="default" className="w-full justify-center group-hover:bg-foreground/80">
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}

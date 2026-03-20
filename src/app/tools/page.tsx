import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export const metadata = {
  title: "Tools | yogesh.tech",
  description: "Explore practical developer tools, browser extensions, and utilities.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-mono">
          All Tools
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          A collection of utilities built to solve specific problems. 
          Expect a mix of browser extensions, web apps, and CLI tools.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.shortDescription}
            slug={tool.slug}
            isComingSoon={tool.isComingSoon}
            label={tool.label}
          />
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-mono font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          yogesh.tech
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}

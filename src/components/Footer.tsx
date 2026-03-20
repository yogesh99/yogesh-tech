"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-foreground/10 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-foreground/60">
          &copy; {year ? year : ""} yogesh.tech. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-foreground/60">
          <Link href="https://github.com/yogesh99" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}

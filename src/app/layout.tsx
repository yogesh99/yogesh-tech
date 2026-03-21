import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yogesh.tech'),
  title: "yogesh.tech | Developer Tools & Utilities",
  description: "A free, privacy-first developer utility lab and product studio building fast, practical software tools for developers and creators.",
  keywords: ["developer tools", "dev utilities", "productivity software", "Chrome extensions", "Web Cleaner"],
  authors: [{ name: "Yogesh Waradkar", url: "https://github.com/yogesh99" }],
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground/20 selection:text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Person",
               "name": "Yogesh Waradkar",
               "url": "https://yogesh.tech",
               "jobTitle": "Software Engineer",
               "sameAs": [
                 "https://github.com/yogesh99"
               ]
             })
          }}
        />
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";

function BookmarkIcon({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Logo + Title */}
          <div className="flex items-center gap-4 mb-8">
            <BookmarkIcon className="w-14 h-14 text-primary" filled />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Bookmark
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
            Remember everything. Effortlessly.
          </p>
          
          {/* CTA Button */}
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg transition-colors hover:bg-primary/80"
          >
            <AppleIcon className="w-5 h-5" />
            Download for macOS
          </a>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Beta · macOS 14+
          </p>
        </div>
        
        {/* Scroll indicator - fades out on scroll */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 1: Timeline - Full width browser */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Left-aligned header */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Your Timeline of Memories
            </h2>
            <p className="text-lg text-muted-foreground">
              Bookmark quietly observes what you do on your computer and builds 
              meaningful memories you can explore anytime.
            </p>
          </div>
          
          {/* Full width browser */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-muted-foreground">Bookmark</span>
              </div>
              <div className="aspect-[16/10] bg-gradient-to-br from-background via-muted/20 to-background" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Search - Side by side (text left, browser right) */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-muted/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text on left */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Search and Recall
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ask natural questions about what you were working on. Bookmark 
                surfaces the memories that matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary text-lg">?</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">&ldquo;What was that API I was reading about?&rdquo;</p>
                    <p className="text-sm text-muted-foreground">Natural language search through your history</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary text-lg">↺</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Instant context switching</p>
                    <p className="text-sm text-muted-foreground">Jump back to exactly where you left off</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Browser on right */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-sm text-muted-foreground">Bookmark</span>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-background via-muted/20 to-background" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Distill - Side by side reversed (browser left, text right) */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Browser on left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-sm text-muted-foreground">Bookmark</span>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-background via-muted/20 to-background" />
              </div>
            </div>
            
            {/* Text on right */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Distill What Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a clear summary of your work. Bookmark intelligently highlights 
                the important moments from your day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary text-lg">◈</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Smart summaries</p>
                    <p className="text-sm text-muted-foreground">AI-powered distillation of your activities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Daily digests</p>
                    <p className="text-sm text-muted-foreground">Start each day knowing where you left off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-64 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to remember everything?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download Bookmark and start building your personal timeline today.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg transition-colors hover:bg-primary/80"
          >
            <AppleIcon className="w-5 h-5" />
            Download for macOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <BookmarkIcon className="w-5 h-5 text-primary" filled />
              <span className="font-medium">Bookmark</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with care. Your memories, Your machine.
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs text-muted-foreground/60">
              © 2025 Bookmark
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

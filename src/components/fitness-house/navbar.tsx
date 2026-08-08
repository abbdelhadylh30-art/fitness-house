"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Studio", href: "#studio" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#stories" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-sm shadow-lg group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6 text-charcoal" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl text-white tracking-wider">
              FITNESS HOUSE
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-lime font-sans">
              Re-life Your Body
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-lime transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-lime hover:bg-lime-bright text-charcoal font-semibold uppercase tracking-wider rounded-none px-6"
          >
            <Link href="#join">Join Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-charcoal/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80 hover:text-lime transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-lime hover:bg-lime-bright text-charcoal font-semibold uppercase tracking-wider rounded-none mt-2"
            >
              <Link href="#join" onClick={() => setOpen(false)}>
                Join Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

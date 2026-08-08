"use client";

import Link from "next/link";
import { Activity, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const FOOTER_LINKS = {
  Studio: [
    { label: "Programs", href: "#programs" },
    { label: "The Studio", href: "#studio" },
    { label: "Trainers", href: "#trainers" },
    { label: "Schedule", href: "#schedule" },
  ],
  Membership: [
    { label: "Pricing", href: "#pricing" },
    { label: "Start Trial", href: "#join" },
    { label: "Gift Cards", href: "#" },
    { label: "Corporate Plans", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "#studio" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#join" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Waiver", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const SOCIAL = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "Youtube" },
  { icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white border-t border-lime/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-lime">
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
            <p className="text-sm text-white/60 font-sans leading-relaxed mb-6 max-w-xs">
              A boutique fitness studio in Brooklyn blending yoga, pilates, HIIT
              and strength under one industrial roof. Coaching that rebuilds you.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex items-center justify-center w-10 h-10 border border-white/15 hover:bg-lime hover:text-charcoal hover:border-lime text-white/70 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-display text-base tracking-[0.2em] text-lime mb-4 uppercase">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/70 hover:text-lime transition-colors font-sans"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-sans">
            &copy; {new Date().getFullYear()} Fitness House Studio LLC. All
            rights reserved.
          </p>
          <p className="text-xs text-white/50 font-sans">
            Made with grit &amp; green juice in Brooklyn, NY.
          </p>
        </div>
      </div>
    </footer>
  );
}

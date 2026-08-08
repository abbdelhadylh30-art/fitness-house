"use client";

import { Dumbbell, Flame, Heart, Zap } from "lucide-react";

const ITEMS = [
  { icon: Dumbbell, label: "Strength" },
  { icon: Flame, label: "HIIT" },
  { icon: Heart, label: "Yoga" },
  { icon: Zap, label: "Pilates" },
];

export function Marquee() {
  // duplicate for seamless loop
  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="bg-charcoal text-white py-5 border-y border-lime/20 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-4 px-8 shrink-0"
              aria-hidden={i >= ITEMS.length}
            >
              <Icon className="w-6 h-6 text-lime" />
              <span className="font-display text-3xl tracking-wider text-white/90">
                {item.label}
              </span>
              <span className="text-lime text-2xl">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

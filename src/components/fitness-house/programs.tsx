"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

const PROGRAMS = [
  {
    title: "Power Yoga",
    image: "/images/class-yoga.png",
    duration: "60 min",
    intensity: "Low — Medium",
    description:
      "Dynamic vinyasa flows that build heat, flexibility and breath control. Suitable for all levels — modifications always offered. Bring a mat, water and an open mind.",
    schedule: "Mon / Wed / Fri — 7:00 AM & 6:30 PM",
  },
  {
    title: "HIIT Inferno",
    image: "/images/class-hiit.png",
    duration: "45 min",
    intensity: "High",
    description:
      "High-intensity interval circuits that torch calories and rebuild your cardio engine. Battle ropes, box jumps, sleds and kettlebells in a coach-led sweat storm.",
    schedule: "Tue / Thu — 6:00 AM & 7:00 PM, Sat — 9:00 AM",
  },
  {
    title: "Pilates Reformer",
    image: "/images/class-pilates.png",
    duration: "55 min",
    intensity: "Medium",
    description:
      "Spring-resisted reformer work that lengthens, strengthens and aligns. Deep core engagement, precise control, and a long, lean silhouette — the smart way to train.",
    schedule: "Mon — Fri — 12:00 PM & 5:30 PM",
  },
  {
    title: "Strength Lab",
    image: "/images/class-strength.png",
    duration: "60 min",
    intensity: "Medium — High",
    description:
      "Barbell-centric small-group coaching. Squats, deadlifts, presses and pulls — programmed in 8-week cycles so you actually get measurably stronger every block.",
    schedule: "Mon / Wed / Fri — 6:00 PM, Sat — 10:30 AM",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-lime-deep" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
                What we coach
              </span>
            </div>
            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-charcoal leading-[0.9]">
              Four disciplines.
              <br />
              <span className="text-lime-deep">One body rebuilt.</span>
            </h2>
          </div>
          <p className="max-w-md text-charcoal/70 text-base sm:text-lg font-sans leading-relaxed">
            Each program is built on a periodized framework and led by certified
            coaches. Drop into a single class, or stack them across the week for
            a complete transformation.
          </p>
        </div>
      </div>

      {/* Program cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-charcoal overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} class in session`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-lime text-charcoal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider font-sans">
                  <Clock className="w-3 h-3" />
                  {p.duration}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-charcoal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider font-sans">
                  {p.intensity}
                </div>
                <h3 className="absolute bottom-3 left-3 right-3 font-display text-3xl text-white tracking-wider">
                  {p.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 text-white">
                <p className="text-sm text-white/70 font-sans leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-lime font-sans font-bold mb-1">
                    Schedule
                  </div>
                  <div className="text-xs text-white/80 font-sans">
                    {p.schedule}
                  </div>
                </div>
                <Link
                  href="#join"
                  className="mt-4 inline-flex items-center justify-between bg-lime hover:bg-lime-bright text-charcoal font-bold uppercase tracking-wider text-xs px-4 py-3 transition-colors"
                >
                  Book a class
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

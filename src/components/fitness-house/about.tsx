"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Clock, Sparkles } from "lucide-react";

const STATS = [
  { icon: Award, value: "10+", label: "Years coaching" },
  { icon: Users, value: "12K+", label: "Members trained" },
  { icon: Clock, value: "48", label: "Weekly classes" },
  { icon: Sparkles, value: "4.9", label: "Member rating" },
];

const FEATURES = [
  {
    title: "Coach-led, not screen-led",
    body: "Every session is led by a certified coach who watches your form, scales the workout and pushes you past the wall. No QR-code check-ins, no app-driven solo training — real humans, real coaching.",
  },
  {
    title: "Periodized programming",
    body: "We program in 8-week blocks with deload weeks, strength benchmarks and recovery testing. You always know what you're training, why you're training it, and how to measure progress.",
  },
  {
    title: "Industrial-grade facility",
    body: "3,200 sq ft of riveted steel, polished concrete and chalk-dusted platforms. Calibrated barbells, spring-loaded reformers, and a dedicated yoga room with floor-to-ceiling windows.",
  },
];

export function About() {
  return (
    <section
      id="studio"
      className="py-20 sm:py-28 bg-secondary relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-image.png"
                alt="Athlete stretching with focus in a sunlit studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-charcoal text-white p-5 shadow-2xl max-w-[220px]">
              <div className="font-display text-5xl text-lime leading-none">
                98%
              </div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-2 font-sans">
                of members hit their first 90-day goal
              </div>
            </div>
            {/* Decorative lime block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-lime-deep" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
                The studio
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[0.95] mb-6">
              More than a gym.
              <br />
              <span className="text-lime-deep">A house that rebuilds you.</span>
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg font-sans leading-relaxed mb-8">
              Fitness House started in 2014 as a single yoga room above a metal
              workshop. Today it spans four disciplines, twelve coaches and a
              community of members who refuse to settle for ordinary. We blend
              industrial grit with mindful movement — because real transformation
              lives in the tension between effort and ease.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-lime shrink-0">
                    <span className="font-display text-xl text-charcoal">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-charcoal tracking-wide mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10"
        >
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-white p-6 flex flex-col items-center text-center"
              >
                <Icon className="w-7 h-7 text-lime-deep mb-3" />
                <div className="font-display text-4xl sm:text-5xl text-charcoal leading-none">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/60 mt-2 font-sans">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

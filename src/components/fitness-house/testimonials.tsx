"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "I came in barely able to touch my toes after two years of remote work. Eight months later I'm hitting yoga flows I never thought possible AND deadlifting bodyweight. The coaches here actually see you.",
    name: "Priya Anand",
    role: "Member since 2023",
    rating: 5,
    initial: "P",
  },
  {
    quote:
      "Fitness House is the first gym I've ever looked forward to going to. The HIIT classes are brutal in the best way and the community shows up for each other. Down 22 pounds and gained a friend group.",
    name: "Marcus Bell",
    role: "Member since 2022",
    rating: 5,
    initial: "M",
  },
  {
    quote:
      "After my second pregnancy the reformer classes with Lena rebuilt my core from the inside out. I'm stronger now than I was before kids. Cannot recommend the pilates program highly enough.",
    name: "Sofia Reyes",
    role: "Member since 2024",
    rating: 5,
    initial: "S",
  },
  {
    quote:
      "Diego programs like a scientist and motivates like a coach. The strength lab took my back squat from 95 to 225 in two blocks. The riveted steel walls don't hurt the vibe either.",
    name: "James Whitfield",
    role: "Member since 2021",
    rating: 5,
    initial: "J",
  },
];

export function Testimonials() {
  return (
    <section
      id="stories"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-lime-deep" />
            <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
              Member stories
            </span>
            <span className="h-px w-10 bg-lime-deep" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-charcoal leading-[0.9] mb-5">
            They re-lifed.
            <br />
            <span className="text-lime-deep">You can too.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative bg-secondary p-7 sm:p-8 border-l-4 border-lime hover:bg-charcoal hover:text-white transition-colors group"
            >
              <Quote
                className="absolute top-6 right-6 w-12 h-12 text-lime-deep/20 group-hover:text-lime/30 transition-colors"
                fill="currentColor"
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-lime text-lime"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-sans leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-4 border-t border-current/10">
                <div className="flex items-center justify-center w-11 h-11 bg-lime text-charcoal font-display text-xl tracking-wider">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display text-lg tracking-wider">
                    {t.name}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-charcoal/60 group-hover:text-white/60 font-sans">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

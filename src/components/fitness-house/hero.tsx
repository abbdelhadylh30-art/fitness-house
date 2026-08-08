"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Activity } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal text-white">
      {/* Industrial rivet background covering whole hero */}
      <div className="absolute inset-0 rivet-bg" />

      {/* Bright lime green diagonal accent slash (top-right going down-left) */}
      <div
        className="absolute inset-0 bg-lime pointer-events-none"
        style={{
          clipPath: "polygon(72% 0, 100% 0, 28% 100%, 0 100%)",
          opacity: 0.95,
        }}
      />

      {/* Subtle inner edge highlight on the lime/dark border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, transparent 49.5%, rgba(255,255,255,0.12) 50%, transparent 50.5%)",
        }}
      />

      {/* Bottom lime mat strip (only over the dark side, left half) */}
      <div
        className="absolute bottom-0 left-0 h-[10%] bg-lime shadow-[0_-12px_30px_rgba(0,0,0,0.4)]"
        style={{ width: "55%" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[10%] opacity-30"
        style={{
          width: "55%",
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 60px, rgba(0,0,0,0.18) 60px, rgba(0,0,0,0.18) 62px)",
        }}
      />

      {/* Main content grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: headline + CTA */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 bg-charcoal/80 backdrop-blur-sm border border-lime/40 px-4 py-1.5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-lime animate-lime-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white font-sans">
                New members — 50% off first month
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display leading-[0.85] tracking-tight"
            >
              <span className="block text-7xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] text-white">
                Re-life
              </span>
              <span className="block text-7xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] text-lime">
                Your Body
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-md text-base sm:text-lg text-white/85 font-sans leading-relaxed"
            >
              Boutique training that rebuilds you from the ground up. Yoga,
              pilates, HIIT and strength — under one industrial roof. Move
              better, feel stronger, live again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#join"
                className="group inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-charcoal font-bold uppercase tracking-wider px-7 py-4 transition-all hover:translate-x-1"
              >
                Start 7-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#programs"
                className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold uppercase tracking-wider px-7 py-4 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch Classes
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-6 sm:gap-10"
            >
              <div>
                <div className="font-display text-4xl sm:text-5xl text-lime leading-none">
                  12K+
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 font-sans mt-1">
                  Members trained
                </div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="font-display text-4xl sm:text-5xl text-lime leading-none">
                  48
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 font-sans mt-1">
                  Weekly classes
                </div>
              </div>
              <div className="h-10 w-px bg-white/20 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-4xl sm:text-5xl text-lime leading-none flex items-center gap-1">
                  4.9
                  <Star className="w-5 h-5 fill-lime text-lime" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 font-sans mt-1">
                  Member rating
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: model image card with logo badge */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              {/* Lime accent frame behind image */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-lime -z-10" />
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-4 border-white/20 -z-10" />

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/hero-model.png"
                  alt="Athletic woman performing seated straddle stretch on lime green yoga mat"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Subtle gradient overlay to blend bottom into mat */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>

              {/* Floating white logo badge (top right of image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -top-6 -right-4 sm:-right-6 z-20"
              >
                <div className="bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-2xl">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-charcoal">
                    <Activity
                      className="w-6 h-6 sm:w-7 sm:h-7 text-lime"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="font-display text-base sm:text-lg text-charcoal tracking-[0.15em] text-center leading-none">
                    FITNESS
                  </div>
                  <div className="font-display text-base sm:text-lg text-charcoal tracking-[0.15em] text-center leading-none mt-0.5">
                    HOUSE
                  </div>
                  <div className="mt-1.5 h-0.5 w-full bg-lime" />
                  <div className="text-[8px] uppercase tracking-[0.25em] text-charcoal/70 text-center mt-1.5 font-sans font-semibold">
                    Est. 2014
                  </div>
                </div>
              </motion.div>

              {/* Floating tag bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 z-20 bg-charcoal text-white px-4 py-3 shadow-2xl border-l-2 border-lime"
              >
                <div className="font-display text-2xl text-lime leading-none">
                  4 disciplines
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 font-sans mt-1">
                  Yoga · HIIT · Pilates · Strength
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-sans font-bold">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-6 bg-lime"
          />
        </div>
      </motion.div>
    </section>
  );
}

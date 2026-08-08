"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="join"
      className="relative py-20 sm:py-28 bg-charcoal text-white overflow-hidden"
    >
      {/* Lime diagonal background accent */}
      <div
        className="absolute inset-0 bg-lime"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />
      <div className="absolute inset-0 rivet-bg opacity-90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-charcoal/80 backdrop-blur-sm border border-lime/40 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime animate-lime-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white font-sans">
                7-day free trial — no card required
              </span>
            </div>

            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.85] mb-6">
              Stop scrolling.
              <br />
              <span className="text-lime">Start moving.</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-md">
              Drop your details below and we'll set you up with a free 7-day
              pass. Try every discipline, meet every coach, find the one that
              re-lifes you.
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/50 px-5 py-4 font-sans focus:outline-none focus:border-lime focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-charcoal font-bold uppercase tracking-wider px-7 py-4 transition-all whitespace-nowrap"
              >
                Claim pass
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-xs text-white/50 font-sans mt-3">
              We'll email your pass instantly. No spam, ever.
            </p>
          </motion.div>

          {/* Right: contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white text-charcoal p-7 sm:p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-lime-deep" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
                Visit the studio
              </span>
            </div>

            <h3 className="font-display text-4xl tracking-wider mb-6">
              Fitness House HQ
            </h3>

            <ul className="space-y-5 font-sans">
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-charcoal text-lime shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">
                    Address
                  </div>
                  <div className="text-base">
                    142 Foundry Lane
                    <br />
                    Brooklyn, NY 11201
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-charcoal text-lime shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">
                    Phone
                  </div>
                  <Link
                    href="tel:+17185551234"
                    className="text-base hover:text-lime-deep transition-colors"
                  >
                    (718) 555-1234
                  </Link>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-charcoal text-lime shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">
                    Email
                  </div>
                  <Link
                    href="mailto:hello@fitnesshouse.co"
                    className="text-base hover:text-lime-deep transition-colors"
                  >
                    hello@fitnesshouse.co
                  </Link>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-charcoal/10">
              <div className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold mb-2">
                Hours
              </div>
              <div className="text-sm font-sans space-y-1">
                <div className="flex justify-between">
                  <span>Mon — Fri</span>
                  <span className="font-semibold">5:30 AM — 9:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">7:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">8:00 AM — 2:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

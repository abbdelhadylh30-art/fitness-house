"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Drop-In",
    price: 28,
    period: "per class",
    description: "Perfect for travelers or trying us out before committing.",
    features: [
      "Any single class on the schedule",
      "Locker & towel rental included",
      "First-time guests get 20% off",
      "No commitment, cancel anytime",
    ],
    cta: "Book a class",
    highlight: false,
  },
  {
    name: "All-Access",
    price: 169,
    period: "per month",
    description: "Unlimited everything — the way Fitness House was meant to be.",
    features: [
      "Unlimited yoga, HIIT, pilates & strength",
      "Free InBody composition scan monthly",
      "Guest pass for a friend every month",
      "Priority booking 7 days ahead",
      "10% off workshops & retail",
      "Freeze your membership up to 4 weeks/yr",
    ],
    cta: "Start 7-day trial",
    highlight: true,
  },
  {
    name: "Personal Training",
    price: 320,
    period: "per month (8 sessions)",
    description: "One-on-one coaching with a dedicated program built around you.",
    features: [
      "8 private 60-min sessions / month",
      "Custom periodized training plan",
      "Bi-weekly InBody + movement screen",
      "Direct WhatsApp access to your coach",
      "Nutrition guidance & habit coaching",
      "Unlimited group classes included",
    ],
    cta: "Book consult",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-secondary relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-lime-deep" />
            <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
              Memberships
            </span>
            <span className="h-px w-10 bg-lime-deep" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-charcoal leading-[0.9] mb-5">
            Pick your path.
            <br />
            <span className="text-lime-deep">No contracts. No tricks.</span>
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg font-sans leading-relaxed">
            All plans are month-to-month. Cancel online in two clicks. We earn
            your membership every month — or you walk. Simple.
          </p>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-7 sm:p-8 ${
                plan.highlight
                  ? "bg-charcoal text-white shadow-2xl lg:-mt-4 lg:mb-4 lg:scale-[1.03]"
                  : "bg-white text-charcoal border border-charcoal/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-lime text-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-sans">
                  <Sparkles className="w-3 h-3" />
                  Most popular
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`font-display text-3xl tracking-wider mb-2 ${
                  plan.highlight ? "text-lime" : "text-charcoal"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm font-sans leading-relaxed mb-6 ${
                  plan.highlight ? "text-white/70" : "text-charcoal/60"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-current/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-6xl tracking-tight">
                    ${plan.price}
                  </span>
                  <span
                    className={`text-xs font-sans ${
                      plan.highlight ? "text-white/60" : "text-charcoal/60"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-sans">
                    <span
                      className={`mt-0.5 flex items-center justify-center w-5 h-5 shrink-0 ${
                        plan.highlight ? "bg-lime text-charcoal" : "bg-charcoal text-white"
                      }`}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className={plan.highlight ? "text-white/80" : "text-charcoal/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#join"
                className={`inline-flex items-center justify-center px-6 py-4 font-bold uppercase tracking-wider text-sm transition-all ${
                  plan.highlight
                    ? "bg-lime hover:bg-lime-bright text-charcoal"
                    : "bg-charcoal hover:bg-charcoal-light text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-xs text-charcoal/50 font-sans mt-8 max-w-xl mx-auto">
          All memberships include a free InBody scan on day one. Students,
          veterans and first-responders receive 15% off — just show your ID at
          the front desk.
        </p>
      </div>
    </section>
  );
}

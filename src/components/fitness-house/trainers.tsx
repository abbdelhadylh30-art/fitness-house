"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const TRAINERS = [
  {
    name: "Maya Okonkwo",
    role: "Head of Yoga & Mobility",
    image: "/images/trainer-1.png",
    bio: "RYT-500, 12 years teaching. Former professional dancer who rebuilt her own body after injury. Specialty: fascial release, hip mobility and breath-led vinyasa.",
    specialties: ["Vinyasa", "Mobility", "Breathwork"],
    instagram: "@maya.moves",
  },
  {
    name: "Diego Ramirez",
    role: "Head of Strength & HIIT",
    image: "/images/trainer-2.png",
    bio: "CSCS, ex-collegiate sprinter. Coaches the barbell complex like a religion. Specialty: power development, metabolic conditioning and the art of suffering productively.",
    specialties: ["Barbell", "HIIT", "Power"],
    instagram: "@diego.lifts",
  },
  {
    name: "Lena Fischer",
    role: "Head of Pilates",
    image: "/images/trainer-3.png",
    bio: "Polestar-certified, 9 years on the reformer. Trained in clinical pilates — works with post-rehab clients, pre-natal and anyone chasing that long, lean line.",
    specialties: ["Reformer", "Rehab", "Pre-natal"],
    instagram: "@lena.lengthens",
  },
];

export function Trainers() {
  return (
    <section
      id="trainers"
      className="py-20 sm:py-28 bg-charcoal text-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-lime" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-sans font-semibold">
                The coaches
              </span>
            </div>
            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              Coaches who actually
              <br />
              <span className="text-lime">coach you.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/70 text-base sm:text-lg font-sans leading-relaxed">
            Every coach at Fitness House holds a nationally-recognized
            certification and completes 40 hours of internal mentorship before
            leading a class. You're in capable hands.
          </p>
        </div>

        {/* Trainer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINERS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-charcoal-light overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.image}
                  alt={`${t.name}, ${t.role} at Fitness House`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                {/* Specialties chips */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-lime text-charcoal px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-sans"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-3xl text-white tracking-wider">
                    {t.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-lime font-sans font-semibold mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-sm text-white/70 font-sans leading-relaxed mb-4">
                  {t.bio}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-lime transition-colors font-sans"
                  >
                    <Instagram className="w-4 h-4" />
                    {t.instagram}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 border border-white/20 hover:bg-lime hover:text-charcoal hover:border-lime text-white/70 transition-all"
                    aria-label={`${t.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

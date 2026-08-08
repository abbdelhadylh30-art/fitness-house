"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User } from "lucide-react";

type ClassRow = {
  time: string;
  name: string;
  coach: string;
  duration: string;
  intensity: "Low" | "Medium" | "High";
  spots: number;
};

const SCHEDULE: Record<string, ClassRow[]> = {
  Monday: [
    { time: "06:00", name: "Sunrise Vinyasa", coach: "Maya", duration: "60 min", intensity: "Low", spots: 4 },
    { time: "07:30", name: "Strength Lab", coach: "Diego", duration: "60 min", intensity: "High", spots: 0 },
    { time: "12:00", name: "Reformer Express", coach: "Lena", duration: "45 min", intensity: "Medium", spots: 6 },
    { time: "17:30", name: "Pilates Reformer", coach: "Lena", duration: "55 min", intensity: "Medium", spots: 2 },
    { time: "18:30", name: "Power Yoga", coach: "Maya", duration: "60 min", intensity: "Low", spots: 8 },
  ],
  Tuesday: [
    { time: "06:00", name: "HIIT Inferno", coach: "Diego", duration: "45 min", intensity: "High", spots: 3 },
    { time: "09:00", name: "Slow Flow Yoga", coach: "Maya", duration: "75 min", intensity: "Low", spots: 10 },
    { time: "12:00", name: "Core & Posture", coach: "Lena", duration: "45 min", intensity: "Medium", spots: 5 },
    { time: "17:30", name: "Strength Lab", coach: "Diego", duration: "60 min", intensity: "High", spots: 1 },
    { time: "19:00", name: "HIIT Inferno", coach: "Diego", duration: "45 min", intensity: "High", spots: 0 },
  ],
  Wednesday: [
    { time: "06:30", name: "Power Yoga", coach: "Maya", duration: "60 min", intensity: "Low", spots: 7 },
    { time: "08:00", name: "Reformer Foundations", coach: "Lena", duration: "55 min", intensity: "Medium", spots: 4 },
    { time: "12:00", name: "Mobility Reset", coach: "Maya", duration: "45 min", intensity: "Low", spots: 9 },
    { time: "18:00", name: "Strength Lab", coach: "Diego", duration: "60 min", intensity: "High", spots: 2 },
    { time: "19:30", name: "Power Yoga", coach: "Maya", duration: "60 min", intensity: "Low", spots: 6 },
  ],
  Thursday: [
    { time: "06:00", name: "HIIT Inferno", coach: "Diego", duration: "45 min", intensity: "High", spots: 5 },
    { time: "07:30", name: "Reformer Burn", coach: "Lena", duration: "55 min", intensity: "Medium", spots: 0 },
    { time: "12:00", name: "Lunch Crush HIIT", coach: "Diego", duration: "30 min", intensity: "High", spots: 8 },
    { time: "17:30", name: "Slow Flow Yoga", coach: "Maya", duration: "75 min", intensity: "Low", spots: 4 },
    { time: "19:00", name: "HIIT Inferno", coach: "Diego", duration: "45 min", intensity: "High", spots: 1 },
  ],
  Friday: [
    { time: "06:30", name: "Power Yoga", coach: "Maya", duration: "60 min", intensity: "Low", spots: 6 },
    { time: "08:00", name: "Strength Lab", coach: "Diego", duration: "60 min", intensity: "High", spots: 3 },
    { time: "12:00", name: "Reformer Express", coach: "Lena", duration: "45 min", intensity: "Medium", spots: 5 },
    { time: "17:30", name: "Reformer Burn", coach: "Lena", duration: "55 min", intensity: "Medium", spots: 2 },
    { time: "18:30", name: "Power Yoga", coach: "Maya", duration: "60 min", intensity: "Low", spots: 9 },
  ],
  Saturday: [
    { time: "08:00", name: "Long Flow Yoga", coach: "Maya", duration: "90 min", intensity: "Low", spots: 12 },
    { time: "09:00", name: "HIIT Inferno", coach: "Diego", duration: "45 min", intensity: "High", spots: 0 },
    { time: "10:30", name: "Strength Lab", coach: "Diego", duration: "60 min", intensity: "High", spots: 4 },
    { time: "12:00", name: "Family Pilates", coach: "Lena", duration: "45 min", intensity: "Low", spots: 8 },
  ],
  Sunday: [
    { time: "09:00", name: "Restorative Yoga", coach: "Maya", duration: "75 min", intensity: "Low", spots: 10 },
    { time: "10:30", name: "Reformer Stretch", coach: "Lena", duration: "45 min", intensity: "Low", spots: 6 },
    { time: "11:30", name: "Open Gym", coach: "Diego", duration: "120 min", intensity: "Medium", spots: 15 },
  ],
};

const DAYS = Object.keys(SCHEDULE);

const intensityColor: Record<ClassRow["intensity"], string> = {
  Low: "bg-lime/20 text-lime",
  Medium: "bg-yellow-500/20 text-yellow-300",
  High: "bg-red-500/20 text-red-300",
};

export function Schedule() {
  const [day, setDay] = useState("Monday");

  return (
    <section
      id="schedule"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-lime-deep" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-sans font-semibold">
                Plan your week
              </span>
            </div>
            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-charcoal leading-[0.9]">
              Weekly
              <br />
              <span className="text-lime-deep">schedule.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-charcoal/60 font-sans font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-lime/30 border border-lime-deep" />
              Low
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500/30 border border-yellow-500" />
              Medium
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500/30 border border-red-500" />
              High
            </span>
          </div>
        </div>

        {/* Day selector */}
        <div className="flex gap-2 overflow-x-auto custom-scroll pb-2 mb-8 -mx-4 px-4">
          {DAYS.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`px-5 py-3 font-display text-xl tracking-wider transition-all whitespace-nowrap ${
                day === d
                  ? "bg-charcoal text-lime"
                  : "bg-secondary text-charcoal/70 hover:bg-charcoal/10"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <div className="bg-charcoal overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={day}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {SCHEDULE[day].map((row, i) => (
                <div
                  key={`${day}-${i}`}
                  className="grid grid-cols-12 gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10 last:border-b-0 items-center hover:bg-white/5 transition-colors"
                >
                  {/* Time */}
                  <div className="col-span-3 sm:col-span-2">
                    <div className="font-display text-2xl sm:text-3xl text-lime tracking-wider">
                      {row.time}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50 font-sans flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {row.duration}
                    </div>
                  </div>

                  {/* Class name */}
                  <div className="col-span-5 sm:col-span-4">
                    <div className="font-display text-xl sm:text-2xl text-white tracking-wide">
                      {row.name}
                    </div>
                    <div className="text-xs text-white/60 font-sans flex items-center gap-1 mt-0.5">
                      <User className="w-3 h-3" />
                      Coach {row.coach}
                    </div>
                  </div>

                  {/* Intensity */}
                  <div className="col-span-2 hidden sm:block">
                    <span
                      className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider font-sans ${intensityColor[row.intensity]}`}
                    >
                      {row.intensity}
                    </span>
                  </div>

                  {/* Spots + CTA */}
                  <div className="col-span-4 sm:col-span-4 flex items-center justify-end gap-3">
                    {row.spots === 0 ? (
                      <span className="text-xs uppercase tracking-wider text-red-400 font-sans font-semibold">
                        Full
                      </span>
                    ) : (
                      <span className="text-xs uppercase tracking-wider text-white/60 font-sans">
                        {row.spots} spots left
                      </span>
                    )}
                    <button
                      disabled={row.spots === 0}
                      className="text-[11px] uppercase tracking-wider font-bold font-sans px-3 py-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-lime text-charcoal hover:bg-lime-bright"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

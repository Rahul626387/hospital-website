
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  GraduationCap,
  UsersRound,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    title: "People First",
    description:
      "Work with a supportive team that values people, collaboration and compassion.",
    icon: HeartHandshake,
  },
  {
    title: "Learning & Growth",
    description:
      "Build your skills through continuous learning, training and new opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Team Culture",
    description:
      "Be part of a collaborative environment where every contribution matters.",
    icon: UsersRound,
  },
  {
    title: "Meaningful Work",
    description:
      "Make a real difference by contributing to quality patient care every day.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const WhyJoinUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-[#0A7A78]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#0A7A78]" />

            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0A7A78]">
              Why Join Us
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[44px]">
            Grow with a team that{" "}
            <span className="text-[#0A7A78]">cares.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            We believe great healthcare begins with great people. Join a
            workplace that values collaboration, learning and excellence.
          </p>
        </motion.div>

        {/* ================= BENEFITS ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={stagger}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            const iconColors = [
              {
                bg: "bg-emerald-50",
                text: "text-emerald-600",
                hover: "group-hover:bg-emerald-600",
              },
              {
                bg: "bg-sky-50",
                text: "text-sky-600",
                hover: "group-hover:bg-sky-600",
              },
              {
                bg: "bg-amber-50",
                text: "text-amber-600",
                hover: "group-hover:bg-amber-500",
              },
              {
                bg: "bg-orange-50",
                text: "text-orange-600",
                hover: "group-hover:bg-orange-500",
              },
            ];

            const color = iconColors[index % iconColors.length];

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
              >
                {/* Top Hover Line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#0A7A78] transition-all duration-500 group-hover:w-full" />

                {/* Icon + Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-xl ${color.bg} ${color.text} transition-all duration-300 ${color.hover} group-hover:text-white`}
                  >
                    <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />

                    {/* Work Mark */}
                    {/* <span className="absolute -right-1 -top-1 flex h-4 w-4 scale-0 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#0A7A78] shadow-sm transition-all duration-300 group-hover:scale-100">
                      ✓
                    </span> */}
                  </div>

                  <span className="text-[10px] font-black tracking-wider text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-black text-slate-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom Mark */}
                {/* <div className="mt-4 flex items-center gap-2">
                  <span className="h-1 w-5 rounded-full bg-[#0A7A78] transition-all duration-300 group-hover:w-9" />

                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300 transition-colors group-hover:text-[#0A7A78]">
                    Join Us
                  </span>
                </div> */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUs;

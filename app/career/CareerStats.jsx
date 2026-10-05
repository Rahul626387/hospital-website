"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  Building2,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const hospitalStats = [
  {
    id: 1,
    value: "500+",
    label: "Team Members",
    icon: UsersRound,
    color: "text-blue-600",
    bg: "bg-blue-50",
    line: "bg-blue-500",
  },
  {
    id: 2,
    value: "25+",
    label: "Departments",
    icon: Building2,
    color: "text-violet-600",
    bg: "bg-violet-50",
    line: "bg-violet-500",
  },
  {
    id: 3,
    value: "100+",
    label: "Specialists",
    icon: Stethoscope,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    line: "bg-emerald-500",
  },
  {
    id: 4,
    value: "24/7",
    label: "Patient Care",
    icon: HeartPulse,
    color: "text-rose-600",
    bg: "bg-rose-50",
    line: "bg-rose-500",
  },
];

const CareerStats = () => {
  return (
    <section className="relative z-20 -mt-7 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg lg:grid-cols-4">

          {hospitalStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ backgroundColor: "#f8fafc" }}
                className={`
                  group relative
                  flex items-center gap-3
                  px-4 py-4
                  sm:px-5 sm:py-5
                  transition-colors duration-300

                  border-slate-100

                  ${index === 0 ? "border-r border-b lg:border-b-0" : ""}
                  ${index === 1 ? "border-b lg:border-b-0 lg:border-r" : ""}
                  ${index === 2 ? "border-r" : ""}
                `}
              >

                {/* Icon */}
                <div
                  className={`
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    ${item.bg}
                    ${item.color}
                    transition-transform duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div
                    className={`
                      text-xl font-black
                      leading-none
                      sm:text-2xl
                      ${item.color}
                    `}
                  >
                    {item.value}
                  </div>

                  <p className="mt-1 truncate text-[11px] font-semibold text-slate-500 sm:text-xs">
                    {item.label}
                  </p>
                </div>

                {/* Bottom Line */}
                <div
                  className={`
                    absolute bottom-0 left-4
                    h-[2px] w-0
                    rounded-full
                    ${item.line}
                    transition-all duration-300
                    group-hover:w-8
                  `}
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CareerStats;
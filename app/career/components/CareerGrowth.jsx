"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  GraduationCap,
  BriefcaseBusiness,
  HeartPulse,
} from "lucide-react";

const careerSteps = [
  {
    number: "01",
    title: "Join the Team",
    label: "TEAM",
    text: "Begin your journey with a supportive team dedicated to delivering quality healthcare.",
    icon: UsersRound,
    color: "#16A34A",
    light: "#ECFDF3",
  },
  {
    number: "02",
    title: "Learn & Develop",
    label: "DEVELOPMENT",
    text: "Build new clinical, technical and professional skills through continuous learning.",
    icon: GraduationCap,
    color: "#F59E0B",
    light: "#FFF7E6",
  },
  {
    number: "03",
    title: "Take Responsibility",
    label: "RESPONSIBILITY",
    text: "Grow your confidence by taking ownership of meaningful responsibilities.",
    icon: BriefcaseBusiness,
    color: "#0EA5E9",
    light: "#EFFAFF",
  },
  {
    number: "04",
    title: "Make an Impact",
    label: "IMPACT",
    text: "Use your experience to improve patient care and inspire the people around you.",
    icon: HeartPulse,
    color: "#EA580C",
    light: "#FFF1EB",
  },
];

const CareerGrowth = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0A7A78]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
              Career Growth
            </span>

            <span className="h-px w-8 bg-[#0A7A78]" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Your journey starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Grow your skills, take on new opportunities and build a rewarding
            career while making a meaningful difference in healthcare.
          </p>
        </motion.div>

        {/* Step Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-slate-100 md:block" />

          <div className="space-y-8 md:space-y-0">
            {careerSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative md:grid md:min-h-[150px] md:grid-cols-2"
                >
                  {/* LEFT CONTENT */}
                  {isLeft ? (
                    <div className="flex items-center justify-end pr-12 md:pr-16">
                      <StepContent
                        step={step}
                        Icon={Icon}
                        align="right"
                      />
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* RIGHT CONTENT */}
                  {!isLeft ? (
                    <div className="flex items-center justify-start pl-12 md:pl-16">
                      <StepContent
                        step={step}
                        Icon={Icon}
                        align="left"
                      />
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* CENTER ARROW */}
                  <div
                    className="absolute left-1/2 top-1/2 z-20 hidden h-[76px] w-[58px] -translate-x-1/2 -translate-y-1/2 md:block"
                    style={{
                      backgroundColor: step.color,
                      clipPath:
                        "polygon(0 0, 72% 0, 72% 18%, 100% 50%, 72% 82%, 72% 100%, 0 100%, 0 82%, 28% 50%, 0 18%)",
                    }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm font-black text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* MOBILE NUMBER */}
                  <div className="mb-3 flex items-center gap-3 md:hidden">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>

                    <div
                      className="h-[2px] flex-1"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------
   STEP CONTENT
--------------------------------- */

const StepContent = ({ step, Icon, align }) =>  {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group max-w-sm ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`mb-2 flex items-center gap-3 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {align === "right" && (
          <span
            className="text-[10px] font-black uppercase tracking-[0.18em]"
            style={{ color: step.color }}
          >
            {step.label}
          </span>
        )}

        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: step.light,
            color: step.color,
          }}
        >
          <Icon className="h-5 w-5" />
        </div>

        {align === "left" && (
          <span
            className="text-[10px] font-black uppercase tracking-[0.18em]"
            style={{ color: step.color }}
          >
            {step.label}
          </span>
        )}
      </div>

      <h3 className="text-lg font-black text-slate-900 sm:text-xl">
        {step.title}
      </h3>

      <p className="mt-1.5 text-xs leading-6 text-slate-500 sm:text-sm">
        {step.text}
      </p>
    </motion.div>
  );
}

export default CareerGrowth;

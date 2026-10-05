"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseMedical,
  CheckCircle2,
  HeartPulse,
  Sparkles,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CareerHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f9fb]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Main soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(6,59,92,0.13),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(23,137,164,0.10),transparent_30%)]" />

        {/* Animated glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -25, 20, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#063B5C]/10 blur-3xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -20, 0],
                  scale: [1, 0.94, 1.07, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#063B5C 1px, transparent 1px), linear-gradient(90deg, #063B5C 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#063B5C]/10 bg-white/80 px-4 py-2 shadow-[0_8px_30px_rgba(6,59,92,0.06)] backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#063B5C]">
                  Careers at Our Hospital
                </span>

                <Sparkles className="h-3.5 w-3.5 text-[#1789A4]" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#063B5C] sm:text-5xl md:text-6xl lg:text-[4.4rem]"
            >
              Build a Career That
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 text-[#1789A4]">
                  Makes a Difference.
                </span>

                {/* underline */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 1,
                    duration: 0.9,
                    ease,
                  }}
                  className="absolute -bottom-1 left-0 h-1 rounded-full bg-[#1789A4]/20"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              Join a team of compassionate healthcare professionals dedicated
              to delivering exceptional care. Grow your skills, discover new
              opportunities, and make a meaningful impact every day.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/careers/jobs"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#063B5C] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(6,59,92,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,59,92,0.28)]"
              >
                {/* Button shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explore Opportunities</span>

                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#063B5C]/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#063B5C] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#063B5C]/30 hover:bg-white"
              >
                Talk to HR

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-4"
            >
              {[
                {
                  icon: CheckCircle2,
                  text: "Growth Opportunities",
                },
                {
                  icon: Users,
                  text: "Collaborative Culture",
                },
                {
                  icon: HeartPulse,
                  text: "Purpose-Driven Work",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <Icon className="h-4 w-4 text-[#1789A4]" />
                    {item.text}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease,
            }}
            className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-[#063B5C]/10 blur-3xl" />

            {/* Image wrapper */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_30px_80px_rgba(6,59,92,0.15)] sm:rounded-[2.5rem]"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.7rem] sm:aspect-[4/4.2]">
                <Image
                  src="/assets/images/career-team.jpg"
                  alt="Healthcare professionals working together"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 550px"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/80 via-[#063B5C]/10 to-transparent" />

                {/* Soft shine */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: ["-120%", "120%"],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-sm">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                      <BriefcaseMedical className="h-5 w-5" />
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Your Future Starts Here
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Be part of a team where every role contributes to better
                      healthcare.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                x: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease,
              }}
              className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(6,59,92,0.14)] backdrop-blur-xl sm:block sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063B5C]/10">
                  <Users className="h-5 w-5 text-[#063B5C]" />
                </div>

                <div>
                  <p className="text-lg font-bold text-[#063B5C]">500+</p>
                  <p className="text-xs text-slate-500">
                    Healthcare Professionals
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING TOP CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                x: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease,
              }}
              className="absolute -right-3 -top-5 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_20px_50px_rgba(6,59,92,0.12)] backdrop-blur-xl md:block lg:-right-7"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </span>

                <div>
                  <p className="text-xs font-bold text-[#063B5C]">
                    People First
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Culture that cares
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-8 bottom-20 hidden h-20 w-20 rounded-full border border-dashed border-[#1789A4]/30 lg:block"
            />

            <div className="absolute -bottom-4 right-8 hidden h-3 w-3 rounded-full bg-[#1789A4] lg:block" />
            <div className="absolute right-16 top-10 hidden h-2 w-2 rounded-full bg-[#063B5C]/30 lg:block" />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CURVE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 -z-10 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
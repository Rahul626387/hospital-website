"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4fbfa]">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left Glow */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#0A7A78]/10 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#063B5C]/10 blur-3xl" />

        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] top-[20%] h-48 w-48 rounded-full bg-[#0A7A78]/15 blur-3xl"
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#063B5C 1px, transparent 1px), linear-gradient(90deg, #063B5C 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="lg:col-span-6"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0A7A78]/20 bg-white px-3 py-2 shadow-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A7A78]/10">
                <HeartPulse className="h-4 w-4 text-[#0A7A78]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#063B5C] sm:text-xs">
                Trusted Healthcare Excellence
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#063B5C] sm:text-5xl lg:text-[60px]">

              Your Health Is Our

              <span className="block text-[#0A7A78]">
                Highest Priority.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Experience compassionate care, advanced medical technology and
              trusted specialists at Baderia Metro Prime Hospital.
            </p>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* Appointment */}
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/appointment"
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#0A7A78]/20 transition hover:bg-[#086663]"
                >
                  <CalendarDays className="h-5 w-5" />

                  Book Appointment

                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>

              {/* Doctor */}
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/doctors"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] shadow-sm transition hover:border-[#0A7A78]/30 hover:bg-[#0A7A78]/5"
                >
                  Find a Doctor

                  <ArrowUpRight className="h-4 w-4 text-[#0A7A78]" />
                </Link>
              </motion.div>

            </div>

            {/* =====================================================
                TRUST POINTS
            ====================================================== */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-600 sm:text-sm">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                Experienced Specialists
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                Modern Facilities
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                24/7 Emergency
              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative lg:col-span-6"
          >

            <div className="relative mx-auto max-w-[560px]">

              {/* =================================================
                  IMAGE GLOW
              ================================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 rounded-[40px] bg-[#0A7A78]/15 blur-3xl"
              />

              {/* =================================================
                  MAIN IMAGE
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[32px] border-[7px] border-white bg-white shadow-2xl"
              >

                <Image
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                  alt="Baderia Metro Prime Hospital"
                  width={900}
                  height={900}
                  priority
                  className="h-[390px] w-full object-cover sm:h-[470px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 via-transparent to-transparent" />

                {/* =================================================
                    IMAGE BOTTOM CARD
                ================================================== */}

                <div className="absolute bottom-5 left-5 right-5">

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.5,
                    }}
                    className="rounded-2xl border border-white/20 bg-white/15 p-4 shadow-xl backdrop-blur-xl"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A7A78]">
                          <HeartPulse className="h-5 w-5 text-white" />
                        </div>

                        <div>
                          <p className="text-[11px] font-medium text-white/70">
                            Patient-Centered
                          </p>

                          <p className="text-sm font-bold text-white">
                            Care You Can Trust
                          </p>
                        </div>

                      </div>

                      <ShieldCheck className="h-6 w-6 text-teal-300" />

                    </div>

                  </motion.div>

                </div>

              </motion.div>

              {/* =================================================
                  FLOATING EXPERIENCE CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 top-8 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                    <Award className="h-5 w-5 text-[#0A7A78]" />
                  </div>

                  <div>
                    <p className="text-xl font-black text-[#063B5C]">
                      25+
                    </p>

                    <p className="text-[10px] font-semibold text-slate-500">
                      Years Experience
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  DOCTOR CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-28 hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-xl lg:block"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                    <Stethoscope className="h-5 w-5 text-[#0A7A78]" />
                  </div>

                  <div>
                    <p className="text-base font-black text-[#063B5C]">
                      Expert Doctors
                    </p>

                    <div className="mt-0.5 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A7A78]" />
                      <p className="text-[10px] font-medium text-slate-500">
                        Specialized Care
                      </p>
                    </div>
                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  EMERGENCY CARD
              ================================================== */}

              <motion.a
                href="tel:+919876543210"
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-3 z-20 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-2xl sm:-right-5"
              >

                <div className="flex items-center gap-3">

                  {/* Emergency Icon */}
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">

                    {/* Ripple */}
                    <motion.span
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-xl border border-red-400"
                    />

                    {/* Second Ripple */}
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1.8],
                        opacity: [0.3, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.7,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-xl border border-red-300"
                    />

                    <Phone className="relative h-5 w-5 text-red-500" />

                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-500">
                      Emergency 24/7
                    </p>

                    <p className="text-sm font-black text-[#063B5C]">
                      +91 98765 43210
                    </p>
                  </div>

                </div>

              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* =========================================================
            STATS
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-4"
        >

          {/* Patients */}
          <div className="border-b border-r border-slate-100 p-5 md:border-b-0">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <Users className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xl font-black text-[#063B5C]">
                  50K+
                </p>

                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Patients Served
                </p>
              </div>

            </div>

          </div>

          {/* Doctors */}
          <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <Stethoscope className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xl font-black text-[#063B5C]">
                  150+
                </p>

                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Expert Doctors
                </p>
              </div>

            </div>

          </div>

          {/* Departments */}
          <div className="border-r border-slate-100 p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10">
                <HeartPulse className="h-5 w-5 text-[#0A7A78]" />
              </div>

              <div>
                <p className="text-xl font-black text-[#063B5C]">
                  30+
                </p>

                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Specialities
                </p>
              </div>

            </div>

          </div>

          {/* Emergency */}
          <div className="p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <Clock3 className="h-5 w-5 text-red-500" />
              </div>

              <div>
                <p className="text-xl font-black text-[#063B5C]">
                  24/7
                </p>

                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Emergency Care
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
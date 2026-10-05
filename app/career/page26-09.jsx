"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseMedical,
  Sparkles,
  Users,
  HeartHandshake,
} from "lucide-react";

const Careerpage = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <div className="min-h-screen bg-white">
      {/* =====================================================
          CAREER HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#073b48]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/images/career.png"
            alt="Careers at Baderia MetroPrime Multi Speciality Hospital"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d39]/95 via-[#073e4a]/65 to-[#073b48]/20" />

        {/* Decorative Circle */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-24 hidden h-80 w-80 rounded-full border border-white/10 sm:block"
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 right-20 hidden h-72 w-72 rounded-full border border-[#8de0d4]/10 lg:block"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur"
            >
              <BriefcaseMedical size={14} />
              Careers at Baderia MetroPrime
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease,
              }}
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            >
              Build your career
              <span className="block text-[#8de0d4]">
                with purpose.
              </span>
            </motion.h1>

            {/* Description */}
            {/* <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
            >
              Join a passionate team of healthcare professionals committed
              to delivering compassionate, safe and advanced patient care
              at Baderia MetroPrime Multi Speciality Hospital.
            </motion.p> */}

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.34,
                ease,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="#openings"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8de0d4] px-6 py-3.5 text-sm font-semibold text-[#083b49] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8de0d4]/20"
              >
                <span>View Open Positions</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
              >
                Contact HR
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#073b48] to-transparent" />
      </section>


      
    </div>
  );
};

export default Careerpage;
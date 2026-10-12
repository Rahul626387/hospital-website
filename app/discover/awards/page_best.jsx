
"use client";

import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Trophy,
  Medal,
  Star,
  CalendarDays,
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  ZoomIn,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   AWARDS DATA
========================================================= */

const awardsData = [
  {
    id: 1,
    year: "2025",
    category: "Healthcare Excellence",
    title: "Excellence in Patient Care",
    organization: "Healthcare Excellence Awards",
    description:
      "Recognized for delivering high-quality patient-centric healthcare with a strong focus on safety, compassion and clinical excellence.",
    image:
      "https://www.amritahospitals.org/_next/image?q=90&url=https%3A%2F%2Fadmin.amritahospitals.org%2Fsites%2Fdefault%2Ffiles%2F2025-10%2Famrita-hospital-wins-ficci-healthcare-excellence-award-2025.jpg&w=3840",
    icon: Trophy,
    featured: true,
  },
  {
    id: 2,
    year: "2024",
    category: "Nursing Excellence",
    title: "Nursing Excellence Award",
    organization: "Healthcare Excellence Forum",
    description:
      "Recognition celebrating exceptional nursing practices, compassionate care and dedication to patient wellbeing.",
    image:
      "https://sdk-image3.s3.ap-south-1.amazonaws.com/1_202cc2597f.jpg",
    icon: HeartPulse,
  },
  {
    id: 3,
    year: "2024",
    category: "Team Excellence",
    title: "Outstanding Healthcare Team",
    organization: "Healthcare Recognition Awards",
    description:
      "Honoring the commitment, teamwork and professional excellence of healthcare teams working together for better patient outcomes.",
    image:
      "https://sdk-image3.s3.ap-south-1.amazonaws.com/1_44571e7392.jpg",
    icon: Star,
  },
  {
    id: 4,
    year: "2023",
    category: "Clinical Excellence",
    title: "Healthcare Innovation Award",
    organization: "Healthcare Excellence Awards",
    description:
      "Recognition for innovation, advanced clinical practices and continuous improvement in healthcare delivery.",
    image:
      "https://www.asterhospitals.in/sites/default/files/styles/optimize_images/public/2021-01/Six%20Sigma.jpeg.webp?itok=b5VQHIjN",
    icon: Medal,
  },
  {
    id: 5,
    year: "2023",
    category: "Lifetime Achievement",
    title: "Lifetime Achievement Recognition",
    organization: "Healthcare Awards",
    description:
      "Celebrating outstanding dedication, professional contribution and long-term commitment to healthcare excellence.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D22AQGdetcv8RMFfQ/feedshare-image-high-res/feedshare-image-high-res/0/1656671995385?e=2147483647&t=KQALe8YIgV69c08vYQIo1DOWWaGLYty65AwxoJRAgoI&v=beta",
    icon: Award,
  },
  {
    id: 6,
    year: "2024",
    category: "Hospital Excellence",
    title: "Excellence in Multi-Specialty Care",
    organization: "Health First Conclave",
    description:
      "Recognizing excellence in multi-specialty healthcare services and commitment to comprehensive patient care.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHsIa5MM9quuw/feedshare-shrink_800/feedshare-shrink_800/0/1730181595138?e=2147483647&t=EBRqPPeK5KMM--kFvZvgu84JRUorcxG0-7CEQLX-hNg&v=beta",
    icon: Trophy,
  },
  {
    id: 7,
    year: "2022",
    category: "National Recognition",
    title: "National Healthcare Award",
    organization: "National Health Awards",
    description:
      "A recognition celebrating contribution towards improving healthcare quality, accessibility and patient services.",
    image:
      "https://www.mangaloretoday.com/contentfiles/2020/may/Nitte05may2022-1.JPG",
    icon: ShieldCheck,
  },
  {
    id: 8,
    year: "2023",
    category: "Department Excellence",
    title: "Best Operating Theatre",
    organization: "Medical Excellence Awards",
    description:
      "Recognition highlighting excellence in surgical infrastructure, operating theatre standards and clinical teamwork.",
    image:
      "https://departments.tnmcnair.edu.in/backend/public/storage/uploads/images/2026/01/p2mWlwbR8AMza9fg1DvL.jpg",
    icon: Award,
  },
  {
    id: 9,
    year: "2026",
    category: "Patient-Centric Care",
    title: "Excellence in Patient-Centric Care",
    organization: "Healthcare Innovation Summit",
    description:
      "Recognition for putting patients at the center of healthcare delivery through compassionate and quality-focused services.",
    image:
      "https://cygnus-admin.dev.astconsulting.in/api/public/ujala-cygnus/image/2026/03/31/1774959507176/Award1.jpg1.jpeg",
    icon: HeartPulse,
  },
  {
    id: 10,
    year: "2024",
    category: "Institutional Excellence",
    title: "Institutional Excellence in Healthcare",
    organization: "Healthcare Excellence Awards",
    description:
      "Celebrating institutional excellence, clinical quality and continuous advancement in healthcare services.",
    image:
      "https://www.hcgoncology.com/uploads/images/NZ6_1094.jpg",
    icon: Medal,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   HERO SECTION
========================================================= */

const AwardsHero = memo(function AwardsHero({ featuredAward }) {
  return (
    // <section className="relative isolate overflow-hidden bg-slate-950">
    //   {/* Background */}
    //   <div
    //     aria-hidden="true"
    //     className="absolute inset-0"
    //   >
    //     <div className="absolute inset-0 bg-gradient-to-br from-[#032B46] via-[#06466A] to-[#021B2C]" />

    //     <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

    //     <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

    //     <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />
    //   </div>

    //   <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    //     <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
    //       {/* LEFT */}
    //       <motion.div
    //         initial={{
    //           opacity: 0,
    //           x: -35,
    //         }}
    //         animate={{
    //           opacity: 1,
    //           x: 0,
    //         }}
    //         transition={{
    //           duration: 0.7,
    //           ease: [0.22, 1, 0.36, 1],
    //         }}
    //       >
    //         {/* Breadcrumb */}
    //         <div className="mb-7 flex flex-wrap items-center gap-2 text-sm">
    //           <Link
    //             href="/"
    //             className="text-slate-300 transition-colors hover:text-white"
    //           >
    //             Home
    //           </Link>

    //           <ChevronRight className="h-4 w-4 text-slate-500" />

    //           <span className="font-medium text-cyan-300">
    //             Awards & Achievements
    //           </span>
    //         </div>

    //         {/* Badge */}
    //         <motion.div
    //           initial={{
    //             opacity: 0,
    //             y: 15,
    //           }}
    //           animate={{
    //             opacity: 1,
    //             y: 0,
    //           }}
    //           transition={{
    //             delay: 0.15,
    //             duration: 0.5,
    //           }}
    //           className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md"
    //         >
    //           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15">
    //             <Award className="h-3.5 w-3.5" />
    //           </span>

    //           Recognition & Excellence
    //         </motion.div>

    //         {/* Heading */}
    //         <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
    //           Excellence That Inspires
    //           <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
    //             Trust & Recognition
    //           </span>
    //         </h1>

    //         {/* Description */}
    //         <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
    //           Our commitment to clinical excellence, compassionate patient
    //           care and continuous innovation continues to earn recognition
    //           across healthcare excellence and professional standards.
    //         </p>

    //         {/* Buttons */}
    //         <div className="mt-8 flex flex-col gap-3 sm:flex-row">
    //           <Link
    //             href="#awards-achievements"
    //             className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
    //           >
    //             Explore Achievements

    //             <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    //           </Link>

    //           <Link
    //             href="#recognition-highlights"
    //             className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
    //           >
    //             Recognition Highlights

    //             <Trophy className="h-4 w-4 text-cyan-300" />
    //           </Link>
    //         </div>

    //         {/* Stats */}
    //         <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
    //           <div>
    //             <p className="text-2xl font-extrabold text-white sm:text-3xl">
    //               10+
    //             </p>

    //             <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
    //               Healthcare Recognitions
    //             </p>
    //           </div>

    //           <div className="border-l border-white/10 pl-4">
    //             <p className="text-2xl font-extrabold text-white sm:text-3xl">
    //               5+
    //             </p>

    //             <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
    //               Excellence Awards
    //             </p>
    //           </div>

    //           <div className="border-l border-white/10 pl-4">
    //             <p className="text-2xl font-extrabold text-white sm:text-3xl">
    //               24/7
    //             </p>

    //             <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
    //               Patient-Centered Care
    //             </p>
    //           </div>
    //         </div>
    //       </motion.div>

    //       {/* RIGHT VISUAL */}
    //       <motion.div
    //         initial={{
    //           opacity: 0,
    //           x: 35,
    //           scale: 0.96,
    //         }}
    //         animate={{
    //           opacity: 1,
    //           x: 0,
    //           scale: 1,
    //         }}
    //         transition={{
    //           duration: 0.8,
    //           delay: 0.1,
    //           ease: [0.22, 1, 0.36, 1],
    //         }}
    //         className="relative mx-auto w-full max-w-xl"
    //       >
    //         {/* Glow */}
    //         <div
    //           aria-hidden="true"
    //           className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl"
    //         />

    //         {/* Main Image Card */}
    //         <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
    //           <div className="relative overflow-hidden rounded-[26px] bg-slate-900">
    //             <img
    //               src={featuredAward.image}
    //               alt={featuredAward.title}
    //               className="h-[360px] w-full object-cover sm:h-[430px]"
    //               loading="eager"
    //               fetchPriority="high"
    //               decoding="async"
    //             />

    //             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

    //             {/* Badge */}
    //             <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-4 py-2 text-xs font-bold text-blue-700 shadow-lg backdrop-blur-md">
    //               <Trophy className="h-4 w-4" />
    //               Featured Recognition
    //             </div>

    //             {/* Bottom Content */}
    //             <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
    //               <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-300">
    //                 <CalendarDays className="h-4 w-4" />
    //                 {featuredAward.year}
    //               </div>

    //               <h2 className="max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
    //                 {featuredAward.title}
    //               </h2>

    //               <p className="mt-2 text-sm font-medium text-slate-300">
    //                 {featuredAward.organization}
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Floating Card */}
    //         <motion.div
    //           animate={{
    //             y: [0, -8, 0],
    //           }}
    //           transition={{
    //             duration: 4,
    //             repeat: Infinity,
    //             ease: "easeInOut",
    //           }}
    //           className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-2xl sm:block"
    //         >
    //           <div className="flex items-center gap-3">
    //             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
    //               <Medal className="h-5 w-5" />
    //             </div>

    //             <div>
    //               <p className="text-xs font-semibold text-slate-500">
    //                 Recognized For
    //               </p>

    //               <p className="text-sm font-extrabold text-slate-900">
    //                 Clinical Excellence
    //               </p>
    //             </div>
    //           </div>
    //         </motion.div>

    //         {/* Floating Trust Card */}
    //         <motion.div
    //           animate={{
    //             y: [0, 8, 0],
    //           }}
    //           transition={{
    //             duration: 4.5,
    //             repeat: Infinity,
    //             ease: "easeInOut",
    //           }}
    //           className="absolute -right-3 top-1/3 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-2xl sm:block"
    //         >
    //           <div className="flex items-center gap-3">
    //             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
    //               <ShieldCheck className="h-5 w-5" />
    //             </div>

    //             <div>
    //               <p className="text-xs font-semibold text-slate-500">
    //                 Commitment
    //               </p>

    //               <p className="text-sm font-extrabold text-slate-900">
    //                 Patient First
    //               </p>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </motion.div>
    //     </div>
    //   </div>

    //   {/* Bottom Wave */}
    //   <div className="absolute bottom-0 left-0 right-0">
    //     <svg
    //       viewBox="0 0 1440 100"
    //       className="block h-auto w-full"
    //       preserveAspectRatio="none"
    //       aria-hidden="true"
    //     >
    //       <path
    //         fill="white"
    //         d="M0,70 C240,110 420,15 720,50 C1020,85 1190,15 1440,55 L1440,100 L0,100 Z"
    //       />
    //     </svg>
    //   </div>
    // </section>

    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white">
  {/* Background */}
  {/* <div aria-hidden="true" className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#032B46] via-[#06466A] to-[#021B2C]" />

    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />
  </div> */}

  <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Breadcrumb */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <Link
            href="/"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5 text-slate-500" />

          <span className="font-medium text-cyan-300">
            Awards & Achievements
          </span>
        </div>

        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.45,
          }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15">
            <Award className="h-3 w-3" />
          </span>

          Recognition & Excellence
        </motion.div>

        {/* Heading */}
        <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Excellence That Inspires

          <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
            Trust & Recognition
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
          Our commitment to clinical excellence, compassionate patient care
          and continuous innovation continues to earn recognition across
          healthcare excellence and professional standards.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="#awards-achievements"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Explore Achievements

            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#recognition-highlights"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Recognition Highlights

            <Trophy className="h-4 w-4 text-cyan-300" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-7 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-5">
          <div>
            <p className="text-xl font-extrabold text-white sm:text-2xl">
              10+
            </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
              Healthcare Recognitions
            </p>
          </div>

          <div className="border-l border-white/10 pl-3">
            <p className="text-xl font-extrabold text-white sm:text-2xl">
              5+
            </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
              Excellence Awards
            </p>
          </div>

          <div className="border-l border-white/10 pl-3">
            <p className="text-xl font-extrabold text-white sm:text-2xl">
              24/7
            </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
              Patient-Centered Care
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          RIGHT VISUAL
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: 25,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto w-full max-w-lg"
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl"
        />

        {/* Main Image Card */}
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[21px] bg-slate-900">
            <img
              src='/assets/images/awrd4.png'
              // src={featuredAward.image}
              alt={featuredAward.title}
              className="h-[300px] w-full object-cover sm:h-[350px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" /> */}

            {/* Featured Badge */}
            {/* <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-lg backdrop-blur-md">
              <Trophy className="h-3.5 w-3.5" />

              Featured Recognition
            </div> */}

            {/* Bottom Content */}
            {/* <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                <CalendarDays className="h-3.5 w-3.5" />

                {featuredAward.year}
              </div>

              <h2 className="max-w-md text-xl font-extrabold leading-tight text-white sm:text-2xl">
                {featuredAward.title}
              </h2>

              <p className="mt-1.5 text-xs font-medium text-slate-300 sm:text-sm">
                {featuredAward.organization}
              </p>
            </div> */}
          </div>
        </div>

        {/* =====================================================
            FLOATING CARD 1
        ===================================================== */}
        {/* <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-4 -left-3 hidden rounded-xl border border-white/10 bg-white p-3 shadow-2xl sm:block"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Medal className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-500">
                Recognized For
              </p>

              <p className="text-xs font-extrabold text-slate-900">
                Clinical Excellence
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* =====================================================
            FLOATING CARD 2
        ===================================================== */}
        {/* <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-2 top-1/3 hidden rounded-xl border border-white/10 bg-white p-3 shadow-2xl sm:block"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-500">
                Commitment
              </p>

              <p className="text-xs font-extrabold text-slate-900">
                Patient First
              </p>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      viewBox="0 0 1440 70"
      className="block h-auto w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="white"
        d="M0,48 C240,78 420,10 720,36 C1020,62 1190,10 1440,40 L1440,70 L0,70 Z"
      />
    </svg>
  </div>
</section>
  );
});

/* =========================================================
   AWARD CARD
========================================================= */

const AwardCard = memo(function AwardCard({ award, onSelect }) {
  const Icon = award.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm will-change-transform hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={award.image}
          alt={award.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        {/* Year */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md backdrop-blur">
          <CalendarDays className="h-3.5 w-3.5 text-blue-600" />
          {award.year}
        </div>

        {/* Zoom */}
        <button
          type="button"
          aria-label={`View ${award.title}`}
          onClick={() => onSelect(award)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 opacity-0 shadow-lg transition-all duration-300 hover:bg-white group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        {/* Category */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-blue-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            {award.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>

          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {award.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-blue-600">
          {award.organization}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {award.description}
        </p>

        <button
          type="button"
          onClick={() => onSelect(award)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Achievement

          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
});

/* =========================================================
   FEATURED AWARD
========================================================= */

const FeaturedAward = memo(function FeaturedAward({
  award,
  onSelect,
}) {
  const Icon = award.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative mb-16 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
          <img
            // src={award.image}
             src='/assets/images/awrd5.png'
            alt={award.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-950" />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-blue-700 shadow-lg backdrop-blur">
            <Trophy className="h-4 w-4" />
            Featured Achievement
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <Icon className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                {award.category}
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays className="h-4 w-4" />
                {award.year}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {award.title}
          </h3>

          <p className="mt-3 font-medium text-blue-300">
            {award.organization}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            {award.description}
          </p>

          <button
            type="button"
            onClick={() => onSelect(award)}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View Achievement

            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

/* =========================================================
   AWARD MODAL
========================================================= */

const AwardModal = memo(function AwardModal({
  award,
  onClose,
}) {
  useEffect(() => {
    if (!award) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [award, onClose]);

  return (
    <AnimatePresence>
      {award && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          role="dialog"
          aria-modal="true"
          aria-label={award.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close award details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-xl transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[280px] bg-slate-100 lg:min-h-[550px]">
                <img
                  src={award.image}
                  alt={award.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Award className="h-7 w-7" />
                </div>

                <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  {award.category}
                </span>

                <h3 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                  {award.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                    <CalendarDays className="h-4 w-4 text-blue-600" />
                    {award.year}
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                    {award.organization}
                  </span>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-600">
                  {award.description}
                </p>

                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                  <p className="text-sm font-medium leading-6 text-slate-700">
                    Recognition reflects our continued commitment to quality
                    healthcare and patient-focused services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AwardsAchievements() {
  const [selectedAward, setSelectedAward] = useState(null);

  const featuredAward = awardsData[0];

  const regularAwards = awardsData.slice(1);

  const openAward = (award) => {
    setSelectedAward(award);
  };

  const closeAward = () => {
    setSelectedAward(null);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <AwardsHero featuredAward={featuredAward} />

      {/* =====================================================
          MAIN AWARDS SECTION
      ===================================================== */}

      <section
        id="awards-achievements"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[-150px] top-[120px] h-[350px] w-[350px] rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute bottom-[100px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-50 blur-3xl" />

          <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ===================================================
              HEADER
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              <span>Recognition & Excellence</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Awards &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our commitment to clinical excellence, compassionate care and
              continuous innovation has been recognized through numerous
              achievements and healthcare honors.
            </p>

            {/* Decorative Line */}
            {/* <div
              aria-hidden="true"
              className="mx-auto mt-7 flex items-center justify-center gap-2"
            >
              <span className="h-1 w-10 rounded-full bg-blue-200" />
              <span className="h-1 w-16 rounded-full bg-blue-600" />
              <span className="h-1 w-10 rounded-full bg-blue-200" />
            </div> */}
          </motion.div>

          {/* ===================================================
              FEATURED AWARD
          =================================================== */}

          <FeaturedAward
            award={featuredAward}
            onSelect={openAward}
          />

          {/* ===================================================
              AWARDS GRID
          =================================================== */}

          <div id="recognition-highlights">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {regularAwards.map((award) => (
                <AwardCard
                  key={award.id}
                  award={award}
                  onSelect={openAward}
                />
              ))}
            </motion.div>
          </div>

          {/* ===================================================
              TRUST STRIP
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                icon: ShieldCheck,
                number: "10+",
                text: "Healthcare Recognitions",
              },
              {
                icon: Trophy,
                number: "5+",
                text: "Excellence Awards",
              },
              {
                icon: HeartPulse,
                number: "24/7",
                text: "Patient-Centered Care",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xl font-extrabold text-slate-900">
                      {item.number}
                    </p>

                    <p className="text-sm text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ===================================================
              BOTTOM QUALITY STRIP
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#063B5C] via-[#075779] to-[#063B5C] p-6 shadow-xl sm:p-8"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Excellence in Healthcare
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                    Every recognition represents our continued focus on
                    quality, safety, innovation and compassionate patient care.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#063B5C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Connect With Us

                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AwardModal
        award={selectedAward}
        onClose={closeAward}
      />
    </>
  );
}





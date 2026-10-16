// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ChevronRight,
//   Award,
//   Trophy,
//   CheckCircle2,
// } from "lucide-react";

// const AwardsHero01 = ({ totalAwards = 10, featuredCount = 5 }) => {
//   return (
//     <section className="relative isolate min-h-[540px] overflow-hidden bg-[#063B5C] text-white sm:min-h-[560px]">
//       {/* BACKGROUND GLOW — same as original Awards design */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#0A7A78] to-[#052A3D]" />

//         <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

//         <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]" />

//         <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#4DD4C6]/20 blur-[110px]" />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#052A3D]/20 via-transparent to-[#052A3D]/20" />
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
//         <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.65,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative z-10 flex w-full flex-col items-start"
//           >
//             {/* BREADCRUMB */}
//             <div className="mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
//               <Link
//                 href="/"
//                 className="font-medium text-slate-200 transition-colors duration-300 hover:text-white"
//               >
//                 Discover
//               </Link>

//               <ChevronRight className="h-3.5 w-3.5 text-slate-400" />

//               <span className="font-semibold text-[#4DD4C6]">
//                 Awards & Achievements
//               </span>
//             </div>

//             {/* BADGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.45 }}
//               className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-[#4DD4C6] shadow-sm backdrop-blur-md sm:text-xs"
//             >
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4DD4C6]/20">
//                 <Award className="h-3.5 w-3.5 text-[#4DD4C6]" />
//               </span>

//               Recognition & Excellence
//             </motion.div>

//             {/* HEADING */}
//             <h1 className="max-w-[600px] text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
//               Excellence That Inspires

//               <span className="mt-1 block bg-gradient-to-r from-[#4DD4C6] via-white to-cyan-200 bg-clip-text text-transparent">
//                 Trust & Recognition
//               </span>
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="mt-5 max-w-[470px] text-sm leading-relaxed text-white/75 sm:text-base">
//               Our commitment to clinical excellence, compassionate patient
//               care and continuous innovation continues to earn recognition
//               across healthcare excellence and professional standards.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
//               <Link
//                 href="#awards-achievements"
//                 className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#4DD4C6] px-5 py-3 text-sm font-bold text-[#063B5C] shadow-lg shadow-[#4DD4C6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5EE0D2]"
//               >
//                 Explore Achievements

//                 <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="#recognition-highlights"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
//               >
//                 Recognition Highlights

//                 <Trophy className="h-4 w-4 text-[#4DD4C6]" />
//               </Link>
//             </div>

//             {/* STATS */}
//             <div className="mt-8 grid w-full max-w-[520px] grid-cols-3 border-t border-white/15 pt-5">
//               <div className="pr-3">
//                 <p className="text-xl font-extrabold text-white sm:text-2xl">
//                   {totalAwards}+
//                 </p>

//                 <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//                   Healthcare Recognitions
//                 </p>
//               </div>

//               <div className="border-l border-white/15 px-3">
//                 <p className="text-xl font-extrabold text-white sm:text-2xl">
//                   {featuredCount}+
//                 </p>

//                 <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//                   Excellence Awards
//                 </p>
//               </div>

//               <div className="border-l border-white/15 pl-3">
//                 <p className="text-xl font-extrabold text-white sm:text-2xl">
//                   24/7
//                 </p>

//                 <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//                   Patient-Centered Care
//                 </p>
//               </div>
//             </div>

//             {/* TRUST MESSAGE */}
//             <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-white/70 sm:text-xs">
//               <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
//                 <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
//               </span>

//               Recognised for healthcare excellence & patient care
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE — same as previous design */}
//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative hidden min-h-[380px] items-center lg:flex"
//           >
//             {/* IMAGE GLOW */}
//             <div
//               aria-hidden="true"
//               className="absolute inset-8 rounded-full bg-[#4DD4C6]/20 blur-[80px]"
//             />

//             {/* IMAGE CONTAINER */}
//             <div className="relative h-[420px] w-full overflow-hidden">
//               <img
//                 src="/assets/images/awrd5.png"
//                 alt="Healthcare excellence and achievements"
//                 className="h-full w-full object-cover object-center"
//                 style={{
//                   WebkitMaskImage:
//                     "linear-gradient(to right, transparent 0%, black 22%)",
//                   maskImage:
//                     "linear-gradient(to right, transparent 0%, black 22%)",
//                 }}
//               />

//               {/* IMAGE OVERLAY */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#063B5C]/30 via-transparent to-[#063B5C]/10" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* BOTTOM SVG WAVE — same as Awards design */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20">
//         <svg
//           viewBox="0 0 1440 60"
//           className="block h-auto w-full"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path
//             fill="white"
//             d="M0,40 C240,65 420,8 720,30 C1020,52 1190,8 1440,34 L1440,60 L0,60 Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default AwardsHero01;

// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ChevronRight,
//   Award,
//   Trophy,
//   CheckCircle2,
// } from "lucide-react";

// const AwardsHero01 = ({
//   totalAwards = 10,
//   featuredCount = 5,
// }) => {
//   return (
//     <section className="relative isolate flex min-h-[540px] w-full items-center overflow-hidden bg-[#063B5C] px-5 font-sans text-white sm:px-[5%] lg:min-h-[560px] lg:px-[7%]">

//       {/* BACKGROUND EFFECTS */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#0A7A78] to-[#052A3D]" />

//         <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

//         <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]" />

//         <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#4DD4C6]/20 blur-[110px]" />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#052A3D]/20 via-transparent to-[#052A3D]/20" />
//       </div>

//       {/* RIGHT BACKGROUND IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, x: 35, scale: 1.03 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="absolute right-0 top-0 z-0 hidden h-full w-[55%] lg:block"
//       >
//         <img
//           src="/assets/images/awrd5.png"
//           alt="Healthcare awards and achievements"
//           className="h-full w-full object-cover object-center"
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(to right, transparent 0%, black 35%)",
//             maskImage:
//               "linear-gradient(to right, transparent 0%, black 35%)",
//           }}
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/30 via-transparent to-[#063B5C]/10" />
//       </motion.div>

//       {/* LEFT CONTENT */}
//       <div className="relative z-10 w-full py-12 lg:w-[58%] lg:py-14">

//         {/* BREADCRUMB */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="mb-4 flex items-center gap-2 text-xs font-medium sm:text-sm"
//         >
//           <Link
//             href="/"
//             className="text-slate-200 transition-colors hover:text-white"
//           >
//             Discover
//           </Link>

//           <ChevronRight className="h-3.5 w-3.5 text-slate-400" />

//           <span className="font-semibold text-[#4DD4C6]">
//             Awards & Achievements
//           </span>
//         </motion.div>

//         {/* BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.12, duration: 0.5 }}
//           className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-[#4DD4C6] shadow-sm backdrop-blur-md"
//         >
//           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4DD4C6]/20">
//             <Award className="h-3.5 w-3.5" />
//           </span>

//           Recognition & Excellence
//         </motion.div>

//         {/* HEADING */}
//         <motion.h1
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="max-w-[600px] text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.8rem]"
//         >
//           Excellence That Inspires

//           <span className="mt-1 block bg-gradient-to-r from-[#4DD4C6] via-white to-cyan-200 bg-clip-text text-transparent">
//             Trust & Recognition
//           </span>
//         </motion.h1>

//         {/* DESCRIPTION */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mb-6 mt-5 max-w-[470px] text-sm leading-relaxed text-white/75 sm:text-base"
//         >
//           Our commitment to clinical excellence, compassionate patient care
//           and continuous innovation continues to earn recognition across
//           healthcare excellence and professional standards.
//         </motion.p>

//         {/* BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mb-8 flex flex-wrap items-center gap-3"
//         >
//           <Link
//             href="#awards-achievements"
//             className="group inline-flex items-center gap-2 rounded-lg bg-[#4DD4C6] px-5 py-3 text-sm font-bold text-[#063B5C] shadow-lg shadow-[#4DD4C6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5EE0D2]"
//           >
//             Explore Achievements

//             <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>

//           <Link
//             href="#recognition-highlights"
//             className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
//           >
//             Recognition Highlights

//             <Trophy className="h-4 w-4 text-[#4DD4C6]" />
//           </Link>
//         </motion.div>

//         {/* STATS */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.55 }}
//           className="grid w-full max-w-[580px] grid-cols-3 border-t border-white/15 pt-5"
//         >
//           <div className="pr-3">
//             <p className="text-xl font-extrabold sm:text-2xl">
//               {totalAwards}+
//             </p>
//             <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//               Healthcare Recognitions
//             </p>
//           </div>

//           <div className="border-l border-white/15 px-3">
//             <p className="text-xl font-extrabold sm:text-2xl">
//               {featuredCount}+
//             </p>
//             <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//               Excellence Awards
//             </p>
//           </div>

//           <div className="border-l border-white/15 pl-3">
//             <p className="text-xl font-extrabold sm:text-2xl">
//               24/7
//             </p>
//             <p className="mt-1 text-[10px] font-medium leading-4 text-white/60 sm:text-xs">
//               Patient-Centered Care
//             </p>
//           </div>
//         </motion.div>

//         {/* TRUST MESSAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-white/70 sm:text-xs"
//         >
//           <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
//             <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
//           </span>

//           Recognised for healthcare excellence & patient care
//         </motion.div>
//       </div>

//       {/* BOTTOM SVG WAVE */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20">
//         <svg
//           viewBox="0 0 1440 60"
//           className="block h-auto w-full"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path
//             fill="white"
//             d="M0,40 C240,65 420,8 720,30 C1020,52 1190,8 1440,34 L1440,60 L0,60 Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default AwardsHero01;



"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Award,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const AwardsHero01 = ({
  totalAwards = 10,
  featuredCount = 5,
}) => {
  const images = [
    "/assets/images/awrd5.png",
    "/assets/images/awrd4.png",
    // "/assets/images/NABH.png",
    // "/assets/images/awrd3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative isolate flex min-h-[520px] w-full items-center overflow-hidden bg-[#063B5C] px-5 font-sans text-white sm:px-[5%] lg:min-h-[540px] lg:px-[7%]">

      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#0A7A78] to-[#052A3D]" />

        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#4DD4C6]/20 blur-[110px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052A3D]/20 via-transparent to-[#052A3D]/20" />
      </div>

      {/* RIGHT IMAGE SLIDER */}
      <motion.div
        initial={{ opacity: 0, x: 35, scale: 1.03 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-0 top-0 z-0 hidden h-full w-[55%] lg:block"
      >
        <div className="relative h-full w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentSlide]}
              src={images[currentSlide]}
              alt={`Awards and achievements slide ${currentSlide + 1}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 35%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 35%)",
              }}
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#063B5C]/30 via-transparent to-[#063B5C]/10" />

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute right-[68px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#063B5C]/60 text-white shadow-lg backdrop-blur-md transition hover:bg-[#4DD4C6] hover:text-[#063B5C]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#063B5C]/60 text-white shadow-lg backdrop-blur-md transition hover:bg-[#4DD4C6] hover:text-[#063B5C]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* SLIDER DOTS */}
          <div className="absolute bottom-14 right-8 z-20 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-[#4DD4C6]"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full py-10 lg:w-[58%] lg:py-12">

        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-3 flex items-center gap-2 text-[11px] font-medium sm:text-xs"
        >
          <Link
            href="/"
            className="text-slate-200 transition-colors hover:text-white"
          >
            Discover
          </Link>

          <ChevronRight className="h-3 w-3 text-slate-400" />

          <span className="font-semibold text-[#4DD4C6]">
            Awards & Achievements
          </span>
        </motion.div>

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-white/10 px-3 py-1 text-[11px] font-bold text-[#4DD4C6] shadow-sm backdrop-blur-md"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4DD4C6]/20">
            <Award className="h-3 w-3" />
          </span>

          Recognition & Excellence
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-[560px] text-2xl font-extrabold leading-[1.12] tracking-tight sm:text-3xl lg:text-[2.35rem]"
        >
          Excellence That Inspires

          <span className="mt-1 block bg-gradient-to-r from-[#4DD4C6] via-white to-cyan-200 bg-clip-text text-transparent">
            Trust & Recognition
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-5 mt-4 max-w-[450px] text-[13px] leading-relaxed text-white/75 sm:text-sm"
        >
          Our commitment to clinical excellence, compassionate patient care
          and continuous innovation continues to earn recognition across
          healthcare excellence and professional standards.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#awards-achievements"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#4DD4C6] px-4 py-2.5 text-xs font-bold text-[#063B5C] shadow-lg shadow-[#4DD4C6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5EE0D2]"
          >
            Explore Achievements

            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#recognition-highlights"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
          >
            Recognition Highlights

            <Trophy className="h-4 w-4 text-[#4DD4C6]" />
          </Link>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className="grid w-full max-w-[560px] grid-cols-3 border-t border-white/15 pt-4"
        >
          <div className="pr-3">
            <p className="text-lg font-extrabold sm:text-xl">
              {totalAwards}+
            </p>
            <p className="mt-1 text-[9px] font-medium leading-4 text-white/60 sm:text-[11px]">
              Healthcare Recognitions
            </p>
          </div>

          <div className="border-l border-white/15 px-3">
            <p className="text-lg font-extrabold sm:text-xl">
              {featuredCount}+
            </p>
            <p className="mt-1 text-[9px] font-medium leading-4 text-white/60 sm:text-[11px]">
              Excellence Awards
            </p>
          </div>

          <div className="border-l border-white/15 pl-3">
            <p className="text-lg font-extrabold sm:text-xl">
              24/7
            </p>
            <p className="mt-1 text-[9px] font-medium leading-4 text-white/60 sm:text-[11px]">
              Patient-Centered Care
            </p>
          </div>
        </motion.div>

        {/* TRUST MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-white/70 sm:text-[11px]"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
            <CheckCircle2 className="h-3 w-3 text-emerald-300" />
          </span>

          Recognised for healthcare excellence & patient care
        </motion.div>
      </div>

      {/* BOTTOM SVG WAVE */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 60"
          className="block h-auto w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M0,40 C240,65 420,8 720,30 C1020,52 1190,8 1440,34 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AwardsHero01;


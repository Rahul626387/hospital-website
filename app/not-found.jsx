
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Home,
//   Search,
//   Stethoscope,
// } from "lucide-react";

// export default function NotFound() {
//   return (
//     <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-16">
//       {/* Background Decorations */}
//       <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-100/60 blur-3xl" />
//       <div className="absolute bottom-[-140px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 mx-auto w-full max-w-3xl text-center"
//       >
//         {/* Icon */}
//         <motion.div
//           initial={{ scale: 0.7, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{
//             duration: 0.6,
//             delay: 0.1,
//             type: "spring",
//           }}
//           className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl shadow-slate-200/70"
//         >
//           <Stethoscope className="h-9 w-9 text-cyan-600" />
//         </motion.div>

//         {/* 404 */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="text-[110px] font-black leading-none tracking-[-0.08em] text-slate-900 sm:text-[150px]"
//         >
//           404
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.25 }}
//           className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
//         >
//           Page Not Found
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.35 }}
//           className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg"
//         >
//           Sorry, the page you're looking for doesn't exist or may have
//           been moved. Let's get you back to the right place.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.45 }}
//           className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
//         >
//           <Link
//             href="/"
//             className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700"
//           >
//             <Home className="h-4 w-4" />
//             Go to Homepage
//             <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>

//           <button
//             onClick={() => window.history.back()}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-700"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Go Back
//           </button>
//         </motion.div>

//         {/* Bottom text */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400"
//         >
//           <Search className="h-4 w-4" />
//           <span>Check the URL or return to our homepage</span>
//         </motion.div>
//       </motion.div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="fixed inset-0 z-[9999] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white">

      {/* ================= BACKGROUND ================= */}

      {/* Soft Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 40, 0],
                  y: [0, -30, 0],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-white/[0.05] blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-cyan-300/[0.06] blur-3xl"
        />

        {/* Small floating circles */}
        <motion.span
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[25%] h-3 w-3 rounded-full bg-white/30"
        />

        <motion.span
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-white/30"
        />

        <motion.span
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -15, 0],
                }
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[20%] h-2 w-2 rounded-full bg-white/20"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-5 text-center sm:px-8">

        {/* Medical Icon */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mb-5 sm:mb-6"
        >
          {/* Pulse ring */}
          {!reduceMotion && (
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border border-white/50"
            />
          )}

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md sm:h-[72px] sm:w-[72px]">
            <Stethoscope
              className="h-8 w-8 text-white sm:h-9 sm:w-9"
              strokeWidth={1.5}
            />
          </div>

          {/* Heart */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#087574] shadow-lg"
          >
            <HeartPulse size={15} />
          </motion.div>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative select-none text-[100px] font-black leading-[0.8] tracking-[-0.08em] sm:text-[140px] md:text-[175px]"
        >
          <span>4</span>

          <span className="relative mx-1 inline-block sm:mx-2">
            <span className="text-white/90">0</span>

            {/* Heart inside zero */}
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.1, 1],
                    }
              }
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <HeartPulse
                className="h-8 w-8 text-[#0A7A78] sm:h-11 sm:w-11 md:h-14 md:w-14"
                strokeWidth={2}
              />
            </motion.div>
          </span>

          <span>4</span>
        </motion.div>

        {/* Line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 70,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="mt-5 h-[3px] rounded-full bg-white/80"
        />

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base"
        >
          The page you are looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back to the right place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          {/* Home */}
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#063B5C] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/95 hover:shadow-2xl sm:px-7 sm:py-3.5"
          >
            <Home className="h-4 w-4" />

            <span>Back to Homepage</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Back */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:px-7 sm:py-3.5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Bottom small text */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-7 flex items-center gap-2 text-xs text-white/45"
        >
          <HeartPulse className="h-3.5 w-3.5" />
          <span>We&apos;re here to help you find your way</span>
        </motion.div>
      </div>
    </main>
  );
}




// "use client";   

// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Home,
//   HeartPulse,
//   Stethoscope,
// } from "lucide-react";

// export default function NotFound() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <main className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-[#f7fbfc]">

//       {/* =====================================================
//           ANIMATED BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Base soft gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C]/[0.04] via-white to-[#0A7A78]/[0.06]" />

//         {/* DARK BLUE GLOW */}
//         <motion.div
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   x: ["-10%", "15%", "-5%", "-10%"],
//                   y: ["-10%", "5%", "15%", "-10%"],
//                   scale: [1, 1.15, 0.95, 1],
//                   opacity: [0.12, 0.2, 0.1, 0.12],
//                 }
//           }
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-[15%] -top-[20%] h-[550px] w-[550px] rounded-full bg-[#063B5C] blur-[110px]"
//         />

//         {/* TEAL GLOW */}
//         <motion.div
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   x: ["10%", "-15%", "5%", "10%"],
//                   y: ["10%", "-5%", "-15%", "10%"],
//                   scale: [1, 0.9, 1.15, 1],
//                   opacity: [0.1, 0.18, 0.08, 0.1],
//                 }
//           }
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-[25%] -right-[15%] h-[600px] w-[600px] rounded-full bg-[#0A7A78] blur-[120px]"
//         />

//         {/* CENTER GLOW */}
//         <motion.div
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   x: ["-50%", "-35%", "-60%", "-50%"],
//                   y: ["-50%", "-60%", "-40%", "-50%"],
//                   scale: [1, 1.2, 0.9, 1],
//                   opacity: [0.04, 0.08, 0.03, 0.04],
//                 }
//           }
//           transition={{
//             duration: 16,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-1/2 top-1/2 h-[500px] w-[500px] rounded-full bg-[#0A7A78] blur-[130px]"
//         />

//         {/* Subtle light */}
//         <motion.div
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   opacity: [0.3, 0.7, 0.3],
//                   scale: [1, 1.08, 1],
//                 }
//           }
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[100px]"
//         />

//         {/* =================================================
//             FLOATING PARTICLES
//         ================================================== */}

//         <motion.span
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   y: [0, -35, 0],
//                   x: [0, 15, 0],
//                   opacity: [0.2, 0.55, 0.2],
//                 }
//           }
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-[14%] top-[25%] h-2 w-2 rounded-full bg-[#063B5C]/30"
//         />

//         <motion.span
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   y: [0, 30, 0],
//                   x: [0, -15, 0],
//                   opacity: [0.15, 0.5, 0.15],
//                 }
//           }
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute right-[16%] top-[30%] h-3 w-3 rounded-full bg-[#0A7A78]/30"
//         />

//         <motion.span
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   y: [0, -25, 0],
//                   opacity: [0.1, 0.4, 0.1],
//                 }
//           }
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-[22%] left-[20%] h-2 w-2 rounded-full bg-[#063B5C]/20"
//         />

//         <motion.span
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   y: [0, 25, 0],
//                   opacity: [0.1, 0.35, 0.1],
//                 }
//           }
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-[25%] right-[20%] h-2 w-2 rounded-full bg-[#0A7A78]/25"
//         />
//       </div>

//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <div className="relative z-10 flex h-full w-full items-center justify-center px-5">

//         <div className="w-full max-w-3xl text-center">

//           {/* =================================================
//               STETHOSCOPE
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.7,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative mx-auto mb-6 h-[70px] w-[70px]"
//           >
//             {/* Pulse */}
//             {!reduceMotion && (
//               <motion.div
//                 animate={{
//                   scale: [1, 1.6],
//                   opacity: [0.35, 0],
//                 }}
//                 transition={{
//                   duration: 2.4,
//                   repeat: Infinity,
//                   ease: "easeOut",
//                 }}
//                 className="absolute inset-0 rounded-2xl border border-[#0A7A78]/40"
//               />
//             )}

//             <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white shadow-[0_15px_50px_rgba(6,59,92,0.12)]">
//               <motion.div
//                 animate={
//                   reduceMotion
//                     ? {}
//                     : {
//                         rotate: [0, -6, 6, -4, 4, 0],
//                       }
//                 }
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatDelay: 2,
//                 }}
//               >
//                 <Stethoscope
//                   className="h-9 w-9 text-[#063B5C]"
//                   strokeWidth={1.6}
//                 />
//               </motion.div>
//             </div>

//             {/* Heart */}
//             <motion.div
//               animate={
//                 reduceMotion
//                   ? {}
//                   : {
//                       scale: [1, 1.18, 1],
//                     }
//               }
//               transition={{
//                 duration: 1.2,
//                 repeat: Infinity,
//               }}
//               className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white shadow-lg"
//             >
//               <HeartPulse size={14} />
//             </motion.div>
//           </motion.div>

//           {/* =================================================
//               404
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.9,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="select-none text-[105px] font-black leading-[0.78] tracking-[-0.09em] text-[#063B5C] sm:text-[145px] md:text-[180px]"
//           >
//             <span>4</span>

//             <span className="relative mx-1 inline-block sm:mx-2">
//               <span className="bg-gradient-to-r from-[#063B5C] to-[#0A7A78] bg-clip-text text-transparent">
//                 0
//               </span>

//               <motion.div
//                 animate={
//                   reduceMotion
//                     ? {}
//                     : {
//                         scale: [1, 1.12, 1],
//                       }
//                 }
//                 transition={{
//                   duration: 1.4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <HeartPulse
//                   className="h-8 w-8 text-[#0A7A78] sm:h-11 sm:w-11 md:h-14 md:w-14"
//                   strokeWidth={2}
//                 />
//               </motion.div>
//             </span>

//             <span>4</span>
//           </motion.div>

//           {/* =================================================
//               CONTENT TEXT
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.35,
//             }}
//           >
//             <h1 className="mt-6 text-2xl font-bold tracking-tight text-[#063B5C] sm:text-3xl md:text-4xl">
//               Page Not Found
//             </h1>

//             <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               The page you are looking for doesn&apos;t exist or may have
//               been moved. Let&apos;s get you back to our website.
//             </p>
//           </motion.div>

//           {/* =================================================
//               BUTTONS
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.5,
//             }}
//             className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
//           >
//             {/* HOME */}
//             <Link
//               href="/"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,59,92,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,59,92,0.25)]"
//             >
//               <Home className="h-4 w-4" />

//               <span>Back to Homepage</span>

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//             {/* BACK */}
//             <button
//               type="button"
//               onClick={() => window.history.back()}
//               className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#063B5C]/10 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#063B5C] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
//             >
//               <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

//               <span>Go Back</span>
//             </button>
//           </motion.div>

//         </div>
//       </div>
//     </main>
//   );
// }



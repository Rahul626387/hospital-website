// "use client";

// import { motion } from "framer-motion";

// export default function EventsHero({ events = [] }) {
//   return (
//     <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#052F49] via-[#07566B] to-[#087D87] text-white">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
//         <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
//         <div className="absolute -bottom-36 left-[35%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
//       </div>

//       <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:py-14">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.55 }}
//         >
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-cyan-50 backdrop-blur">
//             <HeartPulseIcon size={15} />
//             CARE • COMMUNITY • WELLNESS
//           </div>

//           <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
//             Events That Put{" "}
//             <span className="text-cyan-200">Your Health First</span>
//           </h1>

//           <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
//             Explore health camps, awareness programs and community
//             initiatives designed to help you and your family live healthier.
//           </p>

//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <a
//               href="#events-list"
//               className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07566B] shadow-lg transition hover:bg-cyan-50"
//             >
//               Explore Events
//               <ArrowRightIcon size={17} />
//             </a>

//             <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90">
//               <ShieldCheckIcon size={17} className="text-cyan-200" />
//               Trusted Healthcare
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.96, x: 12 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.12 }}
//           className="hidden lg:block"
//         >
//           <div className="relative ml-auto max-w-[340px] rounded-3xl border border-white/20 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
//             <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-200 text-[#07566B] shadow-lg">
//               <StethoscopeIcon size={23} />
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
//                 <ActivityIcon size={25} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-white">
//                   Better Health Together
//                 </p>
//                 <p className="mt-1 text-xs text-slate-300">
//                   Care beyond the hospital
//                 </p>
//               </div>
//             </div>

//             <div className="my-5 h-px bg-white/15" />

//             <div className="grid grid-cols-2 gap-3">
//               <div className="rounded-2xl bg-white/10 p-4">
//                 <CalendarDaysIcon size={21} className="mb-3 text-cyan-200" />
//                 <p className="text-2xl font-bold">{events.length}</p>
//                 <p className="mt-1 text-xs text-slate-300">Listed Events</p>
//               </div>

//               <div className="rounded-2xl bg-white/10 p-4">
//                 <HeartPulseIcon size={21} className="mb-3 text-cyan-200" />
//                 <p className="text-2xl font-bold">Care</p>
//                 <p className="mt-1 text-xs text-slate-300">At Every Step</p>
//               </div>
//             </div>

//             <p className="mt-4 text-xs leading-5 text-slate-300">
//               Discover opportunities to learn, connect and take a proactive
//               step toward healthier living.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    Inline SVG Icon Components
//    All icons use currentColor, size prop, and standard SVG attrs.
//    ============================================================ */

// function HeartPulseIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//       <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
//     </svg>
//   );
// }

// function ArrowRightIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   );
// }

// function ShieldCheckIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }

// function StethoscopeIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M11 2v2" />
//       <path d="M5 2v2" />
//       <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
//       <path d="M8 15a6 6 0 0 0 12 0v-3" />
//       <circle cx="20" cy="10" r="2" />
//     </svg>
//   );
// }

// function ActivityIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//     </svg>
//   );
// }

// function CalendarDaysIcon({ size = 20, className = "", ...props }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//       <path d="M8 14h.01" />
//       <path d="M12 14h.01" />
//       <path d="M16 14h.01" />
//       <path d="M8 18h.01" />
//       <path d="M12 18h.01" />
//       <path d="M16 18h.01" />
//     </svg>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function EventsHero({ events = [] }) {
//   return (
//     <section className="relative isolate min-h-[480px] overflow-hidden bg-[#032d49] text-white sm:min-h-[540px] lg:min-h-[600px]">
//       {/* Hospital Hero Background Image */}
//       <div className="absolute inset-0 -z-20">
//         <img
//           src="/images/hospital-camp-hero.png"
//           alt=""
//           className="h-full w-full object-cover object-center"
//         />
//       </div>

//       {/* Dark Overlay for Text Readability */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#032d49]/95 via-[#032d49]/80 to-[#032d49]/10" />

//       {/* Subtle Cyan Glow */}
//       <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//       {/* Hero Content */}
//       <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-14 sm:min-h-[540px] sm:px-8 lg:min-h-[600px] lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75 }}
//           className="max-w-2xl"
//         >
//           {/* Eyebrow */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 backdrop-blur-sm">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
//             <span className="text-xs font-semibold tracking-[0.18em] text-cyan-100 sm:text-sm">
//               HOSPITAL CAMPS & COMMUNITY CARE
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
//             Your Health,
//             <br />
//             <span className="text-cyan-300">Our Priority.</span>
//             <br />
//             <span className="text-white">Together for a</span>
//             <br />
//             Healthier Tomorrow.
//           </h1>

//           {/* Description */}
//           <p className="mt-6 max-w-lg text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
//             Join our hospital health camps for health checkups, expert medical
//             consultations and preventive healthcare awareness. Together, let's
//             make quality healthcare accessible to everyone.
//           </p>

//           {/* Actions */}
//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <a
//               href="#events-list"
//               className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#032d49] shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:bg-white"
//             >
//               Explore Health Camps
//               <span className="text-lg transition-transform group-hover:translate-x-1">
//                 →
//               </span>
//             </a>

//             <a
//               href="#events-list"
//               className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300 hover:bg-white/10"
//             >
//               Upcoming Events
//             </a>
//           </div>

//           {/* Trust Message */}
//           <div className="mt-8 flex items-center gap-3 text-sm text-slate-200">
//             <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
//               ✓
//             </span>
//             <p>
//               <span className="font-semibold text-white">
//                 Care for Every Community
//               </span>
//               <span className="hidden sm:inline"> · Healthier Lives Together</span>
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#032d49]/40 to-transparent" />
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  ShieldPlus,
  UsersRound,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

export default function EventsHero({ events = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#063B5C] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#087B91] to-[#052A3D]" />
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px]" />
        <div className="absolute right-[25%] top-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-5">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            {/* Breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-xs sm:text-sm">
              <Link
                href="/"
                className="text-slate-300 transition hover:text-white"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400" />

              <span className="font-semibold text-cyan-300">
                Events
              </span>
            </div>

            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3.5 py-2 text-xs font-bold text-cyan-100 backdrop-blur-sm sm:text-sm">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              Hospital Camps & Community Events
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
              Health Camps for a
              <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-[#4DD4C6] to-white bg-clip-text text-transparent">
                Healthier Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Join our hospital health camps, free checkups, expert
              consultations and awareness programs for you and your family.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#events-list"
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#063B5C] shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Events
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#events-list"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300 hover:bg-white/10"
              >
                <CalendarDays className="h-4 w-4 text-cyan-300" />
                View Schedule
              </Link>
            </div>

            {/* Benefits */}
            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
                  <ShieldPlus className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Free Health Checkups
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    For All Age Groups
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
                  <UsersRound className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Expert Doctors
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Guidance & Support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
                  <HeartPulse className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Community Wellness
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Stronger Together
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-w-0"
          >
            <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-[390px] lg:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Doctor providing patient healthcare consultation"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#052A3D]/70 via-transparent to-[#063B5C]/10" />

              {/* Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#063B5C]/65 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300/15">
                    <HeartPulse className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white sm:text-base">
                      Better Health Together
                    </p>
                    <p className="mt-1 text-xs text-slate-200">
                      Compassionate care for every community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom White Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 50"
          className="block h-6 w-full sm:h-8"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,30 C240,50 420,5 720,25 C1020,45 1200,8 1440,28 L1440,50 L0,50 Z"
          />
        </svg>
      </div>
    </section>
  );
}
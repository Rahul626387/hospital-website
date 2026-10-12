"use client";

import { motion } from "framer-motion";

export default function EventsHero({ events = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#052F49] via-[#07566B] to-[#087D87] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-36 left-[35%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-cyan-50 backdrop-blur">
            <HeartPulseIcon size={15} />
            CARE • COMMUNITY • WELLNESS
          </div>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            Events That Put{" "}
            <span className="text-cyan-200">Your Health First</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            Explore health camps, awareness programs and community
            initiatives designed to help you and your family live healthier.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#events-list"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07566B] shadow-lg transition hover:bg-cyan-50"
            >
              Explore Events
              <ArrowRightIcon size={17} />
            </a>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90">
              <ShieldCheckIcon size={17} className="text-cyan-200" />
              Trusted Healthcare
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="hidden lg:block"
        >
          <div className="relative ml-auto max-w-[340px] rounded-3xl border border-white/20 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
            <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-200 text-[#07566B] shadow-lg">
              <StethoscopeIcon size={23} />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                <ActivityIcon size={25} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Better Health Together
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Care beyond the hospital
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-white/15" />

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <CalendarDaysIcon size={21} className="mb-3 text-cyan-200" />
                <p className="text-2xl font-bold">{events.length}</p>
                <p className="mt-1 text-xs text-slate-300">Listed Events</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <HeartPulseIcon size={21} className="mb-3 text-cyan-200" />
                <p className="text-2xl font-bold">Care</p>
                <p className="mt-1 text-xs text-slate-300">At Every Step</p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-300">
              Discover opportunities to learn, connect and take a proactive
              step toward healthier living.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   Inline SVG Icon Components
   All icons use currentColor, size prop, and standard SVG attrs.
   ============================================================ */

function HeartPulseIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function ArrowRightIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StethoscopeIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function ActivityIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CalendarDaysIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
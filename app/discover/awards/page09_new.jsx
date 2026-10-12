
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
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  ZoomIn,
  CheckCircle2,
} from "lucide-react";
import useSWR from "swr";
import ApiService from "../../src/services/Apiservices";

/* =========================================================
   ICON MAPPING
========================================================= */

const iconMap = {
  Award,
  Trophy,
  Medal,
  Star,
  HeartPulse,
  ShieldCheck,
};

const getAwardIcon = (name) => iconMap[name] || Award;

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
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

const AwardsHero = memo(function AwardsHero({
  slides,
  activeSlide,
  setActiveSlide,
  nextSlide,
  prevSlide,
}) {
  const hasSlides = slides.length > 0;

  return (
    <section className="relative isolate overflow-hidden bg-[#063B5C] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#0A7A78] to-[#052A3D]" />

        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#4DD4C6]/20 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-7">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 lg:pr-2"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
              <Link
                href="/"
                className="font-medium text-slate-200 hover:text-white"
              >
                Home
              </Link>

              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />

              <span className="font-semibold text-[#4DD4C6]">
                Awards & Achievements
              </span>
            </div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-[#4DD4C6] backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4DD4C6]/20">
                <Award className="h-3 w-3" />
              </span>
              Recognition & Excellence
            </div>

            <h1 className="max-w-xl text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-4xl lg:text-[42px]">
              Excellence That Inspires
              <span className="mt-1 block bg-gradient-to-r from-[#4DD4C6] via-white to-cyan-200 bg-clip-text text-transparent">
                Trust & Recognition
              </span>
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75 sm:text-[15px]">
              Our commitment to clinical excellence, compassionate patient
              care and continuous innovation continues to earn recognition
              across healthcare excellence and professional standards.
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#awards-achievements"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#4DD4C6] px-4 py-2.5 text-xs font-bold text-[#063B5C] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#5EE0D2]"
              >
                Explore Achievements
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#recognition-highlights"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Recognition Highlights
                <Trophy className="h-4 w-4 text-[#4DD4C6]" />
              </Link>
            </div>

            <div className="mt-5 grid max-w-xl grid-cols-3 border-t border-white/15 pt-4">
              <div className="pr-3">
                <p className="text-xl font-extrabold sm:text-2xl">
                  {slides.length}
                </p>
                <p className="mt-0.5 text-[10px] leading-4 text-white/60 sm:text-[11px]">
                  Featured Slides
                </p>
              </div>

              <div className="border-l border-white/15 px-3">
                <p className="text-xl font-extrabold sm:text-2xl">
                  {slides.length > 0 ? "01–05" : "—"}
                </p>
                <p className="mt-0.5 text-[10px] leading-4 text-white/60 sm:text-[11px]">
                  Dynamic Gallery
                </p>
              </div>

              <div className="border-l border-white/15 pl-3">
                <p className="text-xl font-extrabold sm:text-2xl">24/7</p>
                <p className="mt-0.5 text-[10px] leading-4 text-white/60 sm:text-[11px]">
                  Patient Care
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-white/70 sm:text-xs">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15">
                <CheckCircle2 className="h-3 w-3 text-emerald-300" />
              </span>
              Recognised for healthcare excellence & patient care
            </div>
          </motion.div>

          {/* Dynamic image slider */}
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex h-[400px] w-full max-w-2xl items-center justify-center sm:h-[440px] lg:h-[470px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DD4C6]/15 blur-3xl" />

            <div className="relative flex h-full w-full items-center justify-center [perspective:1400px]">
              {!hasSlides ? (
                <div className="flex h-[300px] w-[220px] flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur">
                  <Award className="mb-4 h-12 w-12 text-[#4DD4C6]" />
                  <p className="font-bold">Awards & Achievements</p>
                  <p className="mt-2 text-sm text-white/65">
                    Awards will appear here when available.
                  </p>
                </div>
              ) : (
                slides.map((slide, index) => {
                  const position =
                    (index - activeSlide + slides.length) %
                    slides.length;

                  const isActive = position === 0;
                  const total = slides.length;

                  let transform =
                    "translateX(0px) translateY(0px) scale(1) rotateY(0deg)";
                  let zIndex = 30;
                  let opacity = 1;
                  let brightness = 1;

                  if (total === 1) {
                    transform =
                      "translateX(0px) translateY(0px) scale(1) rotateY(0deg)";
                    zIndex = 60;
                  } else if (position === 0) {
                    transform =
                      "translateX(0px) translateY(-8px) scale(1.05) rotateY(0deg)";
                    zIndex = 60;
                  } else if (
                    position === 1 ||
                    (position === total - 1 && total === 2)
                  ) {
                    const isRight = position === 1;

                    transform = isRight
                      ? "translateX(115px) translateY(12px) scale(0.83) rotateY(-10deg)"
                      : "translateX(-115px) translateY(12px) scale(0.83) rotateY(10deg)";

                    zIndex = 40;
                    opacity = 0.85;
                    brightness = 0.85;
                  } else if (position === 2) {
                    transform =
                      "translateX(205px) translateY(24px) scale(0.68) rotateY(-14deg)";
                    zIndex = 20;
                    opacity = 0.55;
                    brightness = 0.7;
                  } else if (position === total - 1) {
                    transform =
                      "translateX(-205px) translateY(24px) scale(0.68) rotateY(14deg)";
                    zIndex = 20;
                    opacity = 0.55;
                    brightness = 0.7;
                  } else {
                    transform =
                      "translateX(0px) translateY(28px) scale(0.55)";
                    zIndex = 0;
                    opacity = 0;
                    brightness = 0.5;
                  }

                  return (
                    <motion.div
                      key={slide.id}
                      animate={{
                        transform,
                        zIndex,
                        opacity,
                        filter: `brightness(${brightness})`,
                      }}
                      transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute h-[330px] w-[210px] overflow-hidden rounded-[25px] border border-white/15 bg-slate-900 shadow-2xl sm:h-[365px] sm:w-[235px]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        loading={isActive ? "eager" : "lazy"}
                        decoding="async"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />

                      {isActive && (
                        <>
                          <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-[#4DD4C6]/25 blur-2xl" />
                          <div className="absolute inset-[6px] rounded-[19px] ring-1 ring-white/20" />
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />
                        </>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4DD4C6] sm:text-xs">
                          {slide.subtitle}
                        </p>

                        <h3 className="mt-1.5 text-base font-extrabold leading-tight text-white sm:text-xl">
                          {slide.title}
                        </h3>

                        {isActive && (
                          <div className="mt-3 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4DD4C6]" />
                            <span className="text-[10px] text-white/70 sm:text-xs">
                              Award & Recognition
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Slider controls appear only for multiple images */}
            {slides.length > 1 && (
              <div className="absolute bottom-0 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous award"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Go to award ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "w-7 bg-[#4DD4C6]"
                          : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next award"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="block h-[40px] w-full sm:h-[60px] md:h-[80px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,35 C180,85 360,95 540,55 C720,15 900,10 1080,45 C1220,72 1340,65 1440,30 L1440,100 L0,100 Z"
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
  const Icon = getAwardIcon(award.icon);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {award.image ? (
          <img
            src={award.image}
            alt={award.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-100">
            <Icon className="h-16 w-16 text-blue-300" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md">
          <CalendarDays className="h-3.5 w-3.5 text-blue-600" />
          {award.year}
        </div>

        <button
          type="button"
          aria-label={`View ${award.title}`}
          onClick={() => onSelect(award)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 opacity-0 shadow-lg transition group-hover:opacity-100 focus:opacity-100"
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-blue-600/90 px-3 py-1.5 text-xs font-semibold text-white">
            {award.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
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
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600"
        >
          View Achievement
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
});

/* =========================================================
   FEATURED AWARD
========================================================= */

const FeaturedAward = memo(function FeaturedAward({ award, onSelect }) {
  const Icon = getAwardIcon(award.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative mb-16 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
          {award.image ? (
            <img
              src={award.image}
              alt={award.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
              <Icon className="h-24 w-24 text-cyan-300" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-950" />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-blue-700 shadow-lg">
            <Trophy className="h-4 w-4" />
            Featured Achievement
          </div>
        </div>

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
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
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

const AwardModal = memo(function AwardModal({ award, onClose }) {
  useEffect(() => {
    if (!award) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={award.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close award details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-xl hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
              <div className="relative min-h-[280px] bg-slate-100 lg:min-h-[550px]">
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center">
                    <Award className="h-20 w-20 text-blue-300" />
                  </div>
                )}
              </div>

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

                  {award.organization && (
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                      {award.organization}
                    </span>
                  )}
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
  const [activeSlide, setActiveSlide] = useState(0);

  // API response may be Axios data or parsed JSON
  const {
    data: response,
    error,
    isLoading,
  } = useSWR("awards", ApiService.get);

  const rawAwards =
    response?.data?.data ??
    response?.data ??
    [];

  const awards = (Array.isArray(rawAwards) ? rawAwards : []).map(
    (item) => ({
      ...item,
      year: String(item.year ?? ""),
      featured:
        Number(item.featured) === 1 ||
        item.featured === true,
    })
  );

  // Use featured record first; otherwise use first record
  const featuredAward =
    awards.find((item) => item.featured) ||
    awards[0] ||
    null;

  // Remaining awards for the cards grid
  const regularAwards = featuredAward
    ? awards.filter((item) => item.id !== featuredAward.id)
    : [];

  // Dynamic hero slides: never more than 5
  const slides = awards.slice(0, 5).map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    subtitle: item.category,
  }));

  // Keep slide index valid when API results change
  useEffect(() => {
    setActiveSlide((current) =>
      slides.length ? current % slides.length : 0
    );
  }, [slides.length]);

  // Auto-slide only when there are multiple images
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    if (slides.length <= 1) return;
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length <= 1) return;
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const openAward = (award) => setSelectedAward(award);
  const closeAward = () => setSelectedAward(null);

  return (
    <>
      {/* HERO */}
      <AwardsHero
        slides={slides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />

      {/* AWARDS SECTION */}
      <section
        id="awards-achievements"
        className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[-150px] top-[120px] h-[350px] w-[350px] rounded-full bg-blue-50 blur-3xl" />
          <div className="absolute bottom-[100px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              <span>Recognition & Excellence</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Awards{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                & Achievements
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our commitment to clinical excellence, compassionate care and
              continuous innovation has been recognized through achievements
              and healthcare honors.
            </p>
          </motion.div>

          {/* Loading state */}
          {isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse overflow-hidden rounded-3xl border border-slate-200"
                >
                  <div className="h-56 bg-slate-100" />
                  <div className="space-y-3 p-6">
                    <div className="h-4 w-1/3 rounded bg-slate-100" />
                    <div className="h-6 w-4/5 rounded bg-slate-100" />
                    <div className="h-4 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* API error */}
          {!isLoading && error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-red-700">
              Unable to load awards. Please try again later.
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !error && awards.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
              <Award className="mx-auto mb-3 h-12 w-12 text-slate-300" />
              <h3 className="font-bold text-slate-800">
                No Awards Available
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Awards will appear here once they are added.
              </p>
            </div>
          )}

          {!isLoading && !error && awards.length > 0 && (
            <>
              {/* Featured award */}
              {featuredAward && (
                <FeaturedAward
                  award={featuredAward}
                  onSelect={openAward}
                />
              )}

              {/* Other awards */}
              {regularAwards.length > 0 && (
                <div id="recognition-highlights">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
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
              )}
            </>
          )}

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                icon: ShieldCheck,
                number: `${awards.length}+`,
                text: "Healthcare Recognitions",
              },
              {
                icon: Trophy,
                number: `${awards.filter((item) => item.featured).length}`,
                text: "Featured Awards",
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
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xl font-extrabold text-slate-900">
                      {item.number}
                    </p>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Connect With Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AwardModal award={selectedAward} onClose={closeAward} />
    </>
  );
}
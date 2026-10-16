"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  Phone,
} from "lucide-react";

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    image: "/assets/images/01.png",
    badge: "Trusted Healthcare Excellence",
    title: "Your Health Is Our",
    highlight: "Highest Priority.",
    description:
      "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
    cardTitle: "Advanced Healthcare",
    cardText:
      "Compassionate and comprehensive care for every patient",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85",
    badge: "Advanced Diagnostics",
    title: "Accurate Diagnosis.",
    highlight: "Better Treatment.",
    description:
      "Advanced laboratory and diagnostic services help our medical team deliver timely and accurate healthcare decisions.",
    cardTitle: "Pathology & Diagnostics",
    cardText:
      "Modern diagnostic technology for accurate results",
  },
  {
    image: "/assets/images/doctorteam01.png",
    badge: "Expert Medical Team",
    title: "Experienced Doctors.",
    highlight: "Personalized Care.",
    description:
      "Our experienced doctors and dedicated healthcare professionals provide personalized treatment for you and your family.",
    cardTitle: "Expert Specialists",
    cardText:
      "Experienced doctors and caring healthcare professionals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1800&q=85",
    badge: "24×7 Patient Care",
    title: "Care That Is",
    highlight: "Always With You.",
    description:
      "From emergency support to ongoing treatment, our dedicated team is committed to providing dependable care whenever you need it.",
    cardTitle: "24×7 Healthcare",
    cardText:
      "Dedicated support for patients around the clock",
  },
];

/* =========================================================
   SLIDE VARIANTS
========================================================= */

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

/* =========================================================
   CONTENT VARIANTS
========================================================= */

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

/* =========================================================
   COMPONENT
========================================================= */

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  /* AUTO SLIDER */

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  /* MANUAL SLIDE */

  const goToSlide = (index) => {
    if (index === activeSlide) return;

    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  return (
    <section
      className="
        relative isolate
        h-[620px]
        overflow-hidden
        bg-[#032B42]
        sm:h-[600px]
        lg:h-[570px]
      "
    >
      {/* BACKGROUND SLIDER */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="sync"
        >
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 1.2,
              },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* LIGHT BLACK OVERLAY - BLUE GRADIENT REMOVED */}

        <div
          className="
            pointer-events-none
            absolute inset-0 z-10
            bg-gradient-to-r
            from-black/45
            via-black/20
            to-transparent
          "
        />

        {/* MOBILE TEXT READABILITY */}

        <div
          className="
            pointer-events-none
            absolute inset-0 z-10
            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/40
            lg:hidden
          "
        />

        {/* SUBTLE BOTTOM GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0 z-10
            h-24
            bg-gradient-to-t
            from-black/25
            to-transparent
          "
        />
      </div>

      {/* MAIN CONTENT */}

      <div
        className="
          relative z-20
          mx-auto flex h-full
          max-w-7xl items-center
          px-4 sm:px-6 lg:px-8
        "
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full max-w-2xl
              pt-8 text-white
              sm:pt-0
            "
          >
            {/* BADGE */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/30
                bg-black/20
                px-3.5 py-2
                text-[10px] font-bold uppercase
                tracking-[0.12em]
                text-teal-100
                sm:px-4 sm:text-xs
              "
            >
              <HeartPulse className="h-4 w-4 shrink-0 text-teal-300" />
              {slide.badge}
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.45 }}
              className="
                mt-5
                text-[2.4rem]
                font-black
                leading-[1.04]
                tracking-tight
                text-white
                drop-shadow-md
                sm:text-5xl
                lg:text-[3.8rem]
              "
            >
              {slide.title}

              <span
                className="
                  mt-1 block
                  text-teal-300
                  drop-shadow-md
                "
              >
                {slide.highlight}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="
                mt-5 max-w-xl
                text-sm leading-6
                text-white
                drop-shadow-sm
                sm:text-base sm:leading-7
              "
            >
              {slide.description}
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.45 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {/* BOOK APPOINTMENT */}

              <Link
                href="/appointment"
                className="
                  group inline-flex
                  items-center justify-center gap-2
                  rounded-xl
                  border border-teal-400/40
                  bg-[#0A7A78]
                  px-5 py-3
                  text-sm font-bold text-white
                  shadow-lg shadow-black/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#086663]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-teal-300
                  sm:px-6 sm:py-3.5
                "
              >
                <CalendarDays className="h-5 w-5 shrink-0" />
                Book Appointment
                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* FIND DOCTOR */}

              <Link
                href="/doctors"
                className="
                  group inline-flex
                  items-center justify-center gap-2
                  rounded-xl
                  border border-white/60
                  bg-black/25
                  px-5 py-3
                  text-sm font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/20
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  sm:px-6 sm:py-3.5
                "
              >
                Find a Doctor
                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* TRUST POINTS */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4 }}
              className="
                mt-6 flex flex-wrap
                gap-x-5 gap-y-2
                text-xs font-semibold
                text-white
                sm:gap-x-6 sm:text-sm
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-300" />
                Experienced Specialists
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-300" />
                Modern Facilities
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-300" />
                24/7 Emergency
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT INFORMATION CARD */}

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`card-${activeSlide}`}
          initial={{ opacity: 0, x: 25, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.97 }}
          transition={{ duration: 0.45 }}
          className="
            absolute bottom-20 right-5 z-30
            hidden w-[280px]
            rounded-2xl
            border border-white/30
            bg-black/35
            p-4 text-white
            shadow-xl
            md:block
            lg:right-[6%]
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl bg-[#0A7A78]
              "
            >
              <HeartPulse className="h-6 w-6" />
            </div>

            <div>
              <p className="font-black">{slide.cardTitle}</p>
              <p className="mt-1 text-xs leading-5 text-white/90">
              {/* <p className="mt-1 text-xs leading-5 text-white/90"> */}
                {slide.cardText}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* EMERGENCY CARD */}

      <motion.a
        href="tel:+919575300110"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-5 right-5 z-30
          hidden rounded-xl
          border border-slate-200
          bg-white p-3
          shadow-xl
          sm:block
          lg:right-[6%]
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg bg-red-50 text-red-600
            "
          >
            <Phone className="h-5 w-5" />
          </div>

          <div>
            <p
              className="
                text-[10px] font-bold uppercase
                tracking-wider text-slate-500
              "
            >
              Emergency 24/7
            </p>

            <p className="text-sm font-black text-[#063B5C]">
              +91 9575300110
            </p>
          </div>
        </div>
      </motion.a>

      {/* EXPERIENCE BADGE */}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.45 }}
        className="
          absolute right-5 top-6 z-30
          hidden items-center gap-3
          rounded-xl
          border border-white/30
          bg-black/25
          px-4 py-3 text-white
          lg:flex lg:right-[6%]
        "
      >
        <Award className="h-6 w-6 text-teal-300" />

        <div>
          <p className="text-xl font-black">25+</p>
          <p className="text-[10px] text-white/90">
            Years Experience
          </p>
        </div>
      </motion.div>

      {/* SLIDER DOTS */}

      <div
        className="
          absolute bottom-5 left-1/2 z-40
          flex -translate-x-1/2
          items-center gap-2
        "
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`
              h-2.5 rounded-full
              transition-all duration-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-teal-300
              ${
                activeSlide === index
                  ? "w-8 bg-teal-300"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* MOBILE EMERGENCY BUTTON */}

      <a
        href="tel:+919575300110"
        className="
          absolute bottom-5 right-4 z-40
          flex items-center gap-2
          rounded-lg
          border border-white/20
          bg-red-600
          px-3 py-2
          text-xs font-bold text-white
          shadow-lg
          transition hover:bg-red-700
          sm:hidden
        "
      >
        <Phone className="h-4 w-4" />
        Emergency
      </a>
    </section>
  );
}

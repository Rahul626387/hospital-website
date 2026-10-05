"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";


import { useRef, useState, useEffect  } from "react";
import { motion, useScroll, useTransform,useSpring,useMotionValue,  AnimatePresence } from "framer-motion";
import {
  Ambulance,
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Users,
  Utensils,
  Stethoscope,
  HeartPulse,
  ChevronLeft, ChevronRight,
} from "lucide-react";


const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0, y = 32 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
function TiltLeaderCard({ leader, index }) {
  const Icon = leader.icon;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Reveal delay={0.12 + index * 0.14} y={34}>
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="group relative h-full min-h-[320px] overflow-hidden rounded-[1.75rem] shadow-[0_20px_45px_rgba(11,46,43,0.15)] transition-shadow duration-500 hover:shadow-[0_35px_70px_rgba(11,46,43,0.28)]"
      >
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            sizes="(max-width: 640px) 100vw, 22vw"
            className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
          />
        </div>

        {/* Base readability gradient, always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E2B] via-[#0B2E2B]/25 to-transparent" />

        {/* Deepens on hover for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E2B]/95 via-[#0B2E2B]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Mouse-follow spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) => `radial-gradient(220px circle at ${gx} ${gy}, rgba(255,255,255,0.5), transparent 70%)`
            ),
          }}
        />

        {/* Top row — tag + icon */}
        <div className="relative z-10 flex items-center justify-between p-5">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
            {leader.tag}
          </span>
          <motion.div
            whileHover={{ rotate: -10, scale: 1.15 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md"
          >
            <Icon size={15} strokeWidth={1.8} />
          </motion.div>
        </div>

        {/* Bottom text block */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5FD4C6]">
            {leader.role}
          </p>
          <h3 className="mt-1.5 text-xl font-semibold leading-tight text-white">
            {leader.name}
          </h3>

          {/* Description — hidden by default, slides up + fades in on hover */}
          <p className="mt-0 max-h-0 overflow-hidden text-[11px] leading-5 text-white/70 opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
            {leader.description}
          </p>

          {/* underline accent */}
          <div className="mt-3 h-[2px] w-8 bg-gradient-to-r from-[#5FD4C6] to-transparent transition-all duration-500 group-hover:w-16" />
        </div>

        {/* Outer border glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#5FD4C6]/40" />
      </motion.article>
    </Reveal>
  );
}
function LeadershipSelector() {
  const swiperRef = useRef(null);

  return (
    <Reveal delay={0.15} y={30}>
      <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#0B2E2B] to-[#0E4A45] shadow-[0_25px_60px_rgba(11,46,43,0.15)]">

        {/* decorative faint pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: ".leader-prev",
            nextEl: ".leader-next",
          }}
          pagination={{
            clickable: true,
            el: ".leader-pagination",
            bulletClass: "leader-bullet",
            bulletActiveClass: "leader-bullet-active",
          }}
          className="relative z-10"
        >
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <SwiperSlide key={leader.name}>
                <div className="flex min-h-[380px] flex-col items-center justify-center gap-8 px-7 py-14 sm:min-h-[420px] sm:flex-row sm:gap-14 sm:px-16">

                  {/* portrait */}
                  <div className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-[1.5rem] border-4 border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:h-[260px] sm:w-[260px]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="260px"
                      className="object-cover object-top"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${leader.tint} to-transparent opacity-20 mix-blend-multiply`} />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>

                  {/* text */}
                  <div className="max-w-sm text-center sm:text-left">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#5FD4C6] backdrop-blur-md sm:mx-0">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-md">
                      {leader.tag}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#5FD4C6]">
                      {leader.role}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/60">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Arrow nav */}
        <button
          className="leader-prev absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:left-6"
          aria-label="Previous leader"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="leader-next absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:right-6"
          aria-label="Next leader"
        >
          <ChevronRight size={18} />
        </button>

        {/* Pagination dots */}
        <div className="leader-pagination relative z-20 flex items-center justify-center gap-2 pb-8" />
      </div>
    </Reveal>
  );
}

const journey = [
  ["01", "Connect", "Reach our team, book an appointment or seek urgent help."],
  ["02", "Consult", "Meet the right specialist with coordinated clinical support."],
  ["03", "Diagnose", "Use integrated diagnostics to build a clearer clinical picture."],
  ["04", "Treat", "Receive planned or emergency treatment with multidisciplinary care."],
  ["05", "Recover", "Continue recovery with rehabilitation, guidance and follow-up."],
];

const leaders = [
  {
    name: "Rajiv Baderia",
    role: "Chairman",
    tag: "Vision",
    image: "/images/about/rb.jpg",
    description: "Sets the long-term direction for the hospital, focused on accessible, integrated care.",
    tint: "from-[#0E8479]",
    icon: Award,
    iconColor: "text-[#0E8479]",
  },
  {
    name: "Saurabh Baderia",
    role: "Managing Director",
    tag: "Mission",
    image: "/images/about/sb.jpg",
    description: "Oversees clinical operations and infrastructure for better patient outcomes.",
    tint: "from-[#D6A756]",
    icon: Stethoscope,
    iconColor: "text-[#B8863A]",
  },
  {
    name: "Yatin Baderia",
    role: "Director",
    tag: "Promise",
    image: "/images/about/yatin.jpg",
    description: "Champions patient experience — communication, safety, and dignity at every step.",
    tint: "from-[#E2896D]",
    icon: HeartPulse,
    iconColor: "text-[#C46A4E]",
  },
];

const values = [
  { title: "People first", icon: Users },
  { title: "Integrity, always", icon: ShieldCheck },
  { title: "Excellence without compromise", icon: Award },
  { title: "Stronger communities, together", icon: HeartPulse },
];

const csr = [
  {
    icon: HeartHandshake,
    title: "Free OPD consultation",
    text: "Support for patients from economically vulnerable communities.",
  },
  {
    icon: Utensils,
    title: "Free meals",
    text: "Practical support that helps families stay focused on recovery.",
  },
  {
    icon: Users,
    title: "Attendant support",
    text: "Dormitory accommodation for attendants who need a place to stay.",
  },
];

export default function AboutPartTwo() {
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 78%", "end 32%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="overflow-hidden bg-[#f5fbfa] text-[#102d3a]">
      {/* EMERGENCY */}
      <section className="px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, scale: 0.975 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="relative overflow-hidden rounded-[2.5rem] bg-[#0a4653] text-white"
    >
      {/* Emergency Image */}
      {/* Emergency Image */}
<motion.div
  style={{
    y: useTransform(scrollYProgress, [0, 1], [0, -30]),
    scale: 1.08,

    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.75) 58%, #000 78%, #000 100%)",

    maskImage:
      "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.75) 58%, #000 78%, #000 100%)",
  }}
  className="absolute inset-0 origin-center"
>
  <Image
    src="/images/about/emergency-right.jpg"
    alt="Emergency and critical care"
    fill
    className="object-cover object-center"
  />
</motion.div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a4653] via-[#0a4653]/80 to-transparent" />

      {/* Decorative Circle */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

      {/* Content */}
      <div className="relative grid items-center gap-10 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9ce5db] backdrop-blur-sm">
            <Ambulance size={15} />
            Emergency & critical care
          </div>

          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            When every minute matters, care starts now.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/65">
            Our emergency and critical-care ecosystem is designed for rapid
            assessment, coordinated response and continuous monitoring.
          </p>
        </div>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8de0d4] px-6 py-4 text-sm font-bold text-[#083b49]"
        >
          <PhoneCall size={18} />
          Emergency support
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>

      {/* QUALITY */}
  
<section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

    <Reveal>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
        Quality & trust
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0c3441] sm:text-5xl">
        Standards that strengthen confidence.
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-[#617981]">
        Quality is not a single department. It is the way clinical, diagnostic
        and patient-support processes come together every day.
      </p>
    </Reveal>

    <div className="grid gap-5 sm:grid-cols-2">

      {/* NABH */}
      <Reveal>
        <motion.div
          whileHover={{ y: -7, scale: 1.01 }}
          className="group overflow-hidden rounded-[2rem] border border-[#dcebea] bg-[#f7fcfb]"
        >
          <Link
            href="/images/about/NABH.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative h-64 overflow-hidden bg-white p-4">
              <img
                src="/images/about/NABH.jpg"
                alt="NABH Certificate"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />

              {/* View overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#063B5C]/0 transition duration-300 group-hover:bg-[#063B5C]/10">
                <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0c3441] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Certificate ↗
                </span>
              </div>
            </div>

            <div className="border-t border-[#dcebea] p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#0c3441]">
                  NABH
                </h3>

                <CheckCircle2
                  className="text-[#07877f]"
                  size={20}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-[#6b8188]">
                Hospital accreditation and quality standards
              </p>
            </div>
          </Link>
        </motion.div>
      </Reveal>

      {/* NABL */}
      <Reveal delay={0.12}>
        <motion.div
          whileHover={{ y: -7, scale: 1.01 }}
          className="group overflow-hidden rounded-[2rem] border border-[#dcebea] bg-[#f7fcfb]"
        >
          <Link
            href="/images/about/NABL.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative h-64 overflow-hidden bg-white p-4">
              <img
                src="/images/about/NABL.jpg"
                alt="NABL Certificate"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />

              {/* View overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#063B5C]/0 transition duration-300 group-hover:bg-[#063B5C]/10">
                <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0c3441] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Certificate ↗
                </span>
              </div>
            </div>

            <div className="border-t border-[#dcebea] p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#0c3441]">
                  NABL
                </h3>

                <CheckCircle2
                  className="text-[#07877f]"
                  size={20}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-[#6b8188]">
                Laboratory quality and competence
              </p>
            </div>
          </Link>
        </motion.div>
      </Reveal>

    </div>
  </div>
</section>

      {/* PATIENT JOURNEY */}
      <section ref={journeyRef} className="bg-[#eaf6f3] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
              Patient journey
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#0c3441] sm:text-5xl">
              From first contact to confident recovery.
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#c8dedb] md:left-0 md:right-0 md:top-5 md:h-px md:w-auto md:bottom-auto" />
            <motion.div
              style={{ height: undefined, width: progress }}
              className="absolute left-5 top-0 h-auto w-[3px] origin-top bg-[#07877f] md:left-0 md:top-[19px] md:h-[3px] md:w-auto"
            />

            <div className="grid gap-9 md:grid-cols-5 md:gap-5">
              {journey.map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 0.08} y={24}>
                  <div className="relative pl-14 md:pl-0 md:pt-12">
                    <motion.div
                      whileInView={{ scale: [0.7, 1.08, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-4 border-[#eaf6f3] bg-[#07877f] text-xs font-bold text-white md:left-0 md:-top-1"
                    >
                      {number}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-[#123b47]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#6b8188]">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
  {/* PURPOSE + LEADERSHIP */}
<section className="relative overflow-hidden bg-[#F5FAF9] py-16 sm:py-20 lg:py-24">

  {/* Layered aurora mesh background */}
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#0E8479]/25 via-[#5FD4C6]/15 to-transparent blur-3xl"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -left-24 top-40 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[#D6A756]/20 via-[#E2896D]/10 to-transparent blur-3xl"
      animate={{ y: [0, -25, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-t from-[#E2896D]/15 to-transparent blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

    {/* Header */}
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-[#0E8479]/20 bg-white/70 px-4 py-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0E8479]" />
        <span className="text-xs font-medium text-[#0E8479]">Our Purpose & People</span>
      </div>

      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-[#0B2E2B] sm:text-5xl lg:text-[3.6rem]">
        Guided by purpose,
        <br />
        driven by <span className="text-[#0E8479]">people.</span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#5C716D]">
        Three generations of one family, steering a hospital built on one
        promise — the patient always comes first.
      </p>
    </Reveal>

    {/* Interactive leadership selector */}
    <LeadershipSelector />

    {/* Values — infinite marquee */}
    <Reveal delay={0.2} y={16}>
      <div className="relative mt-14 overflow-hidden rounded-full border border-white/60 bg-white/50 py-3 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...values, ...values].map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="flex shrink-0 items-center gap-2">
                <Icon size={14} strokeWidth={1.8} className="text-[#0E8479]" />
                <span className="text-xs font-medium whitespace-nowrap text-[#2C4A47]">{v.title}</span>
                <span className="ml-6 h-1 w-1 rounded-full bg-[#0E8479]/30" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </Reveal>

  </div>
</section>

      {/* SOCIAL RESPONSIBILITY */}
      <section className="bg-[#083b49] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8de0d4]">
              Social responsibility
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Care should reach beyond our walls.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Our commitment to the community extends to practical support for patients
              and families who need it most.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ x: 5 }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8de0d4]"
            >
              Learn more about our initiatives
              <ArrowRight size={17} />
            </motion.a>
          </Reveal>

          <div className="grid gap-4">
            {csr.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 7 }}
                    className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.06] p-6"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#8de0d4] text-[#083b49]">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
              Inside MetroPrime
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0c3441] sm:text-5xl">
              A closer look at care.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
            <Reveal>
              <motion.div
                whileHover={{ scale: 0.99 }}
                className="relative h-[420px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src="/images/about/facilities-icu.jpg"
                  alt="Hospital infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.1}>
                <motion.div
                  whileHover={{ scale: 0.99 }}
                  className="relative h-[202px] overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src="/images/about/story-patient.jpg"
                    alt="Patient care"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </Reveal>

              <Reveal delay={0.18}>
                <motion.div
                  whileHover={{ scale: 0.99 }}
                  className="relative h-[202px] overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src="/images/about/cta-hands.jpg"
                    alt="Compassionate care"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-14 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#dff4ef]"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-140">
            <Image
              src="/images/about/cta-hands.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#dff4ef] via-[#dff4ef]/55 to-transparent" />
          </div>

          <div className="relative max-w-2xl px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
              Your care matters
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0c3441] sm:text-5xl">
              Let’s take the next step together.
            </h2>
            <p className="mt-5 leading-8 text-[#5d747b]">
              Whether you need a specialist consultation, diagnostic support or urgent
              care, our team is here to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="/appointments"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#083b49] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Book an appointment
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#b9d9d4] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#123b47]"
              >
                <MapPin size={17} />
                Contact us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

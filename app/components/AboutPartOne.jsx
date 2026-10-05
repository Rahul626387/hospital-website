"use client";

// import useSpecialties from "@/hooks/useSpecialties";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/lib/siteData";
import ApiService from "../src/services/Apiservices";
import useSWR from "swr";
import Link from "next/link";
import HeroHeading from "./HeroHeading";

const ease = [0.22, 1, 0.36, 1];

// const stats = [
//   {
//     value: siteData.statistics.beds,
//     suffix: "+",
//     label: "Beds",
//     icon: BedDouble,
//   },
//   {
//     value: siteData.statistics.ots,
//     suffix: "",
//     label: "Operational OTs",
//     icon: Building2,
//   },
//   {
//     value: siteData.statistics.criticalCareBeds,
//     suffix: "",
//     label: "Critical Care Beds",
//     icon: Activity,
//   },
//   {
//     value: siteData.statistics.emergencyCare,
//     suffix: "/7",
//     label: "Emergency Care",
//     icon: Clock3,
//   },
// ];

const stats = [
  {
    label: "Happy Patients",
    value: 50,
    suffix: "K+",
    icon: Users,
    iconColor: "text-[#087f7a]",
    iconBg: "bg-[#e8f7f4]",
  },
  {
    label: "Expert Doctors",
    value: 120,
    suffix: "+",
    icon: Stethoscope,
    iconColor: "text-[#2563eb]",
    iconBg: "bg-[#eff6ff]",
  },
  {
    label: "Years Experience",
    value: 25,
    suffix: "+",
    icon: Award,
    iconColor: "text-[#d97706]",
    iconBg: "bg-[#fffbeb]",
  },
  {
    label: "Emergency Support",
    value: 24,
    suffix: "/7",
    icon: HeartPulse,
    iconColor: "text-[#dc2626]",
    iconBg: "bg-[#fef2f2]",
  },
];


const values = [
  {
    icon: HeartPulse,
    title: "Compassion first",
    text: "Every clinical decision begins with the person behind the patient.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by design",
    text: "Protocols, experienced teams and modern infrastructure work together.",
  },
  {
    icon: Microscope,
    title: "Evidence-led care",
    text: "Advanced diagnostics and specialist expertise support confident decisions.",
  },
];



const facilities = [
  {
    title: "Critical Care",
    text: "ICU, CCU and high-dependency care supported by experienced clinical teams.",
    image: "/images/about/facilities-icu.jpg",
  },
  {
    title: "Advanced Diagnostics",
    text: "Integrated laboratory, imaging and diagnostic services for faster decisions.",
    image: "/images/about/diagnostics1.jpg",
  },
  {
    title: "Patient Comfort",
    text: "Rooms, wards, pharmacy, dietetics and rehabilitation support the complete journey.",
    image: "/images/about/story-patient.jpg",
  },
];

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

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame;
    const start = performance.now();
    const duration = 1300;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPartOne() {
  const {
    data,
    isLoading: specialtiesLoading,
    error: specialtiesError,
  } = useSWR("specialties", ApiService.get);

  const specialties = data?.data || [];

  // console.log(specialties);
  return (
    <main className="overflow-hidden bg-[#f5fbfa] text-[#102d3a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#073b48]">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about/hero-building.jpg"
            alt="Baderia MetroPrime Multi Speciality Hospital"
            fill
            priority
            className="object-cover object-center opacity-55"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#062d39]/95 via-[#073e4a]/28 to-[#fff]/20" />

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-24 hidden h-80 w-80 rounded-full border border-white/10 sm:block"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur"
            >
              <Sparkles size={14} />
              About Baderia MetroPrime
            </motion.div>

            {/* <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl"
            >
              Compassionate care
              <span className="block text-[#8de0d4]">Advanced healthcare</span>
            </motion.h1> */}
            <HeroHeading/>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
            >
              A leading multi-speciality healthcare destination in Jabalpur,
              bringing specialists, technology and human care together under one
              roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8de0d4] px-6 py-3.5 text-sm font-semibold text-[#083b49] transition-transform hover:-translate-y-1"
              >
                <span>Book appointment</span>
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/department"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="relative z-10 -mt-8 px-6 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 shadow-[0_25px_80px_rgba(8,59,73,0.12)] backdrop-blur md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.label}
                delay={index * 0.08}
                y={22}
                className="relative p-6 sm:p-8"
              >
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#d9e9e7] md:block" />
                )}
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#e8f7f4] text-[#087f7a]">
                    <Icon size={19} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#66808a]">
                    {item.label}
                  </p>
                </div>
                <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#0c3441] sm:text-5xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
              </Reveal>
            );
          })}
        </div>
      </section> */}
      <section className="relative z-10 -mt-6 px-4 sm:px-6">
  <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-[0_15px_50px_rgba(8,59,73,0.10)] backdrop-blur md:grid-cols-4">

    {stats.map((item, index) => {
      const Icon = item.icon;

      return (
        <Reveal
          key={item.label}
          delay={index * 0.08}
          y={15}
          className="relative px-4 py-4 sm:px-5 sm:py-5"
        >
          {/* Divider */}
          {index < stats.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#d9e9e7] md:block" />
          )}

          <div className="flex items-center gap-2.5">

            {/* Different Icon Color */}
            <div
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${item.iconBg} ${item.iconColor}`}
            >
              <Icon
                size={16}
                strokeWidth={1.8}
              />
            </div>

            {/* Label */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[#66808a]">
              {item.label}
            </p>
          </div>

          {/* Value */}
          <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#0c3441] sm:text-3xl">
            <Counter
              value={item.value}
              suffix={item.suffix}
            />
          </p>
        </Reveal>
      );
    })}

  </div>
</section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/about/story-surgery.jpg"
                  alt="Clinical care at Baderia MetroPrime"
                  width={900}
                  height={1050}
                  className="h-[460px] w-full object-cover sm:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#083b49]/45 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.18} y={18}>
              <motion.div
                whileHover={{ y: -5, rotate: -1 }}
                className="absolute -bottom-7 -right-3 w-[68%] overflow-hidden rounded-[2rem] border-8 border-[#f5fbfa] shadow-2xl sm:-right-8"
              >
                <Image
                  src="/images/about/story-patient.jpg"
                  alt="Doctor caring for a patient"
                  width={700}
                  height={520}
                  className="h-48 w-full object-cover sm:h-56"
                />
              </motion.div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
                Who we are
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#0c3441] sm:text-5xl">
                More than a hospital.
                <span className="block text-[#07877f]">
                  A trusted care partner.
                </span>
              </h2>

              <p className="mt-6 text-base leading-7 text-[#58717a]">
                Baderia MetroPrime Multi Speciality Hospital is built around a
                simple belief: advanced medicine becomes truly meaningful when
                it is delivered with empathy, clarity and respect.
              </p>

              <p className="mt-4 text-base leading-7 text-[#58717a]">
                Serving Jabalpur and the wider Mahakaushal region, our
                integrated healthcare ecosystem brings specialist consultation,
                diagnostics, critical care, surgery and recovery support
                together.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.1} y={24}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="h-full rounded-3xl border border-[#dcebea] bg-white p-5 shadow-[0_12px_40px_rgba(8,59,73,0.05)]"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e8f7f4] text-[#07877f]">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-4 text-base font-semibold text-[#123b47]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6b8188]">
                        {item.text}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

     
      {/* SPECIALITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#07877f]">
                Clinical expertise
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#0c3441] sm:text-5xl">
                Specialist care, connected.
              </h2>
            </div>
            <Link
              href="/department"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#087f7a]"
            >
              View all specialities
              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specialties?.map((specialty, index) => (
            <Reveal key={specialty.id} delay={(index % 6) * 0.055} y={20}>
              <motion.a
                // href="/specialities"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group flex min-h-[74px] items-center justify-between rounded-2xl border border-[#dcebea] bg-white px-5 shadow-[0_8px_28px_rgba(8,59,73,0.035)]"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-[#173e49]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e8f7f4] text-[#07877f]">
                    <Stethoscope size={17} />
                  </span>

                  {specialty.name}
                </span>

                {/* <ArrowRight
                  size={17}
                  className="text-[#8aa0a6] transition-transform group-hover:translate-x-1 group-hover:text-[#07877f]"
                /> */}
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="bg-[#083b49] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8de0d4]">
              Infrastructure
            </p>
            <div className="mt-4 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Designed around better care.
              </h2>
              <p className="max-w-md leading-7 text-white/65">
                From critical care to diagnostics and patient comfort, every
                layer of our infrastructure supports a connected care
                experience.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {facilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]"
                >
                  {/* Full Card Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Base Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f27] via-[#083b49]/20 to-transparent" />

                  {/* Hover Gradient - Desktop */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#041f27]/95
                      via-[#083b49]/70
                      to-[#083b49]/10
                      opacity-100
                      transition-opacity
                      duration-500
                      lg:opacity-0
                      lg:group-hover:opacity-100
                    "
                  />

                  {/* Connected Support Badge */}
                  <span
                    className="
            absolute left-5 top-5
            rounded-full
            border border-white/15
            bg-white/10
            px-3 py-1.5
            text-xs font-semibold
            text-white
            backdrop-blur-md
            transition-all duration-500
            lg:group-hover:-translate-y-1
            lg:group-hover:bg-white/15
          "
                  >
                    Connected support
                  </span>

                  {/* Bottom Content */}
                  <div
                    className="
            absolute inset-x-0 bottom-0
            p-2 px-5
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
                  >
                    {/* Title */}
                    <h3
                      className="
              pb-2
              text-xl font-semibold
              leading-tight
              text-white
              transition-transform duration-500
              lg:group-hover:-translate-y-1
            "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <div
                      className="
              grid
              grid-rows-[1fr]
              opacity-100
              lg:grid-rows-[0fr]
              lg:opacity-0
              lg:transition-all
              lg:duration-500
              lg:ease-[cubic-bezier(0.22,1,0.36,1)]
              lg:group-hover:mt-3
              lg:group-hover:grid-rows-[1fr]
              lg:group-hover:opacity-100
            "
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 text-sm leading-6 text-white/70 lg:pb-0 lg:leading-7">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

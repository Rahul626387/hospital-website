"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  HeartHandshake,
  Award
} from "lucide-react";
import PageHero from "../components/Pagehero";
import ApiService from "../src/services/Apiservices";
import  useSWR  from "swr";
import  DepartmentCard  from "../components/DepartmentCard";
import HospitalStats from "../components/HospitalStats";
import { hospitalStats } from "../data/stats";

import features from "../data/aboutFeatures.json";

const iconMap = {
  HeartHandshake,
  Award,
  Microscope,
  Clock3,
};

const services = [
  {
    title: "Cardiology",
    description:
      "Complete heart care including diagnosis, prevention and treatment of cardiovascular conditions.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-500",
  },
  {
    title: "Neurology",
    description:
      "Specialized diagnosis and treatment for brain, spine and nervous system disorders.",
    icon: Brain,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Orthopedics",
    description:
      "Advanced treatment for bones, joints, muscles, sports injuries and mobility problems.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Pediatrics",
    description:
      "Complete healthcare services for infants, children and adolescents.",
    icon: Baby,
    color: "bg-pink-50 text-pink-500",
  },
  {
    title: "Diagnostic Services",
    description:
      "Advanced laboratory and diagnostic services for accurate and timely medical evaluation.",
    icon: Microscope,
    color: "bg-teal-50 text-[#0A7A78]",
  },
  {
    title: "General Medicine",
    description:
      "Comprehensive consultation, diagnosis and management of common medical conditions.",
    icon: Syringe,
    color: "bg-orange-50 text-orange-500",
  },
];



const facilities = [
  "24/7 Emergency & Trauma Care",
  "Advanced ICU & Critical Care",
  "Modern Operation Theatres",
  "Advanced Diagnostic Laboratory",
  "Pharmacy Services",
  "Ambulance Services",
];



export default function Servicespage() {

  const {data,error,isLoading} = useSWR('departments',ApiService.get)
  const departments = data?.data

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#063B5C] to-[#0A7A78]">
        <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              Healthcare Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Complete Care.
              <span className="block text-teal-200">
                Every Step of the Way.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              From preventive healthcare to advanced treatments, Baderia Metro
              Prime Hospital provides comprehensive medical services for you
              and your family.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#063B5C] shadow-xl transition hover:-translate-y-1"
              >
                <CalendarDays className="h-5 w-5" />
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Emergency
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[380px] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl sm:h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                alt="Doctor providing healthcare"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-bold">Trusted Medical Care</p>
                    <p className="text-sm text-white/70">
                      Experienced doctors & modern facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

     <PageHero
      backgroundImage="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
      badge="Our Departments"
      title="Specialized"
      highlight="Medical Departments."
      description="Explore our specialized medical departments, equipped with experienced specialists, advanced facilities and patient-centered care."
      breadcrumb="Departments"
    />

      {/* =====================================================
          STATS
      ====================================================== */}
      {/* <section className="relative z-10 -mt-8 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="border-b border-slate-100 p-6 text-center sm:border-b-0 sm:border-r last:border-r-0"
            >
              <h3 className="text-3xl font-bold text-[#0A7A78]">
                {number}
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <HospitalStats />

      {/* =====================================================
          SERVICES
      ====================================================== */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
              Specialized healthcare under one roof.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Our multidisciplinary team provides a wide range of medical
              services using modern technology and patient-focused care.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments?.map((department, index) => (
            <DepartmentCard
              key={department.id}
              department={department}
              index={index}
              href={`/services/${department.id}`}
            />
          ))}
        </div>
        </div>
      </section> */}

      {/* <section className="relative overflow-hidden bg-slate-50 py-20"> */}
      <section
  className="
    relative overflow-hidden py-20
    bg-gradient-to-b
    from-[#f0fafa]
    via-white
    to-[#f8fbfc]
  "
>
  {/* Background Decorations */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/5 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#063B5C]/5 blur-3xl" />

  <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-teal-100/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A7A78]"
      >
        Our Services
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl"
      >
        Specialized healthcare
        <span className="text-[#0A7A78]"> under one roof.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 leading-7 text-slate-500"
      >
        Our multidisciplinary team provides a wide range of medical
        services using modern technology and patient-focused care.
      </motion.p>
    </div>

    {/* Department Cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {departments?.map((department, index) => (
        <DepartmentCard
          key={department.id}
          department={department}
          index={index}
          href={`/department/${department.id}`}
        />
      ))}
    </div>
  </div>
</section>

      

      {/* =====================================================
          EMERGENCY
      ====================================================== */}
      {/* <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-sm md:flex-row md:p-10">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-500">
                <Phone className="h-7 w-7" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-red-500">
                  Emergency Services
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#063B5C]">
                  Need immediate medical assistance?
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Our emergency department is available 24 hours a day.
                </p>
              </div>
            </div>

            <a
              href="tel:+919876543210"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 font-bold text-white transition hover:bg-red-600"
            >
              <Phone className="h-5 w-5" />
              Call Emergency
            </a>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          FACILITIES
      ====================================================== */}
      <section className="bg-slate-200 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative h-[430px] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
              alt="Modern hospital facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
              Our Facilities
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
              Modern infrastructure for better care.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We combine advanced medical technology with comfortable,
              patient-friendly facilities to provide a complete healthcare
              experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

                  <span className="text-sm font-semibold text-slate-700">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ====================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
              Why Choose Baderia Metro Prime
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
              Care you can trust.
            </h2>
          </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className={`
                    group relative overflow-visible
                    rounded-2xl border border-slate-100
                    bg-white px-5 pb-5 pt-8
                    shadow-sm
                    transition-all duration-500
                    ${item.hoverBg}
                    hover:border-transparent
                    hover:shadow-xl
                    cursor-pointer
                  `}
                >
                  {/* Floating Icon */}
                  <motion.div
                    className={`
                      absolute -top-6 left-1/2
                      flex h-12 w-12
                      -translate-x-1/2
                      items-center justify-center
                      rounded-xl
                      ${item.bg}
                      ${item.color}
                      shadow-md
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:bg-white
                    `}
                  >
                    <Icon
                      className="
                        h-6 w-6
                        transition-all duration-500
                        group-hover:scale-110
                      "
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="transition-colors duration-500">
                    <h3
                      className="
                        text-base font-black
                        text-[#063B5C]
                        transition-colors duration-500
                        group-hover:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-xs leading-6
                        text-slate-500
                        transition-colors duration-500
                        group-hover:text-white/90
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0A7A78] to-[#063B5C]">
          <div className="px-6 py-14 text-center text-white sm:px-12">
            <HeartPulse className="mx-auto h-10 w-10 text-teal-200" />

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Ready to take care of your health?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Schedule a consultation with one of our experienced specialists
              today.
            </p>

            <Link
              href="/appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#063B5C] transition hover:-translate-y-1"
            >
              <CalendarDays className="h-5 w-5" />
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

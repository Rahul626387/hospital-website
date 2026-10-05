"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  Activity,
  Sparkles,
  Ambulance,
  BadgeCheck,
  Star,
} from "lucide-react";

import PageHero from "../../components/Pagehero";
import ApiService from "../../src/services/Apiservices";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   IMAGE HELPER
========================================================= */

const getImageUrl = (image) => {
  if (!image) return null;

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return `${baseUrl.replace(/\/$/, "")}/${image.replace(/^\//, "")}`;
};

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    icon: Brain,
    number: "01",
    title: "Neurological Diagnosis",
    description:
      "Advanced evaluation and diagnosis for a wide range of neurological conditions.",
  },
  {
    icon: Activity,
    number: "02",
    title: "Advanced Diagnostics",
    description:
      "Modern diagnostic technology supporting accurate and timely clinical decisions.",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Specialist Consultation",
    description:
      "Personalized consultations with experienced specialists focused on your needs.",
  },
  {
    icon: HeartPulse,
    number: "04",
    title: "Long-Term Care",
    description:
      "Continuous care and treatment planning for chronic neurological conditions.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Preventive Care",
    description:
      "Early assessment and preventive strategies to support long-term health.",
  },
  {
    icon: Ambulance,
    number: "06",
    title: "Emergency Support",
    description:
      "Responsive medical support for urgent neurological healthcare requirements.",
  },
];

const treatments = [
  "Stroke evaluation and management",
  "Headache and migraine treatment",
  "Epilepsy and seizure management",
  "Movement disorder management",
  "Spine and nerve disorders",
  "Neuromuscular disorders",
  "Memory and cognitive disorders",
  "Comprehensive neurological rehabilitation",
];

/* =========================================================
   PAGE
========================================================= */

export default function DepartmentDetailPage() {
  const params = useParams();

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const { data, error, isLoading } = useSWR(
    id ? `departments/${id}` : null,
    ApiService.get
  );

  const department = data?.data;

  /* =========================================================
     LOADING
  ========================================================= */

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7fafb]">
        <div className="relative h-[560px] overflow-hidden bg-[#063b5c]">
          <div className="absolute inset-0 animate-pulse bg-white/5" />

          <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
            <div className="w-full max-w-3xl space-y-6">
              <div className="h-5 w-36 animate-pulse rounded-full bg-white/10" />
              <div className="h-16 w-3/4 animate-pulse rounded-2xl bg-white/10" />
              <div className="h-6 w-2/3 animate-pulse rounded-xl bg-white/10" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 animate-pulse rounded-2xl bg-slate-100"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error || !department) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f7fafb] px-6">
        <div className="max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
            <HeartPulse size={34} />
          </div>

          <h1 className="text-3xl font-bold text-[#063b5c]">
            Department Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            We could not load the requested department information.
          </p>

          <Link
            href="/departments"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#063b5c] px-6 py-3 font-semibold text-white transition hover:bg-[#07547f]"
          >
            Back to Departments
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  /* =========================================================
     DATA
  ========================================================= */

  const doctors = Array.isArray(department.doctors)
    ? department.doctors
    : [];

  const emergencyAvailable =
    Number(department.emergency_available) === 1 ||
    department.emergency_available === true;

  const appointmentAvailable =
    Number(department.appointment_available) === 1 ||
    department.appointment_available === true;

  const departmentImage =
    department.image || department.banner_image || null;

  const bannerImage =
    department.banner_image || department.image || null;

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <main className="overflow-hidden bg-white text-[#123044]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        backgroundImage={bannerImage}
        badge="Department"
        badgeIcon={HeartPulse}
        title={department.name}
        highlight="Specialized Care"
        description={department.short_description}
        breadcrumbs={[
          {
            label: "Departments",
            href: "/departments",
          },
          {
            label: department.name,
          },
        ]}
      />

      {/* =====================================================
          QUICK INFORMATION BAR
      ===================================================== */}

      <section className="relative z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto -mt-16 max-w-7xl"
        >
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_25px_70px_rgba(6,59,92,0.12)] md:grid-cols-2 lg:grid-cols-4">

            {/* LOCATION */}
            <InfoItem
              icon={MapPin}
              label="Location"
              value={department.location || "Main Hospital"}
            />

            {/* TIMING */}
            <InfoItem
              icon={Clock3}
              label="Department Timing"
              value={department.timing || "09:00 AM - 04:00 PM"}
            />

            {/* EMERGENCY */}
            <InfoItem
              icon={Ambulance}
              label="Emergency"
              value={
                emergencyAvailable
                  ? "Available 24/7"
                  : "Not Available"
              }
              active={emergencyAvailable}
            />

            {/* PHONE */}
            <InfoItem
              icon={Phone}
              label="Contact"
              value={department.phone || "Contact Hospital"}
              href={
                department.phone
                  ? `tel:${department.phone}`
                  : undefined
              }
            />
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          ABOUT DEPARTMENT
      ===================================================== */}

      <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#078f8f]/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e9f5f5] p-3">
              <div className="relative h-[480px] overflow-hidden rounded-[2rem]">
                {departmentImage ? (
                  <Image
                    src={getImageUrl(departmentImage)}
                    alt={department.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#e8f6f5]">
                    <HeartPulse
                      size={80}
                      className="text-[#078f8f]"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#063b5c]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="absolute -bottom-8 right-5 w-[220px] rounded-3xl border border-white/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(6,59,92,0.16)] backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e4f7f5] text-[#078f8f]">
                  <BadgeCheck size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#063b5c]">
                    Trusted Care
                  </p>
                  <p className="text-xs text-slate-500">
                    Patient focused
                  </p>
                </div>
              </div>

              <div className="flex gap-1 text-[#078f8f]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel
                icon={Sparkles}
                text="About The Department"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#063b5c] sm:text-5xl"
            >
              Comprehensive care,
              <span className="block text-[#078f8f]">
                centered around you.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              {department.description ||
                department.short_description}
            </motion.p>

            {/* HIGHLIGHTS */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {[
                "Experienced specialists",
                "Advanced diagnostic technology",
                "Personalized treatment plans",
                "Patient-focused approach",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6f7f5] text-[#078f8f]">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-semibold text-[#123044]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {appointmentAvailable && (
                <Link
                  href="/appointments"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#063b5c] px-7 py-4 font-bold text-white shadow-lg shadow-[#063b5c]/15 transition hover:-translate-y-1 hover:bg-[#07547f]"
                >
                  <CalendarDays size={19} />

                  Book Appointment

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              )}

              <Link
                href="/doctors"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-[#063b5c] transition hover:border-[#078f8f] hover:text-[#078f8f]"
              >
                <Users size={19} />

                Meet Our Doctors
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

     {/* <section className="bg-[#f5fafa] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    <StatCard
      icon={Users}
      number={doctors.length}
      suffix=""
      label="Specialists"
      index={0}
    />

    <StatCard
      icon={Ambulance}
      number={emergencyAvailable ? "24/7" : "—"}
      suffix=""
      label="Emergency Support"
      index={1}
    />

    <StatCard
      icon={CalendarDays}
      number={appointmentAvailable ? "Open" : "—"}
      suffix=""
      label="Appointments"
      index={2}
    />

    <StatCard
      icon={Award}
      number={department.status === "active" ? "Active" : "—"}
      suffix=""
      label="Department Status"
      index={3}
    />
  </motion.div>
</section> */}

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-blue-100">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel
              icon={Activity}
              text="Our Services"
              centered
            />

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#063b5c] sm:text-5xl">
              Care designed around
              <span className="text-[#078f8f]">
                {" "}your needs.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Our department combines clinical expertise, advanced
              technology, and personalized care to support every
              stage of your healthcare journey.
            </p>
          </motion.div>

          {/* <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                {...service}
              />
            ))}
          </motion.div> */}
          <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 cursor-pointer"
        >
        {services.map((service, index) => (
            <ServiceCard
            key={service.number || index}
            {...service}
            index={index}
            />
        ))}
        </motion.div>
        </div>
      </section>

      {/* =====================================================
          TREATMENTS
      ===================================================== */}

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#063b5c]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden px-7 py-14 sm:px-12 lg:px-14 lg:py-16"
            >
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#078f8f]/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#7de3da]">
                  <Brain size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7de3da]">
                  Expertise
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Treatments &
                  <span className="block text-[#7de3da]">
                    expertise
                  </span>
                </h2>

                <p className="mt-6 max-w-md leading-7 text-white/65">
                  Our specialists provide comprehensive evaluation,
                  treatment, and ongoing care across a broad range
                  of medical conditions.
                </p>

                <Link
                  href="/appointments"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-bold text-[#063b5c] transition hover:-translate-y-1"
                >
                  Talk to a Specialist
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-x-8 gap-y-1 bg-white/5 p-7 sm:grid-cols-2 sm:p-10 lg:p-14"
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  variants={fadeUp}
                  key={treatment}
                  className="group flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <span className="text-sm font-bold text-[#7de3da]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-semibold leading-6 text-white/90">
                    {treatment}
                  </span>

                  <ChevronRight
                    size={17}
                    className="text-white/30 transition group-hover:translate-x-1 group-hover:text-[#7de3da]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCTORS
      ===================================================== */}

      <section className="relative bg-[#f6faf9] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#078f8f]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <SectionLabel
                icon={Stethoscope}
                text="Medical Experts"
              />

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#063b5c] sm:text-5xl">
                Meet the specialists
                <span className="block text-[#078f8f]">
                  behind your care.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Experienced professionals dedicated to delivering
                thoughtful, evidence-based and patient-focused care.
              </p>
            </div>

            {doctors.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {doctors.slice(0, 4).map((doctor) => (
                    <div
                      key={doctor.id}
                      className="relative h-12 w-12 overflow-hidden rounded-full border-4 border-[#f6faf9] bg-[#dff4f2]"
                    >
                      {doctor.image_url ? (
                        <Image
                          src={getImageUrl(doctor.image_url)}
                          alt={doctor.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#078f8f]">
                          <Stethoscope size={20} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xl font-bold text-[#063b5c]">
                    {doctors.length}
                  </p>

                  <p className="text-sm text-slate-500">
                    Medical Specialists
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* DOCTOR LIST */}
          {doctors.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                />
              ))}
            </motion.div>
          ) : (
            <div className="mt-14 rounded-[2rem] border border-dashed border-slate-200 bg-white p-12 text-center">
              <Users
                size={42}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-5 text-xl font-bold text-[#063b5c]">
                Specialists information coming soon
              </h3>

              <p className="mt-2 text-slate-500">
                Our medical specialist profiles will be available
                here shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

          {/* CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel
                icon={ShieldCheck}
                text="Why Choose Us"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold leading-tight text-[#063b5c] sm:text-5xl"
            >
              Healthcare built on
              <span className="block text-[#078f8f]">
                trust and expertise.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-500"
            >
              From diagnosis to treatment and follow-up care,
              our approach focuses on clinical excellence and
              a comfortable patient experience.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-10 space-y-5"
            >
              <WhyItem
                icon={Award}
                title="Experienced Specialists"
                description="Access experienced medical professionals focused on specialized care."
              />

              <WhyItem
                icon={Activity}
                title="Advanced Technology"
                description="Modern diagnostic and treatment technologies support better clinical decisions."
              />

              <WhyItem
                icon={HeartPulse}
                title="Patient-Centered Care"
                description="Treatment plans are designed around individual patient needs and wellbeing."
              />
            </motion.div>
          </motion.div>

          {/* VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.5rem] bg-[#063b5c] p-8 sm:p-10">

              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/50">
                    Department
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {department.name}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#7de3da]">
                  <HeartPulse size={24} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <MiniStat
                  value={doctors.length}
                  label="Specialists"
                />

                <MiniStat
                  value={emergencyAvailable ? "24/7" : "—"}
                  label="Emergency"
                />

                <MiniStat
                  value={appointmentAvailable ? "Yes" : "No"}
                  label="Appointments"
                />

                <MiniStat
                  value="Care"
                  label="Patient First"
                />
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#078f8f]/20 text-[#7de3da]">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Quality-focused healthcare
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      Personalized care at every step
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DECORATION */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#078f8f]/20 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#063b5c]"
        >
          {/* DECORATIONS */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#078f8f]/20 blur-3xl" />

          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#078f8f]/10 blur-3xl" />

          <div className="relative grid items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#a8eee8]">
                <HeartPulse size={16} />
                Personalized Healthcare
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Take the next step toward
                <span className="text-[#7de3da]">
                  {" "}better care.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Connect with our specialists and get personalized
                guidance from a team focused on your healthcare needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-nowrap">
              {appointmentAvailable && (
                <Link
                  href="/appointments"
                  className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-7 py-4 font-bold text-[#063b5c] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CalendarDays size={19} />

                  Book Appointment

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              )}

              {department.phone && (
                <a
                  href={`tel:${department.phone}`}
                  className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={18} />

                  Call Us
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon: Icon,
  label,
  value,
  active = false,
  href,
}) {
  const content = (
    <div className="group flex min-h-[110px] items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-[#f8fcfc] md:border-r md:last:border-r-0 lg:border-b-0">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
          active
            ? "bg-[#e3f8f4] text-[#078f8f]"
            : "bg-[#eef7f7] text-[#078f8f]"
        } group-hover:scale-105`}
      >
        <Icon size={22} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>

        <p
          className={`mt-1 truncate text-sm font-bold ${
            active ? "text-[#078f8f]" : "text-[#063b5c]"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  icon: Icon,
  text,
  centered = false,
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e3f7f4] text-[#078f8f]">
        <Icon size={16} />
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#078f8f]">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

// function StatCard({
//   icon: Icon,
//   number,
//   suffix,
//   label,
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(6,59,92,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,59,92,0.09)]"
//     >
//       <div className="flex items-start justify-between">
//         <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6f7f5] text-[#078f8f] transition group-hover:scale-105">
//           <Icon size={22} />
//         </div>

//         <ArrowRight
//           size={18}
//           className="text-slate-200 transition group-hover:translate-x-1 group-hover:text-[#078f8f]"
//         />
//       </div>

//       <div className="mt-6">
//         <p className="text-3xl font-bold text-[#063b5c]">
//           {number}
//           {suffix}
//         </p>

//         <p className="mt-1 text-sm text-slate-500">
//           {label}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

function StatCard({
  icon: Icon,
  number,
  suffix,
  label,
  index = 0,
}) {
  const cardStyles = [
    // 1. Teal
    {
      bg: "bg-[#EAF8F7]",
      border: "border-[#CDEDEA]",
      iconBg: "bg-[#CBEDE9]",
      iconColor: "text-[#078F8F]",
      hoverBg: "group-hover:bg-[#078F8F]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#078F8F]/10",
      line: "bg-[#078F8F]",
    },

    // 2. Blue
    {
      bg: "bg-[#EDF4FF]",
      border: "border-[#D5E5FA]",
      iconBg: "bg-[#D9E9FC]",
      iconColor: "text-[#3478C8]",
      hoverBg: "group-hover:bg-[#3478C8]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#3478C8]/10",
      line: "bg-[#3478C8]",
    },

    // 3. Orange
    {
      bg: "bg-[#FFF5E8]",
      border: "border-[#F8E2C1]",
      iconBg: "bg-[#FFE8C4]",
      iconColor: "text-[#D9822B]",
      hoverBg: "group-hover:bg-[#D9822B]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#D9822B]/10",
      line: "bg-[#D9822B]",
    },

    // 4. Purple
    {
      bg: "bg-[#F5F1FC]",
      border: "border-[#E5DDF4]",
      iconBg: "bg-[#E9DFF7]",
      iconColor: "text-[#7955B5]",
      hoverBg: "group-hover:bg-[#7955B5]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#7955B5]/10",
      line: "bg-[#7955B5]",
    },

    // 5. Rose
    {
      bg: "bg-[#FFF1F4]",
      border: "border-[#F6DCE2]",
      iconBg: "bg-[#F9DEE5]",
      iconColor: "text-[#D35D75]",
      hoverBg: "group-hover:bg-[#D35D75]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#D35D75]/10",
      line: "bg-[#D35D75]",
    },

    // 6. Green
    {
      bg: "bg-[#EFF9F1]",
      border: "border-[#D7ECD9]",
      iconBg: "bg-[#DCEFE0]",
      iconColor: "text-[#3E8E5B]",
      hoverBg: "group-hover:bg-[#3E8E5B]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#3E8E5B]/10",
      line: "bg-[#3E8E5B]",
    },
  ];

  const style = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      variants={fadeUp}
      className={`
        group relative isolate overflow-hidden
        rounded-xl
        border ${style.border}
        ${style.bg}
        px-5 py-4
        shadow-md shadow-slate-900/5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-slate-900/10
      `}
    >
      {/* TOP ACCENT */}
      <div
        className={`
          absolute left-0 top-0
          h-[3px] w-0
          ${style.line}
          transition-all duration-500
          group-hover:w-full
        `}
      />

      {/* WATERMARK */}
      <Icon
        className={`
          pointer-events-none
          absolute -bottom-5 -right-5
          h-24 w-24
          rotate-[-10deg]
          ${style.watermark}
          transition-all duration-500
          group-hover:scale-110
          group-hover:rotate-0
        `}
        strokeWidth={1.5}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center gap-4">
        {/* ICON */}
        <div
          className={`
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl
            ${style.iconBg}
            ${style.iconColor}
            transition-all duration-300
            ${style.hoverBg}
            ${style.hoverText}
            group-hover:scale-105
          `}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* TEXT */}
        <div className="min-w-0">
          <div className="flex items-baseline">
            <span className="text-2xl font-extrabold tracking-tight text-[#063B5C]">
              {number}
            </span>

            {suffix && (
              <span className="ml-0.5 text-base font-bold text-[#063B5C]">
                {suffix}
              </span>
            )}
          </div>

          <p className="mt-0.5 truncate text-xs font-medium text-slate-500">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

// function ServiceCard({
//   icon: Icon,
//   number,
//   title,
//   description,
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,92,0.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(6,59,92,0.1)]"
//     >
//       {/* NUMBER */}
//       <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition group-hover:text-[#e8f7f5]">
//         {number}
//       </div>

//       {/* ICON */}
//       <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f7f5] text-[#078f8f] transition duration-300 group-hover:bg-[#078f8f] group-hover:text-white">
//         <Icon size={25} />
//       </div>

//       <h3 className="relative mt-7 text-xl font-bold text-[#063b5c]">
//         {title}
//       </h3>

//       <p className="relative mt-3 text-sm leading-7 text-slate-500">
//         {description}
//       </p>

//       <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#078f8f]">
//         Learn more
//         <ArrowRight
//           size={16}
//           className="transition group-hover:translate-x-1"
//         />
//       </div>
//     </motion.div>
//   );
// }


function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  index = 0,
}) {
  const cardStyles = [
    {
      bg: "bg-[#EAF8F7]",
      border: "border-[#D5EFED]",
      iconBg: "bg-[#CFEDEA]",
      iconColor: "text-[#078F8F]",
      hoverBg: "group-hover:bg-[#078F8F]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#078F8F]/10",
      number: "text-[#078F8F]/10",
      line: "bg-[#078F8F]",
    },
    {
      bg: "bg-[#EEF5FB]",
      border: "border-[#D9E8F4]",
      iconBg: "bg-[#DCECF8]",
      iconColor: "text-[#3478C8]",
      hoverBg: "group-hover:bg-[#3478C8]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#3478C8]/10",
      number: "text-[#3478C8]/10",
      line: "bg-[#3478C8]",
    },
    {
      bg: "bg-[#FFF6E8]",
      border: "border-[#F5E5C9]",
      iconBg: "bg-[#FFEBCB]",
      iconColor: "text-[#D9822B]",
      hoverBg: "group-hover:bg-[#D9822B]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#D9822B]/10",
      number: "text-[#D9822B]/10",
      line: "bg-[#D9822B]",
    },
    {
      bg: "bg-[#F5F1FC]",
      border: "border-[#E5DDF3]",
      iconBg: "bg-[#E9E0F7]",
      iconColor: "text-[#7955B5]",
      hoverBg: "group-hover:bg-[#7955B5]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#7955B5]/10",
      number: "text-[#7955B5]/10",
      line: "bg-[#7955B5]",
    },
    {
      bg: "bg-[#FFF1F4]",
      border: "border-[#F4DDE3]",
      iconBg: "bg-[#F9E0E6]",
      iconColor: "text-[#D35D75]",
      hoverBg: "group-hover:bg-[#D35D75]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#D35D75]/10",
      number: "text-[#D35D75]/10",
      line: "bg-[#D35D75]",
    },
    {
      bg: "bg-[#EFF9F1]",
      border: "border-[#D9ECDD]",
      iconBg: "bg-[#DDEFE1]",
      iconColor: "text-[#3E8E5B]",
      hoverBg: "group-hover:bg-[#3E8E5B]",
      hoverText: "group-hover:text-white",
      watermark: "text-[#3E8E5B]/10",
      number: "text-[#3E8E5B]/10",
      line: "bg-[#3E8E5B]",
    },
  ];

  const style = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      variants={fadeUp}
      className={`
        group relative isolate overflow-hidden
        rounded-2xl
        border ${style.border}
        ${style.bg}
        px-5 py-5
        shadow-md shadow-slate-900/5
        transition-all duration-400
        hover:-translate-y-1.5
        hover:shadow-xl hover:shadow-slate-900/10
      `}
    >
      {/* TOP ACCENT LINE */}
      <div
        className={`
          absolute left-0 top-0
          h-[3px] w-0
          ${style.line}
          transition-all duration-500
          group-hover:w-full
        `}
      />

      {/* NUMBER */}
      <div
        className={`
          pointer-events-none
          absolute right-4 top-2
          text-4xl font-black
          ${style.number}
          transition-all duration-500
          group-hover:scale-110
        `}
      >
        {number}
      </div>

      {/* WATERMARK ICON */}
      <Icon
        className={`
          pointer-events-none
          absolute -bottom-5 -right-5
          h-24 w-24
          rotate-[-10deg]
          ${style.watermark}
          transition-all duration-500
          group-hover:scale-110
          group-hover:rotate-0
        `}
        strokeWidth={1.5}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON */}
        <div
          className={`
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            ${style.iconBg}
            ${style.iconColor}
            transition-all duration-300
            ${style.hoverBg}
            ${style.hoverText}
            group-hover:scale-105
          `}
        >
          <Icon size={21} strokeWidth={2} />
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-lg font-bold text-[#063B5C]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        {/* LEARN MORE */}
        {/* <div
          className={`
            mt-4
            flex items-center gap-1.5
            text-sm font-bold
            ${style.iconColor}
          `}
        >
          <span>Learn more</span>

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div> */}
      </div>
    </motion.div>
  );
}

/* =========================================================
   DOCTOR CARD
========================================================= */

function DoctorCard({ doctor }) {
  const doctorImage = getImageUrl(doctor.image_url);

  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_12px_40px_rgba(6,59,92,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(6,59,92,0.12)]"
    >
      {/* IMAGE */}
      <div className="relative h-[390px] overflow-hidden bg-[#e8f5f4]">

        {doctorImage ? (
          <Image
            // src={'/assets/images/doctor.png'}
            src={doctorImage}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#078f8f] shadow-lg">
              <Stethoscope size={42} />
            </div>
          </div>
        )}

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#063b5c] via-[#063b5c]/10 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#6ff1d8]" />
            Available
          </div>

          {doctor.experience_years && (
            <div className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#063b5c] shadow-lg">
              {doctor.experience_years}+ Years
            </div>
          )}
        </div>

        {/* DOCTOR OVER IMAGE */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8ee9df]">
            Medical Specialist
          </p>

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {doctor.name}
          </h3>

          {doctor.qualification && (
            <p className="mt-2 text-sm text-white/70">
              {doctor.qualification}
            </p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      {/* <div className="p-6">

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Experience
            </p>

            <p className="mt-1 font-bold text-[#063b5c]">
              {doctor.experience_years
                ? `${doctor.experience_years} Years`
                : "Experienced Specialist"}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f7f5] text-[#078f8f] transition group-hover:rotate-[-45deg]">
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="my-5 h-px bg-slate-100" />

        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/doctors/${doctor.id}`}
            className="text-sm font-bold text-[#063b5c] transition hover:text-[#078f8f]"
          >
            View Profile
          </Link>

          <Link
            href={`/appointments?doctor=${doctor.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#063b5c] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#078f8f]"
          >
            <CalendarDays size={14} />
            Appointment
          </Link>
        </div>
      </div> */}
    </motion.article>
  );
}

/* =========================================================
   WHY ITEM
========================================================= */

function WhyItem({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex gap-4"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e5f7f4] text-[#078f8f]">
        <Icon size={21} />
      </div>

      <div>
        <h3 className="font-bold text-[#063b5c]">
          {title}
        </h3>

        <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <p className="text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-white/45">
        {label}
      </p>
    </div>
  );
}
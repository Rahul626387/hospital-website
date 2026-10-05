// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Award,
//   BriefcaseMedical,
//   CalendarCheck,
//   CheckCircle2,
//   GraduationCap,
//   HeartPulse,
//   Mail,
//   MapPin,
//   Phone,
//   Stethoscope,
// } from "lucide-react";
// import { useParams } from "next/navigation";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from "swr";

// export default function DoctorProfilePage() {
// //   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);

//     const params = useParams();
   
//      const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
   
//      const { data, error, isLoading } = useSWR(
//        id ? `departments/${id}` : null,
//        ApiService.get
//      );
   
//      const doctor = data?.data || []
//      console.log(doctor)

//   if (loading) {
//     return (
//       <main className="min-h-screen bg-slate-50">
//         <div className="mx-auto max-w-7xl px-6 py-20">
//           <div className="grid animate-pulse gap-10 lg:grid-cols-2">
//             <div className="h-[550px] rounded-[2rem] bg-slate-200" />

//             <div className="space-y-5 pt-10">
//               <div className="h-5 w-32 rounded bg-slate-200" />
//               <div className="h-12 w-3/4 rounded bg-slate-200" />
//               <div className="h-6 w-1/2 rounded bg-slate-200" />
//               <div className="h-24 rounded bg-slate-200" />
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   if (!doctor) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
//         <div className="text-center">
//           <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
//             <Stethoscope className="h-7 w-7 text-red-500" />
//           </div>

//           <h1 className="text-2xl font-bold text-slate-900">
//             Doctor Not Found
//           </h1>

//           <p className="mt-2 text-slate-500">
//             The requested doctor profile could not be found.
//           </p>

//           <Link
//             href="/doctors"
//             className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#063B5C] px-6 py-3 font-semibold text-white transition hover:bg-[#052f49]"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Doctors
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const image = doctor.image || "/assets/images/default-doctor.png";

//   return (
//     <main className="min-h-screen bg-[#f7fafc]">

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-[#063B5C]">
//         {/* Background decoration */}
//         <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

//         <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">

//           {/* Breadcrumb */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-10"
//           >
//             <Link
//               href="/doctors"
//               className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               Back to Doctors
//             </Link>
//           </motion.div>

//           {/* Profile */}
//           <div className="grid items-center gap-12 pb-16 lg:grid-cols-[420px_1fr] lg:gap-16">

//             {/* Doctor Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

//               <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
//                 <div className="relative aspect-[4/5]">
//                   <Image
//                     src={image}
//                     alt={doctor.name || "Doctor"}
//                     fill
//                     priority
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Experience Badge */}
//                 {doctor.experience && (
//                   <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#063B5C]">
//                       <Award className="h-5 w-5 text-white" />
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-slate-500">
//                         Experience
//                       </p>
//                       <p className="font-bold text-[#063B5C]">
//                         {doctor.experience}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Doctor Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-white"
//             >
//               {/* Badge */}
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
//                 <HeartPulse className="h-4 w-4 text-cyan-300" />
//                 Medical Specialist
//               </div>

//               {/* Name */}
//               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//                 {doctor.name}
//               </h1>

//               {/* Specialization */}
//               <div className="mt-5 flex items-center gap-3 text-lg text-cyan-200">
//                 <Stethoscope className="h-5 w-5" />

//                 <span>
//                   {doctor.specialization || "Medical Specialist"}
//                 </span>
//               </div>

//               {/* Description */}
//               <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
//                 {doctor.bio ||
//                   `Dr. ${doctor.name} is an experienced medical professional
//                   dedicated to providing compassionate, reliable and
//                   patient-centered healthcare.`}
//               </p>

//               {/* Qualifications */}
//               <div className="mt-8 flex flex-wrap gap-3">
//                 {doctor.qualification && (
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
//                     <GraduationCap className="h-5 w-5 text-cyan-300" />

//                     <div>
//                       <p className="text-xs text-white/50">
//                         Qualification
//                       </p>

//                       <p className="font-semibold">
//                         {doctor.qualification}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {doctor.designation && (
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
//                     <BriefcaseMedical className="h-5 w-5 text-cyan-300" />

//                     <div>
//                       <p className="text-xs text-white/50">
//                         Designation
//                       </p>

//                       <p className="font-semibold">
//                         {doctor.designation}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Appointment Button */}
//               <div className="mt-9 flex flex-wrap gap-4">
//                 <Link
//                   href={`/appointment?doctor_id=${doctor.id}`}
//                   className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#063B5C] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
//                 >
//                   <CalendarCheck className="h-5 w-5" />

//                   Book Appointment

//                   <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
//                 >
//                   Contact Hospital
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= DETAILS ================= */}
//       <section className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-8 lg:grid-cols-3">

//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_15px_50px_rgba(6,59,92,0.06)] sm:p-10">

//                 <div className="mb-8">
//                   <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
//                     About Doctor
//                   </p>

//                   <h2 className="mt-2 text-3xl font-bold text-[#063B5C]">
//                     Professional Profile
//                   </h2>
//                 </div>

//                 <p className="leading-8 text-slate-600">
//                   {doctor.bio ||
//                     `${doctor.name} is committed to delivering high-quality
//                     healthcare with a patient-first approach. With extensive
//                     clinical experience, the doctor focuses on accurate
//                     diagnosis, personalized treatment and compassionate care.`}
//                 </p>

//                 {/* Highlights */}
//                 <div className="mt-10 grid gap-4 sm:grid-cols-2">
//                   {[
//                     "Patient-centered healthcare",
//                     "Experienced medical professional",
//                     "Personalized treatment plans",
//                     "Modern clinical approach",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
//                     >
//                       <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

//                       <span className="text-sm font-medium text-slate-700">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Contact Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-1"
//             >
//               <div className="sticky top-8 overflow-hidden rounded-[2rem] bg-[#063B5C] p-7 text-white shadow-xl">

//                 <div className="mb-7">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//                     <CalendarCheck className="h-6 w-6 text-cyan-300" />
//                   </div>

//                   <h3 className="text-2xl font-bold">
//                     Book an Appointment
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-white/60">
//                     Schedule a consultation with our specialist.
//                   </p>
//                 </div>

//                 <Link
//                   href={`/appointment?doctor_id=${doctor.id}`}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-bold text-[#063B5C] transition hover:bg-slate-100"
//                 >
//                   <CalendarCheck className="h-5 w-5" />
//                   Book Appointment
//                 </Link>

//                 <div className="my-7 h-px bg-white/10" />

//                 {/* Contact Details */}
//                 <div className="space-y-5">

//                   {doctor.phone && (
//                     <a
//                       href={`tel:${doctor.phone}`}
//                       className="flex items-center gap-4"
//                     >
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
//                         <Phone className="h-4 w-4 text-cyan-300" />
//                       </div>

//                       <div>
//                         <p className="text-xs text-white/40">
//                           Phone
//                         </p>

//                         <p className="text-sm font-medium">
//                           {doctor.phone}
//                         </p>
//                       </div>
//                     </a>
//                   )}

//                   {doctor.email && (
//                     <a
//                       href={`mailto:${doctor.email}`}
//                       className="flex items-center gap-4"
//                     >
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
//                         <Mail className="h-4 w-4 text-cyan-300" />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-xs text-white/40">
//                           Email
//                         </p>

//                         <p className="truncate text-sm font-medium">
//                           {doctor.email}
//                         </p>
//                       </div>
//                     </a>
//                   )}

//                   <div className="flex items-center gap-4">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
//                       <MapPin className="h-4 w-4 text-cyan-300" />
//                     </div>

//                     <div>
//                       <p className="text-xs text-white/40">
//                         Location
//                       </p>

//                       <p className="text-sm font-medium">
//                         Hospital Campus
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= QUICK STATS ================= */}
//       <section className="border-t border-slate-100 bg-white px-6 py-14 sm:px-8 lg:px-10">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-5 sm:grid-cols-3">

//             <StatCard
//               icon={<Stethoscope />}
//               label="Specialization"
//               value={doctor.specialization || "Specialist"}
//             />

//             <StatCard
//               icon={<GraduationCap />}
//               label="Qualification"
//               value={doctor.qualification || "Medical Graduate"}
//             />

//             <StatCard
//               icon={<Award />}
//               label="Experience"
//               value={doctor.experience || "Experienced"}
//             />

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }


// /* ================= STAT CARD ================= */

// function StatCard({ icon, label, value }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition"
//     >
//       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063B5C] text-white">
//         {icon}
//       </div>

//       <div className="min-w-0">
//         <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
//           {label}
//         </p>

//         <p className="mt-1 truncate font-bold text-[#063B5C]">
//           {value}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import useSWR from "swr";

import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Stethoscope,
  HeartPulse,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Mail,
} from "lucide-react";

import ApiService from "../../src/services/Apiservices";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const useVariants = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : -40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduce ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : 40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduce ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
      },
    },
  };

  return {
    fadeUp,
    fadeLeft,
    fadeRight,
    stagger,
  };
};

/* =========================================================
   PAGE
========================================================= */

export default function DoctorPage() {
  const params = useParams();

  const doctorId = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  /*
   * =======================================================
   * LIVE API
   * =======================================================
   */

  const {
    data,
    error,
    isLoading,
  } = useSWR(
    doctorId ? `doctors/${doctorId}` : null,
    ApiService.get
  );

  /*
   * API:
   *
   * {
   *   success: true,
   *   data: {...}
   * }
   */

  const doctorData = data?.data || null;

  const {
    fadeUp,
    fadeLeft,
    fadeRight,
    stagger,
  } = useVariants();

  /*
   * =======================================================
   * LOADER
   * =======================================================
   */

  if (isLoading) {
    return <DoctorProfileLoader />;
  }

  /*
   * =======================================================
   * ERROR / NOT FOUND
   * =======================================================
   */

  if (error || !doctorData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f9fb] px-6">

        <div className="text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <Stethoscope className="h-7 w-7 text-red-500" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Doctor Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The requested doctor profile could not be found.
          </p>

          <Link
            href="/doctors"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#063B5C] px-6 py-3 font-semibold text-white transition hover:bg-[#052f49]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Doctors
          </Link>

        </div>

      </main>
    );
  }

  /*
   * =======================================================
   * API FIELD MAPPING
   * =======================================================
   */

  const doctor = {
    id: doctorData.id,

    name:
      doctorData.name ||
      "Doctor",

    qualification:
      doctorData.qualification ||
      "Medical Professional",

    specialization:
      doctorData.web_specilization ||
      "Medical Specialist",

    experience:
      doctorData.web_experience ||
      `${doctorData.experience_years || 0}+ Years`,

    location:
      doctorData.location ||
      "Baderia MetroPrime Hospital",

    image:
      doctorData.image_url ||
      "/assets/images/default-doctor.png",

    description:
      doctorData.web_heading ||
      "Experienced medical professional providing quality patient-centered healthcare.",

    about:
      doctorData.web_bio ||
      "Dedicated to providing compassionate and patient-focused healthcare.",

    education:
      doctorData.web_certificat
        ? doctorData.web_certificat
            .split(",")
            .map((item) => item.trim())
        : [
            doctorData.qualification ||
              "Medical Qualification",
          ],

    specializations:
      doctorData.web_specilization
        ? doctorData.web_specilization
            .split(",")
            .map((item) => item.trim())
        : [],

    awards:
      doctorData.web_awards ||
      "Excellence in Patient Care",

    phone:
      doctorData.contact_no ||
      "",

    email:
      doctorData.email ||
      "",

    available:
      Number(doctorData.available) === 1,

    status:
      Number(doctorData.status) === 1,

    stats: [
      {
        value: `${doctorData.experience_years || 0}+`,
        label: "Years Experience",
      },
      {
        value: "10K+",
        label: "Patients Treated",
      },
      {
        value: "24/7",
        label: "Hospital Support",
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f9fb] pb-24 lg:pb-0">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063B5C]">

        {/* Background glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#0A7A78]/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

          {/* Breadcrumb */}

          <motion.nav
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-sm text-white/70"
          >

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/doctors"
              className="transition hover:text-white"
            >
              Doctors
            </Link>

            <span>/</span>

            <span className="text-white">
              {doctor.name}
            </span>

          </motion.nav>

          <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">

            {/* =================================================
                IMAGE
            ================================================== */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              className="relative"
            >

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-3 rounded-[2rem] bg-[#4DD4C6]/20 blur-2xl"
              />

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-sm"
              >

                <div className="relative overflow-hidden rounded-[1.6rem]">

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={600}
                    height={800}
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="h-[420px] w-full object-cover object-top"
                  />

                </div>

              </motion.div>

              {/* Availability */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#063B5C] shadow-xl"
              >

                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${
                    doctor.available
                      ? "bg-emerald-500"
                      : "bg-red-500"
                  }`}
                />

                {doctor.available
                  ? "Available for Consultation"
                  : "Currently Unavailable"}

              </motion.div>

            </motion.div>

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-white"
            >

              {/* Badge */}

              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-[#0A7A78]/20 px-4 py-2 text-sm font-medium text-[#8ff0e6]"
              >

                <HeartPulse className="h-4 w-4" />

                Medical Specialist

              </motion.div>

              {/* Name */}

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {doctor.name}
              </motion.h1>

              {/* Heading */}

              <motion.p
                variants={fadeUp}
                className="mt-4 text-xl font-medium text-[#70ddd2]"
              >
                {doctor.description}
              </motion.p>

              {/* Badges */}

              <motion.div
                variants={fadeUp}
                className="mt-4 flex flex-wrap gap-2"
              >

                {doctor.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}

                {doctor.available && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30">
                    <Star className="h-3.5 w-3.5 fill-amber-300" />
                    Available
                  </span>
                )}

              </motion.div>

              {/* Specialization */}

              <motion.div
                variants={fadeUp}
                className="mt-5 flex items-start gap-3 text-base text-white/80 sm:text-lg"
              >

                <Stethoscope className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />

                <span>
                  {doctor.specialization}
                </span>

              </motion.div>

              {/* Bio */}

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
              >
                {doctor.about}
              </motion.p>

              {/* Stats */}

              <motion.div
                variants={stagger}
                className="mt-8 grid max-w-2xl grid-cols-3 gap-3"
              >

                {doctor.stats.map(
                  ({ value, label }) => (
                    <motion.div
                      key={label}
                      variants={fadeUp}
                      whileHover={{
                        y: -5,
                        backgroundColor:
                          "rgba(255,255,255,0.15)",
                      }}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                    >

                      <p className="text-2xl font-bold">
                        {value}
                      </p>

                      <p className="mt-1 text-xs text-white/70 sm:text-sm">
                        {label}
                      </p>

                    </motion.div>
                  )
                )}

              </motion.div>

              {/* Buttons */}

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >

                <Link
                  href={`/appointment?doctor_id=${doctor.id}`}
                  className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#0c8e8b]"
                >

                  <CalendarDays className="h-5 w-5" />

                  Book Appointment

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                </Link>

                {doctor.phone && (
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >

                    <Phone className="h-5 w-5" />

                    Contact Hospital

                  </a>
                )}

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

            {/* =================================================
                LEFT
            ================================================== */}

            <div className="space-y-8">

              {/* Professional Details */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]">
                    <Stethoscope className="h-6 w-6" />
                  </div>

                  <div>

                    <p className="text-sm font-medium text-[#0A7A78]">
                      Professional Information
                    </p>

                    <h2 className="text-2xl font-bold text-[#063B5C]">
                      Doctor Details
                    </h2>

                  </div>

                </div>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                  className="mt-8 grid gap-4 sm:grid-cols-2"
                >

                  {[
                    {
                      icon: GraduationCap,
                      title: "Qualification",
                      value: doctor.qualification,
                    },
                    {
                      icon: Award,
                      title: "Experience",
                      value: doctor.experience,
                    },
                    {
                      icon: Stethoscope,
                      title: "Hospital",
                      value: doctor.location,
                    },
                    {
                      icon: Clock3,
                      title: "Availability",
                      value: doctor.available
                        ? "Available for Consultation"
                        : "Currently Unavailable",
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        whileHover={{
                          y: -5,
                          boxShadow:
                            "0 15px 35px rgba(6,59,92,0.08)",
                        }}
                        className="rounded-2xl border border-slate-200 p-5 transition"
                      >

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>

                            <p className="text-sm text-slate-500">
                              {item.title}
                            </p>

                            <p className="mt-1 font-semibold text-slate-800">
                              {item.value}
                            </p>

                          </div>

                        </div>

                      </motion.div>
                    );

                  })}

                </motion.div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">

                  <MapPin className="h-5 w-5 shrink-0 text-[#0A7A78]" />

                  {doctor.location}

                </div>

              </motion.div>

              {/* About */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A7A78]/10 text-[#0A7A78]">
                    <HeartPulse className="h-6 w-6" />
                  </div>

                  <div>

                    <p className="text-sm font-medium text-[#0A7A78]">
                      Professional Profile
                    </p>

                    <h2 className="text-2xl font-bold text-[#063B5C]">
                      About Doctor
                    </h2>

                  </div>

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {doctor.about}
                </p>

              </motion.div>

              {/* Education / Certification */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <div>

                    <p className="text-sm font-medium text-[#0A7A78]">
                      Academic Background
                    </p>

                    <h2 className="text-2xl font-bold text-[#063B5C]">
                      Education & Certification
                    </h2>

                  </div>

                </div>

                <div className="relative mt-8 space-y-5">

                  <div className="absolute left-5 top-3 h-[calc(100%-25px)] w-px bg-slate-200" />

                  {doctor.education.map(
                    (item, index) => (

                      <motion.div
                        key={`${item}-${index}`}
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.15,
                          duration: 0.5,
                        }}
                        className="relative flex items-center gap-5"
                      >

                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#063B5C] text-sm font-bold text-white ring-8 ring-white">
                          {index + 1}
                        </div>

                        <div className="flex-1 rounded-2xl border border-slate-200 p-4 transition hover:border-[#0A7A78]/30 hover:bg-slate-50">

                          <p className="font-semibold text-slate-700">
                            {item}
                          </p>

                        </div>

                      </motion.div>

                    )
                  )}

                </div>

              </motion.div>

              {/* Awards */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <Award className="h-6 w-6" />
                  </div>

                  <div>

                    <p className="text-sm font-medium text-[#0A7A78]">
                      Recognition
                    </p>

                    <h2 className="text-2xl font-bold text-[#063B5C]">
                      Awards & Achievements
                    </h2>

                  </div>

                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-5">

                  <Award className="mt-1 h-5 w-5 shrink-0 text-amber-500" />

                  <p className="leading-7 text-slate-600">
                    {doctor.awards}
                  </p>

                </div>

              </motion.div>

            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <div className="space-y-6">

              {/* Appointment */}

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="sticky top-6 overflow-hidden rounded-3xl bg-[#063B5C] p-7 text-white shadow-xl"
              >

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <CalendarDays className="h-6 w-6 text-[#70ddd2]" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    Book an Appointment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Schedule a consultation with{" "}
                    {doctor.name}.
                  </p>

                  <div className="mt-6 space-y-3">

                    {[
                      "Experienced Specialist",
                      "Personalized Consultation",
                      "Advanced Medical Care",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/85"
                      >

                        <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />

                        {item}

                      </div>
                    ))}

                  </div>

                  <Link
                    href={`/appointment?doctor_id=${doctor.id}`}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3.5 font-semibold transition hover:bg-[#0c8e8b]"
                  >

                    <CalendarDays className="h-5 w-5" />

                    Book Appointment

                  </Link>

                </div>

              </motion.div>

              {/* Contact */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >

                <h3 className="text-xl font-bold text-[#063B5C]">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-5">

                  {doctor.phone && (
                    <a
                      href={`tel:${doctor.phone}`}
                      className="flex items-center gap-4"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                        <Phone className="h-5 w-5" />
                      </div>

                      <div>

                        <p className="text-xs text-slate-400">
                          Phone
                        </p>

                        <p className="text-sm font-semibold text-slate-700">
                          {doctor.phone}
                        </p>

                      </div>

                    </a>
                  )}

                  {doctor.email && (
                    <a
                      href={`mailto:${doctor.email}`}
                      className="flex items-center gap-4"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                        <Mail className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">

                        <p className="text-xs text-slate-400">
                          Email
                        </p>

                        <p className="truncate text-sm font-semibold text-slate-700">
                          {doctor.email}
                        </p>

                      </div>

                    </a>
                  )}

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-xs text-slate-400">
                        Location
                      </p>

                      <p className="text-sm font-semibold text-slate-700">
                        {doctor.location}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Specializations */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
                    <Stethoscope className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-[#063B5C]">
                    Specializations
                  </h3>

                </div>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                  className="mt-6 flex flex-wrap gap-2"
                >

                  {doctor.specializations.map(
                    (item) => (
                      <motion.span
                        key={item}
                        variants={fadeUp}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        className="cursor-default rounded-full bg-[#063B5C]/5 px-3 py-2 text-sm font-medium text-[#063B5C] transition hover:bg-[#063B5C]/10"
                      >
                        {item}
                      </motion.span>
                    )
                  )}

                </motion.div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MOBILE CTA
      ====================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">

        <div className="flex gap-2">

          <Link
            href={`/appointment?doctor_id=${doctor.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A7A78] py-3 font-semibold text-white"
          >

            <CalendarDays className="h-5 w-5" />

            Book Appointment

          </Link>

          {doctor.phone && (
            <a
              href={`tel:${doctor.phone}`}
              className="flex items-center justify-center rounded-xl border border-slate-300 px-4 text-[#063B5C]"
            >
              <Phone className="h-5 w-5" />
            </a>
          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   DOCTOR PROFILE LOADER
========================================================= */

function DoctorProfileLoader() {
  return (
    <main className="min-h-screen bg-[#f5f9fb]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#063B5C]">

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#0A7A78]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

          {/* Breadcrumb */}

          <div className="mb-10 h-5 w-52 animate-pulse rounded bg-white/10" />

          <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">

            {/* Image */}

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2">

              <div className="h-[420px] animate-pulse rounded-[1.6rem] bg-white/10" />

            </div>

            {/* Content */}

            <div className="space-y-5">

              <div className="h-9 w-40 animate-pulse rounded-full bg-white/10" />

              <div className="h-14 w-4/5 animate-pulse rounded-xl bg-white/10" />

              <div className="h-6 w-2/3 animate-pulse rounded-lg bg-white/10" />

              <div className="space-y-3">

                <div className="h-4 w-full animate-pulse rounded bg-white/10" />

                <div className="h-4 w-full animate-pulse rounded bg-white/10" />

                <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />

              </div>

              <div className="grid grid-cols-3 gap-3">

                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-20 animate-pulse rounded-2xl bg-white/10"
                  />
                ))}

              </div>

              <div className="flex gap-3">

                <div className="h-14 w-48 animate-pulse rounded-xl bg-white/10" />

                <div className="h-14 w-40 animate-pulse rounded-xl bg-white/10" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

            {/* LEFT */}

            <div className="space-y-8">

              {[1, 2, 3].map((section) => (
                <div
                  key={section}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
                >

                  <div className="flex items-center gap-3">

                    <div className="h-12 w-12 animate-pulse rounded-2xl bg-slate-200" />

                    <div className="space-y-2">

                      <div className="h-3 w-32 animate-pulse rounded bg-slate-200" />

                      <div className="h-6 w-52 animate-pulse rounded bg-slate-200" />

                    </div>

                  </div>

                  <div className="mt-8 space-y-4">

                    <div className="h-4 w-full animate-pulse rounded bg-slate-100" />

                    <div className="h-4 w-full animate-pulse rounded bg-slate-100" />

                    <div className="h-4 w-4/5 animate-pulse rounded bg-slate-100" />

                    <div className="h-20 w-full animate-pulse rounded-2xl bg-slate-100" />

                  </div>

                </div>
              ))}

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              <div className="rounded-3xl bg-[#063B5C] p-7">

                <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/10" />

                <div className="mt-5 h-7 w-52 animate-pulse rounded bg-white/10" />

                <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10" />

                <div className="mt-6 h-14 w-full animate-pulse rounded-xl bg-white/10" />

                <div className="mt-7 space-y-4">

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-5 w-4/5 animate-pulse rounded bg-white/10"
                    />
                  ))}

                </div>

              </div>

              <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200">

                <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />

                <div className="mt-6 space-y-5">

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >

                      <div className="h-11 w-11 animate-pulse rounded-xl bg-slate-200" />

                      <div className="flex-1 space-y-2">

                        <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />

                        <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
// import React from 'react';
// import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

// const HereSection = () => {
//   const contactInfo = [
//     {
//       icon: MapPin,
//       label: 'Address',
//       value: '123 Medical Center Blvd, Health City, HC 10001',
//       action: 'Get Directions',
//       href: '#',
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '(555) 123-4567',
//       action: 'Call Now',
//       href: 'tel:+15551234567',
//     },
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'care@medcenter.com',
//       action: 'Send Email',
//       href: 'mailto:care@medcenter.com',
//     },
//     {
//       icon: Clock,
//       label: 'Hours',
//       value: 'Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-5PM',
//       action: 'Emergency 24/7',
//       href: '#',
//     },
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDcxRTQiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
//             Visit Us
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             We're Here for You
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600">
//             Find us easily and get in touch. Our doors are always open for your healthcare needs.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8 items-start">
//           {/* Contact Info Cards */}
//           <div className="lg:col-span-2 space-y-4">
//             {contactInfo.map((item, index) => {
//               const IconComponent = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300">
//                       <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
//                         {item.label}
//                       </p>
//                       <p className="text-gray-900 font-medium mb-2 break-words">
//                         {item.value}
//                       </p>
//                       <a
//                         href={item.href}
//                         className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium group/link"
//                       >
//                         {item.action}
//                         <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Map / Location Visual */}
//           <div className="lg:col-span-3">
//             <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
//               {/* Map placeholder with gradient */}
//               <div className="relative h-[400px] lg:h-[520px] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
//                 {/* Decorative map-like elements */}
//                 <div className="absolute inset-0 opacity-20">
//                   <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
//                     <defs>
//                       <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
//                       </pattern>
//                     </defs>
//                     <rect width="400" height="400" fill="url(#grid)" />
//                   </svg>
//                 </div>

//                 {/* Simulated roads */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-1/3 left-0 right-0 h-3 bg-white/20" />
//                   <div className="absolute top-2/3 left-0 right-0 h-2 bg-white/15" />
//                   <div className="absolute left-1/4 top-0 bottom-0 w-3 bg-white/20" />
//                   <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-white/15" />
//                 </div>

//                 {/* Location pin */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                   <div className="relative">
//                     <div className="absolute inset-0 w-16 h-16 bg-white/30 rounded-full animate-ping" />
//                     <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
//                       <MapPin className="w-8 h-8 text-blue-600" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Info overlay card */}
//                 <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-sm">
//                   <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-2xl">
//                     <h3 className="font-bold text-gray-900 text-lg mb-1">
//                       MedCenter Hospital
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-4">
//                       123 Medical Center Blvd, Health City
//                     </p>
//                     <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200">
//                       <Navigation className="w-4 h-4" />
//                       Get Directions
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA Bar */}
//         <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 shadow-xl">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//             <div className="text-center sm:text-left">
//               <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
//                 Need Emergency Care?
//               </h3>
//               <p className="text-blue-100">
//                 Our emergency department is open 24/7. Don't hesitate to reach out.
//               </p>
//             </div>
//             <a
//               href="tel:+15551234567"
//               className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
//             >
//               <Phone className="w-5 h-5" />
//               (555) 123-4567
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HereSection;


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

/* =========================================================
   HERO DATA
========================================================= */

const heroData = {
  badge: "Trusted Healthcare • Advanced Medical Care",

  title: "Expert Care.",
  highlight: "Closer to You.",

  description:
    "Comprehensive healthcare delivered by experienced doctors, advanced technology and a compassionate team focused on every patient's wellbeing.",

  image:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",

  imageAlt:
    "Professional healthcare team providing quality patient care",

  primaryButton: {
    label: "Book an Appointment",
    href: "/appointment",
  },

  secondaryButton: {
    label: "Explore Doctors",
    href: "/doctors",
  },

  phone: "+91 70000 00000",

  stats: [
    {
      number: "25+",
      label: "Specialized Departments",
    },
    {
      number: "100+",
      label: "Expert Doctors",
    },
    {
      number: "24/7",
      label: "Emergency Care",
    },
  ],

  floatingCard: {
    title: "24/7 Emergency Care",
    description: "Always here when you need us",
  },

  trust: [
    "Experienced Medical Specialists",
    "Advanced Diagnostic Technology",
    "Patient-Centered Care",
  ],
};

/* =========================================================
   ANIMATIONS
========================================================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    x: 30,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const HereSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Teal Glow */}

        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#0A7A78]/10 blur-3xl" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0A7A78 1px, transparent 1px), linear-gradient(90deg, #0A7A78 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-16">

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >

            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A7A78]/15 bg-[#0A7A78]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0A7A78]"
            >

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0A7A78] opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0A7A78]" />

              </span>

              {heroData.badge}

            </motion.div>


            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[48px] font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[76px]"
            >

              {heroData.title}

              <span className="relative block text-[#0A7A78]">

                {heroData.highlight}

                {/* Underline */}

                <svg
                  className="absolute -bottom-3 left-0 h-3 w-[230px] sm:w-[280px]"
                  viewBox="0 0 280 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8C75 2 175 2 277 6"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

              </span>

            </motion.h1>


            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              {heroData.description}
            </motion.p>


            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >

              <Link
                href={heroData.primaryButton.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#0A7A78]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#075e63]"
              >

                <CalendarDays className="h-4 w-4" />

                {heroData.primaryButton.label}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>


              <Link
                href={heroData.secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0A7A78]/30 hover:text-[#0A7A78]"
              >

                <Stethoscope className="h-4 w-4" />

                {heroData.secondaryButton.label}

              </Link>

            </motion.div>


            {/* Phone */}

            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-center gap-3"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A7A78]/10 text-[#0A7A78]">

                <Phone className="h-4 w-4" />

              </div>

              <div>

                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Need urgent assistance?
                </p>

                <a
                  href={`tel:${heroData.phone}`}
                  className="text-sm font-black text-slate-900 hover:text-[#0A7A78]"
                >
                  {heroData.phone}
                </a>

              </div>

            </motion.div>


            {/* Trust Points */}

            <motion.div
              variants={fadeUp}
              className="mt-10 border-t border-slate-200 pt-7"
            >

              <div className="flex flex-wrap gap-x-6 gap-y-3">

                {heroData.trust.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0A7A78]" />

                    <span className="text-xs font-semibold text-slate-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="relative"
          >

            {/* Main Image */}

            <div className="relative mx-auto max-w-[600px]">

              {/* Outer Glow */}

              <div className="absolute -inset-5 rounded-[40px] bg-[#0A7A78]/10 blur-2xl" />


              {/* Image Container */}

              <div className="relative overflow-hidden rounded-[36px] border border-white bg-slate-100 shadow-2xl shadow-slate-900/10">

                <Image
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  width={900}
                  height={1000}
                  unoptimized
                  priority
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />


                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />


                {/* Top Tag */}

                <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A7A78] text-white">

                      <ShieldCheck className="h-5 w-5" />

                    </div>

                    <div>

                      <p className="text-xs font-black text-slate-900">
                        Trusted Care
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Quality & Safety First
                      </p>

                    </div>

                  </div>

                </div>


                {/* Bottom Content */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:p-5">

                    <div className="flex items-center justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">

                          <HeartPulse className="h-5 w-5" />

                        </div>

                        <div>

                          <p className="text-sm font-black text-slate-900">
                            {heroData.floatingCard.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {heroData.floatingCard.description}
                          </p>

                        </div>

                      </div>


                      <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#0A7A78] text-white sm:flex">

                        <ArrowRight className="h-4 w-4" />

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Experience Card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block sm:-left-8 sm:p-5"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">

                    <Users className="h-5 w-5" />

                  </div>

                  <div>

                    <p className="text-lg font-black text-slate-950">
                      500+
                    </p>

                    <p className="text-[11px] font-medium text-slate-500">
                      Healthcare Professionals
                    </p>

                  </div>

                </div>

              </motion.div>


              {/* Floating Emergency Card */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white bg-white p-4 shadow-2xl sm:block"
              >

                <div className="flex items-center gap-3">

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">

                    <span className="absolute h-10 w-10 animate-ping rounded-full bg-red-400/20" />

                    <Clock3 className="relative h-5 w-5" />

                  </div>

                  <div>

                    <p className="text-xs font-black text-slate-900">
                      24/7 Available
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Emergency Services
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.03]"
        >

          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            {heroData.stats.map((stat, index) => (

              <div
                key={stat.label}
                className="group flex items-center gap-4 px-6 py-6 transition duration-300 hover:bg-[#f5faf9] sm:px-8"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] transition duration-300 group-hover:bg-[#0A7A78] group-hover:text-white">

                  {index === 0 && (
                    <Stethoscope className="h-5 w-5" />
                  )}

                  {index === 1 && (
                    <Users className="h-5 w-5" />
                  )}

                  {index === 2 && (
                    <Clock3 className="h-5 w-5" />
                  )}

                </div>

                <div>

                  <p className="text-2xl font-black tracking-tight text-slate-950">
                    {stat.number}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {stat.label}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HereSection;

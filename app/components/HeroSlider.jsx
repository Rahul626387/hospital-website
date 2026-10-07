// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, CalendarDays, CheckCircle2, Phone, HeartPulse, Award } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const heroSlides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
//     badge: "Trusted Healthcare Excellence",
//     title: "Your Health Is Our",
//     highlight: "Highest Priority.",
//     description:
//       "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
//     cardTitle: "Advanced Healthcare",
//     cardText: "Compassionate care for every patient",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
//     badge: "Modern Hospital Facilities",
//     title: "Advanced Care For",
//     highlight: "Better Health.",
//     description:
//       "Modern infrastructure, advanced diagnostics and experienced medical professionals working together for your care.",
//     cardTitle: "Modern Facilities",
//     cardText: "Technology designed around patient care",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1551076805-e1869033e561",
//     badge: "Emergency Care 24/7",
//     title: "When Every Second",
//     highlight: "Matters.",
//     description:
//       "Our emergency team is available around the clock to provide rapid assessment, treatment and critical care.",
//     cardTitle: "Emergency Department",
//     cardText: "Available 24 hours a day, 7 days a week",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
//       {/* Background decorations */}
//       <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-teal-200/25 blur-3xl" />
//       <div className="absolute right-[-140px] top-32 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl" />

//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         fadeEffect={{
//           crossFade: true,
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         loop
//         className="hero-swiper relative"
//       >
//         {heroSlides.map((slide, index) => (
//           <SwiperSlide key={slide.title}>
//             <div className="relative">
//               <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
//                 {/* ================= LEFT CONTENT ================= */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 0.7 }}
//                   className="relative z-10"
//                 >
//                   {/* Badge */}
//                   <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A7A78] shadow-sm">
//                     <HeartPulse className="h-4 w-4" />
//                     {slide.badge}
//                   </div>

//                   {/* Heading */}
//                   <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-[#063B5C] sm:text-5xl lg:text-[4.2rem]">
//                     {slide.title}

//                     <span className="block text-[#0A7A78]">
//                       {slide.highlight}
//                     </span>
//                   </h1>

//                   {/* Description */}
//                   <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
//                     {slide.description}
//                   </p>

//                   {/* Buttons */}
//                   <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                     <Link
//                       href="/appointment"
//                       className="group flex items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-4 font-bold text-white shadow-xl shadow-teal-900/20 transition duration-300 hover:-translate-y-1 hover:bg-[#086663]"
//                     >
//                       <CalendarDays className="h-5 w-5" />

//                       Book Appointment

//                       <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                     </Link>

//                     <Link
//                       href="/doctors"
//                       className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#063B5C] shadow-sm transition duration-300 hover:border-teal-300 hover:text-[#0A7A78]"
//                     >
//                       Find a Doctor

//                       <ArrowRight className="h-4 w-4" />
//                     </Link>
//                   </div>

//                   {/* Trust Points */}
//                   <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
//                     <div className="flex items-center gap-2">
//                       <CheckCircle2 className="h-5 w-5 text-[#0A7A78]" />
//                       Experienced Specialists
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <CheckCircle2 className="h-5 w-5 text-[#0A7A78]" />
//                       Modern Facilities
//                     </div>
//                   </div>

//                   {/* Emergency */}
//                   <div className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-sm">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
//                       <Phone className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                         Emergency Helpline
//                       </p>

//                       <p className="text-sm font-black text-[#063B5C]">
//                         +91 98765 43210
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* ================= RIGHT IMAGE ================= */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.92, x: 40 }}
//                   whileInView={{ opacity: 1, scale: 1, x: 0 }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 0.8 }}
//                   className="relative"
//                 >
//                   {/* Main image */}
//                   <div className="relative mx-auto h-[440px] max-w-[570px] overflow-hidden rounded-[2.5rem] shadow-2xl sm:h-[570px]">
//                     <Image
//                       src={slide.image}
//                       alt={slide.cardTitle}
//                       fill
//                       priority={index === 0}
//                       className="object-cover transition duration-700"
//                       sizes="(max-width: 1024px) 100vw, 55vw"
//                     />

//                     {/* Image overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/90 via-[#063B5C]/10 to-transparent" />

//                     {/* Open 24/7 */}
//                     <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#063B5C] shadow-lg backdrop-blur">
//                       <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
//                       OPEN 24/7
//                     </div>

//                     {/* Image bottom card */}
//                     <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl">
//                       <div className="flex items-center gap-4">
//                         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A7A78] shadow-lg">
//                           <HeartPulse className="h-7 w-7" />
//                         </div>

//                         <div>
//                           <p className="text-lg font-black">
//                             {slide.cardTitle}
//                           </p>

//                           <p className="mt-1 text-sm text-white/75">
//                             {slide.cardText}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Emergency floating card */}
//                   <motion.div
//                     animate={{
//                       y: [0, -8, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -bottom-7 -left-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:-left-8"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
//                         <Phone className="h-5 w-5" />
//                       </div>

//                       <div>
//                         <p className="text-xs font-medium text-slate-500">
//                           Emergency
//                         </p>

//                         <p className="font-black text-[#063B5C]">
//                           +91 98765 43210
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Experience badge */}
//                   <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-[#0A7A78] p-5 text-white shadow-xl sm:block">
//                     <Award className="h-7 w-7" />

//                     <p className="mt-2 text-2xl font-black">
//                       25+
//                     </p>

//                     <p className="text-xs text-white/70">
//                       Years
//                       <br />
//                       Experience
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Slider CSS */}
//       <style jsx global>{`
//         .hero-swiper .swiper-pagination {
//           bottom: 28px !important;
//           left: 50% !important;
//           transform: translateX(-50%);
//           width: auto !important;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .hero-swiper .swiper-pagination-bullet {
//           width: 8px;
//           height: 8px;
//           opacity: 1;
//           background: #cbd5e1;
//           transition: all 0.3s ease;
//         }

//         .hero-swiper .swiper-pagination-bullet-active {
//           width: 28px;
//           border-radius: 999px;
//           background: #0a7a78;
//         }

//         @media (max-width: 1024px) {
//           .hero-swiper .swiper-pagination {
//             bottom: 20px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   HeartPulse,
//   Phone,
// } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const heroSlides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
//     badge: "Trusted Healthcare Excellence",
//     title: "Your Health Is Our",
//     highlight: "Highest Priority.",
//     description:
//       "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
//     badge: "Modern Hospital Facilities",
//     title: "Advanced Care For",
//     highlight: "Better Health.",
//     description:
//       "Modern infrastructure, advanced diagnostics and experienced medical professionals working together for your care.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1551076805-e1869033e561",
//     badge: "Emergency Care 24/7",
//     title: "When Every Second",
//     highlight: "Matters.",
//     description:
//       "Our emergency team is available around the clock to provide rapid assessment, treatment and critical care.",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <section className="relative h-[680px] overflow-hidden sm:h-[720px] lg:h-[760px]">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         fadeEffect={{
//           crossFade: true,
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         loop
//         className="hero-slider h-full w-full"
//       >
//         {heroSlides.map((slide, index) => (
//           <SwiperSlide key={slide.title} className="relative h-full">
//             {/* =====================================================
//                 FULL BACKGROUND IMAGE
//             ====================================================== */}
//             <div className="absolute inset-0">
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//                 sizes="100vw"
//               />
//             </div>

//             {/* =====================================================
//                 DARK / WHITE GRADIENT OVER IMAGE
//             ====================================================== */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#031f2e]/95 via-[#063B5C]/75 to-[#063B5C]/20" />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

//             {/* =====================================================
//                 CONTENT
//             ====================================================== */}
//             <div className="relative z-10 flex h-full items-center">
//               <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     x: -50,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: false,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                   }}
//                   className="max-w-2xl text-white"
//                 >
//                   {/* Badge */}
//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
//                     <HeartPulse className="h-4 w-4 text-teal-300" />

//                     {slide.badge}
//                   </div>

//                   {/* Heading */}
//                   <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
//                     {slide.title}

//                     <span className="mt-2 block text-teal-300">
//                       {slide.highlight}
//                     </span>
//                   </h1>

//                   {/* Description */}
//                   <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
//                     {slide.description}
//                   </p>

//                   {/* Buttons */}
//                   <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                     <Link
//                       href="/appointment"
//                       className="group flex items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-4 font-bold text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#086663]"
//                     >
//                       <CalendarDays className="h-5 w-5" />

//                       Book Appointment

//                       <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                     </Link>

//                     <Link
//                       href="/doctors"
//                       className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#063B5C]"
//                     >
//                       Find a Doctor

//                       <ArrowRight className="h-4 w-4" />
//                     </Link>
//                   </div>

//                   {/* Trust Points */}
//                   <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/80">
//                     <div className="flex items-center gap-2">
//                       <CheckCircle2 className="h-5 w-5 text-teal-300" />
//                       Experienced Specialists
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <CheckCircle2 className="h-5 w-5 text-teal-300" />
//                       Modern Facilities
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <CheckCircle2 className="h-5 w-5 text-teal-300" />
//                       24/7 Emergency
//                     </div>
//                   </div>

//                   {/* Emergency */}
//                   <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-md">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg">
//                       <Phone className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
//                         Emergency Helpline
//                       </p>

//                       <a
//                         href="tel:+919876543210"
//                         className="text-sm font-black text-white hover:text-teal-300"
//                       >
//                         +91 98765 43210
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* =====================================================
//                 SMALL OPEN 24/7 CARD - RIGHT BOTTOM
//             ====================================================== */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: false,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.2,
//               }}
//               className="absolute bottom-20 right-5 z-20 hidden rounded-2xl border border-white/20 bg-black/30 p-4 text-white backdrop-blur-xl lg:block"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500">
//                   <span className="h-3 w-3 animate-pulse rounded-full bg-white" />
//                 </div>

//                 <div>
//                   <p className="text-xs text-white/60">
//                     Emergency Department
//                   </p>

//                   <p className="font-black">
//                     Open 24/7
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* =====================================================
//           SWIPER CUSTOM CSS
//       ====================================================== */}
//       <style jsx global>{`
//         .hero-slider .swiper-pagination {
//           bottom: 30px !important;
//           left: 50% !important;
//           width: auto !important;
//           transform: translateX(-50%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }

//         .hero-slider .swiper-pagination-bullet {
//           width: 9px;
//           height: 9px;
//           margin: 0 !important;
//           opacity: 1;
//           background: rgba(255, 255, 255, 0.5);
//           transition: all 0.3s ease;
//         }

//         .hero-slider .swiper-pagination-bullet-active {
//           width: 30px;
//           border-radius: 999px;
//           background: #5eead4;
//         }

//         @media (max-width: 640px) {
//           .hero-slider .swiper-pagination {
//             bottom: 20px !important;
//           }

//           .hero-slider .swiper-pagination-bullet {
//             width: 7px;
//             height: 7px;
//           }

//           .hero-slider .swiper-pagination-bullet-active {
//             width: 24px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Award,
//   CalendarDays,
//   CheckCircle2,
//   HeartPulse,
//   Phone,
// } from "lucide-react";

// // const heroSlides = [
// //   {
// //     image:"/assets/images/01.png",
// //     // image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
// //     badge: "Trusted Healthcare Excellence",
// //     title: "Your Health Is Our",
// //     highlight: "Highest Priority.",
// //     description:
// //       "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
// //     cardTitle: "Advanced Healthcare",
// //     cardText: "Compassionate care for every patient",
// //   },
// //   {
// //     image:"/assets/images/sliderimage04.png",
// //     // image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
// //     badge: "Modern Hospital Facilities",
// //     title: "Advanced Care.",
// //     highlight: "Better Outcomes.",
// //     description:
// //       "Modern infrastructure, advanced diagnostics and experienced medical professionals working together for your health.",
// //     cardTitle: "Modern Facilities",
// //     cardText: "Technology designed around patient care",
// //   },
// //   {
// //     // image:"https://images.unsplash.com/photo-1551076805-e1869033e561",
// //     image:"/assets/images/sliderimage03.png",
// //     badge: "Expert Medical Team",
// //     title: "Care You Can",
// //     highlight: "Trust.",
// //     description:
// //       "Our experienced doctors and dedicated healthcare team provide personalized treatment for you and your family.",
// //     cardTitle: "Expert Specialists",
// //     cardText: "Experienced doctors and caring professionals",
// //   },
// // ];

// const heroSlides = [
//   {
//     // image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
//     image:"/assets/images/01.png",
//     badge: "Trusted Healthcare Excellence",
//     title: "Your Health Is Our",
//     highlight: "Highest Priority.",
//     description:
//       "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
//     cardTitle: "Advanced Healthcare",
//     cardText: "Compassionate and comprehensive care for every patient",
//   },

//   // {
//   //   image:"https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1800&q=85",
//   //   badge: "Hospital Pharmacy",
//   //   title: "Medicines When",
//   //   highlight: "You Need Them.",
//   //   description:
//   //     "Access quality medicines and trusted pharmaceutical services with convenient support for patients and their families.",
//   //   cardTitle: "Pharmacy Services",
//   //   cardText: "Reliable medicines and professional pharmaceutical care",
//   // },

//   {
//     image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85",
//     // image:"/assets/images/sliderimage03.png",
//     badge: "Advanced Diagnostics",
//     title: "Accurate Diagnosis.",
//     highlight: "Better Treatment.",
//     description:
//       "Advanced laboratory and diagnostic services help our medical team deliver timely and accurate healthcare decisions.",
//     cardTitle: "Pathology & Diagnostics",
//     cardText: "Modern diagnostic technology for accurate results",
//   },

//   {
//     // image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=85",
//     image:"/assets/images/doctorteam01.png",
//     badge: "Expert Medical Team",
//     title: "Experienced Doctors.",
//     highlight: "Personalized Care.",
//     description:
//       "Our experienced doctors and dedicated healthcare professionals provide personalized treatment for you and your family.",
//     cardTitle: "Expert Specialists",
//     cardText: "Experienced doctors and caring healthcare professionals",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1800&q=85",
//     badge: "24×7 Patient Care",
//     title: "Care That Is",
//     highlight: "Always With You.",
//     description:
//       "From emergency support to ongoing treatment, our dedicated team is committed to providing dependable care whenever you need it.",
//     cardTitle: "24×7 Healthcare",
//     cardText: "Dedicated support for patients around the clock",
//   },
// ];

// export default function HomeHero() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const slide = heroSlides[activeSlide];

//   return (
//     <section className="relative h-[460px] overflow-hidden sm:h-[500px] lg:h-[550px]">
//       {/* =========================================================
//           BACKGROUND SLIDER IMAGE
//       ========================================================== */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeSlide}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority={activeSlide === 0}
//             sizes="100vw"
//             className="object-cover"
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#032B42]/95 via-[#063B5C]/75 to-[#fff]/25" />
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-[#032B42]/95 via-[#063B5C]/75 to-[#063B5C]/25" /> */}

//           {/* Bottom gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* =========================================================
//           CONTENT
//       ========================================================== */}
//       <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeSlide}
//             initial={{ opacity: 0, x: -35 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -25 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-2xl text-white"
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-100 backdrop-blur-md">
//               <HeartPulse className="h-4 w-4 text-teal-300" />
//               {slide.badge}
//             </div>

//             {/* Heading */}
//             <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
//               {slide.title}
//               <span className="block text-teal-300">
//                 {slide.highlight}
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
//               {slide.description}
//             </p>

//             {/* Buttons */}
//             <div className="mt-7 flex flex-wrap gap-3">
//               <Link
//                 href="/appointment"
//                 className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#086663]"
//               >
//                 <CalendarDays className="h-5 w-5" />
//                 Book Appointment
//                 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="/doctors"
//                 className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
//               >
//                 Find a Doctor
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>

//             {/* Trust points */}
//             <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-white/80 sm:text-sm">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />
//                 Experienced Specialists
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />
//                 Modern Facilities
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />
//                 24/7 Emergency
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* =========================================================
//           RIGHT INFO CARD
//       ========================================================== */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`card-${activeSlide}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="absolute bottom-20 right-5 z-10 hidden w-[280px] rounded-2xl border border-white/20 bg-black/25 p-4 text-white shadow-2xl backdrop-blur-xl md:block lg:right-[6%]"
//         >
//           <div className="flex items-center gap-3">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]">
//               <HeartPulse className="h-6 w-6" />
//             </div>

//             <div>
//               <p className="font-black">{slide.cardTitle}</p>

//               <p className="mt-1 text-xs text-white/65">
//                 {slide.cardText}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* =========================================================
//           EMERGENCY CARD
//       ========================================================== */}
//       <motion.a
//         href="tel:+919575300110"
//         animate={{ y: [0, -5, 0] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-5 right-5 z-20 hidden rounded-xl border border-white/20 bg-white p-3 shadow-2xl sm:block lg:right-[6%]"
//       >
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
//             <Phone className="h-5 w-5" />
//           </div>

//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//               Emergency 24/7
//             </p>

//             <p className="text-sm font-black text-[#063B5C]">
//               +91 9575300110
//             </p>
//           </div>
//         </div>
//       </motion.a>

//       {/* =========================================================
//           EXPERIENCE BADGE
//       ========================================================== */}
//       <div className="absolute right-5 top-6 z-10 hidden items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white backdrop-blur-md lg:flex lg:right-[6%]">
//         <Award className="h-6 w-6 text-teal-300" />

//         <div>
//           <p className="text-xl font-black">25+</p>
//           <p className="text-[10px] text-white/60">
//             Years Experience
//           </p>
//         </div>
//       </div>

//       {/* =========================================================
//           SLIDER DOTS
//       ========================================================== */}
//       <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-2.5 rounded-full transition-all duration-300 ${
//               activeSlide === index
//                 ? "w-8 bg-teal-300"
//                 : "w-2.5 bg-white/50 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>

//       {/* =========================================================
//           MOBILE EMERGENCY BUTTON
//       ========================================================== */}
//       <a
//         href="tel:+919876543210"
//         className="absolute bottom-5 right-4 z-20 flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white shadow-xl sm:hidden"
//       >
//         <Phone className="h-4 w-4" />
//         Emergency
//       </a>
//     </section>
//   );
// }

// new code slider 

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Award,
//   CalendarDays,
//   CheckCircle2,
//   HeartPulse,
//   Phone,
// } from "lucide-react";

// /* =========================================================
//    HERO SLIDES
// ========================================================= */

// const heroSlides = [
//   {
//     image: "/assets/images/01.png",
//     badge: "Trusted Healthcare Excellence",
//     title: "Your Health Is Our",
//     highlight: "Highest Priority.",
//     description:
//       "Experience compassionate care, advanced medical technology and trusted specialists at Baderia Metro Prime Hospital.",
//     cardTitle: "Advanced Healthcare",
//     cardText:
//       "Compassionate and comprehensive care for every patient",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85",
//     badge: "Advanced Diagnostics",
//     title: "Accurate Diagnosis.",
//     highlight: "Better Treatment.",
//     description:
//       "Advanced laboratory and diagnostic services help our medical team deliver timely and accurate healthcare decisions.",
//     cardTitle: "Pathology & Diagnostics",
//     cardText:
//       "Modern diagnostic technology for accurate results",
//   },

//   {
//     image: "/assets/images/doctorteam01.png",
//     badge: "Expert Medical Team",
//     title: "Experienced Doctors.",
//     highlight: "Personalized Care.",
//     description:
//       "Our experienced doctors and dedicated healthcare professionals provide personalized treatment for you and your family.",
//     cardTitle: "Expert Specialists",
//     cardText:
//       "Experienced doctors and caring healthcare professionals",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1800&q=85",
//     badge: "24×7 Patient Care",
//     title: "Care That Is",
//     highlight: "Always With You.",
//     description:
//       "From emergency support to ongoing treatment, our dedicated team is committed to providing dependable care whenever you need it.",
//     cardTitle: "24×7 Healthcare",
//     cardText:
//       "Dedicated support for patients around the clock",
//   },
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function HomeHero() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   /* =========================================================
//      AUTO SLIDER
//   ========================================================== */

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const slide = heroSlides[activeSlide];

//   return (
//     <section
//       className="
//         relative
//         h-[620px]
//         overflow-hidden
//         bg-[#032B42]
//         sm:h-[600px]
//         lg:h-[570px]
//       "
//     >
//       {/* =====================================================
//           BACKGROUND SLIDER

//           IMPORTANT:
//           All images remain mounted.
//           Only opacity changes.
//           This prevents white/blank flash.
//       ====================================================== */}

//       <div className="absolute inset-0 bg-[#032B42]">
//         {heroSlides.map((item, index) => (
//           <motion.div
//             key={item.image}
//             initial={false}
//             animate={{
//               opacity: activeSlide === index ? 1 : 0,
//               scale: activeSlide === index ? 1 : 1.035,
//             }}
//             transition={{
//               opacity: {
//                 duration: 0.9,
//                 ease: "easeInOut",
//               },
//               scale: {
//                 duration: 5,
//                 ease: "linear",
//               },
//             }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               fill
//               priority={index === 0}
//               sizes="100vw"
//               className="object-cover object-center"
//             />
//           </motion.div>
//         ))}

//         {/* ===================================================
//             MAIN BLUE OVERLAY
//         ==================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-r
//             from-[#032B42]/95
//             via-[#063B5C]/75
//             to-[#063B5C]/20
//           "
//         />

//         {/* ===================================================
//             MOBILE EXTRA OVERLAY
//         ==================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-b
//             from-[#032B42]/20
//             via-transparent
//             to-[#021923]/70
//             lg:hidden
//           "
//         />

//         {/* ===================================================
//             BOTTOM CINEMATIC GRADIENT
//         ==================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             from-black/50
//             via-transparent
//             to-transparent
//           "
//         />
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           h-full
//           max-w-7xl
//           items-center
//           px-4
//           sm:px-6
//           lg:px-8
//         "
//       >
//         <AnimatePresence mode="sync">
//           <motion.div
//             key={activeSlide}
//             initial={{
//               opacity: 0,
//               x: -25,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             exit={{
//               opacity: 0,
//               x: 20,
//             }}
//             transition={{
//               duration: 0.55,
//               ease: "easeOut",
//             }}
//             className="
//               w-full
//               max-w-2xl
//               text-white
//               pt-8
//               sm:pt-0
//             "
//           >
//             {/* =================================================
//                 BADGE
//             ================================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 10,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.1,
//                 duration: 0.4,
//               }}
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 px-3.5
//                 py-2
//                 text-[10px]
//                 font-bold
//                 uppercase
//                 tracking-[0.12em]
//                 text-teal-100
//                 backdrop-blur-md
//                 sm:px-4
//                 sm:text-xs
//               "
//             >
//               <HeartPulse className="h-4 w-4 text-teal-300" />

//               {slide.badge}
//             </motion.div>

//             {/* =================================================
//                 HEADING
//             ================================================== */}

//             <h1
//               className="
//                 mt-5
//                 text-[2.4rem]
//                 font-black
//                 leading-[1.04]
//                 tracking-tight
//                 sm:text-5xl
//                 lg:text-[3.8rem]
//               "
//             >
//               {slide.title}

//               <span
//                 className="
//                   block
//                   text-teal-300
//                 "
//               >
//                 {slide.highlight}
//               </span>
//             </h1>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================== */}

//             <p
//               className="
//                 mt-5
//                 max-w-xl
//                 text-sm
//                 leading-6
//                 text-white/80
//                 sm:text-base
//                 sm:leading-7
//               "
//             >
//               {slide.description}
//             </p>

//             {/* =================================================
//                 BUTTONS
//             ================================================== */}

//             <div
//               className="
//                 mt-7
//                 flex
//                 flex-wrap
//                 gap-3
//               "
//             >
//               {/* BOOK APPOINTMENT */}

//               <Link
//                 href="/appointment"
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   bg-[#0A7A78]
//                   px-5
//                   py-3
//                   text-sm
//                   font-bold
//                   text-white
//                   shadow-xl
//                   shadow-black/20
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-[#086663]
//                   sm:px-6
//                   sm:py-3.5
//                 "
//               >
//                 <CalendarDays className="h-5 w-5" />

//                 Book Appointment

//                 <ArrowRight
//                   className="
//                     h-4
//                     w-4
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </Link>

//               {/* FIND DOCTOR */}

//               <Link
//                 href="/doctors"
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-white/25
//                   bg-white/10
//                   px-5
//                   py-3
//                   text-sm
//                   font-bold
//                   text-white
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/20
//                   sm:px-6
//                   sm:py-3.5
//                 "
//               >
//                 Find a Doctor

//                 <ArrowRight
//                   className="
//                     h-4
//                     w-4
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </Link>
//             </div>

//             {/* =================================================
//                 TRUST POINTS
//             ================================================== */}

//             <div
//               className="
//                 mt-6
//                 flex
//                 flex-wrap
//                 gap-x-5
//                 gap-y-2
//                 text-xs
//                 font-medium
//                 text-white/80
//                 sm:gap-x-6
//                 sm:text-sm
//               "
//             >
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />

//                 Experienced Specialists
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />

//                 Modern Facilities
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-teal-300" />

//                 24/7 Emergency
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* =====================================================
//           RIGHT INFORMATION CARD
//       ====================================================== */}

//       <AnimatePresence mode="sync">
//         <motion.div
//           key={`card-${activeSlide}`}
//           initial={{
//             opacity: 0,
//             y: 15,
//             scale: 0.97,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1,
//           }}
//           exit={{
//             opacity: 0,
//             y: 15,
//             scale: 0.97,
//           }}
//           transition={{
//             duration: 0.45,
//           }}
//           className="
//             absolute
//             bottom-20
//             right-5
//             z-10
//             hidden
//             w-[280px]
//             rounded-2xl
//             border
//             border-white/20
//             bg-black/25
//             p-4
//             text-white
//             shadow-2xl
//             backdrop-blur-xl
//             md:block
//             lg:right-[6%]
//           "
//         >
//           <div className="flex items-center gap-3">
//             {/* ICON */}

//             <div
//               className="
//                 flex
//                 h-12
//                 w-12
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-[#0A7A78]
//                 shadow-lg
//               "
//             >
//               <HeartPulse className="h-6 w-6" />
//             </div>

//             {/* TEXT */}

//             <div>
//               <p className="font-black">
//                 {slide.cardTitle}
//               </p>

//               <p className="mt-1 text-xs leading-5 text-white/65">
//                 {slide.cardText}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* =====================================================
//           EMERGENCY CARD
//       ====================================================== */}

//       <motion.a
//         href="tel:+919575300110"
//         animate={{
//           y: [0, -5, 0],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-5
//           right-5
//           z-20
//           hidden
//           rounded-xl
//           border
//           border-white/20
//           bg-white
//           p-3
//           shadow-2xl
//           sm:block
//           lg:right-[6%]
//         "
//       >
//         <div className="flex items-center gap-3">
//           {/* PHONE ICON */}

//           <div
//             className="
//               flex
//               h-10
//               w-10
//               items-center
//               justify-center
//               rounded-lg
//               bg-red-50
//               text-red-500
//             "
//           >
//             <Phone className="h-5 w-5" />
//           </div>

//           {/* PHONE TEXT */}

//           <div>
//             <p
//               className="
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-wider
//                 text-slate-400
//               "
//             >
//               Emergency 24/7
//             </p>

//             <p
//               className="
//                 text-sm
//                 font-black
//                 text-[#063B5C]
//               "
//             >
//               +91 9575300110
//             </p>
//           </div>
//         </div>
//       </motion.a>

//       {/* =====================================================
//           EXPERIENCE BADGE
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -10,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           delay: 0.4,
//           duration: 0.5,
//         }}
//         className="
//           absolute
//           right-5
//           top-6
//           z-10
//           hidden
//           items-center
//           gap-3
//           rounded-xl
//           border
//           border-white/15
//           bg-black/20
//           px-4
//           py-3
//           text-white
//           backdrop-blur-md
//           lg:right-[6%]
//           lg:flex
//         "
//       >
//         <Award className="h-6 w-6 text-teal-300" />

//         <div>
//           <p className="text-xl font-black">
//             25+
//           </p>

//           <p className="text-[10px] text-white/60">
//             Years Experience
//           </p>
//         </div>
//       </motion.div>

//       {/* =====================================================
//           SLIDER DOTS
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           bottom-5
//           left-1/2
//           z-20
//           flex
//           -translate-x-1/2
//           items-center
//           gap-2
//         "
//       >
//         {heroSlides.map((item, index) => (
//           <button
//             key={item.image}
//             onClick={() => setActiveSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={
//               activeSlide === index
//                 ? "true"
//                 : undefined
//             }
//             className={`
//               h-2.5
//               rounded-full
//               transition-all
//               duration-300
//               ${
//                 activeSlide === index
//                   ? "w-8 bg-teal-300"
//                   : "w-2.5 bg-white/50 hover:bg-white"
//               }
//             `}
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           MOBILE EMERGENCY BUTTON
//       ====================================================== */}

//       <a
//         href="tel:+919575300110"
//         className="
//           absolute
//           bottom-5
//           right-4
//           z-20
//           flex
//           items-center
//           gap-2
//           rounded-lg
//           bg-red-600
//           px-3
//           py-2
//           text-xs
//           font-bold
//           text-white
//           shadow-xl
//           transition
//           hover:bg-red-700
//           sm:hidden
//         "
//       >
//         <Phone className="h-4 w-4" />

//         Emergency
//       </a>
//     </section>
//   );
// }




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

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setActiveSlide((prev) => {
        return (prev + 1) % heroSlides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  /* =========================================================
     MANUAL SLIDE
  ========================================================= */

  const goToSlide = (index) => {
    if (index === activeSlide) return;

    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  return (
    <section
      className="
        relative
        h-[620px]
        overflow-hidden
        bg-[#032B42]
        sm:h-[600px]
        lg:h-[570px]
      "
    >
      {/* =====================================================
          BACKGROUND SLIDER
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden bg-[#032B42]">
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
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 1.5,
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

        {/* ===================================================
            MAIN BLUE OVERLAY
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-r
            from-[#032B42]/95
            via-[#063B5C]/75
            to-[#063B5C]/20
          "
        />

        {/* ===================================================
            MOBILE OVERLAY
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-b
            from-[#032B42]/20
            via-transparent
            to-[#021923]/70
            lg:hidden
          "
        />

        {/* ===================================================
            CINEMATIC BOTTOM GRADIENT
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-4
          sm:px-6
          lg:px-8
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
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-2xl
              pt-8
              text-white
              sm:pt-0
            "
          >
            {/* =================================================
                BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3.5
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-teal-100
                backdrop-blur-md
                sm:px-4
                sm:text-xs
              "
            >
              <HeartPulse className="h-4 w-4 text-teal-300" />

              {slide.badge}
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.22,
                duration: 0.5,
              }}
              className="
                mt-5
                text-[2.4rem]
                font-black
                leading-[1.04]
                tracking-tight
                sm:text-5xl
                lg:text-[3.8rem]
              "
            >
              {slide.title}

              <span
                className="
                  block
                  text-teal-300
                "
              >
                {slide.highlight}
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/80
                sm:text-base
                sm:leading-7
              "
            >
              {slide.description}
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.38,
                duration: 0.5,
              }}
              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >
              {/* BOOK APPOINTMENT */}

              <Link
                href="/appointment"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0A7A78]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#086663]
                  sm:px-6
                  sm:py-3.5
                "
              >
                <CalendarDays className="h-5 w-5" />

                Book Appointment

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* FIND DOCTOR */}

              <Link
                href="/doctors"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/25
                  bg-white/10
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/20
                  sm:px-6
                  sm:py-3.5
                "
              >
                Find a Doctor

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.48,
                duration: 0.45,
              }}
              className="
                mt-6
                flex
                flex-wrap
                gap-x-5
                gap-y-2
                text-xs
                font-medium
                text-white/80
                sm:gap-x-6
                sm:text-sm
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-300" />
                Experienced Specialists
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-300" />
                Modern Facilities
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-300" />
                24/7 Emergency
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          RIGHT INFORMATION CARD
      ====================================================== */}

      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.div
          key={`card-${activeSlide}`}
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -25,
            scale: 0.96,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-20
            right-5
            z-30
            hidden
            w-[280px]
            rounded-2xl
            border
            border-white/20
            bg-black/25
            p-4
            text-white
            shadow-2xl
            backdrop-blur-xl
            md:block
            lg:right-[6%]
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#0A7A78]
                shadow-lg
              "
            >
              <HeartPulse className="h-6 w-6" />
            </div>

            <div>
              <p className="font-black">
                {slide.cardTitle}
              </p>

              <p className="mt-1 text-xs leading-5 text-white/65">
                {slide.cardText}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          EMERGENCY CARD
      ====================================================== */}

      <motion.a
        href="tel:+919575300110"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-5
          right-5
          z-30
          hidden
          rounded-xl
          border
          border-white/20
          bg-white
          p-3
          shadow-2xl
          sm:block
          lg:right-[6%]
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              bg-red-50
              text-red-500
            "
          >
            <Phone className="h-5 w-5" />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              Emergency 24/7
            </p>

            <p
              className="
                text-sm
                font-black
                text-[#063B5C]
              "
            >
              +91 9575300110
            </p>
          </div>
        </div>
      </motion.a>

      {/* =====================================================
          EXPERIENCE BADGE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.5,
        }}
        className="
          absolute
          right-5
          top-6
          z-30
          hidden
          items-center
          gap-3
          rounded-xl
          border
          border-white/15
          bg-black/20
          px-4
          py-3
          text-white
          backdrop-blur-md
          lg:right-[6%]
          lg:flex
        "
      >
        <Award className="h-6 w-6 text-teal-300" />

        <div>
          <p className="text-xl font-black">
            25+
          </p>

          <p className="text-[10px] text-white/60">
            Years Experience
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          SLIDER DOTS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-40
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              activeSlide === index
                ? "true"
                : undefined
            }
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                activeSlide === index
                  ? "w-8 bg-teal-300"
                  : "w-2.5 bg-white/50 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          MOBILE EMERGENCY
      ====================================================== */}

      <a
        href="tel:+919575300110"
        className="
          absolute
          bottom-5
          right-4
          z-40
          flex
          items-center
          gap-2
          rounded-lg
          bg-red-600
          px-3
          py-2
          text-xs
          font-bold
          text-white
          shadow-xl
          transition
          hover:bg-red-700
          sm:hidden
        "
      >
        <Phone className="h-4 w-4" />

        Emergency
      </a>
    </section>
  );
}


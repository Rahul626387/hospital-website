
// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Quote,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";




// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//   },
  
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//   },
// ];
// const PatientTestimonials = () => {
//   return (
//      <section className="py-20 bg-green-50">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="text-center">

//             <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//               Patient Stories
//             </p>

//             <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//               What our patients say.
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//               Real experiences from patients and families who trusted our
//               healthcare team.
//             </p>

//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-4">

//             {testimonials.map((testimonial) => (

//               <motion.div
//                 key={testimonial.name}
//                 whileHover={{
//                   y: -6,
//                 }}
//                 className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
//               >

//                 <div className="flex items-center gap-4">

//                   <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-teal-50">

//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />

//                   </div>

//                   <div>

//                     <p className="font-black text-[#063B5C]">
//                       {testimonial.name}
//                     </p>

//                     <p className="mt-1 text-xs font-semibold text-[#0A7A78]">
//                       {testimonial.role}
//                     </p>

//                   </div>

//                 </div>

//                 <div className="mt-5 flex gap-1 text-yellow-400">
//                   {"★★★★★".split("").map((star, index) => (
//                     <span key={index}>{star}</span>
//                   ))}
//                 </div>

//                 <p className="mt-5 text-sm leading-7 text-slate-600">
//                   “{testimonial.text}”
//                 </p>

//                 {/* <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
//                   <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
//                   Verified Patient Experience
//                 </div> */}

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>
//   );
// };

// export default PatientTestimonials;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Quote,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//     gradient: "from-white to-teal-200",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//     gradient: "from-white to-blue-200",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//     gradient: "from-white to-green-200",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//     gradient: "from-white to-purple-200",
//   },
// ];

// const PatientTestimonials = () => {
//   return (
//     <section className="py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//             Patient Stories
//           </p>

//           <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//             What our patients say.
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//             Real experiences from patients and families who trusted our
//             healthcare team.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-6 md:grid-cols-4">
//           {testimonials.map((testimonial) => (
//             <motion.div
//               key={testimonial.name}
//               whileHover={{
//                 y: -6,
//               }}
//               className={`rounded-2xl border border-slate-100 bg-gradient-to-br ${testimonial.gradient} p-7 shadow-sm transition hover:shadow-xl`}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-teal-50">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     fill
//                     className="object-cover"
//                     sizes="64px"
//                   />
//                 </div>

//                 <div>
//                   <p className="font-black text-[#063B5C]">
//                     {testimonial.name}
//                   </p>

//                   <p className="mt-1 text-xs font-semibold text-[#0A7A78]">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex gap-1 text-yellow-400">
//                 {"★★★★★".split("").map((star, index) => (
//                   <span key={index}>{star}</span>
//                 ))}
//               </div>

//               <p className="mt-5 text-sm leading-7 text-slate-600">
//                 “{testimonial.text}”
//               </p>

//               {/* <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
//                 <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
//                 Verified Patient Experience
//               </div> */}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PatientTestimonials;


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//     gradient: "from-teal-50 via-white to-teal-100",
//     accent: "text-teal-600",
//     ring: "ring-teal-100",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//     gradient: "from-blue-50 via-white to-blue-100",
//     accent: "text-blue-600",
//     ring: "ring-blue-100",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//     gradient: "from-green-50 via-white to-green-100",
//     accent: "text-green-600",
//     ring: "ring-green-100",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//     gradient: "from-purple-50 via-white to-purple-100",
//     accent: "text-purple-600",
//     ring: "ring-purple-100",
//   },
// ];

// const PatientTestimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const next = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const variants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.9,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: (dir) => ({
//       x: dir > 0 ? -300 : 300,
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.4, ease: "easeIn" },
//     }),
//   };

//   const t = testimonials[current];

//   return (
//     <section className="py-20 bg-green-50 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//             Patient Stories
//           </p>
//           <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//             What our patients say.
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//             Real experiences from patients and families who trusted our
//             healthcare team.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative mt-16 mx-auto max-w-3xl">
//           {/* Decorative Quote */}
//           <Quote className="absolute -top-10 -left-6 h-20 w-20 text-[#0A7A78]/10" />

//           <div className="relative h-[380px] sm:h-[340px]">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={current}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className={`absolute inset-0 rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur`}
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>

//                 {/* Text */}
//                 <p className="mt-6 text-base sm:text-lg leading-8 text-slate-700 italic">
//                   “{t.text}”
//                 </p>

//                 {/* Divider */}
//                 <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div
//                     className={`relative h-16 w-16 overflow-hidden rounded-full ring-4 ${t.ring}`}
//                   >
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-black text-[#063B5C]">{t.name}</p>
//                     <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
//                       {t.role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="mt-8 flex items-center justify-center gap-4">
//             <button
//               onClick={prev}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > current ? 1 : -1);
//                     setCurrent(i);
//                   }}
//                   className={`h-2.5 rounded-full transition-all duration-300 ${
//                     i === current
//                       ? "w-8 bg-[#0A7A78]"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={next}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Next"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PatientTestimonials;


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//     gradient: "from-teal-50 via-white to-teal-100",
//     accent: "text-teal-600",
//     ring: "ring-teal-100",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//     gradient: "from-blue-50 via-white to-blue-100",
//     accent: "text-blue-600",
//     ring: "ring-blue-100",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//     gradient: "from-green-50 via-white to-green-100",
//     accent: "text-green-600",
//     ring: "ring-green-100",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//     gradient: "from-purple-50 via-white to-purple-100",
//     accent: "text-purple-600",
//     ring: "ring-purple-100",
//   },
// ];

// const PatientTestimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(3);

//   // Responsive: 1 / 2 / 3 cards
//   useEffect(() => {
//     const updateCards = () => {
//       const w = window.innerWidth;
//       if (w < 640) setCardsToShow(1);
//       else if (w < 1024) setCardsToShow(2);
//       else setCardsToShow(3);
//     };
//     updateCards();
//     window.addEventListener("resize", updateCards);
//     return () => window.removeEventListener("resize", updateCards);
//   }, []);

//   const maxIndex = Math.max(0, testimonials.length - cardsToShow);

//   // Reset current if out of range
//   useEffect(() => {
//     if (current > maxIndex) setCurrent(maxIndex);
//   }, [cardsToShow, current, maxIndex]);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 4500);
//     return () => clearInterval(timer);
//   }, [maxIndex]);

//   const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

//   return (
//     <section className="py-20 bg-green-50 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//             Patient Stories
//           </p>
//           <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//             What our patients say.
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//             Real experiences from patients and families who trusted our
//             healthcare team.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative mt-16">
//           {/* Decorative Quote */}
//           <Quote className="absolute -top-10 left-0 h-20 w-20 text-[#0A7A78]/10" />

//           <div className="overflow-hidden">
//             <motion.div
//               className="flex"
//               animate={{
//                 x: `-${current * (100 / cardsToShow)}%`,
//               }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//               {testimonials.map((t, i) => (
//                 <div
//                   key={i}
//                   className="shrink-0 px-3"
//                   style={{ width: `${100 / cardsToShow}%` }}
//                 >
//                   <div
//                     className={`h-full rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-7 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(6,59,92,0.25)]`}
//                   >
//                     {/* Stars */}
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="h-4 w-4 fill-yellow-400 text-yellow-400"
//                         />
//                       ))}
//                     </div>

//                     {/* Text */}
//                     <p className="mt-5 text-sm leading-7 text-slate-700 italic">
//                       “{t.text}”
//                     </p>

//                     {/* Divider */}
//                     <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

//                     {/* Author */}
//                     <div className="flex items-center gap-4">
//                       <div
//                         className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ${t.ring}`}
//                       >
//                         <Image
//                           src={t.image}
//                           alt={t.name}
//                           fill
//                           className="object-cover"
//                           sizes="56px"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-black text-[#063B5C]">{t.name}</p>
//                         <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
//                           {t.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Navigation */}
//           <div className="mt-10 flex items-center justify-center gap-4">
//             <button
//               onClick={prev}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`h-2.5 rounded-full transition-all duration-300 ${
//                     i === current
//                       ? "w-8 bg-[#0A7A78]"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={next}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Next"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PatientTestimonials;


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//     gradient: "from-teal-50 via-white to-teal-100",
//     accent: "text-teal-600",
//     ring: "ring-teal-100",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//     gradient: "from-blue-50 via-white to-blue-100",
//     accent: "text-blue-600",
//     ring: "ring-blue-100",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//     gradient: "from-green-50 via-white to-green-100",
//     accent: "text-green-600",
//     ring: "ring-green-100",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//     gradient: "from-purple-50 via-white to-purple-100",
//     accent: "text-purple-600",
//     ring: "ring-purple-100",
//   },
// ];

// const PatientTestimonials = () => {
//   const [index, setIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(3);
//   const [animate, setAnimate] = useState(true);

//   // Responsive
//   useEffect(() => {
//     const update = () => {
//       const w = window.innerWidth;
//       if (w < 640) setCardsToShow(1);
//       else if (w < 1024) setCardsToShow(2);
//       else setCardsToShow(3);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // Duplicate cards for infinite loop
//   const extended = [...testimonials, ...testimonials.slice(0, cardsToShow)];

//   const next = () => {
//     if (index >= testimonials.length) return;
//     setAnimate(true);
//     setIndex((prev) => prev + 1);
//   };

//   const prev = () => {
//     if (index <= 0) {
//       // Jump to end without animation
//       setAnimate(false);
//       setIndex(testimonials.length);
//       setTimeout(() => {
//         setAnimate(true);
//         setIndex(testimonials.length - 1);
//       }, 20);
//     } else {
//       setAnimate(true);
//       setIndex((prev) => prev - 1);
//     }
//   };

//   // Reset after reaching cloned set
//   useEffect(() => {
//     if (index === testimonials.length) {
//       const timer = setTimeout(() => {
//         setAnimate(false);
//         setIndex(0);
//         setTimeout(() => setAnimate(true), 20);
//       }, 600);
//       return () => clearTimeout(timer);
//     }
//   }, [index]);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       next();
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [index, cardsToShow]);

//   return (
//     <section className="py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//             Patient Stories
//           </p>
//           <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//             What our patients say.
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//             Real experiences from patients and families who trusted our
//             healthcare team.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative mt-16">
//           <Quote className="absolute -top-10 left-0 h-20 w-20 text-[#0A7A78]/10" />

//           <div className="overflow-hidden">
//             <motion.div
//               className="flex"
//               animate={{
//                 x: `-${index * (100 / cardsToShow)}%`,
//               }}
//               transition={
//                 animate
//                   ? { duration: 0.6, ease: "easeInOut" }
//                   : { duration: 0 }
//               }
//             >
//               {extended.map((t, i) => (
//                 <div
//                   key={i}
//                   className="shrink-0 px-3"
//                   style={{ width: `${100 / cardsToShow}%` }}
//                 >
//                   <div
//                     className={`h-full rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-7 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(6,59,92,0.25)]`}
//                   >
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="h-4 w-4 fill-yellow-400 text-yellow-400"
//                         />
//                       ))}
//                     </div>

//                     <p className="mt-5 text-sm leading-7 text-slate-700 italic">
//                       “{t.text}”
//                     </p>

//                     <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

//                     <div className="flex items-center gap-4">
//                       <div
//                         className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ${t.ring}`}
//                       >
//                         <Image
//                           src={t.image}
//                           alt={t.name}
//                           fill
//                           className="object-cover"
//                           sizes="56px"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-black text-[#063B5C]">{t.name}</p>
//                         <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
//                           {t.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Navigation */}
//           <div className="mt-10 flex items-center justify-center gap-4">
//             {/* <button
//               onClick={prev}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button> */}

//             <div className="flex gap-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setAnimate(true);
//                     setIndex(i);
//                   }}
//                   className={`h-2.5 rounded-full transition-all duration-300 ${
//                     i === index % testimonials.length
//                       ? "w-8 bg-[#0A7A78]"
//                       : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             {/* <button
//               onClick={next}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063B5C] shadow-sm transition hover:bg-[#0A7A78] hover:text-white"
//               aria-label="Next"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PatientTestimonials;


// "use client";

// import React from "react";
// import Image from "next/image";
// import { Star, Quote } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
//     gradient: "from-teal-50 via-white to-teal-100",
//     accent: "text-teal-600",
//     ring: "ring-teal-100",
//   },
//   {
//     name: "Neha Gupta",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
//     gradient: "from-blue-50 via-white to-blue-100",
//     accent: "text-blue-600",
//     ring: "ring-blue-100",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//     text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
//     gradient: "from-green-50 via-white to-green-100",
//     accent: "text-green-600",
//     ring: "ring-green-100",
//   },
//   {
//     name: "Anjali Verma",
//     role: "Patient",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
//     gradient: "from-purple-50 via-white to-purple-100",
//     accent: "text-purple-600",
//     ring: "ring-purple-100",
//   },
// ];

// const PatientTestimonials = () => {
//   return (
//     <section className="py-20 bg-green-50 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
//             Patient Stories
//           </p>
//           <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//             What our patients say.
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//             Real experiences from patients and families who trusted our
//             healthcare team.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative mt-16">
//           <Quote className="absolute -top-10 left-0 h-20 w-20 text-[#0A7A78]/10 z-10" />

//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             spaceBetween={24}
//             loop={true}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             navigation={true}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               640: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//             className="!pb-16 patient-swiper"
//           >
//             {testimonials.map((t, i) => (
//               <SwiperSlide key={i} className="!h-auto">
//                 <div
//                   className={`h-full rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-7 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(6,59,92,0.25)]`}
//                 >
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-4 w-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>

//                   <p className="mt-5 text-sm leading-7 text-slate-700 italic">
//                     “{t.text}”
//                   </p>

//                   <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ${t.ring}`}
//                     >
//                       <Image
//                         src={t.image}
//                         alt={t.name}
//                         fill
//                         className="object-cover"
//                         sizes="56px"
//                       />
//                     </div>
//                     <div>
//                       <p className="font-black text-[#063B5C]">{t.name}</p>
//                       <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
//                         {t.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Custom Swiper Styles */}
//       <style jsx global>{`
//         .patient-swiper .swiper-button-next,
//         .patient-swiper .swiper-button-prev {
//           width: 44px;
//           height: 44px;
//           border-radius: 9999px;
//           background: white;
//           border: 1px solid #e2e8f0;
//           color: #063b5c;
//           box-shadow: 0 4px 12px rgba(6, 59, 92, 0.08);
//           transition: all 0.3s ease;
//         }

//         .patient-swiper .swiper-button-next:hover,
//         .patient-swiper .swiper-button-prev:hover {
//           background: #0a7a78;
//           color: white;
//         }

//         .patient-swiper .swiper-button-next::after,
//         .patient-swiper .swiper-button-prev::after {
//           font-size: 16px;
//           font-weight: 900;
//         }

//         .patient-swiper .swiper-pagination-bullet {
//           background: #cbd5e1;
//           opacity: 1;
//           width: 10px;
//           height: 10px;
//           transition: all 0.3s ease;
//         }

//         .patient-swiper .swiper-pagination-bullet-active {
//           background: #0a7a78;
//           width: 32px;
//           border-radius: 9999px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PatientTestimonials;


"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
    gradient: "from-teal-50 via-white to-teal-100",
    accent: "text-teal-600",
    ring: "ring-teal-100",
  },
  {
    name: "Neha Gupta",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
    gradient: "from-blue-50 via-white to-blue-100",
    accent: "text-blue-600",
    ring: "ring-blue-100",
  },
  {
    name: "Arjun Patel",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
    gradient: "from-green-50 via-white to-green-100",
    accent: "text-green-600",
    ring: "ring-green-100",
  },
  {
    name: "Anjali Verma",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "I am grateful to the entire healthcare team for their kindness and dedication. Every member of the staff made me feel safe and well cared for.",
    gradient: "from-purple-50 via-white to-purple-100",
    accent: "text-purple-600",
    ring: "ring-purple-100",
  },
];

const PatientTestimonials = () => {
  return (
    <section className="py-20 bg-green-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-widest text-[#0A7A78]">
            Patient Stories
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
            What our patients say.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Real experiences from patients and families who trusted our
            healthcare team.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-16">
          <Quote className="absolute -top-10 left-0 h-20 w-20 text-[#0A7A78]/10 z-10" />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14 patient-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div
                  className={`h-full rounded-3xl border border-white/60 bg-gradient-to-br ${t.gradient} p-7 shadow-[0_20px_60px_-15px_rgba(6,59,92,0.15)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(6,59,92,0.25)]`}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-700 italic">
                    “{t.text}”
                  </p>

                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                  <div className="flex items-center gap-4">
                    <div
                      className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ${t.ring}`}
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-black text-[#063B5C]">{t.name}</p>
                      <p className={`mt-1 text-xs font-semibold ${t.accent}`}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .patient-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .patient-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .patient-swiper .swiper-pagination-bullet-active {
          background: #0a7a78;
          width: 32px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default PatientTestimonials;
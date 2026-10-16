// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   ChevronRight,
//   ShieldPlus,
//   UsersRound,
//   HeartPulse,
//   ArrowRight,
// } from "lucide-react";

// export default function EventsHero({ events = [] }) {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#063B5C] text-white">
//       {/* Background Gradient */}
//       <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[#063B5C] via-[#087B91] to-[#052A3D]" />

//       {/* Glow Effects */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]" />
//         <div className="absolute right-[25%] top-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />
//         <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-teal-300/10 blur-[80px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-7 sm:px-6 sm:pb-16 sm:pt-9 lg:px-8 lg:pb-16">
//         <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -22 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative z-10"
//           >
//             {/* Breadcrumb */}
//             <div className="mb-4 flex items-center gap-2 text-xs sm:text-sm">
//               <Link
//                 href="/"
//                 className="text-slate-300 transition hover:text-white"
//               >
//                 Home
//               </Link>

//               <ChevronRight className="h-4 w-4 text-slate-400" />

//               <span className="font-semibold text-cyan-300">
//                 Events
//               </span>
//             </div>

//             {/* Badge */}
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3.5 py-2 text-[11px] font-bold text-cyan-100 backdrop-blur-sm sm:text-xs">
//               <CalendarDays className="h-4 w-4 text-cyan-300" />
//               Hospital Camps & Community Events
//             </div>

//             {/* Heading */}
//             <h1 className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
//               Health Camps for a
//               <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-[#4DD4C6] to-cyan-200 bg-clip-text text-transparent">
//                 Healthier Tomorrow
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
//               Join our hospital health camps, free checkups, expert
//               consultations and awareness programs for you and your family.
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link
//                 href="#events-list"
//                 className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#063B5C] shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
//               >
//                 Explore Events
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="#events-list"
//                 className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300 hover:bg-white/10"
//               >
//                 <CalendarDays className="h-4 w-4 text-cyan-300" />
//                 View Schedule
//               </Link>
//             </div>

//             {/* Benefits */}
//             <div className="mt-7 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-3">
//               <Benefit
//                 icon={ShieldPlus}
//                 title="Free Health Checkups"
//                 subtitle="For All Age Groups"
//               />

//               <Benefit
//                 icon={UsersRound}
//                 title="Expert Doctors"
//                 subtitle="Guidance & Support"
//               />

//               <Benefit
//                 icon={HeartPulse}
//                 title="Community Wellness"
//                 subtitle="Stronger Together"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 18, scale: 0.98 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="relative min-w-0"
//           >
//             {/* <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[330px] lg:h-[390px] lg:rounded-3xl">
//               <img
//                 src="/assets/hospital-camp-doctor.png"
//                 alt="Doctor consulting a patient at a healthcare facility"
//                 className="h-full w-full object-cover object-center"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#052A3D]/45 via-transparent to-transparent" />

             
//               <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#063B5C]/65 p-3.5 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300/15">
//                     <HeartPulse className="h-5 w-5 text-cyan-300" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-bold text-white sm:text-base">
//                       Better Health Together
//                     </p>
//                     <p className="mt-1 text-xs text-slate-200">
//                       Compassionate care for every community
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0">
//         <svg
//           viewBox="0 0 1440 50"
//           className="block h-6 w-full sm:h-8"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path
//             fill="#ffffff"
//             d="M0,30 C240,50 420,5 720,25 C1020,45 1200,8 1440,28 L1440,50 L0,50 Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

// function Benefit({ icon: Icon, title, subtitle }) {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 sm:h-11 sm:w-11">
//         <Icon className="h-5 w-5 text-cyan-300" />
//       </div>

//       <div>
//         <p className="text-xs font-bold text-white sm:text-sm">
//           {title}
//         </p>
//         <p className="mt-1 text-xs text-slate-300">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// const EventsHero = () => {
//   return (
//     <section className="relative w-full min-h-[85vh] bg-gradient-to-br from-[#0A2540] via-[#0F4C5C] to-[#1A7A8A] flex items-center px-[5%] lg:px-[8%] overflow-hidden text-white font-sans">
      
//       {/* --- Left Content Area --- */}
//       <div className="relative z-10 w-full lg:w-[55%] flex flex-col items-start pb-20 lg:pb-24">
        
//         {/* Breadcrumbs */}
//         <div className="text-sm text-gray-400 mb-6 font-medium tracking-wide">
//           Home &nbsp;&gt;&nbsp; <span className="text-[#00E5FF]">Events</span>
//         </div>

//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-4 py-2 rounded-full text-sm font-medium text-gray-200 mb-6 backdrop-blur-sm">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//             <line x1="16" y1="2" x2="16" y2="6"></line>
//             <line x1="8" y1="2" x2="8" y2="6"></line>
//             <line x1="3" y1="10" x2="21" y2="10"></line>
//           </svg>
//           Hospital Camps & Community Events
//         </div>

//         {/* Typography */}
//         <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6">
//           Health Camps for a <br />
//           <span className="text-[#00E5FF]">Healthier Tomorrow</span>
//         </h1>

//         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-[90%] lg:max-w-[80%]">
//           Join our hospital health camps, free checkups, expert consultations and awareness programs for you and your family.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap items-center gap-5 mb-14">
//           <button className="flex items-center gap-2 bg-[#00E5FF] text-[#0A2540] px-7 py-3.5 rounded-full font-semibold transition hover:bg-[#00cce6] hover:scale-105 active:scale-95">
//             Explore Events
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </button>
          
//           <button className="flex items-center gap-2 bg-transparent text-white border border-white/40 px-7 py-3.5 rounded-full font-medium transition hover:bg-white/10 hover:border-white/60">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//               <line x1="16" y1="2" x2="16" y2="6"></line>
//               <line x1="8" y1="2" x2="8" y2="6"></line>
//               <line x1="3" y1="10" x2="21" y2="10"></line>
//             </svg>
//             View Schedule
//           </button>
//         </div>

//         {/* Features List */}
//         <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
//           <div className="flex items-center gap-3">
//             <div className="w-11 h-11 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex justify-center items-center text-[#00E5FF]">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                 <path d="M12 8v8"></path>
//                 <path d="M8 12h8"></path>
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold">Free Health Checkups</h4>
//               <p className="text-xs text-gray-400">For All Age Groups</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="w-11 h-11 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex justify-center items-center text-[#00E5FF]">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold">Expert Doctors</h4>
//               <p className="text-xs text-gray-400">Guidance & Support</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="w-11 h-11 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex justify-center items-center text-[#00E5FF]">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold">Community Wellness</h4>
//               <p className="text-xs text-gray-400">Stronger Together</p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* --- Right Image Area --- */}
//       <div className="hidden lg:block absolute right-0 bottom-0 w-[55%] h-full z-0">
//         {/* Replace the src below with your actual transparent PNG or high-quality image */}
//         <img 
//           src="/assets/images/awrd5.png" 
//           // src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//           alt="Doctor consulting a patient" 
//           className="w-full h-full object-cover object-left"
//           style={{
//             WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
//             maskImage: 'linear-gradient(to right, transparent 0%, black 40%)'
//           }}
//         />
//       </div>

//       {/* --- Bottom Wave Shape --- */}
//       <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
//         <svg 
//           className="relative block w-[calc(100%+1.3px)] h-[80px]" 
//           data-name="Layer 1" 
//           xmlns="http://www.w3.org/2000/svg" 
//           viewBox="0 0 1200 120" 
//           preserveAspectRatio="none"
//         >
//           <path 
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,150.73,120.19,224.3,101.2,256.89,93.1,288.62,74.74,321.39,56.44Z" 
//             className="fill-white"
//           ></path>
//         </svg>
//       </div>

//     </section>
//   )
// }

// export default EventsHero



// import React from "react";

// const EventsHero = () => {
//   return (
//     <section className="relative isolate w-full min-h-[540px] lg:min-h-[500px] bg-gradient-to-br from-[#0A2540] via-[#0F4C5C] to-[#1A7A8A] flex items-center px-5 sm:px-[5%] lg:px-[7%] overflow-hidden text-white font-sans">

//       {/* Background Image */}
//       <div className="hidden lg:block absolute right-0 top-0 w-[48%] h-full z-0">
//         <img
//           src="/assets/images/awrd5.png"
//           alt="Doctor consulting a patient"
//           className="w-full h-full object-cover object-center"
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(to right, transparent 0%, black 35%)",
//             maskImage:
//               "linear-gradient(to right, transparent 0%, black 35%)",
//           }}
//         />
//       </div>

//       {/* Left Content */}
//       <div className="relative z-10 w-full lg:w-[58%] flex flex-col items-start py-12 lg:py-14">

//         {/* Breadcrumb */}
//         <div className="text-xs sm:text-sm text-gray-300 mb-4 font-medium">
//           Home <span className="mx-2">&gt;</span>
//           <span className="text-[#00E5FF]">Events</span>
//         </div>

//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-100 mb-5">
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect x="3" y="4" width="18" height="18" rx="2" />
//             <line x1="16" y1="2" x2="16" y2="6" />
//             <line x1="8" y1="2" x2="8" y2="6" />
//             <line x1="3" y1="10" x2="21" y2="10" />
//           </svg>
//           Hospital Camps & Community Events
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-4 max-w-[600px]">
//           Health Camps for a
//           <br />
//           <span className="text-[#00E5FF]">
//             Healthier Tomorrow
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 max-w-[470px]">
//           Join our hospital health camps, free checkups, expert
//           consultations and awareness programs for you and your family.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap items-center gap-3 mb-8">
//           <a
//             href="#events"
//             className="inline-flex items-center gap-2 bg-[#00E5FF] text-[#0A2540] px-5 py-3 rounded-full text-sm font-semibold transition hover:bg-[#00cce6] hover:-translate-y-0.5"
//           >
//             Explore Events
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M5 12h14" />
//               <path d="m12 5 7 7-7 7" />
//             </svg>
//           </a>

//           <a
//             href="#events"
//             className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full text-sm font-medium transition hover:bg-white/10"
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <rect x="3" y="4" width="18" height="18" rx="2" />
//               <line x1="16" y1="2" x2="16" y2="6" />
//               <line x1="8" y1="2" x2="8" y2="6" />
//               <line x1="3" y1="10" x2="21" y2="10" />
//             </svg>
//             View Schedule
//           </a>
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full max-w-[680px]">

//           {/* Feature 1 */}
//           <div className="flex items-center gap-2.5">
//             <div className="w-10 h-10 shrink-0 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF]">
//               <svg
//                 width="19"
//                 height="19"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                 <path d="M12 8v8" />
//                 <path d="M8 12h8" />
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-xs sm:text-sm font-semibold">
//                 Free Health Checkups
//               </h4>
//               <p className="text-[11px] text-gray-300 mt-0.5">
//                 For All Age Groups
//               </p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="flex items-center gap-2.5">
//             <div className="w-10 h-10 shrink-0 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF]">
//               <svg
//                 width="19"
//                 height="19"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-xs sm:text-sm font-semibold">
//                 Expert Doctors
//               </h4>
//               <p className="text-[11px] text-gray-300 mt-0.5">
//                 Guidance & Support
//               </p>
//             </div>
//           </div>

//           {/* Feature 3 */}
//           <div className="flex items-center gap-2.5">
//             <div className="w-10 h-10 shrink-0 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF]">
//               <svg
//                 width="19"
//                 height="19"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-xs sm:text-sm font-semibold">
//                 Community Wellness
//               </h4>
//               <p className="text-[11px] text-gray-300 mt-0.5">
//                 Stronger Together
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
//         <svg
//           className="relative block w-full h-[35px] sm:h-[45px]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,150.73,120.19,224.3,101.2,256.89,93.1,288.62,74.74,321.39,56.44Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//     </section>
//   );
// };

// export default EventsHero;




import React from "react";

const EventsHero = () => {
  return (
    <section className="relative isolate w-full min-h-[540px] lg:min-h-[560px] bg-[#063B5C] flex items-center px-5 sm:px-[5%] lg:px-[7%] overflow-hidden text-white font-sans">

      {/* Background Effects - Same as Awards Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#063B5C] via-[#0A7A78] to-[#052A3D]" />

        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#4DD4C6]/20 blur-[110px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052A3D]/20 via-transparent to-[#052A3D]/20" />
      </div>

      {/* Background Image - Unchanged */}
      <div className="hidden lg:block absolute right-0 top-0 w-[55%] h-full z-0">
        <img
          src="/assets/images/camp2.png"
          alt="Doctor consulting a patient"
          className="w-full h-full object-cover object-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 35%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 35%)",
          }}
        />
      </div>

      {/* Left Content - Unchanged */}
      <div className="relative z-10 w-full lg:w-[58%] flex flex-col items-start py-12 lg:py-14">

        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-300 mb-4 font-medium">
          Discover <span className="mx-2">&gt;</span>
          <span className="text-[#4DD4C6]">Events</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#4DD4C6]/30 bg-white/10 px-3 py-1.5 rounded-full text-xs sm:text-sm text-[#4DD4C6] mb-5 shadow-sm backdrop-blur-md">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Hospital Camps & Community Events
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-4 max-w-[600px]">
          Health Camps for a
          <br />
          <span className="bg-gradient-to-r from-[#4DD4C6] via-white to-cyan-200 bg-clip-text text-transparent">
            Healthier Tomorrow
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 max-w-[470px]">
          Join our hospital health camps, free checkups, expert
          consultations and awareness programs for you and your family.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href="#events"
            className="inline-flex items-center gap-2 bg-[#4DD4C6] text-[#063B5C] px-5 py-3 rounded-lg text-sm font-bold shadow-lg shadow-[#4DD4C6]/25 transition-all duration-300 hover:bg-[#5EE0D2] hover:-translate-y-0.5"
          >
            Explore Events
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href="#events"
            className="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white px-5 py-3 rounded-lg text-sm font-bold shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            View Schedule
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full max-w-[680px]">

          {/* Feature 1 */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 shrink-0 rounded-full border border-[#4DD4C6]/30 bg-white/10 flex items-center justify-center text-[#4DD4C6]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold">
                Free Health Checkups
              </h4>
              <p className="text-[11px] text-white/60 mt-0.5">
                For All Age Groups
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 shrink-0 rounded-full border border-[#4DD4C6]/30 bg-white/10 flex items-center justify-center text-[#4DD4C6]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold">
                Expert Doctors
              </h4>
              <p className="text-[11px] text-white/60 mt-0.5">
                Guidance & Support
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 shrink-0 rounded-full border border-[#4DD4C6]/30 bg-white/10 flex items-center justify-center text-[#4DD4C6]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold">
                Community Wellness
              </h4>
              <p className="text-[11px] text-white/60 mt-0.5">
                Stronger Together
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave - Same SVG Design as Awards Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="block h-auto w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M0,40 C240,65 420,8 720,30 C1020,52 1190,8 1440,34 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

    </section>
  );
};

export default EventsHero;


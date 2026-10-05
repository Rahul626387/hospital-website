// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   CheckCircle2,
//   HeartPulse,
//   Mail,
//   MapPin,
//   Users,
//   GraduationCap,
//   ShieldCheck,
// } from "lucide-react";

// const jobs = [
//   {
//     title: "Senior Resident – Cardiology",
//     department: "Cardiology",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "2+ Years",
//   },
//   {
//     title: "Staff Nurse",
//     department: "Nursing",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "1+ Years",
//   },
//   {
//     title: "Medical Officer",
//     department: "Emergency",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "2+ Years",
//   },
//   {
//     title: "Lab Technician",
//     department: "Diagnostics",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "1+ Years",
//   },
// ];

// const benefits = [
//   {
//     icon: HeartPulse,
//     title: "Meaningful Work",
//     description:
//       "Make a real difference in the lives of patients and their families.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Learning & Growth",
//     description:
//       "Continuous learning opportunities, training and professional development.",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Culture",
//     description:
//       "Work alongside experienced doctors, nurses and healthcare professionals.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Supportive Environment",
//     description:
//       "A professional and respectful workplace focused on employee wellbeing.",
//   },
// ];

// const Careerpage = () => {
//   return (
//     <main className="bg-white text-slate-900">

//       {/* ================================================= */}
//       {/* HERO */}
//       {/* ================================================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#063f45] via-[#075e63] to-[#0a7a78]">
//         <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
//         <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
//           <div className="max-w-3xl">

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
//             >
//               <BriefcaseBusiness className="h-4 w-4" />
//               Careers at Our Hospital
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Build Your Career
//               <span className="block text-cyan-200">
//                 With Us.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
//             >
//               Join a team of passionate healthcare professionals committed
//               to delivering compassionate, safe and quality patient care.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="mt-8 flex flex-col gap-3 sm:flex-row"
//             >
//               <a
//                 href="#openings"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#075e63] transition hover:bg-cyan-50"
//               >
//                 View Open Positions
//                 <ArrowRight className="h-4 w-4" />
//               </a>

//               <a
//                 href="#apply"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
//               >
//                 Send Your Resume
//               </a>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ================================================= */}
//       {/* WHY JOIN US */}
//       {/* ================================================= */}
//       <section className="py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="max-w-2xl">
//             <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0a7a78]">
//               Why Join Us
//             </p>

//             <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//               Grow with a team that
//               <span className="text-[#0a7a78]"> cares.</span>
//             </h2>

//             <p className="mt-5 leading-7 text-slate-600">
//               We believe great healthcare begins with great people. Our
//               workplace encourages collaboration, learning and excellence
//               while keeping patients at the heart of everything we do.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {benefits.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.08 }}
//                   className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#0a7a78]/30 hover:shadow-xl hover:shadow-slate-200/50"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a7a78]/10 text-[#0a7a78]">
//                     <Icon className="h-6 w-6" />
//                   </div>

//                   <h3 className="mt-5 text-lg font-bold">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-slate-600">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//       {/* ================================================= */}
//       {/* OPEN POSITIONS */}
//       {/* ================================================= */}
//       <section
//         id="openings"
//         className="bg-slate-50 py-20 sm:py-24"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0a7a78]">
//                 Opportunities
//               </p>

//               <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
//                 Current Openings
//               </h2>

//               <p className="mt-3 max-w-xl text-slate-600">
//                 Explore our current opportunities and find a role where
//                 your skills can make a difference.
//               </p>
//             </div>

//             <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
//               {jobs.length} Open Positions
//             </div>
//           </div>

//           <div className="mt-10 space-y-4">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={job.title}
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#0a7a78]/30 hover:shadow-lg sm:p-6"
//               >
//                 <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
//                       {job.title}
//                     </h3>

//                     <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
//                       <span className="rounded-full bg-slate-100 px-3 py-1">
//                         {job.department}
//                       </span>

//                       <span className="flex items-center gap-1">
//                         <MapPin className="h-4 w-4" />
//                         {job.location}
//                       </span>

//                       <span>{job.type}</span>

//                       <span>{job.experience}</span>
//                     </div>
//                   </div>

//                   <Link
//                     href="#apply"
//                     className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0a7a78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#075e63]"
//                   >
//                     Apply Now
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>

//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================================================= */}
//       {/* WHAT WE LOOK FOR */}
//       {/* ================================================= */}
//       <section className="py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid items-center gap-12 lg:grid-cols-2">

//             <div>
//               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0a7a78]">
//                 Our People
//               </p>

//               <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
//                 We look for people who
//                 <span className="text-[#0a7a78]"> care.</span>
//               </h2>

//               <p className="mt-5 leading-7 text-slate-600">
//                 Whether you are an experienced healthcare professional or
//                 beginning your career, we value people who demonstrate
//                 compassion, integrity and a commitment to excellence.
//               </p>

//               <div className="mt-8 space-y-4">
//                 {[
//                   "Patient-first approach",
//                   "Strong communication and teamwork",
//                   "Professional integrity",
//                   "Commitment to continuous learning",
//                   "Passion for quality healthcare",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0a7a78]" />
//                     <span className="font-medium text-slate-700">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#075e63] to-[#0a7a78] p-8 text-white sm:p-10">
//               <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

//               <BriefcaseBusiness className="relative h-12 w-12 text-cyan-200" />

//               <h3 className="relative mt-8 text-2xl font-black">
//                 Your next opportunity could start here.
//               </h3>

//               <p className="relative mt-4 leading-7 text-white/75">
//                 We are always interested in meeting talented people who
//                 want to contribute to better healthcare.
//               </p>

//               <a
//                 href="#apply"
//                 className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#075e63]"
//               >
//                 Explore Opportunities
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ================================================= */}
//       {/* APPLY CTA */}
//       {/* ================================================= */}
//       <section
//         id="apply"
//         className="border-t border-slate-200 bg-[#f4fbfa] py-20"
//       >
//         <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a7a78]/10 text-[#0a7a78]">
//             <Mail className="h-7 w-7" />
//           </div>

//           <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a78]">
//             Don't See Your Role?
//           </p>

//           <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
//             Send us your resume
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
//             Even if your ideal position is not currently listed, you can
//             share your resume with our HR team for future opportunities.
//           </p>

//           <a
//             href="mailto:careers@yourhospital.com"
//             className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0a7a78] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0a7a78]/20 transition hover:bg-[#075e63]"
//           >
//             <Mail className="h-4 w-4" />
//             careers@yourhospital.com
//           </a>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default Careerpage;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   CheckCircle2,
//   ChevronDown,
//   Clock3,
//   GraduationCap,
//   HeartPulse,
//   Mail,
//   MapPin,
//   ShieldCheck,
//   Sparkles,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const benefits = [
//   {
//     icon: HeartPulse,
//     title: "Meaningful Work",
//     description:
//       "Make a real difference in the lives of patients and their families through compassionate healthcare.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Learning & Growth",
//     description:
//       "Build your knowledge and skills through continuous learning, training and development opportunities.",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Culture",
//     description:
//       "Work alongside experienced doctors, nurses and healthcare professionals as one team.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Supportive Environment",
//     description:
//       "A respectful and professional workplace where people are encouraged to grow and contribute.",
//   },
// ];

// const jobs = [
//   {
//     title: "Senior Resident – Cardiology",
//     department: "Cardiology",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "2+ Years",
//   },
//   {
//     title: "Staff Nurse",
//     department: "Nursing",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "1+ Years",
//   },
//   {
//     title: "Medical Officer",
//     department: "Emergency Medicine",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "2+ Years",
//   },
//   {
//     title: "Lab Technician",
//     department: "Diagnostics",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "1+ Years",
//   },
//   {
//     title: "Pharmacist",
//     department: "Pharmacy",
//     location: "Jabalpur",
//     type: "Full Time",
//     experience: "1+ Years",
//   },
// ];

// const faqs = [
//   {
//     question: "How can I apply for a position?",
//     answer:
//       "You can apply directly for an available position using the Apply Now button. You can also send your updated resume to our HR team.",
//   },
//   {
//     question: "Can I apply if my preferred position is not listed?",
//     answer:
//       "Yes. You can share your resume with our HR team. Your profile may be considered for suitable future opportunities.",
//   },
//   {
//     question: "Do you offer opportunities for freshers?",
//     answer:
//       "Opportunities may be available for fresh graduates and early-career professionals depending on current requirements.",
//   },
//   {
//     question: "What documents should I submit?",
//     answer:
//       "Typically, applicants should provide an updated resume and relevant educational or professional documents when requested.",
//   },
// ];

// /* =========================================================
//    ANIMATION
// ========================================================= */

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// /* =========================================================
//    COMPONENT
// ========================================================= */

// const Careerpage = () => {
//   const [openFaq, setOpenFaq] = useState(0);

//   return (
//     <main className="overflow-hidden bg-white text-slate-900">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#f3fbfa]">

//         {/* Background decoration */}
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0A7A78]/10 blur-3xl" />

//         <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-100/70 blur-3xl" />

//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

//           {/* LEFT */}

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="relative z-10"
//           >

//             <motion.div
//               variants={fadeUp}
//               className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A7A78]/15 bg-white px-4 py-2 text-sm font-bold text-[#0A7A78] shadow-sm"
//             >
//               <BriefcaseBusiness className="h-4 w-4" />

//               Careers
//             </motion.div>

//             <motion.h1
//               variants={fadeUp}
//               className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-[68px]"
//             >
//               Build a Career

//               <span className="block text-[#0A7A78]">
//                 That Makes a Difference.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
//             >
//               Join a team of dedicated healthcare professionals working
//               together to deliver compassionate, innovative and
//               patient-focused care.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="mt-8 flex flex-col gap-3 sm:flex-row"
//             >
//               <a
//                 href="#jobs"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A7A78]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#075e63]"
//               >
//                 Explore Opportunities

//                 <ArrowRight className="h-4 w-4" />
//               </a>

//               <a
//                 href="#culture"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition duration-300 hover:border-[#0A7A78]/30 hover:text-[#0A7A78]"
//               >
//                 Life at Our Hospital
//               </a>
//             </motion.div>

//             {/* Trust */}

//             <motion.div
//               variants={fadeUp}
//               className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-slate-200 pt-7"
//             >

//               <div>
//                 <p className="text-2xl font-black text-slate-950">
//                   500+
//                 </p>

//                 <p className="mt-1 text-xs font-medium text-slate-500">
//                   Healthcare Professionals
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-black text-slate-950">
//                   25+
//                 </p>

//                 <p className="mt-1 text-xs font-medium text-slate-500">
//                   Departments
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-black text-slate-950">
//                   24/7
//                 </p>

//                 <p className="mt-1 text-xs font-medium text-slate-500">
//                   Patient Care
//                 </p>
//               </div>

//             </motion.div>

//           </motion.div>

//           {/* RIGHT IMAGE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.96,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="relative"
//           >

//             <div className="relative overflow-hidden rounded-[32px]">

//               <Image
//                 src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
//                 alt="Healthcare professionals"
//                 width={900}
//                 height={900}
//                 unoptimized
//                 className="h-[440px] w-full object-cover sm:h-[520px]"
//               />

//               {/* Overlay */}

//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

//             </div>

//             {/* Floating card */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.6,
//                 duration: 0.5,
//               }}
//               className="absolute -bottom-6 left-4 rounded-2xl border border-white bg-white p-4 shadow-2xl sm:left-8 sm:p-5"
//             >

//               <div className="flex items-center gap-3">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                   <HeartPulse className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-sm font-black text-slate-900">
//                     People First
//                   </p>

//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Patients & Employees
//                   </p>
//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>

//         </div>
//       </section>

      


//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="border-y border-slate-200 bg-white">

//         <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

//           {[
//             ["500+", "Team Members"],
//             ["25+", "Departments"],
//             ["100+", "Specialists"],
//             ["24/7", "Patient Care"],
//           ].map(([number, label], index) => (

//             <div
//               key={label}
//               className={`px-5 py-9 text-center ${
//                 index !== 3
//                   ? "border-r border-slate-200"
//                   : ""
//               }`}
//             >

//               <p className="text-3xl font-black tracking-tight text-[#0A7A78] sm:text-4xl">
//                 {number}
//               </p>

//               <p className="mt-2 text-sm font-medium text-slate-500">
//                 {label}
//               </p>

//             </div>

//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           WHY JOIN
//       ===================================================== */}

//       <section className="py-20 sm:py-24">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             variants={fadeUp}
//             className="mx-auto max-w-3xl text-center"
//           >

//             <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0A7A78]">
//               Why Join Us
//             </p>

//             <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
//               Grow with a team that
//               <span className="text-[#0A7A78]">
//                 {" "}cares.
//               </span>
//             </h2>

//             <p className="mt-5 leading-8 text-slate-600">
//               We believe great healthcare begins with great people.
//               Our workplace encourages collaboration, learning and
//               excellence while keeping patients at the heart of
//               everything we do.
//             </p>

//           </motion.div>


//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             variants={stagger}
//             className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
//           >

//             {benefits.map((item) => {

//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   variants={fadeUp}
//                   className="group border-t border-slate-200 pt-7"
//                 >

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] transition duration-300 group-hover:bg-[#0A7A78] group-hover:text-white">
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <h3 className="mt-5 text-lg font-black text-slate-900">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>

//                 </motion.div>
//               );
//             })}

//           </motion.div>

//         </div>

//       </section>


//       {/* =====================================================
//           LIFE AT HOSPITAL
//       ===================================================== */}

//       <section
//         id="culture"
//         className="bg-[#f5faf9] py-20 sm:py-24"
//       >

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid items-center gap-12 lg:grid-cols-2">

//             {/* Images */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="relative"
//             >

//               <div className="grid grid-cols-2 gap-4">

//                 <div className="overflow-hidden rounded-3xl">
//                   <Image
//                     src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
//                     alt="Hospital healthcare team"
//                     width={700}
//                     height={900}
//                     unoptimized
//                     className="h-[390px] w-full object-cover transition duration-700 hover:scale-105"
//                   />
//                 </div>

//                 <div className="mt-10 overflow-hidden rounded-3xl">
//                   <Image
//                     src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg"
//                     alt="Medical professionals"
//                     width={700}
//                     height={900}
//                     unoptimized
//                     className="h-[390px] w-full object-cover transition duration-700 hover:scale-105"
//                   />
//                 </div>

//               </div>

//               {/* Small badge */}

//               <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-xl">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                     <Users className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-black">
//                       One Team
//                     </p>

//                     <p className="text-xs text-slate-500">
//                       One Purpose
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </motion.div>


//             {/* Content */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//             >

//               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0A7A78]">
//                 Life at Our Hospital
//               </p>

//               <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
//                 More than a workplace.
//                 <span className="block text-[#0A7A78]">
//                   A place to belong.
//                 </span>
//               </h2>

//               <p className="mt-5 leading-8 text-slate-600">
//                 Healthcare is a team effort. We create an environment
//                 where every member of our team has the opportunity to
//                 learn, contribute and make a meaningful impact.
//               </p>

//               <div className="mt-8 space-y-4">

//                 {[
//                   "Respectful and inclusive workplace",
//                   "Professional development opportunities",
//                   "Cross-functional collaboration",
//                   "Patient-centered culture",
//                   "Recognition of individual contribution",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >

//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />

//                     <span className="text-sm font-semibold text-slate-700">
//                       {item}
//                     </span>

//                   </div>

//                 ))}

//               </div>

//             </motion.div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CAREER GROWTH
//       ===================================================== */}

//       <section className="py-20 sm:py-24">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mx-auto max-w-3xl text-center">

//             <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0A7A78]">
//               Career Growth
//             </p>

//             <h2 className="mt-3 text-3xl font-black sm:text-4xl">
//               Grow with every step
//             </h2>

//             <p className="mt-4 leading-7 text-slate-600">
//               Build your career through experience, collaboration,
//               learning and continuous professional development.
//             </p>

//           </div>


//           <div className="relative mt-14">

//             {/* Line */}

//             <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 md:left-1/2 md:block" />

//             {[
//               {
//                 number: "01",
//                 title: "Join the Team",
//                 text: "Start your journey with a team committed to quality healthcare.",
//               },
//               {
//                 number: "02",
//                 title: "Learn & Develop",
//                 text: "Expand your clinical, technical and professional skills.",
//               },
//               {
//                 number: "03",
//                 title: "Take Responsibility",
//                 text: "Grow through meaningful responsibilities and teamwork.",
//               },
//               {
//                 number: "04",
//                 title: "Make an Impact",
//                 text: "Use your experience to improve patient care and inspire others.",
//               },
//             ].map((item, index) => (

//               <motion.div
//                 key={item.number}
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: index * 0.1,
//                 }}
//                 className={`relative mb-10 flex md:mb-0 md:w-1/2 ${
//                   index % 2 === 0
//                     ? "md:pr-12"
//                     : "md:ml-auto md:pl-12"
//                 }`}
//               >

//                 <div className="flex gap-5">

//                   <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A7A78] text-xs font-black text-white ring-8 ring-white">
//                     {item.number}
//                   </div>

//                   <div className="pb-4">

//                     <h3 className="text-xl font-black">
//                       {item.title}
//                     </h3>

//                     <p className="mt-2 text-sm leading-7 text-slate-600">
//                       {item.text}
//                     </p>

//                   </div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           JOBS
//       ===================================================== */}

//       <section
//         id="jobs"
//         className="bg-slate-50 py-20 sm:py-24"
//       >

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

//             <div>

//               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0A7A78]">
//                 Opportunities
//               </p>

//               <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
//                 Find Your Next Opportunity
//               </h2>

//               <p className="mt-4 max-w-2xl leading-7 text-slate-600">
//                 Explore current opportunities across clinical,
//                 nursing, administrative and support teams.
//               </p>

//             </div>

//             <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
//               <BriefcaseBusiness className="h-4 w-4 text-[#0A7A78]" />

//               {jobs.length} Open Positions
//             </div>

//           </div>


//           <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">

//             {jobs.map((job, index) => (

//               <motion.div
//                 key={job.title}
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: index * 0.05,
//                 }}
//                 className={`group p-6 transition duration-300 hover:bg-[#f4fbfa] sm:p-7 ${
//                   index !== jobs.length - 1
//                     ? "border-b border-slate-200"
//                     : ""
//                 }`}
//               >

//                 <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

//                   <div>

//                     <h3 className="text-lg font-black text-slate-900 sm:text-xl">
//                       {job.title}
//                     </h3>

//                     <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">

//                       <span className="font-semibold text-[#0A7A78]">
//                         {job.department}
//                       </span>

//                       <span className="hidden text-slate-300 sm:block">
//                         •
//                       </span>

//                       <span className="inline-flex items-center gap-1.5">
//                         <MapPin className="h-4 w-4" />
//                         {job.location}
//                       </span>

//                       <span className="hidden text-slate-300 sm:block">
//                         •
//                       </span>

//                       <span className="inline-flex items-center gap-1.5">
//                         <Clock3 className="h-4 w-4" />
//                         {job.type}
//                       </span>

//                       <span className="hidden text-slate-300 sm:block">
//                         •
//                       </span>

//                       <span>
//                         {job.experience}
//                       </span>

//                     </div>

//                   </div>


//                   <Link
//                     href="#apply"
//                     className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#075e63]"
//                   >
//                     Apply Now

//                     <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                   </Link>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           GENERAL APPLICATION
//       ===================================================== */}

//       <section
//         id="apply"
//         className="relative overflow-hidden bg-[#075e63] py-20 sm:py-24"
//       >

//         <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />

//         <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />


//         <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
//             <Mail className="h-7 w-7" />
//           </div>

//           <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
//             Don't See Your Role?
//           </p>

//           <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
//             Send us your resume.
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
//             Even if your ideal position is not currently listed,
//             you can share your resume with our HR team for future
//             opportunities.
//           </p>

//           <a
//             href="mailto:careers@yourhospital.com"
//             className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-black text-[#075e63] shadow-xl transition hover:-translate-y-0.5 hover:bg-cyan-50"
//           >
//             <Mail className="h-4 w-4" />

//             careers@yourhospital.com
//           </a>

//         </div>

//       </section>


//       {/* =====================================================
//           FAQ
//       ===================================================== */}

//       <section className="py-20 sm:py-24">

//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

//           <div className="text-center">

//             <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0A7A78]">
//               FAQ
//             </p>

//             <h2 className="mt-3 text-3xl font-black sm:text-4xl">
//               Frequently Asked Questions
//             </h2>

//           </div>


//           <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">

//             {faqs.map((faq, index) => {

//               const isOpen = openFaq === index;

//               return (
//                 <div key={faq.question}>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenFaq(isOpen ? -1 : index)
//                     }
//                     className="flex w-full items-center justify-between gap-5 py-5 text-left"
//                   >

//                     <span className="text-base font-bold text-slate-900 sm:text-lg">
//                       {faq.question}
//                     </span>

//                     <ChevronDown
//                       className={`h-5 w-5 shrink-0 text-[#0A7A78] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />

//                   </button>


//                   <AnimatePresence initial={false}>

//                     {isOpen && (
//                       <motion.div
//                         initial={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           height: "auto",
//                           opacity: 1,
//                         }}
//                         exit={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         transition={{
//                           duration: 0.25,
//                         }}
//                         className="overflow-hidden"
//                       >

//                         <p className="pb-5 pr-10 text-sm leading-7 text-slate-600">
//                           {faq.answer}
//                         </p>

//                       </motion.div>
//                     )}

//                   </AnimatePresence>

//                 </div>
//               );
//             })}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="px-4 pb-20 sm:px-6">

//         <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#f3fbfa]">

//           <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16">

//             <Sparkles className="mx-auto h-7 w-7 text-[#0A7A78]" />

//             <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
//               Ready to make a difference?
//             </h2>

//             <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
//               Explore our opportunities and take the next step
//               in your healthcare career.
//             </p>

//             <a
//               href="#jobs"
//               className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#075e63]"
//             >
//               Explore Careers

//               <ArrowRight className="h-4 w-4" />
//             </a>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Careerpage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Building2,
  Stethoscope,
  Award,
  TrendingUp,
  Send,
  Quote,
} from "lucide-react";
import PageHero from "../components/Pagehero";
import CareerStats from "./CareerStats";
import CareerGrowth from "./components/CareerGrowth";
import WhyJoinUs from "./components/WhyJoinUs";
import JobOpportunities from "./components/JobOpportunities";
import ApplyApplicationForm from "./components/ApplyApplicationForm";
import { FiArrowRight } from "react-icons/fi";

/* =========================================================
   DATA
========================================================= */



const benefits = [
  {
    icon: HeartPulse,
    title: "Meaningful Work",
    description:
      "Make a real difference in the lives of patients and their families through compassionate healthcare.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description:
      "Build your knowledge and skills through continuous learning, training and development opportunities.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside experienced doctors, nurses and healthcare professionals as one team.",
  },
  {
    icon: ShieldCheck,
    title: "Supportive Environment",
    description:
      "A respectful and professional workplace where people are encouraged to grow and contribute.",
  },
];

const jobs = [
  {
    title: "Senior Resident – Cardiology",
    department: "Cardiology",
    location: "Jabalpur",
    type: "Full Time",
    experience: "2+ Years",
  },
  {
    title: "Staff Nurse",
    department: "Nursing",
    location: "Jabalpur",
    type: "Full Time",
    experience: "1+ Years",
  },
  {
    title: "Medical Officer",
    department: "Emergency Medicine",
    location: "Jabalpur",
    type: "Full Time",
    experience: "2+ Years",
  },
  {
    title: "Lab Technician",
    department: "Diagnostics",
    location: "Jabalpur",
    type: "Full Time",
    experience: "1+ Years",
  },
  {
    title: "Pharmacist",
    department: "Pharmacy",
    location: "Jabalpur",
    type: "Full Time",
    experience: "1+ Years",
  },
];

const faqs = [
  {
    question: "How can I apply for a position?",
    answer:
      "You can apply directly for an available position using the Apply Now button. You can also send your updated resume to our HR team.",
  },
  {
    question: "Can I apply if my preferred position is not listed?",
    answer:
      "Yes. You can share your resume with our HR team. Your profile may be considered for suitable future opportunities.",
  },
  {
    question: "Do you offer opportunities for freshers?",
    answer:
      "Opportunities may be available for fresh graduates and early-career professionals depending on current requirements.",
  },
  {
    question: "What documents should I submit?",
    answer:
      "Typically, applicants should provide an updated resume and relevant educational or professional documents when requested.",
  },
];

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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
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
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Careerpage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [showApplication, setShowApplication] = useState(false);
  

  

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}
    <PageHero
      backgroundImage="assets/images/career.png"
      badge="Careers at Our Hospital"
      title="Build a Career"
      highlight="That Makes a Difference."
      description="Join our dedicated team of healthcare professionals and build a meaningful career focused on compassionate, innovative and patient-centered care."
      breadcrumb="Careers"
    />

      {/* =====================================================
          STATS
      ===================================================== */}
    <CareerStats/>

      {/* =====================================================
          WHY JOIN
      ===================================================== */}

      <WhyJoinUs/>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section
        id="culture"
        className="relative overflow-hidden bg-[#f4faf9] py-24 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* IMAGE */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeLeft}
              className="relative"
            >

              <div className="relative h-[560px] overflow-hidden rounded-[32px]">

                <Image
                  src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
                  alt="Hospital healthcare team"
                  fill
                  unoptimized
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                      <Users className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-black">
                        One Team
                      </p>

                      <p className="text-xs text-white/65">
                        One Purpose
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Small image */}

              <div className="absolute -bottom-8 -right-6 hidden h-48 w-44 overflow-hidden rounded-2xl border-8 border-[#f4faf9] shadow-2xl sm:block">

                <Image
                  src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg"
                  alt="Medical professionals"
                  fill
                  unoptimized
                  className="object-cover"
                />

              </div>

            </motion.div>


            {/* CONTENT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeRight}
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#0A7A78]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                  Life at Our Hospital
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
                More than a workplace.
                <span className="block text-[#0A7A78]">
                  A place to belong.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Healthcare is a team effort. We create an environment
                where every member of our team has the opportunity to
                learn, contribute and make a meaningful impact.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Respectful and inclusive workplace",
                  "Professional development opportunities",
                  "Cross-functional collaboration",
                  "Patient-centered culture",
                  "Recognition of individual contribution",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A7A78]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Award className="h-5 w-5 text-[#0A7A78]" />

                  <p className="mt-4 text-2xl font-black">
                    100+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Specialists
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <TrendingUp className="h-5 w-5 text-[#0A7A78]" />

                  <p className="mt-4 text-2xl font-black">
                    25+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Departments
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAREER JOURNEY
      ===================================================== */}

     <CareerGrowth/>

      


      {/* =====================================================
          JOBS
      ===================================================== */}

      {/* <section
        id="jobs"
        className="bg-[#f6f9f9] py-24 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#0A7A78]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                  Opportunities
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Find your next opportunity
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Explore current opportunities across clinical,
                nursing, administrative and support teams.
              </p>

            </div>

            <div className="inline-flex h-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm">
              <BriefcaseBusiness className="h-4 w-4 text-[#0A7A78]" />

              {jobs.length} Open Positions
            </div>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            className="mt-12 space-y-4"
          >

            {jobs.map((job, index) => (

              <motion.div
                key={job.title}
                variants={fadeUp}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0A7A78]/20 hover:shadow-xl hover:shadow-slate-200/50 sm:p-6"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex gap-4">

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] sm:flex">
                      <Stethoscope className="h-5 w-5" />
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-black text-slate-950 sm:text-xl">
                          {job.title}
                        </h3>

                        <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[11px] font-bold text-[#0A7A78]">
                          {job.department}
                        </span>

                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">

                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="h-4 w-4" />
                          {job.type}
                        </span>

                        <span>
                          {job.experience}
                        </span>

                      </div>

                    </div>

                  </div>


                  <Link
                    href="#apply"
                    className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#075e63] sm:w-fit"
                  >
                    Apply Now

                    <ArrowRight className="h-4 w-4 transition group-hover/button:translate-x-1" />
                  </Link>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section> */}
       <JobOpportunities/> 

      {/* add  */}

      {/* <button
        onClick={() => setShowApplication(true)}
        className="px-5 py-3 bg-[#073b48] text-white rounded-xl"
      >
        Apply Now
      </button> */}

      {/* {showApplication && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">

    <div className="w-full max-w-2xl my-8">

      {/* <ApplyApplicationForm
        // careerRoleId={job.id}
        // jobTitle={job.title}
        onClose={() => setShowApplication(false)}
        onSuccess={() => {
          setShowApplication(false);
        }}
      /> */}

    {/* </div>

  </div>
)} */} 


{/* <button
  onClick={() => setShowApplication(true)}
  className="px-5 py-3 bg-[#073b48] text-white rounded-xl"
>
  Apply Now
</button> */}

{/* <button onClick={() => setApplicationDrawer(true)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#073b48] text-white font-semibold hover:bg-[#052f3a]" > Apply Now <FiArrowRight /> </button>

<ApplyApplicationForm
  open={applicationDrawer}
  onClose={() => setApplicationDrawer(false)}
  // careerRoleId={job.id}
  // jobTitle={job.title}
  onSuccess={() => {
    // optional
    console.log("Application submitted");
  }}
/> */}








      {/* =====================================================
          APPLICATION CTA
      ===================================================== */}

      <section
        id="apply"
        className="relative overflow-hidden bg-[#063b46] py-24 sm:py-28"
      >

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0A7A78]/30 blur-3xl" />

          <div className="absolute -bottom-40 -left-20 h-[450px] w-[450px] rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        </div>


        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="text-center"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 backdrop-blur-md">
              <Send className="h-7 w-7" />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Don't See Your Role?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              Your next opportunity
              <span className="block text-cyan-300">
                could start here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/65">
              Even if your ideal position is not currently listed,
              share your resume with our HR team and we'll keep your
              profile in mind for future opportunities.
            </p>

            <a
              href="mailto:careers@yourhospital.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-[#075e63] shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
            >
              <Mail className="h-4 w-4" />

              careers@yourhospital.com

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-24 sm:py-28">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="text-center"
          >

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#0A7A78]" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                FAQ
              </p>

              <span className="h-px w-10 bg-[#0A7A78]" />

            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Everything you need to know about joining our team.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-200"
          >

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 last:border-b-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className={`flex w-full items-center justify-between gap-5 px-5 py-6 text-left transition sm:px-7 ${
                      isOpen
                        ? "bg-[#f5fbfa]"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0A7A78]/10 text-xs font-black text-[#0A7A78]">
                        0{index + 1}
                      </span>

                      <span className="text-base font-bold text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>

                    </div>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#0A7A78] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>


                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-5 pb-6 pl-[68px] pr-8 sm:px-7 sm:pb-7 sm:pl-[84px]">

                          <p className="text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-4 pb-24 sm:px-6">

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#f1f9f8]"
        >

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0A7A78]/10 blur-3xl" />

          <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A7A78]/10 text-[#0A7A78]">
              <Sparkles className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Ready to make a difference?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Explore our opportunities and take the next step
              in your healthcare career.
            </p>

            <a
              href="#jobs"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A7A78]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#075e63]"
            >
              Explore Careers

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
};

export default Careerpage;
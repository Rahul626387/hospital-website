
// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import {
//   Award,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   GraduationCap,
//   MapPin,
//   Stethoscope,
//   HeartPulse,
//   Phone,
//   ArrowRight,
// } from "lucide-react";

// const Doctorpage = () => {
//   const params = useParams();
//   const doctorId = params?.id;

//   // Temporary static doctor data
//   const doctor = {
//     id: doctorId,
//     name: "Dr. Rahul Sharma",
//     qualification: "MBBS, MD, DM",
//     specialization: "Senior Cardiologist",
//     experience: "15+ Years",
//     location: "Apollo JBP Hospital",
//     image:
//       "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",

//     description:
//       "Experienced cardiologist providing comprehensive and patient-focused cardiac care.",

//     about:
//       "Dr. Rahul Sharma is a highly experienced cardiologist with extensive expertise in the diagnosis, prevention and treatment of cardiovascular diseases. He believes in personalized treatment plans and ensuring every patient receives compassionate, reliable and evidence-based care.",

//     education: [
//       "MBBS – Medical College",
//       "MD – Internal Medicine",
//       "DM – Cardiology",
//     ],

//     specializations: [
//       "Cardiology",
//       "Preventive Cardiology",
//       "Heart Disease Management",
//       "Hypertension Management",
//       "Cardiac Care",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f9fb]">

//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="relative overflow-hidden bg-[#063B5C]">

//         {/* Background shapes */}
//         <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0A7A78]/30 blur-3xl" />
//         <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

//           {/* Breadcrumb */}
//           <div className="mb-10 flex items-center gap-2 text-sm text-white/60">
//             <span>Home</span>
//             <span>/</span>
//             <span>Doctors</span>
//             <span>/</span>
//             <span className="text-white">
//               Doctor Profile
//             </span>
//           </div>

//           <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">

//             {/* Doctor Image */}
//             <div className="relative">

//               <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#4DD4C6]/40 to-transparent blur-xl" />

//               <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl">
//                 <div className="overflow-hidden rounded-[1.6rem]">
//                   <img
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="h-[420px] w-full object-cover object-top transition duration-500 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Availability */}
//               <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#063B5C] shadow-lg">
//                 <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
//                 Available for Consultation
//               </div>
//             </div>

//             {/* Hero Content */}
//             <div className="text-white">

//               <div className="inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-[#0A7A78]/20 px-4 py-2 text-sm font-medium text-[#8ff0e6]">
//                 <HeartPulse className="h-4 w-4" />
//                 Medical Specialist
//               </div>

//               <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//                 {doctor.name}
//               </h1>

//               <p className="mt-4 text-xl font-medium text-[#70ddd2]">
//                 {doctor.specialization}
//               </p>

//               <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
//                 {doctor.description}
//               </p>

//               {/* Quick Stats */}
//               <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">

//                 <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
//                   <p className="text-2xl font-bold">
//                     15+
//                   </p>
//                   <p className="mt-1 text-xs text-white/60 sm:text-sm">
//                     Years Experience
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
//                   <p className="text-2xl font-bold">
//                     10K+
//                   </p>
//                   <p className="mt-1 text-xs text-white/60 sm:text-sm">
//                     Patients Treated
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
//                   <p className="text-2xl font-bold">
//                     24/7
//                   </p>
//                   <p className="mt-1 text-xs text-white/60 sm:text-sm">
//                     Hospital Support
//                   </p>
//                 </div>

//               </div>

//               {/* CTA */}
//               <div className="mt-8 flex flex-wrap gap-3">

//                 <button className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#096b69]">
//                   <CalendarDays className="h-5 w-5" />
//                   Book Appointment
//                   <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                 </button>

//                 <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
//                   <Phone className="h-5 w-5" />
//                   Contact Hospital
//                 </button>

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           MAIN PROFILE
//       ====================================================== */}
//       <section className="py-14 sm:py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

//             {/* LEFT */}
//             <div className="space-y-8">

//               {/* Doctor Information */}
//               <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

//                 <div className="flex items-center gap-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]">
//                     <Stethoscope className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Professional Information
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       Doctor Details
//                     </h2>
//                   </div>
//                 </div>

//                 <div className="mt-8 grid gap-4 sm:grid-cols-2">

//                   {/* Qualification */}
//                   <div className="group rounded-2xl border border-slate-200 p-5 transition hover:border-[#0A7A78]/30 hover:shadow-sm">
//                     <div className="flex items-start gap-4">

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
//                         <GraduationCap className="h-5 w-5" />
//                       </div>

//                       <div>
//                         <p className="text-sm text-slate-500">
//                           Qualification
//                         </p>

//                         <p className="mt-1 font-semibold text-slate-800">
//                           {doctor.qualification}
//                         </p>
//                       </div>

//                     </div>
//                   </div>

//                   {/* Experience */}
//                   <div className="group rounded-2xl border border-slate-200 p-5 transition hover:border-[#0A7A78]/30 hover:shadow-sm">
//                     <div className="flex items-start gap-4">

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                         <Award className="h-5 w-5" />
//                       </div>

//                       <div>
//                         <p className="text-sm text-slate-500">
//                           Experience
//                         </p>

//                         <p className="mt-1 font-semibold text-slate-800">
//                           {doctor.experience}
//                         </p>
//                       </div>

//                     </div>
//                   </div>

//                   {/* Hospital */}
//                   <div className="group rounded-2xl border border-slate-200 p-5 transition hover:border-[#0A7A78]/30 hover:shadow-sm">
//                     <div className="flex items-start gap-4">

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
//                         <Stethoscope className="h-5 w-5" />
//                       </div>

//                       <div>
//                         <p className="text-sm text-slate-500">
//                           Hospital
//                         </p>

//                         <p className="mt-1 font-semibold text-slate-800">
//                           {doctor.location}
//                         </p>
//                       </div>

//                     </div>
//                   </div>

//                   {/* Timing */}
//                   <div className="group rounded-2xl border border-slate-200 p-5 transition hover:border-[#0A7A78]/30 hover:shadow-sm">
//                     <div className="flex items-start gap-4">

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                         <Clock3 className="h-5 w-5" />
//                       </div>

//                       <div>
//                         <p className="text-sm text-slate-500">
//                           Consultation Hours
//                         </p>

//                         <p className="mt-1 font-semibold text-slate-800">
//                           Mon - Sat
//                         </p>

//                         <p className="text-sm text-slate-500">
//                           10:00 AM - 4:00 PM
//                         </p>
//                       </div>

//                     </div>
//                   </div>

//                 </div>

//                 <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
//                   <MapPin className="h-5 w-5 shrink-0 text-[#0A7A78]" />
//                   {doctor.location}
//                 </div>

//               </div>

//               {/* About */}
//               <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                     <HeartPulse className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Professional Profile
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       About Dr. Rahul Sharma
//                     </h2>
//                   </div>

//                 </div>

//                 <p className="mt-6 leading-8 text-slate-600">
//                   {doctor.about}
//                 </p>

//               </div>

//               {/* Education */}
//               <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]">
//                     <GraduationCap className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Academic Background
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       Education & Qualification
//                     </h2>
//                   </div>

//                 </div>

//                 <div className="relative mt-8 space-y-5">

//                   {/* Timeline */}
//                   <div className="absolute left-5 top-3 h-[calc(100%-25px)] w-px bg-slate-200" />

//                   {doctor.education.map((item, index) => (
//                     <div
//                       key={item}
//                       className="relative flex items-center gap-5"
//                     >

//                       <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#063B5C] text-sm font-bold text-white ring-8 ring-white">
//                         {index + 1}
//                       </div>

//                       <div className="flex-1 rounded-2xl border border-slate-200 p-4">
//                         <p className="font-semibold text-slate-700">
//                           {item}
//                         </p>
//                       </div>

//                     </div>
//                   ))}

//                 </div>

//               </div>

//             </div>

//             {/* RIGHT SIDEBAR */}
//             <div className="space-y-6">

//               {/* Appointment Card */}
//               <div className="sticky top-6 overflow-hidden rounded-3xl bg-[#063B5C] p-7 text-white shadow-xl">

//                 <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-[#0A7A78]/30 blur-2xl" />

//                 <div className="relative">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//                     <CalendarDays className="h-6 w-6 text-[#70ddd2]" />
//                   </div>

//                   <h3 className="mt-5 text-2xl font-bold">
//                     Book an Appointment
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-white/60">
//                     Schedule a consultation with our specialist for
//                     personalized medical care.
//                   </p>

//                   <div className="mt-6 space-y-3">

//                     <div className="flex items-center gap-3 text-sm text-white/80">
//                       <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />
//                       Experienced Specialist
//                     </div>

//                     <div className="flex items-center gap-3 text-sm text-white/80">
//                       <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />
//                       Personalized Consultation
//                     </div>

//                     <div className="flex items-center gap-3 text-sm text-white/80">
//                       <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />
//                       Advanced Medical Care
//                     </div>

//                   </div>

//                   <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3.5 font-semibold transition hover:bg-[#096b69]">
//                     <CalendarDays className="h-5 w-5" />
//                     Book Appointment
//                   </button>

//                 </div>
//               </div>

//               {/* Specializations */}
//               <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                     <Stethoscope className="h-5 w-5" />
//                   </div>

//                   <h3 className="text-xl font-bold text-[#063B5C]">
//                     Specializations
//                   </h3>

//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-2">

//                   {doctor.specializations.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full bg-[#063B5C]/5 px-3 py-2 text-sm font-medium text-[#063B5C]"
//                     >
//                       {item}
//                     </span>
//                   ))}

//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           BOTTOM CTA
//       ====================================================== */}
//       <section className="bg-[#063B5C] py-14">

//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">

//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wider text-[#70ddd2]">
//               Need Medical Consultation?
//             </p>

//             <h2 className="mt-2 text-3xl font-bold text-white">
//               Take the first step towards better health.
//             </h2>
//           </div>

//           <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-3.5 font-semibold text-white transition hover:bg-[#096b69]">
//             <CalendarDays className="h-5 w-5" />
//             Book Appointment
//             <ArrowRight className="h-4 w-4" />
//           </button>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Doctorpage;



// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   Award,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   GraduationCap,
//   MapPin,
//   Stethoscope,
//   HeartPulse,
//   Phone,
//   ArrowRight,
// } from "lucide-react";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const fadeLeft = {
//   hidden: {
//     opacity: 0,
//     x: -40,
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const fadeRight = {
//   hidden: {
//     opacity: 0,
//     x: 40,
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const Doctorpage = () => {
//   const params = useParams();

//   const doctorId = params?.id;

//   const doctor = {
//     id: doctorId,

//     name: "Dr. Rahul Sharma",

//     qualification: "MBBS, MD, DM",

//     specialization: "Senior Cardiologist",

//     experience: "15+ Years",

//     location: "Apollo JBP Hospital",

//     image:
//       "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",

//     description:
//       "Experienced cardiologist providing comprehensive and patient-focused cardiac care.",

//     about:
//       "Dr. Rahul Sharma is a highly experienced cardiologist with extensive expertise in the diagnosis, prevention and treatment of cardiovascular diseases. He believes in personalized treatment plans and ensuring every patient receives compassionate, reliable and evidence-based care.",

//     education: [
//       "MBBS – Medical College",
//       "MD – Internal Medicine",
//       "DM – Cardiology",
//     ],

//     specializations: [
//       "Cardiology",
//       "Preventive Cardiology",
//       "Heart Disease Management",
//       "Hypertension Management",
//       "Cardiac Care",
//     ],
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#f5f9fb]">

//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C]">

//         {/* Animated background */}
//         <motion.div
//           animate={{
//             x: [0, 40, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#0A7A78]/30 blur-3xl"
//         />

//         <motion.div
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

//           {/* Breadcrumb */}
//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-10 flex items-center gap-2 text-sm text-white/60"
//           >
//             <span>Home</span>
//             <span>/</span>
//             <span>Doctors</span>
//             <span>/</span>
//             <span className="text-white">
//               Doctor Profile
//             </span>
//           </motion.div>

//           <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">

//             {/* =================================================
//                 DOCTOR IMAGE
//             ================================================== */}

//             <motion.div
//               variants={fadeLeft}
//               initial="hidden"
//               animate="show"
//               className="relative"
//             >

//               <motion.div
//                 animate={{
//                   scale: [1, 1.05, 1],
//                   opacity: [0.5, 0.8, 0.5],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -inset-3 rounded-[2rem] bg-[#4DD4C6]/20 blur-2xl"
//               />

//               <motion.div
//                 whileHover={{
//                   y: -8,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                 }}
//                 className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl"
//               >

//                 <div className="overflow-hidden rounded-[1.6rem]">

//                   <motion.img
//                     initial={{
//                       scale: 1.12,
//                       opacity: 0,
//                     }}
//                     animate={{
//                       scale: 1,
//                       opacity: 1,
//                     }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="h-[420px] w-full object-cover object-top"
//                   />

//                 </div>
//               </motion.div>

//               {/* Availability */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                   scale: 0.9,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 transition={{
//                   delay: 0.8,
//                   duration: 0.5,
//                 }}
//                 className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#063B5C] shadow-xl"
//               >
//                 <motion.span
//                   animate={{
//                     scale: [1, 1.35, 1],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                   }}
//                   className="h-2.5 w-2.5 rounded-full bg-emerald-500"
//                 />

//                 Available for Consultation
//               </motion.div>

//             </motion.div>

//             {/* =================================================
//                 HERO CONTENT
//             ================================================== */}

//             <motion.div
//               variants={stagger}
//               initial="hidden"
//               animate="show"
//               className="text-white"
//             >

//               <motion.div
//                 variants={fadeUp}
//                 className="inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-[#0A7A78]/20 px-4 py-2 text-sm font-medium text-[#8ff0e6]"
//               >
//                 <HeartPulse className="h-4 w-4" />
//                 Medical Specialist
//               </motion.div>

//               <motion.h1
//                 variants={fadeUp}
//                 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
//               >
//                 {doctor.name}
//               </motion.h1>

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-4 text-xl font-medium text-[#70ddd2]"
//               >
//                 {doctor.specialization}
//               </motion.p>

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
//               >
//                 {doctor.description}
//               </motion.p>

//               {/* Stats */}
//               <motion.div
//                 variants={stagger}
//                 className="mt-8 grid max-w-2xl grid-cols-3 gap-3"
//               >

//                 {[
//                   ["15+", "Years Experience"],
//                   ["10K+", "Patients Treated"],
//                   ["24/7", "Hospital Support"],
//                 ].map(([value, label]) => (
//                   <motion.div
//                     key={label}
//                     variants={fadeUp}
//                     whileHover={{
//                       y: -5,
//                       backgroundColor: "rgba(255,255,255,0.15)",
//                     }}
//                     className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
//                   >
//                     <p className="text-2xl font-bold">
//                       {value}
//                     </p>

//                     <p className="mt-1 text-xs text-white/60 sm:text-sm">
//                       {label}
//                     </p>
//                   </motion.div>
//                 ))}

//               </motion.div>

//               {/* Buttons */}
//               <motion.div
//                 variants={fadeUp}
//                 className="mt-8 flex flex-wrap gap-3"
//               >

//                 <motion.button
//                   whileHover={{
//                     scale: 1.04,
//                     y: -2,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg"
//                 >
//                   <CalendarDays className="h-5 w-5" />

//                   Book Appointment

//                   <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                 </motion.button>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.04,
//                     y: -2,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm"
//                 >
//                   <Phone className="h-5 w-5" />

//                   Contact Hospital
//                 </motion.button>

//               </motion.div>

//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <section className="py-14 sm:py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

//             {/* LEFT */}
//             <div className="space-y-8">

//               {/* =================================================
//                   PROFESSIONAL DETAILS
//               ================================================== */}

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
//               >

//                 <div className="flex items-center gap-3">

//                   <motion.div
//                     whileHover={{
//                       rotate: 8,
//                       scale: 1.05,
//                     }}
//                     className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]"
//                   >
//                     <Stethoscope className="h-6 w-6" />
//                   </motion.div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Professional Information
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       Doctor Details
//                     </h2>
//                   </div>

//                 </div>

//                 <motion.div
//                   variants={stagger}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{
//                     once: true,
//                   }}
//                   className="mt-8 grid gap-4 sm:grid-cols-2"
//                 >

//                   {[
//                     {
//                       icon: GraduationCap,
//                       title: "Qualification",
//                       value: doctor.qualification,
//                     },
//                     {
//                       icon: Award,
//                       title: "Experience",
//                       value: doctor.experience,
//                     },
//                     {
//                       icon: Stethoscope,
//                       title: "Hospital",
//                       value: doctor.location,
//                     },
//                     {
//                       icon: Clock3,
//                       title: "Consultation Hours",
//                       value: "Mon - Sat, 10:00 AM - 4:00 PM",
//                     },
//                   ].map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <motion.div
//                         key={item.title}
//                         variants={fadeUp}
//                         whileHover={{
//                           y: -5,
//                           boxShadow:
//                             "0 15px 35px rgba(6,59,92,0.08)",
//                         }}
//                         className="rounded-2xl border border-slate-200 p-5"
//                       >

//                         <div className="flex items-start gap-4">

//                           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B5C]/10 text-[#063B5C]">
//                             <Icon className="h-5 w-5" />
//                           </div>

//                           <div>

//                             <p className="text-sm text-slate-500">
//                               {item.title}
//                             </p>

//                             <p className="mt-1 font-semibold text-slate-800">
//                               {item.value}
//                             </p>

//                           </div>

//                         </div>

//                       </motion.div>
//                     );
//                   })}

//                 </motion.div>

//                 <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
//                   <MapPin className="h-5 w-5 shrink-0 text-[#0A7A78]" />
//                   {doctor.location}
//                 </div>

//               </motion.div>

//               {/* =================================================
//                   ABOUT
//               ================================================== */}

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
//               >

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                     <HeartPulse className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Professional Profile
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       About Doctor
//                     </h2>
//                   </div>

//                 </div>

//                 <motion.p
//                   initial={{
//                     opacity: 0,
//                     y: 15,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     delay: 0.15,
//                     duration: 0.6,
//                   }}
//                   className="mt-6 leading-8 text-slate-600"
//                 >
//                   {doctor.about}
//                 </motion.p>

//               </motion.div>

//               {/* =================================================
//                   EDUCATION
//               ================================================== */}

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
//               >

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]">
//                     <GraduationCap className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-[#0A7A78]">
//                       Academic Background
//                     </p>

//                     <h2 className="text-2xl font-bold text-[#063B5C]">
//                       Education & Qualification
//                     </h2>
//                   </div>

//                 </div>

//                 <div className="relative mt-8 space-y-5">

//                   <div className="absolute left-5 top-3 h-[calc(100%-25px)] w-px bg-slate-200" />

//                   {doctor.education.map((item, index) => (

//                     <motion.div
//                       key={item}
//                       initial={{
//                         opacity: 0,
//                         x: -25,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                       }}
//                       transition={{
//                         delay: index * 0.15,
//                         duration: 0.5,
//                       }}
//                       className="relative flex items-center gap-5"
//                     >

//                       <motion.div
//                         whileHover={{
//                           scale: 1.15,
//                         }}
//                         className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#063B5C] text-sm font-bold text-white ring-8 ring-white"
//                       >
//                         {index + 1}
//                       </motion.div>

//                       <div className="flex-1 rounded-2xl border border-slate-200 p-4 transition hover:border-[#0A7A78]/30">
//                         <p className="font-semibold text-slate-700">
//                           {item}
//                         </p>
//                       </div>

//                     </motion.div>

//                   ))}

//                 </div>

//               </motion.div>

//             </div>

//             {/* =================================================
//                 SIDEBAR
//             ================================================== */}

//             <div className="space-y-6">

//               {/* Appointment */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}
//                 className="sticky top-6 overflow-hidden rounded-3xl bg-[#063B5C] p-7 text-white shadow-xl"
//               >

//                 <motion.div
//                   animate={{
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                   }}
//                   className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-[#0A7A78]/30 blur-2xl"
//                 />

//                 <div className="relative">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//                     <CalendarDays className="h-6 w-6 text-[#70ddd2]" />
//                   </div>

//                   <h3 className="mt-5 text-2xl font-bold">
//                     Book an Appointment
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-white/60">
//                     Schedule a consultation with our specialist for
//                     personalized medical care.
//                   </p>

//                   <div className="mt-6 space-y-3">

//                     {[
//                       "Experienced Specialist",
//                       "Personalized Consultation",
//                       "Advanced Medical Care",
//                     ].map((item) => (

//                       <motion.div
//                         key={item}
//                         initial={{
//                           opacity: 0,
//                           x: 15,
//                         }}
//                         whileInView={{
//                           opacity: 1,
//                           x: 0,
//                         }}
//                         viewport={{
//                           once: true,
//                         }}
//                         className="flex items-center gap-3 text-sm text-white/80"
//                       >

//                         <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />

//                         {item}

//                       </motion.div>

//                     ))}

//                   </div>

//                   <motion.button
//                     whileHover={{
//                       scale: 1.03,
//                     }}
//                     whileTap={{
//                       scale: 0.97,
//                     }}
//                     className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3.5 font-semibold"
//                   >
//                     <CalendarDays className="h-5 w-5" />
//                     Book Appointment
//                   </motion.button>

//                 </div>
//               </motion.div>

//               {/* Specializations */}
//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{
//                   once: true,
//                 }}
//                 className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
//               >

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78]">
//                     <Stethoscope className="h-5 w-5" />
//                   </div>

//                   <h3 className="text-xl font-bold text-[#063B5C]">
//                     Specializations
//                   </h3>

//                 </div>

//                 <motion.div
//                   variants={stagger}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{
//                     once: true,
//                   }}
//                   className="mt-6 flex flex-wrap gap-2"
//                 >

//                   {doctor.specializations.map((item) => (

//                     <motion.span
//                       key={item}
//                       variants={fadeUp}
//                       whileHover={{
//                         scale: 1.05,
//                         y: -2,
//                       }}
//                       className="cursor-default rounded-full bg-[#063B5C]/5 px-3 py-2 text-sm font-medium text-[#063B5C]"
//                     >
//                       {item}
//                     </motion.span>

//                   ))}

//                 </motion.div>

//               </motion.div>

//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Doctorpage;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
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
} from "lucide-react";

/* =========================================================
   LOCAL JSON DATA (multiple doctors support)
========================================================= */
const DOCTORS = [
  {
    id: "rahul-sharma",
    name: "Dr. Rahul Sharma",
    qualification: "MBBS, MD, DM",
    specialization: "Senior Cardiologist",
    experience: "15+ Years",
    location: "Apollo JBP Hospital",
    image:"https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    description:
      "Experienced cardiologist providing comprehensive and patient-focused cardiac care.",
    about:
      "Dr. Rahul Sharma is a highly experienced cardiologist with extensive expertise in the diagnosis, prevention and treatment of cardiovascular diseases. He believes in personalized treatment plans and ensuring every patient receives compassionate, reliable and evidence-based care.",
    education: [
      "MBBS – Medical College",
      "MD – Internal Medicine",
      "DM – Cardiology",
    ],
    specializations: [
      "Cardiology",
      "Preventive Cardiology",
      "Heart Disease Management",
      "Hypertension Management",
      "Cardiac Care",
    ],
    consultationHours: "Mon - Sat, 10:00 AM - 4:00 PM",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "10K+", label: "Patients Treated" },
      { value: "24/7", label: "Hospital Support" },
    ],
    phone: "+919999999999",
  },
  // 👉 Add more doctors here
];

/* =========================================================
   ANIMATION VARIANTS (motion-safe)
========================================================= */
const useVariants = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: reduce ? 0 : -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: reduce ? 0 : 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };

  return { fadeUp, fadeLeft, fadeRight, stagger };
};

/* =========================================================
   PAGE COMPONENT
========================================================= */
export default function DoctorPage() {
  const params = useParams();
  const doctorId = params?.id;

  // 🔍 Local JSON me id match karo, warna fallback = first doctor
  const doctor = DOCTORS.find((d) => d.id === doctorId) ?? DOCTORS[0];

  const { fadeUp, fadeLeft, fadeRight, stagger } = useVariants();

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f9fb] pb-24 lg:pb-0">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063B5C]">
        {/* Animated background glows */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#0A7A78]/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-sm text-white/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/doctors" className="transition hover:text-white">
              Doctors
            </Link>
            <span>/</span>
            <span className="text-white">Doctor Profile</span>
          </motion.nav>

          <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">
            {/* DOCTOR IMAGE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 rounded-[2rem] bg-[#4DD4C6]/20 blur-2xl"
              />

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
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

              {/* Availability pill */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#063B5C] shadow-xl"
              >
                <motion.span
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                />
                Available for Consultation
              </motion.div>
            </motion.div>

            {/* HERO CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-white"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#4DD4C6]/30 bg-[#0A7A78]/20 px-4 py-2 text-sm font-medium text-[#8ff0e6]"
              >
                <HeartPulse className="h-4 w-4" />
                Medical Specialist
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {doctor.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-xl font-medium text-[#70ddd2]"
              >
                {doctor.specialization}
              </motion.p>

              {/* Premium badges */}
              <motion.div
                variants={fadeUp}
                className="mt-4 flex flex-wrap gap-2"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30">
                  <Star className="h-3.5 w-3.5 fill-amber-300" />
                  Top Rated
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
              >
                {doctor.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={stagger}
                className="mt-8 grid max-w-2xl grid-cols-3 gap-3"
              >
                {doctor.stats.map(({ value, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="mt-1 text-xs text-white/70 sm:text-sm">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`Book appointment with ${doctor.name}`}
                  className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#0c8e8b]"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </motion.button>

                <motion.a
                  href={`tel:${doctor.phone}`}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Call hospital"
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  Contact Hospital
                </motion.a>
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
            {/* LEFT */}
            <div className="space-y-8">
              {/* Professional Details */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063B5C]/10 text-[#063B5C]"
                  >
                    <Stethoscope className="h-6 w-6" />
                  </motion.div>
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
                  viewport={{ once: true }}
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
                      title: "Consultation Hours",
                      value: doctor.consultationHours,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 15px 35px rgba(6,59,92,0.08)",
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
                viewport={{ once: true, amount: 0.15 }}
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

                <p className="mt-6 leading-8 text-slate-600">{doctor.about}</p>
              </motion.div>

              {/* Education */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
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
                      Education & Qualification
                    </h2>
                  </div>
                </div>

                <div className="relative mt-8 space-y-5">
                  <div className="absolute left-5 top-3 h-[calc(100%-25px)] w-px bg-slate-200" />
                  {doctor.education.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="relative flex items-center gap-5"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#063B5C] text-sm font-bold text-white ring-8 ring-white"
                      >
                        {index + 1}
                      </motion.div>
                      <div className="flex-1 rounded-2xl border border-slate-200 p-4 transition hover:border-[#0A7A78]/30 hover:bg-slate-50">
                        <p className="font-semibold text-slate-700">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* Appointment Card */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="sticky top-6 overflow-hidden rounded-3xl bg-[#063B5C] p-7 text-white shadow-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-[#0A7A78]/30 blur-2xl"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <CalendarDays className="h-6 w-6 text-[#70ddd2]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">
                    Book an Appointment
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Schedule a consultation with our specialist for
                    personalized medical care.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Experienced Specialist",
                      "Personalized Consultation",
                      "Advanced Medical Care",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-white/85"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#4DD4C6]" />
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label="Book appointment"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3.5 font-semibold transition hover:bg-[#0c8e8b]"
                  >
                    <CalendarDays className="h-5 w-5" />
                    Book Appointment
                  </motion.button>
                </div>
              </motion.div>

              {/* Specializations */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
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
                  viewport={{ once: true }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {doctor.specializations.map((item) => (
                    <motion.span
                      key={item}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-full bg-[#063B5C]/5 px-3 py-2 text-sm font-medium text-[#063B5C] transition hover:bg-[#063B5C]/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE STICKY CTA
      ====================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="flex gap-2">
          <button
            aria-label="Book appointment"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A7A78] py-3 font-semibold text-white"
          >
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </button>
          <a
            href={`tel:${doctor.phone}`}
            aria-label="Call hospital"
            className="flex items-center justify-center rounded-xl border border-slate-300 px-4 text-[#063B5C]"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}



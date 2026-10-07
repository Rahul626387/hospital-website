// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Ambulance,
//   ArrowRight,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   MapPin,
//   MessageCircle,
//   Phone,
//   ShieldAlert,
//   ShieldCheck,
//   Siren,
//   Stethoscope,
//   User,
//   Send,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    DATA
// ========================================================= */

// const emergencyServices = [
//   {
//     icon: Ambulance,
//     title: "24/7 Ambulance",
//     text: "Rapid ambulance support with trained medical staff.",
//     color: "red",
//   },
//   {
//     icon: Siren,
//     title: "Trauma Care",
//     text: "Immediate treatment for accidents and serious injuries.",
//     color: "orange",
//   },
//   {
//     icon: HeartPulse,
//     title: "Critical Care",
//     text: "Advanced monitoring and life-support facilities.",
//     color: "pink",
//   },
//   {
//     icon: Stethoscope,
//     title: "Emergency Doctors",
//     text: "Experienced doctors and nurses available 24/7.",
//     color: "blue",
//   },
// ];

// const emergencyCases = [
//   "Severe chest pain",
//   "Difficulty breathing",
//   "Severe bleeding",
//   "Loss of consciousness",
//   "Serious accidents",
//   "Stroke symptoms",
//   "Severe burns",
//   "Allergic reactions",
// ];

// const emergencySteps = [
//   {
//     number: "01",
//     title: "Call",
//     text: "Contact our emergency helpline.",
//   },
//   {
//     number: "02",
//     title: "Ambulance",
//     text: "Request ambulance support if required.",
//   },
//   {
//     number: "03",
//     title: "Assessment",
//     text: "Our team assesses the patient immediately.",
//   },
//   {
//     number: "04",
//     title: "Treatment",
//     text: "Urgent treatment begins without delay.",
//   },
// ];

// /* =========================================================
//    CONSTANTS
// ========================================================= */

// const EMERGENCY_PHONE = "+919575300110";
// const EMERGENCY_DISPLAY = "+91 95753 00110";
// const WHATSAPP_NUMBER = "919575300110";

// /* =========================================================
//    ANIMATION
// ========================================================= */

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function EmergencyPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     location: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = [
//       "🚨 EMERGENCY REQUEST",
//       "",
//       `👤 Name: ${formData.name}`,
//       `📞 Phone: ${formData.phone}`,
//       `📍 Location: ${formData.location}`,
//       `📝 Emergency: ${formData.message}`,
//     ].join("\n");

//     const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-slate-800">
//       {/* =====================================================
//           FLOATING MOBILE CALL
//       ===================================================== */}

//       <motion.a
//         href={`tel:${EMERGENCY_PHONE}`}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-900/30 sm:hidden"
//         aria-label="Call emergency"
//       >
//         <motion.span
//           animate={{
//             scale: [1, 1.5, 1],
//             opacity: [0.7, 0, 0.7],
//           }}
//           transition={{
//             duration: 1.8,
//             repeat: Infinity,
//           }}
//           className="absolute inset-0 rounded-full bg-red-500"
//         />

//         <Phone className="relative h-6 w-6" />
//       </motion.a>

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#120707]">
//         {/* Background glow */}
//         <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
//         <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
//           {/* HERO CONTENT */}

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="text-white"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-300">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
//               24/7 Emergency Services
//             </div>

//             <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
//               Emergency Care
//               <span className="mt-1 block text-red-500">
//                 When Every Second Matters.
//               </span>
//             </h1>

//             <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
//               Immediate medical assistance for accidents, injuries, sudden
//               illness and critical conditions. Our emergency team is ready
//               around the clock.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <a
//                 href={`tel:${EMERGENCY_PHONE}`}
//                 className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-1 hover:bg-red-700"
//               >
//                 <Phone className="h-4 w-4" />
//                 CALL EMERGENCY
//               </a>

//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   "Emergency! I need medical assistance."
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
//               >
//                 <MessageCircle className="h-4 w-4 text-green-400" />
//                 WHATSAPP
//               </a>
//             </div>

//             <div className="mt-6 flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600">
//                 <Phone className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-[10px] uppercase tracking-widest text-white/40">
//                   Emergency Helpline
//                 </p>

//                 <p className="mt-0.5 text-lg font-black">
//                   {EMERGENCY_DISPLAY}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* HERO IMAGE */}

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
//               duration: 0.7,
//             }}
//             className="relative"
//           >
//             <div className="relative h-[330px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl sm:h-[390px]">
//               <Image
//                 src="/images/emergency-ambulance-india.jpg"
//                 alt="24/7 Emergency ambulance service"
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 55vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//               {/* Open badge */}
//               <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-black text-white shadow-lg">
//                 <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
//                 OPEN 24/7
//               </div>

//               {/* Image bottom card */}
//               <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-md">
//                 <div className="flex items-center gap-3 text-white">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600">
//                     <Ambulance className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="font-black">Emergency Ambulance</p>
//                     <p className="mt-0.5 text-xs text-white/60">
//                       Fast response • Medical support • 24/7
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge */}

//             <div className="absolute -bottom-4 -left-3 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
//                   <Clock3 className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <p className="text-[10px] text-slate-400">
//                     Available
//                   </p>
//                   <p className="text-sm font-black text-[#063B5C]">
//                     24 Hours
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           QUICK ACTIONS
//       ===================================================== */}

//       <section className="relative z-10 px-4">
//         <div className="mx-auto -mt-5 grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-3">
//           <a
//             href={`tel:${EMERGENCY_PHONE}`}
//             className="group flex items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
//               <Phone className="h-5 w-5" />
//             </div>

//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 Call Emergency
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 {EMERGENCY_DISPLAY}
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
//           </a>

//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-green-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
//               <MessageCircle className="h-5 w-5" />
//             </div>

//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 WhatsApp
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 Instant assistance
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
//           </a>

//           <Link
//             href="#location"
//             className="group flex items-center gap-3 p-4 transition hover:bg-red-50"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
//               <MapPin className="h-5 w-5" />
//             </div>

//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 Emergency Location
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 Get directions
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="py-14 sm:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-80px" }}
//             variants={fadeUp}
//             className="mx-auto max-w-2xl text-center"
//           >
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Services
//             </p>

//             <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
//               Immediate care when you need it most.
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-slate-500">
//               Rapid medical support for urgent and life-threatening
//               conditions.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {emergencyServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={service.title}
//                   variants={fadeUp}
//                   className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
//                 >
//                   {/* Watermark */}
//                   <Icon className="absolute -right-3 -top-3 h-20 w-20 rotate-12 text-slate-50 transition group-hover:text-red-50" />

//                   <div className="relative">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
//                       <Icon className="h-5 w-5" />
//                     </div>

//                     <h3 className="mt-4 text-base font-black text-[#063B5C]">
//                       {service.title}
//                     </h3>

//                     <p className="mt-2 text-xs leading-6 text-slate-500">
//                       {service.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           EMERGENCY DEPARTMENT
//       ===================================================== */}

//       <section className="bg-slate-50 py-14 sm:py-16">
//         <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           {/* IMAGE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -25,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] shadow-xl sm:h-[360px]">
//               <Image
//                 src="/images/emergency-ambulance-india.jpg"
//                 alt="Emergency medical services"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/80 to-transparent" />

//               <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
//                     <ShieldCheck className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-black">
//                       Advanced Emergency Care
//                     </p>
//                     <p className="text-xs text-white/60">
//                       Experienced team • Modern facilities
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* CONTENT */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//           >
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Department
//             </p>

//             <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
//               Ready to respond when you need us.
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-slate-600">
//               Our emergency department provides immediate assessment,
//               stabilization and treatment for patients with urgent medical
//               needs.
//             </p>

//             <div className="mt-6 grid gap-3 sm:grid-cols-2">
//               {[
//                 "24-hour doctors & nurses",
//                 "Rapid patient assessment",
//                 "Advanced monitoring",
//                 "Critical care support",
//                 "Trauma management",
//                 "Ambulance coordination",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2 text-sm font-semibold text-slate-700"
//                 >
//                   <CheckCircle2 className="h-4 w-4 shrink-0 text-red-600" />
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <a
//               href={`tel:${EMERGENCY_PHONE}`}
//               className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
//             >
//               <Phone className="h-4 w-4" />
//               Contact Emergency Team
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHEN TO SEEK HELP
//       ===================================================== */}

//       <section className="py-14 sm:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
//                 When To Seek Help
//               </p>

//               <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
//                 Do not ignore serious symptoms.
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-slate-500">
//                 Seek immediate emergency medical attention for serious or
//                 potentially life-threatening symptoms.
//               </p>

//               <a
//                 href={`tel:${EMERGENCY_PHONE}`}
//                 className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
//               >
//                 <Phone className="h-4 w-4" />
//                 Call Emergency
//               </a>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {emergencyCases.map((item) => (
//                 <motion.div
//                   key={item}
//                   whileHover={{
//                     y: -2,
//                   }}
//                   className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
//                 >
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
//                     <ShieldAlert className="h-4 w-4" />
//                   </div>

//                   <span className="text-sm font-bold text-[#063B5C]">
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="bg-[#063B5C] py-14 text-white sm:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
//               Emergency Process
//             </p>

//             <h2 className="mt-2 text-2xl font-black sm:text-3xl">
//               What happens when you call us?
//             </h2>
//           </div>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {emergencySteps.map((step) => (
//               <motion.div
//                 key={step.number}
//                 whileHover={{
//                   y: -4,
//                 }}
//                 className="rounded-xl border border-white/10 bg-white/5 p-5"
//               >
//                 <span className="text-3xl font-black text-red-500/40">
//                   {step.number}
//                 </span>

//                 <h3 className="mt-2 font-black">{step.title}</h3>

//                 <p className="mt-2 text-xs leading-6 text-white/55">
//                   {step.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           EMERGENCY CONTACT + FORM
//       ===================================================== */}

//       <section className="bg-red-50/50 py-14 sm:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
//             {/* CONTACT */}

//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
//                 Contact Emergency
//               </p>

//               <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
//                 Need immediate assistance?
//               </h2>

//               <p className="mt-3 text-sm leading-7 text-slate-500">
//                 For a medical emergency, please call our emergency helpline
//                 directly.
//               </p>

//               <div className="mt-6 space-y-3">
//                 {/* PHONE */}

//                 <a
//                   href={`tel:${EMERGENCY_PHONE}`}
//                   className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
//                     <Phone className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                       24/7 Emergency
//                     </p>

//                     <p className="text-base font-black text-[#063B5C]">
//                       {EMERGENCY_DISPLAY}
//                     </p>
//                   </div>
//                 </a>

//                 {/* WHATSAPP */}

//                 <a
//                   href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
//                     <MessageCircle className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                       WhatsApp
//                     </p>

//                     <p className="text-base font-black text-[#063B5C]">
//                       Chat with Emergency Team
//                     </p>
//                   </div>
//                 </a>

//                 {/* LOCATION */}

//                 <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
//                     <MapPin className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                       Emergency Location
//                     </p>

//                     <p className="text-sm font-black text-[#063B5C]">
//                       Baderia Metro Prime Hospital
//                     </p>

//                     <p className="text-xs text-slate-500">
//                       Main Hospital Campus
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FORM */}

//             <motion.form
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{ once: true }}
//               onSubmit={handleSubmit}
//               className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-7"
//             >
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {/* NAME */}

//                 <div>
//                   <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
//                     <User className="h-3.5 w-3.5 text-red-600" />
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
//                   />
//                 </div>

//                 {/* PHONE */}

//                 <div>
//                   <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
//                     <Phone className="h-3.5 w-3.5 text-red-600" />
//                     Phone
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
//                   />
//                 </div>

//                 {/* LOCATION */}

//                 <div className="sm:col-span-2">
//                   <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
//                     <MapPin className="h-3.5 w-3.5 text-red-600" />
//                     Current Location
//                   </label>

//                   <input
//                     type="text"
//                     name="location"
//                     required
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Your current location"
//                     className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
//                   />
//                 </div>

//                 {/* MESSAGE */}

//                 <div className="sm:col-span-2">
//                   <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
//                     <MessageCircle className="h-3.5 w-3.5 text-red-600" />
//                     Emergency Details
//                   </label>

//                   <textarea
//                     name="message"
//                     required
//                     rows={3}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Briefly describe the emergency..."
//                     className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
//                   />
//                 </div>

//                 {/* SUBMIT */}

//                 <div className="sm:col-span-2">
//                   <button
//                     type="submit"
//                     className="group flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-red-700"
//                   >
//                     <Send className="h-4 w-4 transition group-hover:translate-x-1" />
//                     SEND EMERGENCY REQUEST
//                   </button>

//                   <p className="mt-2 text-center text-[10px] text-slate-400">
//                     Request will be sent directly through WhatsApp.
//                   </p>
//                 </div>
//               </div>
//             </motion.form>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOCATION
//       ===================================================== */}

//       <section id="location" className="py-14 sm:py-16">
//         <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <div>
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Location
//             </p>

//             <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
//               Find our Emergency Department.
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-slate-500">
//               The Emergency Department is located within the main hospital
//               campus and operates 24 hours a day.
//             </p>

//             <div className="mt-5 flex gap-3">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
//                 <MapPin className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-sm font-black text-[#063B5C]">
//                   Baderia Metro Prime Hospital
//                 </p>

//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Main Hospital Campus
//                   <br />
//                   Emergency Department
//                   <br />
//                   Open 24 Hours
//                 </p>
//               </div>
//             </div>

//             <a
//               href="https://www.google.com/maps/search/Baderia+Metro+Prime+Hospital+Jabalpur"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:border-red-500 hover:text-red-600"
//             >
//               <MapPin className="h-4 w-4" />
//               Get Directions
//               <ArrowRight className="h-4 w-4" />
//             </a>
//           </div>

//           {/* MAP */}

//           <div className="h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[340px]">
//             <iframe
//               src="https://www.google.com/maps?q=Baderia%20Metro%20Prime%20Hospital%20Jabalpur&output=embed"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//               }}
//               loading="lazy"
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Baderia Metro Prime Hospital Location"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="px-4 pb-14">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 to-red-600 px-5 py-10 text-center text-white shadow-xl sm:px-10">
//           <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
//           <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

//           <div className="relative">
//             <motion.div
//               animate={{
//                 scale: [1, 1.06, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//               className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15"
//             >
//               <Siren className="h-6 w-6" />
//             </motion.div>

//             <h2 className="mt-4 text-2xl font-black sm:text-3xl">
//               Medical Emergency?
//             </h2>

//             <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
//               Do not delay. Contact our emergency team or request an
//               ambulance immediately.
//             </p>

//             <div className="mt-5 flex flex-wrap justify-center gap-3">
//               <a
//                 href={`tel:${EMERGENCY_PHONE}`}
//                 className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-red-600 shadow-lg transition hover:-translate-y-1"
//               >
//                 <Phone className="h-4 w-4" />
//                 CALL EMERGENCY
//               </a>

//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
//               >
//                 <MessageCircle className="h-4 w-4" />
//                 WHATSAPP
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ambulance,
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Stethoscope,
  User,
} from "lucide-react";
import { useState } from "react";
import PageHero from './../components/Pagehero'

/* =========================================================
   CONSTANTS
========================================================= */

const EMERGENCY_PHONE = "+919575300110";
const EMERGENCY_DISPLAY = "+91 95753 00110";
const WHATSAPP_NUMBER = "919575300110";

/* =========================================================
   DATA
========================================================= */

const emergencyServices = [
  {
    icon: Ambulance,
    title: "24/7 Ambulance",
    text: "Rapid ambulance support with trained medical staff.",
  },
  {
    icon: Siren,
    title: "Trauma Care",
    text: "Immediate treatment for accidents and serious injuries.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care",
    text: "Advanced monitoring and life-support facilities.",
  },
  {
    icon: Stethoscope,
    title: "Emergency Doctors",
    text: "Experienced doctors and nurses available 24/7.",
  },
];

const emergencyCases = [
  "Severe chest pain",
  "Difficulty breathing",
  "Severe bleeding",
  "Loss of consciousness",
  "Serious accidents",
  "Stroke symptoms",
  "Severe burns",
  "Allergic reactions",
];

const emergencySteps = [
  {
    number: "01",
    title: "Call",
    text: "Contact our emergency helpline.",
  },
  {
    number: "02",
    title: "Ambulance",
    text: "Request ambulance support if required.",
  },
  {
    number: "03",
    title: "Assessment",
    text: "Our team assesses the patient immediately.",
  },
  {
    number: "04",
    title: "Treatment",
    text: "Urgent treatment begins without delay.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function EmergencyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  /* =======================================================
     FORM CHANGE
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =======================================================
     WHATSAPP SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "🚨 EMERGENCY REQUEST",
      "",
      `👤 Name: ${formData.name}`,
      `📞 Phone: ${formData.phone}`,
      `📍 Location: ${formData.location}`,
      `📝 Emergency: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* =====================================================
          FLOATING MOBILE CALL BUTTON
      ===================================================== */}

      <motion.a
        href={`tel:${EMERGENCY_PHONE}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-900/30 sm:hidden"
        aria-label="Call emergency"
      >
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-red-500"
        />

        <Phone className="relative h-6 w-6" />
      </motion.a>

      {/* =====================================================
          HERO
      ===================================================== */}


      <section className="relative overflow-hidden bg-[#120707]">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
          {/* HERO CONTENT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              24/7 Emergency Services
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
              Emergency Care
              <span className="mt-1 block text-red-500">
                When Every Second Matters.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Immediate medical assistance for accidents, injuries, sudden
              illness and critical conditions. Our emergency team is ready
              around the clock.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-1 hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                CALL EMERGENCY
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Emergency! I need medical assistance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                WHATSAPP
              </a>
            </div>

            {/* HELPLINE */}

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Emergency Helpline
                </p>

                <p className="mt-0.5 text-lg font-black">
                  {EMERGENCY_DISPLAY}
                </p>
              </div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="relative h-[330px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl sm:h-[390px]">
              <Image
                src="/assets/images/amu01.jpg"
                alt="24/7 Emergency ambulance service"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* OPEN BADGE */}

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-black text-white shadow-lg">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                OPEN 24/7
              </div>

              {/* IMAGE CARD */}

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600">
                    <Ambulance className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-black">Emergency Ambulance</p>

                    <p className="mt-0.5 text-xs text-white/60">
                      Fast response • Medical support • 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}

            <div className="absolute -bottom-4 -left-3 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Clock3 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    Available
                  </p>

                  <p className="text-sm font-black text-[#063B5C]">
                    24 Hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <section className="relative z-10 px-4">
        <div className="mx-auto -mt-5 grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-3">
          {/* CALL */}

          <a
            href={`tel:${EMERGENCY_PHONE}`}
            className="group flex items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Phone className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Call Emergency
              </p>

              <p className="text-[11px] text-slate-400">
                {EMERGENCY_DISPLAY}
              </p>
            </div>

            <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
          </a>

          {/* WHATSAPP */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-green-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                WhatsApp
              </p>

              <p className="text-[11px] text-slate-400">
                Instant assistance
              </p>
            </div>

            <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
          </a>

          {/* INTERNAL LINK */}

          <Link
            href="#location"
            className="group flex items-center gap-3 p-4 transition hover:bg-red-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Emergency Location
              </p>

              <p className="text-[11px] text-slate-400">
                Get directions
              </p>
            </div>

            <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Services
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
              Immediate care when you need it most.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Rapid medical support for urgent and life-threatening
              conditions.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {emergencyServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <Icon className="absolute -right-3 -top-3 h-20 w-20 rotate-12 text-slate-50 transition group-hover:text-red-50" />

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-black text-[#063B5C]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EMERGENCY DEPARTMENT
      ===================================================== */}

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* IMAGE */}

          <motion.div
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
            className="relative"
          >
            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] shadow-xl sm:h-[360px]">
              <Image
                src="/images/emergency-ambulance-india.jpg"
                alt="Emergency medical services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/80 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-black">
                      Advanced Emergency Care
                    </p>

                    <p className="text-xs text-white/60">
                      Experienced team • Modern facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Department
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
              Ready to respond when you need us.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our emergency department provides immediate assessment,
              stabilization and treatment for patients with urgent medical
              needs.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "24-hour doctors & nurses",
                "Rapid patient assessment",
                "Advanced monitoring",
                "Critical care support",
                "Trauma management",
                "Ambulance coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-red-600" />
                  {item}
                </div>
              ))}
            </div>

            {/* CALL ACTION */}

            <a
              href={`tel:${EMERGENCY_PHONE}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <Phone className="h-4 w-4" />
              Contact Emergency Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHEN TO SEEK HELP
      ===================================================== */}

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            {/* CONTENT */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                When To Seek Help
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
                Do not ignore serious symptoms.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Seek immediate emergency medical attention for serious or
                potentially life-threatening symptoms.
              </p>

              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                Call Emergency
              </a>
            </div>

            {/* CASES */}

            <div className="grid gap-3 sm:grid-cols-2">
              {emergencyCases.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -2,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <ShieldAlert className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-bold text-[#063B5C]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EMERGENCY PROCESS
      ===================================================== */}

      <section className="bg-[#063B5C] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
              Emergency Process
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              What happens when you call us?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencySteps.map((step) => (
              <motion.div
                key={step.number}
                whileHover={{
                  y: -4,
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-3xl font-black text-red-500/40">
                  {step.number}
                </span>

                <h3 className="mt-2 font-black">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/55">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className="bg-red-50/50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTACT */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Contact Emergency
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
                Need immediate assistance?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                For a medical emergency, please call our emergency helpline
                directly.
              </p>

              <div className="mt-6 space-y-3">
                {/* PHONE */}

                <a
                  href={`tel:${EMERGENCY_PHONE}`}
                  className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      24/7 Emergency
                    </p>

                    <p className="text-base font-black text-[#063B5C]">
                      {EMERGENCY_DISPLAY}
                    </p>
                  </div>
                </a>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp
                    </p>

                    <p className="text-base font-black text-[#063B5C]">
                      Chat with Emergency Team
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <Link
                  href="#location"
                  className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Emergency Location
                    </p>

                    <p className="text-sm font-black text-[#063B5C]">
                      Baderia Metro Prime Hospital
                    </p>

                    <p className="text-xs text-slate-500">
                      Main Hospital Campus
                    </p>
                  </div>

                  <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* FORM */}

            <motion.form
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* NAME */}

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
                    <User className="h-3.5 w-3.5 text-red-600" />
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
                    <Phone className="h-3.5 w-3.5 text-red-600" />
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* LOCATION */}

                <div className="sm:col-span-2">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
                    <MapPin className="h-3.5 w-3.5 text-red-600" />
                    Current Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your current location"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* MESSAGE */}

                <div className="sm:col-span-2">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#063B5C]">
                    <MessageCircle className="h-3.5 w-3.5 text-red-600" />
                    Emergency Details
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the emergency..."
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* SUBMIT */}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                  >
                    <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                    SEND EMERGENCY REQUEST
                  </button>

                  <p className="mt-2 text-center text-[10px] text-slate-400">
                    Request will be sent directly through WhatsApp.
                  </p>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="scroll-mt-20 py-14 sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* CONTENT */}

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Location
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#063B5C] sm:text-3xl">
              Find our Emergency Department.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The Emergency Department is located within the main hospital
              campus and operates 24 hours a day.
            </p>

            <div className="mt-5 flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-black text-[#063B5C]">
                  Baderia Metro Prime Hospital
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Main Hospital Campus
                  <br />
                  Emergency Department
                  <br />
                  Open 24 Hours
                </p>
              </div>
            </div>

            {/* GOOGLE MAPS EXTERNAL ACTION */}

            <a
              href="https://www.google.com/maps/search/Baderia+Metro+Prime+Hospital+Jabalpur"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-[#063B5C] transition hover:border-red-500 hover:text-red-600"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* MAP */}

          <div className="h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[340px]">
            <iframe
              src="https://www.google.com/maps?q=Baderia%20Metro%20Prime%20Hospital%20Jabalpur&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Baderia Metro Prime Hospital Location"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-4 pb-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 to-red-600 px-5 py-10 text-center text-white shadow-xl sm:px-10">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

          <div className="relative">
            {/* ICON */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15"
            >
              <Siren className="h-6 w-6" />
            </motion.div>

            <h2 className="mt-4 text-2xl font-black sm:text-3xl">
              Medical Emergency?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
              Do not delay. Contact our emergency team or request an
              ambulance immediately.
            </p>

            {/* CTA */}

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-red-600 shadow-lg transition hover:-translate-y-1"
              >
                <Phone className="h-4 w-4" />
                CALL EMERGENCY
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
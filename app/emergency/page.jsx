// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Ambulance,
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   MapPin,
//   Phone,
//   ShieldAlert,
//   ShieldCheck,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// const emergencyServices = [
//   {
//     icon: Ambulance,
//     title: "24/7 Ambulance",
//     description:
//       "Rapid ambulance support with trained medical staff for emergency transportation.",
//   },
//   {
//     icon: Stethoscope,
//     title: "Emergency Doctors",
//     description:
//       "Experienced emergency physicians available around the clock.",
//   },
//   {
//     icon: HeartPulse,
//     title: "Critical Care",
//     description:
//       "Immediate access to critical care and life-support facilities.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Trauma Care",
//     description:
//       "Rapid assessment and treatment for accidents and serious injuries.",
//   },
// ];

// const emergencySteps = [
//   {
//     number: "01",
//     title: "Call Emergency",
//     description:
//       "Call our emergency number immediately if you or someone else needs urgent medical assistance.",
//   },
//   {
//     number: "02",
//     title: "Share Your Location",
//     description:
//       "Tell our emergency team your location and briefly describe the medical situation.",
//   },
//   {
//     number: "03",
//     title: "Follow Medical Advice",
//     description:
//       "Follow the instructions given by our medical team while help is on the way.",
//   },
//   {
//     number: "04",
//     title: "Reach the Emergency Department",
//     description:
//       "Our emergency team will begin assessment and treatment as soon as you arrive.",
//   },
// ];

// export default function Emergencypage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* =====================================================
//           EMERGENCY HERO
//       ====================================================== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-[#063B5C]">
//         {/* Background decorations */}
//         <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
//         <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-red-300/10 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
//           {/* Hero Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-white"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
//               <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
//               Emergency Department Open 24/7
//             </div>

//             <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//               Emergency Care
//               <span className="block text-red-100">
//                 When Every Second Matters.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
//               Our emergency department provides immediate medical attention
//               for serious illness, accidents, injuries and life-threatening
//               conditions.
//             </p>

//             {/* Emergency Call */}
//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-red-600 shadow-xl transition hover:-translate-y-1"
//               >
//                 <Phone className="h-5 w-5" />
//                 Call Emergency
//               </a>

//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
//               >
//                 <Ambulance className="h-5 w-5" />
//                 Request Ambulance
//               </a>
//             </div>

//             {/* Emergency Number */}
//             <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-500">
//                 <Phone className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="text-sm text-white/60">
//                   Emergency Helpline
//                 </p>

//                 <p className="text-2xl font-bold">
//                   +91 98765 43210
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl sm:h-[500px]">
//               <Image
//                 src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
//                 alt="Emergency medical team"
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
//                     <ShieldAlert className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="font-bold">
//                       Immediate Medical Attention
//                     </p>

//                     <p className="text-sm text-white/70">
//                       Emergency care available 24 hours a day.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           EMERGENCY NOTICE
//       ====================================================== */}
//       <section className="relative z-10 -mt-8 px-4">
//         <div className="mx-auto max-w-6xl rounded-2xl border border-red-100 bg-white p-6 shadow-xl sm:p-8">
//           <div className="flex flex-col gap-5 md:flex-row md:items-center">
//             <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
//               <ShieldAlert className="h-7 w-7" />
//             </div>

//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-[#063B5C]">
//                 Medical Emergency?
//               </h2>

//               <p className="mt-1 text-sm leading-6 text-slate-500">
//                 If you are experiencing a life-threatening emergency, call
//                 immediately or visit our Emergency Department.
//               </p>
//             </div>

//             <a
//               href="tel:+919876543210"
//               className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 font-bold text-white transition hover:bg-red-600"
//             >
//               <Phone className="h-5 w-5" />
//               +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           EMERGENCY SERVICES
//       ====================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-bold uppercase tracking-widest text-red-500">
//               Emergency Services
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               Immediate care when you need it most.
//             </h2>

//             <p className="mt-4 leading-7 text-slate-500">
//               Our emergency team is equipped to handle a wide range of urgent
//               medical situations.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {emergencyServices.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={service.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-red-100 hover:shadow-xl"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold text-[#063B5C]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-500">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHEN TO VISIT
//       ====================================================== */}
//       <section className="bg-slate-50 py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-12 lg:grid-cols-2">
//             <div>
//               <p className="text-sm font-bold uppercase tracking-widest text-red-500">
//                 When To Seek Emergency Care
//               </p>

//               <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//                 Do not wait when it is urgent.
//               </h2>

//               <p className="mt-5 leading-8 text-slate-600">
//                 Emergency medical attention may be needed for sudden or severe
//                 symptoms. If you are unsure whether a situation is an
//                 emergency, contact our medical team.
//               </p>

//               <div className="mt-8 space-y-4">
//                 {[
//                   "Severe chest pain or pressure",
//                   "Difficulty breathing",
//                   "Severe bleeding or serious injury",
//                   "Loss of consciousness",
//                   "Sudden weakness or difficulty speaking",
//                   "Serious accidents or trauma",
//                   "Severe allergic reactions",
//                   "Other life-threatening conditions",
//                 ].map((item) => (
//                   <div key={item} className="flex items-center gap-3">
//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-red-500" />

//                     <span className="text-sm font-medium text-slate-700">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative h-[450px] overflow-hidden rounded-[2rem]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1551076805-e1869033e561"
//                   alt="Hospital emergency room"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover"
//                 />
//               </div>

//               <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
//                     <Clock3 className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-500">
//                       Emergency Department
//                     </p>

//                     <p className="font-bold text-[#063B5C]">
//                       Open 24 Hours
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           HOW IT WORKS
//       ====================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-widest text-red-500">
//               Emergency Process
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               What happens when you call?
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-4">
//             {emergencySteps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
//               >
//                 <span className="text-4xl font-black text-red-100">
//                   {step.number}
//                 </span>

//                 <h3 className="mt-4 text-lg font-bold text-[#063B5C]">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-slate-500">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOCATION
//       ====================================================== */}
//       <section className="bg-[#063B5C] py-16 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-3">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
//                 <MapPin className="h-6 w-6 text-teal-300" />
//               </div>

//               <div>
//                 <p className="font-bold">Emergency Department</p>

//                 <p className="mt-1 text-sm leading-6 text-white/60">
//                   Baderia Metro Prime Hospital
//                   <br />
//                   Main Hospital Campus
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
//                 <Clock3 className="h-6 w-6 text-teal-300" />
//               </div>

//               <div>
//                 <p className="font-bold">Opening Hours</p>

//                 <p className="mt-1 text-sm text-white/60">
//                   Emergency Department
//                   <br />
//                   Open 24 Hours / 7 Days
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
//                 <Users className="h-6 w-6 text-teal-300" />
//               </div>

//               <div>
//                 <p className="font-bold">Emergency Team</p>

//                 <p className="mt-1 text-sm text-white/60">
//                   Doctors, nurses and
//                   <br />
//                   trained emergency staff
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="px-4 py-20">
//         <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-red-500 to-red-600 px-6 py-14 text-center text-white shadow-xl sm:px-12">
//           <ShieldAlert className="mx-auto h-12 w-12" />

//           <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
//             In a medical emergency?
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
//             Do not delay. Contact our emergency team or come directly to the
//             Emergency Department.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//               href="tel:+919876543210"
//               className="flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-red-600 transition hover:-translate-y-1"
//             >
//               <Phone className="h-5 w-5" />
//               Call +91 98765 43210
//             </a>

//             <Link
//               href="/contact"
//               className="flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
//             >
//               <MapPin className="h-5 w-5" />
//               Get Directions
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




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
//   Phone,
//   ShieldAlert,
//   ShieldCheck,
//   Siren,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// const emergencyServices = [
//   {
//     icon: Ambulance,
//     title: "24/7 Ambulance Service",
//     description:
//       "Fast and reliable ambulance transportation with trained medical support.",
//   },
//   {
//     icon: Siren,
//     title: "Trauma & Accident Care",
//     description:
//       "Immediate medical attention for road accidents, injuries and trauma cases.",
//   },
//   {
//     icon: HeartPulse,
//     title: "Critical Care",
//     description:
//       "Immediate access to critical care, monitoring and life-support facilities.",
//   },
//   {
//     icon: Stethoscope,
//     title: "Emergency Doctors",
//     description:
//       "Experienced emergency physicians and trained nursing staff available 24/7.",
//   },
// ];

// const emergencyCases = [
//   "Severe chest pain",
//   "Difficulty breathing",
//   "Severe bleeding",
//   "Loss of consciousness",
//   "Serious accidents",
//   "Severe burns",
//   "Stroke symptoms",
//   "Severe allergic reaction",
// ];

// const emergencySteps = [
//   {
//     number: "01",
//     title: "Call Us",
//     description:
//       "Call our emergency helpline immediately and explain the situation.",
//   },
//   {
//     number: "02",
//     title: "Request Ambulance",
//     description:
//       "If transportation is required, our ambulance team can assist you.",
//   },
//   {
//     number: "03",
//     title: "Emergency Assessment",
//     description:
//       "Our emergency team will assess the patient immediately upon arrival.",
//   },
//   {
//     number: "04",
//     title: "Immediate Treatment",
//     description:
//       "Treatment begins according to the patient's medical condition.",
//   },
// ];

// const emergencyNumbers = [
//   {
//     title: "Emergency Helpline",
//     number: "+91 98765 43210",
//     icon: Phone,
//   },
//   {
//     title: "Ambulance",
//     number: "+91 98765 43211",
//     icon: Ambulance,
//   },
// ];

// export default function Emergencypage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* =========================================================
//           TOP EMERGENCY BAR
//       ========================================================== */}
//       <div className="bg-red-700 text-white">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-sm sm:flex-row sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 font-semibold">
//             <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
//             Emergency Department Open 24/7
//           </div>

//           <a
//             href="tel:+919876543210"
//             className="flex items-center gap-2 font-bold hover:text-red-100"
//           >
//             <Phone className="h-4 w-4" />
//             Emergency: +91 98765 43210
//           </a>
//         </div>
//       </div>

//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#160707]">
//         {/* Background decoration */}
//         <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />

//         <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-red-500/10 blur-3xl" />

//         <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-white"
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-300 backdrop-blur">
//               <Siren className="h-4 w-4" />
//               Emergency Medical Services
//             </div>

//             <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Emergency Care
//               <span className="mt-2 block text-red-500">
//                 When Every Second Matters.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
//               Immediate medical assistance for accidents, injuries, sudden
//               illness and other life-threatening conditions. Our emergency
//               team is available around the clock.
//             </p>

//             {/* CTA */}
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-950/50 transition hover:-translate-y-1 hover:bg-red-700"
//               >
//                 <Phone className="h-5 w-5" />
//                 CALL EMERGENCY
//               </a>

//               <a
//                 href="tel:+919876543211"
//                 className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
//               >
//                 <Ambulance className="h-5 w-5 text-red-400" />
//                 REQUEST AMBULANCE
//               </a>
//             </div>

//             {/* Emergency Number */}
//             <div className="mt-8 flex items-center gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-900/40">
//                 <Phone className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="text-xs uppercase tracking-widest text-white/40">
//                   24/7 Emergency Helpline
//                 </p>

//                 <p className="mt-1 text-2xl font-black">
//                   +91 98765 43210
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT AMBULANCE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: 40 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50 sm:h-[520px]">
//               <Image
//                 src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
//                 alt="Emergency ambulance service"
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 55vw"
//                 className="object-cover"
//               />

//               {/* Image overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-red-950/20" />

//               {/* 24/7 badge */}
//               <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-black text-white shadow-xl">
//                 <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
//                 OPEN 24/7
//               </div>

//               {/* Ambulance card */}
//               <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/40 p-5 text-white backdrop-blur-xl">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600">
//                     <Ambulance className="h-7 w-7" />
//                   </div>

//                   <div>
//                     <p className="text-lg font-black">
//                       Emergency Ambulance
//                     </p>

//                     <p className="mt-1 text-sm text-white/60">
//                       Fast response • Medical support • 24/7
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating card */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-2xl sm:-left-8"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                   <Clock3 className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-slate-500">
//                     Response Available
//                   </p>

//                   <p className="font-black text-[#063B5C]">
//                     24 Hours
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================================
//           EMERGENCY QUICK ACTIONS
//       ========================================================== */}
//       <section className="relative z-10 -mt-7 px-4">
//         <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-3">
//           <a
//             href="tel:+919876543210"
//             className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
//               <Phone />
//             </div>

//             <div>
//               <p className="font-black text-[#063B5C]">
//                 Call Emergency
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 +91 98765 43210
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </a>

//           <a
//             href="tel:+919876543211"
//             className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
//               <Ambulance />
//             </div>

//             <div>
//               <p className="font-black text-[#063B5C]">
//                 Request Ambulance
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Fast medical transport
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </a>

//           <Link
//             href="/contact"
//             className="group flex items-center gap-4 p-6 transition hover:bg-red-50"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
//               <MapPin />
//             </div>

//             <div>
//               <p className="font-black text-[#063B5C]">
//                 Find Emergency Department
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Get hospital directions
//               </p>
//             </div>

//             <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </section>

//       {/* =========================================================
//           EMERGENCY SERVICES
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Services
//             </p>

//             <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//               Immediate care when you need it most.
//             </h2>

//             <p className="mt-4 leading-7 text-slate-500">
//               Our emergency department is equipped to provide rapid medical
//               attention for urgent and life-threatening conditions.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {emergencyServices.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={service.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-xl"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="mt-6 text-lg font-black text-[#063B5C]">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-500">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EMERGENCY ROOM SECTION
//       ========================================================== */}
//       <section className="bg-slate-50 py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative h-[470px] overflow-hidden rounded-[2rem] shadow-xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1551076805-e1869033e561"
//                 alt="Modern emergency room"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
//                     <ShieldCheck className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="font-black">
//                       Advanced Emergency Department
//                     </p>

//                     <p className="text-sm text-white/70">
//                       Modern equipment and experienced staff
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* CONTENT */}
//           <div>
//             <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Department
//             </p>

//             <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//               Ready to respond when you need us.
//             </h2>

//             <p className="mt-5 leading-8 text-slate-600">
//               Our emergency department provides immediate assessment,
//               stabilization and treatment for patients with urgent medical
//               needs.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "24-hour emergency doctors and nurses",
//                 "Rapid patient assessment",
//                 "Advanced monitoring equipment",
//                 "Critical care support",
//                 "Trauma and accident management",
//                 "Ambulance coordination",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />

//                   <span className="text-sm font-semibold text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <a
//               href="tel:+919876543210"
//               className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
//             >
//               <Phone className="h-5 w-5" />
//               Contact Emergency Team
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHEN TO VISIT
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
//             <div>
//               <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
//                 When To Seek Help
//               </p>

//               <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//                 Do not ignore serious symptoms.
//               </h2>

//               <p className="mt-5 leading-8 text-slate-500">
//                 If you or someone around you experiences a serious or
//                 potentially life-threatening condition, seek emergency medical
//                 attention immediately.
//               </p>

//               <a
//                 href="tel:+919876543210"
//                 className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
//               >
//                 <Phone className="h-5 w-5" />
//                 Call Emergency
//               </a>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {emergencyCases.map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.05 }}
//                   className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5"
//                 >
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
//                     <ShieldAlert className="h-5 w-5" />
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

//       {/* =========================================================
//           EMERGENCY PROCESS
//       ========================================================== */}
//       <section className="bg-[#063B5C] py-20 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300">
//               Emergency Process
//             </p>

//             <h2 className="mt-3 text-3xl font-black sm:text-4xl">
//               What happens when you call us?
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-4">
//             {emergencySteps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative rounded-2xl border border-white/10 bg-white/5 p-7"
//               >
//                 <span className="text-4xl font-black text-red-500/30">
//                   {step.number}
//                 </span>

//                 <h3 className="mt-4 text-xl font-black">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-white/55">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CONTACT / EMERGENCY NUMBERS
//       ========================================================== */}
//       <section className="bg-red-50 py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-6 md:grid-cols-2">
//             {emergencyNumbers.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <a
//                   key={item.title}
//                   href={`tel:${item.number.replace(/\s/g, "")}`}
//                   className="group flex items-center gap-5 rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//                 >
//                   <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-slate-500">
//                       {item.title}
//                     </p>

//                     <p className="mt-1 text-2xl font-black text-[#063B5C]">
//                       {item.number}
//                     </p>
//                   </div>

//                   <ArrowRight className="ml-auto h-5 w-5 text-red-500 transition group-hover:translate-x-1" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCATION
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <div>
//             <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
//               Emergency Location
//             </p>

//             <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
//               Find our Emergency Department.
//             </h2>

//             <p className="mt-5 leading-8 text-slate-500">
//               Our Emergency Department is located within the main hospital
//               campus and is accessible 24 hours a day.
//             </p>

//             <div className="mt-8 flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                 <MapPin className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="font-black text-[#063B5C]">
//                   Baderia Metro Prime Hospital
//                 </p>

//                 <p className="mt-1 text-sm leading-6 text-slate-500">
//                   Main Hospital Campus
//                   <br />
//                   Emergency Department
//                   <br />
//                   Open 24 Hours
//                 </p>
//               </div>
//             </div>

//             <Link
//               href="/contact"
//               className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 font-bold text-[#063B5C] transition hover:border-red-500 hover:text-red-600"
//             >
//               <MapPin className="h-5 w-5" />
//               Get Directions
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           {/* MAP PLACEHOLDER */}
//           <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-slate-100">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
//                   <MapPin className="h-8 w-8" />
//                 </div>

//                 <p className="mt-4 font-black text-[#063B5C]">
//                   Emergency Department
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Hospital Main Campus
//                 </p>

//                 <Link
//                   href="/contact"
//                   className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#063B5C] px-5 py-2.5 text-sm font-bold text-white"
//                 >
//                   View Location
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}
//       <section className="px-4 pb-20">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-700 via-red-600 to-[#991B1B] px-6 py-16 text-center text-white shadow-2xl sm:px-12">
//           <div className="absolute left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10 blur-3xl" />

//           <div className="absolute bottom-[-100px] right-[-50px] h-72 w-72 rounded-full bg-black/10 blur-3xl" />

//           <div className="relative">
//             <motion.div
//               animate={{ scale: [1, 1.08, 1] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//               className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15"
//             >
//               <Siren className="h-8 w-8" />
//             </motion.div>

//             <h2 className="mt-6 text-3xl font-black sm:text-4xl">
//               Medical Emergency?
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
//               Do not delay. Call our emergency team or request an ambulance
//               immediately.
//             </p>

//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-red-600 shadow-xl transition hover:-translate-y-1"
//               >
//                 <Phone className="h-5 w-5" />
//                 CALL EMERGENCY
//               </a>

//               <a
//                 href="tel:+919876543211"
//                 className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-4 font-black text-white transition hover:bg-white/10"
//               >
//                 <Ambulance className="h-5 w-5" />
//                 REQUEST AMBULANCE
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
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";

const emergencyServices = [
  {
    icon: Ambulance,
    title: "24/7 Ambulance Service",
    description:
      "Fast and reliable ambulance transportation with trained medical support.",
  },
  {
    icon: Siren,
    title: "Trauma & Accident Care",
    description:
      "Immediate medical attention for road accidents, injuries and trauma cases.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care",
    description:
      "Immediate access to critical care, monitoring and life-support facilities.",
  },
  {
    icon: Stethoscope,
    title: "Emergency Doctors",
    description:
      "Experienced emergency physicians and trained nursing staff available 24/7.",
  },
];

const emergencyCases = [
  "Severe chest pain",
  "Difficulty breathing",
  "Severe bleeding",
  "Loss of consciousness",
  "Serious accidents",
  "Severe burns",
  "Stroke symptoms",
  "Severe allergic reaction",
];

const emergencySteps = [
  {
    number: "01",
    title: "Call Us",
    description:
      "Call our emergency helpline immediately and explain the situation.",
  },
  {
    number: "02",
    title: "Request Ambulance",
    description:
      "If transportation is required, our ambulance team can assist you.",
  },
  {
    number: "03",
    title: "Emergency Assessment",
    description:
      "Our emergency team will assess the patient immediately upon arrival.",
  },
  {
    number: "04",
    title: "Immediate Treatment",
    description:
      "Treatment begins according to the patient's medical condition.",
  },
];

const emergencyNumbers = [
  {
    title: "Emergency Helpline",
    number: "+91 98765 43210",
    icon: Phone,
  },
  {
    title: "Ambulance",
    number: "+91 98765 43211",
    icon: Ambulance,
  },
];

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* TOP EMERGENCY BAR */}
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-sm sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-semibold">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
            Emergency Department Open 24/7
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 font-bold transition hover:text-red-100"
          >
            <Phone className="h-4 w-4" />
            Emergency: +91 98765 43210
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#160707]">
        <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-300 backdrop-blur">
              <Siren className="h-4 w-4" />
              Emergency Medical Services
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Emergency Care
              <span className="mt-2 block text-red-500">
                When Every Second Matters.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Immediate medical assistance for accidents, injuries, sudden
              illness and other life-threatening conditions. Our emergency
              team is available around the clock.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-950/50 transition hover:-translate-y-1 hover:bg-red-700"
              >
                <Phone className="h-5 w-5" />
                CALL EMERGENCY
              </a>

              <a
                href="tel:+919876543211"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Ambulance className="h-5 w-5 text-red-400" />
                REQUEST AMBULANCE
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-900/40">
                <Phone className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  24/7 Emergency Helpline
                </p>

                <p className="mt-1 text-2xl font-black">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50 sm:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
                alt="Emergency ambulance service"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-red-950/20" />

              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-black text-white shadow-xl">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
                OPEN 24/7
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/40 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <Ambulance className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-lg font-black">
                      Emergency Ambulance
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Fast response • Medical support • 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-2xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Response Available
                  </p>

                  <p className="font-black text-[#063B5C]">
                    24 Hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="relative z-10 -mt-7 px-4">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-3">
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Phone />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Call Emergency
              </p>

              <p className="mt-1 text-xs text-slate-500">
                +91 98765 43210
              </p>
            </div>

            <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </a>

          <a
            href="tel:+919876543211"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-red-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Ambulance />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Request Ambulance
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Fast medical transport
              </p>
            </div>

            <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </a>

          <Link
            href="/contact"
            className="group flex items-center gap-4 p-6 transition hover:bg-red-50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <MapPin />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Find Emergency Department
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Get hospital directions
              </p>
            </div>

            <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Services
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
              Immediate care when you need it most.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Our emergency department is equipped to provide rapid medical
              attention for urgent and life-threatening conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-[#063B5C]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMERGENCY DEPARTMENT */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[470px] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561"
                alt="Modern emergency room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-black">
                      Advanced Emergency Department
                    </p>

                    <p className="text-sm text-white/70">
                      Modern equipment and experienced staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Department
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
              Ready to respond when you need us.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our emergency department provides immediate assessment,
              stabilization and treatment for patients with urgent medical
              needs.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "24-hour emergency doctors and nurses",
                "Rapid patient assessment",
                "Advanced monitoring equipment",
                "Critical care support",
                "Trauma and accident management",
                "Ambulance coordination",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:+919876543210"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
            >
              <Phone className="h-5 w-5" />
              Contact Emergency Team
            </a>
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK HELP */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
                When To Seek Help
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
                Do not ignore serious symptoms.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                If you or someone around you experiences a serious or
                potentially life-threatening condition, seek emergency medical
                attention immediately.
              </p>

              <a
                href="tel:+919876543210"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                <Phone className="h-5 w-5" />
                Call Emergency
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {emergencyCases.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <ShieldAlert className="h-5 w-5" />
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

      {/* PROCESS */}
      <section className="bg-[#063B5C] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300">
              Emergency Process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What happens when you call us?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {emergencySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-4xl font-black text-red-500/30">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY NUMBERS */}
      <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {emergencyNumbers.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={`tel:${item.number.replace(/\s/g, "")}`}
                  className="group flex items-center gap-5 rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {item.title}
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#063B5C]">
                      {item.number}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto h-5 w-5 text-red-500 transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Emergency Location
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl">
              Find our Emergency Department.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Our Emergency Department is located within the main hospital
              campus and is accessible 24 hours a day.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <MapPin className="h-6 w-6" />
              </div>

              <div>
                <p className="font-black text-[#063B5C]">
                  Baderia Metro Prime Hospital
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Main Hospital Campus
                  <br />
                  Emergency Department
                  <br />
                  Open 24 Hours
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 font-bold text-[#063B5C] transition hover:border-red-500 hover:text-red-600"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-slate-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <MapPin className="h-8 w-8" />
                </div>

                <p className="mt-4 font-black text-[#063B5C]">
                  Emergency Department
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Hospital Main Campus
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#063B5C] px-5 py-2.5 text-sm font-bold text-white"
                >
                  View Location
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-700 via-red-600 to-[#991B1B] px-6 py-16 text-center text-white shadow-2xl sm:px-12">
          <div className="absolute left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-50px] h-72 w-72 rounded-full bg-black/10 blur-3xl" />

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15"
            >
              <Siren className="h-8 w-8" />
            </motion.div>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl">
              Medical Emergency?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Do not delay. Call our emergency team or request an ambulance
              immediately.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-red-600 shadow-xl transition hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                CALL EMERGENCY
              </a>

              <a
                href="tel:+919876543211"
                className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-4 font-black text-white transition hover:bg-white/10"
              >
                <Ambulance className="h-5 w-5" />
                REQUEST AMBULANCE
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, CalendarDays, HeartPulse, ShieldCheck } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
//       {/* Background decoration */}
//       <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
//       <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

//       <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        
//         {/* Left Content */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-[#0A7A78] shadow-sm"
//           >
//             <HeartPulse className="h-4 w-4" />
//             Trusted Healthcare Excellence
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="text-4xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-5xl lg:text-6xl"
//           >
//             Your Health Is Our
//             <span className="block text-[#0A7A78]">
//               Highest Priority.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.25 }}
//             className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
//           >
//             Experience compassionate care, advanced medical technology, and
//             trusted specialists at Baderia Metro Prime Hospital.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="mt-8 flex flex-wrap gap-4"
//           >
//             <Link
//               href="/appointment"
//               className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-1 hover:bg-[#086663]"
//             >
//               <CalendarDays className="h-5 w-5" />
//               Book Appointment
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>

//             <Link
//               href="/services"
//               className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
//             >
//               Explore Services
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.55 }}
//             className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-7"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-[#063B5C]">24/7</h3>
//               <p className="mt-1 text-xs text-slate-500">Emergency Care</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-[#063B5C]">50+</h3>
//               <p className="mt-1 text-xs text-slate-500">Specialists</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-[#063B5C]">10K+</h3>
//               <p className="mt-1 text-xs text-slate-500">Happy Patients</p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Right Visual */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, x: 40 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative flex justify-center"
//         >
//           <div className="relative flex h-[420px] w-full max-w-[500px] items-center justify-center rounded-[2rem] border border-white bg-gradient-to-br from-[#0A7A78] to-[#063B5C] shadow-2xl shadow-teal-900/20 sm:h-[520px]">
            
//             {/* Placeholder visual */}
//             <div className="text-center text-white">
//               <motion.div
//                 animate={{ y: [0, -12, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm"
//               >
//                 <HeartPulse className="h-14 w-14" />
//               </motion.div>

//               <h2 className="mt-6 text-2xl font-bold">
//                 Caring For Your Health
//               </h2>

//               <p className="mt-2 text-sm text-white/70">
//                 Advanced care. Compassionate hearts.
//               </p>
//             </div>

//             {/* Floating card */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8"
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                 <ShieldCheck className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-[#063B5C]">
//                   Trusted Care
//                 </p>
//                 <p className="text-xs text-slate-500">
//                   Your health, our commitment
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// new code 
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Award,
//   Baby,
//   BedDouble,
//   CalendarDays,
//   CheckCircle2,
//   ChevronRight,
//   Clock3,
//   HeartHandshake,
//   HeartPulse,
//   Microscope,
//   Phone,
//   Play,
//   ShieldCheck,
//   Stethoscope,
//   Syringe,
//   Users,
// } from "lucide-react";

// const departments = [
//   {
//     title: "Cardiology",
//     description:
//       "Advanced diagnosis and treatment for heart and cardiovascular conditions.",
//     icon: HeartPulse,
//   },
//   {
//     title: "Neurology",
//     description:
//       "Specialized care for neurological disorders with advanced technology.",
//     icon: Microscope,
//   },
//   {
//     title: "Orthopedics",
//     description:
//       "Comprehensive treatment for bones, joints, muscles and movement.",
//     icon: Stethoscope,
//   },
//   {
//     title: "Pediatrics",
//     description:
//       "Gentle, specialized healthcare for infants, children and adolescents.",
//     icon: Baby,
//   },
//   {
//     title: "General Medicine",
//     description:
//       "Complete medical consultation, diagnosis and preventive healthcare.",
//     icon: Syringe,
//   },
//   {
//     title: "Emergency Care",
//     description:
//       "24/7 emergency medical services supported by experienced specialists.",
//     icon: ShieldCheck,
//   },
// ];

// const doctors = [
//   {
//     name: "Dr. Rajesh Sharma",
//     specialty: "Senior Cardiologist",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
//   },
//   {
//     name: "Dr. Priya Mehta",
//     specialty: "Senior Neurologist",
//     image:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
//   },
//   {
//     name: "Dr. Amit Verma",
//     specialty: "Orthopedic Surgeon",
//     image:
//       "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
//   },
// ];

// const testimonials = [
//   {
//     name: "Rahul Singh",
//     text: "The doctors and nursing staff were extremely caring and professional. The entire experience was smooth and reassuring.",
//   },
//   {
//     name: "Neha Gupta",
//     text: "Excellent hospital with modern facilities. The doctors explained everything clearly and made us feel comfortable.",
//   },
//   {
//     name: "Arjun Patel",
//     text: "Very clean environment, helpful staff and excellent medical care. Highly recommended for families.",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-white">
//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50">
//         <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
//         <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

//         <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-[#0A7A78] shadow-sm">
//               <HeartPulse className="h-4 w-4" />
//               Trusted Healthcare Excellence
//             </div>

//             <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#063B5C] sm:text-5xl lg:text-6xl">
//               Your Health Is Our
//               <span className="block text-[#0A7A78]">
//                 Highest Priority.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
//               Experience compassionate care, advanced medical technology and
//               trusted specialists at Baderia Metro Prime Hospital.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/appointment"
//                 className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-1 hover:bg-[#086663]"
//               >
//                 <CalendarDays className="h-5 w-5" />
//                 Book Appointment
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="/doctors"
//                 className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
//               >
//                 Find a Doctor
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>

//             <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5 text-[#0A7A78]" />
//                 Experienced Specialists
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5 text-[#0A7A78]" />
//                 Modern Facilities
//               </div>
//             </div>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, x: 40 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative mx-auto h-[430px] max-w-[520px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[550px]">
//               <Image
//                 src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
//                 alt="Modern hospital building"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
//                     <HeartPulse className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="font-bold">Advanced Healthcare</p>
//                     <p className="text-sm text-white/80">
//                       Compassionate care for every patient
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating emergency card */}
//             <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
//                   <Phone className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-slate-500">
//                     Emergency
//                   </p>
//                   <p className="font-bold text-[#063B5C]">+91 98765 43210</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================================
//           QUICK ACTIONS
//       ========================================================== */}
//       <section className="relative z-10 -mt-8 px-4">
//         <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10 sm:grid-cols-3">
//           <Link
//             href="/appointment"
//             className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-teal-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//               <CalendarDays />
//             </div>

//             <div>
//               <p className="font-bold text-[#063B5C]">Book Appointment</p>
//               <p className="text-sm text-slate-500">Schedule your visit</p>
//             </div>

//             <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </Link>

//           <Link
//             href="/doctors"
//             className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-teal-50 sm:border-b-0 sm:border-r"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Users />
//             </div>

//             <div>
//               <p className="font-bold text-[#063B5C]">Find a Doctor</p>
//               <p className="text-sm text-slate-500">Meet our specialists</p>
//             </div>

//             <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </Link>

//           <Link
//             href="/emergency"
//             className="group flex items-center gap-4 p-6 transition hover:bg-red-50"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
//               <Phone />
//             </div>

//             <div>
//               <p className="font-bold text-[#063B5C]">Emergency Care</p>
//               <p className="text-sm text-slate-500">Available 24/7</p>
//             </div>

//             <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </section>

//       {/* =========================================================
//           STATS
//       ========================================================== */}
//       <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//           {[
//             ["25+", "Years of Excellence"],
//             ["50+", "Expert Doctors"],
//             ["10K+", "Happy Patients"],
//             ["24/7", "Emergency Care"],
//           ].map(([number, label], index) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center"
//             >
//               <h3 className="text-3xl font-bold text-[#0A7A78] sm:text-4xl">
//                 {number}
//               </h3>
//               <p className="mt-2 text-sm text-slate-500">{label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* =========================================================
//           ABOUT
//       ========================================================== */}
//       <section className="bg-slate-50 py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <div className="relative">
//             <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
//               <Image
//                 src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
//                 alt="Hospital interior"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>

//             <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#0A7A78] p-5 text-white shadow-xl sm:-right-8">
//               <Award className="h-8 w-8" />
//               <p className="mt-2 text-sm font-semibold">
//                 Excellence in Healthcare
//               </p>
//             </div>
//           </div>

//           <div>
//             <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
//               About Our Hospital
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               Healthcare built around you.
//             </h2>

//             <p className="mt-6 leading-8 text-slate-600">
//               Baderia Metro Prime Hospital is committed to providing
//               high-quality healthcare with compassion, innovation and
//               patient-first service.
//             </p>

//             <p className="mt-4 leading-8 text-slate-600">
//               Our multidisciplinary team combines medical expertise,
//               advanced technology and modern infrastructure to provide
//               comprehensive care for patients and families.
//             </p>

//             <div className="mt-7 space-y-4">
//               {[
//                 "Highly experienced medical specialists",
//                 "Advanced diagnostic and treatment technology",
//                 "Patient-centered healthcare experience",
//                 "Modern and comfortable hospital facilities",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A7A78]" />
//                   <span className="text-sm font-medium text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0A7A78]"
//             >
//               Learn More About Us
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           DEPARTMENTS
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
//                 Our Departments
//               </p>

//               <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//                 Specialized care for every need.
//               </h2>
//             </div>

//             <Link
//               href="/departments"
//               className="flex items-center gap-2 font-semibold text-[#0A7A78]"
//             >
//               View All Departments
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {departments.map((department, index) => {
//               const Icon = department.icon;

//               return (
//                 <motion.div
//                   key={department.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78] transition group-hover:bg-[#0A7A78] group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold text-[#063B5C]">
//                     {department.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-500">
//                     {department.description}
//                   </p>

//                   <Link
//                     href="/departments"
//                     className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A7A78]"
//                   >
//                     Learn More
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           DOCTORS
//       ========================================================== */}
//       <section className="bg-[#063B5C] py-20 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
//                 Our Specialists
//               </p>

//               <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
//                 Meet our expert doctors.
//               </h2>
//             </div>

//             <Link
//               href="/doctors"
//               className="flex items-center gap-2 font-semibold text-teal-300"
//             >
//               View All Doctors
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-12 grid gap-7 md:grid-cols-3">
//             {doctors.map((doctor, index) => (
//               <motion.div
//                 key={doctor.name}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="overflow-hidden rounded-2xl bg-white text-[#063B5C]"
//               >
//                 <div className="relative h-72">
//                   <Image
//                     src={doctor.image}
//                     alt={doctor.name}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold">{doctor.name}</h3>
//                   <p className="mt-1 text-sm text-[#0A7A78]">
//                     {doctor.specialty}
//                   </p>

//                   <Link
//                     href="/appointment"
//                     className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-50 px-4 py-2 text-sm font-semibold text-[#0A7A78]"
//                   >
//                     Book Appointment
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY CHOOSE US
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
//               Why Choose Us
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               Everything you need for better healthcare.
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 icon: HeartHandshake,
//                 title: "Patient First",
//                 text: "Every decision starts with the needs and comfort of our patients.",
//               },
//               {
//                 icon: Award,
//                 title: "Expert Doctors",
//                 text: "Experienced specialists across multiple medical disciplines.",
//               },
//               {
//                 icon: Microscope,
//                 title: "Advanced Technology",
//                 text: "Modern diagnostic and treatment technologies for better outcomes.",
//               },
//               {
//                 icon: Clock3,
//                 title: "24/7 Support",
//                 text: "Round-the-clock emergency and critical care services.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="rounded-2xl bg-slate-50 p-7 text-center"
//                 >
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0A7A78] shadow-sm">
//                     <Icon />
//                   </div>

//                   <h3 className="mt-5 font-bold text-[#063B5C]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-500">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FACILITIES
//       ========================================================== */}
//       <section className="bg-slate-50 py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-12 lg:grid-cols-2">
//             <div>
//               <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
//                 Hospital Facilities
//               </p>

//               <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//                 Modern facilities designed for your comfort.
//               </h2>

//               <p className="mt-5 leading-8 text-slate-600">
//                 From advanced diagnostic services to comfortable patient rooms,
//                 our infrastructure is designed to support high-quality medical
//                 care.
//               </p>

//               <div className="mt-8 grid grid-cols-2 gap-5">
//                 {[
//                   [BedDouble, "Modern Patient Rooms"],
//                   [Microscope, "Advanced Diagnostics"],
//                   [ShieldCheck, "ICU & Critical Care"],
//                   [Clock3, "24/7 Emergency"],
//                 ].map(([Icon, title]) => (
//                   <div
//                     key={title}
//                     className="rounded-xl bg-white p-5 shadow-sm"
//                   >
//                     <Icon className="h-7 w-7 text-[#0A7A78]" />
//                     <p className="mt-3 text-sm font-bold text-[#063B5C]">
//                       {title}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative h-[450px] overflow-hidden rounded-[2rem]">
//               <Image
//                 src="https://images.unsplash.com/photo-1516841273335-e39b37888115"
//                 alt="Hospital facility"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TESTIMONIALS
//       ========================================================== */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-widest text-[#0A7A78]">
//               Patient Stories
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-[#063B5C] sm:text-4xl">
//               What our patients say.
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.name}
//                 className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
//               >
//                 <div className="flex gap-1 text-yellow-400">
//                   {"★★★★★".split("").map((star, index) => (
//                     <span key={index}>{star}</span>
//                   ))}
//                 </div>

//                 <p className="mt-5 text-sm leading-7 text-slate-600">
//                   "{testimonial.text}"
//                 </p>

//                 <div className="mt-6 border-t border-slate-100 pt-5">
//                   <p className="font-bold text-[#063B5C]">
//                     {testimonial.name}
//                   </p>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Patient
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           APPOINTMENT CTA
//       ========================================================== */}
//       <section className="px-4 pb-20">
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0A7A78] to-[#063B5C]">
//           <div className="relative px-6 py-14 text-center text-white sm:px-12 sm:py-16">
//             <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
//             <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

//             <div className="relative">
//               <HeartPulse className="mx-auto h-10 w-10 text-teal-200" />

//               <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
//                 Take the first step toward better health.
//               </h2>

//               <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
//                 Book an appointment with our experienced specialists and get
//                 personalized medical care for you and your family.
//               </p>

//               <div className="mt-8 flex flex-wrap justify-center gap-4">
//                 <Link
//                   href="/appointment"
//                   className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#063B5C] transition hover:-translate-y-1"
//                 >
//                   <CalendarDays className="h-5 w-5" />
//                   Book Appointment
//                 </Link>

//                 <a
//                   href="tel:+919876543210"
//                   className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
//                 >
//                   <Phone className="h-5 w-5" />
//                   Call Emergency
//                 </a>
//               </div>
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
  ArrowRight,
  Award,
  Baby,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import HeroSlider from './components/HeroSlider'

const departments = [
  {
    title: "Cardiology",
    description:
      "Advanced diagnosis and treatment for heart and cardiovascular conditions.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-500",
  },
  {
    title: "Neurology",
    description:
      "Specialized neurological care supported by experienced specialists and modern technology.",
    icon: Microscope,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Orthopedics",
    description:
      "Complete treatment for bones, joints, muscles and movement-related conditions.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Pediatrics",
    description:
      "Gentle and specialized healthcare for infants, children and adolescents.",
    icon: Baby,
    color: "bg-pink-50 text-pink-500",
  },
  {
    title: "General Medicine",
    description:
      "Comprehensive consultation, diagnosis and preventive healthcare.",
    icon: Syringe,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency medical services supported by trained doctors and nurses.",
    icon: ShieldCheck,
    color: "bg-red-50 text-red-600",
  },
];

// const doctors = [
//   {
//     name: "Dr. Rajesh Sharma",
//     specialty: "Senior Cardiologist",
//     experience: "18+ Years Experience",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
//   },
//   {
//     name: "Dr. Priya Mehta",
//     specialty: "Senior Neurologist",
//     experience: "15+ Years Experience",
//     image:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
//   },
//   {
//     name: "Dr. Amit Verma",
//     specialty: "Orthopedic Surgeon",
//     experience: "16+ Years Experience",
//     image:
//       "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
//   },
// ];


const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Senior Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "Dr. Priya Mehta",
    specialty: "Senior Neurologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Amit Verma",
    specialty: "Orthopedic Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    name: "Dr. Neha Kapoor",
    specialty: "Senior Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
];

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "The doctors and nursing staff were extremely caring and professional. They explained every step clearly and made my family feel completely comfortable.",
  },
  {
    name: "Neha Gupta",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Excellent hospital with modern facilities and very supportive staff. The complete treatment experience was smooth and reassuring.",
  },
  {
    name: "Arjun Patel",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Very clean environment, helpful staff and excellent medical care. I would definitely recommend this hospital to my family and friends.",
  },
];

const stats = [
  ["25+", "Years of Excellence"],
  ["50+", "Expert Doctors"],
  ["10K+", "Happy Patients"],
  ["24/7", "Emergency Care"],
];

const facilities = [
  {
    icon: BedDouble,
    title: "Modern Patient Rooms",
    text: "Comfortable and hygienic rooms designed around patient recovery.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    text: "Modern diagnostic technology for accurate and timely treatment.",
  },
  {
    icon: ShieldCheck,
    title: "ICU & Critical Care",
    text: "Specialized critical care supported by trained medical professionals.",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency",
    text: "Immediate medical support whenever you need us.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* =========================================================
          TOP TRUST BAR
      ========================================================== */}
      {/* <div className="bg-[#063B5C] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-xs sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-semibold">
              Trusted Healthcare • Patient First
            </span>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 font-bold transition hover:text-teal-300"
          >
            <Phone className="h-3.5 w-3.5" />
            Emergency: +91 98765 43210
          </a>
        </div>
      </div> */}

      {/* =========================================================
          HERO
      ========================================================== */}
      <HeroSlider /> 

      {/* =========================================================
          QUICK ACTIONS
      ========================================================== */}
      {/* <section className="relative z-20 -mt-8 px-4">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 sm:grid-cols-3">
          <Link
            href="/appointment"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-teal-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
              <CalendarDays />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Book Appointment
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Schedule your visit
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/doctors"
            className="group flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-blue-50 sm:border-b-0 sm:border-r"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">Find a Doctor</p>
              <p className="mt-1 text-xs text-slate-500">
                Meet our specialists
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/emergency"
            className="group flex items-center gap-4 p-6 transition hover:bg-red-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Phone />
            </div>

            <div>
              <p className="font-black text-[#063B5C]">
                Emergency Care
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Available 24/7
              </p>
            </div>

            <ChevronRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section> */}

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <h3 className="text-4xl font-black text-[#0A7A78] sm:text-5xl">
                {number}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {label}
              </p>

              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-slate-200 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                alt="Hospital interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/60 to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-3 rounded-2xl bg-[#0A7A78] p-5 text-white shadow-xl sm:-right-7">
              <Award className="h-8 w-8" />

              <p className="mt-2 text-sm font-black">
                Excellence in
                <br />
                Healthcare
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
              About Our Hospital
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
              Healthcare built
              <span className="block text-[#0A7A78]">
                around you.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Baderia Metro Prime Hospital is committed to providing
              high-quality healthcare with compassion, innovation and
              patient-first service.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our multidisciplinary team combines medical expertise,
              advanced technology and modern infrastructure to provide
              comprehensive care for patients and families.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced medical specialists",
                "Advanced treatment technology",
                "Patient-centered healthcare",
                "Modern hospital infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0A7A78]" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#0A7A78]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          DEPARTMENTS
      ========================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                Our Departments
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl">
                Specialized care for
                <span className="text-[#0A7A78]"> every need.</span>
              </h2>
            </div>

            <Link
              href="/departments"
              className="flex items-center gap-2 font-bold text-[#0A7A78]"
            >
              View All Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <motion.div
                  key={department.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[1.5rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${department.color} transition duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#063B5C]">
                    {department.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {department.description}
                  </p>

                  <Link
                    href="/departments"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A7A78]"
                  >
                    Explore Department
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCTORS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#063B5C] py-24 text-white">
        <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Our Specialists
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
                Meet our expert doctors.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Experienced specialists dedicated to delivering personalized,
                compassionate and evidence-based medical care.
              </p>
            </div>

            <Link
              href="/doctors"
              className="flex items-center gap-2 font-bold text-teal-300"
            >
              View All Doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-[1.75rem] bg-white text-[#063B5C] shadow-xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-black/30 p-3 text-white backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-teal-300" />
                      <span className="text-xs font-semibold">
                        Verified Specialist
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black">{doctor.name}</h3>

                  <p className="mt-1 font-semibold text-[#0A7A78]">
                    {doctor.specialty}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {doctor.experience}
                  </p>

                  {/* <Link
                    href="/appointment"
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-3 text-sm font-bold text-[#0A7A78] transition hover:bg-[#0A7A78] hover:text-white"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Appointment
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#063B5C] sm:text-4xl">
              Everything you need for
              <span className="text-[#0A7A78]"> better healthcare.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HeartHandshake,
                title: "Patient First",
                text: "Every decision starts with the needs, safety and comfort of our patients.",
              },
              {
                icon: Award,
                title: "Expert Doctors",
                text: "Experienced specialists across multiple medical disciplines.",
              },
              {
                icon: Microscope,
                title: "Advanced Technology",
                text: "Modern diagnostic and treatment technologies for better outcomes.",
              },
              {
                icon: Clock3,
                title: "24/7 Support",
                text: "Round-the-clock emergency and critical care services.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-7 text-center transition shadow-sm hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0A7A78] shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 font-black text-[#063B5C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITIES
      ========================================================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]">
                Hospital Facilities
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl">
                Modern facilities designed
                <span className="block text-[#0A7A78]">
                  for your comfort.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                From advanced diagnostics to comfortable patient rooms, our
                infrastructure is designed to support high-quality medical
                care and a better recovery experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {facilities.map((facility) => {
                  const Icon = facility.icon;

                  return (
                    <div
                      key={facility.title}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="mt-4 text-sm font-black text-[#063B5C]">
                        {facility.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {facility.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115"
                  alt="Modern hospital facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B5C]/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="font-black">
                        Safe & Comfortable Environment
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        Designed around patient comfort and recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PATIENT STORIES
      ========================================================== */}
      {/* <section className="relative overflow-hidden py-24">
        <div className="absolute left-[-100px] top-20 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#0A7A78]">
              <HeartPulse className="h-4 w-4" />
              Patient Stories
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#063B5C] sm:text-4xl lg:text-5xl">
              Trusted by patients.
              <span className="block text-[#0A7A78]">
                Loved by families.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Real experiences from patients who trusted Baderia Metro Prime
              Hospital for their healthcare journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-6 top-3 text-7xl font-black leading-none text-teal-50">
                  “
                </div>

                <div className="relative flex gap-1 text-lg text-amber-400">
                  ★★★★★
                </div>

                <p className="relative mt-6 min-h-[145px] text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-4 ring-teal-50">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} patient`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  <div>
                    <p className="font-black text-[#063B5C]">
                      {testimonial.name}
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />

                      <span className="text-xs font-semibold text-slate-500">
                        Verified {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0A7A78] to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <ShieldCheck className="h-5 w-5 text-[#0A7A78]" />
              Trusted Healthcare
            </div>

            <div className="hidden h-5 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Users className="h-5 w-5 text-[#0A7A78]" />
              Patient First
            </div>

            <div className="hidden h-5 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <HeartPulse className="h-5 w-5 text-[#0A7A78]" />
              Compassionate Care
            </div>
          </div> */}
        {/* </div> */}
      {/* </section> */}

       <section className="py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial) => (

              <motion.div
                key={testimonial.name}
                whileHover={{
                  y: -6,
                }}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-teal-50">

                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />

                  </div>

                  <div>

                    <p className="font-black text-[#063B5C]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#0A7A78]">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

                <div className="mt-5 flex gap-1 text-yellow-400">
                  {"★★★★★".split("").map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-[#0A7A78]" />
                  Verified Patient Experience
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          EMERGENCY CTA
      ========================================================== */}
      <section className="px-4 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-red-600 via-red-600 to-[#063B5C] shadow-2xl">
          <div className="absolute left-[-80px] top-[-100px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-50px] h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid items-center gap-8 px-6 py-14 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Emergency Department Open 24/7
              </div>

              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Medical Emergency?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Do not delay. Our emergency team is available around the
                clock for urgent medical situations.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-red-600 shadow-xl transition hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Call Emergency
              </a>

              <Link
                href="/emergency"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-black text-white transition hover:bg-white/10"
              >
                Emergency Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL APPOINTMENT CTA
      ========================================================== */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#0A7A78]">
            <CalendarDays className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#063B5C] sm:text-4xl">
            Take the first step toward better health.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Book an appointment with our experienced specialists and get
            personalized medical care for you and your family.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="flex items-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-4 font-black text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-1 hover:bg-[#086663]"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-black text-[#063B5C] transition hover:border-teal-300 hover:text-[#0A7A78]"
            >
              Contact Hospital
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   HeartPulse,
//   Mail,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   User,
//   Users,
// } from "lucide-react";

// const departments = [
//   "Cardiology",
//   "Neurology",
//   "Orthopedics",
//   "Pediatrics",
//   "Gynecology",
//   "General Medicine",
//   "Dermatology",
//   "ENT",
// ];

// const doctors = [
//   {
//     name: "Dr. Rajesh Sharma",
//     specialty: "Cardiology",
//     experience: "15+ Years Experience",
//   },
//   {
//     name: "Dr. Priya Verma",
//     specialty: "Gynecology",
//     experience: "12+ Years Experience",
//   },
//   {
//     name: "Dr. Amit Kapoor",
//     specialty: "Orthopedics",
//     experience: "14+ Years Experience",
//   },
//   {
//     name: "Dr. Neha Singh",
//     specialty: "General Medicine",
//     experience: "10+ Years Experience",
//   },
// ];

// const timeSlots = [
//   "09:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "02:00 PM",
//   "03:00 PM",
//   "04:00 PM",
//   "05:00 PM",
// ];

// export default function AppointmentPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const [form, setForm] = useState({
//     department: "",
//     doctor: "",
//     date: "",
//     time: "",
//     name: "",
//     phone: "",
//     email: "",
//     age: "",
//     gender: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSubmitted(true);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (submitted) {
//     return (
//       <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 px-4 py-20">
//         <div className="mx-auto flex min-h-[600px] max-w-3xl items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             className="w-full rounded-[2rem] border border-teal-100 bg-white p-8 text-center shadow-2xl sm:p-14"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.2, type: "spring" }}
//               className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]"
//             >
//               <CheckCircle2 className="h-14 w-14" />
//             </motion.div>

//             <h1 className="mt-7 text-3xl font-black text-[#063B5C] sm:text-4xl">
//               Appointment Request Received!
//             </h1>

//             <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
//               Thank you, {form.name || "Patient"}. Your appointment request
//               has been submitted successfully. Our hospital team will contact
//               you shortly to confirm your appointment.
//             </p>

//             <div className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-5 text-left">
//               <div className="flex items-center gap-3">
//                 <CalendarDays className="h-5 w-5 text-[#0A7A78]" />

//                 <div>
//                   <p className="text-xs text-slate-400">Requested Date</p>
//                   <p className="font-bold text-[#063B5C]">
//                     {form.date || "Not selected"}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 flex items-center gap-3">
//                 <Clock3 className="h-5 w-5 text-[#0A7A78]" />

//                 <div>
//                   <p className="text-xs text-slate-400">Requested Time</p>
//                   <p className="font-bold text-[#063B5C]">
//                     {form.time || "Not selected"}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 flex items-center gap-3">
//                 <Stethoscope className="h-5 w-5 text-[#0A7A78]" />

//                 <div>
//                   <p className="text-xs text-slate-400">Doctor</p>
//                   <p className="font-bold text-[#063B5C]">
//                     {form.doctor || "Not selected"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() => setSubmitted(false)}
//               className="mt-8 rounded-xl bg-[#0A7A78] px-7 py-3.5 font-bold text-white shadow-lg shadow-teal-900/20 transition hover:bg-[#086663]"
//             >
//               Book Another Appointment
//             </button>
//           </motion.div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#063B5C] via-[#07566B] to-[#0A7A78] text-white">
//         <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

//         <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
//               <CalendarDays className="h-4 w-4" />
//               Easy & Secure Booking
//             </div>

//             <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
//               Book Your
//               <span className="block text-teal-300">
//                 Appointment
//               </span>
//             </h1>

//             <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
//               Schedule an appointment with our experienced doctors and get
//               quality healthcare at Baderia Metro Prime Hospital.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           MAIN
//       ====================================================== */}
//       <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
//         <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]">
//           {/* =================================================
//               FORM
//           ================================================== */}
//           <motion.form
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             onSubmit={handleSubmit}
//             className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
//           >
//             {/* Section title */}
//             <div className="flex items-start gap-4 border-b border-slate-100 pb-7">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78]">
//                 <CalendarDays className="h-7 w-7" />
//               </div>

//               <div>
//                 <h2 className="text-2xl font-black text-[#063B5C]">
//                   Appointment Details
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Select your preferred department, doctor, date and time.
//                 </p>
//               </div>
//             </div>

//             {/* Department + Doctor */}
//             <div className="mt-8 grid gap-5 md:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Department
//                 </label>

//                 <select
//                   name="department"
//                   value={form.department}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                 >
//                   <option value="">Select Department</option>

//                   {departments.map((department) => (
//                     <option key={department} value={department}>
//                       {department}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Select Doctor
//                 </label>

//                 <select
//                   name="doctor"
//                   value={form.doctor}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                 >
//                   <option value="">Select Doctor</option>

//                   {doctors.map((doctor) => (
//                     <option key={doctor.name} value={doctor.name}>
//                       {doctor.name} — {doctor.specialty}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Date + Time */}
//             <div className="mt-5 grid gap-5 md:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Appointment Date
//                 </label>

//                 <div className="relative">
//                   <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                   <input
//                     type="date"
//                     name="date"
//                     value={form.date}
//                     onChange={handleChange}
//                     required
//                     className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Preferred Time
//                 </label>

//                 <div className="relative">
//                   <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                   <select
//                     name="time"
//                     value={form.time}
//                     onChange={handleChange}
//                     required
//                     className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                   >
//                     <option value="">Select Time</option>

//                     {timeSlots.map((time) => (
//                       <option key={time} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Patient information */}
//             <div className="mt-10 border-t border-slate-100 pt-8">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                   <User className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <h2 className="font-black text-[#063B5C]">
//                     Patient Information
//                   </h2>

//                   <p className="text-xs text-slate-500">
//                     Please provide accurate patient details.
//                   </p>
//                 </div>
//               </div>

//               {/* Name */}
//               <div className="mt-6">
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Full Name
//                 </label>

//                 <div className="relative">
//                   <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter patient full name"
//                     className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                   />
//                 </div>
//               </div>

//               {/* Phone + Email */}
//               <div className="mt-5 grid gap-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Phone Number
//                   </label>

//                   <div className="relative">
//                     <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="+91 XXXXX XXXXX"
//                       className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Email Address
//                   </label>

//                   <div className="relative">
//                     <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Age + Gender */}
//               <div className="mt-5 grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Age
//                   </label>

//                   <input
//                     type="number"
//                     name="age"
//                     value={form.age}
//                     onChange={handleChange}
//                     min="0"
//                     max="120"
//                     placeholder="Patient age"
//                     className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Gender
//                   </label>

//                   <select
//                     name="gender"
//                     value={form.gender}
//                     onChange={handleChange}
//                     className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Reason */}
//               <div className="mt-5">
//                 <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                   Reason for Visit
//                 </label>

//                 <textarea
//                   name="reason"
//                   value={form.reason}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Briefly describe your reason for consultation..."
//                   className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
//                 />
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="mt-8">
//               <button
//                 type="submit"
//                 className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A7A78] px-6 py-4 font-black text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-[#086663]"
//               >
//                 <CalendarDays className="h-5 w-5" />
//                 Confirm Appointment Request
//                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </button>

//               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
//                 <ShieldCheck className="h-4 w-4 text-teal-600" />
//                 Your information is kept secure.
//               </div>
//             </div>
//           </motion.form>

//           {/* =================================================
//               SIDEBAR
//           ================================================== */}
//           <aside className="space-y-5">
//             {/* Why book */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.15 }}
//               className="overflow-hidden rounded-[2rem] bg-[#063B5C] p-7 text-white shadow-xl"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300">
//                 <HeartPulse className="h-7 w-7" />
//               </div>

//               <h3 className="mt-6 text-xl font-black">
//                 Why Choose Us?
//               </h3>

//               <div className="mt-6 space-y-5">
//                 {[
//                   "Experienced specialists",
//                   "Modern medical facilities",
//                   "Patient-focused care",
//                   "Easy appointment booking",
//                   "24/7 emergency support",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />

//                     <span className="text-sm text-white/70">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Working hours */}
//             <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                   <Clock3 className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <h3 className="font-black text-[#063B5C]">
//                     Hospital Hours
//                   </h3>

//                   <p className="text-xs text-slate-500">
//                     Our general schedule
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-4 text-sm">
//                 <div className="flex justify-between border-b border-slate-100 pb-3">
//                   <span className="text-slate-500">
//                     Monday - Saturday
//                   </span>

//                   <span className="font-bold text-[#063B5C]">
//                     8 AM - 8 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between border-b border-slate-100 pb-3">
//                   <span className="text-slate-500">
//                     Sunday
//                   </span>

//                   <span className="font-bold text-[#063B5C]">
//                     9 AM - 5 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-slate-500">
//                     Emergency
//                   </span>

//                   <span className="font-black text-red-600">
//                     24/7
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Need help */}
//             <div className="rounded-[2rem] bg-red-50 p-7">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
//                 <Phone className="h-6 w-6" />
//               </div>

//               <h3 className="mt-5 font-black text-[#063B5C]">
//                 Need Immediate Help?
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-slate-500">
//                 For urgent medical situations, please contact our emergency
//                 team directly.
//               </p>

//               <a
//                 href="tel:+919876543210"
//                 className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
//               >
//                 <Phone className="h-4 w-4" />
//                 +91 98765 43210
//               </a>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* =====================================================
//           BOTTOM TRUST
//       ====================================================== */}
//       <section className="border-t border-slate-100 bg-white py-10">
//         <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <ShieldCheck className="h-6 w-6 text-[#0A7A78]" />
//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 Secure Information
//               </p>
//               <p className="text-xs text-slate-400">
//                 Your data is protected
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Users className="h-6 w-6 text-[#0A7A78]" />
//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 Expert Doctors
//               </p>
//               <p className="text-xs text-slate-400">
//                 Experienced specialists
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Clock3 className="h-6 w-6 text-[#0A7A78]" />
//             <div>
//               <p className="text-sm font-black text-[#063B5C]">
//                 Quick Response
//               </p>
//               <p className="text-xs text-slate-400">
//                 Easy appointment process
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   ChevronRight,
//   Clock3,
//   HeartPulse,
//   Mail,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   User,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// const departments = [
//   "Cardiology",
//   "Neurology",
//   "Orthopedics",
//   "Pediatrics",
//   "Gynecology",
//   "General Medicine",
//   "Dermatology",
//   "ENT",
// ];

// const doctors = [
//   {
//     name: "Dr. Rajesh Sharma",
//     specialty: "Cardiology",
//   },
//   {
//     name: "Dr. Priya Verma",
//     specialty: "Gynecology",
//   },
//   {
//     name: "Dr. Amit Kapoor",
//     specialty: "Orthopedics",
//   },
//   {
//     name: "Dr. Neha Singh",
//     specialty: "General Medicine",
//   },
// ];

// const timeSlots = [
//   "09:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "02:00 PM",
//   "03:00 PM",
//   "04:00 PM",
//   "05:00 PM",
// ];

// export default function AppointmentPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const [form, setForm] = useState({
//     department: "",
//     doctor: "",
//     date: "",
//     time: "",
//     name: "",
//     phone: "",
//     email: "",
//     age: "",
//     gender: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSubmitted(true);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const resetForm = () => {
//     setSubmitted(false);

//     setForm({
//       department: "",
//       doctor: "",
//       date: "",
//       time: "",
//       name: "",
//       phone: "",
//       email: "",
//       age: "",
//       gender: "",
//       reason: "",
//     });
//   };

//   /* ================= SUCCESS ================= */

//   if (submitted) {
//     return (
//       <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
//         <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#063B5C] via-[#07566B] to-[#0A7A78] px-4 py-20">
//           {/* Animated background */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.35, 0.2],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-teal-300/20 blur-3xl"
//           />

//           <motion.div
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.15, 0.3, 0.15],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               type: "spring",
//               stiffness: 100,
//             }}
//             className="relative z-10 w-full max-w-2xl"
//           >
//             <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-center shadow-2xl sm:p-12">
//               {/* Success icon */}
//               <motion.div
//                 initial={{ scale: 0, rotate: -30 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{
//                   delay: 0.3,
//                   duration: 0.7,
//                   type: "spring",
//                   stiffness: 180,
//                 }}
//                 className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]"
//               >
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                   className="absolute inset-0 rounded-full border-4 border-teal-100"
//                 />

//                 <CheckCircle2 className="relative z-10 h-14 w-14" />
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.45 }}
//                 className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#0A7A78]"
//               >
//                 Appointment Request
//               </motion.p>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.55 }}
//                 className="mt-3 text-3xl font-black text-[#063B5C] sm:text-4xl"
//               >
//                 Appointment Request Received!
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="mx-auto mt-4 max-w-lg leading-7 text-slate-500"
//               >
//                 Thank you,{" "}
//                 <span className="font-bold text-[#063B5C]">
//                   {form.name || "Patient"}
//                 </span>
//                 . Our hospital team will contact you shortly to confirm your
//                 appointment.
//               </motion.p>

//               {/* Appointment summary */}
//               <motion.div
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.85 }}
//                 className="mt-8 rounded-2xl bg-slate-50 p-5 text-left"
//               >
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                       <CalendarDays className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-xs text-slate-400">Date</p>
//                       <p className="font-bold text-[#063B5C]">
//                         {form.date || "Not selected"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                       <Clock3 className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-xs text-slate-400">Time</p>
//                       <p className="font-bold text-[#063B5C]">
//                         {form.time || "Not selected"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 sm:col-span-2">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                       <Stethoscope className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-xs text-slate-400">Doctor</p>
//                       <p className="font-bold text-[#063B5C]">
//                         {form.doctor || "Not selected"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={resetForm}
//                 className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-7 py-3.5 font-bold text-white shadow-lg shadow-teal-900/20"
//               >
//                 Book Another Appointment
//                 <ArrowRight className="h-4 w-4" />
//               </motion.button>
//             </div>
//           </motion.div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C]">
//         {/* Animated circles */}

//         <motion.div
//           animate={{
//             x: [0, 40, 0],
//             y: [0, 25, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0A7A78]/30 blur-3xl"
//         />

//         <motion.div
//           animate={{
//             x: [0, -30, 0],
//             y: [0, -20, 0],
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//           {/* Breadcrumb */}

//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center justify-center gap-2 text-sm text-white/50"
//           >
//             <Link href="/" className="transition hover:text-white">
//               Home
//             </Link>

//             <ChevronRight className="h-4 w-4" />

//             <span>Appointment</span>
//           </motion.div>

//           {/* Hero content */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="mx-auto mt-6 max-w-3xl text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.25 }}
//               className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6] backdrop-blur"
//             >
//               <CalendarDays className="h-4 w-4" />
//               Easy & Secure Booking
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Book Your
//               <span className="block text-[#4DD4C6]">
//                 Appointment.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.45 }}
//               className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
//             >
//               Schedule your consultation with our experienced doctors and
//               receive trusted healthcare at Baderia Metro Prime Hospital.
//             </motion.p>
//           </motion.div>

//           {/* Hero floating icons */}

//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute left-[8%] top-32 hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-[#4DD4C6] backdrop-blur sm:block"
//           >
//             <HeartPulse className="h-6 w-6" />
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               duration: 3.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute right-[8%] bottom-20 hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-[#4DD4C6] backdrop-blur sm:block"
//           >
//             <Stethoscope className="h-6 w-6" />
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           MAIN
//       ====================================================== */}

//       <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
//         <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
//           {/* ================= FORM ================= */}

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: 0.7 }}
//             className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
//           >
//             {/* Header */}

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.15 }}
//               className="flex items-start gap-4 border-b border-slate-100 pb-7"
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.08,
//                   rotate: 5,
//                 }}
//                 className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78]"
//               >
//                 <CalendarDays className="h-7 w-7" />
//               </motion.div>

//               <div>
//                 <h2 className="text-2xl font-black text-[#063B5C]">
//                   Appointment Details
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Choose your department, doctor, date and preferred time.
//                 </p>
//               </div>
//             </motion.div>

//             <form onSubmit={handleSubmit}>
//               {/* Department + Doctor */}

//               <div className="mt-8 grid gap-5 md:grid-cols-2">
//                 <AnimatedField delay={0.1}>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Department
//                   </label>

//                   <select
//                     name="department"
//                     value={form.department}
//                     onChange={handleChange}
//                     required
//                     className="input-style"
//                   >
//                     <option value="">Select Department</option>

//                     {departments.map((department) => (
//                       <option key={department} value={department}>
//                         {department}
//                       </option>
//                     ))}
//                   </select>
//                 </AnimatedField>

//                 <AnimatedField delay={0.2}>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Select Doctor
//                   </label>

//                   <select
//                     name="doctor"
//                     value={form.doctor}
//                     onChange={handleChange}
//                     required
//                     className="input-style"
//                   >
//                     <option value="">Select Doctor</option>

//                     {doctors.map((doctor) => (
//                       <option key={doctor.name} value={doctor.name}>
//                         {doctor.name} — {doctor.specialty}
//                       </option>
//                     ))}
//                   </select>
//                 </AnimatedField>
//               </div>

//               {/* Date + Time */}

//               <div className="mt-5 grid gap-5 md:grid-cols-2">
//                 <AnimatedField delay={0.3}>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Appointment Date
//                   </label>

//                   <div className="relative">
//                     <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                     <input
//                       type="date"
//                       name="date"
//                       value={form.date}
//                       onChange={handleChange}
//                       required
//                       className="input-style pl-12"
//                     />
//                   </div>
//                 </AnimatedField>

//                 <AnimatedField delay={0.4}>
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Preferred Time
//                   </label>

//                   <div className="relative">
//                     <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                     <select
//                       name="time"
//                       value={form.time}
//                       onChange={handleChange}
//                       required
//                       className="input-style pl-12"
//                     >
//                       <option value="">Select Time</option>

//                       {timeSlots.map((time) => (
//                         <option key={time} value={time}>
//                           {time}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </AnimatedField>
//               </div>

//               {/* Patient info */}

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.15 }}
//                 className="mt-10 border-t border-slate-100 pt-8"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//                     <User className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <h2 className="font-black text-[#063B5C]">
//                       Patient Information
//                     </h2>

//                     <p className="text-xs text-slate-500">
//                       Please provide accurate patient details.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Name */}

//                 <AnimatedField delay={0.1} className="mt-6">
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Full Name
//                   </label>

//                   <div className="relative">
//                     <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                     <input
//                       type="text"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="Enter patient full name"
//                       className="input-style pl-12"
//                     />
//                   </div>
//                 </AnimatedField>

//                 {/* Phone + Email */}

//                 <div className="mt-5 grid gap-5 md:grid-cols-2">
//                   <AnimatedField delay={0.2}>
//                     <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                       Phone Number
//                     </label>

//                     <div className="relative">
//                       <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         required
//                         placeholder="+91 XXXXX XXXXX"
//                         className="input-style pl-12"
//                       />
//                     </div>
//                   </AnimatedField>

//                   <AnimatedField delay={0.3}>
//                     <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                       Email Address
//                     </label>

//                     <div className="relative">
//                       <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//                       <input
//                         type="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         placeholder="you@example.com"
//                         className="input-style pl-12"
//                       />
//                     </div>
//                   </AnimatedField>
//                 </div>

//                 {/* Age + Gender */}

//                 <div className="mt-5 grid gap-5 sm:grid-cols-2">
//                   <AnimatedField delay={0.4}>
//                     <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                       Age
//                     </label>

//                     <input
//                       type="number"
//                       name="age"
//                       value={form.age}
//                       onChange={handleChange}
//                       min="0"
//                       max="120"
//                       placeholder="Patient age"
//                       className="input-style"
//                     />
//                   </AnimatedField>

//                   <AnimatedField delay={0.5}>
//                     <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                       Gender
//                     </label>

//                     <select
//                       name="gender"
//                       value={form.gender}
//                       onChange={handleChange}
//                       className="input-style"
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </AnimatedField>
//                 </div>

//                 {/* Reason */}

//                 <AnimatedField delay={0.6} className="mt-5">
//                   <label className="mb-2 block text-sm font-bold text-[#063B5C]">
//                     Reason for Visit
//                   </label>

//                   <textarea
//                     name="reason"
//                     value={form.reason}
//                     onChange={handleChange}
//                     rows={4}
//                     placeholder="Briefly describe your reason for consultation..."
//                     className="input-style resize-none"
//                   />
//                 </AnimatedField>
//               </motion.div>

//               {/* Submit */}

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="mt-8"
//               >
//                 <motion.button
//                   whileHover={{
//                     y: -3,
//                     scale: 1.01,
//                   }}
//                   whileTap={{
//                     scale: 0.98,
//                   }}
//                   type="submit"
//                   className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A7A78] px-6 py-4 font-black text-white shadow-lg shadow-teal-900/20 transition hover:bg-[#086663]"
//                 >
//                   <CalendarDays className="h-5 w-5" />

//                   Confirm Appointment Request

//                   <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </motion.button>

//                 <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
//                   <ShieldCheck className="h-4 w-4 text-teal-600" />
//                   Your information is kept secure.
//                 </div>
//               </motion.div>
//             </form>
//           </motion.div>

//           {/* ================= SIDEBAR ================= */}

//           <aside className="space-y-5">
//             {/* Why choose */}

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7 }}
//               className="overflow-hidden rounded-[2rem] bg-[#063B5C] p-7 text-white shadow-xl"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -8, 0],
//                   rotate: [0, 3, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#4DD4C6]"
//               >
//                 <HeartPulse className="h-7 w-7" />
//               </motion.div>

//               <h3 className="mt-6 text-xl font-black">
//                 Why Choose Us?
//               </h3>

//               <div className="mt-6 space-y-5">
//                 {[
//                   "Experienced specialists",
//                   "Modern medical facilities",
//                   "Patient-focused care",
//                   "Easy appointment booking",
//                   "24/7 emergency support",
//                 ].map((item, index) => (
//                   <motion.div
//                     key={item}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: 0.15 + index * 0.08,
//                     }}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4DD4C6]" />

//                     <span className="text-sm text-white/70">
//                       {item}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Hours */}

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               whileHover={{ y: -5 }}
//               className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg"
//             >
//               <div className="flex items-center gap-3">
//                 <motion.div
//                   animate={{ rotate: [0, 5, -5, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                   }}
//                   className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]"
//                 >
//                   <Clock3 className="h-5 w-5" />
//                 </motion.div>

//                 <div>
//                   <h3 className="font-black text-[#063B5C]">
//                     Hospital Hours
//                   </h3>

//                   <p className="text-xs text-slate-500">
//                     Our general schedule
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-4 text-sm">
//                 <div className="flex justify-between border-b border-slate-100 pb-3">
//                   <span className="text-slate-500">
//                     Monday - Saturday
//                   </span>

//                   <span className="font-bold text-[#063B5C]">
//                     8 AM - 8 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between border-b border-slate-100 pb-3">
//                   <span className="text-slate-500">
//                     Sunday
//                   </span>

//                   <span className="font-bold text-[#063B5C]">
//                     9 AM - 5 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-slate-500">
//                     Emergency
//                   </span>

//                   <span className="font-black text-red-600">
//                     24/7
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Emergency */}

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               whileHover={{ y: -5 }}
//               className="rounded-[2rem] bg-red-50 p-7"
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.08, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//                 className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600"
//               >
//                 <Phone className="h-6 w-6" />
//               </motion.div>

//               <h3 className="mt-5 font-black text-[#063B5C]">
//                 Need Immediate Help?
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-slate-500">
//                 For urgent medical situations, please contact our emergency
//                 team directly.
//               </p>

//               <motion.a
//                 whileHover={{
//                   scale: 1.03,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 href="tel:+919876543210"
//                 className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
//               >
//                 <Phone className="h-4 w-4" />
//                 +91 98765 43210
//               </motion.a>
//             </motion.div>
//           </aside>
//         </div>
//       </section>

//       {/* =====================================================
//           BOTTOM TRUST
//       ====================================================== */}

//       <section className="border-t border-slate-100 bg-white py-12">
//         <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
//           <TrustItem
//             icon={ShieldCheck}
//             title="Secure Information"
//             text="Your personal information is protected"
//           />

//           <TrustItem
//             icon={Users}
//             title="Expert Doctors"
//             text="Experienced healthcare specialists"
//           />

//           <TrustItem
//             icon={Clock3}
//             title="Quick Response"
//             text="Fast and easy appointment process"
//           />
//         </div>
//       </section>

//       {/* Global input style */}

//       <style jsx global>{`
//         .input-style {
//           width: 100%;
//           border-radius: 0.75rem;
//           border: 1px solid rgb(226 232 240);
//           background: white;
//           padding: 0.875rem 1rem;
//           font-size: 0.875rem;
//           color: rgb(51 65 85);
//           outline: none;
//           transition: all 0.25s ease;
//         }

//         .input-style:hover {
//           border-color: rgb(148 163 184);
//         }

//         .input-style:focus {
//           border-color: #0a7a78;
//           box-shadow: 0 0 0 4px rgb(20 184 166 / 0.1);
//         }

//         .input-style::placeholder {
//           color: rgb(148 163 184);
//         }
//       `}</style>
//     </main>
//   );
// }

// /* =========================================================
//    ANIMATED FIELD
// ========================================================= */

// function AnimatedField({
//   children,
//   delay = 0,
//   className = "",
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}
//       transition={{
//         duration: 0.5,
//         delay,
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* =========================================================
//    TRUST ITEM
// ========================================================= */

// function TrustItem({ icon: Icon, title, text }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 25,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//       whileHover={{
//         y: -5,
//       }}
//       className="flex items-center justify-center gap-3 text-center sm:text-left"
//     >
//       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]">
//         <Icon className="h-6 w-6" />
//       </div>

//       <div>
//         <p className="text-sm font-black text-[#063B5C]">
//           {title}
//         </p>

//         <p className="mt-1 text-xs text-slate-400">
//           {text}
//         </p>
//       </div>
//     </motion.div>
//   );
// }




"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import Link from "next/link";

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "General Medicine",
  "Dermatology",
  "ENT",
];

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiology",
    experience: "15+ Years Experience",
  },
  {
    name: "Dr. Priya Verma",
    specialty: "Gynecology",
    experience: "12+ Years Experience",
  },
  {
    name: "Dr. Amit Kapoor",
    specialty: "Orthopedics",
    experience: "14+ Years Experience",
  },
  {
    name: "Dr. Neha Singh",
    specialty: "General Medicine",
    experience: "10+ Years Experience",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setSubmitted(false);

    setForm({
      department: "",
      doctor: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      reason: "",
    });
  };

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  if (submitted) {
    return (
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
          {/* Animated background */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-teal-100 bg-white p-7 text-center shadow-2xl shadow-slate-900/10 sm:p-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                type: "spring",
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]"
            >
              <CheckCircle2 className="h-14 w-14" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 text-3xl font-black text-[#063B5C] sm:text-4xl"
            >
              Appointment Request Received!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-4 max-w-xl leading-7 text-slate-500"
            >
              Thank you,{" "}
              <span className="font-bold text-[#0A7A78]">
                {form.name || "Patient"}
              </span>
              . Your appointment request has been submitted successfully.
              Our hospital team will contact you shortly for confirmation.
            </motion.p>

            {/* Appointment summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-[#0A7A78]" />

                <div>
                  <p className="text-xs text-slate-400">
                    Requested Date
                  </p>

                  <p className="font-bold text-[#063B5C]">
                    {form.date || "Not selected"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[#0A7A78]" />

                <div>
                  <p className="text-xs text-slate-400">
                    Requested Time
                  </p>

                  <p className="font-bold text-[#063B5C]">
                    {form.time || "Not selected"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Stethoscope className="h-5 w-5 text-[#0A7A78]" />

                <div>
                  <p className="text-xs text-slate-400">
                    Doctor
                  </p>

                  <p className="font-bold text-[#063B5C]">
                    {form.doctor || "Not selected"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <HeartPulse className="h-5 w-5 text-[#0A7A78]" />

                <div>
                  <p className="text-xs text-slate-400">
                    Department
                  </p>

                  <p className="font-bold text-[#063B5C]">
                    {form.department || "Not selected"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <motion.button
                onClick={resetForm}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-[#0A7A78] px-7 py-3.5 font-bold text-white shadow-lg shadow-teal-900/20"
              >
                Book Another Appointment
              </motion.button>

              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-bold text-[#063B5C] transition hover:border-[#0A7A78] hover:text-[#0A7A78]"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063B5C]">
        {/* Animated Background */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#0A7A78]/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>Appointment</span>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mx-auto mt-6 max-w-3xl text-center"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]"
            >
              <CalendarDays className="h-4 w-4" />
              Easy & Secure Booking
            </motion.div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Book Your
              <span className="block text-[#4DD4C6]">
                Appointment
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Schedule an appointment with our experienced doctors and
              receive quality healthcare at Baderia Metro Prime Hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* =================================================
              APPOINTMENT FORM
          ================================================== */}

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
          >
            {/* Header */}
            <div className="flex items-start gap-4 border-b border-slate-100 pb-7">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#0A7A78]"
              >
                <CalendarDays className="h-7 w-7" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-black text-[#063B5C]">
                  Appointment Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select your preferred department, doctor, date and time.
                </p>
              </div>
            </div>

            {/* =================================================
                APPOINTMENT DETAILS
            ================================================== */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-8"
            >
              {/* Department + Doctor */}
              <div className="grid gap-5 md:grid-cols-2">
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Department
                  </label>

                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option value="">
                      Select Department
                    </option>

                    {departments.map((department) => (
                      <option
                        key={department}
                        value={department}
                      >
                        {department}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Select Doctor
                  </label>

                  <select
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option value="">
                      Select Doctor
                    </option>

                    {doctors.map((doctor) => (
                      <option
                        key={doctor.name}
                        value={doctor.name}
                      >
                        {doctor.name} — {doctor.specialty}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Date + Time */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Appointment Date
                  </label>

                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    >
                      <option value="">
                        Select Time
                      </option>

                      {timeSlots.map((time) => (
                        <option
                          key={time}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                PATIENT INFORMATION
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 border-t border-slate-100 pt-8"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]"
                >
                  <User className="h-5 w-5" />
                </motion.div>

                <div>
                  <h2 className="font-black text-[#063B5C]">
                    Patient Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Please provide accurate patient details.
                  </p>
                </div>
              </div>

              {/* Patient fields */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="mt-6"
              >
                {/* Name */}
                <motion.div variants={fieldVariants}>
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter patient full name"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </div>
                </motion.div>

                {/* Phone + Email */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Age + Gender */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      min="0"
                      max="120"
                      placeholder="Patient age"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                    >
                      <option value="">
                        Select Gender
                      </option>

                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>

                {/* Reason */}
                <motion.div
                  variants={fieldVariants}
                  className="mt-5"
                >
                  <label className="mb-2 block text-sm font-bold text-[#063B5C]">
                    Reason for Visit
                  </label>

                  <textarea
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your reason for consultation..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition hover:border-slate-300 placeholder:text-slate-400 focus:border-[#0A7A78] focus:ring-4 focus:ring-teal-500/10"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* =================================================
                SUBMIT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <motion.button
                type="submit"
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A7A78] px-6 py-4 font-black text-white shadow-lg shadow-teal-900/20"
              >
                <CalendarDays className="h-5 w-5" />

                Confirm Appointment Request

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-teal-600" />

                Your information is kept secure.
              </div>
            </motion.div>
          </motion.form>

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside className="space-y-5">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
              }}
              className="overflow-hidden rounded-[2rem] bg-[#063B5C] p-7 text-white shadow-xl"
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300"
              >
                <HeartPulse className="h-7 w-7" />
              </motion.div>

              <h3 className="mt-6 text-xl font-black">
                Why Choose Us?
              </h3>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="mt-6 space-y-5"
              >
                {[
                  "Experienced specialists",
                  "Modern medical facilities",
                  "Patient-focused care",
                  "Easy appointment booking",
                  "24/7 emergency support",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 15,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />

                    <span className="text-sm text-white/70">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hospital Hours */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78]"
                >
                  <Clock3 className="h-5 w-5" />
                </motion.div>

                <div>
                  <h3 className="font-black text-[#063B5C]">
                    Hospital Hours
                  </h3>

                  <p className="text-xs text-slate-500">
                    Our general schedule
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">
                    Monday - Saturday
                  </span>

                  <span className="font-bold text-[#063B5C]">
                    8 AM - 8 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">
                    Sunday
                  </span>

                  <span className="font-bold text-[#063B5C]">
                    9 AM - 5 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Emergency
                  </span>

                  <span className="font-black text-red-600">
                    24/7
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="rounded-[2rem] bg-red-50 p-7"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600"
              >
                <Phone className="h-6 w-6" />
              </motion.div>

              <h3 className="mt-5 font-black text-[#063B5C]">
                Need Immediate Help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                For urgent medical situations, please contact our emergency
                team directly.
              </p>

              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </motion.a>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}

      <section className="border-t border-slate-100 bg-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:justify-between"
        >
          {/* Secure */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <ShieldCheck className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Secure Information
              </p>

              <p className="text-xs text-slate-400">
                Your data is protected
              </p>
            </div>
          </motion.div>

          {/* Doctors */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <Stethoscope className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Expert Doctors
              </p>

              <p className="text-xs text-slate-400">
                Experienced specialists
              </p>
            </div>
          </motion.div>

          {/* Quick Response */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="flex items-center gap-3"
          >
            <Clock3 className="h-6 w-6 text-[#0A7A78]" />

            <div>
              <p className="text-sm font-black text-[#063B5C]">
                Quick Response
              </p>

              <p className="text-xs text-slate-400">
                Easy appointment process
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#063B5C] to-[#0A7A78] px-6 py-14 text-center sm:px-10 lg:py-16"
        >
          {/* Animated circles */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-2xl"
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"
            >
              <HeartPulse className="h-7 w-7" />
            </motion.div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Your Health Deserves the Best Care.
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Our experienced healthcare team is ready to support you and your
              family.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Hospital
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

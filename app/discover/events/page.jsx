// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   ArrowRight,
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Search,
//   Sparkles,
//   HeartPulse,
//   Users,
//   CheckCircle2,
//   ChevronDown,
//   Phone,
// } from "lucide-react";

// // import events from "../../data/events.json";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from 'swr'
// import moment from "moment";

// /* =========================================================
//    HELPERS
// ========================================================= */

// const formatDate = (date) => {
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   }).format(new Date(date));
// };

// const getDay = (date) => {
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//   }).format(new Date(date));
// };

// const getMonth = (date) => {
//   return new Intl.DateTimeFormat("en-IN", {
//     month: "short",
//   }).format(new Date(date));
// };

// /* =========================================================
//    ANIMATION
// ========================================================= */

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const itemVariants = {
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

// /* =========================================================
//    EVENT CARD
// ========================================================= */

// function EventCard({ event, index }) {
//   return (
//     <motion.article
//       variants={itemVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-100 hover:shadow-2xl hover:shadow-slate-900/10"
//     >
//       {/* IMAGE */}
//       <div className="relative h-64 overflow-hidden">
//         <Image
//           src={event.image}
//           alt={event.title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

//         {/* DATE */}
//         <div className="absolute left-4 top-4 overflow-hidden rounded-2xl bg-white shadow-xl">
//           <div className="bg-[#0A7A78] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white">
//             {getMonth(event.date)}
//           </div>

//           <div className="px-4 py-2 text-center">
//             <div className="text-2xl font-extrabold leading-none text-[#063B5C]">
//               {getDay(event.date)}
//             </div>

//             <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
//               {new Date(event.date).getFullYear()}
//             </div>
//           </div>
//         </div>

//         {/* STATUS */}
//         <div className="absolute right-4 top-4">
//           <span
//             className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${
//               event.status === "upcoming"
//                 ? "bg-emerald-500/90 text-white"
//                 : "bg-slate-800/80 text-white"
//             }`}
//           >
//             {event.status}
//           </span>
//         </div>

//         {/* CATEGORY */}
//         <div className="absolute bottom-4 left-4">
//           <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
//             {event.category}
//           </span>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6">
//         <h3 className="line-clamp-2 text-xl font-bold leading-snug text-[#063B5C] transition-colors duration-300 group-hover:text-[#0A7A78]">
//           {event.title}
//         </h3>

//         <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
//           {event.shortDescription}
//         </p>

//         <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span>{formatDate(event.date)}</span>
//           </div>

//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span>{event.time}</span>
//           </div>

//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span className="line-clamp-1">{event.location}</span>
//           </div>
//         </div>

//         <Link
//           href={`/events/${event.slug}`}
//           className="group/link mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-[#063B5C] transition-all duration-300 hover:bg-[#0A7A78] hover:text-white"
//         >
//           <span>View Event Details</span>

//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// export default function EventsPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [status, setStatus] = useState("All");


//   const {data,error,isLoading} = useSWR('events',ApiService.get)

//  const events = data?.data || []

//   const categories = useMemo(() => {
//     return ["All", ...new Set(events.map((event) => event.category))];
//   }, []);

//   const featuredEvent = events.find((event) => event.featured);

//   const filteredEvents = useMemo(() => {
//     return events
//       .filter((event) => {
//         const matchesSearch =
//           event.title.toLowerCase().includes(search.toLowerCase()) ||
//           event.category.toLowerCase().includes(search.toLowerCase()) ||
//           event.location.toLowerCase().includes(search.toLowerCase());

//         const matchesCategory =
//           category === "All" || event.category === category;

//         const matchesStatus =
//           status === "All" || event.status === status;

//         return matchesSearch && matchesCategory && matchesStatus;
//       })
//       .sort((a, b) => new Date(a.date) - new Date(b.date));
//   }, [search, category, status]);

//   return (
//     <main className="min-h-screen bg-slate-50">
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C] pt-32">
//         {/* BACKGROUND */}
//         <div className="absolute inset-0">
//           <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />
//           <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

//           <div className="absolute inset-0 opacity-[0.04]">
//             <div
//               className="h-full w-full"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//                 backgroundSize: "45px 45px",
//               }}
//             />
//           </div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4DD4C6] backdrop-blur-md"
//             >
//               <Sparkles className="h-3.5 w-3.5" />
//               Hospital Events & Activities
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Events that bring
//               <span className="block text-[#4DD4C6]">
//                 healthcare closer.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
//             >
//               Stay connected with health camps, awareness programs,
//               community initiatives and special events at Baderia
//               Metroprime Multi Speciality Hospital.
//             </motion.p>
//           </div>
//         </div>

//         {/* WAVE */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1440 100"
//             className="h-auto w-full"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#f8fafc"
//               d="M0,64 C240,120 480,0 720,42 C960,84 1200,15 1440,60 L1440,100 L0,100 Z"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED EVENT
//       ===================================================== */}

//       {featuredEvent && (
//         <section className="relative z-10 mx-auto -mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
//           >
//             <div className="grid lg:grid-cols-2">
//               {/* IMAGE */}
//               <div className="relative min-h-[320px] overflow-hidden lg:min-h-[430px]">
//                 <Image
//                   src={featuredEvent.image}
//                   alt={featuredEvent.title}
//                   fill
//                   priority
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

//                 <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0A7A78] shadow-xl backdrop-blur-md">
//                   <Sparkles className="h-3.5 w-3.5" />
//                   Featured Event
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
//                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//                   {featuredEvent.category}
//                 </span>

//                 <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#063B5C] sm:text-4xl">
//                   {featuredEvent.title}
//                 </h2>

//                 <p className="mt-5 text-sm leading-7 text-slate-500">
//                   {featuredEvent.description}
//                 </p>

//                 <div className="mt-7 grid gap-3 sm:grid-cols-2">
//                   <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
//                     <CalendarDays className="h-5 w-5 text-[#0A7A78]" />
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                         Date
//                       </p>
//                       <p className="mt-0.5 text-xs font-semibold text-slate-700">
//                         {formatDate(featuredEvent.date)}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
//                     <Clock3 className="h-5 w-5 text-[#0A7A78]" />
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                         Time
//                       </p>
//                       <p className="mt-0.5 text-xs font-semibold text-slate-700">
//                         {featuredEvent.time}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <Link
//                   href={`/events/${featuredEvent.slug}`}
//                   className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#086663]"
//                 >
//                   Explore Event
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       )}

//       {/* =====================================================
//           EVENTS SECTION
//       ===================================================== */}

//       <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
//         {/* HEADER */}
//         <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//           <div>
//             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//               What's Happening
//             </span>

//             <h2 className="mt-2 text-3xl font-extrabold text-[#063B5C] sm:text-4xl">
//               Hospital Events
//             </h2>

//             <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
//               Explore our upcoming and past healthcare programs,
//               community initiatives and awareness activities.
//             </p>
//           </div>

//           <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
//             <CalendarDays className="h-4 w-4 text-[#0A7A78]" />
//             <span className="text-xs font-semibold text-slate-600">
//               {events.length} Events
//             </span>
//           </div>
//         </div>

//         {/* FILTERS */}
//         <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-4 lg:flex-row">
//             {/* SEARCH */}
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search events..."
//                 className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-4 focus:ring-teal-50"
//               />
//             </div>

//             {/* CATEGORY */}
//             <div className="relative lg:w-56">
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-600 outline-none transition focus:border-[#0A7A78] focus:bg-white"
//               >
//                 {categories.map((item) => (
//                   <option key={item}>{item}</option>
//                 ))}
//               </select>

//               <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             </div>

//             {/* STATUS */}
//             <div className="flex rounded-xl bg-slate-100 p-1">
//               {["All", "upcoming", "completed"].map((item) => (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setStatus(item)}
//                   className={`rounded-lg px-4 py-2 text-xs font-bold capitalize transition-all duration-300 ${
//                     status === item
//                       ? "bg-white text-[#0A7A78] shadow-sm"
//                       : "text-slate-500 hover:text-slate-700"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* EVENTS GRID */}
//         <AnimatePresence mode="wait">
//           {filteredEvents.length > 0 ? (
//             <motion.div
//               key={`${search}-${category}-${status}`}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//             >
//               {filteredEvents.map((event, index) => (
//                 <EventCard
//                   key={event.id}
//                   event={event}
//                   index={index}
//                 />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
//             >
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]">
//                 <Search className="h-7 w-7" />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-[#063B5C]">
//                 No events found
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//                 Try changing your search or filter to find other
//                 hospital events.
//               </p>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearch("");
//                   setCategory("All");
//                   setStatus("All");
//                 }}
//                 className="mt-6 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
//               >
//                 Clear Filters
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* =====================================================
//           COMMUNITY CTA
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C]">
//         <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0A7A78]/30 blur-3xl" />
//         <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-2 text-[#4DD4C6]">
//                 <HeartPulse className="h-5 w-5" />
//                 <span className="text-xs font-bold uppercase tracking-[0.2em]">
//                   Your Health Matters
//                 </span>
//               </div>

//               <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
//                 Be a part of our
//                 <span className="text-[#4DD4C6]"> healthcare community.</span>
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-white/65">
//                 Stay connected with Baderia Metroprime Hospital for
//                 health camps, awareness programs and community
//                 healthcare initiatives.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/appointment"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#086663]"
//               >
//                 Book Appointment
//                 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
//               >
//                 <Phone className="h-4 w-4" />
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import moment from "moment";
// import useSWR from "swr";

// import {
//   ArrowRight,
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Search,
//   Sparkles,
//   HeartPulse,
//   ChevronDown,
//   Phone,
// } from "lucide-react";

// import ApiService from "../../src/services/Apiservices";

// /* =========================================================
//    MOMENT JS HELPERS
// ========================================================= */

// const formatDate = (date) => {
//   return date && moment(date).isValid()
//     ? moment(date).format("DD MMM YYYY")
//     : "Date unavailable";
// };

// const getDay = (date) => {
//   return date && moment(date).isValid()
//     ? moment(date).format("DD")
//     : "--";
// };

// const getMonth = (date) => {
//   return date && moment(date).isValid()
//     ? moment(date).format("MMM")
//     : "---";
// };

// const getYear = (date) => {
//   return date && moment(date).isValid()
//     ? moment(date).format("YYYY")
//     : "----";
// };

// /* =========================================================
//    ANIMATION VARIANTS
// ========================================================= */

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const itemVariants = {
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

// /* =========================================================
//    EVENT CARD
// ========================================================= */

// function EventCard({ event }) {
//   const imageSrc = event.image || "/images/event-placeholder.jpg";

//   return (
//     <motion.article
//       variants={itemVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-100 hover:shadow-2xl hover:shadow-slate-900/10"
//     >
//       {/* IMAGE */}
//       <div className="relative h-64 overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={event.title || "Hospital event"}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

//         {/* DATE */}
//         <div className="absolute left-4 top-4 overflow-hidden rounded-2xl bg-white shadow-xl">
//           <div className="bg-[#0A7A78] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white">
//             {getMonth(event.date)}
//           </div>

//           <div className="px-4 py-2 text-center">
//             <div className="text-2xl font-extrabold leading-none text-[#063B5C]">
//               {getDay(event.date)}
//             </div>

//             <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
//               {getYear(event.date)}
//             </div>
//           </div>
//         </div>

//         {/* STATUS */}
//         <div className="absolute right-4 top-4">
//           <span
//             className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${
//               event.status?.toLowerCase() === "upcoming"
//                 ? "bg-emerald-500/90 text-white"
//                 : "bg-slate-800/80 text-white"
//             }`}
//           >
//             {event.status || "Event"}
//           </span>
//         </div>

//         {/* CATEGORY */}
//         <div className="absolute bottom-4 left-4">
//           <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
//             {event.category || "Healthcare"}
//           </span>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6">
//         <h3 className="line-clamp-2 text-xl font-bold leading-snug text-[#063B5C] transition-colors duration-300 group-hover:text-[#0A7A78]">
//           {event.title || "Hospital Event"}
//         </h3>

//         <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
//           {event.shortDescription ||
//             event.description ||
//             "Discover our hospital events, awareness programs and community healthcare initiatives."}
//         </p>

//         {/* EVENT DETAILS */}
//         <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span>{formatDate(event.date)}</span>
//           </div>

//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span>{event.time || "Time to be announced"}</span>
//           </div>

//           <div className="flex items-start gap-2.5 text-xs text-slate-500">
//             <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//             <span className="line-clamp-1">
//               {event.location || "Baderia Metroprime Hospital"}
//             </span>
//           </div>
//         </div>

//         {/* DETAILS LINK */}
//         <Link
//           href={`/events/${event.slug || event.id}`}
//           className="group/link mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-[#063B5C] transition-all duration-300 hover:bg-[#0A7A78] hover:text-white"
//         >
//           <span>View Event Details</span>

//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// export default function EventsPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [status, setStatus] = useState("All");

//   /* =========================================================
//      SWR API
//   ========================================================= */

//   const {
//     data,
//     error,
//     isLoading,
//   } = useSWR("events", () => ApiService.get("events"));

//   /*
//     If ApiService.get already has the events endpoint configured,
//     change the fetcher above to: useSWR("events", ApiService.get)
//   */

//   const events = useMemo(() => {
//     const response = data?.data;

//     if (Array.isArray(response)) {
//       return response;
//     }

//     if (Array.isArray(response?.data)) {
//       return response.data;
//     }

//     if (Array.isArray(data)) {
//       return data;
//     }

//     return [];
//   }, [data]);

//   /* =========================================================
//      CATEGORIES
//   ========================================================= */

//   const categories = useMemo(() => {
//     return [
//       "All",
//       ...new Set(
//         events
//           .map((event) => event.category)
//           .filter(Boolean)
//       ),
//     ];
//   }, [events]);

//   /* =========================================================
//      FEATURED EVENT
//   ========================================================= */

//   const featuredEvent = useMemo(() => {
//     return events.find(
//       (event) =>
//         event.featured === true ||
//         event.featured === 1 ||
//         event.featured === "1"
//     );
//   }, [events]);

//   /* =========================================================
//      FILTER AND SORT
//   ========================================================= */

//   const filteredEvents = useMemo(() => {
//     const searchTerm = search.trim().toLowerCase();

//     return events
//       .filter((event) => {
//         const title = String(event.title || "").toLowerCase();
//         const eventCategory = String(event.category || "").toLowerCase();
//         const location = String(event.location || "").toLowerCase();
//         const description = String(
//           event.shortDescription || event.description || ""
//         ).toLowerCase();

//         const matchesSearch =
//           title.includes(searchTerm) ||
//           eventCategory.includes(searchTerm) ||
//           location.includes(searchTerm) ||
//           description.includes(searchTerm);

//         const matchesCategory =
//           category === "All" || event.category === category;

//         const matchesStatus =
//           status === "All" ||
//           String(event.status || "").toLowerCase() ===
//             status.toLowerCase();

//         return matchesSearch && matchesCategory && matchesStatus;
//       })
//       .sort((a, b) => {
//         const dateA = moment(a.date);
//         const dateB = moment(b.date);

//         if (!dateA.isValid()) return 1;
//         if (!dateB.isValid()) return -1;

//         return dateA.valueOf() - dateB.valueOf();
//       });
//   }, [events, search, category, status]);

//   /* =========================================================
//      LOADING STATE
//   ========================================================= */

//   if (isLoading) {
//     return (
//       <main className="min-h-screen bg-slate-50">
//         <section className="bg-[#063B5C] px-4 pb-20 pt-32">
//           <div className="mx-auto max-w-7xl animate-pulse">
//             <div className="h-5 w-56 rounded-full bg-white/20" />
//             <div className="mt-6 h-12 max-w-xl rounded-xl bg-white/20" />
//             <div className="mt-4 h-5 max-w-lg rounded-lg bg-white/10" />
//           </div>
//         </section>

//         <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 lg:grid-cols-3">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white"
//             >
//               <div className="h-64 bg-slate-200" />
//               <div className="space-y-4 p-6">
//                 <div className="h-5 w-3/4 rounded bg-slate-200" />
//                 <div className="h-4 rounded bg-slate-100" />
//                 <div className="h-4 w-2/3 rounded bg-slate-100" />
//               </div>
//             </div>
//           ))}
//         </section>
//       </main>
//     );
//   }

//   /* =========================================================
//      ERROR STATE
//   ========================================================= */

//   if (error) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">
//         <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
//             <Search className="h-6 w-6" />
//           </div>

//           <h2 className="mt-5 text-2xl font-bold text-[#063B5C]">
//             Unable to load events
//           </h2>

//           <p className="mt-3 text-sm leading-6 text-slate-500">
//             We could not retrieve hospital events. Please try again.
//           </p>

//           <button
//             type="button"
//             onClick={() => window.location.reload()}
//             className="mt-6 rounded-xl bg-[#0A7A78] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
//           >
//             Try Again
//           </button>
//         </div>
//       </main>
//     );
//   }

//   /* =========================================================
//      MAIN UI
//   ========================================================= */

//   return (
//     <main className="min-h-screen bg-slate-50">
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C] pt-32">
//         {/* BACKGROUND */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 overflow-hidden"
//         >
//           <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />
//           <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

//           <div className="absolute inset-0 opacity-[0.04]">
//             <div
//               className="h-full w-full"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//                 backgroundSize: "45px 45px",
//               }}
//             />
//           </div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4DD4C6] backdrop-blur-md"
//             >
//               <Sparkles className="h-3.5 w-3.5" />
//               Hospital Events & Activities
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Events that bring
//               <span className="block text-[#4DD4C6]">
//                 healthcare closer.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
//             >
//               Stay connected with health camps, awareness programs,
//               community initiatives and special events at Baderia
//               Metroprime Multi Speciality Hospital.
//             </motion.p>
//           </div>
//         </div>

//         {/* WAVE */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1440 100"
//             className="h-auto w-full"
//             preserveAspectRatio="none"
//             aria-hidden="true"
//           >
//             <path
//               fill="#f8fafc"
//               d="M0,64 C240,120 480,0 720,42 C960,84 1200,15 1440,60 L1440,100 L0,100 Z"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED EVENT
//       ===================================================== */}

//       {featuredEvent && (
//         <section className="relative z-10 mx-auto -mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
//           >
//             <div className="grid lg:grid-cols-2">
//               {/* IMAGE */}
//               <div className="relative min-h-[320px] overflow-hidden lg:min-h-[430px]">
//                 <Image
//                   src={
//                     featuredEvent.image ||
//                     "/images/event-placeholder.jpg"
//                   }
//                   alt={featuredEvent.title || "Featured hospital event"}
//                   fill
//                   priority
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

//                 <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0A7A78] shadow-xl backdrop-blur-md">
//                   <Sparkles className="h-3.5 w-3.5" />
//                   Featured Event
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
//                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//                   {featuredEvent.category || "Hospital Event"}
//                 </span>

//                 <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#063B5C] sm:text-4xl">
//                   {featuredEvent.title}
//                 </h2>

//                 <p className="mt-5 text-sm leading-7 text-slate-500">
//                   {featuredEvent.description ||
//                     featuredEvent.shortDescription ||
//                     "Discover our healthcare initiatives and community events."}
//                 </p>

//                 <div className="mt-7 grid gap-3 sm:grid-cols-2">
//                   <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
//                     <CalendarDays className="h-5 w-5 text-[#0A7A78]" />

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                         Date
//                       </p>

//                       <p className="mt-0.5 text-xs font-semibold text-slate-700">
//                         {formatDate(featuredEvent.date)}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
//                     <Clock3 className="h-5 w-5 text-[#0A7A78]" />

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                         Time
//                       </p>

//                       <p className="mt-0.5 text-xs font-semibold text-slate-700">
//                         {featuredEvent.time || "To be announced"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <Link
//                   href={`/events/${featuredEvent.slug || featuredEvent.id}`}
//                   className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#086663]"
//                 >
//                   Explore Event

//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       )}

//       {/* =====================================================
//           EVENTS SECTION
//       ===================================================== */}

//       <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
//         {/* HEADER */}
//         <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//           <div>
//             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A7A78]">
//               What's Happening
//             </span>

//             <h2 className="mt-2 text-3xl font-extrabold text-[#063B5C] sm:text-4xl">
//               Hospital Events
//             </h2>

//             <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
//               Explore our upcoming and past healthcare programs,
//               community initiatives and awareness activities.
//             </p>
//           </div>

//           <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
//             <CalendarDays className="h-4 w-4 text-[#0A7A78]" />

//             <span className="text-xs font-semibold text-slate-600">
//               {events.length} Events
//             </span>
//           </div>
//         </div>

//         {/* FILTERS */}
//         <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-4 lg:flex-row">
//             {/* SEARCH */}
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search events..."
//                 aria-label="Search events"
//                 className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-4 focus:ring-teal-50"
//               />
//             </div>

//             {/* CATEGORY */}
//             <div className="relative lg:w-56">
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 aria-label="Filter by category"
//                 className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-600 outline-none transition focus:border-[#0A7A78] focus:bg-white"
//               >
//                 {categories.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             </div>

//             {/* STATUS */}
//             <div className="flex flex-wrap rounded-xl bg-slate-100 p-1">
//               {["All", "upcoming", "completed"].map((item) => (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setStatus(item)}
//                   className={`rounded-lg px-4 py-2 text-xs font-bold capitalize transition-all duration-300 ${
//                     status === item
//                       ? "bg-white text-[#0A7A78] shadow-sm"
//                       : "text-slate-500 hover:text-slate-700"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* EVENTS GRID */}
//         <AnimatePresence mode="wait">
//           {filteredEvents.length > 0 ? (
//             <motion.div
//               key={`${search}-${category}-${status}`}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit={{ opacity: 0, y: 10 }}
//               className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//             >
//               {filteredEvents.map((event) => (
//                 <EventCard
//                   key={event.id ?? event.slug}
//                   event={event}
//                 />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="empty"
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
//             >
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#0A7A78]">
//                 <Search className="h-7 w-7" />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-[#063B5C]">
//                 No events found
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//                 Try changing your search or filter to find other
//                 hospital events.
//               </p>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearch("");
//                   setCategory("All");
//                   setStatus("All");
//                 }}
//                 className="mt-6 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#086663]"
//               >
//                 Clear Filters
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* =====================================================
//           COMMUNITY CTA
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#063B5C]">
//         <div
//           aria-hidden="true"
//           className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0A7A78]/30 blur-3xl"
//         />

//         <div
//           aria-hidden="true"
//           className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-2 text-[#4DD4C6]">
//                 <HeartPulse className="h-5 w-5" />

//                 <span className="text-xs font-bold uppercase tracking-[0.2em]">
//                   Your Health Matters
//                 </span>
//               </div>

//               <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
//                 Be a part of our
//                 <span className="text-[#4DD4C6]">
//                   {" "}healthcare community.
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-white/65">
//                 Stay connected with Baderia Metroprime Hospital for
//                 health camps, awareness programs and community
//                 healthcare initiatives.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/appointment"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#086663]"
//               >
//                 Book Appointment

//                 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
//               >
//                 <Phone className="h-4 w-4" />
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import ApiService from "../../src/services/Apiservices";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Sparkles,
  Activity,
  X,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import EventsHero from "./components/EventsHero";

/* =========================================================
   HELPERS
========================================================= */

const formatDate = (date) => {
  if (!date || !moment(date).isValid()) {
    return "Date to be announced";
  }

  return moment.utc(date).format("DD MMM YYYY");
};

const isFeatured = (event) =>
  event.featured === 1 ||
  event.featured === "1" ||
  event.featured === true;

const getEventDate = (event) =>
  event.event_date || event.date || null;

const getEventDescription = (event) =>
  event.short_description ||
  event.shortDescription ||
  event.description ||
  "Join us for a healthcare event organised by our expert medical team.";

const getEventStatus = (event) => {
  if (event.status) return String(event.status).toLowerCase();

  const date = getEventDate(event);

  if (!date) return "upcoming";

  return moment.utc(date).isBefore(moment.utc(), "day")
    ? "completed"
    : "upcoming";
};

/* =========================================================
   EVENT IMAGE
========================================================= */

function EventImage({ event, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#D9F0F1] to-[#EAF3F8] ${className}`}
    >
      {event.image && !imageFailed ? (
        <img
          src={event.image}
          alt={event.title || "Hospital event"}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-[#087F8C]">
          <HeartPulse size={48} strokeWidth={1.5} />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#062F46]/30 via-transparent to-transparent" />
    </div>
  );
}

/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({ event, index }) {
  const status = getEventStatus(event);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DFE2] hover:shadow-xl"
    >
      <Link
        href={`/events/${event.slug || event.id}`}
        className="relative block"
      >
        <EventImage event={event} className="h-48 sm:h-52" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#075B70] shadow-sm">
            {event.category || "Hospital Event"}
          </span>

          {isFeatured(event) && (
            <span className="flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1.5 text-xs font-bold text-amber-950">
              <Sparkles size={12} />
              Featured
            </span>
          )}
        </div>

        <span
          className={`absolute bottom-3 right-3 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            ["completed", "past"].includes(status)
              ? "bg-slate-100 text-slate-600"
              : status === "cancelled"
                ? "bg-rose-50 text-rose-700"
                : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#07818D]">
          <CalendarDays size={15} />
          {formatDate(getEventDate(event))}
        </div>

        <Link href={`/events/${event.slug || event.id}`}>
          <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-slate-800 transition-colors group-hover:text-[#087F8C]">
            {event.title || "Hospital Event"}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-[3rem] text-sm leading-6 text-slate-500">
          {getEventDescription(event)}
        </p>

        <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
          <div className="flex items-start gap-2.5 text-sm text-slate-600">
            <Clock3 size={16} className="mt-0.5 shrink-0 text-[#0B8D98]" />
            <span>
              {event.event_time || event.time || "Time to be announced"}
            </span>
          </div>

          <div className="flex items-start gap-2.5 text-sm text-slate-600">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[#0B8D98]" />
            <span className="line-clamp-2">
              {event.location || "Hospital premises"}
            </span>
          </div>
        </div>

        <Link
          href={`/events/${event.slug || event.id}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#C6E5E7] bg-[#F0FAFA] px-4 py-3 text-sm font-bold text-[#075B70] transition hover:bg-[#075B70] hover:text-white"
        >
          View Event Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

/* =========================================================
   LOADING CARD
========================================================= */

function LoadingCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="h-48 animate-pulse bg-slate-100" />
      <div className="space-y-4 p-5">
        <div className="h-3 w-28 animate-pulse rounded bg-slate-100" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-slate-100" />
        <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
        <div className="h-10 animate-pulse rounded-xl bg-slate-100" />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN EVENTS PAGE
========================================================= */

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [activeStatus, setActiveStatus] = useState("all");

  // Existing ApiService integration
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR("events", ApiService.get);

  const events = data?.data || [];

  const categories = useMemo(() => {
    const unique = [
      ...new Set(events.map((event) => event.category).filter(Boolean)),
    ];

    return ["All Events", ...unique];
  }, [events]);

  const featuredEvent = useMemo(() => {
    return events.find(isFeatured) || events[0] || null;
  }, [events]);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events
      .filter((event) => {
        const matchesSearch =
          !query ||
          [
            event.title,
            event.category,
            event.location,
            event.short_description,
            event.description,
          ]
            .filter(Boolean)
            .some((value) =>
              String(value).toLowerCase().includes(query)
            );

        const matchesCategory =
          activeCategory === "All Events" ||
          event.category === activeCategory;

        const status = getEventStatus(event);

        const matchesStatus =
          activeStatus === "all" ||
          (activeStatus === "upcoming" &&
            !["completed", "past", "cancelled"].includes(status)) ||
          (activeStatus === "completed" &&
            ["completed", "past"].includes(status));

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        const dateA = getEventDate(a)
          ? moment.utc(getEventDate(a)).valueOf()
          : Number.MAX_SAFE_INTEGER;

        const dateB = getEventDate(b)
          ? moment.utc(getEventDate(b)).valueOf()
          : Number.MAX_SAFE_INTEGER;

        return dateA - dateB;
      });
  }, [events, search, activeCategory, activeStatus]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All Events");
    setActiveStatus("all");
  };

  return (
    <main className="min-h-screen bg-[#F7FAFC] text-slate-800">
      {/* HERO SECTION */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#052F49] via-[#07566B] to-[#087D87] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-36 left-[35%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-cyan-50 backdrop-blur">
              <HeartPulse size={15} />
              CARE • COMMUNITY • WELLNESS
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
              Events That Put{" "}
              <span className="text-cyan-200">Your Health First</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Explore health camps, awareness programs and community
              initiatives designed to help you and your family live healthier.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#events-list"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07566B] shadow-lg transition hover:bg-cyan-50"
              >
                Explore Events
                <ArrowRight size={17} />
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90">
                <ShieldCheck size={17} className="text-cyan-200" />
                Trusted Healthcare
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-[340px] rounded-3xl border border-white/20 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
              <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-200 text-[#07566B] shadow-lg">
                <Stethoscope size={23} />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                  <Activity size={25} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Better Health Together
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Care beyond the hospital
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-white/15" />

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <CalendarDays size={21} className="mb-3 text-cyan-200" />
                  <p className="text-2xl font-bold">{events.length}</p>
                  <p className="mt-1 text-xs text-slate-300">Listed Events</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <HeartPulse size={21} className="mb-3 text-cyan-200" />
                  <p className="text-2xl font-bold">Care</p>
                  <p className="mt-1 text-xs text-slate-300">At Every Step</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-300">
                Discover opportunities to learn, connect and take a proactive
                step toward healthier living.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
       {/* <EventsHero /> */}

      {/* EVENTS CONTENT */}

      <section
        id="events-list"
        className="mx-auto max-w-6xl scroll-mt-6 px-4 py-9 sm:px-6 sm:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087F8C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9AA6]" />
              Stay Connected
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Explore Our Events
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Find upcoming health camps, medical programs and hospital
              initiatives in one place.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 sm:self-auto">
            <CalendarDays size={17} className="text-[#087F8C]" />
            <span>
              <strong className="text-slate-900">{events.length}</strong>{" "}
              {events.length === 1 ? "event" : "events"} available
            </span>
          </div>
        </motion.div>

        {/* FEATURED EVENT */}

        {!isLoading && !error && featuredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mb-9 overflow-hidden rounded-3xl border border-[#D9E9EC] bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <Link
                href={`/events/${featuredEvent.slug || featuredEvent.id}`}
                className="group relative block min-h-[230px] overflow-hidden sm:min-h-[270px]"
              >
                <EventImage
                  event={featuredEvent}
                  className="absolute inset-0 h-full w-full"
                />

                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-amber-950">
                  <Sparkles size={14} />
                  Featured Event
                </div>
              </Link>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#EAF7F7] px-3 py-1.5 text-xs font-bold text-[#087F8C]">
                    {featuredEvent.category || "Hospital Event"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {formatDate(getEventDate(featuredEvent))}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  {featuredEvent.title || "Featured Hospital Event"}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                  {getEventDescription(featuredEvent)}
                </p>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Clock3 size={16} className="mt-0.5 shrink-0 text-[#087F8C]" />
                    <span>
                      {featuredEvent.event_time ||
                        featuredEvent.time ||
                        "Time to be announced"}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#087F8C]" />
                    <span className="line-clamp-2">
                      {featuredEvent.location || "Hospital premises"}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/events/${featuredEvent.slug || featuredEvent.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#075B70] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#043E54]"
                  >
                    Explore This Event
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SEARCH & FILTERS */}

        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events, categories or locations..."
                aria-label="Search events"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-11 pr-10 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0B8D98] focus:bg-white focus:ring-4 focus:ring-[#0B8D98]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-100"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "All", value: "all" },
                { label: "Upcoming", value: "upcoming" },
                { label: "Completed", value: "completed" },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setActiveStatus(item.value)}
                  className={`rounded-xl px-4 py-3 text-xs font-bold transition sm:text-sm ${
                    activeStatus === item.value
                      ? "bg-[#075B70] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#A9D9DD] hover:bg-[#F0FAFA]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {categories.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#DDF2F3] text-[#075B70] ring-1 ring-[#B8E0E3]"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RESULTS HEADER */}

        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {activeStatus === "upcoming"
                ? "Upcoming Events"
                : activeStatus === "completed"
                  ? "Completed Events"
                  : "All Hospital Events"}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {isLoading
                ? "Loading events..."
                : `${filteredEvents.length} ${
                    filteredEvents.length === 1 ? "result" : "results"
                  } found`}
            </p>
          </div>

          {(search ||
            activeCategory !== "All Events" ||
            activeStatus !== "all") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087F8C] hover:text-[#054A5E]"
            >
              <X size={14} />
              Clear filters
            </button>
          )}
        </div>

        {/* LOADING */}

        {isLoading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        )}

        {/* API ERROR */}

        {error && !isLoading && (
          <div className="rounded-2xl border border-rose-200 bg-white p-7 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
              <RefreshCw size={25} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Unable to load events
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              {error.message || "Something went wrong while loading events."}
            </p>

            <button
              type="button"
              onClick={() => mutate()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#075B70] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#043E54]"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        )}

        {/* EVENT GRID */}

        {!isLoading && !error && filteredEvents.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id || event.slug || `${event.title}-${index}`}
                  event={event}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* EMPTY STATE */}

        {!isLoading && !error && filteredEvents.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F7] text-[#087F8C]">
              <Search size={25} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No events found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try a different search term or remove some filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#A9D9DD] hover:bg-[#F0FAFA]"
            >
              Clear all filters
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}

      <section className="px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#063B5C] to-[#087D87] px-6 py-8 text-white sm:px-9 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                <HeartPulse size={16} />
                Your Health Matters
              </div>

              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Be a Part of Our Healthier Community
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/75">
                Stay connected with our healthcare initiatives and discover
                events that support better health for everyone.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#07566B] transition hover:bg-cyan-50 md:self-center"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

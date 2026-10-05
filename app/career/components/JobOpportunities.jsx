
// "use client";

// import React, { useMemo, useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import jobs from "../../data/Hospitaljobs";
// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   Clock3,
//   MapPin,
//   Search,
//   Stethoscope,
//   SlidersHorizontal,
//   X,
// } from "lucide-react";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
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

// const JobOpportunities = () => {
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");

//   // Get unique departments
//   const departments = useMemo(() => {
//     const uniqueDepartments = [
//       ...new Set(
//         jobs
//           .map((job) => job.department)
//           .filter(Boolean)
//       ),
//     ];

//     return ["All Departments", ...uniqueDepartments];
//   }, [jobs]);

//   // Search + Department Filter
//   const filteredJobs = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return jobs.filter((job) => {
//       const matchesDepartment =
//         department === "All Departments" ||
//         job.department === department;

//       const matchesSearch =
//         !searchValue ||
//         job.title?.toLowerCase().includes(searchValue) ||
//         job.department?.toLowerCase().includes(searchValue) ||
//         job.location?.toLowerCase().includes(searchValue) ||
//         job.type?.toLowerCase().includes(searchValue) ||
//         job.experience?.toLowerCase().includes(searchValue);

//       return matchesDepartment && matchesSearch;
//     });
//   }, [jobs, search, department]);

//   const clearFilters = () => {
//     setSearch("");
//     setDepartment("All Departments");
//   };

//   return (
//     <section
//       id="jobs"
//       className="relative overflow-hidden bg-[#f6f9f9] py-20 sm:py-24"
//     >
//       {/* Background */}
//       <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/5 blur-3xl" />

//       <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-100/30 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           variants={fadeUp}
//           className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
//         >
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-[#0A7A78]" />

//               <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0A7A78]">
//                 Opportunities
//               </p>
//             </div>

//             <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
//               Find your next
//               <span className="text-[#0A7A78]">
//                 {" "}opportunity.
//               </span>
//             </h2>

//             <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
//               Explore current opportunities across clinical, nursing,
//               administrative and support teams.
//             </p>
//           </div>

//           {/* Count */}
//           <div className="inline-flex h-fit w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm">
//             <BriefcaseBusiness className="h-4 w-4 text-[#0A7A78]" />

//             <span className="text-[#0A7A78]">
//               {filteredJobs.length}
//             </span>

//             Open Positions
//           </div>
//         </motion.div>

//         {/* ================= SEARCH FILTER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{ duration: 0.5 }}
//           className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
//         >
//           <div className="flex flex-col gap-3 lg:flex-row">

//             {/* Search */}
//             <div className="relative flex-1">
//               <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search jobs, location, department..."
//                 className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
//                 >
//                   <X className="h-3.5 w-3.5" />
//                 </button>
//               )}
//             </div>

//             {/* Department */}
//             <div className="relative lg:w-64">
//               <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A7A78]" />

//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
//               >
//                 {departments.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
//                 ▼
//               </div>
//             </div>

//             {/* Clear */}
//             {(search || department !== "All Departments") && (
//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="h-11 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>

//           {/* Active Filter */}
//           <div className="mt-3 flex items-center justify-between px-1">
//             <p className="text-[11px] text-slate-400">
//               Showing{" "}
//               <span className="font-bold text-slate-600">
//                 {filteredJobs.length}
//               </span>{" "}
//               of{" "}
//               <span className="font-bold text-slate-600">
//                 {jobs.length}
//               </span>{" "}
//               positions
//             </p>

//             {department !== "All Departments" && (
//               <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[10px] font-bold text-[#0A7A78]">
//                 {department}
//               </span>
//             )}
//           </div>
//         </motion.div>

//         {/* ================= JOB LIST ================= */}
//         <AnimatePresence mode="popLayout">
//           {filteredJobs.length > 0 ? (
//             <motion.div
//               key="job-list"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{
//                 once: true,
//                 amount: 0.1,
//               }}
//               variants={stagger}
//               className="mt-5 space-y-3"
//             >
//               {filteredJobs.map((job, index) => (
//                 <motion.div
//                   key={`${job.title}-${index}`}
//                   layout
//                   variants={fadeUp}
//                   initial={{
//                     opacity: 0,
//                     y: 15,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -10,
//                   }}
//                   whileHover={{
//                     y: -3,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#0A7A78]/30 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:p-5"
//                 >
//                   {/* Left Accent */}
//                   <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[#0A7A78] transition-transform duration-300 group-hover:scale-y-100" />

//                   <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

//                     {/* Job Info */}
//                     <div className="flex min-w-0 gap-4">

//                       {/* Icon */}
//                       <motion.div
//                         whileHover={{
//                           rotate: -5,
//                           scale: 1.08,
//                         }}
//                         className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] transition-all duration-300 group-hover:bg-[#0A7A78] group-hover:text-white sm:flex"
//                       >
//                         <Stethoscope className="h-5 w-5" />
//                       </motion.div>

//                       <div className="min-w-0 flex-1">

//                         {/* Title */}
//                         <div className="flex flex-wrap items-center gap-2.5">
//                           <h3 className="text-base font-black text-slate-950 sm:text-lg">
//                             {job.title}
//                           </h3>

//                           <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0A7A78]">
//                             {job.department}
//                           </span>
//                         </div>

//                         {/* Details */}
//                         <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">

//                           <span className="inline-flex items-center gap-1.5">
//                             <MapPin className="h-3.5 w-3.5 text-slate-400" />
//                             {job.location}
//                           </span>

//                           <span className="inline-flex items-center gap-1.5">
//                             <Clock3 className="h-3.5 w-3.5 text-slate-400" />
//                             {job.type}
//                           </span>

//                           <span className="font-medium text-slate-400">
//                             {job.experience}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Apply */}
//                     <Link
//                       href={job.applyUrl || "#apply"}
//                       className="group/button inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#075e63] sm:w-fit"
//                     >
//                       Apply Now

//                       <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-1" />
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             /* No Result */
//             <motion.div
//               key="no-results"
//               initial={{
//                 opacity: 0,
//                 scale: 0.98,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"
//             >
//               <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
//                 <Search className="h-5 w-5" />
//               </div>

//               <h3 className="mt-4 text-base font-black text-slate-900">
//                 No positions found
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
//                 Try searching with a different keyword or select another
//                 department.
//               </p>

//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="mt-5 rounded-xl bg-[#0A7A78] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#075e63]"
//               >
//                 Reset Search
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default JobOpportunities;





// "use client";

// import React, { useMemo, useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import jobs from "../../data/Hospitaljobs";
// import useSWR from 'swr'

// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   Clock3,
//   MapPin,
//   Search,
//   Stethoscope,
//   SlidersHorizontal,
//   X,
//   GraduationCap,
//   CheckCircle2,
// } from "lucide-react";
// import ApiService from "../../src/services/Apiservices";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
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

// const JobOpportunities = () => {
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");



//   // apis 

//   // const {data,error,isLoading} = useSWR('career-roles',ApiService.get)

//   // const jobs = data?.data || []

//   // =====================================================
//   // UNIQUE DEPARTMENTS
//   // =====================================================

//   const departments = useMemo(() => {
//     const uniqueDepartments = [...new Set(jobs?.map((job) => job.department).filter(Boolean)),];

//     return ["All Departments", ...uniqueDepartments];
//   }, []);

//   // =====================================================
//   // SEARCH + DEPARTMENT FILTER
//   // =====================================================

//   const filteredJobs = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return jobs.filter((job) => {
//       const matchesDepartment =
//         department === "All Departments" ||
//         job.department === department;

//       const searchableText = [
//         job.title,
//         job.department,
//         job.location,
//         job.employmentType,
//         job.experience,
//         job.qualification,
//         job.description,
//         ...(job.skills || []),
//       ]
//         .filter(Boolean)
//         .join(" ")
//         .toLowerCase();

//       const matchesSearch =
//         !searchValue ||
//         searchableText.includes(searchValue);

//       return matchesDepartment && matchesSearch;
//     });
//   }, [search, department]);

//   // =====================================================
//   // CLEAR FILTERS
//   // =====================================================

//   const clearFilters = () => {
//     setSearch("");
//     setDepartment("All Departments");
//   };

//   // =====================================================
//   // RENDER
//   // =====================================================

//   return (
//     <section
//       id="jobs"
//       className="relative overflow-hidden bg-[#f6f9f9] py-20 sm:py-24"
//     >
//       {/* Background */}
//       <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/5 blur-3xl" />

//       <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-100/30 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           variants={fadeUp}
//           className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
//         >
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-[#0A7A78]" />

//               <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0A7A78]">
//                 Opportunities
//               </p>
//             </div>

//             <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
//               Find your next
//               <span className="text-[#0A7A78]">
//                 {" "}opportunity.
//               </span>
//             </h2>

//             <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
//               Explore current opportunities across clinical, nursing,
//               administrative and support teams.
//             </p>
//           </div>

//           {/* Count */}
//           <div className="inline-flex h-fit w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm">
//             <BriefcaseBusiness className="h-4 w-4 text-[#0A7A78]" />

//             <span className="text-[#0A7A78]">
//               {filteredJobs.length}
//             </span>

//             Open Positions
//           </div>
//         </motion.div>

//         {/* =====================================================
//             SEARCH + FILTER
//         ===================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{ duration: 0.5 }}
//           className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
//         >
//           <div className="flex flex-col gap-3 lg:flex-row">

//             {/* Search */}
//             <div className="relative flex-1">
//               <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search jobs, location, department, skills..."
//                 className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
//                 >
//                   <X className="h-3.5 w-3.5" />
//                 </button>
//               )}
//             </div>

//             {/* Department */}
//             <div className="relative lg:w-72">
//               <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A7A78]" />

//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
//               >
//                 {departments.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
//                 ▼
//               </div>
//             </div>

//             {/* Clear */}
//             {(search || department !== "All Departments") && (
//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="h-11 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>

//           {/* Filter Status */}
//           <div className="mt-3 flex items-center justify-between px-1">
//             <p className="text-[11px] text-slate-400">
//               Showing{" "}
//               <span className="font-bold text-slate-600">
//                 {filteredJobs.length}
//               </span>{" "}
//               of{" "}
//               <span className="font-bold text-slate-600">
//                 {jobs.length}
//               </span>{" "}
//               positions
//             </p>

//             {department !== "All Departments" && (
//               <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[10px] font-bold text-[#0A7A78]">
//                 {department}
//               </span>
//             )}
//           </div>
//         </motion.div>

//         {/* =====================================================
//             JOB LIST
//         ===================================================== */}

//         {/* ================= JOB GRID ================= */}
// <AnimatePresence mode="popLayout">
//   {filteredJobs.length > 0 ? (
//     <motion.div
//       key="job-grid"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{
//         once: true,
//         amount: 0.1,
//       }}
//       variants={stagger}
//       className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
//     >
//       {filteredJobs.map((job, index) => (
//         <motion.div
//           key={`${job.id}-${job.title}-${index}`}
//           layout
//           variants={fadeUp}
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           exit={{
//             opacity: 0,
//             y: -10,
//           }}
//           whileHover={{
//             y: -6,
//           }}
//           transition={{
//             duration: 0.3,
//           }}
//           className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#0A7A78]/30 hover:shadow-[0_15px_40px_rgba(15,23,42,0.09)]"
//         >
//           {/* Top Accent */}
//           <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#0A7A78] transition-transform duration-300 group-hover:scale-x-100" />

//           {/* Header */}
//           <div className="flex items-start justify-between gap-3">

//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] transition-all duration-300 group-hover:bg-[#0A7A78] group-hover:text-white">
//               <Stethoscope className="h-5 w-5" />
//             </div>

//             <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0A7A78]">
//               {job.department}
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="mt-5 min-h-[52px] text-lg font-black leading-6 text-slate-950">
//             {job.title}
//           </h3>

//           {/* Details */}
//           <div className="mt-4 space-y-2.5">

//             <div className="flex items-center gap-2 text-xs text-slate-500">
//               <MapPin className="h-4 w-4 shrink-0 text-[#0A7A78]" />
//               <span>{job.location}</span>
//             </div>

//             <div className="flex items-center gap-2 text-xs text-slate-500">
//               <Clock3 className="h-4 w-4 shrink-0 text-[#0A7A78]" />
//               <span>{job.employmentType}</span>
//             </div>

//             <div className="flex items-center gap-2 text-xs text-slate-500">
//               <BriefcaseBusiness className="h-4 w-4 shrink-0 text-[#0A7A78]" />
//               <span>{job.experience}</span>
//             </div>

//             <div className="flex items-start gap-2 text-xs text-slate-500">
//               <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
//               <span className="line-clamp-2">
//                 {job.qualification}
//               </span>
//             </div>

//           </div>

//           {/* Description */}
//           <p className="mt-4 line-clamp-3 text-xs leading-6 text-slate-500">
//             {job.description}
//           </p>

//           {/* Skills */}
//           <div className="mt-4 flex min-h-[52px] flex-wrap content-start gap-1.5">
//             {job.skills?.slice(0, 4).map((skill) => (
//               <span
//                 key={skill}
//                 className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
//               >
//                 {skill}
//               </span>
//             ))}

//             {job.skills?.length > 4 && (
//               <span className="rounded-md bg-[#0A7A78]/5 px-2 py-1 text-[10px] font-bold text-[#0A7A78]">
//                 +{job.skills.length - 4}
//               </span>
//             )}
//           </div>

//           {/* Bottom */}
//           <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">

//             <span className="text-[10px] font-semibold text-slate-400">
//               {job.salary}
//             </span>

//             <Link
//               href={job.applyUrl || "#apply"}
//               className="inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#075e63]"
//             >
//               View & Apply

//               <ArrowRight className="h-3.5 w-3.5" />
//             </Link>

//           </div>
//         </motion.div>
//       ))}
//     </motion.div>
//   ) : (
//     <motion.div
//       key="no-results"
//       initial={{
//         opacity: 0,
//         scale: 0.98,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//       }}
//       className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"
//     >
//       <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
//         <Search className="h-5 w-5" />
//       </div>

//       <h3 className="mt-4 text-base font-black text-slate-900">
//         No positions found
//       </h3>

//       <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
//         Try searching with a different keyword or select another department.
//       </p>

//       <button
//         type="button"
//         onClick={clearFilters}
//         className="mt-5 rounded-xl bg-[#0A7A78] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#075e63]"
//       >
//         Reset Search
//       </button>
//     </motion.div>
//   )}
// </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default JobOpportunities;



"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";

import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Search,
  Stethoscope,
  SlidersHorizontal,
  X,
  GraduationCap,
  Users,
  CalendarDays,
  Hash,
} from "lucide-react";

import ApiService from "../../src/services/Apiservices";
import { FiArrowRight } from "react-icons/fi";
import ApplyApplicationForm from "./ApplyApplicationForm";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
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

const JobOpportunities = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  // Application drawer
  const [applicationDrawer, setApplicationDrawer] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(selectedJob)
  // =====================================================
  // API
  // =====================================================

  const {
    data,
    error,
    isLoading,
  } = useSWR("career-roles", ApiService.get);

  // =====================================================
  // RAW API DATA
  // =====================================================

 const jobs = data?.data || [];

// =====================================================
// NORMALIZE API DATA
// =====================================================

const normalizedJobs = useMemo(() => {
  return jobs.map((job) => {
    let skills = [];
    let responsibilities = [];

    try {
      skills = Array.isArray(job.skills)
        ? job.skills
        : JSON.parse(job.skills || "[]");
    } catch {
      skills = [];
    }

    try {
      responsibilities = Array.isArray(job.responsibilities)
        ? job.responsibilities
        : JSON.parse(job.responsibilities || "[]");
    } catch {
      responsibilities = [];
    }

    return {
      ...job,

      id: job.id,

      // Department ID
      departmentId: job.department_id,

      // Department Name
      department: job.department_name || "",
      departmentName: job.department_name || "",

      // API field -> UI field
      employmentType: job.employment_type,

      // JSON string -> Array
      skills,
      responsibilities,

      // Optional fields
      salary: job.salary || null,
      applyUrl: job.apply_url || "#apply",
    };
  });
}, [jobs]);


// =====================================================
// UNIQUE DEPARTMENTS
// =====================================================

const departments = useMemo(() => {
  const uniqueDepartments = [
    ...new Set(
      normalizedJobs
        .map((job) => job.departmentName)
        .filter(Boolean)
    ),
  ];

  return ["All Departments", ...uniqueDepartments];
}, [normalizedJobs]);


// =====================================================
// SEARCH + FILTER
// =====================================================

const filteredJobs = useMemo(() => {
  const searchValue = search.toLowerCase().trim();

  return normalizedJobs.filter((job) => {

    // Department filter by NAME
    const matchesDepartment =
      department === "All Departments" ||
      job.departmentName === department;

    const searchableText = [
      job.title,
      job.departmentName,
      job.location,
      job.employmentType,
      job.experience,
      job.qualification,
      job.summary,
      job.description,
      job.vacancy_code,

      ...(job.skills || []),
      ...(job.responsibilities || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !searchValue ||
      searchableText.includes(searchValue);

    return matchesDepartment && matchesSearch;
  });
}, [normalizedJobs, search, department]);



   // =========================
  // const handleApply = (job) => {
  //   console.log("Selected Job:", job);

  //   setSelectedJob(job);
  //   setApplicationDrawer(true);
  // };

  // =========================
  // CLOSE DRAWER
  // =========================
  const handleCloseApplication = () => {
    setApplicationDrawer(false);
    setSelectedJob(null);
  };

  // =====================================================
  // CLEAR FILTER
  // =====================================================

  const clearFilters = () => {
    setSearch("");
    setDepartment("All Departments");
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (isLoading) {
    return (
      <section className="bg-[#f6f9f9] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0A7A78]" />

              <p className="mt-4 text-sm font-medium text-slate-500">
                Loading career opportunities...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // API ERROR
  // =====================================================

  if (error) {
    return (
      <section className="bg-[#f6f9f9] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-200 bg-white p-10 text-center">
            <h3 className="text-lg font-black text-red-600">
              Unable to load jobs
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Something went wrong while loading career opportunities.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-xl bg-[#0A7A78] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#075e63]"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }
   return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-[#f6f9f9] py-20 sm:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#0A7A78]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

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

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0A7A78]">
                Opportunities
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Find your next
              <span className="text-[#0A7A78]">
                {" "}opportunity.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore current opportunities across clinical, nursing,
              administrative and support teams.
            </p>
          </div>

          {/* Count */}
          <div className="inline-flex h-fit w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm">
            <BriefcaseBusiness className="h-4 w-4 text-[#0A7A78]" />

            <span className="text-[#0A7A78]">
              {filteredJobs.length}
            </span>

            Open Positions
          </div>
        </motion.div>

        {/* =====================================================
            SEARCH + FILTER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="flex flex-col gap-3 lg:flex-row">

            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs, location, department, skills..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Department */}
            <div className="relative lg:w-72">
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A7A78]" />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0A7A78] focus:bg-white focus:ring-2 focus:ring-[#0A7A78]/10"
              >
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                ▼
              </div>
            </div>

            {/* Clear */}
            {(search || department !== "All Departments") && (
              <button
                type="button"
                onClick={clearFilters}
                className="h-11 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Filter Status */}
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-[11px] text-slate-400">
              Showing{" "}
              <span className="font-bold text-slate-600">
                {filteredJobs.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-slate-600">
                {jobs.length}
              </span>{" "}
              positions
            </p>

            {department !== "All Departments" && (
              <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[10px] font-bold text-[#0A7A78]">
                {department}
              </span>
            )}
          </div>
        </motion.div>

        {/* =====================================================
            JOB LIST
        ===================================================== */}

        {/* ================= JOB GRID ================= */}
<AnimatePresence mode="popLayout">
  {filteredJobs.length > 0 ? (
    <motion.div
      key="job-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={stagger}
      className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {filteredJobs.map((job, index) => (
        <motion.div
          key={`${job.id}-${job.title}-${index}`}
          layout
          variants={fadeUp}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          whileHover={{
            y: -6,
          }}
          transition={{
            duration: 0.3,
          }}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#0A7A78]/30 hover:shadow-[0_15px_40px_rgba(15,23,42,0.09)]"
        >
          {/* Top Accent */}
          <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#0A7A78] transition-transform duration-300 group-hover:scale-x-100" />

          {/* Header */}
          <div className="flex items-start justify-between gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A7A78]/10 text-[#0A7A78] transition-all duration-300 group-hover:bg-[#0A7A78] group-hover:text-white">
              <Stethoscope className="h-5 w-5" />
            </div>

            <span className="rounded-full bg-[#0A7A78]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0A7A78]">
              {job.department_name}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 min-h-[52px] text-lg font-black leading-6 text-slate-950">
            {job.title}
          </h3>

          {/* Details */}
          <div className="mt-4 space-y-2.5">

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-4 w-4 shrink-0 text-[#0A7A78]" />
              <span>{job.location}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock3 className="h-4 w-4 shrink-0 text-[#0A7A78]" />
              <span>{job.employmentType}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BriefcaseBusiness className="h-4 w-4 shrink-0 text-[#0A7A78]" />
              <span>{job.experience}</span>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-500">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#0A7A78]" />
              <span className="line-clamp-2">
                {job.qualification}
              </span>
            </div>

          </div>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-xs leading-6 text-slate-500">
            {job.description}
          </p>

          {/* Skills */}
          <div className="mt-4 flex min-h-[52px] flex-wrap content-start gap-1.5">
            {job.skills?.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
              >
                {skill}
              </span>
            ))}

            {job.skills?.length > 4 && (
              <span className="rounded-md bg-[#0A7A78]/5 px-2 py-1 text-[10px] font-bold text-[#0A7A78]">
                +{job.skills.length - 4}
              </span>
            )}
          </div>

          {/* Bottom */}
          {/* <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">

            
            <button
                type="button"
                onClick={() => setApplicationDrawer(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#073b48] text-white font-semibold hover:bg-[#052f3a]"
              >
                Apply Now
                <FiArrowRight />
              </button>

             

          </div> */}
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">

            <span className="text-[10px] font-semibold text-slate-400">              {job.salary}             </span>

            <button
              //  onClick={() => alert(JSON.stringify(job))}
               onClick={() => {
                setApplicationDrawer(true)
                setSelectedJob(job)
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A7A78] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#075e63]"
            >
              View & Apply

              <ArrowRight className="h-3.5 w-3.5" />
            </button>

          </div>
        </motion.div>
      ))}
    </motion.div>
  ) : (
    <motion.div
      key="no-results"
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
        <Search className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-base font-black text-slate-900">
        No positions found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
        Try searching with a different keyword or select another department.
      </p>

      <button
        type="button"
        onClick={clearFilters}
        className="mt-5 rounded-xl bg-[#0A7A78] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#075e63]"
      >
        Reset Search
      </button>
    </motion.div>
  )}
</AnimatePresence>
      </div>
       {/* <ApplyApplicationForm
                open={applicationDrawer}
                onClose={() => setApplicationDrawer(false)}
                onSuccess={() => {
                  console.log("Application submitted");
                }}
              /> */}

              <ApplyApplicationForm
                open={applicationDrawer}
                onClose={handleCloseApplication}
                careerRoleId={selectedJob?.id}
                jobTitle={selectedJob?.title || ""}
                onSuccess={(response) => {
                  console.log(
                    "Application submitted successfully:",
                    response
                  );

                  setApplicationDrawer(false);
                  setSelectedJob(null);
                }}
              />
    </section>
  );
};

export default JobOpportunities

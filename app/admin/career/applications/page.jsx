
// "use client";

// import React, { useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   FiUsers,
//   FiSearch,
//   FiX,
//   FiFilter,
//   FiRotateCcw,
//   FiArrowUp,
//   FiArrowDown,
//   FiEye,
//   FiCheckCircle,
//   FiClock,
//   FiBriefcase,
//   FiMail,
//   FiPhone,
//   FiDownload,
// } from "react-icons/fi";
// import ApiService from "../../../src/services/Apiservices";

// const Applicationpage = () => {
//   const { data, error, isLoading } = useSWR(
//     "career-applications",
//     ApiService.get
//   );

//   const applications = data?.data || [];

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [sortField, setSortField] = useState("created_at");
//   const [sortDirection, setSortDirection] = useState("desc");

//   // =====================================================
//   // STATUS LIST
//   // =====================================================

//   const statuses = useMemo(() => {
//     return [
//       ...new Set(
//         applications
//           .map((item) => item.status)
//           .filter(Boolean)
//       ),
//     ].sort();
//   }, [applications]);

//   // =====================================================
//   // FILTER + SORT
//   // =====================================================

//   const filteredApplications = useMemo(() => {
//     let result = applications.filter((application) => {
//       const searchText = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchText ||
//         application.full_name
//           ?.toLowerCase()
//           .includes(searchText) ||
//         application.email
//           ?.toLowerCase()
//           .includes(searchText) ||
//         application.phone
//           ?.toLowerCase()
//           .includes(searchText) ||
//         application.current_position
//           ?.toLowerCase()
//           .includes(searchText) ||
//         application.experience
//           ?.toLowerCase()
//           .includes(searchText) ||
//         application.additional_information
//           ?.toLowerCase()
//           .includes(searchText) ||
//         String(application.career_role_id || "")
//           .toLowerCase()
//           .includes(searchText);

//       const matchesStatus =
//         statusFilter === "all" ||
//         application.status === statusFilter;

//       return matchesSearch && matchesStatus;
//     });

//     // SORT
//     result.sort((a, b) => {
//       let valueA = a[sortField];
//       let valueB = b[sortField];

//       if (sortField === "created_at") {
//         valueA = new Date(valueA).getTime();
//         valueB = new Date(valueB).getTime();
//       }

//       if (sortField === "career_role_id") {
//         valueA = Number(valueA || 0);
//         valueB = Number(valueB || 0);
//       }

//       if (typeof valueA === "number" && typeof valueB === "number") {
//         return sortDirection === "asc"
//           ? valueA - valueB
//           : valueB - valueA;
//       }

//       valueA = String(valueA || "").toLowerCase();
//       valueB = String(valueB || "").toLowerCase();

//       if (sortDirection === "asc") {
//         return valueA > valueB ? 1 : -1;
//       }

//       return valueA < valueB ? 1 : -1;
//     });

//     return result;
//   }, [
//     applications,
//     search,
//     statusFilter,
//     sortField,
//     sortDirection,
//   ]);

//   // =====================================================
//   // SORT HANDLER
//   // =====================================================

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection((prev) =>
//         prev === "asc" ? "desc" : "asc"
//       );
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   // =====================================================
//   // RESET
//   // =====================================================

//   const handleReset = () => {
//     setSearch("");
//     setStatusFilter("all");
//     setSortField("created_at");
//     setSortDirection("desc");
//   };

//   const hasFilters =
//     search || statusFilter !== "all";

//   // =====================================================
//   // STATUS BADGE
//   // =====================================================

//   const getStatusBadge = (status) => {
//     switch (status?.toLowerCase()) {
//       case "new":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-600">
//             <FiClock size={11} />
//             New
//           </span>
//         );

//       case "shortlisted":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
//             <FiCheckCircle size={11} />
//             Shortlisted
//           </span>
//         );

//       case "interview":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-600">
//             <FiClock size={11} />
//             Interview
//           </span>
//         );

//       case "selected":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
//             <FiCheckCircle size={11} />
//             Selected
//           </span>
//         );

//       case "rejected":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-500">
//             Rejected
//           </span>
//         );

//       default:
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
//             {status || "-"}
//           </span>
//         );
//     }
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (isLoading) {
//     return (
//       <div className="flex min-h-[400px] items-center justify-center">
//         <div className="text-center">
//           <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />

//           <p className="mt-3 text-xs text-slate-400">
//             Loading applications...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // =====================================================
//   // ERROR
//   // =====================================================

//   if (error) {
//     return (
//       <div className="p-6 text-center">
//         <p className="text-sm font-semibold text-red-500">
//           Failed to load applications
//         </p>
//       </div>
//     );
//   }

//   // =====================================================
//   // COUNTS
//   // =====================================================

//   const newCount = applications.filter(
//     (x) => x.status?.toLowerCase() === "new"
//   ).length;

//   const shortlistedCount = applications.filter(
//     (x) => x.status?.toLowerCase() === "shortlisted"
//   ).length;

//   const interviewCount = applications.filter(
//     (x) => x.status?.toLowerCase() === "interview"
//   ).length;

//   const selectedCount = applications.filter(
//     (x) => x.status?.toLowerCase() === "selected"
//   ).length;

//   return (
//     <div className="space-y-4 p-4 md:p-6">

//       {/* =================================================
//           TOP STATS
//       ================================================= */}

//       <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">

//         {/* TOTAL */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[11px] text-slate-400">
//                 Total Applications
//               </p>

//               <h3 className="mt-1 text-xl font-bold text-slate-800">
//                 {applications.length}
//               </h3>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <FiUsers size={17} />
//             </div>
//           </div>
//         </div>

//         {/* NEW */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[11px] text-slate-400">
//                 New
//               </p>

//               <h3 className="mt-1 text-xl font-bold text-amber-600">
//                 {newCount}
//               </h3>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//               <FiClock size={17} />
//             </div>
//           </div>
//         </div>

//         {/* SHORTLISTED */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[11px] text-slate-400">
//                 Shortlisted
//               </p>

//               <h3 className="mt-1 text-xl font-bold text-blue-600">
//                 {shortlistedCount}
//               </h3>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <FiCheckCircle size={17} />
//             </div>
//           </div>
//         </div>

//         {/* INTERVIEW */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[11px] text-slate-400">
//                 Interview
//               </p>

//               <h3 className="mt-1 text-xl font-bold text-purple-600">
//                 {interviewCount}
//               </h3>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
//               <FiClock size={17} />
//             </div>
//           </div>
//         </div>

//         {/* SELECTED */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[11px] text-slate-400">
//                 Selected
//               </p>

//               <h3 className="mt-1 text-xl font-bold text-emerald-600">
//                 {selectedCount}
//               </h3>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//               <FiCheckCircle size={17} />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* =================================================
//           APPLICATION TABLE
//       ================================================= */}

//       <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

//         {/* HEADER */}
//         <div className="border-b border-slate-200">

//           <div className="flex flex-col gap-3 px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">

//             <div className="flex items-center gap-3">

//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                 <FiUsers size={17} />
//               </div>

//               <div>
//                 <h2 className="text-sm font-semibold text-slate-800">
//                   Job Applications
//                 </h2>

//                 <p className="mt-0.5 text-[11px] text-slate-400">
//                   Manage received career applications
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* FILTER BAR */}
//           <div className="flex flex-col gap-2 bg-slate-50/70 px-4 py-3 md:flex-row md:items-center">

//             {/* SEARCH */}
//             <div className="relative flex-1">

//               <FiSearch
//                 size={14}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search applicant, email, phone, position..."
//                 className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-8 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                 >
//                   <FiX size={13} />
//                 </button>
//               )}

//             </div>

//             {/* STATUS */}
//             <div className="relative">

//               <FiFilter
//                 size={13}
//                 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value)
//                 }
//                 className="h-9 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-xs font-medium text-slate-600 outline-none focus:border-blue-400 md:w-[160px]"
//               >

//                 <option value="all">
//                   All Status
//                 </option>

//                 {statuses.map((status) => (
//                   <option key={status} value={status}>
//                     {status}
//                   </option>
//                 ))}

//               </select>

//             </div>

//             {/* SORT */}
//             <button
//               type="button"
//               onClick={() => handleSort("full_name")}
//               className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 hover:bg-slate-50"
//             >
//               {sortDirection === "asc" ? (
//                 <FiArrowUp size={13} />
//               ) : (
//                 <FiArrowDown size={13} />
//               )}

//               A-Z
//             </button>

//             {/* RESET */}
//             {hasFilters && (
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
//               >
//                 <FiRotateCcw size={13} />
//                 Reset
//               </button>
//             )}

//           </div>

//         </div>

//         {/* RESULT INFO */}
//         <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">

//           <span className="text-[11px] text-slate-500">
//             Showing{" "}
//             <span className="font-semibold text-slate-700">
//               {filteredApplications.length}
//             </span>{" "}
//             of{" "}
//             <span className="font-semibold text-slate-700">
//               {applications.length}
//             </span>{" "}
//             applications
//           </span>

//           {hasFilters && (
//             <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
//               Filter applied
//             </span>
//           )}

//         </div>

//         {/* TABLE */}
//         <div className="max-h-[600px] w-full overflow-auto">

//           <table className="w-full min-w-[1250px]">

//             <thead className="sticky top-0 z-20">

//               <tr className="border-b border-slate-200 bg-slate-50">

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Applicant
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Job Role ID
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Experience
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Current Position
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Additional Information
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Status
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Applied
//                 </th>

//                 <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Resume
//                 </th>

//                 <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                   Action
//                 </th>

//               </tr>

//             </thead>

//             <tbody className="divide-y divide-slate-100">

//               {filteredApplications.length > 0 ? (

//                 filteredApplications.map((application) => (

//                   <tr
//                     key={application.id}
//                     className="group transition hover:bg-slate-50/70"
//                   >

//                     {/* APPLICANT */}
//                     <td className="px-4 py-3">

//                       <div className="flex items-center gap-3">

//                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
//                           {application.full_name
//                             ?.charAt(0)
//                             ?.toUpperCase()}
//                         </div>

//                         <div className="min-w-0">

//                           <p className="truncate text-xs font-semibold text-slate-800">
//                             {application.full_name || "-"}
//                           </p>

//                           <div className="mt-1 flex flex-col gap-1 text-[10px] text-slate-400">

//                             <span className="flex items-center gap-1">
//                               <FiMail size={10} />
//                               {application.email || "-"}
//                             </span>

//                             <span className="flex items-center gap-1">
//                               <FiPhone size={10} />
//                               {application.phone || "-"}
//                             </span>

//                           </div>

//                         </div>

//                       </div>

//                     </td>

//                     {/* JOB ROLE ID */}
//                     <td className="px-4 py-3">

//                       <div className="flex items-center gap-2">

//                         <FiBriefcase
//                           size={13}
//                           className="text-blue-500"
//                         />

//                         <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-600">
//                           #{application.career_role_id || "-"}
//                         </span>

//                       </div>

//                     </td>

//                     {/* EXPERIENCE */}
//                     <td className="px-4 py-3">

//                       <span className="text-xs text-slate-600">
//                         {application.experience || "-"}
//                       </span>

//                     </td>

//                     {/* CURRENT POSITION */}
//                     <td className="px-4 py-3">

//                       <span className="inline-flex rounded-lg bg-indigo-50 px-2.5 py-1.5 text-[10px] font-semibold text-indigo-600">
//                         {application.current_position || "-"}
//                       </span>

//                     </td>

//                     {/* ADDITIONAL INFORMATION */}
//                     <td className="px-4 py-3">

//                       <p
//                         title={
//                           application.additional_information || ""
//                         }
//                         className="max-w-[300px] truncate text-xs text-slate-600"
//                       >
//                         {application.additional_information || "-"}
//                       </p>

//                     </td>

//                     {/* STATUS */}
//                     <td className="px-4 py-3">
//                       {getStatusBadge(application.status)}
//                     </td>

//                     {/* APPLIED DATE */}
//                     <td className="px-4 py-3">

//                       <span className="text-xs text-slate-500">
//                         {application.created_at
//                           ? new Date(
//                               application.created_at
//                             ).toLocaleDateString(
//                               "en-IN",
//                               {
//                                 day: "2-digit",
//                                 month: "short",
//                                 year: "numeric",
//                               }
//                             )
//                           : "-"}
//                       </span>

//                     </td>

//                     {/* RESUME */}
//                     <td className="px-4 py-3">

//                       {application.resume_path ? (
//                         <a
//                           href={application.resume_path}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
//                         >
//                           <FiDownload size={11} />
//                           Resume
//                         </a>
//                       ) : (
//                         <span className="text-xs text-slate-400">
//                           -
//                         </span>
//                       )}

//                     </td>

//                     {/* ACTION */}
//                     <td className="px-4 py-3">

//                       <div className="flex items-center justify-end gap-1">

//                         <button
//                           type="button"
//                           title="View Application"
//                           className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"
//                         >
//                           <FiEye size={13} />
//                         </button>

//                         <button
//                           type="button"
//                           title="Shortlist"
//                           className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
//                         >
//                           <FiCheckCircle size={13} />
//                         </button>

//                       </div>

//                     </td>

//                   </tr>

//                 ))

//               ) : (

//                 <tr>

//                   <td
//                     colSpan="9"
//                     className="px-4 py-16 text-center"
//                   >

//                     <div className="flex flex-col items-center">

//                       <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
//                         <FiSearch size={20} />
//                       </div>

//                       <h3 className="text-sm font-semibold text-slate-700">
//                         No applications found
//                       </h3>

//                       <p className="mt-1 text-[11px] text-slate-400">
//                         Try changing your search or filters.
//                       </p>

//                     </div>

//                   </td>

//                 </tr>

//               )}

//             </tbody>

//           </table>

//         </div>

//         {/* FOOTER */}
//         <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/50 px-4 py-3">

//           <p className="text-[11px] text-slate-500">
//             Total Applications:{" "}
//             <span className="font-semibold text-slate-700">
//               {applications.length}
//             </span>
//           </p>

//           <p className="text-[10px] text-slate-400">
//             Career Application Management
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Applicationpage;


// "use client";

// import React, { useMemo, useState } from "react";
// import useSWR from "swr";

// import {
//   FiUsers,
//   FiSearch,
//   FiX,
//   FiFilter,
//   FiRotateCcw,
//   FiArrowUp,
//   FiArrowDown,
//   FiEye,
//   FiCheckCircle,
//   FiClock,
//   FiBriefcase,
//   FiMail,
//   FiPhone,
//   FiDownload,
// } from "react-icons/fi";

// import ApiService from "../../../src/services/Apiservices";

// const ApplicationPage = () => {
//   const { data, error, isLoading } = useSWR(
//     "career-applications",
//     ApiService.get
//   );

//   const applications = data?.data || [];

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [sortField, setSortField] = useState("created_at");
//   const [sortDirection, setSortDirection] = useState("desc");

//   // ---------------------------------------------------------
//   // STATUS LIST
//   // ---------------------------------------------------------
//   const statuses = useMemo(() => {
//     const uniqueStatuses = [
//       ...new Set(
//         applications
//           .map((item) => item.status)
//           .filter(Boolean)
//       ),
//     ];

//     return uniqueStatuses.sort((a, b) =>
//       String(a).localeCompare(String(b))
//     );
//   }, [applications]);

//   // ---------------------------------------------------------
//   // FILTER + SEARCH + SORT
//   // ---------------------------------------------------------
//   const filteredApplications = useMemo(() => {
//     let result = [...applications];

//     const searchText = search.trim().toLowerCase();

//     // Search
//     if (searchText) {
//       result = result.filter((application) => {
//         return (
//           String(application.full_name || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.email || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.phone || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.current_position || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.experience || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.additional_information || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.job_title || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.department_name || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.career_role_id || "")
//             .toLowerCase()
//             .includes(searchText) ||

//           String(application.department_id || "")
//             .toLowerCase()
//             .includes(searchText)
//         );
//       });
//     }

//     // Status
//     if (statusFilter !== "all") {
//       result = result.filter(
//         (application) => application.status === statusFilter
//       );
//     }

//     // Sorting
//     result.sort((a, b) => {
//       let valueA = a?.[sortField];
//       let valueB = b?.[sortField];

//       if (sortField === "created_at" || sortField === "updated_at") {
//         valueA = new Date(valueA || 0).getTime();
//         valueB = new Date(valueB || 0).getTime();
//       } else if (
//         sortField === "id" ||
//         sortField === "career_role_id" ||
//         sortField === "department_id"
//       ) {
//         valueA = Number(valueA || 0);
//         valueB = Number(valueB || 0);
//       } else {
//         valueA = String(valueA || "").toLowerCase();
//         valueB = String(valueB || "").toLowerCase();
//       }

//       if (valueA < valueB) {
//         return sortDirection === "asc" ? -1 : 1;
//       }

//       if (valueA > valueB) {
//         return sortDirection === "asc" ? 1 : -1;
//       }

//       return 0;
//     });

//     return result;
//   }, [
//     applications,
//     search,
//     statusFilter,
//     sortField,
//     sortDirection,
//   ]);

//   // ---------------------------------------------------------
//   // SORT
//   // ---------------------------------------------------------
//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection((prev) =>
//         prev === "asc" ? "desc" : "asc"
//       );
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   // ---------------------------------------------------------
//   // RESET
//   // ---------------------------------------------------------
//   const handleReset = () => {
//     setSearch("");
//     setStatusFilter("all");
//     setSortField("created_at");
//     setSortDirection("desc");
//   };

//   // ---------------------------------------------------------
//   // STATUS BADGE
//   // ---------------------------------------------------------
//   const getStatusStyle = (status) => {
//     switch (String(status || "").toLowerCase()) {
//       case "new":
//         return "bg-blue-50 text-blue-700 border-blue-200";

//       case "shortlisted":
//         return "bg-cyan-50 text-cyan-700 border-cyan-200";

//       case "interview":
//         return "bg-purple-50 text-purple-700 border-purple-200";

//       case "selected":
//         return "bg-emerald-50 text-emerald-700 border-emerald-200";

//       case "rejected":
//         return "bg-red-50 text-red-700 border-red-200";

//       default:
//         return "bg-gray-50 text-gray-700 border-gray-200";
//     }
//   };

//   // ---------------------------------------------------------
//   // FORMAT DATE
//   // ---------------------------------------------------------
//   const formatDate = (date) => {
//     if (!date) return "—";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) {
//       return "—";
//     }

//     return parsedDate.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // ---------------------------------------------------------
//   // STATS
//   // ---------------------------------------------------------
//   const totalApplications = applications.length;

//   const newApplications = applications.filter(
//     (item) =>
//       String(item.status || "").toLowerCase() === "new"
//   ).length;

//   const shortlistedApplications = applications.filter(
//     (item) =>
//       String(item.status || "").toLowerCase() === "shortlisted"
//   ).length;

//   const interviewApplications = applications.filter(
//     (item) =>
//       String(item.status || "").toLowerCase() === "interview"
//   ).length;

//   const selectedApplications = applications.filter(
//     (item) =>
//       String(item.status || "").toLowerCase() === "selected"
//   ).length;

//   // ---------------------------------------------------------
//   // STAT CARDS
//   // ---------------------------------------------------------
//   const statCards = [
//     {
//       title: "Total Applications",
//       value: totalApplications,
//       icon: FiUsers,
//       iconStyle: "bg-blue-100 text-blue-600",
//       cardStyle:
//         "from-white via-blue-50/70 to-blue-100/80 border-blue-100 hover:border-blue-300",
//       watermark: "text-blue-600",
//     },
//     {
//       title: "New Applications",
//       value: newApplications,
//       icon: FiClock,
//       iconStyle: "bg-amber-100 text-amber-600",
//       cardStyle:
//         "from-white via-amber-50/70 to-amber-100/80 border-amber-100 hover:border-amber-300",
//       watermark: "text-amber-600",
//     },
//     {
//       title: "Shortlisted",
//       value: shortlistedApplications,
//       icon: FiBriefcase,
//       iconStyle: "bg-cyan-100 text-cyan-600",
//       cardStyle:
//         "from-white via-cyan-50/70 to-cyan-100/80 border-cyan-100 hover:border-cyan-300",
//       watermark: "text-cyan-600",
//     },
//     {
//       title: "Interview",
//       value: interviewApplications,
//       icon: FiClock,
//       iconStyle: "bg-purple-100 text-purple-600",
//       cardStyle:
//         "from-white via-purple-50/70 to-purple-100/80 border-purple-100 hover:border-purple-300",
//       watermark: "text-purple-600",
//     },
//     {
//       title: "Selected",
//       value: selectedApplications,
//       icon: FiCheckCircle,
//       iconStyle: "bg-emerald-100 text-emerald-600",
//       cardStyle:
//         "from-white via-emerald-50/70 to-emerald-100/80 border-emerald-100 hover:border-emerald-300",
//       watermark: "text-emerald-600",
//     },
//   ];

//   // ---------------------------------------------------------
//   // LOADING
//   // ---------------------------------------------------------
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="mb-6">
//             <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200" />
//             <div className="mt-2 h-4 w-96 animate-pulse rounded bg-gray-200" />
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-32 animate-pulse rounded-2xl bg-white shadow-sm"
//               />
//             ))}
//           </div>

//           <div className="mt-6 h-96 animate-pulse rounded-2xl bg-white shadow-sm" />
//         </div>
//       </div>
//     );
//   }

//   // ---------------------------------------------------------
//   // ERROR
//   // ---------------------------------------------------------
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
//             <h2 className="text-lg font-bold">
//               Unable to load applications
//             </h2>

//             <p className="mt-1 text-sm">
//               Something went wrong while fetching career
//               applications.
//             </p>

//             <button
//               onClick={() => window.location.reload()}
//               className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
//             >
//               <FiRotateCcw />
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ---------------------------------------------------------
//   // UI
//   // ---------------------------------------------------------
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
//       <div className="mx-auto max-w-[1600px]">

//         {/* =====================================================
//             HEADER
//         ====================================================== */}
//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//               Career Applications
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Manage and review candidate applications
//             </p>
//           </div>

//           <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
//             <FiUsers className="text-blue-600" />

//             <span className="text-sm font-semibold text-gray-700">
//               {applications.length} Applications
//             </span>
//           </div>
//         </div>

//         {/* =====================================================
//             STAT CARDS
//         ====================================================== */}
//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//           {statCards.map((card) => {
//             const Icon = card.icon;

//             return (
//               <div
//                 key={card.title}
//                 className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.cardStyle}`}
//               >
//                 {/* Watermark Icon */}
//                 <Icon
//                   className={`absolute -bottom-6 -right-5 h-28 w-28 rotate-[-12deg] opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-[0.13] ${card.watermark}`}
//                 />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between">
//                     <div
//                       className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconStyle}`}
//                     >
//                       <Icon size={21} />
//                     </div>
//                   </div>

//                   <div className="mt-5">
//                     <p className="text-sm font-medium text-gray-500">
//                       {card.title}
//                     </p>

//                     <h2 className="mt-1 text-3xl font-bold text-gray-900">
//                       {card.value}
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             FILTER SECTION
//         ====================================================== */}
//         <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

//             {/* Search */}
//             <div className="relative w-full xl:max-w-md">
//               <FiSearch
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={18}
//               />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search name, email, phone, job, department..."
//                 className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-10 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
//                 >
//                   <FiX size={17} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">

//               {/* Status */}
//               <div className="relative">
//                 <FiFilter
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={16}
//                 />

//                 <select
//                   value={statusFilter}
//                   onChange={(e) =>
//                     setStatusFilter(e.target.value)
//                   }
//                   className="h-11 min-w-[190px] appearance-none rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-8 text-sm font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                 >
//                   <option value="all">
//                     All Status
//                   </option>

//                   {statuses.map((status) => (
//                     <option
//                       key={status}
//                       value={status}
//                     >
//                       {status}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Sort */}
//               <button
//                 type="button"
//                 onClick={() => handleSort("full_name")}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
//               >
//                 {sortField === "full_name" &&
//                 sortDirection === "asc" ? (
//                   <FiArrowUp size={16} />
//                 ) : (
//                   <FiArrowDown size={16} />
//                 )}

//                 Name
//               </button>

//               {/* Reset */}
//               {(search || statusFilter !== "all") && (
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
//                 >
//                   <FiRotateCcw size={16} />
//                   Reset
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             TABLE
//         ====================================================== */}
//         <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

//           {/* Table Header */}
//           <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-bold text-gray-900">
//                 Applications List
//               </h2>

//               <p className="mt-0.5 text-xs text-gray-500">
//                 Showing {filteredApplications.length} of{" "}
//                 {applications.length} applications
//               </p>
//             </div>

//             <div className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
//               {filteredApplications.length} Results
//             </div>
//           </div>

//           {/* Scroll */}
//           <div className="max-h-[650px] overflow-auto">
//             <table className="min-w-[1500px] w-full border-collapse">

//               {/* =================================================
//                   THEAD
//               ================================================== */}
//               <thead className="sticky top-0 z-20 bg-gray-50">
//                 <tr className="border-b border-gray-200">

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Applicant
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Job Role
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Department
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Experience
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Current Position
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Additional Information
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Status
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Applied
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Resume
//                   </th>

//                   <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               {/* =================================================
//                   TBODY
//               ================================================== */}
//               <tbody className="divide-y divide-gray-100">

//                 {filteredApplications.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={10}
//                       className="px-6 py-16 text-center"
//                     >
//                       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
//                         <FiUsers
//                           size={24}
//                           className="text-gray-400"
//                         />
//                       </div>

//                       <h3 className="mt-4 text-base font-bold text-gray-800">
//                         No applications found
//                       </h3>

//                       <p className="mt-1 text-sm text-gray-500">
//                         Try changing your search or filter.
//                       </p>

//                       <button
//                         onClick={handleReset}
//                         className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
//                       >
//                         <FiRotateCcw />
//                         Reset Filters
//                       </button>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredApplications.map(
//                     (application, index) => (
//                       <tr
//                         key={application.id || index}
//                         className="group transition-colors duration-200 hover:bg-blue-50/40"
//                       >

//                         {/* =================================================
//                             APPLICANT
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <div className="flex items-center gap-3">

//                             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-sm">
//                               {String(
//                                 application.full_name || "A"
//                               )
//                                 .charAt(0)
//                                 .toUpperCase()}
//                             </div>

//                             <div className="min-w-0">
//                               <p className="truncate font-semibold text-gray-900">
//                                 {application.full_name || "—"}
//                               </p>

//                               <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
//                                 <FiMail size={12} />

//                                 <span className="max-w-[180px] truncate">
//                                   {application.email || "—"}
//                                 </span>
//                               </div>

//                               <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
//                                 <FiPhone size={12} />

//                                 <span>
//                                   {application.phone || "—"}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </td>

//                         {/* =================================================
//                             JOB ROLE
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <div className="flex items-center gap-3">

//                             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
//                               <FiBriefcase size={17} />
//                             </div>

//                             <div>
//                               <p className="font-semibold text-gray-800">
//                                 {application.job_title || "—"}
//                               </p>

//                               <p className="mt-0.5 text-xs text-gray-400">
//                                 Role ID #
//                                 {application.career_role_id || "—"}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* =================================================
//                             DEPARTMENT
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <div className="flex items-center gap-3">

//                             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
//                               <FiBriefcase size={17} />
//                             </div>

//                             <div>
//                               <p className="font-semibold text-gray-800">
//                                 {application.department_name ||
//                                   "—"}
//                               </p>

//                               <p className="mt-0.5 text-xs text-gray-400">
//                                 Dept ID #
//                                 {application.department_id ||
//                                   "—"}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* =================================================
//                             EXPERIENCE
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <span className="inline-flex rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
//                             {application.experience || "—"}
//                           </span>
//                         </td>

//                         {/* =================================================
//                             CURRENT POSITION
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <p className="max-w-[160px] truncate text-sm font-medium text-gray-700">
//                             {application.current_position ||
//                               "—"}
//                           </p>
//                         </td>

//                         {/* =================================================
//                             ADDITIONAL INFORMATION
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <p
//                             title={
//                               application.additional_information ||
//                               ""
//                             }
//                             className="max-w-[250px] truncate text-sm text-gray-500"
//                           >
//                             {application.additional_information ||
//                               "—"}
//                           </p>
//                         </td>

//                         {/* =================================================
//                             STATUS
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <span
//                             className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold ${getStatusStyle(
//                               application.status
//                             )}`}
//                           >
//                             <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current" />

//                             {application.status || "—"}
//                           </span>
//                         </td>

//                         {/* =================================================
//                             DATE
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           <div>
//                             <p className="text-sm font-semibold text-gray-700">
//                               {formatDate(
//                                 application.created_at
//                               )}
//                             </p>

//                             <p className="mt-0.5 text-xs text-gray-400">
//                               {application.created_at
//                                 ? new Date(
//                                     application.created_at
//                                   ).toLocaleTimeString(
//                                     "en-IN",
//                                     {
//                                       hour: "2-digit",
//                                       minute: "2-digit",
//                                     }
//                                   )
//                                 : ""}
//                             </p>
//                           </div>
//                         </td>

//                         {/* =================================================
//                             RESUME
//                         ================================================== */}
//                         <td className="px-5 py-4">
//                           {application.resume_path ? (
//                             <a
//                               href={
//                                 application.resume_path
//                               }
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
//                             >
//                               <FiDownload size={14} />

//                               Resume
//                             </a>
//                           ) : (
//                             <span className="text-xs text-gray-400">
//                               No Resume
//                             </span>
//                           )}
//                         </td>

//                         {/* =================================================
//                             ACTION
//                         ================================================== */}
//                         <td className="px-5 py-4 text-center">
//                           <button
//                             type="button"
//                             onClick={() => {
//                               console.log(
//                                 "View application:",
//                                 application
//                               );
//                             }}
//                             className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                             title="View Application"
//                           >
//                             <FiEye size={17} />
//                           </button>
//                         </td>
//                       </tr>
//                     )
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* =====================================================
//               FOOTER
//           ====================================================== */}
//           <div className="flex flex-col gap-2 border-t border-gray-100 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-sm text-gray-500">
//               Total Applications:
//               <span className="ml-1 font-bold text-gray-800">
//                 {applications.length}
//               </span>
//             </p>

//             <p className="text-xs text-gray-400">
//               Showing {filteredApplications.length} records
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationPage;



"use client";

import React, { useMemo, useState } from "react";
import useSWR from "swr";

import {
  FiUsers,
  FiSearch,
  FiX,
  FiFilter,
  FiRotateCcw,
  FiArrowUp,
  FiArrowDown,
  FiEye,
  FiCheckCircle,
  FiClock,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiDownload,
} from "react-icons/fi";

import ApiService from "../../../src/services/Apiservices";
import { motion } from "framer-motion";

const ApplicationPage = () => {
  const { data, error, isLoading } = useSWR(
    "career-applications",
    ApiService.get
  );

  const applications = data?.data || [];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");

  // =========================================================
  // STATUS LIST
  // =========================================================
  const statuses = useMemo(() => {
    const uniqueStatuses = [
      ...new Set(
        applications
          .map((item) => item.status)
          .filter(Boolean)
      ),
    ];

    return uniqueStatuses.sort((a, b) =>
      String(a).localeCompare(String(b))
    );
  }, [applications]);

  // =========================================================
  // FILTER + SEARCH + SORT
  // =========================================================
  const filteredApplications = useMemo(() => {
    let result = [...applications];

    const searchText = search.trim().toLowerCase();

    // SEARCH
    if (searchText) {
      result = result.filter((application) => {
        return (
          String(application.full_name || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.email || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.phone || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.current_position || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.experience || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.additional_information || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.job_title || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.department_name || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.career_role_id || "")
            .toLowerCase()
            .includes(searchText) ||

          String(application.department_id || "")
            .toLowerCase()
            .includes(searchText)
        );
      });
    }

    // STATUS FILTER
    if (statusFilter !== "all") {
      result = result.filter(
        (application) =>
          application.status === statusFilter
      );
    }

    // SORT
    result.sort((a, b) => {
      let valueA = a?.[sortField];
      let valueB = b?.[sortField];

      if (
        sortField === "created_at" ||
        sortField === "updated_at"
      ) {
        valueA = new Date(valueA || 0).getTime();
        valueB = new Date(valueB || 0).getTime();
      } else if (
        sortField === "id" ||
        sortField === "career_role_id" ||
        sortField === "department_id"
      ) {
        valueA = Number(valueA || 0);
        valueB = Number(valueB || 0);
      } else {
        valueA = String(valueA || "").toLowerCase();
        valueB = String(valueB || "").toLowerCase();
      }

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    return result;
  }, [
    applications,
    search,
    statusFilter,
    sortField,
    sortDirection,
  ]);

  // =========================================================
  // SORT
  // =========================================================
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // =========================================================
  // RESET
  // =========================================================
  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
    setSortField("created_at");
    setSortDirection("desc");
  };

  // =========================================================
  // STATUS STYLE
  // =========================================================
  const getStatusStyle = (status) => {
    switch (String(status || "").toLowerCase()) {
      case "new":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "shortlisted":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";

      case "interview":
        return "bg-purple-50 text-purple-700 border-purple-200";

      case "selected":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";

      case "rejected":
        return "bg-red-50 text-red-700 border-red-200";

      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  // =========================================================
  // DATE FORMAT
  // =========================================================
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================================
  // STATISTICS
  // =========================================================
  const totalApplications = applications.length;

  const newApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() === "new"
  ).length;

  const shortlistedApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "shortlisted"
  ).length;

  const interviewApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "interview"
  ).length;

  const selectedApplications = applications.filter(
    (item) =>
      String(item.status || "").toLowerCase() ===
      "selected"
  ).length;

  // =========================================================
  // STAT CARDS
  // =========================================================
  const statCards = [
    {
      title: "Total Applications",
      value: totalApplications,
      icon: FiUsers,
      iconStyle: "bg-blue-100 text-blue-600",
      cardStyle:
        "from-white via-blue-50/70 to-blue-100/80 border-blue-100 hover:border-blue-300",
      watermark: "text-blue-600",
    },
    {
      title: "New Applications",
      value: newApplications,
      icon: FiClock,
      iconStyle: "bg-amber-100 text-amber-600",
      cardStyle:
        "from-white via-amber-50/70 to-amber-100/80 border-amber-100 hover:border-amber-300",
      watermark: "text-amber-600",
    },
    {
      title: "Shortlisted",
      value: shortlistedApplications,
      icon: FiBriefcase,
      iconStyle: "bg-cyan-100 text-cyan-600",
      cardStyle:
        "from-white via-cyan-50/70 to-cyan-100/80 border-cyan-100 hover:border-cyan-300",
      watermark: "text-cyan-600",
    },
    {
      title: "Interview",
      value: interviewApplications,
      icon: FiClock,
      iconStyle: "bg-purple-100 text-purple-600",
      cardStyle:
        "from-white via-purple-50/70 to-purple-100/80 border-purple-100 hover:border-purple-300",
      watermark: "text-purple-600",
    },
    {
      title: "Selected",
      value: selectedApplications,
      icon: FiCheckCircle,
      iconStyle: "bg-emerald-100 text-emerald-600",
      cardStyle:
        "from-white via-emerald-50/70 to-emerald-100/80 border-emerald-100 hover:border-emerald-300",
      watermark: "text-emerald-600",
    },
  ];

  // =========================================================
  // LOADING
  // =========================================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-5">
            <div className="h-6 w-52 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-3 w-72 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-28 animate-pulse rounded-xl bg-white shadow-sm"
                />
              )
            )}
          </div>

          <div className="mt-5 h-96 animate-pulse rounded-xl bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  // =========================================================
  // ERROR
  // =========================================================
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="mx-auto max-w-[1600px]">

          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">

            <h2 className="text-base font-bold">
              Unable to load applications
            </h2>

            <p className="mt-1 text-xs">
              Something went wrong while fetching career
              applications.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
            >
              <FiRotateCcw size={14} />
              Try Again
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================
  // UI
  // =========================================================
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4">

      <div className="mx-auto max-w-[1600px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Career Applications
            </h1>

            <p className="mt-0.5 text-xs text-gray-500">
              Manage and review candidate applications
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">

            <FiUsers
              size={15}
              className="text-blue-600"
            />

            <span className="text-xs font-semibold text-gray-700">
              {applications.length} Applications
            </span>

          </div>
        </div>

        {/* =====================================================
            STAT CARDS
        ====================================================== */}
       <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
  {statCards.map((card, index) => {
    const Icon = card.icon;

    return (
      <motion.div
        key={card.title}
        initial={{
          opacity: 0,
          y: 15,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          delay: index * 0.07,
          ease: "easeOut",
        }}
        whileHover={{
          y: -3,
          scale: 1.015,
          transition: {
            duration: 0.2,
          },
        }}
        className={`group relative overflow-hidden rounded-lg border bg-gradient-to-br p-3 shadow-sm transition-shadow duration-300 hover:shadow-md ${card.cardStyle}`}
      >
        {/* WATERMARK */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -15,
          }}
          animate={{
            opacity: 0.08,
            scale: 1,
            rotate: -10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            opacity: 0.13,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`absolute -bottom-4 -right-3 ${card.watermark}`}
        >
          <Icon size={58} />
        </motion.div>

        <div className="relative z-10 flex items-center gap-2.5">
          
          {/* ICON */}
          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.iconStyle}`}
          >
            <Icon size={15} />
          </motion.div>

          {/* CONTENT */}
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium text-gray-500">
              {card.title}
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.07 + 0.15,
              }}
              className="mt-0.5 text-lg font-bold leading-none text-gray-900"
            >
              {card.value}
            </motion.h2>
          </div>

        </div>
      </motion.div>
    );
  })}
</div>

        {/* =====================================================
            FILTER
        ====================================================== */}
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">

          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

            {/* SEARCH */}
            <div className="relative w-full xl:max-w-md">

              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={15}
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search name, email, phone, job, department..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-9 text-xs text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <FiX size={15} />
                </button>
              )}

            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              {/* STATUS */}
              <div className="relative">

                <FiFilter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                  className="h-10 min-w-[170px] appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-7 text-xs font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >

                  <option value="all">
                    All Status
                  </option>

                  {statuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}

                </select>

              </div>

              {/* SORT */}
              <button
                type="button"
                onClick={() =>
                  handleSort("full_name")
                }
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >

                {sortField === "full_name" &&
                sortDirection === "asc" ? (
                  <FiArrowUp size={14} />
                ) : (
                  <FiArrowDown size={14} />
                )}

                Name
              </button>

              {/* RESET */}
              {(search || statusFilter !== "all") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <FiRotateCcw size={14} />
                  Reset
                </button>
              )}

            </div>
          </div>
        </div>

        {/* =====================================================
            TABLE
        ====================================================== */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          {/* TABLE HEADER */}
          <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-sm font-bold text-gray-900">
                Applications List
              </h2>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Showing {filteredApplications.length} of{" "}
                {applications.length} applications
              </p>

            </div>

            <div className="w-fit rounded-md bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-600">
              {filteredApplications.length} Results
            </div>

          </div>

          {/* TABLE SCROLL */}
          <div className="max-h-[650px] overflow-auto">

            <table className="min-w-[1350px] w-full border-collapse">

              {/* =================================================
                  THEAD
              ================================================== */}
              <thead className="sticky top-0 z-20 bg-gray-50">

                <tr className="border-b border-gray-200">

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Applicant
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Job Role
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Department
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Experience
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Current Position
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Additional Information
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Applied
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Resume
                  </th>

                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Action
                  </th>

                </tr>
              </thead>

              {/* =================================================
                  TBODY
              ================================================== */}
              <tbody className="divide-y divide-gray-100">

                {filteredApplications.length === 0 ? (

                  <tr>

                    <td
                      colSpan={10}
                      className="px-5 py-12 text-center"
                    >

                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                        <FiUsers
                          size={20}
                          className="text-gray-400"
                        />
                      </div>

                      <h3 className="mt-3 text-sm font-bold text-gray-800">
                        No applications found
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Try changing your search or filter.
                      </p>

                      <button
                        onClick={handleReset}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                      >
                        <FiRotateCcw size={13} />
                        Reset Filters
                      </button>

                    </td>

                  </tr>

                ) : (

                  filteredApplications.map(
                    (application, index) => (

                      <tr
                        key={
                          application.id || index
                        }
                        className="group transition-colors duration-200 hover:bg-blue-50/40"
                      >

                        {/* =================================================
                            APPLICANT
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-sm">
                              {String(
                                application.full_name ||
                                  "A"
                              )
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div className="min-w-0">

                              <p className="truncate text-sm font-semibold text-gray-900">
                                {application.full_name ||
                                  "—"}
                              </p>

                              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-500">

                                <FiMail size={10} />

                                <span className="max-w-[170px] truncate">
                                  {application.email ||
                                    "—"}
                                </span>

                              </div>

                              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-500">

                                <FiPhone size={10} />

                                <span>
                                  {application.phone ||
                                    "—"}
                                </span>

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            JOB ROLE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                              <FiBriefcase size={15} />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-gray-800">
                                {application.job_title ||
                                  "—"}
                              </p>

                              <p className="mt-0.5 text-[10px] text-gray-400">
                                Role ID #
                                {application.career_role_id ||
                                  "—"}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            DEPARTMENT
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                              <FiBriefcase size={15} />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-gray-800">
                                {application.department_name ||
                                  "—"}
                              </p>

                              <p className="mt-0.5 text-[10px] text-gray-400">
                                Dept ID #
                                {application.department_id ||
                                  "—"}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* =================================================
                            EXPERIENCE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                            {application.experience ||
                              "—"}
                          </span>

                        </td>

                        {/* =================================================
                            CURRENT POSITION
                        ================================================== */}
                        <td className="px-4 py-3">

                          <p className="max-w-[140px] truncate text-xs font-medium text-gray-700">
                            {application.current_position ||
                              "—"}
                          </p>

                        </td>

                        {/* =================================================
                            ADDITIONAL INFORMATION
                        ================================================== */}
                        <td className="px-4 py-3">

                          <p
                            title={
                              application.additional_information ||
                              ""
                            }
                            className="max-w-[220px] truncate text-xs text-gray-500"
                          >
                            {application.additional_information ||
                              "—"}
                          </p>

                        </td>

                        {/* =================================================
                            STATUS
                        ================================================== */}
                        <td className="px-4 py-3">

                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
                              application.status
                            )}`}
                          >

                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />

                            {application.status ||
                              "—"}

                          </span>

                        </td>

                        {/* =================================================
                            DATE
                        ================================================== */}
                        <td className="px-4 py-3">

                          <div>

                            <p className="text-xs font-semibold text-gray-700">
                              {formatDate(
                                application.created_at
                              )}
                            </p>

                            <p className="mt-0.5 text-[10px] text-gray-400">

                              {application.created_at
                                ? new Date(
                                    application.created_at
                                  ).toLocaleTimeString(
                                    "en-IN",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )
                                : ""}

                            </p>

                          </div>

                        </td>

                        {/* =================================================
                            RESUME
                        ================================================== */}
                        <td className="px-4 py-3">

                          {application.resume_path ? (

                            <a
                              href={
                                application.resume_path
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-[10px] font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                              <FiDownload size={12} />
                              Resume
                            </a>

                          ) : (

                            <span className="text-[10px] text-gray-400">
                              No Resume
                            </span>

                          )}

                        </td>

                        {/* =================================================
                            ACTION
                        ================================================== */}
                        <td className="px-4 py-3 text-center">

                          <button
                            type="button"
                            onClick={() => {
                              console.log(
                                "View application:",
                                application
                              );
                            }}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            title="View Application"
                          >
                            <FiEye size={14} />
                          </button>

                        </td>

                      </tr>
                    )
                  )

                )}

              </tbody>

            </table>

          </div>

          {/* =====================================================
              FOOTER
          ====================================================== */}
          <div className="flex flex-col gap-1.5 border-t border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-gray-500">

              Total Applications:

              <span className="ml-1 font-bold text-gray-800">
                {applications.length}
              </span>

            </p>

            <p className="text-[10px] text-gray-400">
              Showing {filteredApplications.length} records
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
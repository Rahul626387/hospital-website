// "use client";

// import React, { useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   Award,
//   Search,
//   Filter,
//   RotateCcw,
//   ArrowUp,
//   ArrowDown,
//   Eye,
//   Pencil,
//   CalendarDays,
//   Trophy,
//   Building2,
//   Image as ImageIcon,
//   ChevronRight,
//   AlertCircle,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import ApiService from "../../src/services/Apiservices";

// const Awardspage = () => {
//   const { data, error, isLoading } = useSWR("awards", ApiService.get);

//   const awards = Array.isArray(data?.data)
//     ? data.data
//     : Array.isArray(data?.data?.data)
//     ? data.data.data
//     : [];

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [categoryFilter, setCategoryFilter] = useState("all");
//   const [yearFilter, setYearFilter] = useState("all");
//   const [sortField, setSortField] = useState("year");
//   const [sortDirection, setSortDirection] = useState("desc");

//   const formatDate = (date) => {
//     if (!date) return "—";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) return "—";

//     return parsedDate.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   const getStatus = (award) => {
//     const status = String(award.status || "Published").toLowerCase();

//     if (status === "published") return "Published";
//     if (status === "draft") return "Draft";

//     return status.charAt(0).toUpperCase() + status.slice(1);
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "Published":
//         return "border-emerald-200 bg-emerald-50 text-emerald-700";
//       case "Draft":
//         return "border-amber-200 bg-amber-50 text-amber-700";
//       default:
//         return "border-slate-200 bg-slate-50 text-slate-600";
//     }
//   };

//   const categories = useMemo(
//     () =>
//       [...new Set(awards.map((award) => award.category).filter(Boolean))].sort(),
//     [awards]
//   );

//   const years = useMemo(
//     () =>
//       [...new Set(awards.map((award) => String(award.year || "")).filter(Boolean))]
//         .sort((a, b) => Number(b) - Number(a)),
//     [awards]
//   );

//   const filteredAwards = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     const result = awards.filter((award) => {
//       const matchesSearch = [
//         award.title,
//         award.organization,
//         award.category,
//         award.year,
//         award.description,
//       ].some((value) => String(value || "").toLowerCase().includes(query));

//       const matchesStatus =
//         statusFilter === "all" || getStatus(award) === statusFilter;

//       const matchesCategory =
//         categoryFilter === "all" || award.category === categoryFilter;

//       const matchesYear =
//         yearFilter === "all" || String(award.year || "") === yearFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesCategory &&
//         matchesYear
//       );
//     });

//     result.sort((a, b) => {
//       let valueA = a?.[sortField] ?? "";
//       let valueB = b?.[sortField] ?? "";

//       if (sortField === "year") {
//         valueA = Number(valueA) || 0;
//         valueB = Number(valueB) || 0;
//       } else {
//         valueA = String(valueA).toLowerCase();
//         valueB = String(valueB).toLowerCase();
//       }

//       if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
//       if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;

//       return 0;
//     });

//     return result;
//   }, [
//     awards,
//     search,
//     statusFilter,
//     categoryFilter,
//     yearFilter,
//     sortField,
//     sortDirection,
//   ]);

//   const publishedCount = awards.filter(
//     (award) => getStatus(award) === "Published"
//   ).length;

//   const draftCount = awards.filter(
//     (award) => getStatus(award) === "Draft"
//   ).length;

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   const resetFilters = () => {
//     setSearch("");
//     setStatusFilter("all");
//     setCategoryFilter("all");
//     setYearFilter("all");
//     setSortField("year");
//     setSortDirection("desc");
//   };

//   const stats = [
//     {
//       title: "Total Awards",
//       value: awards.length,
//       icon: Trophy,
//       iconStyle: "bg-blue-100 text-blue-600",
//       cardStyle: "from-white to-blue-50 border-blue-100",
//     },
//     {
//       title: "Published Awards",
//       value: publishedCount,
//       icon: Award,
//       iconStyle: "bg-emerald-100 text-emerald-600",
//       cardStyle: "from-white to-emerald-50 border-emerald-100",
//     },
//     {
//       title: "Draft Awards",
//       value: draftCount,
//       icon: Pencil,
//       iconStyle: "bg-amber-100 text-amber-600",
//       cardStyle: "from-white to-amber-50 border-amber-100",
//     },
//     {
//       title: "Award Categories",
//       value: categories.length,
//       icon: Building2,
//       iconStyle: "bg-purple-100 text-purple-600",
//       cardStyle: "from-white to-purple-50 border-purple-100",
//     },
//   ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="mb-5 h-7 w-56 animate-pulse rounded bg-slate-200" />
//           <div className="mb-6 h-4 w-80 animate-pulse rounded bg-slate-200" />

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {Array.from({ length: 4 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-28 animate-pulse rounded-2xl bg-white shadow-sm"
//               />
//             ))}
//           </div>

//           <div className="mt-6 h-96 animate-pulse rounded-2xl bg-white shadow-sm" />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
//         <div className="mx-auto max-w-[1600px] rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
//           <div className="flex items-center gap-2 font-semibold">
//             <AlertCircle size={20} />
//             Unable to load awards
//           </div>

//           <p className="mt-2 text-sm">
//             Please check your awards API endpoint and try again.
//           </p>

//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50/80 p-3 text-slate-800 sm:p-5 lg:p-2 ">
//       <div className="mx-auto max-w-[1600px] space-y-5">

//         {/* HEADER */}
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
//                 <Award size={23} />
//               </div>

//               <div>
//                 <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
//                   Awards Management
//                 </h1>
//                 <p className="mt-1 text-xs text-slate-500 sm:text-sm">
//                   Manage hospital achievements, awards and recognitions.
//                 </p>
//               </div>
//             </div>

//           <div className="flex items-center gap-2 self-start sm:self-auto">
//             <div className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 shadow-sm">
//               <Trophy size={15} className="text-teal-600" />
//               <span className="text-xs font-semibold text-slate-700">
//                 {awards.length} Awards
//               </span>
//             </div>

//             <button
//               type="button"
//               onClick={() => {
//                 window.location.href = "/admin/awards/add";
//               }}
//               className="flex h-10 items-center gap-2 rounded-lg bg-teal-700 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800"
//             >
//               <Award size={15} />
//               Add Award
//             </button>
//           </div>
//         </div>

//         {/* STATISTICS CARDS */}
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;

//             return (
//               <motion.div
//                 key={stat.title}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.25, delay: index * 0.05 }}
//                 className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${stat.cardStyle}`}
//               >
//                 <Icon
//                   size={65}
//                   className="absolute -bottom-3 -right-3 text-slate-500 opacity-[0.06]"
//                 />

//                 <div className="relative flex items-center gap-3">
//                   <div
//                     className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${stat.iconStyle}`}
//                   >
//                     <Icon size={19} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-medium text-slate-500">
//                       {stat.title}
//                     </p>
//                     <p className="mt-1 text-2xl font-bold text-slate-900">
//                       {stat.value}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FILTER SECTION */}
//         <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
//             <div>
//               <h2 className="text-sm font-bold text-slate-900">
//                 Award Directory
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Search, filter and organize hospital awards.
//               </p>
//             </div>

//             <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
//               <div className="relative sm:w-64">
//                 <Search
//                   size={16}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search awards..."
//                   className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100"
//                 />
//               </div>

//               <div className="relative">
//                 <Filter
//                   size={14}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-7 text-xs outline-none focus:border-teal-600 sm:w-36"
//                 >
//                   <option value="all">All Status</option>
//                   <option value="Published">Published</option>
//                   <option value="Draft">Draft</option>
//                 </select>
//               </div>

//               <select
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-teal-600 sm:w-48"
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 value={yearFilter}
//                 onChange={(e) => setYearFilter(e.target.value)}
//                 className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-teal-600 sm:w-32"
//               >
//                 <option value="all">All Years</option>
//                 {years.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 type="button"
//                 onClick={resetFilters}
//                 className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
//               >
//                 <RotateCcw size={14} />
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* AWARDS TABLE */}
//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="text-sm font-bold text-slate-900">
//                 Awards List
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Showing {filteredAwards.length} of {awards.length} awards
//               </p>
//             </div>

//             <span className="w-fit rounded-md bg-teal-50 px-3 py-1.5 text-[11px] font-semibold text-teal-700">
//               {filteredAwards.length} Results
//             </span>
//           </div>

//           <div className="max-h-[650px] overflow-auto">
//             <table className="w-full min-w-[1000px] border-collapse">
//               <thead className="sticky top-0 z-20 bg-slate-50">
//                 <tr className="border-b border-slate-200">
//                   <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Award Details
//                   </th>

//                   <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Organization
//                   </th>

//                   <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Category
//                   </th>

//                   <th className="px-4 py-3 text-left">
//                     <button
//                       onClick={() => handleSort("year")}
//                       className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-teal-700"
//                     >
//                       Year
//                       {sortField === "year" && sortDirection === "asc" ? (
//                         <ArrowUp size={13} />
//                       ) : (
//                         <ArrowDown size={13} />
//                       )}
//                     </button>
//                   </th>

//                   <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Award Date
//                   </th>

//                   <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Status
//                   </th>

//                   <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-100">
//                 {filteredAwards.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="px-5 py-16 text-center">
//                       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                         <Award size={24} />
//                       </div>

//                       <h3 className="mt-3 text-sm font-bold text-slate-800">
//                         No awards found
//                       </h3>

//                       <p className="mt-1 text-xs text-slate-500">
//                         Try changing your search or filters.
//                       </p>

//                       <button
//                         type="button"
//                         onClick={resetFilters}
//                         className="mt-4 rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-800"
//                       >
//                         Reset Filters
//                       </button>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredAwards.map((award, index) => (
//                     <motion.tr
//                       key={award.id ?? index}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{
//                         duration: 0.2,
//                         delay: Math.min(index * 0.02, 0.2),
//                       }}
//                       className="transition-colors hover:bg-teal-50/30"
//                     >
//                       <td className="px-4 py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
//                             {award.image || award.image_url ? (
//                               <img
//                                 src={award.image || award.image_url}
//                                 alt={award.title || "Award"}
//                                 className="h-full w-full object-cover"
//                               />
//                             ) : (
//                               <ImageIcon
//                                 size={20}
//                                 className="text-slate-400"
//                               />
//                             )}
//                           </div>

//                           <div className="max-w-[240px]">
//                             <p className="truncate text-xs font-bold text-slate-900">
//                               {award.title || "Untitled Award"}
//                             </p>
//                             {/* <p className="mt-1 line-clamp-2 text-[10px] text-slate-500">
//                               {award.description || "No description available"}
//                             </p>
//                             <p className="mt-1 text-[10px] text-slate-400">
//                               ID: #{award.id ?? "—"}
//                             </p> */}
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-4 py-3">
//                         <div className="flex max-w-[210px] items-start gap-2">
//                           <Building2
//                             size={14}
//                             className="mt-0.5 shrink-0 text-slate-400"
//                           />
//                           <span className="text-xs text-slate-600">
//                             {award.organization || "—"}
//                           </span>
//                         </div>
//                       </td>

//                       <td className="px-4 py-3">
//                         <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
//                           {award.category || "Other"}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3">
//                         <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//                           <CalendarDays
//                             size={14}
//                             className="text-teal-600"
//                           />
//                           {award.year || "—"}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3">
//                         <span className="text-xs font-medium text-slate-600">
//                           {formatDate(award.date)}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3">
//                         <span
//                           className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
//                             getStatus(award)
//                           )}`}
//                         >
//                           <span className="h-1.5 w-1.5 rounded-full bg-current" />
//                           {getStatus(award)}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3">
//                         <div className="flex justify-end gap-1.5">
//                           <button
//                             type="button"
//                             title="View award"
//                             onClick={() => {
//                               window.location.href = `/admin/awards/${award.id}`;
//                             }}
//                             className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                           >
//                             <Eye size={14} />
//                           </button>

//                           <button
//                             type="button"
//                             title="Edit award"
//                             onClick={() => {
//                               window.location.href = `/admin/awards/edit/${award.id}`;
//                             }}
//                             className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
//                           >
//                             <Pencil size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col gap-1.5 border-t border-slate-100 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-slate-500">
//               Total Awards:{" "}
//               <span className="font-bold text-slate-800">
//                 {awards.length}
//               </span>
//             </p>

//             <p className="text-[10px] text-slate-400">
//               Showing {filteredAwards.length} records
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Awardspage;



"use client";

import React, { useMemo, useState } from "react";
import useSWR from "swr";
import {
  Award,
  Search,
  Filter,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Eye,
  Pencil,
  CalendarDays,
  Trophy,
  Building2,
  Image as ImageIcon,
  AlertCircle,
  X,
  LoaderCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import ApiService from "../../src/services/Apiservices";
import ModalComponent from "../../components/admin/ModelComponent";
import AwardForm from "../../components/admin/AwardForm";
import AuthService from "../../src/services/Authservices";

const Awardspage = () => {
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR("awards", ApiService.get);

  const awards = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.data?.data)
    ? data.data.data
    : [];

  const userId = AuthService.getUserId();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [sortField, setSortField] = useState("year");
  const [sortDirection, setSortDirection] = useState("desc");

  // Award modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [saving, setSaving] = useState(false);
  const [pageError, setPageError] = useState("");

  // Open Add Award modal
  const openAddModal = () => {
    setSelectedAward(null);
    setPageError("");
    setModalOpen(true);
  };

  // Open Edit Award modal
  const openEditModal = (award) => {
    setSelectedAward(award);
    setPageError("");
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    if (saving) return;

    setModalOpen(false);
    setSelectedAward(null);
    setPageError("");
  };

  // Save new award or update existing award
  const handleSave = async (formData) => {
    try {
      setSaving(true);
      setPageError("");

      let response;

      if (selectedAward?.id) {
        // Update award
        response = await ApiService.put(
          `/awards/${selectedAward.id}`,
          formData
        );
      } else {
        // Create award
        response = await ApiService.post("/awards", formData);
      }

      const result = response?.data ?? response;

      if (
        result?.success === false ||
        result?.status === false
      ) {
        throw new Error(
          result?.message || "Unable to save award."
        );
      }

      // Close modal and refresh list
      setModalOpen(false);
      setSelectedAward(null);
      setPageError("");

      await mutate();
    } catch (err) {
      setPageError(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong while saving the award."
      );
    } finally {
      setSaving(false);
    }
  };

  // Format date
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "—";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Status helpers
  const getStatus = (award) => {
    const status = String(
      award.status || "Published"
    ).toLowerCase();

    if (status === "published" || status === "1") {
      return "Published";
    }

    if (status === "draft" || status === "0") {
      return "Draft";
    }

    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Published":
        return "border-emerald-200 bg-emerald-50 text-emerald-700";

      case "Draft":
        return "border-amber-200 bg-amber-50 text-amber-700";

      default:
        return "border-slate-200 bg-slate-50 text-slate-600";
    }
  };

  // Dynamic categories
  const categories = useMemo(
    () =>
      [
        ...new Set(
          awards
            .map((award) => award.category)
            .filter(Boolean)
        ),
      ].sort(),
    [awards]
  );

  // Dynamic years
  const years = useMemo(
    () =>
      [
        ...new Set(
          awards
            .map((award) => String(award.year || ""))
            .filter(Boolean)
        ),
      ].sort((a, b) => Number(b) - Number(a)),
    [awards]
  );

  // Search, filters and sorting
  const filteredAwards = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = awards.filter((award) => {
      const matchesSearch = [
        award.title,
        award.organization,
        award.category,
        award.year,
        award.description,
      ].some((value) =>
        String(value || "").toLowerCase().includes(query)
      );

      const matchesStatus =
        statusFilter === "all" ||
        getStatus(award) === statusFilter;

      const matchesCategory =
        categoryFilter === "all" ||
        award.category === categoryFilter;

      const matchesYear =
        yearFilter === "all" ||
        String(award.year || "") === yearFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesYear
      );
    });

    result.sort((a, b) => {
      let valueA = a?.[sortField] ?? "";
      let valueB = b?.[sortField] ?? "";

      if (sortField === "year") {
        valueA = Number(valueA) || 0;
        valueB = Number(valueB) || 0;
      } else {
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
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
    awards,
    search,
    statusFilter,
    categoryFilter,
    yearFilter,
    sortField,
    sortDirection,
  ]);

  // Statistics
  const publishedCount = awards.filter(
    (award) => getStatus(award) === "Published"
  ).length;

  const draftCount = awards.filter(
    (award) => getStatus(award) === "Draft"
  ).length;

  // Sort handler
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

  // Reset filters
  const resetFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setCategoryFilter("all");
    setYearFilter("all");
    setSortField("year");
    setSortDirection("desc");
  };

  const stats = [
    {
      title: "Total Awards",
      value: awards.length,
      icon: Trophy,
      iconStyle: "bg-blue-100 text-blue-600",
      cardStyle: "from-white to-blue-50 border-blue-100",
    },
    {
      title: "Published Awards",
      value: publishedCount,
      icon: Award,
      iconStyle: "bg-emerald-100 text-emerald-600",
      cardStyle: "from-white to-emerald-50 border-emerald-100",
    },
    {
      title: "Draft Awards",
      value: draftCount,
      icon: Pencil,
      iconStyle: "bg-amber-100 text-amber-600",
      cardStyle: "from-white to-amber-50 border-amber-100",
    },
    {
      title: "Award Categories",
      value: categories.length,
      icon: Building2,
      iconStyle: "bg-purple-100 text-purple-600",
      cardStyle: "from-white to-purple-50 border-purple-100",
    },
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-5 h-7 w-56 animate-pulse rounded bg-slate-200" />
          <div className="mb-6 h-4 w-80 animate-pulse rounded bg-slate-200" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-28 animate-pulse rounded-2xl bg-white shadow-sm"
              />
            ))}
          </div>

          <div className="mt-6 h-96 animate-pulse rounded-2xl bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  // API error state
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
        <div className="mx-auto max-w-[1600px] rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle size={20} />
            Unable to load awards
          </div>

          <p className="mt-2 text-sm">
            Please check your awards API endpoint and try again.
          </p>

          <button
            type="button"
            onClick={() => mutate()}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/80 p-3 text-slate-800 sm:p-5 lg:p-2">
      <div className="mx-auto max-w-[1600px] space-y-5">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <Award size={23} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Awards Management
              </h1>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Manage hospital achievements, awards and recognitions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 shadow-sm">
              <Trophy size={15} className="text-teal-600" />

              <span className="text-xs font-semibold text-slate-700">
                {awards.length} Awards
              </span>
            </div>

            <button
              type="button"
              onClick={openAddModal}
              className="flex h-10 items-center gap-2 rounded-lg bg-teal-700 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800"
            >
              <Award size={15} />
              Add Award
            </button>
          </div>
        </div>

        {/* STATISTICS CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                }}
                className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${stat.cardStyle}`}
              >
                <Icon
                  size={65}
                  className="absolute -bottom-3 -right-3 text-slate-500 opacity-[0.06]"
                />

                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${stat.iconStyle}`}
                  >
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FILTER SECTION */}
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Award Directory
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Search, filter and organize hospital awards.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {/* Search */}
              <div className="relative sm:w-64">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search awards..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Status filter */}
              <div className="relative">
                <Filter
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-7 text-xs outline-none focus:border-teal-600 sm:w-36"
                >
                  <option value="all">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              {/* Category filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-teal-600 sm:w-48"
              >
                <option value="all">All Categories</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Year filter */}
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-teal-600 sm:w-32"
              >
                <option value="all">All Years</option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Reset filters */}
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* AWARDS TABLE */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-2 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Awards List
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Showing {filteredAwards.length} of {awards.length} awards
              </p>
            </div>

            <span className="w-fit rounded-md bg-teal-50 px-3 py-1.5 text-[11px] font-semibold text-teal-700">
              {filteredAwards.length} Results
            </span>
          </div>

          <div className="max-h-[650px] overflow-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead className="sticky top-0 z-20 bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Award Details
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Organization
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Category
                  </th>

                  <th className="px-4 py-3 text-left">
                    <button
                      type="button"
                      onClick={() => handleSort("year")}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-teal-700"
                    >
                      Year

                      {sortField === "year" &&
                      sortDirection === "asc" ? (
                        <ArrowUp size={13} />
                      ) : (
                        <ArrowDown size={13} />
                      )}
                    </button>
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Award Date
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredAwards.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-16 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                        <Award size={24} />
                      </div>

                      <h3 className="mt-3 text-sm font-bold text-slate-800">
                        No awards found
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Try changing your search or filters.
                      </p>

                      <button
                        type="button"
                        onClick={resetFilters}
                        className="mt-4 rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-800"
                      >
                        Reset Filters
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredAwards.map((award, index) => (
                    <motion.tr
                      key={award.id ?? index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: Math.min(index * 0.02, 0.2),
                      }}
                      className="transition-colors hover:bg-teal-50/30"
                    >
                      {/* Award title and image */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                            {award.image || award.image_url ? (
                              <img
                                src={
                                  award.image ||
                                  award.image_url
                                }
                                alt={award.title || "Award"}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <ImageIcon
                                size={20}
                                className="text-slate-400"
                              />
                            )}
                          </div>

                          <div className="max-w-[240px]">
                            <p className="truncate text-xs font-bold text-slate-900">
                              {award.title || "Untitled Award"}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-400">
                              ID: #{award.id ?? "—"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Organization */}
                      <td className="px-4 py-3">
                        <div className="flex max-w-[210px] items-start gap-2">
                          <Building2
                            size={14}
                            className="mt-0.5 shrink-0 text-slate-400"
                          />

                          <span className="text-xs text-slate-600">
                            {award.organization || "—"}
                          </span>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
                          {award.category || "Other"}
                        </span>
                      </td>

                      {/* Year */}
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                          <CalendarDays
                            size={14}
                            className="text-teal-600"
                          />

                          {award.year || "—"}
                        </span>
                      </td>

                      {/* Award date */}
                      <td className="px-4 py-3">
                        <span className="text-xs font-medium text-slate-600">
                          {formatDate(
                            award.date || award.created_at
                          )}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
                            getStatus(award)
                          )}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {getStatus(award)}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-1.5">
                          {/* View award */}
                          <button
                            type="button"
                            title="View award"
                            onClick={() => {
                              window.location.href = `/admin/awards/${award.id}`;
                            }}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Eye size={14} />
                          </button>

                          {/* Edit award in modal */}
                          <button
                            type="button"
                            title="Edit award"
                            onClick={() => openEditModal(award)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                          >
                            <Pencil size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER */}
          <div className="flex flex-col gap-1.5 border-t border-slate-100 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Total Awards:{" "}
              <span className="font-bold text-slate-800">
                {awards.length}
              </span>
            </p>

            <p className="text-[10px] text-slate-400">
              Showing {filteredAwards.length} records
            </p>
          </div>
        </div>
      </div>

      {/* ADD / EDIT AWARD MODAL */}
      <ModalComponent
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedAward ? "Edit Award" : "Add Award"}
        size="xl"
      >
        <AwardForm
          key={selectedAward?.id ?? "new-award"}
          onSubmit={handleSave}
          onCancel={closeModal}
          userId={userId}
          initialData={selectedAward}
          isSaving={saving}
          submitError={pageError}
        />
      </ModalComponent>
    </div>
  );
};

export default Awardspage;
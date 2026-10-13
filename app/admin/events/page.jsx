
// "use client";

// import React, { useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   FiCalendar,
//   FiSearch,
//   FiX,
//   FiFilter,
//   FiRotateCcw,
//   FiArrowUp,
//   FiArrowDown,
//   FiEye,
//   FiEdit2,
//   FiTrash2,
//   FiPlus,
//   FiClock,
//   FiMapPin,
//   FiAward,
//   FiCheckCircle,
//   FiImage,
//   FiAlertCircle,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import ApiService from "../../src/services/Apiservices";


// const Eventpage = () => {
//   const { data, error, isLoading } = useSWR("events", ApiService.get);

//   const events = Array.isArray(data?.data)
//     ? data.data
//     : Array.isArray(data?.data?.data)
//     ? data.data.data
//     : [];

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [sortField, setSortField] = useState("created_at");
//   const [sortDirection, setSortDirection] = useState("desc");
//   const [selectedEvent, setSelectedEvent] = useState(null);

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

//   const getEventStatus = (event) => {
//     const status = String(event.status || "").toLowerCase();

//     if (["published", "active", "completed", "upcoming", "draft"].includes(status)) {
//       return status;
//     }

//     if (event.is_published === 1 || event.is_published === true) {
//       return "published";
//     }

//     if (event.is_published === 0 || event.is_published === false) {
//       return "draft";
//     }

//     if (!event.status) return "published";

//     return status;
//   };

//   const getStatusStyle = (status) => {
//     switch (String(status).toLowerCase()) {
//       case "published":
//       case "active":
//         return "bg-emerald-50 text-emerald-700 border-emerald-200";
//       case "upcoming":
//         return "bg-blue-50 text-blue-700 border-blue-200";
//       case "completed":
//         return "bg-purple-50 text-purple-700 border-purple-200";
//       case "draft":
//         return "bg-amber-50 text-amber-700 border-amber-200";
//       default:
//         return "bg-gray-50 text-gray-700 border-gray-200";
//     }
//   };

//   const statuses = useMemo(() => {
//     return [
//       ...new Set(
//         events.map((event) => getEventStatus(event)).filter(Boolean)
//       ),
//     ].sort();
//   }, [events]);

//   const filteredEvents = useMemo(() => {
//     let result = [...events];
//     const searchText = search.trim().toLowerCase();

//     if (searchText) {
//       result = result.filter((event) =>
//         [
//           event.title,
//           event.event_name,
//           event.description,
//           event.location,
//           event.venue,
//           event.category,
//           event.organizer,
//         ].some((value) =>
//           String(value || "").toLowerCase().includes(searchText)
//         )
//       );
//     }

//     if (statusFilter !== "all") {
//       result = result.filter(
//         (event) => getEventStatus(event) === statusFilter
//       );
//     }

//     result.sort((a, b) => {
//       let valueA = a?.[sortField];
//       let valueB = b?.[sortField];

//       if (
//         ["created_at", "updated_at", "event_date", "date"].includes(sortField)
//       ) {
//         valueA = new Date(valueA || 0).getTime();
//         valueB = new Date(valueB || 0).getTime();
//       } else if (sortField === "id") {
//         valueA = Number(valueA || 0);
//         valueB = Number(valueB || 0);
//       } else {
//         valueA = String(valueA || "").toLowerCase();
//         valueB = String(valueB || "").toLowerCase();
//       }

//       if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
//       if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
//       return 0;
//     });

//     return result;
//   }, [events, search, statusFilter, sortField, sortDirection]);

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   const handleReset = () => {
//     setSearch("");
//     setStatusFilter("all");
//     setSortField("created_at");
//     setSortDirection("desc");
//   };

//   const totalEvents = events.length;
//   const publishedEvents = events.filter((event) =>
//     ["published", "active"].includes(getEventStatus(event))
//   ).length;
//   const upcomingEvents = events.filter(
//     (event) => getEventStatus(event) === "upcoming"
//   ).length;
//   const draftEvents = events.filter(
//     (event) => getEventStatus(event) === "draft"
//   ).length;
//   const completedEvents = events.filter(
//     (event) => getEventStatus(event) === "completed"
//   ).length;

//   const statCards = [
//     {
//       title: "Total Events",
//       value: totalEvents,
//       icon: FiCalendar,
//       iconStyle: "bg-blue-100 text-blue-600",
//       cardStyle: "from-white to-blue-50 border-blue-100 hover:border-blue-300",
//       watermark: "text-blue-600",
//     },
//     {
//       title: "Published",
//       value: publishedEvents,
//       icon: FiCheckCircle,
//       iconStyle: "bg-emerald-100 text-emerald-600",
//       cardStyle:
//         "from-white to-emerald-50 border-emerald-100 hover:border-emerald-300",
//       watermark: "text-emerald-600",
//     },
//     {
//       title: "Upcoming",
//       value: upcomingEvents,
//       icon: FiClock,
//       iconStyle: "bg-cyan-100 text-cyan-600",
//       cardStyle: "from-white to-cyan-50 border-cyan-100 hover:border-cyan-300",
//       watermark: "text-cyan-600",
//     },
//     {
//       title: "Draft Events",
//       value: draftEvents,
//       icon: FiEdit2,
//       iconStyle: "bg-amber-100 text-amber-600",
//       cardStyle: "from-white to-amber-50 border-amber-100 hover:border-amber-300",
//       watermark: "text-amber-600",
//     },
//     {
//       title: "Completed",
//       value: completedEvents,
//       icon: FiAward,
//       iconStyle: "bg-purple-100 text-purple-600",
//       cardStyle:
//         "from-white to-purple-50 border-purple-100 hover:border-purple-300",
//       watermark: "text-purple-600",
//     },
//   ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-4">
//         <div className="mx-auto max-w-[1600px]">
//           <div className="mb-5 h-7 w-48 animate-pulse rounded bg-gray-200" />
//           <div className="mb-5 h-4 w-72 animate-pulse rounded bg-gray-200" />
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="h-28 animate-pulse rounded-xl bg-white shadow-sm"
//               />
//             ))}
//           </div>
//           <div className="mt-5 h-96 animate-pulse rounded-xl bg-white shadow-sm" />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-4">
//         <div className="mx-auto max-w-[1600px] rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
//           <div className="flex items-center gap-2 font-bold">
//             <FiAlertCircle size={20} />
//             Unable to load events
//           </div>
//           <p className="mt-2 text-sm">
//             Something went wrong while fetching events. Please check your API
//             endpoint and try again.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-3 sm:p-5">
//       <div className="mx-auto max-w-[1600px]">
//         {/* HEADER */}
//         <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
//                 <FiCalendar size={21} />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
//                   Events Management
//                 </h1>
//                 <p className="mt-0.5 text-xs text-gray-500">
//                   Manage, review and organize hospital events
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
//               <FiCalendar className="text-blue-600" size={15} />
//               <span className="text-xs font-semibold text-gray-700">
//                 {totalEvents} Events
//               </span>
//             </div>

//             {/* Connect this button to your event creation route */}
//             <button
//               type="button"
//               onClick={() => {
//                 // window.location.href = "/admin/events/add";
//               }}
//               className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
//             >
//               <FiPlus size={15} />
//               Add Event
//             </button>
//           </div>
//         </div>

//         {/* STATISTICS */}
//         <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//           {statCards.map((card, index) => {
//             const Icon = card.icon;

//             return (
//               <motion.div
//                 key={card.title}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.06 }}
//                 whileHover={{ y: -3 }}
//                 className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br p-3.5 shadow-sm transition-shadow hover:shadow-md sm:p-4 ${card.cardStyle}`}
//               >
//                 <Icon
//                   size={66}
//                   className={`absolute -bottom-3 -right-3 opacity-[0.07] ${card.watermark}`}
//                 />
//                 <div className="relative z-10 flex items-center gap-3">
//                   <div
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${card.iconStyle}`}
//                   >
//                     <Icon size={17} />
//                   </div>
//                   <div className="min-w-0">
//                     <p className="truncate text-[11px] font-medium text-gray-500">
//                       {card.title}
//                     </p>
//                     <motion.h2
//                       initial={{ opacity: 0, y: 4 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="mt-1 text-xl font-bold leading-none text-gray-900"
//                     >
//                       {card.value}
//                     </motion.h2>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FILTERS */}
//         <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
//             <div className="relative w-full xl:max-w-md">
//               <FiSearch
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={16}
//               />
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search event, location, category..."
//                 className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-9 text-xs text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
//                   aria-label="Clear search"
//                 >
//                   <FiX size={15} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <div className="relative">
//                 <FiFilter
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={14}
//                 />
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="h-10 min-w-[150px] appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-7 text-xs font-medium text-gray-700 outline-none focus:border-blue-500"
//                 >
//                   <option value="all">All Status</option>
//                   {statuses.map((status) => (
//                     <option key={status} value={status}>
//                       {status.charAt(0).toUpperCase() + status.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => handleSort("title")}
//                 className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-700 transition hover:bg-blue-50"
//               >
//                 {sortField === "title" && sortDirection === "asc" ? (
//                   <FiArrowUp size={14} />
//                 ) : (
//                   <FiArrowDown size={14} />
//                 )}
//                 Sort by Name
//               </button>

//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
//               >
//                 <FiRotateCcw size={14} />
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* EVENTS TABLE */}
//         <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="text-sm font-bold text-gray-900">
//                 Events List
//               </h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Showing {filteredEvents.length} of {events.length} events
//               </p>
//             </div>
//             <span className="w-fit rounded-md bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
//               {filteredEvents.length} Results
//             </span>
//           </div>

//           <div className="max-h-[650px] overflow-auto">
//             <table className="w-full min-w-[1050px] border-collapse">
//               <thead className="sticky top-0 z-20 bg-gray-50">
//                 <tr className="border-b border-gray-200">
//                   {[
//                     "Event",
//                     "Category",
//                     "Event Date",
//                     "Location",
//                     "Status",
//                     "Created",
//                     "Actions",
//                   ].map((heading) => (
//                     <th
//                       key={heading}
//                       className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500"
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100">
//                 {filteredEvents.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="px-5 py-16 text-center">
//                       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500">
//                         <FiCalendar size={23} />
//                       </div>
//                       <h3 className="mt-3 text-sm font-bold text-gray-800">
//                         No events found
//                       </h3>
//                       <p className="mt-1 text-xs text-gray-500">
//                         Try changing your search or status filter.
//                       </p>
//                       <button
//                         type="button"
//                         onClick={handleReset}
//                         className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
//                       >
//                         <FiRotateCcw size={13} />
//                         Reset Filters
//                       </button>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredEvents.map((event, index) => {
//                     const eventTitle =
//                       event.title || event.event_name || "Untitled Event";
//                     const eventDate =
//                       event.event_date || event.date || event.start_date;
//                     const location = event.location || event.venue || "—";
//                     const status = getEventStatus(event);

//                     return (
//                       <motion.tr
//                         key={event.id || index}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.2) }}
//                         className="group transition-colors hover:bg-blue-50/40"
//                       >
//                         <td className="px-4 py-3">
//                           <div className="flex items-center gap-3">
//                             <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
//                               {event.image || event.image_url ? (
//                                 <img
//                                   src={event.image || event.image_url}
//                                   alt={eventTitle}
//                                   className="h-full w-full object-cover"
//                                 />
//                               ) : (
//                                 <FiImage size={19} className="text-gray-400" />
//                               )}
//                             </div>
//                             <div className="max-w-[260px]">
//                               <p className="truncate text-xs font-bold text-gray-900">
//                                 {eventTitle}
//                               </p>
//                               <p className="mt-1 line-clamp-2 text-[10px] text-gray-500">
//                                 {event.description || "No description added"}
//                               </p>
//                               <p className="mt-1 text-[10px] text-gray-400">
//                                 ID: #{event.id ?? "—"}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         <td className="px-4 py-3">
//                           <span className="inline-flex rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
//                             {event.category || "General"}
//                           </span>
//                         </td>

//                         <td className="px-4 py-3">
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <FiCalendar size={14} className="text-blue-500" />
//                             <span className="text-xs font-medium">
//                               {formatDate(eventDate)}
//                             </span>
//                           </div>
//                           {event.time && (
//                             <p className="mt-1 pl-5 text-[10px] text-gray-400">
//                               {event.time}
//                             </p>
//                           )}
//                         </td>

//                         <td className="px-4 py-3">
//                           <div className="flex max-w-[190px] items-start gap-1.5">
//                             <FiMapPin
//                               size={13}
//                               className="mt-0.5 shrink-0 text-gray-400"
//                             />
//                             <span className="text-xs text-gray-600">
//                               {location}
//                             </span>
//                           </div>
//                         </td>

//                         <td className="px-4 py-3">
//                           <span
//                             className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(status)}`}
//                           >
//                             <span className="h-1.5 w-1.5 rounded-full bg-current" />
//                             {status}
//                           </span>
//                         </td>

//                         <td className="px-4 py-3">
//                           <span className="text-xs font-medium text-gray-700">
//                             {formatDate(event.created_at)}
//                           </span>
//                         </td>

//                         <td className="px-4 py-3">
//                           <div className="flex items-center gap-1.5">
//                             <button
//                               type="button"
//                               title="View Event"
//                               onClick={() => setSelectedEvent(event)}
//                               className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
//                             >
//                               <FiEye size={14} />
//                             </button>

//                             <button
//                               type="button"
//                               title="Edit Event"
//                               onClick={() => {
//                                 window.location.href = `/admin/events/edit/${event.id}`;
//                               }}
//                               className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
//                             >
//                               <FiEdit2 size={14} />
//                             </button>
//                           </div>
//                         </td>
//                       </motion.tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col gap-1.5 border-t border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-gray-500">
//               Total Events:{" "}
//               <span className="font-bold text-gray-800">{events.length}</span>
//             </p>
//             <p className="text-[10px] text-gray-400">
//               Showing {filteredEvents.length} records
//             </p>
//           </div>
//         </div>

//         {/* EVENT DETAILS MODAL */}
//         {selectedEvent && (
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 p-4 backdrop-blur-sm"
//             onClick={() => setSelectedEvent(null)}
//           >
//             <div
//               className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
//                     Event Details
//                   </p>
//                   <h2 className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedEvent.title ||
//                       selectedEvent.event_name ||
//                       "Untitled Event"}
//                   </h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedEvent(null)}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
//                   aria-label="Close details"
//                 >
//                   <FiX size={18} />
//                 </button>
//               </div>

//               <div className="space-y-4 p-5">
//                 {(selectedEvent.image || selectedEvent.image_url) && (
//                   <img
//                     src={selectedEvent.image || selectedEvent.image_url}
//                     alt={selectedEvent.title || "Event"}
//                     className="h-52 w-full rounded-xl object-cover"
//                   />
//                 )}

//                 <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                   {[
//                     {
//                       label: "Category",
//                       value: selectedEvent.category || "General",
//                     },
//                     {
//                       label: "Date",
//                       value: formatDate(
//                         selectedEvent.event_date ||
//                           selectedEvent.date ||
//                           selectedEvent.start_date
//                       ),
//                     },
//                     {
//                       label: "Location",
//                       value:
//                         selectedEvent.location || selectedEvent.venue || "—",
//                     },
//                     {
//                       label: "Status",
//                       value: getEventStatus(selectedEvent),
//                     },
//                     {
//                       label: "Organizer",
//                       value: selectedEvent.organizer || "—",
//                     },
//                     {
//                       label: "Created",
//                       value: formatDate(selectedEvent.created_at),
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="rounded-lg border border-gray-100 bg-gray-50 p-3"
//                     >
//                       <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
//                         {item.label}
//                       </p>
//                       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//                         {item.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">
//                     Description
//                   </h3>
//                   <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
//                     {selectedEvent.description || "No description available."}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-end border-t border-gray-100 bg-gray-50 px-5 py-3">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedEvent(null)}
//                   className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Eventpage;



"use client";

import React, { useMemo, useState } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiSearch,
  FiX,
  FiFilter,
  FiRotateCcw,
  FiArrowUp,
  FiArrowDown,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiClock,
  FiMapPin,
  FiAward,
  FiCheckCircle,
  FiImage,
  FiAlertCircle,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import ApiService from "../../src/services/Apiservices";
import EventForm from "../../components/admin/EventForm";
import ModalComponent from "../../components/admin/ModelComponent";
import AuthService from "../../src/services/Authservices";


const Eventpage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewEvent, setViewEvent] = useState(null);
  const [saving, setSaving] = useState(false);
  const [pageError, setPageError] = useState("");

  // Apne authentication system se actual userId lein.
   const userId = AuthService.getUserId();

  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR("events", ApiService.get);

  const events = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.data?.data)
      ? data.data.data
      : Array.isArray(data)
        ? data
        : [];

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

  const getEventStatus = (event) => {
    const status = String(event?.status ?? "").toLowerCase();

    if (
      ["published", "active", "completed", "upcoming", "draft"].includes(
        status
      )
    ) {
      return status;
    }

    if (event?.is_published === 1 || event?.is_published === true) {
      return "published";
    }

    if (event?.is_published === 0 || event?.is_published === false) {
      return "draft";
    }

    return status || "published";
  };

  const getStatusStyle = (status) => {
    switch (String(status).toLowerCase()) {
      case "published":
      case "active":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "upcoming":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "completed":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "draft":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const openAddModal = () => {
    setPageError("");
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const openEditModal = (event) => {
    setPageError("");
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;
    setModalOpen(false);
    setSelectedEvent(null);
    setPageError("");
  };

  // FormData is passed by EventForm.
  // Ensure ApiService methods and API routes match your project.
  // const handleSave = async (formData) => {
  //   console.log(formData)
  //   return                                                                   
  //   setSaving(true);
  //   setPageError("");

  //   try {
  //     if (selectedEvent?.id) {
  //       if (typeof ApiService.put !== "function") {
  //         throw new Error(
  //           "ApiService.put() is not available. Configure your update API method."
  //         );
  //       }

  //       await ApiService.put(
  //         `/events/${selectedEvent.id}`,
  //         formData
  //       );
  //     } else {
  //       if (typeof ApiService.post !== "function") {
  //         throw new Error(
  //           "ApiService.post() is not available. Configure your create API method."
  //         );
  //       }

  //       await ApiService.post("/events", formData);
  //     }

  //     await mutate();
  //     setModalOpen(false);
  //     setSelectedEvent(null);
  //   } catch (err) {
  //     console.error("Save event error:", err);

  //     const message =
  //       err?.response?.data?.message ||
  //       err?.message ||
  //       "Unable to save event. Please try again.";

  //     setPageError(message);
  //     throw err;
  //   } finally {
  //     setSaving(false);
  //   }
  // };

//   const handleSave = async (formData) => {
//   console.log(formData);

//   setSaving(true);
//   setPageError("");

//   try {
//     await ApiService.post("/events", formData);

//     await mutate();

//     setModalOpen(false);
//     setSelectedEvent(null);
//   } catch (err) {
//     console.error("Save event error:", err);

//     const message =
//       err?.response?.data?.message ||
//       err?.message ||
//       "Unable to save event. Please try again.";

//     setPageError(message);
//     throw err;
//   } finally {
//     setSaving(false);
//   }
// };



const handleSave = async (formData) => {
  setSaving(true);
  setPageError("");

  try {
    console.log("Event FormData:", [...formData.entries()]);

    if (selectedEvent?.id) {
      // Update existing event
      await ApiService.put(
        `/events/${selectedEvent.id}`,
        formData
      );
    } else {
      // Create new event
      await ApiService.post("/events", formData);
    }

    // Refresh event list
    await mutate();

    // Close modal and reset selection
    setModalOpen(false);
    setSelectedEvent(null);
  } catch (err) {
    console.error("Save event error:", err);

    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Unable to save event. Please try again.";

    setPageError(message);
    throw err;
  } finally {
    setSaving(false);
  }
};


  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((current) =>
        current === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
    setSortField("created_at");
    setSortDirection("desc");
  };

  const statuses = useMemo(
    () =>
      [...new Set(events.map(getEventStatus).filter(Boolean))].sort(),
    [events]
  );

  const filteredEvents = useMemo(() => {
    let result = [...events];
    const searchText = search.trim().toLowerCase();

    if (searchText) {
      result = result.filter((event) =>
        [
          event.title,
          event.event_name,
          event.short_description,
          event.description,
          event.location,
          event.category,
          event.organizer,
        ].some((value) =>
          String(value || "").toLowerCase().includes(searchText)
        )
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (event) => getEventStatus(event) === statusFilter
      );
    }

    result.sort((a, b) => {
      let valueA = a?.[sortField];
      let valueB = b?.[sortField];

      if (
        ["created_at", "updated_at", "event_date", "end_date"].includes(
          sortField
        )
      ) {
        valueA = new Date(valueA || 0).getTime();
        valueB = new Date(valueB || 0).getTime();
      } else if (sortField === "id") {
        valueA = Number(valueA || 0);
        valueB = Number(valueB || 0);
      } else {
        valueA = String(valueA || "").toLowerCase();
        valueB = String(valueB || "").toLowerCase();
      }

      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [events, search, statusFilter, sortField, sortDirection]);

  const totalEvents = events.length;
  const publishedEvents = events.filter((event) =>
    ["published", "active"].includes(getEventStatus(event))
  ).length;
  const upcomingEvents = events.filter(
    (event) => getEventStatus(event) === "upcoming"
  ).length;
  const draftEvents = events.filter(
    (event) => getEventStatus(event) === "draft"
  ).length;
  const completedEvents = events.filter(
    (event) => getEventStatus(event) === "completed"
  ).length;

  const statCards = [
    {
      title: "Total Events",
      value: totalEvents,
      icon: FiCalendar,
      iconStyle: "bg-blue-100 text-blue-600",
      cardStyle: "from-white to-blue-50 border-blue-100 hover:border-blue-300",
    },
    {
      title: "Published",
      value: publishedEvents,
      icon: FiCheckCircle,
      iconStyle: "bg-emerald-100 text-emerald-600",
      cardStyle:
        "from-white to-emerald-50 border-emerald-100 hover:border-emerald-300",
    },
    {
      title: "Upcoming",
      value: upcomingEvents,
      icon: FiClock,
      iconStyle: "bg-cyan-100 text-cyan-600",
      cardStyle: "from-white to-cyan-50 border-cyan-100 hover:border-cyan-300",
    },
    {
      title: "Draft Events",
      value: draftEvents,
      icon: FiEdit2,
      iconStyle: "bg-amber-100 text-amber-600",
      cardStyle:
        "from-white to-amber-50 border-amber-100 hover:border-amber-300",
    },
    {
      title: "Completed",
      value: completedEvents,
      icon: FiAward,
      iconStyle: "bg-purple-100 text-purple-600",
      cardStyle:
        "from-white to-purple-50 border-purple-100 hover:border-purple-300",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-5 h-8 w-56 animate-pulse rounded bg-gray-200" />
          <div className="mb-5 h-4 w-72 animate-pulse rounded bg-gray-200" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-28 animate-pulse rounded-xl bg-white shadow-sm"
              />
            ))}
          </div>
          <div className="mt-5 h-96 animate-pulse rounded-xl bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="mx-auto max-w-[1600px] rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-center gap-2 font-bold">
            <FiAlertCircle size={20} />
            Unable to load events
          </div>
          <p className="mt-2 text-sm">
            Please check your API endpoint and try again.
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
    <div className="min-h-screen bg-gray-50 p-3 sm:p-2">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <FiCalendar size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Events Management
              </h1>
              <p className="mt-0.5 text-xs text-gray-500">
                Manage, review and organize hospital events
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
              <FiCalendar className="text-blue-600" size={15} />
              <span className="text-xs font-semibold text-gray-700">
                {totalEvents} Events
              </span>
            </div>

            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <FiPlus size={15} />
              Add Event
            </button>
          </div>
        </div>

        {/* Save/API error */}
        {pageError && !modalOpen && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {pageError}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {statCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br p-3.5 shadow-sm transition-shadow hover:shadow-md sm:p-4 ${card.cardStyle}`}
              >
                <Icon
                  size={62}
                  className="absolute -bottom-3 -right-3 text-gray-500 opacity-[0.08]"
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${card.iconStyle}`}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium text-gray-500">
                      {card.title}
                    </p>
                    <h2 className="mt-1 text-xl font-bold leading-none text-gray-900">
                      {card.value}
                    </h2>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-md">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search event, location, category..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-9 text-xs text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <FiX size={15} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <FiFilter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="h-10 min-w-[150px] appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-7 text-xs font-medium text-gray-700 outline-none focus:border-blue-500"
                >
                  <option value="all">All Status</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => handleSort("title")}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-700 transition hover:bg-blue-50"
              >
                {sortField === "title" && sortDirection === "asc" ? (
                  <FiArrowUp size={14} />
                ) : (
                  <FiArrowDown size={14} />
                )}
                Sort by Name
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <FiRotateCcw size={14} />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Events Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Events List</h2>
              <p className="mt-1 text-xs text-gray-500">
                Showing {filteredEvents.length} of {events.length} events
              </p>
            </div>
            <span className="w-fit rounded-md bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
              {filteredEvents.length} Results
            </span>
          </div>

          <div className="max-h-[650px] overflow-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead className="sticky top-0 z-20 bg-gray-50">
                <tr className="border-b border-gray-200">
                  {[
                    { label: "Event", field: "title" },
                    { label: "Category", field: "category" },
                    { label: "Event Date", field: "event_date" },
                    { label: "Location", field: "location" },
                    { label: "Status", field: "status" },
                    { label: "Created", field: "created_at" },
                    { label: "Actions", field: null },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500"
                    >
                      {heading.field ? (
                        <button
                          type="button"
                          onClick={() => handleSort(heading.field)}
                          className="inline-flex items-center gap-1.5 hover:text-blue-600"
                        >
                          {heading.label}
                          {sortField === heading.field &&
                            (sortDirection === "asc" ? (
                              <FiArrowUp size={12} />
                            ) : (
                              <FiArrowDown size={12} />
                            ))}
                        </button>
                      ) : (
                        heading.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredEvents.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-16 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                        <FiCalendar size={23} />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-gray-800">
                        No events found
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        Try changing your search or status filter.
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        <FiRotateCcw size={13} />
                        Reset Filters
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredEvents.map((event, index) => {
                    const title =
                      event.title || event.event_name || "Untitled Event";
                    const eventDate =
                      event.event_date || event.date || event.start_date;
                    const location = event.location || event.venue || "—";
                    const status = getEventStatus(event);
                    const image = event.image || event.image_url;

                    return (
                      <motion.tr
                        key={event.id ?? index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: Math.min(index * 0.015, 0.15),
                        }}
                        className="group transition-colors hover:bg-blue-50/40"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                              {image ? (
                                <img
                                  src={image}
                                  alt={title}
                                  loading="lazy"
                                  className="h-full w-full object-cover"
                                  onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                  }}
                                />
                              ) : (
                                <FiImage size={19} className="text-gray-400" />
                              )}
                            </div>
                            <div className="max-w-[260px]">
                              <p className="truncate text-xs font-bold text-gray-900">
                                {title}
                              </p>
                              <p className="mt-1 line-clamp-2 text-[10px] text-gray-500">
                                {event.short_description ||
                                  event.description ||
                                  "No description added"}
                              </p>
                              <p className="mt-1 text-[10px] text-gray-400">
                                ID: #{event.id ?? "—"}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <span className="inline-flex rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
                            {event.category || "General"}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiCalendar size={14} className="text-blue-500" />
                            <span className="text-xs font-medium">
                              {formatDate(eventDate)}
                            </span>
                          </div>
                          {event.event_time && (
                            <p className="mt-1 pl-5 text-[10px] text-gray-400">
                              {event.event_time}
                            </p>
                          )}
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex max-w-[190px] items-start gap-1.5">
                            <FiMapPin
                              size={13}
                              className="mt-0.5 shrink-0 text-gray-400"
                            />
                            <span className="text-xs text-gray-600">
                              {location}
                            </span>
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(status)}`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                            {status}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-xs font-medium text-gray-700">
                            {formatDate(event.created_at)}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              title="View Event"
                              onClick={() => setViewEvent(event)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                              <FiEye size={14} />
                            </button>

                            <button
                              type="button"
                              title="Edit Event"
                              onClick={() => openEditModal(event)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                            >
                              <FiEdit2 size={14} />
                            </button>

                            {/*
                              Add delete action here only after your
                              delete API method and confirmation flow
                              are configured.
                            */}
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-1.5 border-t border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              Total Events:{" "}
              <span className="font-bold text-gray-800">{events.length}</span>
            </p>
            <p className="text-[10px] text-gray-400">
              Showing {filteredEvents.length} records
            </p>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {viewEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 p-4 backdrop-blur-sm"
          onClick={() => setViewEvent(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                  Event Details
                </p>
                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {viewEvent.title || "Untitled Event"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setViewEvent(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
                aria-label="Close details"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="space-y-4 p-5">
              {(viewEvent.image || viewEvent.image_url) && (
                <img
                  src={viewEvent.image || viewEvent.image_url}
                  alt={viewEvent.title || "Event"}
                  className="h-52 w-full rounded-xl object-cover"
                />
              )}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Category",
                    value: viewEvent.category || "General",
                  },
                  {
                    label: "Event Date",
                    value: formatDate(viewEvent.event_date),
                  },
                  {
                    label: "End Date",
                    value: formatDate(viewEvent.end_date),
                  },
                  {
                    label: "Time",
                    value: viewEvent.event_time || "—",
                  },
                  {
                    label: "Location",
                    value: viewEvent.location || "—",
                  },
                  {
                    label: "Status",
                    value: getEventStatus(viewEvent),
                  },
                  {
                    label: "Organizer",
                    value: viewEvent.organizer || "—",
                  },
                  {
                    label: "Contact",
                    value: viewEvent.contact || "—",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {viewEvent.short_description && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Short Description
                  </h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                    {viewEvent.short_description}
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Description
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                  {viewEvent.description || "No description available."}
                </p>
              </div>

              {viewEvent.highlights && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Highlights
                  </h3>
                  <div className="mt-2 space-y-2">
                    {(Array.isArray(viewEvent.highlights)
                      ? viewEvent.highlights
                      : (() => {
                          try {
                            const parsed = JSON.parse(viewEvent.highlights);
                            return Array.isArray(parsed) ? parsed : [];
                          } catch {
                            return [];
                          }
                        })()
                    ).map((highlight, index) => (
                      <div
                        key={`${highlight}-${index}`}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end border-t border-gray-100 bg-gray-50 px-5 py-3">
              <button
                type="button"
                onClick={() => setViewEvent(null)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Event Modal */}
      <ModalComponent
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedEvent ? "Edit Event" : "Add Event"}
        size="xl"
      >
        <EventForm
          key={selectedEvent?.id ?? "new-event"}
          onSubmit={handleSave}
          onCancel={closeModal}
          userId={userId}
          initialData={selectedEvent}
          isSaving={saving}
          submitError={pageError}
        />
      </ModalComponent>
    </div>
  );
};

export default Eventpage;

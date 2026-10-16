
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   X,
//   CalendarDays,
//   Clock,
//   MapPin,
//   UserRound,
// } from "lucide-react";
// import ApiService from "../src/services/Apiservices";

// export default function EventPopup() {
//   const [open, setOpen] = useState(false);

//   const { data: response, error, isLoading } = useSWR(
//     "events",
//     (url) => ApiService.get(url)
//   );

//   // API response se actual data nikalein
//   const events = useMemo(() => {
//     const result = response?.data ?? response;

//     if (Array.isArray(result)) return result;
//     if (Array.isArray(result?.data)) return result.data;
//     if (Array.isArray(result?.events)) return result.events;
//     if (result?.event) return [result.event];

//     return [];
//   }, [response]);

//   // India ki current date (YYYY-MM-DD)
//   const today = useMemo(() => {
//     return new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Kolkata",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(new Date());
//   }, []);

//   // Sirf aaj ke events, status upcoming aur active response
//   const todayEvents = useMemo(() => {
//     return events.filter((item) => {
//       const rawDate =
//         item.event_date ?? item.date ?? item.start_date;

//       if (!rawDate) return false;

//       // ISO timestamp ko India ki date mein convert karein
//       const eventDate = new Intl.DateTimeFormat("en-CA", {
//         timeZone: "Asia/Kolkata",
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//       }).format(new Date(rawDate));

//       return (
//         eventDate === today &&
//         item.status !== "cancelled"
//       );
//     });
//   }, [events, today]);

//   const event = todayEvents[0];

//   useEffect(() => {
//     if (event) {
//       setOpen(true);
//     }
//   }, [event]);

//   // 2 minutes ke baad automatically close
//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   if (isLoading || error || !open || !event) return null;

//   const title = event.title ?? event.name ?? "Today's Event";
//   const description =
//     event.short_description ??
//     event.description ??
//     event.excerpt ??
//     "";

//   const image =
//     event.image ??
//     event.image_url ??
//     event.banner_image ??
//     event.banner ??
//     "";

//   const eventDate = event.event_date ?? event.date ?? "";
//   const eventTime = event.event_time ?? "";
//   const location = event.location ?? "";
//   const organizer = event.organizer ?? "";

//   // Relative image URLs ke liye, agar aapke API mein uploads hain,
//   // to apne server ka public base URL use karein.
//   const imageSrc = image;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="event-popup-title"
//     >
//       <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <button
//           type="button"
//           onClick={() => setOpen(false)}
//           className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
//           aria-label="Close event popup"
//         >
//           <X size={22} />
//         </button>

//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt={title}
//             className="h-56 w-full object-cover sm:h-72"
//           />
//         )}

//         <div className="p-6 sm:p-8">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
//             <CalendarDays size={16} />
//             Today's Event
//           </div>

//           <h2
//             id="event-popup-title"
//             className="text-2xl font-bold text-slate-900 sm:text-3xl"
//           >
//             {title}
//           </h2>

//           {event.category && (
//             <p className="mt-2 text-sm font-medium text-blue-700">
//               {event.category}
//             </p>
//           )}

//           {description && (
//             <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
//               {description}
//             </p>
//           )}

//           <div className="mt-5 space-y-3 text-sm text-slate-600">
//             {eventDate && (
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={17} />
//                 <span>
//                   {new Date(eventDate).toLocaleDateString("en-IN", {
//                     timeZone: "Asia/Kolkata",
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </span>
//               </div>
//             )}

//             {eventTime && (
//               <div className="flex items-center gap-2">
//                 <Clock size={17} />
//                 <span>{eventTime}</span>
//               </div>
//             )}

//             {location && (
//               <div className="flex items-center gap-2">
//                 <MapPin size={17} />
//                 <span>{location}</span>
//               </div>
//             )}

//             {organizer && (
//               <div className="flex items-center gap-2">
//                 <UserRound size={17} />
//                 <span>Organized by {organizer}</span>
//               </div>
//             )}
//           </div>

//           <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
//             <Clock size={17} />
//             <span>Popup automatically closes in 2 minutes.</span>
//           </div>

//           <button
//             type="button"
//             onClick={() => setOpen(false)}
//             className="mt-6 w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   X,
//   CalendarDays,
//   Clock,
//   MapPin,
//   UserRound,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";
// import ApiService from "../src/services/Apiservices";

// export default function EventPopup() {
//   const [open, setOpen] = useState(false);

//   const { data: response, error, isLoading } = useSWR(
//     "events",
//     (url) => ApiService.get(url)
//   );

//   const events = useMemo(() => {
//     const result = response?.data ?? response;

//     if (Array.isArray(result)) return result;
//     if (Array.isArray(result?.data)) return result.data;
//     if (Array.isArray(result?.events)) return result.events;
//     if (result?.event) return [result.event];

//     return [];
//   }, [response]);

//   const getIndiaDate = (date) => {
//     if (!date) return "";

//     const parsed = new Date(date);
//     if (Number.isNaN(parsed.getTime())) return "";

//     return new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Kolkata",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(parsed);
//   };

//   const today = getIndiaDate(new Date());

//   const todayEvents = useMemo(() => {
//     return events.filter((item) => {
//       const rawDate =
//         item.event_date ?? item.date ?? item.start_date;

//       return (
//         getIndiaDate(rawDate) === today &&
//         item.status?.toLowerCase() !== "cancelled"
//       );
//     });
//   }, [events, today]);

//   const event = todayEvents[0];

//   useEffect(() => {
//     if (event) setOpen(true);
//   }, [event]);

//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   if (isLoading || error || !open || !event) return null;

//   const title = event.title ?? event.name ?? "Today's Event";
//   const description =
//     event.short_description ??
//     event.description ??
//     event.excerpt ??
//     "";

//   const image =
//     event.image ??
//     event.image_url ??
//     event.banner_image ??
//     event.banner ??
//     "";

//   const eventDate = event.event_date ?? event.date ?? "";
//   const eventTime = event.event_time ?? "";
//   const location = event.location ?? "";
//   const organizer = event.organizer ?? "";

//   const formattedDate = eventDate
//     ? new Date(eventDate).toLocaleDateString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="event-popup-title"
//     >
//       <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-950/20">

//         {/* Compact Header */}
//         <div className="relative overflow-hidden bg-gradient-to-r from-[#073B5C] to-[#087CA7] px-5 py-4 text-white">
//           <div className="absolute -right-5 -top-10 h-28 w-28 rounded-full bg-white/10" />
//           <div className="absolute -bottom-12 right-20 h-24 w-24 rounded-full bg-white/10" />

//           <div className="relative flex items-center gap-3 pr-9">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15">
//               <Sparkles size={20} />
//             </div>

//             <div>
//               <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-100">
//                 Event Update
//               </p>
//               <h2 className="mt-0.5 text-lg font-bold">
//                 Happening Today
//               </h2>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => setOpen(false)}
//             className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
//             aria-label="Close event popup"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         {/* Event Image */}
//         {image && (
//           <div className="relative px-4 pt-4">
//             <img
//               src={image}
//               alt={title}
//               className="h-44 w-full rounded-xl object-cover"
//             />

//             {event.category && (
//               <span className="absolute bottom-3 left-7 max-w-[85%] truncate rounded-lg border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#075985] shadow-sm">
//                 {event.category}
//               </span>
//             )}
//           </div>
//         )}

//         {/* Event Details */}
//         <div className="p-5">
//           {!image && event.category && (
//             <span className="inline-flex rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
//               {event.category}
//             </span>
//           )}

//           <h3
//             id="event-popup-title"
//             className="mt-1 text-xl font-bold leading-snug tracking-tight text-slate-900"
//           >
//             {title}
//           </h3>

//           {description && (
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               {description}
//             </p>
//           )}

//           {/* Date, Time and Location */}
//           <div className="mt-4 grid grid-cols-2 gap-2.5">
//             {formattedDate && (
//               <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                 <CalendarDays
//                   size={17}
//                   className="mt-0.5 shrink-0 text-sky-700"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[11px] text-slate-500">
//                     Event Date
//                   </p>
//                   <p className="mt-0.5 text-sm font-semibold text-slate-800">
//                     {formattedDate}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {eventTime && (
//               <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                 <Clock
//                   size={17}
//                   className="mt-0.5 shrink-0 text-sky-700"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[11px] text-slate-500">
//                     Event Time
//                   </p>
//                   <p className="mt-0.5 text-sm font-semibold text-slate-800">
//                     {eventTime}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {location && (
//               <div className="col-span-2 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                 <MapPin
//                   size={17}
//                   className="mt-0.5 shrink-0 text-sky-700"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[11px] text-slate-500">
//                     Venue
//                   </p>
//                   <p className="mt-0.5 text-sm font-medium text-slate-800">
//                     {location}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {organizer && (
//               <div className="col-span-2 flex items-center gap-2 px-1 pt-1">
//                 <UserRound size={15} className="text-slate-400" />
//                 <p className="text-xs text-slate-500">
//                   Organized by{" "}
//                   <span className="font-semibold text-slate-700">
//                     {organizer}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
//             <div className="flex items-center gap-1.5 text-xs text-slate-500">
//               <Clock size={14} />
//               <span>Closes in 2 minutes</span>
//             </div>

//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               className="inline-flex items-center gap-2 rounded-xl bg-[#075985] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#064568] active:scale-[0.98]"
//             >
//               Got it
//               <ArrowUpRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   X,
//   CalendarDays,
//   Clock,
//   MapPin,
//   UserRound,
//   Sparkles,
//   MoveUpRight,
// } from "lucide-react";
// import ApiService from "../src/services/Apiservices";

// const getIndiaDate = (date) => {
//   if (!date) return "";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "";

//   return new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Kolkata",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(parsed);
// };

// export default function EventPopup() {
//   const [open, setOpen] = useState(false);

//   const {
//     data: response,
//     error,
//     isLoading,
//   } = useSWR("events", (url) => ApiService.get(url));

//   // Parse API response
//   const events = useMemo(() => {
//     const result = response?.data ?? response;

//     if (Array.isArray(result)) return result;
//     if (Array.isArray(result?.data)) return result.data;
//     if (Array.isArray(result?.events)) return result.events;
//     if (result?.event) return [result.event];

//     return [];
//   }, [response]);

//   // Today's date in India
//   const today = getIndiaDate(new Date());

//   // Get today's events
//   const todayEvents = useMemo(() => {
//     return events.filter((item) => {
//       const eventDate =
//         item.event_date ?? item.date ?? item.start_date;

//       return (
//         getIndiaDate(eventDate) === today &&
//         item.status?.toLowerCase() !== "cancelled"
//       );
//     });
//   }, [events, today]);

//   const event = todayEvents[0];

//   // Open popup when today's event is available
//   useEffect(() => {
//     if (event) {
//       setOpen(true);
//     }
//   }, [event]);

//   // Automatically close after 2 minutes
//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   // Close popup using Escape
//   useEffect(() => {
//     if (!open) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);

//   if (isLoading || error || !open || !event) {
//     return null;
//   }

//   const title = event.title ?? event.name ?? "Today's Event";

//   const description =
//     event.short_description ??
//     event.description ??
//     event.excerpt ??
//     "";

//   const image =
//     event.image ??
//     event.image_url ??
//     event.banner_image ??
//     event.banner ??
//     "";

//   const eventDate =
//     event.event_date ?? event.date ?? event.start_date ?? "";

//   const eventTime = event.event_time ?? "";
//   const location = event.location ?? "";
//   const organizer = event.organizer ?? "";
//   const category = event.category ?? "Special Event";

//   const formattedDate = eventDate
//     ? new Date(eventDate).toLocaleDateString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="event-popup-title"
//     >
//       {/* Compact Modal */}
//       <div className="relative my-auto max-h-[85dvh] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-2xl border border-white/70 bg-white shadow-2xl shadow-black/25 sm:rounded-3xl">

//         {/* Header */}
//         <div className="relative overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-4 py-4 text-white sm:px-6 sm:py-5">
//           <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

//           <div className="relative flex items-center justify-between gap-3">
//             <div className="flex min-w-0 items-center gap-3">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 sm:h-11 sm:w-11">
//                 <Sparkles size={21} />
//               </div>

//               <div className="min-w-0">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-xs">
//                     Event Announcement
//                   </p>

//                   <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
//                     TODAY
//                   </span>
//                 </div>

//                 <h2 className="mt-1 text-lg font-bold sm:text-xl">
//                   Happening Today
//                 </h2>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               aria-label="Close event popup"
//               className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 sm:h-9 sm:w-9"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2">

//           {/* Event Image */}
//           <div className="relative min-h-[200px] overflow-hidden bg-slate-100 sm:min-h-[280px] md:min-h-[350px]">
//             {image ? (
//               <img
//                 src={image}
//                 alt={title}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             ) : (
//               <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100 to-slate-200">
//                 <CalendarDays
//                   size={70}
//                   strokeWidth={1}
//                   className="text-sky-800/30"
//                 />
//               </div>
//             )}

//             {/* Image overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />

//             <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm sm:left-4 sm:top-4">
//               <CalendarDays size={13} />
//               Featured Event
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
//               <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
//                 <span className="truncate">{category}</span>
//               </span>

//               <h3 className="mt-2 break-words text-xl font-extrabold leading-tight text-white sm:text-2xl">
//                 {title}
//               </h3>

//               {location && (
//                 <p className="mt-2 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
//                   <MapPin size={15} className="shrink-0" />
//                   <span className="break-words">{location}</span>
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Event Details */}
//           <div className="flex min-w-0 flex-col p-4 sm:p-5 lg:p-6">
//             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-800">
//               <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
//                 <Sparkles size={14} />
//               </span>
//               Event Details
//             </div>

//             <h3
//               id="event-popup-title"
//               className="mt-2 break-words text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl"
//             >
//               {title}
//             </h3>

//             {description && (
//               <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
//                 {description}
//               </p>
//             )}

//             {/* Information Cards */}
//             <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
//               {formattedDate && (
//                 <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <CalendarDays size={17} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[11px] text-slate-500">
//                       Event Date
//                     </p>
//                     <p className="mt-1 break-words text-sm font-bold text-slate-800">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {eventTime && (
//                 <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <Clock size={17} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[11px] text-slate-500">
//                       Event Time
//                     </p>
//                     <p className="mt-1 break-words text-sm font-bold text-slate-800">
//                       {eventTime}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {location && (
//                 <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:col-span-2">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <MapPin size={17} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[11px] text-slate-500">
//                       Event Venue
//                     </p>
//                     <p className="mt-1 break-words text-sm font-bold text-slate-800">
//                       {location}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {organizer && (
//                 <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:col-span-2">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <UserRound size={17} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[11px] text-slate-500">
//                       Organized By
//                     </p>
//                     <p className="mt-1 break-words text-sm font-bold text-slate-800">
//                       {organizer}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="mt-auto pt-5">
//               <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
//                   <Clock size={14} className="shrink-0 text-sky-700" />
//                   Closes automatically in 2 minutes
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#075985] to-[#087EA4] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
//                 >
//                   Got it
//                   <MoveUpRight size={16} />
//                 </button>  
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   X,
//   CalendarDays,
//   Clock,
//   MapPin,
//   UserRound,
//   Sparkles,
//   MoveUpRight,
// } from "lucide-react";
// import ApiService from "../src/services/Apiservices";

// const getIndiaDate = (date) => {
//   if (!date) return "";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "";

//   return new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Kolkata",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(parsed);
// };

// export default function EventPopup() {
//   const [open, setOpen] = useState(false);

//   const {
//     data: response,
//     error,
//     isLoading,
//   } = useSWR("events", (url) => ApiService.get(url));

//   const events = useMemo(() => {
//     const result = response?.data ?? response;

//     if (Array.isArray(result)) return result;
//     if (Array.isArray(result?.data)) return result.data;
//     if (Array.isArray(result?.events)) return result.events;
//     if (result?.event) return [result.event];

//     return [];
//   }, [response]);

//   const today = getIndiaDate(new Date());

//   const todayEvents = useMemo(() => {
//     return events.filter((item) => {
//       const eventDate =
//         item.event_date ?? item.date ?? item.start_date;

//       return (
//         getIndiaDate(eventDate) === today &&
//         item.status?.toLowerCase() !== "cancelled"
//       );
//     });
//   }, [events, today]);

//   const event = todayEvents[0];

//   useEffect(() => {
//     if (event) {
//       setOpen(true);
//     }
//   }, [event]);

//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   useEffect(() => {
//     if (!open) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);

//   if (isLoading || error || !open || !event) {
//     return null;
//   }

//   const title = event.title ?? event.name ?? "Today's Event";

//   const description =
//     event.short_description ??
//     event.description ??
//     event.excerpt ??
//     "";

//   const image =
//     event.image ??
//     event.image_url ??
//     event.banner_image ??
//     event.banner ??
//     "";

//   const eventDate =
//     event.event_date ?? event.date ?? event.start_date ?? "";

//   const eventTime = event.event_time ?? "";
//   const location = event.location ?? "";
//   const organizer = event.organizer ?? "";
//   const category = event.category ?? "Special Event";

//   const formattedDate = eventDate
//     ? new Date(eventDate).toLocaleDateString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "";


    

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="event-popup-title"
//     >
//       {/* Modal - No Scrollbar */}
//       <div className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-2xl shadow-black/25 sm:rounded-3xl">

//         {/* Header */}
//         <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-4 py-3 text-white sm:px-6 sm:py-4">
//           <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

//           <div className="relative flex items-center justify-between gap-3">
//             <div className="flex min-w-0 items-center gap-3">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 sm:h-10 sm:w-10">
//                 <Sparkles size={20} />
//               </div>

//               <div className="min-w-0">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-xs">
//                     Event Announcement
//                   </p>

//                   <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
//                     TODAY
//                   </span>
//                 </div>

//                 <h2 className="mt-1 text-lg font-bold sm:text-xl">
//                   Happening Today
//                 </h2>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               aria-label="Close event popup"
//               className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 sm:h-9 sm:w-9"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Content - Fits Within Modal */}
//         <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-2">

//           {/* Left Side - Pure White Background */}
//           <div className="relative min-h-0 overflow-hidden bg-white">
//             {image ? (
//               <img
//                 src={image}
//                 alt={title}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             ) : (
//               <div className="absolute inset-0 flex items-center justify-center bg-white">
//                 <CalendarDays
//                   size={70}
//                   strokeWidth={1}
//                   className="text-sky-800/30"
//                 />
//               </div>
//             )}

//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

//             <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm sm:left-4 sm:top-4">
//               <CalendarDays size={13} />
//               Featured Event
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
//               <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
//                 <span className="truncate">{category}</span>
//               </span>

//               <h3 className="mt-2 break-words text-xl font-extrabold leading-tight text-white sm:text-2xl">
//                 {title}
//               </h3>

//               {location && (
//                 <p className="mt-2 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
//                   <MapPin size={15} className="shrink-0" />
//                   <span className="break-words">{location}</span>
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Right Side - Details Without Scrollbar */}
//           <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white p-3 sm:p-4 lg:p-5">
//             <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-800">
//               <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
//                 <Sparkles size={14} />
//               </span>
//               Event Details
//             </div>

//             <h3
//               id="event-popup-title"
//               className="mt-2 break-words text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl"
//             >
//               {title}
//             </h3>

//             {description && (
//               <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-5 text-slate-600">
//                 {description}
//               </p>
//             )}

//             {/* Information Cards */}
//             <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
//               {formattedDate && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <CalendarDays size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Date
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {eventTime && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <Clock size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Time
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {eventTime}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {location && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <MapPin size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Venue
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {location}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {organizer && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <UserRound size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Organized By
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {organizer}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="mt-auto shrink-0 pt-3">
//               <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:text-xs">
//                   <Clock size={13} className="shrink-0 text-sky-700" />
//                   Closes automatically in 2 minutes
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#075985] to-[#087EA4] px-4 py-2 text-sm font-bold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
//                 >
//                   Got it
//                   <MoveUpRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import {
//   X,
//   CalendarDays,
//   Clock,
//   MapPin,
//   UserRound,
//   Sparkles,
//   MoveUpRight,
// } from "lucide-react";
// import ApiService from "../src/services/Apiservices";

// const getIndiaDate = (date) => {
//   if (!date) return "";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "";

//   return new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Kolkata",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(parsed);
// };

// export default function EventPopup() {
//   const [open, setOpen] = useState(false);

//   const {
//     data: response,
//     error,
//     isLoading,
//   } = useSWR("events", (url) => ApiService.get(url));

//   // Parse API response
//   const events = useMemo(() => {
//     const result = response?.data ?? response;

//     if (Array.isArray(result)) return result;
//     if (Array.isArray(result?.data)) return result.data;
//     if (Array.isArray(result?.events)) return result.events;
//     if (result?.event) return [result.event];

//     return [];
//   }, [response]);

//   // Today's date in India
//   const today = getIndiaDate(new Date());

//   // Get today's events
//   const todayEvents = useMemo(() => {
//     return events.filter((item) => {
//       const eventDate =
//         item.event_date ?? item.date ?? item.start_date;

//       return (
//         getIndiaDate(eventDate) === today &&
//         item.status?.toLowerCase() !== "cancelled"
//       );
//     });
//   }, [events, today]);

//   const event = todayEvents[0];

//   // Open popup when today's event is available
//   useEffect(() => {
//     if (event) {
//       setOpen(true);
//     }
//   }, [event]);

//   // Lock background page scrolling while popup is open
//   useEffect(() => {
//     if (!open) return;

//     const body = document.body;
//     const html = document.documentElement;

//     const originalBodyOverflow = body.style.overflow;
//     const originalHtmlOverflow = html.style.overflow;
//     const originalBodyPaddingRight = body.style.paddingRight;

//     // Prevent background scrolling
//     const scrollbarWidth =
//       window.innerWidth - html.clientWidth;

//     if (scrollbarWidth > 0) {
//       const currentPadding =
//         parseFloat(window.getComputedStyle(body).paddingRight) || 0;

//       body.style.paddingRight =
//         `${currentPadding + scrollbarWidth}px`;
//     }

//     body.style.overflow = "hidden";
//     html.style.overflow = "hidden";

//     return () => {
//       body.style.overflow = originalBodyOverflow;
//       html.style.overflow = originalHtmlOverflow;
//       body.style.paddingRight = originalBodyPaddingRight;
//     };
//   }, [open]);

//   // Automatically close after 2 minutes
//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   // Close popup using Escape
//   useEffect(() => {
//     if (!open) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);

//   if (isLoading || error || !open || !event) {
//     return null;
//   }

//   const title = event.title ?? event.name ?? "Today's Event";

//   const description =
//     event.short_description ??
//     event.description ??
//     event.excerpt ??
//     "";

//   const image =
//     event.image ??
//     event.image_url ??
//     event.banner_image ??
//     event.banner ??
//     "";

//   const eventDate =
//     event.event_date ?? event.date ?? event.start_date ?? "";

//   const eventTime = event.event_time ?? "";
//   const location = event.location ?? "";
//   const organizer = event.organizer ?? "";
//   const category = event.category ?? "Special Event";

//   const formattedDate = eventDate
//     ? new Date(eventDate).toLocaleDateString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="event-popup-title"
//     >
//       {/* Modal - No Scrollbar */}
//       <div className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-2xl shadow-black/25 sm:rounded-3xl">

//         {/* Header */}
//         <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-4 py-3 text-white sm:px-6 sm:py-4">
//           <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

//           <div className="relative flex items-center justify-between gap-3">
//             <div className="flex min-w-0 items-center gap-3">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 sm:h-10 sm:w-10">
//                 <Sparkles size={20} />
//               </div>

//               <div className="min-w-0">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-xs">
//                     Event Announcement
//                   </p>

//                   <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
//                     TODAY
//                   </span>
//                 </div>

//                 <h2 className="mt-1 text-lg font-bold sm:text-xl">
//                   Happening Today
//                 </h2>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               aria-label="Close event popup"
//               className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 sm:h-9 sm:w-9"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-2">

//           {/* Left Side - White Background */}
//           <div className="relative min-h-0 overflow-hidden bg-white">
//             {image ? (
//               <img
//                 src={image}
//                 alt={title}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             ) : (
//               <div className="absolute inset-0 flex items-center justify-center bg-white">
//                 <CalendarDays
//                   size={70}
//                   strokeWidth={1}
//                   className="text-sky-800/30"
//                 />
//               </div>
//             )}

//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

//             <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm sm:left-4 sm:top-4">
//               <CalendarDays size={13} />
//               Featured Event
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
//               <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
//                 <span className="truncate">{category}</span>
//               </span>

//               <h3 className="mt-2 break-words text-xl font-extrabold leading-tight text-white sm:text-2xl">
//                 {title}
//               </h3>

//               {location && (
//                 <p className="mt-2 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
//                   <MapPin size={15} className="shrink-0" />
//                   <span className="break-words">{location}</span>
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Right Side - Event Details */}
//           <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white p-3 sm:p-4 lg:p-5">
//             <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-800">
//               <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
//                 <Sparkles size={14} />
//               </span>
//               Event Details
//             </div>

//             <h3
//               id="event-popup-title"
//               className="mt-2 break-words text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl"
//             >
//               {title}
//             </h3>

//             {description && (
//               <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-5 text-slate-600">
//                 {description}
//               </p>
//             )}

//             {/* Information Cards */}
//             <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
//               {formattedDate && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <CalendarDays size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Date
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {eventTime && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <Clock size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Time
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {eventTime}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {location && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <MapPin size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Event Venue
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {location}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {organizer && (
//                 <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                     <UserRound size={16} />
//                   </div>

//                   <div className="min-w-0 pt-0.5">
//                     <p className="text-[10px] text-slate-500">
//                       Organized By
//                     </p>
//                     <p className="mt-1 break-words text-xs font-bold text-slate-800">
//                       {organizer}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="mt-auto shrink-0 pt-3">
//               <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:text-xs">
//                   <Clock size={13} className="shrink-0 text-sky-700" />
//                   Closes automatically in 2 minutes
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#075985] to-[#087EA4] px-4 py-2 text-sm font-bold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
//                 >
//                   Got it
//                   <MoveUpRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import ApiService from "../src/services/Apiservices";

const getIndiaDate = (date) => {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(parsed);
};

export default function EventPopup() {
  const [open, setOpen] = useState(false);

  const {
    data: response,
    error,
    isLoading,
  } = useSWR("events", (url) => ApiService.get(url));

  const events = useMemo(() => {
    const result = response?.data ?? response;

    if (Array.isArray(result)) return result;
    if (Array.isArray(result?.data)) return result.data;
    if (Array.isArray(result?.events)) return result.events;
    if (result?.event) return [result.event];

    return [];
  }, [response]);

  const today = getIndiaDate(new Date());

  const todayEvents = useMemo(() => {
    return events.filter((item) => {
      const eventDate =
        item.event_date ?? item.date ?? item.start_date;

      return (
        getIndiaDate(eventDate) === today &&
        item.status?.toLowerCase() !== "cancelled"
      );
    });
  }, [events, today]);

  const event = todayEvents[0];

  useEffect(() => {
    if (event) {
      setOpen(true);
    }
  }, [event]);

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;

    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - html.clientWidth;

    if (scrollbarWidth > 0) {
      const currentPadding =
        parseFloat(window.getComputedStyle(body).paddingRight) || 0;

      body.style.paddingRight =
        `${currentPadding + scrollbarWidth}px`;
    }

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
      body.style.paddingRight = originalBodyPaddingRight;
    };
  }, [open]);

  // Auto close after 2 minutes
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, [open]);

  // Close using Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (isLoading || error || !event) {
    return null;
  }

  const title = event.title ?? event.name ?? "Today's Event";

  const description =
    event.short_description ??
    event.description ??
    event.excerpt ??
    "";

  const image =
    event.image ??
    event.image_url ??
    event.banner_image ??
    event.banner ??
    "";

  const eventDate =
    event.event_date ?? event.date ?? event.start_date ?? "";

  const eventTime = event.event_time ?? "";
  const location = event.location ?? "";
  const organizer = event.organizer ?? "";
  const category = event.category ?? "Special Event";

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="event-popup-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-popup-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Animated Modal */}
          <motion.div
            className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-2xl shadow-black/25 sm:rounded-3xl"
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 24,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.8,
            }}
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-4 py-3 text-white sm:px-6 sm:py-4">
              <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 sm:h-10 sm:w-10">
                    <Sparkles size={20} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-xs">
                        Event Announcement
                      </p>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        TODAY
                      </span>
                    </div>

                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      Happening Today
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close event popup"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 sm:h-9 sm:w-9"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-2">
              {/* Left Side */}
              <div className="relative min-h-0 overflow-hidden bg-white">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <CalendarDays
                      size={70}
                      strokeWidth={1}
                      className="text-sky-800/30"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm sm:left-4 sm:top-4">
                  <CalendarDays size={13} />
                  Featured Event
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <span className="truncate">{category}</span>
                  </span>

                  <h3 className="mt-2 break-words text-xl font-extrabold leading-tight text-white sm:text-2xl">
                    {title}
                  </h3>

                  {location && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
                      <MapPin size={15} className="shrink-0" />
                      <span className="break-words">{location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white p-3 sm:p-4 lg:p-5">
                <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
                    <Sparkles size={14} />
                  </span>
                  Event Details
                </div>

                <h3
                  id="event-popup-title"
                  className="mt-2 break-words text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl"
                >
                  {title}
                </h3>

                {description && (
                  <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-5 text-slate-600">
                    {description}
                  </p>
                )}

                {/* Information Cards */}
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {formattedDate && (
                    <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <CalendarDays size={16} />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] text-slate-500">
                          Event Date
                        </p>
                        <p className="mt-1 break-words text-xs font-bold text-slate-800">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                  )}

                  {eventTime && (
                    <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <Clock size={16} />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] text-slate-500">
                          Event Time
                        </p>
                        <p className="mt-1 break-words text-xs font-bold text-slate-800">
                          {eventTime}
                        </p>
                      </div>
                    </div>
                  )}

                  {location && (
                    <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <MapPin size={16} />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] text-slate-500">
                          Event Venue
                        </p>
                        <p className="mt-1 break-words text-xs font-bold text-slate-800">
                          {location}
                        </p>
                      </div>
                    </div>
                  )}

                  {organizer && (
                    <div className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-100 bg-white p-2.5 sm:col-span-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <UserRound size={16} />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] text-slate-500">
                          Organized By
                        </p>
                        <p className="mt-1 break-words text-xs font-bold text-slate-800">
                          {organizer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-auto shrink-0 pt-3">
                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:text-xs">
                      <Clock size={13} className="shrink-0 text-sky-700" />
                      Closes automatically in 2 minutes
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#075985] to-[#087EA4] px-4 py-2 text-sm font-bold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                    >
                      Got it
                      <MoveUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



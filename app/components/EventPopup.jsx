
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
    if (event) setOpen(true);
  }, [event]);

  // Lock background scrolling
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;

    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

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
    }, 120000);

    return () => clearTimeout(timer);
  }, [open]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (isLoading || error || !event) return null;

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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950/60 p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-popup-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Responsive Modal */}
          <motion.div
            className="relative flex h-[94dvh] max-h-[760px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-2xl sm:h-[90dvh] sm:rounded-3xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 26,
            }}
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-3 py-2.5 text-white sm:px-5 sm:py-3">
              <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                    <Sparkles size={19} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-100 sm:text-xs">
                        Event Announcement
                      </p>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        TODAY
                      </span>
                    </div>

                    <h2 className="mt-0.5 text-base font-bold sm:text-lg">
                      Happening Today
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close event popup"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(145px,27dvh)_minmax(0,1fr)] overflow-hidden md:grid-cols-2 md:grid-rows-1">

              {/* Image Section */}
              <div className="relative min-h-0 min-w-0 overflow-hidden bg-slate-100 md:h-full">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                    <CalendarDays
                      size={60}
                      strokeWidth={1}
                      className="text-sky-800/30"
                    />
                  </div>
                )}

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

                {/* Featured Label */}
                <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/30 px-2.5 py-1 text-[10px] font-medium text-white sm:left-3 sm:top-3">
                  <CalendarDays size={12} />
                  Featured Event
                </div>

                {/* Image Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2 py-1 text-[10px] font-semibold text-white">
                    <span className="truncate">{category}</span>
                  </span>

                  <h3 className="mt-1.5 line-clamp-2 break-words text-lg font-extrabold leading-tight text-white sm:text-xl">
                    {title}
                  </h3>

                  {location && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/90">
                      <MapPin size={13} className="shrink-0" />
                      <span className="line-clamp-1 break-words">
                        {location}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white p-3 sm:p-4">
                <div className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-800 sm:text-xs">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
                    <Sparkles size={14} />
                  </span>
                  Event Details
                </div>

                <h3
                  id="event-popup-title"
                  className="mt-1.5 line-clamp-2 shrink-0 break-words text-base font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl"
                >
                  {title}
                </h3>

                {description && (
                  <p className="mt-1.5 line-clamp-2 shrink-0 whitespace-pre-line text-xs leading-4 text-slate-600 sm:text-sm sm:leading-5">
                    {description}
                  </p>
                )}

                {/* Event Information */}
                <div className="mt-2 grid min-h-0 grid-cols-2 content-start gap-2 overflow-hidden">
                  {formattedDate && (
                    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <CalendarDays size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] text-slate-500 sm:text-[10px]">
                          Event Date
                        </p>
                        <p className="mt-0.5 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                  )}

                  {eventTime && (
                    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <Clock size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] text-slate-500 sm:text-[10px]">
                          Event Time
                        </p>
                        <p className="mt-0.5 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
                          {eventTime}
                        </p>
                      </div>
                    </div>
                  )}

                  {location && (
                    <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <MapPin size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] text-slate-500 sm:text-[10px]">
                          Event Venue
                        </p>
                        <p className="mt-0.5 line-clamp-2 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
                          {location}
                        </p>
                      </div>
                    </div>
                  )}

                  {organizer && (
                    <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                        <UserRound size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] text-slate-500 sm:text-[10px]">
                          Organized By
                        </p>
                        <p className="mt-0.5 line-clamp-2 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
                          {organizer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-auto shrink-0 pt-2">
                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <Clock size={12} className="shrink-0 text-sky-700" />
                      Closes automatically in 2 minutes
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#075985] to-[#087EA4] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:shadow-lg active:scale-[0.98] sm:text-sm"
                    >
                      Got it
                      <MoveUpRight size={15} />
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



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useSWR from "swr";
// import { AnimatePresence, motion } from "framer-motion";
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
//     if (event) setOpen(true);
//   }, [event]);

//   // Lock background scrolling while modal is open
//   useEffect(() => {
//     if (!open) return;

//     const body = document.body;
//     const html = document.documentElement;

//     const originalBodyOverflow = body.style.overflow;
//     const originalHtmlOverflow = html.style.overflow;
//     const originalBodyPaddingRight = body.style.paddingRight;

//     const scrollbarWidth = window.innerWidth - html.clientWidth;

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

//   // Auto close after 2 minutes
//   useEffect(() => {
//     if (!open) return;

//     const timer = setTimeout(() => {
//       setOpen(false);
//     }, 120000);

//     return () => clearTimeout(timer);
//   }, [open]);

//   // Close with Escape
//   useEffect(() => {
//     if (!open) return;

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);

//   if (isLoading || error || !event) return null;

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
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           key="event-popup-overlay"
//           className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950/60 p-2 sm:p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="event-popup-title"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.25 }}
//         >
//           {/* Responsive Modal */}
//           <motion.div
//             className="relative flex h-[94dvh] max-h-[760px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-2xl sm:h-[90dvh] sm:rounded-3xl"
//             initial={{ opacity: 0, scale: 0.96, y: 16 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.97, y: 10 }}
//             transition={{
//               type: "spring",
//               stiffness: 260,
//               damping: 26,
//             }}
//           >
//             {/* Header */}
//             <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#062F4F] via-[#075985] to-[#087EA4] px-3 py-2.5 text-white sm:px-5 sm:py-3">
//               <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[18px] border-white/5" />

//               <div className="relative flex items-center justify-between gap-3">
//                 <div className="flex min-w-0 items-center gap-2.5">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
//                     <Sparkles size={19} />
//                   </div>

//                   <div className="min-w-0">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-100 sm:text-xs">
//                         Event Announcement
//                       </p>

//                       <span className="inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] font-bold text-emerald-100">
//                         <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
//                         TODAY
//                       </span>
//                     </div>

//                     <h2 className="mt-0.5 text-base font-bold sm:text-lg">
//                       Happening Today
//                     </h2>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   aria-label="Close event popup"
//                   className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(145px,27dvh)_minmax(0,1fr)] overflow-hidden md:grid-cols-2 md:grid-rows-1">
//               {/* Image Section */}
//               <div className="relative min-h-0 min-w-0 overflow-hidden bg-slate-100 md:h-full">
//                 {image ? (
//                   <>
//                     {/* Background fills empty spaces */}
//                     <img
//                       src={image}
//                       alt=""
//                       aria-hidden="true"
//                       className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-xl opacity-40"
//                     />

//                     {/* Main image remains uncropped */}
//                     <img
//                       src={image}
//                       alt={title}
//                       className="absolute inset-0 z-[1] h-full w-full object-contain object-center"
//                     />
//                   </>
//                 ) : (
//                   <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
//                     <CalendarDays
//                       size={60}
//                       strokeWidth={1}
//                       className="text-sky-800/30"
//                     />
//                   </div>
//                 )}

//                 {/* Caption gradient */}
//                 <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/10" />

//                 <div className="absolute left-2 top-2 z-[3] flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/30 px-2.5 py-1 text-[10px] font-medium text-white sm:left-3 sm:top-3">
//                   <CalendarDays size={12} />
//                   Featured Event
//                 </div>

//                 <div className="absolute inset-x-0 bottom-0 z-[3] p-3 sm:p-4">
//                   <span className="inline-flex max-w-full rounded-lg border border-white/25 bg-white/15 px-2 py-1 text-[10px] font-semibold text-white">
//                     <span className="truncate">{category}</span>
//                   </span>

//                   <h3 className="mt-1.5 line-clamp-2 break-words text-lg font-extrabold leading-tight text-white sm:text-xl">
//                     {title}
//                   </h3>

//                   {location && (
//                     <p className="mt-1 flex items-center gap-1.5 text-xs text-white/90">
//                       <MapPin size={13} className="shrink-0" />
//                       <span className="line-clamp-1 break-words">
//                         {location}
//                       </span>
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Details Section */}
//               <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-white p-3 sm:p-4">
//                 <div className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-800 sm:text-xs">
//                   <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50">
//                     <Sparkles size={14} />
//                   </span>
//                   Event Details
//                 </div>

//                 <h3
//                   id="event-popup-title"
//                   className="mt-1.5 line-clamp-2 shrink-0 break-words text-base font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl"
//                 >
//                   {title}
//                 </h3>

//                 {description && (
//                   <p className="mt-1.5 line-clamp-2 shrink-0 whitespace-pre-line text-xs leading-4 text-slate-600 sm:text-sm sm:leading-5">
//                     {description}
//                   </p>
//                 )}

//                 {/* Event Information */}
//                 <div className="mt-2 grid min-h-0 grid-cols-2 content-start gap-2 overflow-hidden">
//                   {formattedDate && (
//                     <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
//                       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                         <CalendarDays size={14} />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-[9px] text-slate-500 sm:text-[10px]">
//                           Event Date
//                         </p>
//                         <p className="mt-0.5 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
//                           {formattedDate}
//                         </p>
//                       </div>
//                     </div>
//                   )}

//                   {eventTime && (
//                     <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
//                       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                         <Clock size={14} />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-[9px] text-slate-500 sm:text-[10px]">
//                           Event Time
//                         </p>
//                         <p className="mt-0.5 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
//                           {eventTime}
//                         </p>
//                       </div>
//                     </div>
//                   )}

//                   {location && (
//                     <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
//                       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                         <MapPin size={14} />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-[9px] text-slate-500 sm:text-[10px]">
//                           Event Venue
//                         </p>
//                         <p className="mt-0.5 line-clamp-2 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
//                           {location}
//                         </p>
//                       </div>
//                     </div>
//                   )}

//                   {organizer && (
//                     <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/70 p-2">
//                       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
//                         <UserRound size={14} />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-[9px] text-slate-500 sm:text-[10px]">
//                           Organized By
//                         </p>
//                         <p className="mt-0.5 line-clamp-2 break-words text-[11px] font-bold text-slate-800 sm:text-xs">
//                           {organizer}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-auto shrink-0 pt-2">
//                   <div className="flex flex-col gap-2 border-t border-slate-100 pt-2 sm:flex-row sm:items-center sm:justify-between">
//                     <p className="flex items-center gap-1.5 text-[10px] text-slate-500">
//                       <Clock size={12} className="shrink-0 text-sky-700" />
//                       Closes automatically in 2 minutes
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() => setOpen(false)}
//                       className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#075985] to-[#087EA4] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:shadow-lg active:scale-[0.98] sm:text-sm"
//                     >
//                       Got it
//                       <MoveUpRight size={15} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

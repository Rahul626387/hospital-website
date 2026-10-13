
// "use client";

// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Camera,
//   HeartPulse,
//   Images,
//   Maximize2,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles,
//   RefreshCw,
// } from "lucide-react";

// /* =========================================================
//    HOSPITAL GALLERY JSON DATA
// ========================================================= */

// const galleryData = [
//   {
//     id: 1,
//     title: "Modern Hospital Building",
//     category: "Infrastructure",
//     description: "A modern healthcare environment designed for comfort.",
//     image:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85",
//     size: "large",
//   },
//   {
//     id: 2,
//     title: "Expert Medical Team",
//     category: "Doctors",
//     description: "Experienced medical professionals caring for every patient.",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 3,
//     title: "Advanced Patient Care",
//     category: "Patient Care",
//     description: "Personalized care with compassion and dedication.",
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 4,
//     title: "Advanced Medical Technology",
//     category: "Technology",
//     description: "Modern medical equipment supporting quality treatment.",
//     image:
//       "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=85",
//     size: "normal",
//   },
//   {
//     id: 5,
//     title: "Emergency Care",
//     category: "Patient Care",
//     description: "Timely medical assistance when every second matters.",
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
//     size: "large",
//   },
//   {
//     id: 6,
//     title: "Hospital Interior",
//     category: "Infrastructure",
//     description: "Clean, welcoming spaces for patients and families.",
//     image:
//       "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 7,
//     title: "Medical Consultation",
//     category: "Doctors",
//     description: "Professional consultation focused on patient wellbeing.",
//     image:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 8,
//     title: "Diagnostic Services",
//     category: "Technology",
//     description: "Diagnostic facilities for informed medical decisions.",
//     image:
//       "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
//     size: "large",
//   },
//   {
//     id: 9,
//     title: "Healthcare Awareness",
//     category: "Events",
//     description: "Promoting awareness, prevention and healthier living.",
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 10,
//     title: "Patient Recovery",
//     category: "Patient Care",
//     description: "Supporting recovery with comfort and compassion.",
//     image:
//       "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 11,
//     title: "Medical Professionals",
//     category: "Doctors",
//     description: "A dedicated team committed to better health outcomes.",
//     image:
//       "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85",
//     size: "normal",
//   },
//   {
//     id: 12,
//     title: "Healthcare Community",
//     category: "Events",
//     description: "Building a healthier community through outreach.",
//     image:
//       "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85",
//     size: "large",
//   },
// ];

// const categories = [
//   "All",
//   "Infrastructure",
//   "Doctors",
//   "Patient Care",
//   "Technology",
//   "Events",
// ];

// /* =========================================================
//    RANDOM SHUFFLE
// ========================================================= */

// const shuffleImages = (items) => {
//   const result = [...items];

//   for (let i = result.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [result[i], result[j]] = [result[j], result[i]];
//   }

//   return result;
// };

// /* =========================================================
//    GALLERY PAGE
// ========================================================= */

// export default function Gallerypage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   // Randomize gallery order on initial render and refresh.
//   const randomizedImages = useMemo(
//     () => shuffleImages(galleryData),
//     [refreshKey]
//   );

//   const filteredImages =
//     activeCategory === "All"
//       ? randomizedImages
//       : randomizedImages.filter(
//           (item) => item.category === activeCategory
//         );

//   const selectedIndex = filteredImages.findIndex(
//     (item) => item.id === selectedImage?.id
//   );

//   const showPrevious = () => {
//     if (!filteredImages.length) return;

//     const index =
//       (selectedIndex - 1 + filteredImages.length) %
//       filteredImages.length;

//     setSelectedImage(filteredImages[index]);
//   };

//   const showNext = () => {
//     if (!filteredImages.length) return;

//     const index = (selectedIndex + 1) % filteredImages.length;
//     setSelectedImage(filteredImages[index]);
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-slate-900">

//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}

//       <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#052D46] pt-24 text-white md:min-h-[520px]">

//         {/* Background image */}
//         <div className="absolute inset-0 -z-20">
//           <img
//             src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85"
//             alt="Modern hospital environment"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03253B]/95 via-[#063C57]/85 to-[#087C8C]/55" />

//         {/* Decorative shapes */}
//         <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10" />
//         <div className="pointer-events-none absolute -right-12 top-24 h-60 w-60 rounded-full border border-white/10" />
//         <div className="pointer-events-none absolute bottom-0 right-[25%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

//         <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 backdrop-blur-md">
//               <Sparkles size={16} className="text-cyan-300" />
//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
//                 Moments of Care
//               </span>
//             </div>

//             <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               A Closer Look at
//               <span className="mt-2 block text-cyan-300">
//                 Exceptional Care.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
//               Explore our hospital, dedicated medical professionals,
//               advanced facilities and the compassionate moments that
//               make every patient's journey special.
//             </p>

//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("hospital-gallery")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#052D46] shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-300"
//               >
//                 Explore Gallery
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>

//               <div className="flex items-center gap-3 text-sm text-white/80">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
//                   <Camera size={18} />
//                 </div>
//                 <span>Our world, through pictures</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Hero image composition */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.94, x: 20 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             className="relative mx-auto hidden w-full max-w-md lg:block"
//           >
//             <div className="absolute -inset-4 rounded-[2rem] border border-white/15" />

//             <div className="relative h-[340px] overflow-hidden rounded-[1.7rem] border border-white/20 shadow-2xl">
//               <img
//                 src={galleryData[1].image}
//                 alt={galleryData[1].title}
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#03253B]/90 via-transparent to-transparent" />

//               <div className="absolute bottom-0 left-0 right-0 p-7">
//                 <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-300/20 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-md">
//                   <HeartPulse size={14} />
//                   Compassion in Every Step
//                 </div>

//                 <h2 className="text-2xl font-bold">
//                   Care that makes a difference
//                 </h2>
//                 <p className="mt-2 text-sm text-white/75">
//                   People, technology and healing together.
//                 </p>
//               </div>
//             </div>

//             <div className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-slate-900 shadow-xl">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
//                 <Images size={23} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">{galleryData.length}+</p>
//                 <p className="text-xs text-slate-500">
//                   Gallery moments
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           GALLERY SECTION
//       ===================================================== */}

//       <section
//         id="hospital-gallery"
//         className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12"
//       >
//         <div className="mx-auto max-w-7xl">

//           {/* Section heading */}
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
//               <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
//                 <span className="h-0.5 w-8 bg-cyan-600" />
//                 Our Gallery
//               </div>

//               <h2 className="text-3xl font-bold tracking-tight text-[#082F49] sm:text-4xl">
//                 Inside Our Hospital
//               </h2>

//               <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
//                 Discover the people, facilities and experiences that
//                 reflect our commitment to quality healthcare.
//               </p>
//             </div>

//             <button
//               onClick={() => setRefreshKey((prev) => prev + 1)}
//               className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
//             >
//               <RefreshCw size={16} />
//               Shuffle Gallery
//             </button>
//           </div>

//           {/* Category filters */}
//           <div className="mt-9 flex gap-2 overflow-x-auto pb-3">
//             {categories.map((category) => {
//               const isActive = activeCategory === category;

//               return (
//                 <button
//                   key={category}
//                   onClick={() => {
//                     setActiveCategory(category);
//                     setSelectedImage(null);
//                   }}
//                   className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
//                     isActive
//                       ? "bg-[#063B55] text-white shadow-md"
//                       : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-500 hover:text-cyan-700"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Image count */}
//           <div className="mb-6 mt-5 flex items-center justify-between">
//             <p className="text-sm text-slate-500">
//               Showing{" "}
//               <span className="font-bold text-slate-800">
//                 {filteredImages.length}
//               </span>{" "}
//               {filteredImages.length === 1 ? "image" : "images"}
//             </p>
//             <span className="hidden text-xs text-slate-400 sm:block">
//               Click any image to explore
//             </span>
//           </div>

//           {/* Gallery grid */}
//           <motion.div
//             layout
//             className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredImages.map((item, index) => (
//                 <motion.article
//                   layout
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.96 }}
//                   transition={{
//                     duration: 0.35,
//                     delay: Math.min(index * 0.035, 0.2),
//                   }}
//                   onClick={() => setSelectedImage(item)}
//                   className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
//                     item.size === "large" ? "lg:row-span-1" : ""
//                   }`}
//                 >
//                   <div className="relative h-[270px] overflow-hidden sm:h-[300px]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       loading="lazy"
//                       className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#041E30]/90 via-[#041E30]/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

//                     <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#052D46]/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
//                       {item.category}
//                     </span>

//                     <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white/90 text-[#063B55] opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                       <Maximize2 size={18} />
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
//                       <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan-300">
//                         Hospital Moments
//                       </p>

//                       <h3 className="text-xl font-bold text-white">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {filteredImages.length === 0 && (
//             <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
//               <Images className="mx-auto mb-3 text-slate-400" size={35} />
//               <p className="font-semibold text-slate-700">
//                 No images available in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =====================================================
//           CALL TO ACTION
//       ===================================================== */}

//       <section className="px-5 py-16 sm:px-8 lg:px-12">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#052D46] via-[#07516B] to-[#087F8C] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
//           <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
//           <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />

//           <HeartPulse className="mx-auto mb-5 text-cyan-300" size={38} />

//           <h2 className="text-3xl font-bold sm:text-4xl">
//             Your Health, Our Commitment
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
//             Behind every picture is our promise to provide compassionate
//             care, modern treatment and a better healthcare experience.
//           </p>

//           <button
//             onClick={() =>
//               document
//                 .getElementById("hospital-gallery")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#063B55] transition hover:bg-cyan-50"
//           >
//             View Our Moments
//             <ArrowRight size={17} />
//           </button>
//         </div>
//       </section>

//       {/* =====================================================
//           LIGHTBOX MODAL
//       ===================================================== */}

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             key="lightbox"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020D16]/95 p-4 backdrop-blur-md sm:p-8"
//           >
//             <button
//               aria-label="Close image preview"
//               onClick={() => setSelectedImage(null)}
//               className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
//             >
//               <X size={23} />
//             </button>

//             <button
//               aria-label="Previous image"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showPrevious();
//               }}
//               className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
//             >
//               <ChevronLeft size={25} />
//             </button>

//             <motion.div
//               key={selectedImage.id}
//               initial={{ opacity: 0, scale: 0.96, y: 10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               onClick={(event) => event.stopPropagation()}
//               className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#071B29] shadow-2xl"
//             >
//               <div className="flex max-h-[72vh] items-center justify-center bg-black/20">
//                 <img
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   className="max-h-[72vh] w-full object-contain"
//                 />
//               </div>

//               <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
//                 <div>
//                   <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
//                     {selectedImage.category}
//                   </span>
//                   <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
//                     {selectedImage.title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-slate-400">
//                     {selectedImage.description}
//                   </p>
//                 </div>

//                 <span className="shrink-0 text-sm text-slate-400">
//                   {selectedIndex + 1} / {filteredImages.length}
//                 </span>
//               </div>
//             </motion.div>

//             <button
//               aria-label="Next image"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showNext();
//               }}
//               className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
//             >
//               <ChevronRight size={25} />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  Search,
  X,
} from "lucide-react";

/* =========================================================
   GALLERY DATA
========================================================= */

const galleryData = [
  {
    id: 1,
    title: "Advanced Hospital Infrastructure",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Our Expert Doctors",
    category: "Doctors",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Patient Care Services",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Modern Medical Technology",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Emergency Department",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Comfortable Patient Rooms",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Dedicated Medical Team",
    category: "Doctors",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Advanced Diagnostics",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Healthcare Awareness",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 10,
    title: "A Healing Environment",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 11,
    title: "Medical Consultation",
    category: "Doctors",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 12,
    title: "Compassionate Healthcare",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02974c8a33?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Infrastructure",
  "Doctors",
  "Patient Care",
  "Technology",
  "Events",
];

/* =========================================================
   SHUFFLE HELPER
========================================================= */

const shuffleArray = (array) => {
  const items = [...array];

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
};

/* =========================================================
   GALLERY PAGE
========================================================= */

export default function Gallerypage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // IMPORTANT: Stable initial state for SSR hydration.
  const [images, setImages] = useState(galleryData);

  const [selectedImage, setSelectedImage] = useState(null);

  /* -------------------------------------------------------
     FILTER IMAGES
  ------------------------------------------------------- */

  const filteredImages = images.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;

    const normalizedSearch = search.trim().toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.category.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  const activeIndex = filteredImages.findIndex(
    (item) => item.id === selectedImage?.id
  );

  /* -------------------------------------------------------
     LIGHTBOX NAVIGATION
  ------------------------------------------------------- */

  const navigateImage = (direction) => {
    if (!filteredImages.length) return;

    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage?.id
    );

    const safeIndex = currentIndex < 0 ? 0 : currentIndex;

    const nextIndex =
      (safeIndex + direction + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  /* -------------------------------------------------------
     CLOSE LIGHTBOX WITH ESCAPE
     PREVIOUS / NEXT WITH ARROW KEYS
  ------------------------------------------------------- */

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        navigateImage(-1);
      }

      if (event.key === "ArrowRight") {
        navigateImage(1);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage, filteredImages]);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#073B5C] text-white">

        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=2000&q=85"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062F4A]/95 via-[#064A68]/90 to-[#087F91]/65" />

        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-5 -top-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto flex min-h-[270px] max-w-7xl items-center px-5 py-12 sm:px-8 md:min-h-[300px] lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              <span className="h-0.5 w-8 bg-cyan-300" />
              Our Gallery
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
              Moments of Care,
              <span className="block text-cyan-300">
                Stories of Healing.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Explore our hospital, medical experts and advanced
              facilities through the moments that reflect our
              commitment to exceptional healthcare.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/90">
              <Camera size={19} className="text-cyan-300" />
              <span>
                Discover our hospital through pictures
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          GALLERY CONTENT
      ===================================================== */}

      <section
        id="gallery"
        className="bg-[#F7FAFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                A Glimpse Inside
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#073B5C] sm:text-4xl">
                Explore Our Gallery
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                From modern infrastructure to compassionate care,
                discover what makes our healthcare experience special.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Images size={19} className="text-cyan-700" />
              {filteredImages.length} Photos
            </div>
          </div>

          {/* FILTERS AND SEARCH */}

          <div className="mt-8 flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                    category === item
                      ? "bg-[#087E8B] text-white shadow-md shadow-cyan-900/15"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-600 hover:text-cyan-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-2">

              <div className="relative min-w-0 flex-1 lg:w-56 lg:flex-none">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search photos..."
                  aria-label="Search gallery photos"
                  className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <button
                type="button"
                onClick={() => setImages(shuffleArray(galleryData))}
                title="Shuffle gallery"
                aria-label="Shuffle gallery"
                className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition hover:border-cyan-600 hover:text-cyan-700"
              >
                <span className="hidden sm:inline">Shuffle</span>
                <span className="text-lg sm:hidden">↻</span>
              </button>
            </div>
          </div>

          {/* GALLERY CARDS */}

          <motion.div
            layout
            className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.035, 0.18),
                  }}
                  onClick={() => setSelectedImage(item)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      setSelectedImage(item);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title}`}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-slate-100 bg-white text-left shadow-[0_3px_14px_rgba(7,59,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(7,59,92,0.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                >
                  <div className="relative h-[230px] overflow-hidden sm:h-[215px] lg:h-[225px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#062F4A]/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#063B5C]/80 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md sm:text-xs">
                      {item.category}
                    </span>

                    <button
                      type="button"
                      aria-label={`Preview ${item.title}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedImage(item);
                      }}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#073B5C] opacity-100 shadow-lg transition-all hover:bg-cyan-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#073B5C] transition-colors group-hover:text-cyan-700 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs text-slate-500">
                        Hospital Gallery
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition-all group-hover:bg-cyan-700 group-hover:text-white">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}

          {filteredImages.length === 0 && (
            <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
              <Images
                size={36}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-4 font-bold text-slate-800">
                No photos found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another category or search term.
              </p>

              <button
                type="button"
                onClick={() => {
                  setCategory("All");
                  setSearch("");
                }}
                className="mt-4 rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-800"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#021523]/95 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                navigateImage(-1);
              }}
              className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-700 sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={25} />
            </button>

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#082C42] shadow-2xl"
            >
              <div className="flex max-h-[72vh] items-center justify-center bg-black/20">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    {selectedImage.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300">
                  {activeIndex >= 0 ? activeIndex + 1 : 1} /{" "}
                  {filteredImages.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                navigateImage(1);
              }}
              className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-700 sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowRight,
//   Stethoscope,
//   HeartPulse,
//   Brain,
//   Bone,
//   Baby,
// } from "lucide-react";

// const services = [
//   {
//     name: "Cardiology",
//     description: "Complete heart care",
//     icon: HeartPulse,
//     href: "/services/cardiology",
//   },
//   {
//     name: "Neurology",
//     description: "Advanced brain care",
//     icon: Brain,
//     href: "/services/neurology",
//   },
//   {
//     name: "Orthopedics",
//     description: "Bone & joint care",
//     icon: Bone,
//     href: "/services/orthopedics",
//   },
//   {
//     name: "Pediatrics",
//     description: "Specialized child care",
//     icon: Baby,
//     href: "/services/pediatrics",
//   },
// ];

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Doctors", href: "/doctors" },
//   { name: "Contact Us", href: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setMobileMenu(false);
//     setServicesOpen(false);
//   }, [pathname]);

//   const isServiceActive = pathname.startsWith("/services");

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full">
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`transition-all duration-300 ${
//           isScrolled
//             ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl"
//             : "bg-white"
//         }`}
//       >
//         <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* LOGO */}
//           <Link
//             href="/"
//             className="group flex items-center gap-3"
//             onClick={() => setMobileMenu(false)}
//           >
//             {/* Temporary Random Logo */}
//             <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
//               <Stethoscope className="h-6 w-6 text-white" strokeWidth={2.5} />

//               <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/20" />
//             </div>

//             <div className="flex flex-col leading-none">
//               <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//                 Baderia Metro
//               </span>

//               <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 sm:text-xs">
//                 Prime Hospital
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden items-center gap-1 lg:flex">
//             {navItems.map((item) => {
//               const isActive =
//                 item.dropdown
//                   ? isServiceActive
//                   : pathname === item.href;

//               if (item.dropdown) {
//                 return (
//                   <div
//                     key={item.name}
//                     className="relative"
//                     onMouseEnter={() => setServicesOpen(true)}
//                     onMouseLeave={() => setServicesOpen(false)}
//                   >
//                     <Link
//                       href={item.href}
//                       className={`group relative flex items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
//                         isActive
//                           ? "text-sky-600"
//                           : "text-slate-600 hover:text-sky-600"
//                       }`}
//                     >
//                       {item.name}

//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform duration-300 ${
//                           servicesOpen ? "rotate-180" : ""
//                         }`}
//                       />

//                       <span
//                         className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-sky-500 transition-transform duration-300 ${
//                           isActive
//                             ? "scale-x-100"
//                             : "scale-x-0 group-hover:scale-x-100"
//                         }`}
//                       />
//                     </Link>

//                     {/* SERVICES DROPDOWN */}
//                     <AnimatePresence>
//                       {servicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 8 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute left-0 top-full mt-1 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10"
//                         >
//                           <div className="border-b border-slate-100 px-3 py-3">
//                             <p className="text-sm font-bold text-slate-900">
//                               Our Departments
//                             </p>

//                             <p className="mt-1 text-xs text-slate-500">
//                               Specialized healthcare services
//                             </p>
//                           </div>

//                           <div className="py-2">
//                             {services.map((service) => {
//                               const Icon = service.icon;

//                               return (
//                                 <Link
//                                   key={service.name}
//                                   href={service.href}
//                                   className="group/item flex items-center gap-3 rounded-xl p-3 transition hover:bg-sky-50"
//                                 >
//                                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover/item:bg-sky-600 group-hover/item:text-white">
//                                     <Icon className="h-5 w-5" />
//                                   </div>

//                                   <div className="min-w-0">
//                                     <p className="text-sm font-semibold text-slate-800">
//                                       {service.name}
//                                     </p>

//                                     <p className="mt-0.5 text-xs text-slate-500">
//                                       {service.description}
//                                     </p>
//                                   </div>
//                                 </Link>
//                               );
//                             })}
//                           </div>

//                           <Link
//                             href="/services"
//                             className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-600 hover:text-white"
//                           >
//                             View All Services
//                             <ArrowRight className="h-4 w-4" />
//                           </Link>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`group relative rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
//                     isActive
//                       ? "text-sky-600"
//                       : "text-slate-600 hover:text-sky-600"
//                   }`}
//                 >
//                   {item.name}

//                   <span
//                     className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-sky-500 transition-transform duration-300 ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* APPOINTMENT BUTTON */}
//           <div className="hidden lg:block">
//             <Link
//               href="/appointment"
//               className="group flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-500/30"
//             >
//               Book Appointment

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             type="button"
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:text-sky-600 lg:hidden"
//             aria-label="Toggle menu"
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               {mobileMenu ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                 >
//                   <X className="h-5 w-5" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                 >
//                   <Menu className="h-5 w-5" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {mobileMenu && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
//             >
//               <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
//                 {navItems.map((item) => {
//                   const isActive =
//                     item.dropdown
//                       ? isServiceActive
//                       : pathname === item.href;

//                   if (item.dropdown) {
//                     return (
//                       <div key={item.name}>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setMobileServicesOpen(!mobileServicesOpen)
//                           }
//                           className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
//                             isActive
//                               ? "bg-sky-50 text-sky-600"
//                               : "text-slate-700 hover:bg-slate-50"
//                           }`}
//                         >
//                           {item.name}

//                           <ChevronDown
//                             className={`h-4 w-4 transition-transform duration-300 ${
//                               mobileServicesOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         <AnimatePresence>
//                           {mobileServicesOpen && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden"
//                             >
//                               <div className="ml-3 space-y-1 border-l border-slate-200 py-2 pl-3">
//                                 {services.map((service) => (
//                                   <Link
//                                     key={service.name}
//                                     href={service.href}
//                                     className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
//                                     onClick={() => setMobileMenu(false)}
//                                   >
//                                     {service.name}
//                                   </Link>
//                                 ))}

//                                 <Link
//                                   href="/services"
//                                   className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-sky-600"
//                                   onClick={() => setMobileMenu(false)}
//                                 >
//                                   View All Services →
//                                 </Link>
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   }

//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={() => setMobileMenu(false)}
//                       className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
//                         isActive
//                           ? "bg-sky-50 text-sky-600"
//                           : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   );
//                 })}

//                 <Link
//                   href="/appointment"
//                   onClick={() => setMobileMenu(false)}
//                   className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-700"
//                 >
//                   Book Appointment
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowRight,
//   Stethoscope,
//   HeartPulse,
//   Brain,
//   Bone,
//   Baby,
//   Phone,
//   Clock3,
//   MapPin,
//   LogIn,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa6";

// const services = [
//   {
//     name: "Cardiology",
//     description: "Complete heart care",
//     icon: HeartPulse,
//     href: "/services/cardiology",
//   },
//   {
//     name: "Neurology",
//     description: "Advanced brain care",
//     icon: Brain,
//     href: "/services/neurology",
//   },
//   {
//     name: "Orthopedics",
//     description: "Bone & joint care",
//     icon: Bone,
//     href: "/services/orthopedics",
//   },
//   {
//     name: "Pediatrics",
//     description: "Specialized child care",
//     icon: Baby,
//     href: "/services/pediatrics",
//   },
// ];

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Doctors", href: "/doctors" },
//   { name: "Contact Us", href: "/contact" },
//   { name: "Emergency", href: "/emergency" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setMobileMenu(false);
//     setServicesOpen(false);
//     setMobileServicesOpen(false);
//   }, [pathname]);

//   const isServiceActive = pathname.startsWith("/services");

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full">
//       {/* ================= TOP INFO BAR ================= */}
//       <div className="hidden border-b border-white/10 bg-[#063B5C] text-white lg:block">
//         <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* Left Info */}
//           <div className="flex h-full items-center">
//             {/* Emergency */}
//             <a
//               href="tel:+911234567890"
//               className="group flex h-full items-center gap-2 border-r border-white/15 pr-5 text-xs font-medium transition hover:text-[#4DD4C6]"
//             >
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-red-300 transition group-hover:bg-red-500 group-hover:text-white">
//                 <Phone className="h-3.5 w-3.5" />
//               </span>

//               <span>
//                 Emergency:
//                 <strong className="ml-1 font-semibold text-white">
//                   +91 12345 67890
//                 </strong>
//               </span>
//             </a>

//             {/* Open 24x7 */}
//             <div className="flex h-full items-center gap-2 border-r border-white/15 px-5 text-xs font-medium text-white/85">
//               <Clock3 className="h-4 w-4 text-[#4DD4C6]" />
//               <span>Open 24 × 7</span>
//             </div>

//             {/* Location */}
//             <div className="flex h-full items-center gap-2 pl-5 text-xs font-medium text-white/85">
//               <MapPin className="h-4 w-4 text-[#4DD4C6]" />
//               <span>Baderia Metro Prime Hospital</span>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-1">
//             <a
//               href="#"
//               aria-label="Facebook"
//               className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
//             >
//             <FaFacebookF className="h-3.5 w-3.5" />
//             </a>

//             <a
//               href="#"
//               aria-label="Instagram"
//               className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
//             >
//              <FaInstagram className="h-4 w-4" />
//             </a>

//             <a
//               href="#"
//               aria-label="YouTube"
//               className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
//             >
//              <FaYoutube className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN NAVBAR ================= */}
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`transition-all duration-300 ${
//           isScrolled
//             ? "border-b border-slate-200/70 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
//             : "border-b border-slate-100 bg-white"
//         }`}
//       >
//         <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* ================= LOGO ================= */}
//           <Link
//             href="/"
//             className="group flex items-center gap-3"
//             onClick={() => setMobileMenu(false)}
//           >
//             {/* Temporary Logo */}
//             <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0A7A78] to-[#063B5C] shadow-lg shadow-teal-900/15 transition duration-300 group-hover:scale-105">
//               <Stethoscope
//                 className="h-6 w-6 text-white"
//                 strokeWidth={2.5}
//               />

//               <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/15" />
//             </div>

//             <div className="flex flex-col leading-none">
//               <span className="text-lg font-bold tracking-tight text-[#063B5C] sm:text-xl">
//                Baderia MetroPrime
//               </span>
//               <span className="mt-1 text-[8px] font-bold uppercase  text-[#0A7A78] sm:text-xs">
//                 Multi Speciality Hospital Jabalpur
//               </span>
//             </div>
//           </Link>

//           {/* ================= DESKTOP MENU ================= */}
//           <div className="hidden items-center gap-1 lg:flex">
//             {navItems.map((item) => {
//               const isActive = item.dropdown
//                 ? isServiceActive
//                 : pathname === item.href;

//               if (item.dropdown) {
//                 return (
//                   <div
//                     key={item.name}
//                     className="relative"
//                     onMouseEnter={() => setServicesOpen(true)}
//                     onMouseLeave={() => setServicesOpen(false)}
//                   >
//                     <Link
//                       href={item.href}
//                       className={`group relative flex items-center gap-1 px-4 py-3 text-sm font-semibold transition-colors ${
//                         isActive
//                           ? "text-[#0A7A78]"
//                           : "text-slate-600 hover:text-[#0A7A78]"
//                       }`}
//                     >
//                       {item.name}

//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform duration-300 ${
//                           servicesOpen ? "rotate-180" : ""
//                         }`}
//                       />

//                       <span
//                         className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
//                           isActive
//                             ? "scale-x-100"
//                             : "scale-x-0 group-hover:scale-x-100"
//                         }`}
//                       />
//                     </Link>

//                     {/* ============ SERVICES DROPDOWN ============ */}
//                     <AnimatePresence>
//                       {servicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 12 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 8 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute left-0 top-full mt-1 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
//                         >
//                           <div className="border-b border-slate-100 px-3 py-3">
//                             <p className="text-sm font-bold text-[#063B5C]">
//                               Our Departments
//                             </p>

//                             <p className="mt-1 text-xs text-slate-500">
//                               Specialized healthcare services
//                             </p>
//                           </div>

//                           <div className="py-2">
//                             {services.map((service) => {
//                               const Icon = service.icon;

//                               return (
//                                 <Link
//                                   key={service.name}
//                                   href={service.href}
//                                   className="group/item flex items-center gap-3 rounded-xl p-3 transition hover:bg-teal-50"
//                                 >
//                                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0A7A78] transition group-hover/item:bg-[#0A7A78] group-hover/item:text-white">
//                                     <Icon className="h-5 w-5" />
//                                   </div>

//                                   <div>
//                                     <p className="text-sm font-semibold text-slate-800">
//                                       {service.name}
//                                     </p>

//                                     <p className="mt-0.5 text-xs text-slate-500">
//                                       {service.description}
//                                     </p>
//                                   </div>
//                                 </Link>
//                               );
//                             })}
//                           </div>

//                           <Link
//                             href="/services"
//                             className="group flex items-center justify-between rounded-xl bg-[#063B5C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0A7A78]"
//                           >
//                             View All Services

//                             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                           </Link>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${
//                     isActive
//                       ? "text-[#0A7A78]"
//                       : "text-slate-600 hover:text-[#0A7A78]"
//                   }`}
//                 >
//                   {item.name}

//                   <span
//                     className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* ================= APPOINTMENT BUTTON ================= */}
//           <div className="hidden lg:block">
//             <Link
//               href="/appointment"
//               className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#086663] hover:shadow-xl"
//             >
//               Book Appointment

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>
//           {/* ================= ACTION BUTTONS ================= */}
//           <div className="hidden items-center gap-3 lg:flex">

//             {/* Login */}
//             <Link
//               href="/login"
//               className="group flex items-center gap-2 rounded-xl border border-[#0A7A78]/20 bg-white px-4 py-3 text-sm font-semibold text-[#063B5C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
//             >
//               <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//               Login
//             </Link>

//             {/* Book Appointment */}
//             {/* <Link
//               href="/appointment"
//               className="group flex items-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#086663] hover:shadow-xl"
//             >
//               Book Appointment

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link> */}

//           </div>

//           {/* ================= MOBILE MENU BUTTON ================= */}
//           <button
//             type="button"
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#063B5C] transition hover:border-teal-200 hover:bg-teal-50 hover:text-[#0A7A78] lg:hidden"
//             aria-label="Toggle menu"
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               {mobileMenu ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                 >
//                   <X className="h-5 w-5" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                 >
//                   <Menu className="h-5 w-5" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </button>
//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         <AnimatePresence>
//           {mobileMenu && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
//             >
//               <div className="space-y-1 px-4 py-4">
//                 {navItems.map((item) => {
//                   const isActive = item.dropdown
//                     ? isServiceActive
//                     : pathname === item.href;

//                   if (item.dropdown) {
//                     return (
//                       <div key={item.name}>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setMobileServicesOpen(!mobileServicesOpen)
//                           }
//                           className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
//                             isActive
//                               ? "bg-teal-50 text-[#0A7A78]"
//                               : "text-slate-700 hover:bg-slate-50"
//                           }`}
//                         >
//                           {item.name}

//                           <ChevronDown
//                             className={`h-4 w-4 transition-transform duration-300 ${
//                               mobileServicesOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         <AnimatePresence>
//                           {mobileServicesOpen && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.25 }}
//                               className="overflow-hidden"
//                             >
//                               <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-100 py-2 pl-3">
//                                 {services.map((service) => (
//                                   <Link
//                                     key={service.name}
//                                     href={service.href}
//                                     className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-[#0A7A78]"
//                                     onClick={() => setMobileMenu(false)}
//                                   >
//                                     {service.name}
//                                   </Link>
//                                 ))}

//                                 <Link
//                                   href="/services"
//                                   className="block rounded-lg px-3 py-2.5 text-sm font-bold text-[#0A7A78]"
//                                   onClick={() => setMobileMenu(false)}
//                                 >
//                                   View All Services →
//                                 </Link>
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   }

//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={() => setMobileMenu(false)}
//                       className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
//                         isActive
//                           ? "bg-teal-50 text-[#0A7A78]"
//                           : "text-slate-700 hover:bg-slate-50 hover:text-[#0A7A78]"
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   );
//                 })}

//                 <Link
//                   href="/appointment"
//                   onClick={() => setMobileMenu(false)}
//                   className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0A7A78] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#086663]"
//                 >
//                   Book Appointment
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//                  <Link
//                   href="/login"
//                   className="group flex items-center gap-2 rounded-xl border border-[#0A7A78]/20 bg-white px-4 py-3 text-sm font-semibold text-[#063B5C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
//                 >
//                   <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//                   Login
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Phone,
  Clock3,
  MapPin,
  LogIn,
  icons,
  Activity,
  Eye,
  Heart,
  Syringe,
  Hospital,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import ApiService from "../src/services/Apiservices";
import useSWR from 'swr'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Image from "next/image";

const iconMap = {
  activity: Activity,
  heartpulse: HeartPulse,
  stethoscope: Stethoscope,
  brain: Brain,
  bone: Bone,
  baby: Baby,
  eye: Eye,
  heart: Heart,
  syringe: Syringe,
  hospital: Hospital,
};

const getDepartmentIcon = (iconName) => {
  if (!iconName) return Activity;

  const key = iconName.toLowerCase().replace(/[\s_-]/g, "");

  return iconMap[key] || Activity;
};

/* =========================================================
   SERVICES
========================================================= */

const servicesold = [
  {
    name: "Cardiology",
    description: "Complete heart care",
    icon: HeartPulse,
    href: "/services/cardiology",
  },
  {
    name: "Neurology",
    description: "Advanced brain care",
    icon: Brain,
    href: "/services/neurology",
  },
  {
    name: "Orthopedics",
    description: "Bone & joint care",
    icon: Bone,
    href: "/services/orthopedics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Pediatrics",
    description: "Specialized child care",
    icon: Baby,
    href: "/services/pediatrics",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Department",
    href: "/department",
    dropdown: true,
  },
  {
    name: "Doctors",
    href: "/doctors",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
 
  {
    name: "Contact Us",
    href: "/contact",
  },
   {
    name: "Career",
    href: "/career",
  },
  {
    name: "Emergency",
    href: "/emergency",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileMenu(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  /* =======================================================
     ACTIVE SERVICE
  ======================================================= */

  const isServiceActive = pathname.startsWith("/services");

  const {data,error,isLoading} = useSWR('departments',ApiService.get)
  const departments = data?.data || []

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* ===================================================
          TOP INFO BAR
      =================================================== */}

      {/* <div className="hidden border-b border-white/10 bg-[#063B5C] text-white lg:block"> */}
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#063B5C] to-[#0A7A78] text-white lg:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LEFT INFO */}
          <div className="flex h-full items-center">

            {/* Emergency */}
            <a
              href="tel:+91 9575300110"
              className="group flex h-full items-center gap-1.5 border-r border-white/15 pr-4 text-[11px] font-medium transition hover:text-[#4DD4C6]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15 text-red-300 transition group-hover:bg-red-500 group-hover:text-white">
                <Phone className="h-3 w-3" />
              </span>

              <span>
                Emergency:
                <strong className="ml-1 font-semibold text-white">
                  +91 9575300110
                </strong>
              </span>
            </a>

            {/* Open 24x7 */}
            <div className="flex h-full items-center gap-1.5 border-r border-white/15 px-4 text-[11px] font-medium text-white/85">
              <Clock3 className="h-3.5 w-3.5 text-[#4DD4C6]" />

              <span>Open 24 × 7</span>
            </div>

            {/* Location */}
            <div className="flex h-full items-center gap-1.5 pl-4 text-[11px] font-medium text-white/85">
              <MapPin className="h-3.5 w-3.5 text-[#4DD4C6]" />

              <span>
                Baderia Metroprime Multi Speciality Hospital Jabalpur
              </span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-0.5">

            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaFacebookF className="h-3 w-3" />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-[#4DD4C6]"
            >
              <FaYoutube className="h-3.5 w-3.5" />
            </Link>

          </div>
        </div>
      </div>

      {/* ===================================================
          MAIN NAVBAR
      =================================================== */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-b border-slate-100 bg-white"
        }`}
      >

        <div className="mx-auto flex h-[62px]  items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"> */}

          {/* =================================================
              LOGO
          ================================================= */}

         

          {/* <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileMenu(false)}
          >
            <div className="relative h-14 w-56 transition duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/images/HospitalLogo.png"
                alt="Baderia MetroPrime Hospital"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link> */}
        <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileMenu(false)}
          >
          <div className="relative h-12 w-54 shrink-0">
            <Image
              // src="/assets/images/Logo.png"
              src="/assets/images/HospitalLogo.png"
              alt="Baderia MetroPrime Hospital"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div className="hidden items-center gap-0.5 lg:flex">

            {navItems.map((item) => {

              const isActive = item.dropdown
                ? isServiceActive
                : pathname === item.href;

              /* =============================================
                 SERVICES
              ============================================= */

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >

                    {/* Services Link */}
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-0.5 px-3 py-2 text-[13px] font-semibold transition-colors ${
                        isActive
                          ? "text-[#0A7A78]"
                          : "text-slate-600 hover:text-[#0A7A78]"
                      }`}
                    >

                      {item.name}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                      {/* Active Line */}
                      <span
                        className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />

                    </Link>

                    {/* =======================================
                        SERVICES DROPDOWN
                    ======================================= */}

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute left-0 top-full mt-1 w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
                        >

                          {/* Dropdown Header */}
                          <div className="border-b border-slate-100 px-3 py-2.5">

                            <p className="text-[13px] font-bold text-[#063B5C]">
                              Our Departments
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                              Specialized healthcare services
                            </p>

                          </div>

                          {/* Services */}
                          
                           <div className="py-1.5">
                            {departments.slice(0, 4).map((department) => {
                              const Icon = getDepartmentIcon(department.icon);

                              return (
                                <Link
                                  key={department.id || department.name}
                                  href={`/department/${department.id}`}
                                  className="group/item flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-teal-50"
                                >
                                  {/* Icon */}
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0A7A78] transition group-hover/item:bg-[#0A7A78] group-hover/item:text-white">
                                    <Icon className="h-4 w-4" />
                                  </div>

                                  {/* Text */}
                                  <div>
                                    <p className="text-[13px] font-semibold text-slate-800">
                                      {department.name}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* View All */}
                          <Link
                            href="/department"
                            className="group flex items-center justify-between rounded-lg bg-[#063B5C] px-3.5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#0A7A78]"
                          >

                            <span>
                              View All Department
                            </span>

                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />

                          </Link>

                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              }

              /* =============================================
                 NORMAL MENU ITEM
              ============================================= */

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative px-3 py-2 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#0A7A78]"
                      : "text-slate-600 hover:text-[#0A7A78]"
                  }`}
                >

                  {item.name}

                  {/* Active Line */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[#0A7A78] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                </Link>
              );
            })}

          </div>

          {/* =================================================
              DESKTOP ACTION BUTTONS
          ================================================= */}

          <div className="hidden items-center gap-2 lg:flex">

            {/* Book Appointment */}
            <Link
              href="/appointment"
              className="group flex items-center gap-1.5 rounded-lg bg-[#0A7A78] px-4 py-2.5 text-[12px] font-semibold text-white shadow-md shadow-teal-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#086663] hover:shadow-lg"
            >

              <span>
                Book Appointment
              </span>

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            {/* Login */}
            {/* <Link
              href="/login"
              className="group flex items-center gap-1.5 rounded-lg border border-[#0A7A78]/20 bg-white px-3.5 py-2.5 text-[12px] font-semibold text-[#063B5C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
            >

              <LogIn
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span>
                Admin Login
              </span>

            </Link> */}
            <LanguageSwitcher/>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#063B5C] transition hover:border-teal-200 hover:bg-teal-50 hover:text-[#0A7A78] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenu}
          >

            <AnimatePresence
              mode="wait"
              initial={false}
            >

              {mobileMenu ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}

            </AnimatePresence>

          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <AnimatePresence>

          {mobileMenu && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >

              <div className="space-y-1 px-4 py-3">

                {navItems.map((item) => {

                  const isActive = item.dropdown
                    ? isServiceActive
                    : pathname === item.href;

                  /* =========================================
                     MOBILE SERVICES
                  ========================================= */

                  if (item.dropdown) {
                    return (
                      <div key={item.name}>

                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(
                              !mobileServicesOpen
                            )
                          }
                          className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[13px] font-semibold transition ${
                            isActive
                              ? "bg-teal-50 text-[#0A7A78]"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >

                          <span>
                            {item.name}
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              mobileServicesOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />

                        </button>

                        {/* Services */}
                        <AnimatePresence>

                          {mobileServicesOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="ml-3 mt-1 space-y-1 border-l-2 border-teal-100 py-1.5 pl-3">

                                 {departments.slice(0, 4).map((department) => (
                                  <Link
                                   key={department.id || department.name}
                                    href={`/department/${department.id}`}
                                    className="block rounded-lg px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-teal-50 hover:text-[#0A7A78]"
                                    onClick={() =>
                                      setMobileMenu(false)
                                    }
                                  >
                                    {department.name}
                                  </Link>
                                ))}

                                <Link
                                  href="/department"
                                  className="block rounded-lg px-3 py-2 text-[12px] font-bold text-[#0A7A78]"
                                  onClick={() =>
                                    setMobileMenu(false)
                                  }
                                >
                                  View All Services →
                                </Link>

                              </div>

                            </motion.div>
                          )}

                        </AnimatePresence>

                      </div>
                    );
                  }

                  /* =========================================
                     NORMAL MOBILE ITEM
                  ========================================= */

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className={`block rounded-lg px-3.5 py-2.5 text-[13px] font-semibold transition ${
                        isActive
                          ? "bg-teal-50 text-[#0A7A78]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0A7A78]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* =========================================
                    MOBILE APPOINTMENT
                ========================================= */}

                <Link
                  href="/appointment"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#0A7A78] px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-[#086663]"
                >

                  <span>
                    Book Appointment
                  </span>

                  <ArrowRight className="h-4 w-4" />

                </Link>

                {/* =========================================
                    MOBILE LOGIN
                ========================================= */}

                {/* <Link
                  href="/login"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#0A7A78]/20 bg-white px-4 py-3 text-[13px] font-semibold text-[#063B5C] transition hover:border-[#0A7A78] hover:bg-teal-50 hover:text-[#0A7A78]"
                >

                  <LogIn className="h-4 w-4" />

                  <span>
                    Admin Login
                  </span>

                </Link> */}

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.nav>
    </header>
  );
}
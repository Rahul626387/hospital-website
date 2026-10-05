// "use client";

// import Link from "next/link";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock3,
//   ArrowUpRight,
//   HeartPulse,
//   Stethoscope,
//   ChevronRight,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Our Doctors", href: "/doctors" },
//   { name: "Our Services", href: "/services" },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Contact Us", href: "/contact" },
// ];

// const services = [
//   "General Medicine",
//   "Cardiology",
//   "Orthopedics",
//   "Gynecology",
//   "Pediatrics",
//   "Emergency Care",
// ];

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: FaFacebookF,
//     href: "#",
//   },
//   {
//     name: "Instagram",
//     icon: FaInstagram,
//     href: "#",
//   },
//   {
//     name: "LinkedIn",
//     icon: FaLinkedinIn,
//     href: "#",
//   },
//   {
//     name: "YouTube",
//     icon: FaYoutube,
//     href: "#",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#063B5C] text-white">
//       {/* Background Decoration */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0A7A78]/20 blur-3xl" />
//         <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
//       </div>

//       {/* Emergency CTA */}
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative -mt-px border-b border-white/10 py-8 sm:py-10">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A7A78] text-white shadow-lg shadow-black/10">
//                 <HeartPulse className="h-7 w-7" />
//               </div>

//               <div>
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4DD4C6]">
//                   Emergency Support
//                 </p>

//                 <h3 className="mt-2 text-xl font-bold sm:text-2xl">
//                   Need immediate medical assistance?
//                 </h3>

//                 <p className="mt-1 text-sm text-white/60">
//                   Our healthcare team is available to assist you.
//                 </p>
//               </div>
//             </div>

//             <a
//               href="tel:+919999999999"
//               className="group inline-flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#063B5C] transition hover:-translate-y-1 hover:shadow-xl"
//             >
//               <Phone className="h-5 w-5 text-[#0A7A78]" />
//               <span>Call Emergency</span>
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//             </a>
//           </div>
//         </div>

//         {/* Main Footer */}
//         <div className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr] lg:gap-8 lg:py-20">
//           {/* Brand */}
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A7A78] text-white">
//                 <Stethoscope className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="text-lg font-bold leading-tight">
//                   Baderia Metro Prime
//                 </p>
//                 <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4DD4C6]">
//                   Hospital
//                 </p>
//               </div>
//             </Link>

//             <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
//               Providing compassionate, reliable and patient-centered healthcare
//               with experienced professionals and modern medical facilities.
//             </p>

//             {/* Social Links */}
//             <div className="mt-6 flex items-center gap-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <a
//                     key={social.name}
//                     href={social.href}
//                     aria-label={social.name}
//                     className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:border-[#4DD4C6]/40 hover:bg-[#0A7A78] hover:text-white"
//                   >
//                     <Icon className="h-[18px] w-[18px]" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
//               Quick Links
//             </h4>

//             <ul className="mt-6 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-[#4DD4C6]"
//                   >
//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
//               Our Services
//             </h4>

//             <ul className="mt-6 space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <Link
//                     href="/services"
//                     className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-[#4DD4C6]"
//                   >
//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
//               Contact Us
//             </h4>

//             <div className="mt-6 space-y-5">
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 text-[#4DD4C6]">
//                   <MapPin className="h-5 w-5" />
//                 </div>

//                 <p className="text-sm leading-6 text-white/60">
//                   Baderia Metro Prime Hospital,
//                   <br />
//                   Jabalpur, Madhya Pradesh, India
//                 </p>
//               </div>

//               <a
//                 href="tel:+919999999999"
//                 className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#4DD4C6]"
//               >
//                 <Phone className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
//                 +91 99999 99999
//               </a>

//               <a
//                 href="mailto:info@baderiametroprime.com"
//                 className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#4DD4C6]"
//               >
//                 <Mail className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
//                 info@baderiametroprime.com
//               </a>

//               <div className="flex items-center gap-3 text-sm text-white/60">
//                 <Clock3 className="h-5 w-5 shrink-0 text-[#4DD4C6]" />
//                 Open 24 Hours, 7 Days
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="relative flex flex-col gap-4 border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
//           <p>
//             © {new Date().getFullYear()} Baderia Metro Prime Hospital. All
//             rights reserved.
//           </p>

//           <div className="flex justify-center gap-5 sm:justify-end">
//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms-conditions"
//               className="transition hover:text-white"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock3,
//   ArrowUpRight,
//   HeartPulse,
//   Stethoscope,
//   ChevronRight,
//   ArrowUp,
//   ShieldCheck,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Our Doctors", href: "/doctors" },
//   { name: "Our Services", href: "/services" },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Contact Us", href: "/contact" },
// ];

// const services = [
//   "General Medicine",
//   "Cardiology",
//   "Orthopedics",
//   "Gynecology",
//   "Pediatrics",
//   "Emergency Care",
// ];

// const socialLinks = [
//   { name: "Facebook", icon: FaFacebookF, href: "#" },
//   { name: "Instagram", icon: FaInstagram, href: "#" },
//   { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
//   { name: "YouTube", icon: FaYoutube, href: "#" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#0d3c59] text-white">

//       {/* =====================================================
//           ANIMATED BACKGROUND IMAGE
//       ====================================================== */}

//       <motion.div
//         className="absolute inset-0"
//         initial={{ scale: 1.08 }}
//         whileInView={{ scale: 1 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 2.5,
//           ease: "easeOut",
//         }}
//       >
//         <Image
//           src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
//           alt="Hospital"
//           fill
//           className="object-cover opacity-[0.13]"
//           sizes="100vw"
//         />
//       </motion.div>

//       {/* Dark Overlay */}

//       <div className="absolute inset-0 bg-[#0d3c59]/90" />

//       <div className="absolute inset-0 bg-gradient-to-b from-[#0d3c59]/70 via-[#0d3c59]/95 to-[#082c43]" />

//       {/* =====================================================
//           FLOATING GLOWS
//       ====================================================== */}

//       <motion.div
//         className="
//           pointer-events-none
//           absolute
//           -left-40
//           top-20
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#18a999]/20
//           blur-[110px]
//         "
//         animate={{
//           x: [0, 80, 0],
//           y: [0, 40, 0],
//           scale: [1, 1.15, 1],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="
//           pointer-events-none
//           absolute
//           -right-40
//           top-1/3
//           h-[450px]
//           w-[450px]
//           rounded-full
//           bg-cyan-300/10
//           blur-[120px]
//         "
//         animate={{
//           x: [0, -70, 0],
//           y: [0, -50, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* =================================================
//             EMERGENCY CTA
//         ================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative pt-10 sm:pt-14"
//         >

//           <motion.div
//             whileHover={{
//               y: -5,
//               scale: 1.01,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-3xl
//               border
//               border-white/15
//               bg-white/[0.08]
//               p-6
//               shadow-2xl
//               backdrop-blur-xl
//               sm:p-8
//               lg:p-9
//             "
//           >

//             {/* Animated Glow */}

//             <motion.div
//               className="
//                 absolute
//                 -right-20
//                 -top-20
//                 h-64
//                 w-64
//                 rounded-full
//                 bg-[#18a999]/20
//                 blur-3xl
//               "
//               animate={{
//                 scale: [1, 1.25, 1],
//                 opacity: [0.4, 0.7, 0.4],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />

//             <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

//               <div className="flex items-start gap-5">

//                 {/* Heart Icon */}

//                 <motion.div
//                   animate={{
//                     scale: [1, 1.08, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     flex
//                     h-16
//                     w-16
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     bg-[#18a999]
//                     shadow-lg
//                     shadow-[#18a999]/30
//                   "
//                 >
//                   <HeartPulse className="h-8 w-8" />
//                 </motion.div>

//                 <div>

//                   <div className="flex items-center gap-2">

//                     <motion.span
//                       animate={{
//                         opacity: [1, 0.3, 1],
//                         scale: [1, 1.4, 1],
//                       }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                       }}
//                       className="h-2 w-2 rounded-full bg-[#55e0d0]"
//                     />

//                     <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#55e0d0]">
//                       Emergency Support
//                     </p>

//                   </div>

//                   <h3 className="mt-2 text-xl font-bold sm:text-2xl lg:text-3xl">
//                     Need immediate medical assistance?
//                   </h3>

//                   <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
//                     Our emergency healthcare team is available 24/7
//                     to provide immediate medical assistance.
//                   </p>

//                 </div>
//               </div>

//               {/* Emergency Button */}

//               <motion.a
//                 href="tel:+91 9575300110"
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 className="
//                   group/btn
//                   inline-flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-2xl
//                   bg-white
//                   px-6
//                   py-4
//                   text-sm
//                   font-bold
//                   text-[#0d3c59]
//                   shadow-xl
//                   sm:w-fit
//                 "
//               >

//                 <Phone className="h-5 w-5 text-[#18a999]" />

//                 <span>Call Emergency</span>

//                 <motion.div
//                   whileHover={{
//                     x: 4,
//                     y: -4,
//                   }}
//                 >
//                   <ArrowUpRight className="h-4 w-4" />
//                 </motion.div>

//               </motion.a>

//             </div>
//           </motion.div>

//         </motion.div>

//         {/* =================================================
//             MAIN FOOTER
//         ================================================== */}

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           className="
//             grid
//             gap-12
//             py-16
//             sm:grid-cols-2
//             lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.2fr]
//             lg:gap-10
//             lg:py-20
//           "
//         >

//           {/* =================================================
//               BRAND
//           ================================================== */}

//           <motion.div variants={itemVariants}>

//             <Link
//               href="/"
//               className="group inline-flex items-center gap-3"
//             >

//               <motion.div
//                 whileHover={{
//                   rotate: 8,
//                   scale: 1.08,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                 }}
//                 className="
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   bg-[#18a999]
//                   shadow-lg
//                 "
//               >
//                 <Stethoscope className="h-7 w-7" />
//               </motion.div>

//               <div>

//                 <p className="text-xl font-bold leading-tight">
//                   Baderia Metro Prime
//                 </p>

//                 <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#55e0d0]">
//                   Hospital
//                 </p>

//               </div>

//             </Link>

//             <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
//               Providing compassionate, reliable and patient-centered
//               healthcare with experienced professionals and modern
//               medical facilities.
//             </p>

//             {/* Trust Badge */}

//             <motion.div
//               whileHover={{
//                 x: 5,
//               }}
//               className="
//                 mt-6
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-xl
//                 border
//                 border-white/10
//                 bg-white/[0.05]
//                 px-4
//                 py-3
//               "
//             >

//               <ShieldCheck className="h-5 w-5 text-[#55e0d0]" />

//               <div>

//                 <p className="text-xs font-semibold text-white">
//                   Trusted Healthcare
//                 </p>

//                 <p className="text-[11px] text-white/45">
//                   Patient First Approach
//                 </p>

//               </div>

//             </motion.div>

//             {/* Social Icons */}

//             <div className="mt-7 flex items-center gap-3">

//               {socialLinks.map((social, index) => {

//                 const Icon = social.icon;

//                 return (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     aria-label={social.name}
//                     initial={{
//                       opacity: 0,
//                       scale: 0.5,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       scale: 1,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       delay: index * 0.08,
//                       duration: 0.4,
//                     }}
//                     whileHover={{
//                       y: -6,
//                       rotate: 5,
//                       scale: 1.1,
//                     }}
//                     whileTap={{
//                       scale: 0.9,
//                     }}
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-white/10
//                       bg-white/[0.05]
//                       text-white/60
//                       transition-colors
//                       hover:border-[#55e0d0]/40
//                       hover:bg-[#18a999]
//                       hover:text-white
//                     "
//                   >
//                     <Icon className="h-[17px] w-[17px]" />
//                   </motion.a>
//                 );
//               })}

//             </div>

//           </motion.div>

//           {/* =================================================
//               QUICK LINKS
//           ================================================== */}

//           <motion.div variants={itemVariants}>

//             <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
//               Quick Links
//             </h4>

//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: 32 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.2,
//               }}
//               className="mt-2 h-1 rounded-full bg-[#18a999]"
//             />

//             <ul className="mt-6 space-y-3">

//               {quickLinks.map((link, index) => (

//                 <motion.li
//                   key={link.name}
//                   initial={{
//                     opacity: 0,
//                     x: -15,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     delay: index * 0.07,
//                   }}
//                 >

//                   <Link
//                     href={link.href}
//                     className="
//                       group
//                       inline-flex
//                       items-center
//                       gap-2
//                       text-sm
//                       text-white/55
//                       transition-colors
//                       hover:text-[#55e0d0]
//                     "
//                   >

//                     <ChevronRight
//                       className="
//                         h-4
//                         w-4
//                         text-[#18a999]
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />

//                     {link.name}

//                   </Link>

//                 </motion.li>

//               ))}

//             </ul>
//           </motion.div>

//           {/* =================================================
//               SERVICES
//           ================================================== */}

//           <motion.div variants={itemVariants}>

//             <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
//               Our Services
//             </h4>

//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: 32 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.2,
//               }}
//               className="mt-2 h-1 rounded-full bg-[#18a999]"
//             />

//             <ul className="mt-6 space-y-3">

//               {services.map((service, index) => (

//                 <motion.li
//                   key={service}
//                   initial={{
//                     opacity: 0,
//                     x: -15,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     delay: index * 0.07,
//                   }}
//                 >

//                   <Link
//                     href="/services"
//                     className="
//                       group
//                       inline-flex
//                       items-center
//                       gap-2
//                       text-sm
//                       text-white/55
//                       transition-colors
//                       hover:text-[#55e0d0]
//                     "
//                   >

//                     <ChevronRight
//                       className="
//                         h-4
//                         w-4
//                         text-[#18a999]
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />

//                     {service}

//                   </Link>

//                 </motion.li>

//               ))}

//             </ul>
//           </motion.div>

//           {/* =================================================
//               CONTACT
//           ================================================== */}

//           <motion.div variants={itemVariants}>

//             <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
//               Contact Us
//             </h4>

//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: 32 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.2,
//               }}
//               className="mt-2 h-1 rounded-full bg-[#18a999]"
//             />

//             <div className="mt-6 space-y-5">

//               {/* Address */}

//               <motion.div
//                 whileHover={{
//                   x: 5,
//                 }}
//                 className="flex items-start gap-3"
//               >

//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
//                   <MapPin className="h-4 w-4 text-[#55e0d0]" />
//                 </div>

//                 <p className="text-sm leading-6 text-white/55">
//                   Baderia Metro Prime Hospital,
//                   <br />
//                   Jabalpur, Madhya Pradesh, India
//                 </p>

//               </motion.div>

//               {/* Phone */}

//               <motion.a
//                 href="tel:+919999999999"
//                 whileHover={{
//                   x: 5,
//                 }}
//                 className="flex items-center gap-3 text-sm text-white/55 hover:text-[#55e0d0]"
//               >

//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
//                   <Phone className="h-4 w-4 text-[#55e0d0]" />
//                 </div>

//                 +91 99999 99999

//               </motion.a>

//               {/* Email */}

//               <motion.a
//                 href="mailto:info@baderiametroprime.com"
//                 whileHover={{
//                   x: 5,
//                 }}
//                 className="flex items-center gap-3 text-sm text-white/55 hover:text-[#55e0d0]"
//               >

//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
//                   <Mail className="h-4 w-4 text-[#55e0d0]" />
//                 </div>

//                 info@baderiametroprime.com

//               </motion.a>

//               {/* Hours */}

//               <motion.div
//                 whileHover={{
//                   x: 5,
//                 }}
//                 className="flex items-center gap-3"
//               >

//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
//                   <Clock3 className="h-4 w-4 text-[#55e0d0]" />
//                 </div>

//                 <div>

//                   <p className="text-sm text-white/70">
//                     Open 24 Hours
//                   </p>

//                   <p className="text-xs text-white/40">
//                     7 Days a Week
//                   </p>

//                 </div>

//               </motion.div>

//             </div>
//           </motion.div>

//         </motion.div>

//         {/* =================================================
//             BOTTOM FOOTER
//         ================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="
//             relative
//             flex
//             flex-col
//             gap-5
//             border-t
//             border-white/10
//             py-6
//             text-center
//             text-xs
//             text-white/40
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:text-left
//           "
//         >

//           <p>
//             © {new Date().getFullYear()} Baderia Metro Prime Hospital.
//             All rights reserved.
//           </p>

//           <div className="flex justify-center gap-5 sm:justify-end">

//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms-conditions"
//               className="transition hover:text-white"
//             >
//               Terms & Conditions
//             </Link>

//           </div>

//         </motion.div>

//       </div>

//       {/* =================================================
//           BACK TO TOP
//       ================================================== */}

//       <motion.button
//         onClick={scrollToTop}
//         initial={{
//           opacity: 0,
//           scale: 0,
//         }}
//         whileInView={{
//           opacity: 1,
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//         }}
//         whileHover={{
//           y: -5,
//           scale: 1.08,
//         }}
//         whileTap={{
//           scale: 0.9,
//         }}
//         aria-label="Back to top"
//         className="
//           absolute
//           bottom-5
//           right-5
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-xl
//           border
//           border-white/10
//           bg-white/[0.07]
//           text-white/70
//           backdrop-blur-md
//           hover:bg-[#18a999]
//           hover:text-white
//           sm:right-8
//         "
//       >
//         <ArrowUp className="h-5 w-5" />
//       </motion.button>

//     </footer>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  HeartPulse,
  Stethoscope,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// ✅ Import centralized data
import { siteData } from "../data/siteData";

// ✅ Build social links from siteData
const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: siteData.social.facebook },
  { name: "Instagram", icon: FaInstagram, href: siteData.social.instagram },
  { name: "LinkedIn", icon: FaLinkedinIn, href: siteData.social.linkedin },
  { name: "YouTube", icon: FaYoutube, href: siteData.social.youtube },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0d3c59] text-white">
      {/* ... background sections unchanged ... */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================
            EMERGENCY CTA
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative pt-10 sm:pt-14"
        >
         <motion.div
  whileHover={{ y: -3 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-4 shadow-xl backdrop-blur-xl sm:p-5"
>
  {/* Animated Glow */}
  <motion.div
    className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#18a999]/20 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.25, 0.5, 0.25],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

    {/* LEFT CONTENT */}
    <div className="flex min-w-0 items-center gap-4">

      {/* Heart Icon */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#18a999] shadow-lg shadow-[#18a999]/30 sm:h-14 sm:w-14"
      >
        <HeartPulse className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>

      <div className="min-w-0">

        {/* Label */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              opacity: [1, 0.35, 1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#55e0d0]"
          />

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#55e0d0] sm:text-xs">
            {siteData.footer.emergency.label}
          </p>
        </div>

        {/* Heading */}
        <h3 className="mt-1 text-lg font-bold leading-tight text-white sm:text-xl">
          {siteData.footer.emergency.heading}
        </h3>

        {/* Description */}
        <p className="mt-1 line-clamp-2 max-w-xl text-xs leading-5 text-white/55 sm:text-sm">
          {siteData.footer.emergency.description}
        </p>
      </div>
    </div>

    {/* CALL BUTTON */}
    <motion.a
      href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="relative inline-flex w-full shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0d3c59] shadow-lg sm:w-auto"
    >

      {/* Continuous Ripple */}
      <motion.span
        className="absolute inset-0 rounded-xl border-2 border-[#18a999]"
        animate={{
          scale: [1, 1.15, 1.15],
          opacity: [0.6, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Phone Icon */}
      <motion.span
        animate={{
          rotate: [0, -8, 8, -5, 5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#18a999]/10"
      >
        <Phone className="h-4 w-4 text-[#18a999]" />
      </motion.span>

      <span className="relative">
        {siteData.footer.emergency.buttonText}
      </span>

      <motion.span
        animate={{
          x: [0, 3, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <ArrowUpRight className="h-4 w-4" />
      </motion.span>
    </motion.a>
  </div>
</motion.div>
        </motion.div>

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.2fr] lg:gap-10 lg:py-20"
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div variants={itemVariants}>
            <Link href="/" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18a999] shadow-lg"
              >
                <Stethoscope className="h-7 w-7" />
              </motion.div>

              <div>
                <p className="text-xl font-bold leading-tight">
                  {siteData.hospital.shortName}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#55e0d0]">
                  Hospital
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              {siteData.footer.description}
            </p>

            {/* Trust Badge */}
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3"
            >
              <ShieldCheck className="h-5 w-5 text-[#55e0d0]" />
              <div>
                <p className="text-xs font-semibold text-white">
                  {siteData.footer.trustBadge.title}
                </p>
                <p className="text-[11px] text-white/45">
                  {siteData.footer.trustBadge.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ y: -6, rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-colors hover:border-[#55e0d0]/40 hover:bg-[#18a999] hover:text-white"
                  >
                    <Icon className="h-[17px] w-[17px]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 h-1 rounded-full bg-[#18a999]"
            />
            <ul className="mt-6 space-y-3">
              {siteData.navigation.quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#55e0d0]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#18a999] transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
              Our Services
            </h4>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 h-1 rounded-full bg-[#18a999]"
            />
            <ul className="mt-6 space-y-3">
              {siteData.navigation.services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href="/department"
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#55e0d0]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#18a999] transition-transform duration-300 group-hover:translate-x-1" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
              Contact Us
            </h4>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 h-1 rounded-full bg-[#18a999]"
            />

            <div className="mt-6 space-y-5">
              {/* Address */}
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                  <MapPin className="h-4 w-4 text-[#55e0d0]" />
                </div>
                <p className="text-sm leading-6 text-white/55">
                  {siteData.contact.addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < siteData.contact.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-white/55 hover:text-[#55e0d0]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                  <Phone className="h-4 w-4 text-[#55e0d0]" />
                </div>
                {siteData.contact.phone}
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${siteData.contact.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-white/55 hover:text-[#55e0d0]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                  <Mail className="h-4 w-4 text-[#55e0d0]" />
                </div>
                {siteData.contact.email}
              </motion.a>

              {/* Hours */}
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                  <Clock3 className="h-4 w-4 text-[#55e0d0]" />
                </div>
                <div>
                  <p className="text-sm text-white/70">{siteData.contact.hours.open}</p>
                  <p className="text-xs text-white/40">{siteData.contact.hours.days}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            BOTTOM FOOTER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex flex-col gap-5 border-t border-white/10 py-6 text-center text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left"
        >
          <p>
            © {new Date().getFullYear()} {siteData.footer.copyright}
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            {siteData.navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =================================================
          BACK TO TOP
      ================================================== */}

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
        className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white/70 backdrop-blur-md hover:bg-[#18a999] hover:text-white sm:right-8"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
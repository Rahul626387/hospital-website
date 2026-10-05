// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Bone, HeartPulse, Brain, Baby, Eye, Stethoscope, Activity } from "lucide-react";

// const THEMES = [
//   {
//     icon: "text-cyan-600",
//     bg: "bg-cyan-50",
//     ring: "group-hover:ring-cyan-200/60",
//     glow: "from-cyan-400/20",
//   },
//   {
//     icon: "text-blue-600",
//     bg: "bg-blue-50",
//     ring: "group-hover:ring-blue-200/60",
//     glow: "from-blue-400/20",
//   },
//   {
//     icon: "text-emerald-600",
//     bg: "bg-emerald-50",
//     ring: "group-hover:ring-emerald-200/60",
//     glow: "from-emerald-400/20",
//   },
//   {
//     icon: "text-violet-600",
//     bg: "bg-violet-50",
//     ring: "group-hover:ring-violet-200/60",
//     glow: "from-violet-400/20",
//   },
//   {
//     icon: "text-rose-600",
//     bg: "bg-rose-50",
//     ring: "group-hover:ring-rose-200/60",
//     glow: "from-rose-400/20",
//   },
//   {
//     icon: "text-amber-600",
//     bg: "bg-amber-50",
//     ring: "group-hover:ring-amber-200/60",
//     glow: "from-amber-400/20",
//   },
// ];

// const ICON_MAP = {
//   bone: Bone,
//   heart: HeartPulse,
//   brain: Brain,
//   baby: Baby,
//   eye: Eye,
//   stethoscope: Stethoscope,
//   activity: Activity,
//   // Aur icons yahan add karte jao jaise API mein aayein
// };
// export default function DepartmentCard({
//   department,
//   index = 0,
//   href = "/departments",
// }) {
// //   const Icon = department.icon;
//   const Icon = ICON_MAP[department.icon?.toLowerCase()] || Activity;
//   const theme = THEMES[index % THEMES.length];

//   console.log(department)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.06,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`
//         group
//         relative
//         h-[240px]
//         overflow-hidden
//         rounded-[20px]
//         border border-slate-200/70
//         bg-white/80
//         p-6
//         ring-1 ring-transparent
//         backdrop-blur-sm
//         transition-all duration-500
//         hover:-translate-y-2
//         hover:border-transparent
//         hover:shadow-[0_25px_50px_-15px_rgba(10,122,120,0.25)]
//         ${theme.ring}
//       `}
//     >
//       {/* GRADIENT GLOW ON HOVER */}
//       <div
//         className={`
//           pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full
//           bg-gradient-to-br ${theme.glow} to-transparent blur-2xl
//           opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//         `}
//       />

//       {/* WATERMARK ICON */}
//       <div
//         className={`
//           pointer-events-none absolute -bottom-4 -right-4
//           ${theme.icon}
//           opacity-[0.05]
//           transition-all duration-700
//           group-hover:-rotate-6 group-hover:scale-110 group-hover:opacity-[0.09]
//         `}
//       >
//         <Icon className="h-32 w-32" strokeWidth={1} />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex h-full flex-col">
//         {/* ICON BADGE */}
//         <div
//           className={`
//             flex h-12 w-12 items-center justify-center rounded-2xl
//             ${theme.bg} ${theme.icon}
//             shadow-sm ring-1 ring-white/60
//             transition-all duration-500
//             group-hover:scale-110 group-hover:rotate-3
//           `}
//         >
//           <Icon className="h-5 w-5" strokeWidth={1.8} />
//         </div>

//         {/* TITLE */}
//         <h3 className="mt-5 text-lg font-bold tracking-tight text-[#063B5C]">
//           {department.name}
//         </h3>

//         {/* DESCRIPTION */}
//         <p className="mt-2 line-clamp-2 max-w-[310px] text-[13px] leading-6 text-slate-500">
//           {department.description}
//         </p>

//         {/* LINK */}
//         <Link
//           href={href}
//           className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0A7A78]"
//         >
//           Explore
//           <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
//         </Link>
//       </div>

//       {/* BOTTOM ACCENT LINE */}
//       {/* <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0A7A78]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
//     </motion.div>
//   );
// }

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bone,
  HeartPulse,
  Brain,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Building2,
} from "lucide-react";
const THEMES = [
  {
    icon: "text-cyan-600",
    bg: "bg-cyan-50",
    ring: "group-hover:ring-cyan-200/60",
    glow: "from-cyan-400/20",
  },
  {
    icon: "text-blue-600",
    bg: "bg-blue-50",
    ring: "group-hover:ring-blue-200/60",
    glow: "from-blue-400/20",
  },
  {
    icon: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "group-hover:ring-emerald-200/60",
    glow: "from-emerald-400/20",
  },
  {
    icon: "text-violet-600",
    bg: "bg-violet-50",
    ring: "group-hover:ring-violet-200/60",
    glow: "from-violet-400/20",
  },
  {
    icon: "text-rose-600",
    bg: "bg-rose-50",
    ring: "group-hover:ring-rose-200/60",
    glow: "from-rose-400/20",
  },
  {
    icon: "text-amber-600",
    bg: "bg-amber-50",
    ring: "group-hover:ring-amber-200/60",
    glow: "from-amber-400/20",
  },
];
// const ICON_MAP = {
//   bone: Bone,
//   heart: HeartPulse,
//   heartpulse: HeartPulse,
//   brain: Brain,
//   baby: Baby,
//   eye: Eye,
//   stethoscope: Stethoscope,
//   activity: Activity,
//   building2: Building2,
// };
const ICON_MAP = {
  bone: Bone,
  heart: HeartPulse,
  heartpulse: HeartPulse,
  brain: Brain,
  baby: Baby,
  eye: Eye,
  stethoscope: Stethoscope,
  activity: Activity,
  building2: Building2,
};
export default function DepartmentCard({
  department,
  index = 0,
  href = "/departments",
}) {
  const Icon = ICON_MAP[department?.icon?.toLowerCase()] || Activity;
  const theme = THEMES[index % THEMES.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`cursor-pointer group relative h-[240px] overflow-hidden rounded-[20px] border border-slate-200/70 bg-white/80 p-6 ring-1 ring-transparent backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_25px_50px_-15px_rgba(10,122,120,0.25)] ${theme.ring} `}
    >
      
      {/* ===================================== GRADIENT GLOW ====================================== */}
      <div
        className={` pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${theme.glow} to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 `}
      />
      {/* ===================================== WATERMARK ICON Hover: Bottom Right → Up ====================================== */}
      <div
        className={` pointer-events-none absolute -bottom-10 -right-10 ${theme.icon} opacity-[0.03] translate-y-8 scale-75 rotate-12 transition-all duration-700 ease-out group-hover:bottom-3 group-hover:right-3 group-hover:translate-y-0 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-[0.10] `}
      >
        
        <Icon className="h-32 w-32" strokeWidth={1} />
      </div>
      {/* ===================================== CONTENT ====================================== */}
      <div className="relative z-10 flex h-full flex-col">
        
        {/* ICON BADGE */}
        <div
          className={` flex h-12 w-12 items-center justify-center rounded-2xl ${theme.bg} ${theme.icon} shadow-sm ring-1 ring-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 `}
        >
          
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        {/* TITLE */}
        <h3 className=" mt-5 text-lg font-bold tracking-tight text-[#063B5C] transition-colors duration-300 group-hover:text-[#0A7A78] ">
          
          {department?.name}
        </h3>
        {/* DESCRIPTION */}
        <p className=" mt-2 line-clamp-2 max-w-[310px] text-[13px] leading-6 text-slate-500 ">
          
          {department?.description ||
            "Specialized healthcare services provided by our expert medical team."}
        </p>
        {/* LINK */}
        <Link
          href={href}
          className=" mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0A7A78] "
        >
          
          Explore
          <ArrowRight className=" h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 " />
        </Link>
      </div>
      {/* ===================================== BOTTOM ACCENT ====================================== */}
      {/* <div className=" pointer-events-none absolute bottom-0 left-6 right-6 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#0A7A78] to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 " /> */}
    </motion.div>
  );
}















// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Bone, HeartPulse, Brain, Baby, Eye, Stethoscope, Activity } from "lucide-react";

// /* --------------------------------------------
//    ICON MAP — API se aane wale string ko
//    lucide-react component se map karta hai
// --------------------------------------------- */
// const ICON_MAP = {
//   bone: Bone,
//   heart: HeartPulse,
//   brain: Brain,
//   baby: Baby,
//   eye: Eye,
//   stethoscope: Stethoscope,
//   activity: Activity,
//   // Aur icons yahan add karte jao jaise API mein aayein
// };

// /* --------------------------------------------
//    THEMES — Har card ke liye color rotation
// --------------------------------------------- */
// const THEMES = [
//   { icon: "text-cyan-600",    bg: "bg-cyan-50",    ring: "group-hover:ring-cyan-200/60",    glow: "from-cyan-400/20" },
//   { icon: "text-blue-600",    bg: "bg-blue-50",    ring: "group-hover:ring-blue-200/60",    glow: "from-blue-400/20" },
//   { icon: "text-emerald-600", bg: "bg-emerald-50", ring: "group-hover:ring-emerald-200/60", glow: "from-emerald-400/20" },
//   { icon: "text-violet-600",  bg: "bg-violet-50",  ring: "group-hover:ring-violet-200/60",  glow: "from-violet-400/20" },
//   { icon: "text-rose-600",    bg: "bg-rose-50",    ring: "group-hover:ring-rose-200/60",    glow: "from-rose-400/20" },
//   { icon: "text-amber-600",   bg: "bg-amber-50",   ring: "group-hover:ring-amber-200/60",   glow: "from-amber-400/20" },
// ];

// export default function DepartmentCard({
//   department,
//   index = 0,
//   href = "/departments",
// }) {
//   // API se icon string aata hai, uska component nikalo
//   // Fallback: agar icon map mein na mile toh Activity icon use karo
//   const Icon = ICON_MAP[department.icon?.toLowerCase()] || Activity;

//   const theme = THEMES[index % THEMES.length];

//   // Optional: per-department custom link (agar id available ho)
//   const cardHref = department.id ? `${href}/${department.id}` : href;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.06,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`
//         group
//         relative
//         h-[260px]
//         overflow-hidden
//         rounded-[24px]
//         border border-slate-200/70
//         bg-white/80
//         p-6
//         ring-1 ring-transparent
//         backdrop-blur-sm
//         transition-all duration-500
//         hover:-translate-y-2
//         hover:border-transparent
//         hover:shadow-[0_25px_50px_-15px_rgba(10,122,120,0.25)]
//         ${theme.ring}
//       `}
//     >
//       {/* GRADIENT GLOW ON HOVER */}
//       <div
//         className={`
//           pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full
//           bg-gradient-to-br ${theme.glow} to-transparent blur-2xl
//           opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//         `}
//       />

//       {/* WATERMARK ICON */}
//       <div
//         className={`
//           pointer-events-none absolute -bottom-4 -right-4
//           ${theme.icon}
//           opacity-[0.05]
//           transition-all duration-700
//           group-hover:-rotate-6 group-hover:scale-110 group-hover:opacity-[0.09]
//         `}
//       >
//         <Icon className="h-32 w-32" strokeWidth={1} />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex h-full flex-col">
//         {/* ICON BADGE */}
//         <div
//           className={`
//             flex h-12 w-12 items-center justify-center rounded-2xl
//             ${theme.bg} ${theme.icon}
//             shadow-sm ring-1 ring-white/60
//             transition-all duration-500
//             group-hover:scale-110 group-hover:rotate-3
//           `}
//         >
//           <Icon className="h-5 w-5" strokeWidth={1.8} />
//         </div>

//         {/* TITLE — API mein `name` field hai */}
//         <h3 className="mt-5 text-lg font-bold tracking-tight text-[#063B5C]">
//           {department.name}
//         </h3>

//         {/* DESCRIPTION — 2 lines ke baad "..." */}
//         <p className="mt-2 line-clamp-2 max-w-[310px] text-[13px] leading-6 text-slate-500">
//           {department.description}
//         </p>

//         {/* LINK */}
//         <Link
//           href={cardHref}
//           className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0A7A78]"
//         >
//           Explore
//           <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
//         </Link>
//       </div>

//       {/* BOTTOM ACCENT LINE */}
//       <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0A7A78]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//     </motion.div>
//   );
// }

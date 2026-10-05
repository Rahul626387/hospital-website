// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight, Newspaper } from "lucide-react";

// const PageHero = ({
// badge = "Health & Wellness",
// badgeIcon: BadgeIcon = Newspaper,

// title = "Health Insights for a",
// highlight = "Better Tomorrow.",

// description = "Explore health tips, wellness insights and helpful information from the Baderia Metro Prime healthcare team.",

// breadcrumb = "Blogs",
// breadcrumbLink = "/",

// className = "",
// }) => {
// return (
// <section
// className={`relative overflow-hidden bg-[#063B5C] ${className}`}
// >
// {/* Background Effects */} <div className="absolute inset-0"> <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />


//     <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
//   </div>

//   {/* Content */}
//   <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

//     {/* Breadcrumb */}
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center justify-center gap-2 text-sm text-white/60"
//     >
//       <Link
//         href={breadcrumbLink}
//         className="transition hover:text-white"
//       >
//         Home
//       </Link>

//       <ChevronRight className="h-4 w-4" />

//       <span>{breadcrumb}</span>
//     </motion.div>

//     {/* Hero Content */}
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       className="mx-auto mt-6 max-w-3xl text-center"
//     >
//       {/* Badge */}
//       <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
//         <BadgeIcon className="h-4 w-4" />

//         {badge}
//       </div>

//       {/* Title */}
//       <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//         {title}

//         <span className="block text-[#4DD4C6]">
//           {highlight}
//         </span>
//       </h1>

//       {/* Description */}
//       <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
//         {description}
//       </p>
//     </motion.div>
//   </div>
// </section>

// );
// };

// export default PageHero;

// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight, Newspaper } from "lucide-react";

// const PageHero = ({
//   badge = "",
//   badgeIcon: BadgeIcon = Newspaper,

//   title = "",
//   highlight = "",

//   description = "",

//   breadcrumb = "",
//   breadcrumbLink = "/",

//   className = "",
// }) => {
//   return (
//     <section
//       className={`relative overflow-hidden bg-[#063B5C] ${className}`}
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />

//         <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
//       </div>

//       {/* Content */}
//       <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

//         {/* Breadcrumb */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center justify-center gap-2 text-sm text-white/60"
//         >
//           <Link
//             href={breadcrumbLink}
//             className="transition hover:text-white"
//           >
//             Home
//           </Link>

//           {breadcrumb && (
//             <>
//               <ChevronRight className="h-4 w-4" />
//               <span>{breadcrumb}</span>
//             </>
//           )}
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mx-auto mt-6 max-w-3xl text-center"
//         >
//           {/* Badge */}
//           {badge && (
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
//               <BadgeIcon className="h-4 w-4" />
//               {badge}
//             </div>
//           )}

//           {/* Title */}
//           {(title || highlight) && (
//             <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               {title}

//               {highlight && (
//                 <span className="block text-[#4DD4C6]">
//                   {highlight}
//                 </span>
//               )}
//             </h1>
//           )}

//           {/* Description */}
//           {description && (
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
//               {description}
//             </p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PageHero;



// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight, Newspaper } from "lucide-react";

// const PageHero = ({
//   badge = "",
//   badgeIcon: BadgeIcon = Newspaper,

//   title = "",
//   highlight = "",
//   description = "",

//   breadcrumb = "",
//   breadcrumbLink = "/",

//   // Optional background image
//   backgroundImage = "",

//   className = "",
// }) => {
//   return (
//     <section
//       className={`relative overflow-hidden bg-[#063B5C] ${className}`}
//     >
//       {/* Background Image */}
//       {backgroundImage && (
//         <div
//         //   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
//         //  className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//           }}
//         />
//       )}

//       {/* Blue Overlay */}
//       {backgroundImage && (
//         <div className="absolute inset-0 bg-[#063B5C]/85" />
//       )}

//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />

//         <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
//       </div>

//       {/* Content */}
//       <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

//         {/* Breadcrumb */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center justify-center gap-2 text-sm text-white/60"
//         >
//           <Link
//             href={breadcrumbLink}
//             className="transition hover:text-white"
//           >
//             Home
//           </Link>

//           {breadcrumb && (
//             <>
//               <ChevronRight className="h-4 w-4" />
//               <span>{breadcrumb}</span>
//             </>
//           )}
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mx-auto mt-6 max-w-3xl text-center"
//         >
//           {/* Badge */}
//           {badge && (
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6]">
//               <BadgeIcon className="h-4 w-4" />
//               {badge}
//             </div>
//           )}

//           {/* Title */}
//           {(title || highlight) && (
//             <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               {title}

//               {highlight && (
//                 <span className="block text-[#4DD4C6]">
//                   {highlight}
//                 </span>
//               )}
//             </h1>
//           )}

//           {/* Description */}
//           {description && (
//             <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
//               {description}
//             </p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PageHero;




"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Newspaper } from "lucide-react";

const PageHero = ({
  badge = "",
  badgeIcon: BadgeIcon = Newspaper,

  title = "",
  highlight = "",
  description = "",

  // Old / Simple Breadcrumb
  breadcrumb = "",
  breadcrumbLink = "/",

  // New / Multiple Breadcrumbs
  // Example:
  // [
  //   { label: "Doctors", href: "/doctors" },
  //   { label: "Dr. Rahul Sharma" }
  // ]
  breadcrumbs = [],

  // Optional background image
  backgroundImage = "",

  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden bg-[#063B5C] ${className}`}
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* =========================
          BLUE OVERLAY
      ========================== */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-[#063B5C]/55" />
        // <div className="absolute inset-0 bg-[#063B5C]/85" />
      )}

      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Glow */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        {/* =========================
            BREADCRUMB
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-sm
            text-white/60
          "
        >
          {/* HOME */}
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          {/* =========================
              MULTIPLE BREADCRUMBS
          ========================== */}
          {breadcrumbs.length > 0 ? (
            breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="h-4 w-4 shrink-0" />

                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))
          ) : (
            /* =========================
                OLD SINGLE BREADCRUMB
            ========================== */
            breadcrumb && (
              <>
                <ChevronRight className="h-4 w-4 shrink-0" />

                <Link
                  href={breadcrumbLink}
                  className="transition hover:text-white"
                >
                  {breadcrumb}
                </Link>
              </>
            )
          )}
        </motion.div>

        {/* =========================
            HERO CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-6 max-w-3xl text-center"
        >
          {/* =========================
              BADGE
          ========================== */}
          {badge && (
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#4DD4C6]
                backdrop-blur-sm
              "
            >
              <BadgeIcon className="h-4 w-4" />

              {badge}
            </div>
          )}

          {/* =========================
              TITLE
          ========================== */}
          {(title || highlight) && (
            <h1
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {title}

              {highlight && (
                <span className="block text-[#4DD4C6]">
                  {highlight}
                </span>
              )}
            </h1>
          )}

          {/* =========================
              DESCRIPTION
          ========================== */}
          {description && (
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-white/65
                sm:text-lg
              "
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;



// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight, Newspaper } from "lucide-react";

// const PageHero = ({
// badge = "",
// badgeIcon: BadgeIcon = Newspaper,

// title = "",
// highlight = "",
// description = "",

// breadcrumb = "",
// breadcrumbLink = "/",

// // Dynamic background image
// backgroundImage = "",

// className = "",
// }) => {
// return (
// <section
// className={`relative isolate overflow-hidden bg-[#063B5C] ${className}`}
// >
// {/* ================================
// Background Image
// ================================= */}
// {backgroundImage && (
// <div
// className="absolute inset-0 z-0 scale-110 bg-cover bg-center bg-no-repeat"
// style={{
// backgroundImage: `url(${backgroundImage})`,
// }}
// />
// )}

// ```
//   {/* ================================
//       Blue Overlay
//   ================================= */}
//   <div
//     className={`absolute inset-0 z-10 bg-[#063B5C]/${
//       backgroundImage ? "80" : "100"
//     }`}
//   />

//   {/* ================================
//       Background Effects
//   ================================= */}
//   <div className="absolute inset-0 z-20">
//     {/* Left Glow */}
//     <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0A7A78]/30 blur-3xl" />

//     {/* Right Glow */}
//     <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
//   </div>

//   {/* ================================
//       Main Content
//   ================================= */}
//   <div className="relative z-30 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
    
//     {/* ================================
//         Breadcrumb
//     ================================= */}
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center justify-center gap-2 text-sm text-white/60"
//     >
//       {/* Home */}
//       <Link
//         href={breadcrumbLink}
//         className="transition-colors duration-200 hover:text-white"
//       >
//         Home
//       </Link>

//       {/* Breadcrumb */}
//       {breadcrumb && (
//         <>
//           <ChevronRight className="h-4 w-4 shrink-0" />

//           <span className="max-w-[250px] truncate">
//             {breadcrumb}
//           </span>
//         </>
//       )}
//     </motion.div>

//     {/* ================================
//         Hero Content
//     ================================= */}
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.6,
//         delay: 0.1,
//       }}
//       className="mx-auto mt-6 max-w-4xl text-center"
//     >
//       {/* ================================
//           Badge
//       ================================= */}
//       {badge && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.4,
//             delay: 0.2,
//           }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4DD4C6] backdrop-blur-sm"
//         >
//           <BadgeIcon className="h-4 w-4" />

//           {badge}
//         </motion.div>
//       )}

//       {/* ================================
//           Title
//       ================================= */}
//       {(title || highlight) && (
//         <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//           {title}

//           {highlight && (
//             <span className="block text-[#4DD4C6]">
//               {highlight}
//             </span>
//           )}
//         </h1>
//       )}

//       {/* ================================
//           Description
//       ================================= */}
//       {description && (
//         <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
//           {description}
//         </p>
//       )}
//     </motion.div>
//   </div>
// </section>

// );
// };

// export default PageHero;







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

//   // Old breadcrumb support
//   breadcrumb = "",
//   breadcrumbLink = "/",

//   // Multiple breadcrumbs
//   breadcrumbs = [],

//   // Optional background image
//   backgroundImage = "",

//   // Customization
//   className = "",
//   align = "center",
//   minHeight = "min-h-[430px]",
//   showDecoration = true,
// }) => {
//   const isCenter = align === "center";

//   return (
//     <section
//       className={`
//         relative isolate overflow-hidden
//         bg-[#063B5C]
//         ${minHeight}
//         ${className}
//       `}
//     >
//       {/* =========================================================
//           BACKGROUND IMAGE
//       ========================================================== */}
//       {backgroundImage && (
//         <div
//           className="
//             absolute inset-0
//             bg-cover
//             bg-center
//             bg-no-repeat
//             scale-[1.02]
//           "
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//           }}
//         />
//       )}

//       {/* =========================================================
//           IMAGE OVERLAY
//       ========================================================== */}

//       {/* Dark overall overlay */}
//       <div
//         className="
//           absolute inset-0
//           bg-[#063B5C]/65
//         "
//       />

//       {/* Left → Right gradient */}
//       <div
//         className="
//           absolute inset-0
//           bg-gradient-to-r
//           from-[#063B5C]/95
//           via-[#063B5C]/65
//           to-[#063B5C]/40
//         "
//       />

//       {/* Bottom fade */}
//       <div
//         className="
//           absolute inset-x-0 bottom-0
//           h-40
//           bg-gradient-to-t
//           from-[#063B5C]
//           to-transparent
//         "
//       />

//       {/* =========================================================
//           DECORATIVE BACKGROUND
//       ========================================================== */}
//       {showDecoration && (
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* Left glow */}
//           <div
//             className="
//               absolute
//               -left-32
//               top-1/4
//               h-96
//               w-96
//               rounded-full
//               bg-[#0A7A78]/25
//               blur-[100px]
//             "
//           />

//           {/* Right glow */}
//           <div
//             className="
//               absolute
//               -right-32
//               top-0
//               h-[420px]
//               w-[420px]
//               rounded-full
//               bg-cyan-400/10
//               blur-[110px]
//             "
//           />

//           {/* Small decorative circle */}
//           <div
//             className="
//               absolute
//               right-[12%]
//               top-[18%]
//               h-24
//               w-24
//               rounded-full
//               border
//               border-white/10
//               bg-white/[0.03]
//               backdrop-blur-sm
//             "
//           />

//           {/* Decorative ring */}
//           <div
//             className="
//               absolute
//               -bottom-20
//               left-[8%]
//               h-52
//               w-52
//               rounded-full
//               border
//               border-[#4DD4C6]/10
//             "
//           />
//         </div>
//       )}

//       {/* =========================================================
//           CONTENT
//       ========================================================== */}
//       <div
//         className={`
//           relative z-10
//           mx-auto
//           flex
//           w-full
//           max-w-7xl
//           flex-col
//           px-4
//           py-20
//           sm:px-6
//           sm:py-24
//           lg:px-8
//           lg:py-28
//           ${isCenter ? "items-center text-center" : "items-start text-left"}
//         `}
//       >
//         {/* =======================================================
//             BREADCRUMB
//         ======================================================== */}
//         <motion.nav
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.5,
//             ease: "easeOut",
//           }}
//           aria-label="Breadcrumb"
//           className="
//             flex
//             flex-wrap
//             items-center
//             gap-1.5
//             text-sm
//             text-white/55
//           "
//         >
//           {/* Home */}
//           <Link
//             href="/"
//             className="
//               rounded-md
//               px-1
//               py-0.5
//               transition
//               duration-200
//               hover:bg-white/5
//               hover:text-white
//             "
//           >
//             Home
//           </Link>

//           {/* Multiple breadcrumbs */}
//           {breadcrumbs.length > 0
//             ? breadcrumbs.map((item, index) => (
//                 <React.Fragment key={`${item.label}-${index}`}>
//                   <ChevronRight
//                     className="h-4 w-4 shrink-0 text-white/30"
//                     strokeWidth={1.7}
//                   />

//                   {item.href ? (
//                     <Link
//                       href={item.href}
//                       className="
//                         max-w-[180px]
//                         truncate
//                         rounded-md
//                         px-1
//                         py-0.5
//                         transition
//                         duration-200
//                         hover:bg-white/5
//                         hover:text-white
//                       "
//                     >
//                       {item.label}
//                     </Link>
//                   ) : (
//                     <span
//                       className="
//                         max-w-[220px]
//                         truncate
//                         px-1
//                         font-medium
//                         text-white
//                       "
//                     >
//                       {item.label}
//                     </span>
//                   )}
//                 </React.Fragment>
//               ))
//             : breadcrumb && (
//                 <>
//                   <ChevronRight
//                     className="h-4 w-4 shrink-0 text-white/30"
//                     strokeWidth={1.7}
//                   />

//                   <Link
//                     href={breadcrumbLink}
//                     className="
//                       rounded-md
//                       px-1
//                       py-0.5
//                       transition
//                       duration-200
//                       hover:bg-white/5
//                       hover:text-white
//                     "
//                   >
//                     {breadcrumb}
//                   </Link>
//                 </>
//               )}
//         </motion.nav>

//         {/* =======================================================
//             HERO CONTENT
//         ======================================================== */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.65,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className={`
//             mt-7
//             max-w-4xl
//             ${isCenter ? "mx-auto" : ""}
//           `}
//         >
//           {/* =====================================================
//               BADGE
//           ====================================================== */}
//           {badge && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.96,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.45,
//                 delay: 0.18,
//               }}
//               className="
//                 inline-flex
//                 items-center
//                 gap-2.5
//                 rounded-full
//                 border
//                 border-[#4DD4C6]/20
//                 bg-[#4DD4C6]/10
//                 px-4
//                 py-2
//                 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//                 backdrop-blur-md
//               "
//             >
//               <span
//                 className="
//                   flex
//                   h-6
//                   w-6
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#4DD4C6]/15
//                 "
//               >
//                 <BadgeIcon
//                   className="h-3.5 w-3.5 text-[#4DD4C6]"
//                   strokeWidth={2}
//                 />
//               </span>

//               <span
//                 className="
//                   text-[11px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#73E0D4]
//                 "
//               >
//                 {badge}
//               </span>
//             </motion.div>
//           )}

//           {/* =====================================================
//               TITLE
//           ====================================================== */}
//           {(title || highlight) && (
//             <h1
//               className="
//                 mt-6
//                 text-4xl
//                 font-bold
//                 leading-[1.08]
//                 tracking-[-0.03em]
//                 text-white
//                 sm:text-5xl
//                 lg:text-[4.25rem]
//               "
//             >
//               {title}

//               {highlight && (
//                 <>
//                   {" "}
//                   <span
//                     className="
//                       bg-gradient-to-r
//                       from-[#4DD4C6]
//                       to-[#7BE8DD]
//                       bg-clip-text
//                       text-transparent
//                     "
//                   >
//                     {highlight}
//                   </span>
//                 </>
//               )}
//             </h1>
//           )}

//           {/* =====================================================
//               DESCRIPTION
//           ====================================================== */}
//           {description && (
//             <p
//               className={`
//                 mt-6
//                 max-w-2xl
//                 text-base
//                 leading-7
//                 text-white/70
//                 sm:text-lg
//                 sm:leading-8
//                 ${isCenter ? "mx-auto" : ""}
//               `}
//             >
//               {description}
//             </p>
//           )}

//           {/* =====================================================
//               SMALL ACCENT LINE
//           ====================================================== */}
//           <motion.div
//             initial={{
//               width: 0,
//               opacity: 0,
//             }}
//             animate={{
//               width: 56,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.45,
//             }}
//             className={`
//               mt-8
//               h-1
//               rounded-full
//               bg-[#4DD4C6]
//               ${isCenter ? "mx-auto" : ""}
//             `}
//           />
//         </motion.div>
//       </div>

//       {/* =========================================================
//           BOTTOM DECORATIVE GLOW
//       ========================================================== */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-1/2
//           h-px
//           w-[70%]
//           -translate-x-1/2
//           bg-gradient-to-r
//           from-transparent
//           via-[#4DD4C6]/30
//           to-transparent
//         "
//       />
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

  // Multiple Breadcrumbs
  // [
  //   { label: "Doctors", href: "/doctors" },
  //   { label: "Dr. Rahul Sharma" }
  // ]
  breadcrumbs = [],

  // Optional background image
  backgroundImage = "",

  // Custom options
  className = "",
  align = "center",
  minHeight = "min-h-[430px]",
  showDecoration = true,
}) => {
  const isCenter = align === "center";

  return (
    <section
      className={`
        relative isolate overflow-hidden
        bg-[#063B5C]
        ${minHeight}
        ${className}
      `}
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      {backgroundImage && (
        <motion.div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{
            scale: 1.04,
            opacity: 0,
          }}
          animate={{
            scale: [1.04, 1.075, 1.04],
            x: ["0%", "0.5%", "0%"],
            y: ["0%", "-0.4%", "0%"],
            opacity: 1,
          }}
          transition={{
            scale: {
              duration: 22,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            x: {
              duration: 22,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            y: {
              duration: 22,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
        />
      )}

      {/* =========================================================
          DARK OVERLAY
      ========================================================== */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#063B5C]/65
        "
      /> */}

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#063B5C]/95
          via-[#063B5C]/70
          to-[#063B5C]/40
        "
      />

      {/* =========================================================
          TOP SOFT GRADIENT
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-black/10
          to-transparent
        "
      />

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-44
          bg-gradient-to-t
          from-[#063B5C]
          to-transparent
        "
      />

      {/* =========================================================
          ANIMATED DECORATIVE GLOWS
      ========================================================== */}
      {showDecoration && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* -----------------------------------------------------
              LEFT GLOW
          ------------------------------------------------------ */}
          <motion.div
            className="
              absolute
              -left-32
              top-1/4
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#0A7A78]/20
              blur-[110px]
            "
            animate={{
              x: [0, 70, 0, -40, 0],
              y: [0, -25, 20, -10, 0],
              scale: [1, 1.08, 1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* -----------------------------------------------------
              RIGHT GLOW
          ------------------------------------------------------ */}
          <motion.div
            className="
              absolute
              -right-32
              bottom-0
              h-[430px]
              w-[430px]
              rounded-full
              bg-cyan-400/10
              blur-[120px]
            "
            animate={{
              x: [0, -60, 0, 40, 0],
              y: [0, 25, -20, 10, 0],
              scale: [1, 1.08, 1, 1.05, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* -----------------------------------------------------
              TOP RIGHT SOFT GLOW
          ------------------------------------------------------ */}
          <motion.div
            className="
              absolute
              right-[18%]
              top-[-100px]
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#4DD4C6]/[0.06]
              blur-[90px]
            "
            animate={{
              x: [0, 30, 0, -20, 0],
              y: [0, 25, 0, -15, 0],
              scale: [1, 1.12, 1, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* -----------------------------------------------------
              DECORATIVE CIRCLE
          ------------------------------------------------------ */}
          <motion.div
            className="
              absolute
              right-[10%]
              top-[20%]
              h-24
              w-24
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              backdrop-blur-sm
            "
            animate={{
              y: [0, -12, 0, 8, 0],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* -----------------------------------------------------
              DECORATIVE RING
          ------------------------------------------------------ */}
          <motion.div
            className="
              absolute
              -bottom-24
              left-[7%]
              h-52
              w-52
              rounded-full
              border
              border-[#4DD4C6]/10
            "
            animate={{
              rotate: [0, 360],
              scale: [1, 1.04, 1],
            }}
            transition={{
              rotate: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      )}

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div
        className={`
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
          ${
            isCenter
              ? "items-center text-center"
              : "items-start text-left"
          }
        `}
      >
        {/* =======================================================
            BREADCRUMB
        ======================================================== */}
        <motion.nav
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          aria-label="Breadcrumb"
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-1.5
            text-sm
            text-white/55
          "
        >
          {/* HOME */}
          <Link
            href="/"
            className="
              rounded-md
              px-1
              py-0.5
              transition
              duration-200
              hover:bg-white/5
              hover:text-white
            "
          >
            Home
          </Link>

          {/* =====================================================
              MULTIPLE BREADCRUMBS
          ====================================================== */}
          {breadcrumbs.length > 0
            ? breadcrumbs.map((item, index) => (
                <React.Fragment
                  key={`${item.label}-${index}`}
                >
                  <ChevronRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-white/30
                    "
                    strokeWidth={1.7}
                  />

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="
                        max-w-[180px]
                        truncate
                        rounded-md
                        px-1
                        py-0.5
                        transition
                        duration-200
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="
                        max-w-[220px]
                        truncate
                        px-1
                        font-medium
                        text-white
                      "
                    >
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))
            : breadcrumb && (
                <>
                  <ChevronRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-white/30
                    "
                    strokeWidth={1.7}
                  />

                  <Link
                    href={breadcrumbLink}
                    className="
                      rounded-md
                      px-1
                      py-0.5
                      transition
                      duration-200
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    {breadcrumb}
                  </Link>
                </>
              )}
        </motion.nav>

        {/* =======================================================
            HERO CONTENT
        ======================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            mt-7
            max-w-4xl
            ${isCenter ? "mx-auto" : ""}
          `}
        >
          {/* =====================================================
              BADGE
          ====================================================== */}
          {badge && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: "easeOut",
              }}
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#4DD4C6]/20
                bg-[#4DD4C6]/10
                px-4
                py-2
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                backdrop-blur-md
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#4DD4C6]/15
                "
              >
                <BadgeIcon
                  className="
                    h-3.5
                    w-3.5
                    text-[#4DD4C6]
                  "
                  strokeWidth={2}
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#73E0D4]
                "
              >
                {badge}
              </span>
            </motion.div>
          )}

          {/* =====================================================
              TITLE
          ====================================================== */}
          {(title || highlight) && (
            <motion.h1
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                lg:text-[3.25rem]
              "
            >
              {title}

              {highlight && (
                <>
                  {" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#4DD4C6]
                      to-[#7BE8DD]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {highlight}
                  </span>
                </>
              )}
            </motion.h1>
          )}

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}
          {description && (
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.32,
                ease: "easeOut",
              }}
              className={`
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-white/70
                sm:text-lg
                sm:leading-8
                ${isCenter ? "mx-auto" : ""}
              `}
            >
              {description}
            </motion.p>
          )}

          {/* =====================================================
              ACCENT LINE
          ====================================================== */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 56,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.48,
              ease: "easeOut",
            }}
            className={`
              mt-8
              h-1
              rounded-full
              bg-[#4DD4C6]
              shadow-[0_0_20px_rgba(77,212,198,0.25)]
              ${isCenter ? "mx-auto" : ""}
            `}
          />
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================== */}
      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#4DD4C6]/30
          to-transparent
        "
        animate={{
          opacity: [0.35, 0.8, 0.35],
          scaleX: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default PageHero;

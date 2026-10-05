// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const AnimatedNumber = ({ value, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   const isInView = useInView(ref, {
//     once: true,
//     amount: 0.5,
//   });

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     const duration = 1400;
//     const steps = duration / 30;
//     const increment = value / steps;

//     const timer = setInterval(() => {
//       start += increment;

//       if (start >= value) {
//         start = value;
//         clearInterval(timer);
//       }

//       setCount(Math.floor(start));
//     }, 30);

//     return () => clearInterval(timer);
//   }, [isInView, value]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const HospitalStats = ({ stats = [] }) => {
//   return (
//     <section className="relative z-10 -mt-8 px-4">
//       <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-4">
//         {stats.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <motion.div
//               key={item.id || item.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.12,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 y: -4,
//                 transition: {
//                   duration: 0.3,
//                 },
//               }}
//               className="
//                 group relative cursor-pointer
//                 border-b border-slate-100
//                 p-5 text-center
//                 transition-all duration-300
//                 hover:bg-slate-50
//                 sm:border-b-0 sm:border-r
//                 last:border-r-0
//               "
//             >
//               {/* Icon */}
//               <motion.div
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className={`
//                   mx-auto flex h-11 w-11
//                   items-center justify-center
//                   rounded-xl
//                   ${item.bg}
//                   ${item.color}
//                   transition-all duration-300
//                 `}
//               >
//                 <Icon className="h-5 w-5" />
//               </motion.div>

//               {/* Number */}
//               <h3
//                 className={`
//                   mt-3 text-2xl font-black
//                   ${item.color}
//                   sm:text-3xl
//                 `}
//               >
//                 <AnimatedNumber
//                   value={item.number}
//                   suffix={item.suffix}
//                 />
//               </h3>

//               {/* Label */}
//               <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
//                 {item.label}
//               </p>

//               {/* Hover Line */}
//               <div
//                 className={`
//                   absolute bottom-0 left-1/2
//                   h-0.5 w-0
//                   -translate-x-1/2
//                   rounded-full
//                   ${item.line}
//                   transition-all duration-500
//                   group-hover:w-16
//                 `}
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default HospitalStats;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hospitalStats } from "../data/stats";

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const steps = duration / 30;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const HospitalStats = () => {
  return (
    <section className="relative z-10 -mt-8 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-4">
        {hospitalStats?.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id || item.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.25 },
              }}
              className="
                group relative
                flex cursor-pointer
                items-center gap-4
                border-b border-slate-100
                p-5
                transition-all duration-300
                hover:bg-slate-50
                lg:border-b-0 lg:border-r
                lg:last:border-r-0
              "
            >
              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{ duration: 0.25 }}
                className={`
                  flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-xl
                  ${item.bg}
                  ${item.color}
                  transition-all duration-300
                  group-hover:shadow-sm
                `}
              >
                <Icon className="h-6 w-6" />
              </motion.div>

              {/* CONTENT */}
              <div className="min-w-0">
                <h3
                  className={`
                    text-2xl font-black
                    leading-none
                    ${item.color}
                    sm:text-3xl
                  `}
                >
                  <AnimatedNumber
                    value={item.value}
                    suffix={item.suffix}
                  />
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className={`
                  absolute bottom-0 left-5
                  h-0.5 w-0
                  rounded-full
                  ${item.line}
                  transition-all duration-500
                  group-hover:w-10
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HospitalStats;
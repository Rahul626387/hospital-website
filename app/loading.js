
"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#087f8c] via-[#075985] to-[#064e6b]">
      <div className="flex flex-col items-center">

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-full bg-white blur-xl"
          />

          {/* Icon */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
            <HeartPulse
              size={42}
              className="text-[#087f8c]"
            />
          </div>
        </motion.div>

        {/* Hospital Name */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-xl font-bold text-white"
        >
          Baderia Metroprime
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-1 text-sm text-white/80"
        >
          Multi Speciality Hospital
        </motion.p>

        {/* Loading Dots */}
        <div className="mt-6 flex gap-2">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{
                y: [0, -7, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: item * 0.15,
              }}
              className="h-2.5 w-2.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { HeartPulse } from "lucide-react";

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#087f8c] via-[#075985] to-[#064e6b]">
      
//       <div className="flex flex-col items-center">

//         {/* Animated Logo */}
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative"
//         >
//           {/* Glow */}
//           <motion.div
//             animate={{
//               scale: [1, 1.35, 1],
//               opacity: [0.5, 0.15, 0.5],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//             }}
//             className="absolute inset-0 rounded-full bg-white blur-2xl"
//           />

//           {/* Logo */}
//           <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
//             <HeartPulse
//               size={42}
//               strokeWidth={2.5}
//               className="text-[#087f8c]"
//             />
//           </div>
//         </motion.div>

//         {/* Hospital Name */}
//         <motion.h1
//           initial={{ y: 15, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mt-5 text-xl font-bold tracking-wide text-white"
//         >
//           Baderia Metroprime
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.35 }}
//           className="mt-1 text-sm text-white/80"
//         >
//           Multi Speciality Hospital
//         </motion.p>

//         {/* Loading Dots */}
//         <div className="mt-6 flex gap-2">
//           {[0, 1, 2].map((dot) => (
//             <motion.span
//               key={dot}
//               className="h-2.5 w-2.5 rounded-full bg-white"
//               animate={{
//                 y: [0, -7, 0],
//                 opacity: [0.4, 1, 0.4],
//               }}
//               transition={{
//                 duration: 0.8,
//                 repeat: Infinity,
//                 delay: dot * 0.15,
//               }}
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
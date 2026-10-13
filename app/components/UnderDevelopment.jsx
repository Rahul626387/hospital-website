
// import Link from "next/link";
// import { Clock, Construction, ArrowLeft } from "lucide-react";

// export default function UnderDevelopment({
//   title = "Page Under Development",
//   description = "We are working on this page. Please check back soon!",
// }) {
//   return (
//     <main className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4 py-12">
//       <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
//         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
//           <Construction size={40} />
//         </div>

//         <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
//           <Clock size={16} />
//           Work in Progress
//         </div>

//         <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
//           {title}
//         </h1>

//         <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
//           {description}
//         </p>

//         <div className="mx-auto mt-8 h-2 max-w-xs overflow-hidden rounded-full bg-slate-100">
//           <div className="h-full w-2/3 animate-pulse rounded-full bg-indigo-600" />
//         </div>

//         <p className="mt-3 text-xs text-slate-400">
//           We are building something better for you.
//         </p>

//         <Link
//           href="/"
//           className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
//         >
//           <ArrowLeft size={18} />
//           Back to Home
//         </Link>
//       </div>
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-4">
      <div className="w-full max-w-lg text-center">

        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-blue-600"
        >
          <Construction size={48} />

          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-500"
          />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Page Under Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-gray-500"
        >
          We are working on something awesome.
          <br />
          Please check back soon!
        </motion.p>

        {/* Animated Dots */}
        <div className="mt-7 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="h-2.5 w-2.5 rounded-full bg-blue-600"
            />
          ))}
        </div>

        {/* Loading Bar */}
        <div className="mx-auto mt-8 h-1.5 max-w-xs overflow-hidden rounded-full bg-gray-100">
          <motion.div
            animate={{ x: ["-100%", "250%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/3 rounded-full bg-blue-600"
          />
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

      </div>
    </div>
  );
}


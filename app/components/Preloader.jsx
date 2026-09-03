
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 👈 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#087f8c] via-[#075985] to-[#064e6b]"
        >
          <div className="flex flex-col items-center">

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.15, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-white blur-2xl"
              />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                <HeartPulse
                  size={42}
                  strokeWidth={2.5}
                  className="text-[#087f8c]"
                />
              </div>
            </motion.div>

            {/* Hospital Name */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-xl font-bold text-white"
            >
              Baderia Metroprime
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-1 text-sm text-white/80"
            >
              Multi Speciality Hospital
            </motion.p>

            {/* Loading Line */}
            <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                className="h-full rounded-full bg-white"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-xs tracking-wider text-white/70"
            >
              Loading...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const highlights = [
//   "Advanced healthcare",
//   "Expert doctors",
//   "Better patient care",
// ];

// export default function HeroHeading() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % highlights.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.h1
//       initial={{ opacity: 0, y: 34 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, delay: 0.08 }}
//       className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl"
//     >
//       Compassionate care

//       <span className="relative mt-2 block min-h-[1.1em] text-[#8de0d4]">
//         <AnimatePresence mode="wait">
//           <motion.span
//             key={highlights[current]}
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -25 }}
//             transition={{
//               duration: 0.5,
//               ease: "easeOut",
//             }}
//             className="absolute left-0 top-0 whitespace-nowrap"
//           >
//             {highlights[current]}
//           </motion.span>
//         </AnimatePresence>
//       </span>
//     </motion.h1>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "Advanced healthcare",
  "Expert doctors",
//   "Compassionate care",
  "Better patient care",
];

export default function HeroHeading() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));

          if (displayText.length === currentText.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));

          if (displayText.length === 0) {
            setDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      deleting ? 45 : 80
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, textIndex]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.08 }}
      className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl"
    >
      Compassionate care

      <span className="mt-2 block min-h-[1.1em] text-[#8de0d4]">
        {displayText}
        <span className="ml-1 animate-pulse">|</span>
      </span>
    </motion.h1>
  );
}
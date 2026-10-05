// "use client";

// import React from "react";
// import { FiX } from "react-icons/fi";

// const ModalComponent = ({
//   isOpen,
//   onClose,
//   title,
//   description,
//   children,
//   size = "md",
// }) => {
//   if (!isOpen) return null;

//   const sizes = {
//     sm: "max-w-md",
//     md: "max-w-lg",
//     lg: "max-w-2xl",
//     xl: "max-w-4xl",
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">

//       {/* Modal */}
//       <div
//         className={`w-full ${sizes[size]} overflow-hidden rounded-2xl bg-white shadow-2xl`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">
//               {title}
//             </h2>

//             {description && (
//               <p className="mt-1 text-sm text-gray-500">
//                 {description}
//               </p>
//             )}
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
//           >
//             <FiX size={20} />
//           </button>
//         </div>

//         {/* Dynamic Body */}
//         <div className="max-h-[75vh] overflow-y-auto p-6">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalComponent;


// "use client";

// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiX } from "react-icons/fi";

// const ModalComponent = ({
//   isOpen,
//   onClose,
//   title,
//   description,
//   children,
//   size = "md",
// }) => {
//   const sizes = {
//     sm: "max-w-md",
//     md: "max-w-lg",
//     lg: "max-w-2xl",
//     xl: "max-w-4xl",
//   };

//   // ESC key + body scroll lock
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscape);
//       document.body.style.overflow = "hidden";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen, onClose]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {/* ================= BACKDROP ================= */}
//           <motion.div
//             className="absolute inset-0 bg-slate-950/50 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* ================= MODAL ================= */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.94,
//               y: 25,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.96,
//               y: 15,
//             }}
//             transition={{
//               duration: 0.25,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             onClick={(e) => e.stopPropagation()}
//             className={`
//               relative
//               w-full
//               ${sizes[size]}
//               overflow-hidden
//               rounded-2xl
//               border border-white/60
//               bg-white
//               shadow-[0_25px_70px_rgba(0,0,0,0.22)]
//             `}
//           >
//             {/* ================= HEADER ================= */}
//             <div
//               className="
//                 flex
//                 items-start
//                 justify-between
//                 gap-4
//                 bg-gradient-to-r
//                 from-[#087f8c]
//                 to-[#075985]
//                 px-5
//                 py-4
//               "
//             >
//               {/* Title */}
//               <div className="min-w-0">
//                 <h2 className="text-lg font-bold tracking-tight text-white">
//                   {title}
//                 </h2>

//                 {description && (
//                   <p className="mt-1 text-sm leading-5 text-white/80">
//                     {description}
//                   </p>
//                 )}
//               </div>

//               {/* Close Button */}
//               <motion.button
//                 type="button"
//                 onClick={onClose}
//                 whileHover={{
//                   scale: 1.08,
//                   rotate: 3,
//                 }}
//                 whileTap={{
//                   scale: 0.9,
//                 }}
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-xl
//                   bg-white/15
//                   text-white
//                   backdrop-blur-sm
//                   transition-all
//                   duration-200
//                   hover:bg-white/25
//                 "
//               >
//                 <FiX size={19} />
//               </motion.button>
//             </div>

//             {/* ================= BODY ================= */}
//             <div
//               className="
//                 max-h-[75vh]
//                 overflow-y-auto
//                 px-5
//                 py-5
//                 scrollbar-thin
//                 scrollbar-track-transparent
//                 scrollbar-thumb-slate-300
//               "
//             >
//               {children}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ModalComponent;



"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const ModalComponent = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  // ESC key + body scroll lock
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            isolate
            flex
            items-center
            justify-center
            p-3
            sm:p-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ================= BACKDROP ================= */}
          <motion.div
            className="
              absolute
              inset-0
              z-0
              bg-slate-950/55
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ================= MODAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className={`
              relative
              z-10
              w-full
              ${sizes[size]}
              overflow-hidden
              rounded-2xl
              border
              border-white/60
              bg-white
              shadow-[0_25px_70px_rgba(0,0,0,0.28)]
            `}
          >
            {/* ================= HEADER ================= */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-3
                bg-gradient-to-r
                from-[#087f8c]
                to-[#075985]
                px-4
                py-3.5
                sm:px-5
                sm:py-4
              "
            >
              {/* Title */}
              <div className="min-w-0">
                <h2 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
                  {title}
                </h2>

                {description && (
                  <p className="mt-0.5 line-clamp-2 text-[11px] leading-4 text-white/75 sm:text-xs">
                    {description}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/15
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:bg-white/25
                "
              >
                <FiX size={17} />
              </motion.button>
            </div>

            {/* ================= BODY ================= */}
            <div
              className="
                max-h-[80vh]
                overflow-y-auto
                px-4
                py-4
                sm:px-5
                sm:py-5
                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-slate-300
              "
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;

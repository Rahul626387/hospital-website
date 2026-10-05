// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowUpRight, ShieldCheck } from "lucide-react";

// const DoctorCard = ({ doctor, index = 0 }) => {
//   return (
//     // <motion.div
//     //   initial={{
//     //     opacity: 0,
//     //     y: 30,
//     //   }}
//     //   whileInView={{
//     //     opacity: 1,
//     //     y: 0,
//     //   }}
//     //   viewport={{
//     //     once: true,
//     //     amount: 0.2,
//     //   }}
//     //   transition={{
//     //     duration: 0.55,
//     //     delay: index * 0.08,
//     //     ease: [0.22, 1, 0.36, 1],
//     //   }}
//     //   className="group"
//     // >
//     //   <Link
//     //     href={doctor.href || "/doctors"}
//     //     className="block"
//     //   >
//     //     <div
//     //       className="
//     //         relative
//     //         overflow-hidden
//     //         rounded-[1.75rem]
//     //         bg-white
//     //         shadow-[0_10px_35px_rgba(6,59,92,0.08)]
//     //         transition-all
//     //         duration-500
//     //         hover:-translate-y-2
//     //         hover:shadow-[0_25px_60px_rgba(6,59,92,0.18)]
//     //       "
//     //     >

//     //       {/* IMAGE */}
//     //       <div className="relative h-80 overflow-hidden">

//     //         <Image
//     //           src={doctor.image}
//     //           alt={doctor.name}
//     //           fill
//     //           className="
//     //             object-cover
//     //             transition-transform
//     //             duration-700
//     //             ease-out
//     //             group-hover:scale-110
//     //           "
//     //           sizes="
//     //             (max-width: 640px) 100vw,
//     //             (max-width: 1024px) 50vw,
//     //             25vw
//     //           "
//     //         />

//     //         {/* Image Overlay */}
//     //         <div
//     //           className="
//     //             absolute
//     //             inset-0
//     //             bg-gradient-to-t
//     //             from-[#063B5C]/70
//     //             via-transparent
//     //             to-transparent
//     //             opacity-70
//     //           "
//     //         />

//     //         {/* Verified Badge */}
//     //         <div
//     //           className="
//     //             absolute
//     //             bottom-4
//     //             left-4
//     //             right-4
//     //             rounded-xl
//     //             border
//     //             border-white/20
//     //             bg-black/30
//     //             px-3
//     //             py-2.5
//     //             text-white
//     //             backdrop-blur-md
//     //             transition-all
//     //             duration-300
//     //             group-hover:bg-[#063B5C]/70
//     //           "
//     //         >
//     //           <div className="flex items-center gap-2">
//     //             <ShieldCheck className="h-4 w-4 text-teal-300" />

//     //             <span className="text-xs font-semibold">
//     //               Verified Specialist
//     //             </span>
//     //           </div>
//     //         </div>

//     //         {/* Arrow */}
//     //         <div
//     //           className="
//     //             absolute
//     //             right-4
//     //             top-4
//     //             flex
//     //             h-10
//     //             w-10
//     //             items-center
//     //             justify-center
//     //             rounded-full
//     //             bg-white/90
//     //             text-[#063B5C]
//     //             shadow-lg
//     //             transition-all
//     //             duration-300
//     //             group-hover:rotate-45
//     //             group-hover:bg-[#0A7A78]
//     //             group-hover:text-white
//     //           "
//     //         >
//     //           <ArrowUpRight className="h-5 w-5" />
//     //         </div>
//     //       </div>

//     //       {/* CONTENT */}
//     //       <div className="p-6">

//     //         <h3
//     //           className="
//     //             text-xl
//     //             font-black
//     //             text-[#063B5C]
//     //             transition-colors
//     //             duration-300
//     //             group-hover:text-[#0A7A78]
//     //           "
//     //         >
//     //           {doctor.name}
//     //         </h3>

//     //         <p className="mt-1 font-semibold text-[#0A7A78]">
//     //           {doctor.specialty}
//     //         </p>

//     //         {doctor.experience && (
//     //           <p className="mt-2 text-xs text-slate-500">
//     //             {doctor.experience}
//     //           </p>
//     //         )}

//     //         {/* Bottom */}

//     //       </div>

//     //     </div>
//     //   </Link>
//     // </motion.div>
//     <motion.div
//   initial={{ opacity: 0, y: 25 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.2 }}
//   transition={{
//     duration: 0.55,
//     delay: index * 0.08,
//     ease: [0.22, 1, 0.36, 1],
//   }}
//   className="group"
// >
//   <Link href={doctor.href || "/doctors"} className="block">

//     {/* CARD */}
//     <div
//       className="
//         relative
//         mx-auto
//         h-[390px]
//         w-full
//         max-w-[290px]
//         overflow-hidden
//         rounded-[20px]
//         border-[2px]
//         border-white
//         bg-slate-200
//         shadow-[0_12px_35px_rgba(6,59,92,0.15)]
//         transition-all
//         duration-500
//         group-hover:-translate-y-2
//         group-hover:shadow-[0_25px_55px_rgba(6,59,92,0.25)]
//       "
//     >

//       {/* DOCTOR IMAGE */}
//       <Image
//         src={doctor.image}
//         alt={doctor.name}
//         fill
//         className="
//           object-cover
//           transition-transform
//           duration-700
//           ease-out
//           group-hover:scale-105
//         "
//         sizes="
//           (max-width: 640px) 80vw,
//           (max-width: 1024px) 40vw,
//           290px
//         "
//       />

//       {/* DARK GRADIENT */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-t
//           from-black/90
//           via-black/20
//           to-transparent
//         "
//       />

//       {/* VERIFIED */}
//       <div
//         className="
//           absolute
//           right-3
//           top-3
//           flex
//           h-8
//           w-8
//           items-center
//           justify-center
//           rounded-full
//           bg-white/90
//           shadow-md
//           backdrop-blur
//         "
//       >
//         <ShieldCheck
//           className="h-4 w-4 text-[#0A7A78]"
//         />
//       </div>

//       {/* HOVER OVERLAY */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-[#063B5C]/10
//           opacity-0
//           transition-opacity
//           duration-500
//           group-hover:opacity-100
//         "
//       />

//       {/* BOTTOM CONTENT */}
//       <div
//         className="
//           absolute
//           bottom-0
//           left-0
//           right-0
//           p-4
//           text-white
//         "
//       >

//         {/* NAME */}
//         <div
//           className="
//             translate-y-4
//             transition-all
//             duration-500
//             group-hover:translate-y-0
//           "
//         >
//           <h3
//             className="
//               flex
//               items-center
//               gap-1.5
//               text-[17px]
//               font-extrabold
//               tracking-tight
//             "
//           >
//             {doctor.name}

//             <span
//               className="
//                 flex
//                 h-4
//                 w-4
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-[#F59E0B]
//               "
//             >
//               <span className="text-[9px] text-white">
//                 ✓
//               </span>
//             </span>
//           </h3>

//           {/* SPECIALTY */}
//           <p
//             className="
//               mt-1
//               text-[11px]
//               font-medium
//               leading-4
//               text-white/75
//             "
//           >
//             {doctor.specialty}
//             {doctor.experience && (
//               <>
//                 
//                 • {doctor.experience}
//               </>
//             )}
//           </p>
//         </div>

//       </div>

//     </div>
//   </Link>
// </motion.div>
//   );
// };

// export default DoctorCard;

// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ShieldCheck } from "lucide-react";

// const DoctorCard = ({ doctor, index = 0 }) => {
//     // console.log("first",doctor)
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="group"
//     >
//       <Link
//         href={doctor.href || "/doctors"}
//         className="block"
//       >
//         <div
//           className="
//             overflow-hidden
//             rounded-[1.75rem]
//             bg-white
//             text-[#063B5C]
//             shadow-[0_10px_35px_rgba(6,59,92,0.10)]
//             transition-all
//             duration-500
//             hover:-translate-y-2
//             hover:shadow-[0_25px_55px_rgba(6,59,92,0.18)]
//           "
//         >
//           {/* ================= IMAGE ================= */}
//           <div className="relative h-80 overflow-hidden">

//             <Image
//               src={doctor.image_url}
//               alt={doctor.name}
//               fill
//               className="
//                 object-cover
//                 transition-transform
//                 duration-700
//                 ease-out
//                 group-hover:scale-105
//               "
//               sizes="
//                 (max-width: 640px) 100vw,
//                 (max-width: 1024px) 50vw,
//                 25vw
//               "
//             />

//             {/* IMAGE GRADIENT */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-t
//                 from-[#063B5C]/50
//                 via-transparent
//                 to-transparent
//                 opacity-70
//               "
//             />

//             {/* VERIFIED SPECIALIST */}
//             {/* <div
//               className="
//                 absolute
//                 inset-x-4
//                 bottom-4
//                 rounded-xl
//                 border
//                 border-white/20
//                 bg-black/30
//                 p-3
//                 text-white
//                 backdrop-blur-md
//                 transition-all
//                 duration-300
//                 group-hover:bg-[#063B5C]/75
//               "
//             >
//               <div className="flex items-center gap-2">

//                 <ShieldCheck
//                   className="h-4 w-4 text-teal-300"
//                 />

//                 <span className="text-xs font-semibold">
//                   Verified Specialist
//                 </span>

//               </div>
//             </div> */}
//           </div>

//           {/* ================= CONTENT ================= */}
//           <div className="p-">

//             {/* NAME */}
//             <h3
//               className="
//                 text-xl
//                 font-black
//                 text-[#063B5C]
//                 transition-colors
//                 duration-300
//                 group-hover:text-[#0A7A78]
//               "
//             >
//               {doctor.name}
//             </h3>

//             {/* SPECIALTY */}
//             <p className="mt-1 font-semibold text-[#0A7A78]">
//               {doctor.specialty}
//             </p>

//             {/* EXPERIENCE */}
//             {doctor.experience && (
//               <p className="mt-2 text-xs text-slate-500">
//                 {doctor.experience}
//               </p>
//             )}

//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default DoctorCard;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Stethoscope } from "lucide-react";
const DoctorCard = ({ doctor, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      
      <Link
        href={doctor?.href || `/doctors/${doctor?.id || ""}`}
        className="block"
      >
        
        <div className=" relative overflow-hidden rounded-[1.75rem] border-2 border-slate-200/70 bg-white text-[#063B5C] shadow-[0_10px_35px_rgba(6,59,92,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0A7A78]/20 hover:shadow-[0_25px_55px_rgba(6,59,92,0.16)] ">
          
          {/* ===================================== IMAGE ====================================== */}
          <div className="relative h-[330px] overflow-hidden">
            
            <Image
              src={doctor?.image_url}
              alt={doctor?.name || "Doctor"}
              fill
              priority={index < 2}
              className=" object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 "
              sizes=" (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw "
            />
            {/* IMAGE OVERLAY */}
            <div className=" absolute inset-0 bg-gradient-to-t from-[#063B5C]/85 via-[#063B5C]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100 " />
            {/* ===================================== TOP BADGE ====================================== */}
            <div className=" absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-white backdrop-blur-md ">
              
              <ShieldCheck className="h-3.5 w-3.5 text-teal-300" />
              <span className="text-[10px] font-bold uppercase tracking-wide">
                
                Specialist
              </span>
            </div>
            {/* ===================================== HOVER ACTION ====================================== */}
            <div className=" absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 ">
              
              <ArrowUpRight className="h-5 w-5" />
            </div>
            {/* ===================================== IMAGE BOTTOM INFO ====================================== */}
            <div className=" absolute bottom-5 left-5 right-5 translate-y-2 transition-transform duration-500 group-hover:translate-y-0 ">
              
              <p className="mb-1 text-xs font-semibold text-teal-300">
                
                Medical Specialist
              </p>
              <h3 className=" text-2xl font-black tracking-tight text-white ">
                
                {doctor?.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-white/80">
                
                {doctor?.specialty || doctor?.qualification}
              </p>
            </div>
          </div>
         
        </div>
      </Link>
    </motion.div>
  );
};
export default DoctorCard;

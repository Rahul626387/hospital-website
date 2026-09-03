// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiHeart,
//   FiPlus,
//   FiActivity,
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiShield,
//   FiArrowRight,
//   FiCheckCircle,
// } from "react-icons/fi";

// import axios from "axios";
// import { useRouter } from "next/navigation";

// const Loginpage = () => {
//     const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post("http://10.10.34.67:3000/api/auth/login",{
//         email: formData.email,
//         password: formData.password,
//       }
//     );

//     const data = response.data;

//     console.log("Login Response:", data);

//     if (data.status) {
//       // User data save
//       localStorage.setItem(
//         "user",
//         JSON.stringify(data.user)
//       );

//       // Login status
//       localStorage.setItem("isLoggedIn", "true");

//       // Dashboard
//       router.push("/admin");
//     } else {
//       alert(data.message || "Invalid email or password");
//     }

//   } catch (error) {
//     console.error("Login Error:", error);

//     if (error.response) {
//       // API se error response
//       alert(
//         error.response.data?.message ||
//         "Invalid email or password"
//       );
//     } else {
//       // Server connection error
//       alert("Unable to connect to server");
//     }
//   }
// };

//   // ============================================
//   // ANIMATION
//   // ============================================

//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.96,
//       y: 20,
//     },

//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,

//       transition: {
//         duration: 0.7,
//         ease: "easeOut",

//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 15,
//     },

//     visible: {
//       opacity: 1,
//       y: 0,

//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <main
//       className="
//         relative
//         h-screen
//         w-full
//         overflow-hidden
//         flex
//         items-center
//         justify-center
//         p-3
//         sm:p-5
//         bg-cover
//         bg-center
//         bg-no-repeat
//       "
//       style={{
//         backgroundImage:
//           "url('/assets/images/HospitalBuilding.png')",
//       }}
//     >
//       {/* ============================================
//           BACKGROUND OVERLAY
//       ============================================ */}

//       <div className="absolute inset-0 bg-slate-950/40" />

//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-br
//           from-[#087f8c]/30
//           via-transparent
//           to-[#075985]/30
//         "
//       />

//       {/* ============================================
//           BACKGROUND BLUR
//       ============================================ */}

//       <motion.div
//         animate={{
//           x: [0, 25, 0],
//           y: [0, -20, 0],
//           scale: [1, 1.08, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           -top-32
//           -left-32
//           w-96
//           h-96
//           rounded-full
//           bg-cyan-300/20
//           blur-3xl
//         "
//       />

//       <motion.div
//         animate={{
//           x: [0, -25, 0],
//           y: [0, 20, 0],
//           scale: [1, 1.12, 1],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           -bottom-40
//           -right-32
//           w-[450px]
//           h-[450px]
//           rounded-full
//           bg-blue-400/20
//           blur-3xl
//         "
//       />

//       {/* ============================================
//           MAIN GLASS CARD
//       ============================================ */}

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="
//           relative
//           z-10

//           w-full
//           max-w-4xl

//           h-auto
//           lg:h-[560px]

//           overflow-hidden

//           rounded-[28px]

//           bg-white/75
//           backdrop-blur-2xl

//           border
//           border-white/70

//           shadow-[0_30px_100px_rgba(0,0,0,0.30)]

//           grid
//           lg:grid-cols-2
//         "
//       >
//         {/* ============================================
//             CARD GLOSS
//         ============================================ */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             z-30

//             bg-gradient-to-br
//             from-white/40
//             via-transparent
//             to-transparent
//           "
//         />

//         {/* TOP SHINE */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             top-0
//             left-10
//             right-10
//             h-px
//             bg-white
//             z-40
//           "
//         />

//         {/* ============================================
//             LEFT BRANDING
//         ============================================ */}

//         <section
//           className="
//             relative
//             hidden
//             lg:flex

//             overflow-hidden

//             bg-gradient-to-br
//             from-[#006f7a]/95
//             via-[#087f8c]/90
//             to-[#075985]/95

//             p-9

//             text-white
//           "
//         >
//           {/* LEFT SHINE */}

//           <div
//             className="
//               absolute
//               inset-0
//               pointer-events-none

//               bg-gradient-to-br
//               from-white/15
//               via-transparent
//               to-black/10
//             "
//           />

//           {/* ========================================
//               FLOATING CIRCLE 1
//           ======================================== */}

//           <motion.div
//             animate={{
//               scale: [1, 1.08, 1],
//               rotate: [0, 8, 0],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               -top-28
//               -left-28

//               w-72
//               h-72

//               rounded-full

//               bg-white/10
//             "
//           />

//           {/* ========================================
//               FLOATING CIRCLE 2
//           ======================================== */}

//           <motion.div
//             animate={{
//               scale: [1, 1.12, 1],
//               x: [0, -10, 0],
//             }}
//             transition={{
//               duration: 9,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               -bottom-32
//               -right-20

//               w-80
//               h-80

//               rounded-full

//               bg-white/10
//             "
//           />

//           {/* ========================================
//               SMALL GLOW
//           ======================================== */}

//           <motion.div
//             animate={{
//               opacity: [0.2, 0.45, 0.2],
//               scale: [1, 1.15, 1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               top-1/2
//               left-1/2

//               -translate-x-1/2
//               -translate-y-1/2

//               w-64
//               h-64

//               rounded-full

//               bg-cyan-300/10

//               blur-3xl
//             "
//           />

//           {/* ========================================
//               LEFT CONTENT
//           ======================================== */}

//           <div className="relative z-10 flex flex-col w-full">
//             {/* ======================================
//                 LOGO
//             ====================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="flex items-center gap-3"
//             >
//               {/* LOGO BOX */}

//               <motion.div
//                 whileHover={{
//                   rotate: -5,
//                   scale: 1.05,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                 }}
//                 className="
//                   w-12
//                   h-12

//                   shrink-0

//                   rounded-xl

//                   bg-white

//                   flex
//                   items-center
//                   justify-center

//                   shadow-lg

//                   overflow-hidden
//                 "
//               >
//                 {/* 
//                     REAL LOGO USE:

//                     <Image
//                       src="/assets/logo/logo.png"
//                       alt="Baderia Metroprime"
//                       width={42}
//                       height={42}
//                       className="object-contain"
//                     />
//                 */}

//                 <div className="relative text-[#087f8c]">
//                   <FiHeart size={25} />

//                   <span
//                     className="
//                       absolute
//                       -right-1
//                       -top-1

//                       w-4
//                       h-4

//                       bg-red-500

//                       rounded-full

//                       flex
//                       items-center
//                       justify-center

//                       text-white
//                     "
//                   >
//                     <FiPlus size={9} />
//                   </span>
//                 </div>
//               </motion.div>

//               {/* BRAND */}

//               <div>
//                 <h2 className="text-[17px] font-bold tracking-tight">
//                   Baderia Metroprime
//                 </h2>

//                 <p className="text-[10px] text-white/70">
//                   Multi Speciality Hospital
//                 </p>
//               </div>
//             </motion.div>

//             {/* ======================================
//                 CENTER CONTENT
//             ====================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="
//                 flex-1
//                 flex
//                 flex-col
//                 justify-center
//               "
//             >
//               {/* SMART HEALTHCARE */}

//               <div className="flex items-center gap-2 mb-3">
//                 <FiActivity
//                   size={14}
//                   className="text-cyan-200"
//                 />

//                 <span
//                   className="
//                     text-[10px]
//                     font-semibold
//                     tracking-[0.2em]
//                     text-cyan-200
//                   "
//                 >
//                   SMART HEALTHCARE
//                 </span>
//               </div>

//               {/* HEADING */}

//               <h1
//                 className="
//                   text-[38px]
//                   font-bold
//                   leading-[1.1]
//                   tracking-tight
//                 "
//               >
//                 Better care.
//                 <br />

//                 <span className="text-cyan-200">
//                   Better health.
//                 </span>
//               </h1>

//               {/* DESCRIPTION */}

//               <p
//                 className="
//                   text-sm
//                   text-white/70

//                   mt-4

//                   leading-6

//                   max-w-sm
//                 "
//               >
//                 Advanced healthcare management designed
//                 to connect patients, doctors and hospital
//                 teams in one secure platform.
//               </p>

//               {/* ====================================
//                   FEATURES
//               ==================================== */}

//               <div className="mt-6 space-y-2.5">
//                 {[
//                   "Connected healthcare management",
//                   "Secure hospital staff portal",
//                   "Smart and efficient workflow",
//                 ].map((item, index) => (
//                   <motion.div
//                     key={item}
//                     initial={{
//                       opacity: 0,
//                       x: -15,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     transition={{
//                       delay: 0.6 + index * 0.1,
//                     }}
//                     className="
//                       flex
//                       items-center
//                       gap-2

//                       text-[11px]
//                       text-white/75
//                     "
//                   >
//                     <FiCheckCircle
//                       size={13}
//                       className="text-cyan-200"
//                     />

//                     {item}
//                   </motion.div>
//                 ))}
//               </div>

//               {/* ====================================
//                   STATS
//               ==================================== */}

//               <div className="flex gap-3 mt-7">
//                 {[
//                   ["24/7", "Healthcare"],
//                   ["100%", "Secure"],
//                   ["Smart", "Management"],
//                 ].map(([number, label], index) => (
//                   <motion.div
//                     key={label}
//                     initial={{
//                       opacity: 0,
//                       y: 15,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     transition={{
//                       delay: 0.8 + index * 0.1,
//                       duration: 0.4,
//                     }}
//                     whileHover={{
//                       y: -4,
//                     }}
//                     className="
//                       px-4
//                       py-3

//                       rounded-xl

//                       bg-white/10
//                       backdrop-blur-md

//                       border
//                       border-white/10

//                       shadow-lg
//                     "
//                   >
//                     <p className="text-base font-bold">
//                       {number}
//                     </p>

//                     <p className="text-[9px] text-white/60">
//                       {label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* COPYRIGHT */}

//             <motion.p
//               variants={itemVariants}
//               className="text-[9px] text-white/40"
//             >
//               © 2026 Baderia Metroprime Multi Speciality
//               Hospital
//             </motion.p>
//           </div>
//         </section>

//         {/* ============================================
//             RIGHT LOGIN
//         ============================================ */}

//         <section
//           className="
//             relative

//             flex
//             items-center
//             justify-center

//             px-6
//             py-8

//             sm:px-10

//             bg-white/35

//             backdrop-blur-xl
//           "
//         >
//           {/* RIGHT GLOW */}

//           <div
//             className="
//               pointer-events-none
//               absolute

//               -top-20
//               -right-20

//               w-52
//               h-52

//               rounded-full

//               bg-[#087f8c]/10

//               blur-3xl
//             "
//           />

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 25,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               delay: 0.25,
//               duration: 0.55,
//               ease: "easeOut",
//             }}
//             className="
//               relative
//               z-10

//               w-full
//               max-w-sm
//             "
//           >
//             {/* ======================================
//                 MOBILE LOGO
//             ====================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="
//                 lg:hidden

//                 flex
//                 items-center
//                 gap-3

//                 mb-7
//               "
//             >
//               <div
//                 className="
//                   w-11
//                   h-11

//                   rounded-xl

//                   bg-[#087f8c]

//                   text-white

//                   flex
//                   items-center
//                   justify-center

//                   shadow-lg
//                   shadow-[#087f8c]/20
//                 "
//               >
//                 <FiHeart size={21} />
//               </div>

//               <div>
//                 <h2 className="font-bold text-slate-800">
//                   Baderia Metroprime
//                 </h2>

//                 <p className="text-[10px] text-slate-400">
//                   Multi Speciality Hospital
//                 </p>
//               </div>
//             </motion.div>

//             {/* ======================================
//                 HEADING
//             ====================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="mb-6"
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <span
//                   className="
//                     w-1.5
//                     h-1.5
//                     rounded-full
//                     bg-[#087f8c]
//                   "
//                 />

//                 <p
//                   className="
//                     text-xs
//                     font-semibold
//                     text-[#087f8c]
//                   "
//                 >
//                   STAFF PORTAL
//                 </p>
//               </div>

//               <h2
//                 className="
//                   text-2xl
//                   font-bold
//                   text-slate-900
//                   tracking-tight
//                 "
//               >
//                 Welcome back
//               </h2>

//               <p
//                 className="
//                   text-xs
//                   text-slate-400
//                   mt-2
//                 "
//               >
//                 Sign in to access your hospital dashboard.
//               </p>
//             </motion.div>

//             {/* ======================================
//                 LOGIN FORM
//             ====================================== */}

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-4"
//             >
//               {/* ====================================
//                   EMAIL
//               ==================================== */}

//               <motion.div
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{
//                   delay: 0.35,
//                 }}
//               >
//                 <label
//                   className="
//                     block
//                     text-xs
//                     font-semibold
//                     text-slate-600
//                     mb-1.5
//                   "
//                 >
//                   Email address
//                 </label>

//                 <div className="relative">
//                   <FiMail
//                     size={17}
//                     className="
//                       absolute
//                       left-3.5
//                       top-1/2
//                       -translate-y-1/2

//                       text-slate-400

//                       pointer-events-none
//                     "
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                     className="
//                       w-full
//                       h-12

//                       pl-10
//                       pr-3

//                       rounded-xl

//                       border
//                       border-white/80

//                       bg-white/65

//                       backdrop-blur-md

//                       text-sm
//                       text-slate-800

//                       placeholder:text-slate-400

//                       outline-none

//                       transition-all
//                       duration-200

//                       focus:bg-white
//                       focus:border-[#087f8c]
//                       focus:ring-4
//                       focus:ring-[#087f8c]/10

//                       shadow-sm
//                     "
//                   />
//                 </div>
//               </motion.div>

//               {/* ====================================
//                   PASSWORD
//               ==================================== */}

//               <motion.div
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{
//                   delay: 0.45,
//                 }}
//               >
//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     mb-1.5
//                   "
//                 >
//                   <label
//                     className="
//                       text-xs
//                       font-semibold
//                       text-slate-600
//                     "
//                   >
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="
//                       text-[11px]
//                       font-semibold
//                       text-[#087f8c]

//                       hover:text-[#075985]

//                       transition-colors
//                     "
//                   >
//                     Forgot password?
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <FiLock
//                     size={17}
//                     className="
//                       absolute
//                       left-3.5
//                       top-1/2
//                       -translate-y-1/2

//                       text-slate-400

//                       pointer-events-none
//                     "
//                   />

//                   <input
//                     type={
//                       showPassword
//                         ? "text"
//                         : "password"
//                     }
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     required
//                     className="
//                       w-full
//                       h-12

//                       pl-10
//                       pr-11

//                       rounded-xl

//                       border
//                       border-white/80

//                       bg-white/65

//                       backdrop-blur-md

//                       text-sm
//                       text-slate-800

//                       placeholder:text-slate-400

//                       outline-none

//                       transition-all
//                       duration-200

//                       focus:bg-white
//                       focus:border-[#087f8c]
//                       focus:ring-4
//                       focus:ring-[#087f8c]/10

//                       shadow-sm
//                     "
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowPassword(
//                         !showPassword
//                       )
//                     }
//                     className="
//                       absolute
//                       right-3.5
//                       top-1/2
//                       -translate-y-1/2

//                       text-slate-400

//                       hover:text-[#087f8c]

//                       transition-colors
//                     "
//                   >
//                     {showPassword ? (
//                       <FiEyeOff size={17} />
//                     ) : (
//                       <FiEye size={17} />
//                     )}
//                   </button>
//                 </div>
//               </motion.div>

//               {/* ====================================
//                   REMEMBER
//               ==================================== */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   delay: 0.55,
//                 }}
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >
//                 <label
//                   className="
//                     flex
//                     items-center
//                     gap-2

//                     text-xs
//                     text-slate-500

//                     cursor-pointer
//                   "
//                 >
//                   <input
//                     type="checkbox"
//                     className="
//                       w-3.5
//                       h-3.5

//                       accent-[#087f8c]
//                     "
//                   />

//                   Remember me
//                 </label>

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-1

//                     text-[10px]
//                     text-slate-400
//                   "
//                 >
//                   <FiShield size={12} />

//                   Secure login
//                 </div>
//               </motion.div>

//               {/* ====================================
//                   LOGIN BUTTON
//               ==================================== */}

//               <motion.button
//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.65,
//                 }}
//                 whileHover={{
//                   scale: 1.015,
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 type="submit"
//                 className="
//                   group

//                   w-full
//                   h-12

//                   rounded-xl

//                   bg-gradient-to-r
//                   from-[#087f8c]
//                   to-[#075985]

//                   hover:from-[#076b76]
//                   hover:to-[#064e72]

//                   text-white

//                   text-sm
//                   font-semibold

//                   flex
//                   items-center
//                   justify-center
//                   gap-2

//                   transition-all

//                   shadow-lg
//                   shadow-[#087f8c]/25

//                   border
//                   border-white/20
//                 "
//               >
//                 Sign in

//                 <FiArrowRight
//                   size={17}
//                   className="
//                     group-hover:translate-x-1
//                     transition-transform
//                   "
//                 />
//               </motion.button>
//             </form>

//             {/* ======================================
//                 SECURITY CARD
//             ====================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 10,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.8,
//               }}
//               className="
//                 mt-6

//                 flex
//                 items-center
//                 gap-2.5

//                 p-3

//                 rounded-xl

//                 bg-white/55

//                 backdrop-blur-md

//                 border
//                 border-white/70

//                 shadow-sm
//               "
//             >
//               <div
//                 className="
//                   w-8
//                   h-8

//                   shrink-0

//                   rounded-lg

//                   bg-[#087f8c]/10

//                   text-[#087f8c]

//                   flex
//                   items-center
//                   justify-center
//                 "
//               >
//                 <FiShield size={15} />
//               </div>

//               <div>
//                 <p
//                   className="
//                     text-[10px]
//                     font-semibold
//                     text-slate-600
//                   "
//                 >
//                   Secure Hospital Portal
//                 </p>

//                 <p
//                   className="
//                     text-[9px]
//                     text-slate-400
//                     mt-0.5
//                   "
//                 >
//                   Authorized hospital staff only.
//                 </p>
//               </div>
//             </motion.div>

//             {/* ======================================
//                 FOOTER
//             ====================================== */}

//             <motion.p
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: 0.9,
//               }}
//               className="
//                 text-center
//                 text-[9px]
//                 text-slate-400
//                 mt-5
//               "
//             >
//               Baderia Metroprime Multi Speciality Hospital
//             </motion.p>
//           </motion.div>
//         </section>
//       </motion.div>
//     </main>
//   );
// };

// export default Loginpage;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
  Loader2,
  ShieldCheck,
  HeartPulse,
  Activity,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  // =====================================================
  // STATE
  // =====================================================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // =====================================================
  // VALIDATION
  // =====================================================

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLoginClick = async () => {
    const validationErrors = validate();

    setErrors(validationErrors);

    setTouched({
      email: true,
      password: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://10.10.34.67:3000/api/auth/login",
        {
          email: email.trim(),
          password: password,
        }
      );

      const data = response.data;

      console.log("Login Response:", data);

      if (data.status) {
        // ==========================================
        // SAVE USER
        // ==========================================

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        // ==========================================
        // LOGIN STATUS
        // ==========================================

        localStorage.setItem("isLoggedIn", "true");

        // ==========================================
        // DASHBOARD
        // ==========================================

        router.push("/admin");
      } else {
        setErrors({
          login: data.message || "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        setErrors({
          login:
            error.response.data?.message ||
            "Invalid email or password",
        });
      } else {
        setErrors({
          login: "Unable to connect to server",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // ENTER KEY
  // =====================================================

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      handleLoginClick();
    }
  };

  // =====================================================
  // ANIMATION
  // =====================================================

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="h-screen w-full overflow-hidden bg-slate-50">
      <div className="relative flex h-full w-full">

        {/* =====================================================
            LEFT IMAGE SECTION
        ===================================================== */}

        <motion.section
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="
            relative
            hidden
            h-full
            w-[52%]
            overflow-hidden
            lg:block
          "
        >
          {/* Hospital Background */}

          <motion.img
            src="/assets/images/HospitalBuilding.png"
            alt="Baderia Metroprime Hospital"
            initial={{
              scale: 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Main Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#003f46]/90
              via-[#087f8c]/35
              to-slate-950/90
            "
          />

          {/* Additional Theme Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#087f8c]/20
              via-transparent
              to-[#075985]/30
            "
          />

          {/* =================================================
              TOP BRAND
          ================================================= */}

          <div
            className="
              absolute
              left-7
              right-7
              top-7
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-3">

              {/* Logo */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -3,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-xl
                "
              >
                <div className="relative text-[#087f8c]">
                  <HeartPulse size={27} />

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-red-500
                      text-white
                    "
                  >
                    +
                  </span>
                </div>
              </motion.div>

              {/* Brand */}

              <div className="text-white">
                <h2 className="text-lg font-bold">
                  Baderia Metroprime
                </h2>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white/70
                  "
                >
                  Multi Speciality Hospital
                </p>
              </div>
            </div>

            {/* System Online */}

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-2
                text-white
                backdrop-blur-md
                xl:flex
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                "
              />

              <span className="text-[10px] font-medium">
                System Online
              </span>
            </div>
          </div>

          {/* =================================================
              FLOATING HEART
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-10
              top-[32%]
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/20
              bg-white/10
              text-white
              shadow-xl
              backdrop-blur-md
            "
          >
            <HeartPulse size={26} />
          </motion.div>

          {/* =================================================
              FLOATING ACTIVITY
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-8
              top-[45%]
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
            "
          >
            <Activity size={21} />
          </motion.div>

          {/* =================================================
              DECORATIVE CIRCLE
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-32
              -right-20
              h-80
              w-80
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
            "
          />

          {/* =================================================
              BOTTOM CONTENT
          ================================================= */}

          <div
            className="
              absolute
              bottom-8
              left-8
              right-8
              text-white
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              {/* Badge */}

              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
              >
                <Stethoscope size={13} />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[1px]
                  "
                >
                  HEALTHCARE MANAGEMENT
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  xl:text-5xl
                "
              >
                Better Care.
                <br />

                <span className="text-cyan-200">
                  Better Healthcare.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-3
                  max-w-lg
                  text-xs
                  leading-5
                  text-white/70
                  xl:text-sm
                "
              >
                One secure platform for managing patients,
                doctors, departments and hospital operations.
              </p>

              {/* Features */}

              <div className="mt-4 space-y-2">
                {[
                  "Connected healthcare management",
                  "Secure hospital staff portal",
                  "Smart hospital workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-[11px]
                      text-white/75
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="text-cyan-200"
                    />

                    {item}
                  </div>
                ))}
              </div>

              {/* Stats */}

              <div className="mt-5 flex gap-3">

                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <p className="text-base font-bold">
                    24/7
                  </p>

                  <p className="text-[9px] text-white/60">
                    Patient Care
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <p className="text-base font-bold">
                    100%
                  </p>

                  <p className="text-[9px] text-white/60">
                    Secure
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <p className="text-base font-bold">
                    Smart
                  </p>

                  <p className="text-[9px] text-white/60">
                    Management
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* =====================================================
            RIGHT LOGIN SECTION
        ===================================================== */}

        <motion.section
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-white
            lg:w-[48%]
          "
        >
          {/* Mobile Background */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#087f8c]/5
              via-white
              to-[#075985]/5
              lg:hidden
            "
          />

          {/* Decorative Circles */}

          <div
            className="
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-[#087f8c]/5
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24
              h-56
              w-56
              rounded-full
              bg-[#075985]/5
            "
          />

          {/* =================================================
              FORM CONTAINER
          ================================================= */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-[430px]
              px-6
              sm:px-10
              xl:px-14
            "
          >

            {/* =================================================
                MOBILE BRAND
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mb-7 lg:hidden"
            >
              <div className="mb-4 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#087f8c]
                    text-white
                    shadow-lg
                  "
                >
                  <HeartPulse size={23} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-800">
                    Baderia Metroprime
                  </h2>

                  <p className="text-[10px] text-slate-400">
                    Multi Speciality Hospital
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-7"
            >
              <div className="mb-2 flex items-center gap-2">

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#087f8c]
                  "
                />

                <p
                  className="
                    text-xs
                    font-semibold
                    tracking-wide
                    text-[#087f8c]
                  "
                >
                  STAFF PORTAL
                </p>
              </div>

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-800
                "
              >
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to continue to your dashboard
              </p>
            </motion.div>

            {/* =================================================
                LOGIN ERROR
            ================================================= */}

            {errors.login && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mb-5
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                  text-xs
                  font-medium
                  text-red-600
                "
              >
                {errors.login}
              </motion.div>
            )}

            {/* =================================================
                EMAIL
            ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.15,
              }}
              className="mb-5"
            >
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your email"
                  autoComplete="username"
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    bg-slate-50
                    pl-11
                    pr-4
                    text-sm
                    text-slate-800
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#087f8c]/10
                    ${
                      errors.email && touched.email
                        ? "border-red-400 focus:border-red-400"
                        : "border-slate-200 focus:border-[#087f8c]"
                    }
                  `}
                />
              </div>

              {errors.email && touched.email && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-1.5 text-xs text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* =================================================
                PASSWORD
            ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.25,
              }}
              className="mb-5"
            >
              <div className="mb-2 flex items-center justify-between">

                <label
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    alert("Please contact administrator.")
                  }
                  className="
                    text-xs
                    font-semibold
                    text-[#087f8c]
                    transition
                    hover:text-[#075985]
                  "
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">

                <LockKeyhole
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    bg-slate-50
                    pl-11
                    pr-12
                    text-sm
                    text-slate-800
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#087f8c]/10
                    ${
                      errors.password && touched.password
                        ? "border-red-400 focus:border-red-400"
                        : "border-slate-200 focus:border-[#087f8c]"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    transition
                    hover:text-[#087f8c]
                  "
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.password && touched.password && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-1.5 text-xs text-red-500"
                >
                  {errors.password}
                </motion.p>
              )}
            </motion.div>

            {/* =================================================
                REMEMBER ME
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
              }}
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >
              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                "
              >
                <input
                  type="checkbox"
                  className="
                    h-3.5
                    w-3.5
                    accent-[#087f8c]
                  "
                />

                Remember me
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-[10px]
                  text-slate-400
                "
              >
                <ShieldCheck size={13} />

                Secure login
              </div>
            </motion.div>

            {/* =================================================
                LOGIN BUTTON
            ================================================= */}

            <motion.button
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              whileHover={{
                scale: loading ? 1 : 1.015,
              }}
              whileTap={{
                scale: loading ? 1 : 0.98,
              }}
              type="button"
              disabled={loading}
              onClick={handleLoginClick}
              className="
                group
                relative
                h-13
                w-full
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-[#087f8c]
                to-[#075985]
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#087f8c]/20
                transition
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {/* Button Shine */}

              {!loading && (
                <motion.span
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="
                    absolute
                    bottom-0
                    top-0
                    w-16
                    skew-x-[-20deg]
                    bg-white/20
                  "
                />
              )}

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </span>
            </motion.button>

            {/* =================================================
                SECURITY CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2.5
                rounded-xl
                border
                border-slate-100
                bg-slate-50/80
                px-3
                py-3
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-emerald-50
                  text-emerald-500
                "
              >
                <ShieldCheck size={16} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    text-slate-600
                  "
                >
                  Secure Hospital Portal
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    text-slate-400
                  "
                >
                  Authorized hospital staff only.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
                mt-7
                text-center
                text-[10px]
                text-slate-300
              "
            >
              © {new Date().getFullYear()} Baderia Metroprime
              Multi Speciality Hospital
            </motion.p>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default LoginPage;